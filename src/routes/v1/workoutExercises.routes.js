const express = require('express');
const router = express.Router();
const exercisesController = require('../../controllers/workoutExercises.controller');

// Rutas directas por ID de asociación (PATCH y DELETE)
//PATCH
router.patch('/:id', exercisesController.patchWorkoutExercise); // PATCH /api/v1/workoutExercises/:id
//DELETE
router.delete('/:id', exercisesController.deleteWorkoutExercise); // DELETE /api/v1/workoutExercises/:id

module.exports = router;