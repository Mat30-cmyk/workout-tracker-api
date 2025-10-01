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