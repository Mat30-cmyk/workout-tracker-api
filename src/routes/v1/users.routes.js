const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/users.controller');

// Scaffold de Rutas CRUD
router.get('/', usersController.getUsers); // GET /api/v1/users
router.get('/:id', usersController.getUserById); // GET /api/v1/users/:id
router.post('/', usersController.createUser); // POST /api/v1/users
router.put('/:id', usersController.updateUser); // PUT /api/v1/users/:id
router.patch('/:id', usersController.updateUser); // PATCH /api/v1/users/:id
router.delete('/:id', usersController.deleteUser); // DELETE /api/v1/users/:id

module.exports = router;