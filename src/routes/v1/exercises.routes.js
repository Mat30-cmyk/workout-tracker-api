const express = require('express');
const router = express.Router();
const exercisesController = require('../../controllers/exercises.controller');

// Scaffold de Rutas CRUD
//GET
router.get('/', exercisesController.getExercises);
router.get('/:id', exercisesController.getExerciseById);
//POST
router.post('/', exercisesController.createExercise);
//PUT Y PATCH
router.put('/:id', exercisesController.putExercise);    
router.patch('/:id', exercisesController.patchExercise); 
//DELETE
router.delete('/:id', exercisesController.deleteExercise);

module.exports = router;