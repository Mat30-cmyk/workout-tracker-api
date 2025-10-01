// Simulación de datos en memoria
let users = [
    { id: "1", name: "Mateo B.", email: "mateo@example.com", role: "admin", createdAt: new Date().toISOString() },
    { id: "2", name: "Ana Torres", email: "ana.torres@example.com", role: "user", createdAt: new Date().toISOString() },
    { id: "3", name: "Luis Ramírez", email: "luis.ramirez@example.com", role: "user", createdAt: new Date().toISOString() },
    { id: "4", name: "Carolina Gómez", email: "carolina.gomez@example.com", role: "user", createdAt: new Date().toISOString() },
    { id: "5", name: "Santiago Pérez", email: "santiago.perez@example.com", role: "user", createdAt: new Date().toISOString() },
    { id: "6", name: "Valeria Martínez", email: "valeria.martinez@example.com", role: "user", createdAt: new Date().toISOString() },
    { id: "7", name: "Diego Herrera", email: "diego.herrera@example.com", role: "user", createdAt: new Date().toISOString() },
    { id: "8", name: "María López", email: "maria.lopez@example.com", role: "user", createdAt: new Date().toISOString() },
    { id: "9", name: "Fernando Castro", email: "fernando.castro@example.com", role: "user", createdAt: new Date().toISOString() },
    { id: "10", name: "Paula Rincón", email: "paula.rincon@example.com", role: "user", createdAt: new Date().toISOString() },
    { id: "11", name: "Andrés Morales", email: "andres.morales@example.com", role: "user", createdAt: new Date().toISOString() },
    { id: "12", name: "Camila Suárez", email: "camila.suarez@example.com", role: "user", createdAt: new Date().toISOString() },
    { id: "13", name: "Ricardo Mejía", email: "ricardo.mejia@example.com", role: "user", createdAt: new Date().toISOString() },
    { id: "14", name: "Laura Castaño", email: "laura.castano@example.com", role: "user", createdAt: new Date().toISOString() },
    { id: "15", name: "Felipe Álvarez", email: "felipe.alvarez@example.com", role: "user", createdAt: new Date().toISOString() },
    { id: "16", name: "Daniela Patiño", email: "daniela.patino@example.com", role: "user", createdAt: new Date().toISOString() },
    { id: "17", name: "Julián Ospina", email: "julian.ospina@example.com", role: "user", createdAt: new Date().toISOString() },
    { id: "18", name: "Natalia Vélez", email: "natalia.velez@example.com", role: "user", createdAt: new Date().toISOString() },
    { id: "19", name: "Sebastián Rojas", email: "sebastian.rojas@example.com", role: "user", createdAt: new Date().toISOString() },
    { id: "20", name: "Alejandra Díaz", email: "alejandra.diaz@example.com", role: "user", createdAt: new Date().toISOString() }
];

const loginUser = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email y password son requeridos para iniciar sesión' });
    }

    // SIMULACIÓN: En un proyecto real, aquí buscarías el usuario en la BD,
    // verificarías la contraseña (hash) y generarías un JWT.

    // Simulación de credenciales válidas
    if (email === "test@example.com" && password === "123456") {
        const fakeToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxIiwicm9sZSI6ImFkbWluIn0.SflKxwRJSMeKKF2QT4fwpMeJf36POk6y";

        return res.status(200).json({
            message: "Login exitoso",
            token: fakeToken,
            user: { id: "1", email: email }
        });
    }

    // Credenciales inválidas
    res.status(401).json({ error: 'Credenciales inválidas' });
};

// Nueva función: Validacion de formato de ID
const isValidId = (id) => id && (typeof id === 'string'); // Simplificado: solo chequea que sea string

const getUsers = (req, res) => {
    // Commit 6: Validacion de Query Strings (ejemplo: filtro por rol)
    const { role } = req.query;
    let filteredUsers = users;

    if (role) {
        filteredUsers = users.filter(u => u.role === role);
    }

    // Estados HTTP (200 OK)
    res.status(200).json(filteredUsers);
};

