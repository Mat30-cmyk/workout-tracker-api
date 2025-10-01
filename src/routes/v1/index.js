const express = require('express');
const router = express.Router();
const usersRoutes = require('./users.routes');
const exercisesRoutes = require('./exercises.routes');
const workoutPlansRoutes = require('./workoutPlans.routes');
const workoutExercisesRoutes = require('./workoutExercises.routes');
const korkoutSchedulesRoutes = require('./korkoutSchedules.routes');

// Montar rutas de recursos
router.use('/users', usersRoutes);
router.use('/exercises', exercisesRoutes);
router.use('/workoutPlans', workoutPlansRoutes);
router.use('/workoutExercises', workoutExercisesRoutes);
router.use('/workoutSchedules', korkoutSchedulesRoutes);

module.exports = router;