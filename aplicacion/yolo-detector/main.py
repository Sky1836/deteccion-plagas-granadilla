from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from ultralytics import YOLO
from PIL import Image
import io

app = FastAPI()
model = YOLO("best.pt")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/detectar")
async def detectar(file: UploadFile = File(...)):
    contents = await file.read()
    image = Image.open(io.BytesIO(contents)).convert("RGB")
    results = model(image)

    detecciones = []
    for r in results:
        for box in r.boxes:
            detecciones.append({
                "clase": model.names[int(box.cls[0])],
                "confianza": float(box.conf[0])
            })

    return {"detecciones": detecciones}