const getUserById = (req, res) => {
    const { id } = req.params;

    // Commit 6: Validacion de parametros (ID)
    if (!isValidId(id)) {
        return res.status(400).json({ error: 'ID de usuario invalido' });
    }

    const user = users.find(u => u.id === id);

    if (!user) {
        // Estado HTTP (404 Not Found)
        return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.status(200).json(user);
};

const createUser = (req, res) => {
    // Commit 3: Creación de recursos con POST
    const { name, email, role } = req.body;

    // Validación básica
    if (!name || !email) {
        return res.status(400).json({ error: 'Name y email son requeridos' });
    }

    const newUser = {
        id: `${Date.now()}`, // ID temporal
        name,
        email,
        role: role || 'user',
        createdAt: new Date().toISOString()
    };

    users.push(newUser);

    res.status(201).json(newUser);
};
// PUT: reemplazo completo del usuario (versión robusta y con logs)
const putUser = (req, res) => {
  // 1. Tomamos el id que llega en la URL (ej: /users/5 → id = "5")
  const { id } = req.params;

  // 2. Normalizamos el id (lo pasamos a string y quitamos espacios invisibles)
  const paramId = String(id).trim();

  // 3. DEBUG: mostramos en consola el id recibido y todos los ids existentes en el array
  console.log('PUT - paramId:', JSON.stringify(paramId));
  console.log('PUT - existing ids:', users.map(u => u.id));

  // 4. Buscamos en el array el índice del usuario con ese id
  const index = users.findIndex(u => String(u.id).trim() === paramId);

  // 5. Si no existe el usuario → devolvemos error 404
  if (index === -1) {
    return res.status(404).json({ error: "Usuario no encontrado para PUT" });
  }

  // 6. Tomamos los datos que vienen en el body (PUT = reemplazo completo)
  const { name, email, role } = req.body;

  // 7. Validamos que vengan todos los campos obligatorios
  if (!name || !email || !role) {
    return res.status(400).json({ error: "Faltan campos obligatorios para PUT (name, email, role)" });
  }

  // 8. Creamos el nuevo objeto usuario, reemplazando todo:
  //    - mantenemos el id original
  //    - usamos los datos nuevos (name, email, role)
  //    - preservamos createdAt del usuario viejo
  //    - agregamos updatedAt con la fecha actual
  const usuarioActualizado = {
    id: users[index].id,
    name,
    email,
    role,
    createdAt: users[index].createdAt,
    updatedAt: new Date().toISOString()
  };

  // 9. Guardamos el usuario actualizado en el array
  users[index] = usuarioActualizado;

  // 10. Respondemos con el usuario actualizado (200 OK)
  return res.status(200).json(usuarioActualizado);
};
// PATCH: actualización parcial (versión robusta y con logs)
const patchUser = (req, res) => {
  // 1. Tomamos el id que llega por la URL (ej: /users/3 → id = "3")
  const { id } = req.params;

  // 2. Normalizamos el id a string y quitamos espacios
  const paramId = String(id).trim();

  // 3. Mostramos en consola lo que llega y los ids disponibles (DEBUG)
  console.log('PATCH - paramId:', JSON.stringify(paramId));
  console.log('PATCH - existing ids:', users.map(u => u.id));

  // 4. Buscamos en el array el índice del usuario que tenga ese id
  const index = users.findIndex(u => String(u.id).trim() === paramId);

  // 5. Si no existe ese id → devolvemos error 404
  if (index === -1) {
    return res.status(404).json({ error: "Usuario no encontrado para PATCH" });
  }

  // 6. Tomamos los cambios que mandó el cliente en el body
  const cambios = req.body;

  // 7. Construimos el usuario actualizado:
  //    - mantenemos los datos anteriores
  //    - aplicamos los cambios nuevos
  //    - no dejamos que cambie el id
  //    - añadimos un updatedAt con la fecha de actualización
  const usuarioActualizado = {
    ...users[index],
    ...cambios,
    id: users[index].id,
    updatedAt: new Date().toISOString()
  };

  // 8. Guardamos el usuario actualizado en el array
  users[index] = usuarioActualizado;

  // 9. Respondemos con el usuario actualizado (200 OK)
  return res.status(200).json(usuarioActualizado);
};

const deleteUser = (req, res) => {
    // Commit 5: Eliminación con DELETE
    const { id } = req.params;
    const initialLength = users.length;

    // Filtra el array, manteniendo solo los que NO coinciden con el ID
    const newUsers = users.filter(u => u.id !== id);

    if (newUsers.length === initialLength) {
        return res.status(404).json({ error: 'Usuario no encontrado para eliminar' });
    }

    // Actualiza el array 'users' (simulando la eliminación en BD)
    users.length = 0; // Vacía el array
    users.push(...newUsers); // Llena con el nuevo array

    res.status(204).send(); // 204 No Content para eliminación exitosa
};

module.exports = {
    users,
    getUsers,
    loginUser,
    getUserById,
    createUser,
    putUser,
    patchUser,
    deleteUser,
};