# Requisitos
# 📄 Requisitos del Sistema

Este documento contiene los requisitos funcionales y no funcionales definidos para el desarrollo de la aplicación web de detección de plagas en cultivos de granadilla.

---

## ✅ Requisitos Funcionales (RF)

- **RF-001**: El sistema debe permitir subir imágenes en formato .jpg o .png.
- **RF-002**: El sistema debe validar que el archivo no supere los 5 MB.
- **RF-003**: El sistema debe almacenar correctamente la imagen en la base de datos.
- **RF-004**: El sistema debe notificar al usuario si la imagen fue cargada correctamente.
- **RF-005**: El sistema debe mostrar un mensaje si la imagen es inválida.
- **RF-006**: El sistema debe ejecutar automáticamente el análisis tras subir la imagen.
- **RF-007**: El sistema debe usar el modelo YOLOv11 para analizar la imagen.
- **RF-008**: El sistema debe identificar los tipos de plagas (ej. trips, ácaros).
- **RF-009**: El sistema debe devolver el nombre de la plaga o “Planta sana”.
- **RF-010**: El sistema debe mostrar visualmente el diagnóstico.
- **RF-011**: El sistema debe mostrar la imagen analizada junto al resultado.
- **RF-012**: El sistema debe registrar la fecha y hora del diagnóstico.
- **RF-013**: El sistema debe indicar “No se detectaron plagas en la imagen” si aplica.
- **RF-014**: El sistema debe consultar automáticamente la base de datos de insecticidas.
- **RF-015**: El sistema debe mostrar nombre, grupo químico y modo de acción del insecticida.
- **RF-016**: El sistema debe mostrar “Consultar con técnico especializado” si no hay insecticida.
- **RF-017**: El sistema debe almacenar cada diagnóstico por usuario.
- **RF-018**: El sistema debe permitir consultar el historial de diagnósticos.
- **RF-019**: El sistema debe mostrar imagen, diagnóstico y recomendación anteriores.
- **RF-020**: El sistema debe permitir registrar nuevos usuarios.
- **RF-021**: El sistema debe permitir editar usuarios.
- **RF-022**: El sistema debe permitir eliminar usuarios.
- **RF-023**: El sistema debe permitir asignar roles a los usuarios.
- **RF-024**: El sistema debe permitir agregar nuevas plagas.
- **RF-025**: El sistema debe permitir registrar insecticidas por tipo de plaga.
- **RF-026**: El sistema debe permitir editar o eliminar registros antiguos.

---

## 🔒 Requisitos No Funcionales (RNF)

- **RNF-001**: La interfaz debe ser clara, intuitiva y accesible para usuarios con bajo nivel técnico.
- **RNF-002**: La interfaz debe ser responsiva y funcionar en PC, tablets y móviles.
- **RNF-003**: Las acciones principales deben estar accesibles en no más de dos clics.
- **RNF-004**: El tiempo de respuesta del diagnóstico no debe superar los 5 segundos.
- **RNF-005**: El sistema debe permitir al menos 10 usuarios simultáneos sin fallos.
- **RNF-006**: La carga de cada pantalla no debe exceder los 2 segundos en conexiones normales.
- **RNF-007**: El sistema debe estar disponible el 100% del tiempo entre 06h00 y 18h00.
- **RNF-008**: El sistema debe recuperar automáticamente servicios internos con Docker.
- **RNF-009**: Toda la información debe transmitirse cifrada con HTTPS (TLS 1.2 o superior).
- **RNF-010**: Las contraseñas deben ser cifradas usando bcrypt.
- **RNF-011**: El sistema debe restringir accesos según el rol (agricultor o administrador).
- **RNF-012**: Las sesiones deben expirar tras 15 minutos de inactividad.
- **RNF-013**: El sistema debe funcionar con contenedores Docker para facilitar despliegue.
- **RNF-014**: El sistema debe ser escalable localmente o en la nube.
- **RNF-015**: El código debe estar documentado y modularizado por funcionalidad.
