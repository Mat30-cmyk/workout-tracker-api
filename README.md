# 🏋️ Workout Tracker API - v1

API RESTful para el seguimiento de entrenamientos, gestión de planes, programación y generación de reportes.

---

## 1. Recurso Users (`/api/v1/users`)

Gestiona la información de los usuarios.

| Método | Ruta | Descripción | Códigos de Estado |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/v1/users` | Listar todos los usuarios. | `200` OK |
| `GET` | `/api/v1/users?role=admin` | Filtrar por rol de usuario. | `200` OK |
| `GET` | `/api/v1/users/:id` | Detalle de un usuario. | `200` OK, `404` Not Found |
| `POST` | `/api/v1/users` | Crear un nuevo usuario. | `201` Created, `400` Bad Request |
| `PUT` | `/api/v1/users/:id` | Reemplazo **COMPLETO** de usuario. | `200` OK, `404` Not Found, `400` Bad Request |
| `PATCH` | `/api/v1/users/:id` | Actualización **PARCIAL** de usuario. | `200` OK, `404` Not Found |
| `DELETE` | `/api/v1/users/:id` | Eliminar un usuario. | `204` No Content, `404` Not Found |

### Ejemplos de Request Body

| Método | Ruta | Request Body JSON |
| :--- | :--- | :--- |
| **`POST`** | `/api/v1/users` | ```json\n{\n  "name": "Ana Torres",\n  "email": "ana@example.com",\n  "role": "user"\n}``` |
| **`PUT`** | `/api/v1/users/1` | ```json\n{\n  "name": "Ana T. Nuevo",\n  "email": "ana.nuevo@example.com",\n  "role": "admin" \n}``` |
| **`PATCH`**| `/api/v1/users/1` | ```json\n{\n  "role": "premium" \n}``` |

---

## 2. Recurso Exercises (`/api/v1/exercises`)

Gestiona el catálogo de ejercicios.

| Método | Ruta | Descripción | Códigos de Estado |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/v1/exercises` | Listar todos los ejercicios. | `200` OK |
| `GET` | `/api/v1/exercises?muscleGroup=piernas` | Filtrar ejercicios por grupo muscular. | `200` OK |
| `GET` | `/api/v1/exercises/:id` | Detalle de un ejercicio. | `200` OK, `404` Not Found |
| `POST` | `/api/v1/exercises` | Crear un nuevo ejercicio. | `201` Created, `400` Bad Request |
| `PUT` | `/api/v1/exercises/:id` | Reemplazo **COMPLETO** de ejercicio. | `200` OK, `404` Not Found, `400` Bad Request |
| `PATCH` | `/api/v1/exercises/:id` | Actualización **PARCIAL** de ejercicio. | `200` OK, `404` Not Found |
| `DELETE` | `/api/v1/exercises/:id` | Eliminar un ejercicio. | `204` No Content, `404` Not Found |

### Ejemplos de Request Body

| Método | Ruta | Request Body JSON |
| :--- | :--- | :--- |
| **`POST`** | `/api/v1/exercises` | ```json\n{\n  "name": "Remo con Mancuerna",\n  "muscleGroup": "Espalda",\n  "category": "Fuerza",\n  "description": "Remo a un brazo para desarrollar dorsales."\n}``` |
| **`PUT` | `/api/v1/exercises/e1` | ```json\n{\n  "name": "Sentadilla con Barra",\n  "muscleGroup": "Piernas",\n  "category": "Fuerza",\n  "description": "Ejercicio compuesto fundamental."\n}``` |
| **`PATCH`**| `/api/v1/exercises/e1` | ```json\n{\n  "category": "Hipertrofia",\n  "description": "Énfasis en cuádriceps."\n}``` |

---

## 3. Recurso WorkoutPlans (`/api/v1/workout-plans`)

Gestiona los planes de entrenamiento.

