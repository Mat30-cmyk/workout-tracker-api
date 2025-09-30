// Simulación de datos en memoria
const users = [
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


const updateUser = (req, res) => {
    // Commit 4: Actualización con PUT y PATCH
    const { id } = req.params;
    const { name, email, role } = req.body;

    const index = users.findIndex(u => u.id === id);

    if (index === -1) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    // Validación simplificada para PUT/PATCH
    if (req.method === 'PUT' && (!name || !email)) {
        return res.status(400).json({ error: 'PUT requiere Name y Email' });
    }

    users[index] = {
        ...users[index], // Conserva datos previos
        ...(name && { name }),
        ...(email && { email }),
        ...(role && { role }),
    };

    res.status(200).json(users[index]);
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
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};