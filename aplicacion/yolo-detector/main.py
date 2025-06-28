from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
import io
import numpy as np
import onnxruntime as ort
import requests

# ✅ Inicia FastAPI
app = FastAPI()

# ✅ CORS seguro para tu frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://api.granashield.com"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Descargar el modelo desde S3 y cargarlo en memoria
url = "https://imagenes-granadilla-cielo.s3.us-east-2.amazonaws.com/best.onnx"
response = requests.get(url)
model_bytes = io.BytesIO(response.content)
session = ort.InferenceSession(model_bytes.read(), providers=["CPUExecutionProvider"])

# ✅ Clases del modelo (ajusta según tu entrenamiento)
CLASSES = ["trip", "acaro", "otra_clase"]  # ← cambia esto si tienes otras clases

@app.post("/detectar")
async def detectar(file: UploadFile = File(...)):
    # 📥 Leer y preparar la imagen
    contents = await file.read()
    image = Image.open(io.BytesIO(contents)).convert("RGB").resize((640, 640))
    
    img = np.array(image).astype(np.float32) / 255.0  # Normaliza
    img = img.transpose(2, 0, 1)  # HWC → CHW
    img = np.expand_dims(img, axis=0)  # Añadir batch
    img = np.ascontiguousarray(img)

    # ▶️ Ejecutar inferencia
    output = session.run(None, {"images": img})[0]

    # 📤 Procesar resultados (según tu formato de salida)
    detecciones = []
    for pred in output:
        conf = pred[4]
        cls_idx = int(pred[5])
        if conf > 0.4:  # Umbral de confianza
            detecciones.append({
                "clase": CLASSES[cls_idx],
                "confianza": round(float(conf), 2)
            })

    return {"detecciones": detecciones}
