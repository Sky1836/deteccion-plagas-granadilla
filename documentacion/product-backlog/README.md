# 📋 Product Backlog - Sistema de Detección de Plagas V1


| ID      | Tarea                                             | Talla | Puntos Estimados | Prioridad |
|---------|---------------------------------------------------|-------|------------------|-----------|
| REQ-001 | Seleccionar y subir imagen en formato .jpg o .png | S     | 2                | Alta      |
| REQ-002 | Validar tamaño máximo del archivo (5MB)           | S     | 2                | Alta      |
| REQ-003 | Almacenar imagen en la base de datos              | M     | 4                | Alta      |
| REQ-004 | Notificar si la imagen fue cargada correctamente  | S     | 2                | Alta      |
| REQ-005 | Mostrar mensaje de error si la imagen es inválida | S     | 2                | Alta      |
| REQ-006 | Activar automáticamente el análisis tras la carga | M     | 4                | Alta      |
| REQ-007 | Ejecutar modelo YOLOv11 sobre la imagen           | L     | 6                | Alta      |
| REQ-008 | Detectar tipos de plagas                          | M     | 5                | Alta      |
| REQ-009 | Mostrar nombre de la plaga o 'Planta sana'        | S     | 2                | Alta      |
| REQ-010 | Mostrar diagnóstico de forma visual               | M     | 4                | Alta      |
| REQ-011 | Mostrar imagen analizada junto al resultado       | M     | 4                | Alta      |
| REQ-012 | Registrar fecha y hora del diagnóstico            | S     | 2                | Media     |
| REQ-013 | Mostrar mensaje si no hay plagas                  | S     | 2                | Media     |
| REQ-014 | Consultar base de datos de insecticidas           | M     | 4                | Alta      |
| REQ-015 | Mostrar datos del insecticida sugerido            | M     | 4                | Alta      |
| REQ-016 | Mensaje si no existe insecticida                  | S     | 2                | Media     |
| REQ-017 | Almacenar diagnóstico por usuario                 | M     | 4                | Alta      |
| REQ-018 | Consultar historial por fecha                     | M     | 4                | Media     |
| REQ-019 | Mostrar imagen y resultados anteriores            | M     | 5                | Media     |
| REQ-020 | Registrar nuevos usuarios                         | S     | 2                | Alta      |
| REQ-021 | Editar usuarios                                   | M     | 4                | Media     |
| REQ-022 | Eliminar usuarios                                 | M     | 4                | Media     |
| REQ-023 | Asignar roles a usuarios                          | M     | 4                | Media     |
| REQ-024 | Agregar nuevas plagas                             | M     | 4                | Media     |
| REQ-025 | Registrar insecticidas por plaga                  | M     | 5                | Alta      |
| REQ-026 | Editar o eliminar registros antiguos              | M     | 4                | Media     |


# 🗂️ Planificación de Sprints V2


## 📅 Tabla de Sprints

| ID    | Horas Estimadas | Prioridad | Sprint (Semana) | Fecha de Entrega        | Objetivo Principal                         |
|-------|-----------------|-----------|-----------------|--------------------------|--------------------------------------------|
| HT-01 | 5 horas          | Alta      | 1               | Martes 29 de abril 2025   | Configurar Base de Datos                   |
| HT-02 | 4 horas          | Alta      | 1               | Martes 29 de abril 2025   | Conexión Backend-BD                        |
| HU-01 | 5 horas          | Alta      | 2               | Martes 6 de mayo 2025     | Registro e inicio de sesión de usuarios    |
| HU-02 | 4 horas          | Alta      | 2               | Martes 6 de mayo 2025     | Implementación de roles (Agricultor/Admin) |
| HU-03 | 5 horas          | Alta      | 3               | Martes 13 de mayo 2025    | Subida de imágenes                        |
| HU-04 | 5 horas          | Alta      | 4               | Martes 20 de mayo 2025    | Integrar y ejecutar modelo YOLOv11         |
| HU-05 | 4 horas          | Alta      | 5               | Martes 27 de mayo 2025    | Mostrar diagnóstico e historial           |
| HU-06 | 5 horas          | Alta      | 6               | Martes 3 de junio 2025    | Recomendación de insecticidas              |
| HU-07 | 4 horas          | Media     | 7               | Martes 10 de junio 2025   | CRUD de usuarios                          |
| HU-08 | 5 horas          | Media     | 8               | Martes 17 de junio 2025   | CRUD de plagas e insecticidas              |
| HT-03 | 4 horas          | Media     | 9               | Martes 24 de junio 2025   | Pruebas y control de roles                 |
| HT-04 | 5 horas          | Alta      | 10              | Martes 1 de julio 2025    | Optimización general y entrega final       |


## Sprints v3
# **Planificación de Sprints**

| ID     | Tarea                                        | Puntos Estimados | Prioridad | Sprint (Semana) | Fecha de Entrega       | Objetivo Principal                                                    | Dependencias |
|--------|----------------------------------------------|------------------|-----------|-----------------|------------------------|----------------------------------------------------------------------|--------------|
| HT-01  | Configurar Base de Datos                     | 5 horas          | Alta      | 1               | Martes 29 de abril 2025 | Configurar la base de datos y las tablas iniciales                   | Ninguna      |
| HT-02  | Conexión Backend-BD                          | 4 horas          | Alta      | 1               | Martes 29 de abril 2025 | Establecer la conexión entre el backend y la base de datos           | HT-01        |
| HU-01  | Registro e inicio de sesión de usuarios      | 5 horas          | Alta      | 2               | Martes 6 de mayo 2025   | Crear un sistema de registro e inicio de sesión                        | HT-02        |
| HU-02  | Implementación de roles (Agricultor/Admin)   | 4 horas          | Alta      | 2               | Martes 6 de mayo 2025   | Crear roles para el sistema y asignar permisos de acceso              | HU-01        |
| HU-03  | Subida de imágenes                           | 5 horas          | Alta      | 3               | Martes 13 de mayo 2025  | Crear formulario para subir imágenes                                   | HU-02        |
| HU-04  | Integrar y ejecutar modelo YOLOv11           | 5 horas          | Alta      | 4               | Martes 20 de mayo 2025  | Ejecutar el modelo de detección YOLOv11 sobre las imágenes            | HU-03        |
| HU-05  | Mostrar diagnóstico e historial              | 4 horas          | Alta      | 5               | Martes 27 de mayo 2025  | Mostrar los resultados del diagnóstico y el historial                  | HU-04        |
| HU-06  | Recomendación de insecticidas                | 5 horas          | Alta      | 6               | Martes 3 de junio 2025  | Mostrar recomendaciones de insecticidas basados en el diagnóstico     | HU-05        |
| HU-07  | CRUD de usuarios                             | 4 horas          | Media     | 7               | Martes 10 de junio 2025 | Crear funcionalidades CRUD para usuarios                              | HU-06        |
| HU-08  | CRUD de plagas e insecticidas                | 5 horas          | Media     | 8               | Martes 17 de junio 2025 | Crear funcionalidades CRUD para plagas e insecticidas                 | HU-07        |
| HT-03  | Pruebas y control de roles                   | 4 horas          | Media     | 9               | Martes 24 de junio 2025 | Realizar pruebas de roles y controlar el acceso a funciones           | HU-08        |
| HT-04  | Optimización general y entrega final        | 5 horas          | Alta      | 10              | Martes 1 de julio 2025  | Optimizar la aplicación y realizar la entrega final                   | HU-08        |
