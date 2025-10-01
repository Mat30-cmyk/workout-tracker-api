const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/users.controller');
const usersController = require('../../controllers/workoutReports.controller');

// 2. GET /api/v1/users/:userId/workout-reports
router.get('/:userId/workout-reports', reportsController.getReportsByUser);

//commit 7: Incluyo Ruta de login (es una acción)
router.post('/login', usersController.loginUser); // POST /api/v1/users/login

// Scaffold de Rutas CRUD
//GET
router.get('/', usersController.getUsers); // GET /api/v1/users
router.get('/:id', usersController.getUserById); // GET /api/v1/users/:id
//POST
router.post('/', usersController.createUser); // POST /api/v1/users
//PUT Y PATCH
router.put('/:id', usersController.putUser); // PUT /api/v1/users/:id
router.patch('/:id', usersController.patchUser); // PATCH /api/v1/users/:id
//DELETE
router.delete('/:id', usersController.deleteUser); // DELETE /api/v1/users/:id

module.exports = router;