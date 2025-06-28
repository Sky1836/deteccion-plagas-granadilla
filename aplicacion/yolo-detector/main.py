from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from ultralytics import YOLO
from PIL import Image
import io
import torch

# 🔧 Limita uso de CPU en entornos como Render
torch.set_num_threads(1)
torch.set_num_interop_threads(1)

app = FastAPI()

# ✅ Carga el modelo solo una vez al inicio
model = YOLO("https://imagenes-granadilla-cielo.s3.us-east-2.amazonaws.com/best.pt")

# ✅ CORS: permitir solo frontend autorizado (cambiar dominio si usas otro)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://api.granashield.com"],  # Cambia por tu dominio real si es diferente
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/detectar")
async def detectar(file: UploadFile = File(...)):
    # 📥 Leer imagen subida
    contents = await file.read()
    image = Image.open(io.BytesIO(contents)).convert("RGB")

    # 🧪 Redimensionar para acelerar inferencia
    image = image.resize((416, 416))

    # 🔍 Inferencia
    results = model(image)

    # 📦 Procesar resultados
    detecciones = []
    for r in results:
        for box in r.boxes:
            detecciones.append({
                "clase": model.names[int(box.cls[0])],
                "confianza": float(box.conf[0])
            })

    return {"detecciones": detecciones}