| Método | Ruta | Descripción | Códigos de Estado |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/v1/workoutPlans` | Listar todos los planes. | `200` OK |
| `GET` | `/api/v1/workoutPlans?userId=1` | Filtrar planes por ID de usuario. | `200` OK |
| `GET` | `/api/v1/workoutPlans/:id` | Detalle del plan. | `200` OK, `404` Not Found |
| `POST` | `/api/v1/workoutPlans` | Crear plan. | `201` Created, `400` Bad Request |
| `PUT` | `/api/v1/workoutPlans/:id` | Reemplazo **COMPLETO** del plan. | `200` OK, `404` Not Found, `400` Bad Request |
| `PATCH` | `/api/v1/workoutPlans/:id` | Actualización **PARCIAL** del plan. | `200` OK, `404` Not Found |
| `DELETE` | `/api/v1/workoutPlans/:id` | Eliminar plan. | `204` No Content, `404` Not Found |

### Ejemplos de Request Body

| Método | Ruta | Request Body JSON |
| :--- | :--- | :--- |
| **`POST`** | `/api/v1/workout-plans` | ```json\n{\n  "userId": "1",\n  "namePlan": "Rutina de Brazos Express",\n  "difficulty": "Bajo"\n}``` |
| **`PUT`** | `/api/v1/workout-plans/wp1` | ```json\n{\n  "userId": "1",\n  "namePlan": "Rutina de Fuerza",\n  "difficulty": "Alto" \n}``` |
| **`PATCH`**| `/api/v1/workout-plans/wp1` | ```json\n{\n  "difficulty": "Medio" \n}``` |

---

## 4. Recurso WorkoutExercises (Asociación Ejercicio-Plan)

Gestiona la lista de ejercicios **dentro** de un plan (Asociación con Sets/Reps/Peso).

| Método | Ruta | Descripción | Códigos de Estado |
| :--- | :--- | :--- | :--- |
| **`POST`** | `/api/v1/workoutPlans/:planId/exercises` | **Añadir/Asociar** un ejercicio a un plan. | `201` Created, `400` Bad Request |
| **`PATCH`** | `/api/v1/workoutExercises/:id` | **Modificar** los parámetros (Sets, Reps, Peso, Notas) de la asociación. | `200` OK, `404` Not Found |
| **`DELETE`**| `/api/v1/workoutExercises/:id` | **Quitar** un ejercicio del plan (Elimina la asociación). | `204` No Content, `404` Not Found |

### Ejemplos de Request Body

| Método | Ruta | Request Body JSON |
| :--- | :--- | :--- |
| **`POST`** | `/api/v1/workoutPlans/wp1/exercises` | ```json\n{\n  "exerciseId": "e3",\n  "sets": 3,\n  "reps": 12,\n  "weight": 50,\n  "notes": "Usar peso moderado"\n}``` |
| **`PATCH`**| `/api/v1/workoutExercises/we1` | ```json\n{\n  "sets": 4,\n  "reps": 8,\n  "notes": "Pesado, no subir peso la próxima." \n}``` |

---

## 5. Recurso WorkoutSchedules (Programación)

Gestiona la agenda de los planes de entrenamiento.

| Método | Ruta | Descripción | Códigos de Estado |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/v1/workoutSchedules` | Listar todas las programaciones. | `200` OK |
| `GET` | `/api/v1/workoutSchedules?userId=1&status=scheduled` | Filtrar por usuario y estado. | `200` OK |
| `GET` | `/api/v1/workoutSchedules/:id` | Detalle de la programación. | `200` OK, `404` Not Found |
| `POST` | `/api/v1/workoutSchedules` | **Programar** un plan (Creación). | `201` Created, `400` Bad Request |
| `PUT` | `/api/v1/workoutSchedules/:id` | Reemplazo **COMPLETO** (Reprogramación total). | `200` OK, `404` Not Found, `400` Bad Request |
| `PATCH` | `/api/v1/workoutSchedules/:id` | Actualización **PARCIAL** (ej. cambiar solo `status`). | `200` OK, `404` Not Found |
| `DELETE` | `/api/v1/workoutSchedules/:id` | Eliminar la programación. | `204` No Content, `404` Not Found |

### Ejemplos de Request Body

| Método | Ruta | Request Body JSON |
| :--- | :--- | :--- |
| **`POST`** | `/api/v1/workoutSchedules` | ```json\n{\n  "userId": "1",\n  "planId": "wp1",\n  "date": "2025-10-15",\n  "startTime": "06:00",\n  "durationMinutes": 60\n}``` |
| **`PUT`** | `/api/v1/workoutSchedules/ws1` | ```json\n{\n  "userId": "1",\n  "planId": "wp2",\n  "date": "2025-10-16",\n  "startTime": "18:00",\n  "durationMinutes": 45,\n  "status": "scheduled"\n}``` |
| **`PATCH`**| `/api/v1/workoutSchedules/ws1` | ```json\n{\n  "status": "completed"\n}``` |

---

## 6. Recurso WorkoutReports (Reportes - SOLO LECTURA)

Gestiona los logs de sesiones terminadas para análisis.

| Método | Ruta | Descripción | Reporte |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/v1/workoutReports` | Reportes **Generales** (con filtro opcional `?date=...`). | General |
| `GET` | `/api/v1/workoutReports?date=2025-10-02` | Filtro por fecha. | General |
| `GET` | `/api/v1/users/:id/workout-reports` | Logs de un **Usuario** específico. | Por Usuario |
| `GET` | `/api/v1/workoutPlans/:id/workout-reports` | Logs de un **Plan** específico. | Por Plan |
| `GET` | `/api/v1/workoutSchedules/:id/workout-reports` | Log de una **Programación** específica. | Por Schedule |

### Ejemplo de Response (Todos los GET devuelven un objeto o un array de reportes)

**Response (200 OK):**
```json
[
  {
    "id": "r1",
    "userId": "1",
    "planId": "wp1",
    "scheduleId": "ws1",
    "date": "2025-10-02",
    "totalDuration": 60,
    "caloriesBurned": 350,
    "notes": "Full Body exitoso."
  }
]
