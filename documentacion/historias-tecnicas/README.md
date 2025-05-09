# **Historias Técnicas**

## **HT-01: Configuración de Base de Datos**
- **Descripción**: Configurar la base de datos en PostgreSQL para almacenar la información sobre usuarios, cultivos, plagas y diagnósticos.
- **Estimación**: 5 puntos
- **Prioridad**: Alta
- **Dependencias**: Ninguna
- **Pruebas de Aceptación**:
  - Verificar que la base de datos se haya creado correctamente en PostgreSQL.
  - Asegurarse de que las tablas estén definidas según el esquema especificado.

---

## **HT-02: Conexión Backend-BD**
- **Descripción**: Establecer la conexión entre el backend (usando Prisma o TypeORM) y la base de datos PostgreSQL.
- **Estimación**: 4 puntos
- **Prioridad**: Alta
- **Dependencias**: HT-01
- **Pruebas de Aceptación**:
  - Verificar que el backend pueda acceder a la base de datos correctamente.
  - Probar consultas básicas para comprobar la conexión, como la obtención de todos los usuarios.

---

## **HT-03: Implementación de autenticación**
- **Descripción**: Implementar el sistema de autenticación para que los usuarios puedan registrarse e iniciar sesión.
- **Estimación**: 4 puntos
- **Prioridad**: Alta
- **Dependencias**: HT-02
- **Pruebas de Aceptación**:
  - Verificar que los usuarios puedan registrarse con sus datos.
  - Verificar que el inicio de sesión funcione correctamente con las credenciales registradas.

---

## **HT-04: Integración del modelo YOLOv11**
- **Descripción**: Integrar el modelo de detección de plagas YOLOv11 para procesar las imágenes subidas.
- **Estimación**: 5 puntos
- **Prioridad**: Alta
- **Dependencias**: HT-03
- **Pruebas de Aceptación**:
  - Verificar que el modelo pueda procesar imágenes y detectar plagas correctamente.
  - Comprobar que los resultados de la detección se almacenen en la base de datos.

---

## **HT-05: Implementación de recomendaciones**
- **Descripción**: Implementar el sistema de recomendaciones de insecticidas basados en los diagnósticos y las plagas detectadas.
- **Estimación**: 4 puntos
- **Prioridad**: Alta
- **Dependencias**: HT-04
- **Pruebas de Aceptación**:
  - Verificar que las recomendaciones sean generadas correctamente según el tipo de plaga.
  - Asegurarse de que las recomendaciones se muestren correctamente al usuario.

---

## **HT-06: Implementación de CRUD para usuarios**
- **Descripción**: Implementar el sistema CRUD para administrar los usuarios desde el panel de administración.
- **Estimación**: 4 puntos
- **Prioridad**: Media
- **Dependencias**: HT-03
- **Pruebas de Aceptación**:
  - Verificar que se pueda agregar un nuevo usuario desde el panel de administración.
  - Verificar que los usuarios puedan ser editados o eliminados correctamente.

---

## **HT-07: Implementación de CRUD para plagas e insecticidas**
- **Descripción**: Implementar el sistema CRUD para administrar las plagas y los insecticidas desde el panel de administración.
- **Estimación**: 5 puntos
- **Prioridad**: Media
- **Dependencias**: HT-06
- **Pruebas de Aceptación**:
  - Verificar que se puedan agregar nuevas plagas e insecticidas.
  - Comprobar que las plagas y los insecticidas puedan ser editados o eliminados correctamente.
