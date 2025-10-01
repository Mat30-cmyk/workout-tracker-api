# 🏋 Workout Tracker API - v1 (Recurso Users)

API RESTful para el seguimiento de entrenamientos.

## Endpoints de Usuarios (/api/v1/users)

| Método | Ruta | Descripción | Códigos de Estado |
| :--- | :--- | :--- | :--- |
| GET | /api/v1/users | Obtener la lista de todos los usuarios. | 200 OK |
| GET | /api/v1/users/:id | Obtener un usuario por ID. | 200 OK, 404 Not Found, 400 Bad Request |
| POST | /api/v1/users | Crear un nuevo usuario. | 201 Created, 400 Bad Request |
| PUT | /api/v1/users/:id | Reemplazar (actualizar) un usuario. | 200 OK, 404 Not Found, 400 Bad Request |
| PATCH | /api/v1/users/:id | Actualizar parcialmente un usuario. | 200 OK, 404 Not Found |
| DELETE | /api/v1/users/:id | Eliminar un usuario. | 204 No Content, 404 Not Found |

---

### Ejemplos de Request/Response

#### 1. Crear usuario (POST /api/v1/users)

*Request:*
```json
{
  "name": "Ana Torres",
  "email": "ana@example.com",
  "role": "user"
}

# 🏋️ Workout Tracker API - v1 (Recurso Exercises)

## Endpoints de Ejercicios (`/api/v1/exercises`)

| Método | Ruta | Descripción | Códigos de Estado |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/v1/exercises` | Obtener la lista de todos los ejercicios. | `200` OK |
| `GET` | `/api/v1/exercises?muscleGroup=piernas` | Filtrar ejercicios por grupo muscular. | `200` OK |
| `GET` | `/api/v1/exercises/:id` | Obtener un ejercicio por ID. | `200` OK, `404` Not Found |
| `POST` | `/api/v1/exercises` | Crear un nuevo ejercicio. | `201` Created, `400` Bad Request |
| `PUT` | `/api/v1/exercises/:id` | **Reemplazar (Actualización COMPLETA)**. | `200` OK, `404` Not Found, `400` Bad Request (si faltan campos clave) |
| `PATCH` | `/api/v1/exercises/:id` | **Actualizar PARCIALMENTE**. | `200` OK, `404` Not Found |
| `DELETE` | `/api/v1/exercises/:id` | Eliminar un ejercicio. | `204` No Content, `404` Not Found |

---
### Ejemplos de Request/Response
#### 1. Crear Ejercicio (`POST /api/v1/exercises`)
**Request:**
```json
{
  "name": "Remo con Mancuerna",
  "muscleGroup": "Espalda",
  "category": "Fuerza",
  "description": "Remo a un brazo para desarrollar dorsales."
}

# 🏋️ Workout Tracker API - v1 (Recurso WorkoutPlan)

## Endpoints de Planes de Entrenamiento (`/api/v1/workout-plans`)

| Método | Ruta | Descripción | Códigos de Estado |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/v1/workoutPlans` | Obtener la lista de todos los planes. | `200` OK |
| `GET` | `/api/v1/workoutPlans?userId=1` | Filtrar planes por ID de usuario. | `200` OK |
| `GET` | `/api/v1/workoutPlans/:id` | Detalle del plan. | `200` OK, `404` Not Found |
| `POST` | `/api/v1/workoutPlans` | Crear plan. | `201` Created, `400` Bad Request |
| `PUT` | `/api/v1/workoutPlans/:id` | Reemplazo COMPLETO del plan. | `200` OK, `404` Not Found, `400` Bad Request |
| `PATCH` | `/api/v1/workoutPlans/:id` | Actualización PARCIAL del plan. | `200` OK, `404` Not Found |
| `DELETE` | `/api/v1/workoutPlans/:id` | Eliminar plan. | `204` No Content, `404` Not Found |

---
### Ejemplos de Request/Response
#### 1. Crear Plan (`POST /api/v1/workout-plans`)
**Request:**
```json
{
  "userId": "1",
  "namePlan": "Rutina de Brazos Express"
}