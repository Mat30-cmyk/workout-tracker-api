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
    res.status(201).json({ message: "POST /workout-plans - Implementacion pendiente", body: req.body });
};

const putWorkoutPlan = (req, res) => {
    res.status(200).json({ message: "PUT /workout-plans/:id - Implementacion pendiente", id: req.params.id, body: req.body });
};

const patchWorkoutPlan = (req, res) => {
    res.status(200).json({ message: "PATCH /workout-plans/:id - Implementacion pendiente", id: req.params.id, body: req.body });
};

const deleteWorkoutPlan = (req, res) => {
    res.status(204).json({ message: "DELETE /workout-plans/:id - Implementacion pendiente", id: req.params.id });
};

module.exports = {
    getWorkoutPlans,
    getWorkoutPlanById,
    createWorkoutPlan,
    putWorkoutPlan,
    patchWorkoutPlan,
    deleteWorkoutPlan,
};