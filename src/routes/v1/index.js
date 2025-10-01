const express = require('express');
const router = express.Router();
const usersRoutes = require('./users.routes');

// Montar rutas de recursos
router.use('/users', usersRoutes);
router.use('/exercises', exercisesRoutes);

module.exports = router;