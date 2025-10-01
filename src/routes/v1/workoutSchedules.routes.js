const express = require('express');
const router = express.Router();
const schedulesController = require('../../controllers/workoutSchedules.controller');
const { get } = require('./workoutPlans.routes');

// Scaffold de Rutas CRUD
//GET
router.get('/', schedulesController.getWorkoutSchedules);
router.get('/:id', schedulesController.getWorkoutScheduleById);
//POST
router.post('/', schedulesController.createWorkoutSchedule);
//PUT Y PATCH
router.put('/:id', schedulesController.putWorkoutSchedule);    
router.patch('/:id', schedulesController.patchWorkoutSchedule); 
//DELETE
router.delete('/:id', schedulesController.deleteWorkoutSchedule);

module.exports = router;