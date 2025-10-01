const { workoutPlans } = require('../Data/workoutPlans');

// ✅ GET all
const getWorkoutPlans = (req, res) => {
  const { userId } = req.query;
  let filtered = workoutPlans;

  if (userId) {
    filtered = workoutPlans.filter(p => p.userId === String(userId));
  }

  res.status(200).json(filtered);
};

// ✅ GET by ID
const getWorkoutPlanById = (req, res) => {
  const targetId = String(req.params.id);
  const plan = workoutPlans.find(p => p.id === targetId);

  if (!plan) {
    return res.status(404).json({ error: 'Plan de entrenamiento no encontrado' });
  }

  res.status(200).json(plan);
};

// ✅ POST (crear nuevo plan)
const createWorkoutPlan = (req, res) => {
  const { userId, namePlan } = req.body;

  if (!userId || !namePlan) {
    return res.status(400).json({ error: 'userId y namePlan son requeridos' });
  }

  const newPlan = {
    id: `wp${Date.now()}`, // ID único
    userId: String(userId),
    name: namePlan,
    dateCreated: new Date().toISOString().split('T')[0],
    exercisesCount: 0
  };

  workoutPlans.push(newPlan);
  res.status(201).json(newPlan);
};

// ✅ PUT (actualización completa)
const putWorkoutPlan = (req, res) => {
  const targetId = String(req.params.id);
  const index = workoutPlans.findIndex(p => p.id === targetId);

  if (index === -1) {
    return res.status(404).json({ error: 'Plan no encontrado para PUT' });
  }

  const { userId, namePlan, name } = req.body;
  const finalName = namePlan || name;

  if (!userId || !finalName) {
    return res.status(400).json({ error: 'PUT requiere userId y name (o namePlan)' });
  }

  workoutPlans[index] = {
    id: targetId,
    userId: String(userId),
    name: finalName,
    dateCreated: workoutPlans[index].dateCreated,
    exercisesCount: workoutPlans[index].exercisesCount
  };

  res.status(200).json(workoutPlans[index]);
};

// ✅ PATCH (actualización parcial)
const patchWorkoutPlan = (req, res) => {
  const targetId = String(req.params.id);
  const index = workoutPlans.findIndex(p => p.id === targetId);

  if (index === -1) {
    return res.status(404).json({ error: 'Plan no encontrado para PATCH' });
  }

  const updateData = { ...req.body };

  // Si viene "namePlan", lo guardamos en "name"
  if (updateData.namePlan) {
    updateData.name = updateData.namePlan;
    delete updateData.namePlan;
  }

  workoutPlans[index] = {
    ...workoutPlans[index],
    ...updateData,
    id: targetId // aseguramos que no cambie el ID
  };

  res.status(200).json(workoutPlans[index]);
};

// ✅ DELETE
const deleteWorkoutPlan = (req, res) => {
  const targetId = String(req.params.id);
  const index = workoutPlans.findIndex(p => p.id === targetId);

  if (index === -1) {
    return res.status(404).json({ error: 'Plan no encontrado para eliminar' });
  }

  workoutPlans.splice(index, 1);
  res.status(204).send(); // 204 = No Content
};

module.exports = {
  getWorkoutPlans,
  getWorkoutPlanById,
  createWorkoutPlan,
  putWorkoutPlan,
  patchWorkoutPlan,
  deleteWorkoutPlan
};
