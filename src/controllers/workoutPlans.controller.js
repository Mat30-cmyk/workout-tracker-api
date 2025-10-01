let workoutPlans = [
  // Simulación de datos en memoria
  { id: "wp1", userId: "1", name: "Full Body Semanal", dateCreated: "2025-09-25", exercisesCount: 5 },
  { id: "wp2", userId: "2", name: "Piernas y Hombros", dateCreated: "2025-09-20", exercisesCount: 4 },
  { id: "wp3", userId: "3", name: "Push Pull Legs", dateCreated: "2025-09-18", exercisesCount: 6 },
  { id: "wp4", userId: "4", name: "Cardio Intensivo", dateCreated: "2025-09-15", exercisesCount: 3 },
  { id: "wp5", userId: "5", name: "Rutina de Core", dateCreated: "2025-09-10", exercisesCount: 4 },
  { id: "wp6", userId: "6", name: "Espalda Fuerte", dateCreated: "2025-09-08", exercisesCount: 5 },
  { id: "wp7", userId: "7", name: "Glúteos y Piernas", dateCreated: "2025-09-05", exercisesCount: 4 },
  { id: "wp8", userId: "8", name: "Entrenamiento de Potencia", dateCreated: "2025-09-03", exercisesCount: 6 },
  { id: "wp9", userId: "9", name: "Resistencia Funcional", dateCreated: "2025-09-01", exercisesCount: 5 },
  { id: "wp10", userId: "10", name: "Brazos Definidos", dateCreated: "2025-08-28", exercisesCount: 4 },
  { id: "wp11", userId: "11", name: "Hipertrofia Pecho", dateCreated: "2025-08-25", exercisesCount: 5 },
  { id: "wp12", userId: "12", name: "Rutina Express 30 min", dateCreated: "2025-08-22", exercisesCount: 3 },
  { id: "wp13", userId: "13", name: "Entrenamiento Avanzado", dateCreated: "2025-08-20", exercisesCount: 6 },
  { id: "wp14", userId: "14", name: "Fuerza Máxima", dateCreated: "2025-08-18", exercisesCount: 5 },
  { id: "wp15", userId: "15", name: "Piernas Explosivas", dateCreated: "2025-08-15", exercisesCount: 4 },
  { id: "wp16", userId: "16", name: "Rutina Outdoor", dateCreated: "2025-08-12", exercisesCount: 3 },
  { id: "wp17", userId: "17", name: "Full Body Principiantes", dateCreated: "2025-08-10", exercisesCount: 4 },
  { id: "wp18", userId: "18", name: "Calistenia Básica", dateCreated: "2025-08-07", exercisesCount: 5 },
  { id: "wp19", userId: "19", name: "Plan de Definición", dateCreated: "2025-08-05", exercisesCount: 6 },
  { id: "wp20", userId: "20", name: "Entrenamiento Funcional", dateCreated: "2025-08-02", exercisesCount: 5 },
];

const getWorkoutPlans = (req, res) => {
    // Commit 2: Implementación GET lista
    res.status(200).json(workoutPlans);
};

const getWorkoutPlanById = (req, res) => {
    // Commit 2: Implementación GET individual
    const targetId = String(req.params.id); 
    const plan = workoutPlans.find(p => p.id === targetId);

    if (!plan) {
        return res.status(404).json({ error: 'Plan de entrenamiento no encontrado' });
    }

    res.status(200).json(plan);
};

const createWorkoutPlan = (req, res) => {
    // Commit 3: Creación de recursos con POST
    const { userId, namePlan } = req.body;

    // Validación básica
    if (!userId || !namePlan) {
        return res.status(400).json({ error: 'ID de usuario y namePlan son requeridos' });
    }

    const newPlan = {
        id: `wp${Date.now()}`, 
        userId: String(userId),
        name: namePlan,
        dateCreated: new Date().toISOString().split('T')[0],
        exercisesCount: 0 // Inicialmente sin ejercicios
    };

    workoutPlans.push(newPlan);

    res.status(201).json(newPlan);
};

const putWorkoutPlan = (req, res) => {
    // Commit 4: Actualización COMPLETA con PUT
    const targetId = String(req.params.id);
    const index = workoutPlans.findIndex(p => p.id === targetId);

    if (index === -1) {
        return res.status(404).json({ error: 'Plan no encontrado para PUT' });
    }

    // 🔹 Aseguramos consistencia: si viene "namePlan" lo convertimos a "name"
    const { userId, namePlan, name } = req.body;
    const finalName = namePlan || name;

    if (!userId || !finalName) {
        return res.status(400).json({ error: 'PUT requiere userId y name (o namePlan).' });
    }

    const updatedPlan = {
        id: targetId,
        userId: String(userId),
        name: finalName, // 👈 siempre guardamos en la propiedad correcta
        dateCreated: workoutPlans[index].dateCreated, // mantenemos metadata
        exercisesCount: workoutPlans[index].exercisesCount
    };

    workoutPlans[index] = updatedPlan;
    res.status(200).json(updatedPlan);
};

const patchWorkoutPlan = (req, res) => {
    // Commit 4: Actualización PARCIAL con PATCH
    const targetId = String(req.params.id);
    const index = workoutPlans.findIndex(p => p.id === targetId);

    if (index === -1) {
        return res.status(404).json({ error: 'Plan no encontrado para PATCH' });
    }

    // 🔹 Mapeamos "namePlan" -> "name"
    const updateData = { ...req.body };
    if (updateData.namePlan) {
        updateData.name = updateData.namePlan;
        delete updateData.namePlan;
    }

    // 🔹 Mezclamos los datos (PATCH = parcial, no reemplaza todo)
    const updatedPlan = {
        ...workoutPlans[index],
        ...updateData,
        id: targetId // aseguramos que no cambie
    };

    workoutPlans[index] = updatedPlan;
    res.status(200).json(updatedPlan);
};

const deleteWorkoutPlan = (req, res) => {
    // Commit 5: Eliminación con DELETE
    const targetId = String(req.params.id);
    const initialLength = workoutPlans.length;

    workoutPlans = workoutPlans.filter(p => p.id !== targetId);

    if (workoutPlans.length === initialLength) {
        return res.status(404).json({ error: 'Plan no encontrado para eliminar' });
    }

    res.status(204).send(); // 204 No Content
};

module.exports = {
    getWorkoutPlans,
    getWorkoutPlanById,
    createWorkoutPlan,
    putWorkoutPlan,
    patchWorkoutPlan,
    deleteWorkoutPlan,
};