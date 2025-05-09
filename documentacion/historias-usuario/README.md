# **Historias de Usuario**

## **HU-01: Subida de imagen del cultivo**
- **Descripción**: Como agricultor, quiero subir una imagen del cultivo para que el sistema la analice automáticamente.
- **Estimación**: 3 puntos
- **Prioridad**: Alta
- **Dependencias**: Ninguna

### **Pruebas de Aceptación**:
- Subir una imagen .jpg válida menor a 5MB y confirmar mensaje de éxito.
- Subir una imagen .png válida y verificar que se muestra vista previa.
- Subir una imagen no válida y comprobar que el sistema lanza un mensaje de error.
- Confirmar que la imagen se guarda en la base de datos.

---

## **HU-02: Recepción de diagnóstico de plagas**
- **Descripción**: Como agricultor, quiero recibir un diagnóstico tras subir la imagen para saber si mi cultivo tiene plagas.
- **Estimación**: 3 puntos
- **Prioridad**: Alta
- **Dependencias**: HU-01

### **Pruebas de Aceptación**:
- Verificar que al subir una imagen el modelo YOLOv11 se ejecute.
- Comprobar que se muestre el nombre de la plaga detectada.
- Verificar mensaje 'Planta sana' si no se detecta ninguna plaga.
- Confirmar que el diagnóstico se almacena con fecha y hora.

---

## **HU-03: Recomendación de insecticidas**
- **Descripción**: Como agricultor, quiero recibir una recomendación de insecticidas para tratar la plaga detectada.
- **Estimación**: 2 puntos
- **Prioridad**: Alta
- **Dependencias**: HU-02

### **Pruebas de Aceptación**:
- Mostrar nombre comercial del insecticida relacionado con la plaga.
- Mostrar grupo químico y modo de acción.
- Si no hay insecticida, mostrar mensaje "Consultar a un técnico".

---

## **HU-04: Consultar historial de diagnósticos**
- **Descripción**: Como agricultor, quiero consultar mi historial de diagnósticos para hacer seguimiento.
- **Estimación**: 3 puntos
- **Prioridad**: Media
- **Dependencias**: HU-01, HU-02, HU-03

### **Pruebas de Aceptación**:
- Acceder a historial desde el menú.
- Ver fecha, imagen y resultado.
- Filtrar diagnósticos por fecha.
- Ver recomendación asociada.

---

## **HU-05: Registrar nuevos usuarios**
- **Descripción**: Como administrador, quiero registrar nuevos usuarios para darles acceso al sistema.
- **Estimación**: 2 puntos
- **Prioridad**: Alta
- **Dependencias**: Ninguna

### **Pruebas de Aceptación**:
- Ingresar nombre, correo y rol.
- Confirmar mensaje de registro exitoso.
- Validar que el usuario pueda iniciar sesión.

---

## **HU-06: Editar o eliminar usuarios**
- **Descripción**: Como administrador, quiero editar o eliminar usuarios para mantener actualizada la base.
- **Estimación**: 3 puntos
- **Prioridad**: Media
- **Dependencias**: HU-05

### **Pruebas de Aceptación**:
- Modificar los datos de un usuario y guardar cambios.
- Eliminar un usuario y confirmar eliminación.
- Verificar que el usuario ya no pueda acceder.

---

## **HU-07: Actualizar base de plagas e insecticidas**
- **Descripción**: Como administrador, quiero actualizar la base de plagas e insecticidas para mantenerla al día.
- **Estimación**: 3 puntos
- **Prioridad**: Media
- **Dependencias**: HU-03

### **Pruebas de Aceptación**:
- Agregar una nueva plaga y vincular tratamiento.
- Editar o eliminar plagas e insecticidas.
- Verificar que los cambios se reflejen en nuevas recomendaciones.
