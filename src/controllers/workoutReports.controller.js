let workoutReports = [
  // Simulación de reportes de sesiones completadas
  { id: "r1", scheduleId: "ws2", date: "2025-10-04", totalDuration: 45, caloriesBurned: 350, notes: "Excelente sesión de piernas, mucha energía." },
  { id: "r2", scheduleId: "ws3", date: "2025-10-05", totalDuration: 60, caloriesBurned: 500, notes: "Rutina full body muy intensa." },
  { id: "r3", scheduleId: "ws4", date: "2025-10-06", totalDuration: 30, caloriesBurned: 200, notes: "Cardio ligero en la mañana." },
  { id: "r4", scheduleId: "ws5", date: "2025-10-07", totalDuration: 50, caloriesBurned: 420, notes: "Entrenamiento de espalda, sentí buena técnica." },
  { id: "r5", scheduleId: "ws6", date: "2025-10-08", totalDuration: 40, caloriesBurned: 310, notes: "Sesión de pecho, aún puedo mejorar repeticiones." },
  { id: "r6", scheduleId: "ws7", date: "2025-10-09", totalDuration: 55, caloriesBurned: 480, notes: "Entrenamiento de fuerza con pesas." },
  { id: "r7", scheduleId: "ws8", date: "2025-10-10", totalDuration: 35, caloriesBurned: 250, notes: "Circuito de abdominales, muy exigente." },
  { id: "r8", scheduleId: "ws9", date: "2025-10-11", totalDuration: 70, caloriesBurned: 600, notes: "Rutina extendida de cuerpo completo." },
  { id: "r9", scheduleId: "ws10", date: "2025-10-12", totalDuration: 45, caloriesBurned: 380, notes: "Piernas y glúteos, terminé agotado." },
  { id: "r10", scheduleId: "ws11", date: "2025-10-13", totalDuration: 30, caloriesBurned: 220, notes: "Entrenamiento HIIT, muy intenso pero corto." },
  { id: "r11", scheduleId: "ws12", date: "2025-10-14", totalDuration: 50, caloriesBurned: 410, notes: "Espalda y hombros, buena progresión en cargas." },
  { id: "r12", scheduleId: "ws13", date: "2025-10-15", totalDuration: 40, caloriesBurned: 330, notes: "Sesión de pecho y tríceps, excelente técnica." },
  { id: "r13", scheduleId: "ws14", date: "2025-10-16", totalDuration: 65, caloriesBurned: 550, notes: "Rutina de cuerpo completo con cardio final." },
  { id: "r14", scheduleId: "ws15", date: "2025-10-17", totalDuration: 25, caloriesBurned: 180, notes: "Cardio moderado, sesión corta." },
  { id: "r15", scheduleId: "ws16", date: "2025-10-18", totalDuration: 55, caloriesBurned: 470, notes: "Sesión intensa de pesas para piernas." },
  { id: "r16", scheduleId: "ws17", date: "2025-10-19", totalDuration: 60, caloriesBurned: 520, notes: "Entrenamiento funcional, sentí buena resistencia." },
  { id: "r17", scheduleId: "ws18", date: "2025-10-20", totalDuration: 45, caloriesBurned: 390, notes: "Sesión de hombros y brazos, terminé fuerte." },
  { id: "r18", scheduleId: "ws19", date: "2025-10-21", totalDuration: 50, caloriesBurned: 440, notes: "Piernas con sentadillas pesadas, buen progreso." },
  { id: "r19", scheduleId: "ws20", date: "2025-10-22", totalDuration: 35, caloriesBurned: 260, notes: "Cardio HIIT, muy demandante." },
  { id: "r20", scheduleId: "ws1", date: "2025-10-23", totalDuration: 75, caloriesBurned: 650, notes: "Sesión larga de resistencia, me sentí increíble." },
];

// 1. GET /api/v1/workout-reports
const getGeneralReports = (req, res) => {
    res.status(200).json({ message: "GET /workout-reports (General) - Implementacion pendiente", workoutReports });
};

// 2. GET /api/v1/users/:userId/workout-reports
const getReportsByUser = (req, res) => {
    res.status(200).json({ message: "GET /users/:userId/workout-reports - Implementacion pendiente", userId: req.params.userId });
};

// 3. GET /api/v1/workoutPlans/:planId/workout-reports
const getReportsByPlan = (req, res) => {
    res.status(200).json({ message: "GET /workout-plans/:planId/workout-reports - Implementacion pendiente", planId: req.params.planId });
};

// 4. GET /api/v1/workoutSchedules/:scheduleId/workout-reports
const getReportsBySchedule = (req, res) => {
    res.status(200).json({ message: "GET /workout-schedules/:scheduleId/workout-reports - Implementacion pendiente", scheduleId: req.params.scheduleId });
};

module.exports = {
    getGeneralReports,
    getReportsByUser,
    getReportsByPlan,
    getReportsBySchedule,
};