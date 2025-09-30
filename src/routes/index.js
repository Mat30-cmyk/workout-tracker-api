const express = require('express');
const router = express.Router();
const v1Routes = require('./v1');

// Ruta principal de la API
router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Workout Tracker API',
    versions: ['v1'],
    endpoints: { v1: '/api/v1' }
  });
});

// Montar rutas de la version 1
router.use('/v1', v1Routes);

module.exports = router;