let workoutExercises = [
  // Plan wp1 - Full Body Semanal
  { id: "we1", planId: "wp1", exerciseId: "e1", sets: 4, reps: 10, weight: 100, notes: "Sentadilla con barra" },
  { id: "we2", planId: "wp1", exerciseId: "e2", sets: 3, reps: 15, weight: 0, notes: "Flexiones de pecho" },
  { id: "we3", planId: "wp1", exerciseId: "e3", sets: 4, reps: 8, weight: 120, notes: "Peso muerto" },
  { id: "we4", planId: "wp1", exerciseId: "e7", sets: 3, reps: 60, weight: 0, notes: "Plancha abdominal (segundos)" },

  // Plan wp2 - Piernas y Hombros
  { id: "we5", planId: "wp2", exerciseId: "e1", sets: 5, reps: 8, weight: 110, notes: "Sentadilla pesada" },
  { id: "we6", planId: "wp2", exerciseId: "e5", sets: 4, reps: 10, weight: 50, notes: "Press militar" },
  { id: "we7", planId: "wp2", exerciseId: "e6", sets: 3, reps: 12, weight: 40, notes: "Zancadas con mancuernas" },
  { id: "we8", planId: "wp2", exerciseId: "e19", sets: 3, reps: 15, weight: 10, notes: "Elevaciones laterales" },

  // Plan wp3 - Push Pull Legs
  { id: "we9", planId: "wp3", exerciseId: "e10", sets: 4, reps: 8, weight: 90, notes: "Press banca" },
  { id: "we10", planId: "wp3", exerciseId: "e4", sets: 4, reps: 10, weight: 0, notes: "Dominadas" },
  { id: "we11", planId: "wp3", exerciseId: "e11", sets: 3, reps: 12, weight: 15, notes: "Curl de bíceps" },
  { id: "we12", planId: "wp3", exerciseId: "e12", sets: 3, reps: 12, weight: 25, notes: "Extensiones de tríceps en polea" },

  // Plan wp4 - Cardio Intensivo
  { id: "we13", planId: "wp4", exerciseId: "e8", sets: 5, reps: 20, weight: 0, notes: "Burpees" },
  { id: "we14", planId: "wp4", exerciseId: "e14", sets: 4, reps: 30, weight: 0, notes: "Mountain climbers" },
  { id: "we15", planId: "wp4", exerciseId: "e16", sets: 4, reps: 50, weight: 0, notes: "Jumping jacks" },
  { id: "we16", planId: "wp4", exerciseId: "e15", sets: 3, reps: 10, weight: 0, notes: "Ab wheel rollout" },

  // Plan wp5 - Rutina de Core
  { id: "we17", planId: "wp5", exerciseId: "e7", sets: 4, reps: 60, weight: 0, notes: "Plancha abdominal" },
  { id: "we18", planId: "wp5", exerciseId: "e14", sets: 3, reps: 20, weight: 0, notes: "Mountain climbers" },
  { id: "we19", planId: "wp5", exerciseId: "e15", sets: 3, reps: 12, weight: 0, notes: "Rueda abdominal" },
  { id: "we20", planId: "wp5", exerciseId: "e18", sets: 3, reps: 15, weight: 60, notes: "Prensa de piernas ligera para core" },
];

// POST /api/v1/workout-plans/:planId/exercises
const associateExerciseToPlan = (req, res) => {
    const urlPlanId = req.params.planId;
    const { exerciseId, sets, reps } = req.body;

    // Validación de requeridos (Commit 6: Refuerzo de validación)
    if (!urlPlanId || !exerciseId || sets === undefined || reps === undefined) {
        return res.status(400).json({ error: 'planId, exerciseId, sets, y reps son requeridos' });
    }
    // Validación de tipo de dato (Commit 6: Añadido)
    if (isNaN(Number(sets)) || isNaN(Number(reps))) {
         return res.status(400).json({ error: 'Sets y reps deben ser números.' });
    }

    // ... lógica de creación (Commit 2) ...
    // Los campos se convierten a Number() aquí, asegurando el tipo.
    const newAssociation = {
        id: `we${Date.now()}`, 
        planId: String(urlPlanId),
        exerciseId: String(exerciseId),
        sets: Number(sets),
        reps: Number(reps),
        weight: req.body.weight !== undefined ? Number(req.body.weight) : 0,
        notes: req.body.notes || ''
    };
    workoutExercises.push(newAssociation);
    res.status(201).json(newAssociation);
};

// PATCH /api/v1/workout-exercises/:id
const patchWorkoutExercise = (req, res) => {
    // ... manejo de 404 (Commit 3) ...

    const patchData = { ...req.body };
    delete patchData.planId;
    delete patchData.exerciseId;
    const targetId = String(req.params.id);
    const index = workoutExercises.findIndex(we => we.id === targetId); 
    
    if (index === -1) {
        return res.status(404).json({ error: 'Asociación no encontrada para PATCH' });
    } 

    // Validación de tipo de dato para PATCH (Commit 6: Añadido)
    if (patchData.sets !== undefined && isNaN(Number(patchData.sets))) {
         return res.status(400).json({ error: 'Sets debe ser un número.' });
    }
    // ... repetir validación para reps y weight si se desea ...

    if (patchData.sets !== undefined) patchData.sets = Number(patchData.sets);
    if (patchData.reps !== undefined) patchData.reps = Number(patchData.reps);
    if (patchData.weight !== undefined) patchData.weight = Number(patchData.weight);

    // ... lógica de actualización (Commit 3) ...
    const updatedAssociation = {
        ...workoutExercises[index], 
        ...patchData,
        id: targetId, 
    };

    workoutExercises[index] = updatedAssociation;
    res.status(200).json(updatedAssociation);
};

// DELETE /api/v1/workout-exercises/:id
const deleteWorkoutExercise = (req, res) => {
    // Commit 4: Implementación DELETE (Eliminación/Quitar)
    const targetId = String(req.params.id);
    const initialLength = workoutExercises.length;

    workoutExercises = workoutExercises.filter(we => we.id !== targetId);

    if (workoutExercises.length === initialLength) {
        return res.status(404).json({ error: 'Asociación Ejercicio-Plan no encontrada para eliminar' });
    }

    res.status(204).send(); // 204 No Content
};

module.exports = {
    associateExerciseToPlan, // POST
    patchWorkoutExercise,    // PATCH
    deleteWorkoutExercise,   // DELETE
};