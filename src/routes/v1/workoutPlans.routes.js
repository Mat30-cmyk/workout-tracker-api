const express = require('express');
const router = express.Router();
const plansController = require('../../controllers/workoutPlans.controller');
const workoutExercisesController = require('../../controllers/workoutExercises.controller');

// RUTA ANIDADA para POST (Commit 1)
router.post('/:planId/exercises', workoutExercisesController.associateExerciseToPlan); // POST /api/v1/workoutPlans/:planId/exercises

// Scaffold de Rutas CRUD
//GET
router.get('/', plansController.getWorkoutPlans);
router.get('/:id', plansController.getWorkoutPlanById);
//POST
router.post('/', plansController.createWorkoutPlan);
//PUT Y PATCH
router.put('/:id', plansController.putWorkoutPlan);    
router.patch('/:id', plansController.patchWorkoutPlan); 
//DELETE
router.delete('/:id', plansController.deleteWorkoutPlan);

module.exports = router;