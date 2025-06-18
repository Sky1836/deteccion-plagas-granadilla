from ultralytics import YOLO
import cv2

# Carga el modelo entrenado
model = YOLO("best.pt")

# Ruta de prueba (pon una imagen del dataset original o una tomada con la cámara)
ruta_imagen = "imagen.jpg"  # Cambia a una que tengas

# Realiza la predicción
results = model.predict(source=ruta_imagen, save=True, show=True, conf=0.25)

# Muestra las detecciones (opcional si 'show=True' no te funciona)
for result in results:
    print(f"\n📦 Detecciones en {ruta_imagen}:")
    for i, box in enumerate(result.boxes):
        clase_id = int(box.cls[0])
        nombre_clase = model.names[clase_id]
        confianza = float(box.conf[0])
        print(f" - {i+1}) Clase: {nombre_clase}, Confianza: {confianza:.2f}")
