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
    // Commit 6: Validacion de Query Strings (filtro por muscleGroup)
    const { muscleGroup } = req.query;
    let filtered = exercises;

    if (muscleGroup) {
        // Filtra sin distinguir mayúsculas/minúsculas
        filtered = exercises.filter(e => e.muscleGroup.toLowerCase() === muscleGroup.toLowerCase());
    }

    res.status(200).json(filtered);
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

// Commit 4: Actualización COMPLETA de PUT
const putExercise = (req, res) => {
  const { id } = req.params; 
  // Extraemos el id que llega desde la URL (ejemplo: /exercises/e5)

  const paramId = String(id).trim(); 
  // Normalizamos el id recibido (lo convertimos a string y quitamos espacios invisibles)

  console.log('PUT Exercise - paramId:', JSON.stringify(paramId));
  console.log('PUT Exercise - existing ids:', exercises.map(e => e.id));
  // DEBUG: mostramos en consola el id recibido y la lista de ids que existen

  const index = exercises.findIndex(e => String(e.id).trim() === paramId);
  // Buscamos en el array el índice del ejercicio que coincida con el id recibido

  if (index === -1) {
    return res.status(404).json({ error: "Ejercicio no encontrado para PUT" });
  }
  // Si no se encontró el ejercicio, devolvemos error 404

  const { name, muscleGroup, category, description } = req.body;
  // Desestructuramos los campos que llegan en el body de la petición

  if (!name || !muscleGroup || !category) {
    return res.status(400).json({ error: "PUT requiere name, muscleGroup y category" });
  }
  // Validamos que en un PUT siempre lleguen todos los campos obligatorios

  const updatedExercise = {
    id: exercises[index].id,             // Conservamos el id original del ejercicio
    name,                                // Reemplazamos con el nuevo nombre
    muscleGroup,                         // Reemplazamos el nuevo grupo muscular
    category,                            // Reemplazamos la categoría
    description: description || "",      // Si no mandan description, queda vacío
    updatedAt: new Date().toISOString()  // Fecha de la última actualización
  };

  exercises[index] = updatedExercise;
  // Guardamos el ejercicio actualizado en la posición original del array

  return res.status(200).json(updatedExercise);
  // Respondemos con el ejercicio ya actualizado
};

// Commit 4: Actualización de PATCH
const patchExercise = (req, res) => {
  const { id } = req.params; 
  // Extraemos el id de la URL

  const paramId = String(id).trim(); 
  // Normalizamos el id recibido

  console.log('PATCH Exercise - paramId:', JSON.stringify(paramId));
  console.log('PATCH Exercise - existing ids:', exercises.map(e => e.id));
  // DEBUG: mostramos id recibido y los ids disponibles en el array

  const index = exercises.findIndex(e => String(e.id).trim() === paramId);
  // Buscamos el índice del ejercicio que coincida

  if (index === -1) {
    return res.status(404).json({ error: "Ejercicio no encontrado para PATCH" });
  }
  // Si no existe el ejercicio, devolvemos 404

  const cambios = req.body;
  // Tomamos los cambios enviados en la petición

  const updatedExercise = {
    ...exercises[index],                 // Copiamos el ejercicio que ya existía
    ...cambios,                          // Sobrescribimos solo los campos enviados
    id: exercises[index].id,             // Protegemos el id para que no cambie
    updatedAt: new Date().toISOString()  // Guardamos la fecha de modificación
  };

  exercises[index] = updatedExercise;
  // Actualizamos el ejercicio en el array

  return res.status(200).json(updatedExercise);
  // Respondemos con el ejercicio ya actualizado
};

const deleteExercise = (req, res) => {
    // Commit 5: Eliminación con DELETE
    const targetId = String(req.params.id);
    const initialLength = exercises.length;

    // Actualiza el array 'exercises'
    exercises = exercises.filter(e => e.id !== targetId);

    if (exercises.length === initialLength) {
        return res.status(404).json({ error: 'Ejercicio no encontrado para eliminar' });
    }

    res.status(204).send(); // 204 No Content
};

module.exports = {
    getExercises,
    getExerciseById,
    createExercise,
    putExercise,
    patchExercise,
    deleteExercise,
};