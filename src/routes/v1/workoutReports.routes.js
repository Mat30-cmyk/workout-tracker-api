const express = require('express');
const router = express.Router();
const reportsController = require('../../controllers/workoutReports.controller');

// Ruta 1: GET /api/v1/workout-reports
router.get('/', reportsController.getGeneralReports);

module.exports = router;