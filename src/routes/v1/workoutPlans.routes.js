const express = require('express');
const router = express.Router();
const plansController = require('../../controllers/workoutPlans.controller');

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