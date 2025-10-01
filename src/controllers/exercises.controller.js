let exercises = [
  // Simulación de datos en memoria
  { id: "e1", name: "Sentadilla con Barra", category: "Fuerza", muscleGroup: "Piernas", description: "Ejercicio de potencia para el tren inferior." },
  { id: "e2", name: "Flexiones de Pecho", category: "Calistenia", muscleGroup: "Pecho", description: "Ejercicio básico de empuje." },
  { id: "e3", name: "Peso Muerto", category: "Fuerza", muscleGroup: "Espalda baja", description: "Ejercicio multiarticular para trabajar la cadena posterior." },
  { id: "e4", name: "Dominadas", category: "Calistenia", muscleGroup: "Espalda", description: "Ejercicio de tracción para fortalecer dorsales y bíceps." },
  { id: "e5", name: "Press Militar", category: "Fuerza", muscleGroup: "Hombros", description: "Ejercicio de empuje vertical para deltoides y tríceps." },
  { id: "e6", name: "Zancadas", category: "Fuerza", muscleGroup: "Piernas", description: "Ejercicio unilateral para cuádriceps y glúteos." },
  { id: "e7", name: "Plancha Abdominal", category: "Core", muscleGroup: "Abdomen", description: "Ejercicio isométrico para el core." },
  { id: "e8", name: "Burpees", category: "Cardio", muscleGroup: "Cuerpo completo", description: "Ejercicio explosivo para resistencia y fuerza." },
  { id: "e9", name: "Remo con Barra", category: "Fuerza", muscleGroup: "Espalda", description: "Ejercicio de tracción para dorsales y trapecios." },
  { id: "e10", name: "Press Banca", category: "Fuerza", muscleGroup: "Pecho", description: "Ejercicio de empuje horizontal con barra." },
  { id: "e11", name: "Curl de Bíceps con Mancuernas", category: "Aislamiento", muscleGroup: "Bíceps", description: "Ejercicio de aislamiento para bíceps." },
  { id: "e12", name: "Extensiones de Tríceps en Polea", category: "Aislamiento", muscleGroup: "Tríceps", description: "Ejercicio de empuje para tríceps." },
  { id: "e13", name: "Hip Thrust", category: "Fuerza", muscleGroup: "Glúteos", description: "Ejercicio para fortalecer y dar potencia a los glúteos." },
  { id: "e14", name: "Mountain Climbers", category: "Cardio", muscleGroup: "Core", description: "Ejercicio dinámico para abdomen y resistencia." },
  { id: "e15", name: "Ab Wheel Rollout", category: "Core", muscleGroup: "Abdomen", description: "Ejercicio avanzado para core con rueda abdominal." },
  { id: "e16", name: "Jumping Jacks", category: "Cardio", muscleGroup: "Cuerpo completo", description: "Ejercicio clásico de calentamiento." },
  { id: "e17", name: "Face Pulls", category: "Fuerza", muscleGroup: "Hombros", description: "Ejercicio para fortalecer deltoides posteriores y trapecios." },
  { id: "e18", name: "Press de Piernas", category: "Fuerza", muscleGroup: "Piernas", description: "Ejercicio guiado para cuádriceps y glúteos." },
  { id: "e19", name: "Elevaciones Laterales", category: "Aislamiento", muscleGroup: "Hombros", description: "Ejercicio para trabajar deltoides laterales." },
  { id: "e20", name: "Farmer Walk", category: "Fuerza", muscleGroup: "Antebrazos", description: "Ejercicio de agarre y fuerza funcional cargando peso." },
];

const getExercises = (req, res) => {
    // Commit 2: Implementación GET lista
    res.status(200).json(exercises);
};

const getExerciseById = (req, res) => {
    // Commit 2: Implementación GET individual
    const targetId = String(req.params.id); 
    const exercise = exercises.find(e => e.id === targetId);

    if (!exercise) {
        return res.status(404).json({ error: 'Ejercicio no encontrado' });
    }

    res.status(200).json(exercise);
};

const createExercise = (req, res) => {
    // Commit 3: Creación de recursos con POST
    const { name, muscleGroup, category, description } = req.body;

    // Validación básica
    if (!name || !muscleGroup || !category) {
        return res.status(400).json({ error: 'Name, muscleGroup, y category son requeridos' });
    }

    const newExercise = {
        id: `e${Date.now()}`, // ID temporal
        name,
        muscleGroup,
        category,
        description: description || ''
    };

    exercises.push(newExercise);

    res.status(201).json(newExercise);
};

const putExercise = (req, res) => {
    // Commit 4: Actualización COMPLETA de PUT
    const targetId = String(req.params.id); 
    const index = exercises.findIndex(e => e.id === targetId);

    if (index === -1) {
        return res.status(404).json({ error: 'Ejercicio no encontrado para PUT' });
    }

    const { name, muscleGroup, category, description } = req.body;
    
    // VALIDACIÓN ESTRICTA: PUT requiere los campos clave
    if (!name || !muscleGroup || !category) {
        return res.status(400).json({ error: 'PUT requiere la representación completa: name, muscleGroup, y category.' });
    }

    // Reemplazo completo, preservando el ID.
    const updatedExercise = {
        name,
        muscleGroup,
        category,
        description: description || '',
        id: targetId, 
    };

    exercises[index] = updatedExercise;
    res.status(200).json(updatedExercise);
};

const patchExercise = (req, res) => {
    // Commit 4: Actualización de PATCH
    const targetId = String(req.params.id);
    const index = exercises.findIndex(e => e.id === targetId);

    if (index === -1) {
        return res.status(404).json({ error: 'Ejercicio no encontrado para PATCH' });
    }

    // Actualización parcial: combina lo existente con los campos enviados
    const updatedExercise = {
        ...exercises[index], // Mantiene todo lo que estaba
        ...req.body,         // Sobreescribe solo los campos enviados
        id: targetId,
    };
    
    exercises[index] = updatedExercise;
    res.status(200).json(updatedExercise);
};

const deleteExercise = (req, res) => {
    res.status(204).json({ message: "DELETE /exercises/:id - Implementacion pendiente", id: req.params.id });
};

module.exports = {
    getExercises,
    getExerciseById,
    createExercise,
    putExercise,
    patchExercise,
    deleteExercise,
};