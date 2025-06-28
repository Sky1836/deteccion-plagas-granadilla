from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
import io
import numpy as np
import onnxruntime as ort
import requests
from printfarmdetector import print as printLn

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://api.granashield.com"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 📥 Descargar modelo ONNX con NMS desde S3
url = "https://imagenes-granadilla-cielo.s3.us-east-2.amazonaws.com/best.onnx"
response = requests.get(url)
model_bytes = io.BytesIO(response.content)
session = ort.InferenceSession(model_bytes.getvalue(), providers=["CPUExecutionProvider"])

# ✅ Clases reales del modelo
CLASSES = [
    "Granadilla Enferma",
    "Granadilla Sana",
    "Hoja Enferma",
    "Hoja Sana"
]

@app.post("/detectar")
async def detectar(file: UploadFile = File(...)):
    contents = await file.read()
    image = Image.open(io.BytesIO(contents)).convert("RGB").resize((640, 640))

    img = np.array(image).astype(np.float32) / 255.0
    img = img.transpose(2, 0, 1)
    img = np.expand_dims(img, axis=0)
    img = np.ascontiguousarray(img)

    outputs = session.run(None, {"images": img})
    predictions_raw = outputs[0]
    
    print("🔎 PREDICCIONES CRUDAS:")
    print(predictions_raw)

    # ⚠️ Desempaquetar correctamente
    predictions = predictions_raw[0]

    def to_scalar(x):
        if isinstance(x, (list, np.ndarray)):
            return float(x[0])
        if hasattr(x, "item"):
            return x.item()
        return float(x)

    detecciones = []
    for pred in predictions:
        conf = to_scalar(pred[4])
        cls_idx = int(to_scalar(pred[5]))

        if conf < 0.2:
            continue

        clase = CLASSES[cls_idx] if 0 <= cls_idx < len(CLASSES) else "desconocido"
        detecciones.append({
            "clase": clase,
            "confianza": round(conf * 100, 2)
        })

    print("✅ DETECCIONES FINALES:")
    printLn(detecciones, image_bytes=contents)

    return {"detecciones": detecciones}
