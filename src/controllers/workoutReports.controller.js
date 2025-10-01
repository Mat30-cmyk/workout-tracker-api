let workoutReports = [
  // Reporte 1: Usuario 1, Plan wp1
  {
    id: "r1",
    userId: "1",
    planId: "wp1",
    scheduleId: "ws1",
    date: "2025-10-02",
    totalDuration: 60,
    caloriesBurned: 350,
    notes: "Full Body exitoso. Sentí gran progreso en press de banca.",
  },
  // Reporte 2: Usuario 2, Plan wp2
  {
    id: "r2",
    userId: "2",
    planId: "wp2",
    scheduleId: "ws2",
    date: "2025-10-04",
    totalDuration: 45,
    caloriesBurned: 300,
    notes: "Piernas intensas. Foco en sentadilla profunda.",
  },
  // Reporte 3: Usuario 1, Plan wp1
  {
    id: "r3",
    userId: "1",
    planId: "wp1",
    scheduleId: "ws3",
    date: "2025-10-05",
    totalDuration: 70,
    caloriesBurned: 400,
    notes: "Mejor marca personal en peso muerto. Alto rendimiento.",
  },
  // Reporte 4
  {
    id: "r4",
    userId: "3",
    planId: "wp3",
    scheduleId: "ws4",
    date: "2025-10-06",
    totalDuration: 50,
    caloriesBurned: 320,
    notes: "Sesión de espalda, dominadas con lastre.",
  },
  // Reporte 5
  {
    id: "r5",
    userId: "2",
    planId: "wp2",
    scheduleId: "ws5",
    date: "2025-10-07",
    totalDuration: 40,
    caloriesBurned: 280,
    notes: "Entrenamiento ligero de hombros.",
  },
  // Reporte 6
  {
    id: "r6",
    userId: "4",
    planId: "wp4",
    scheduleId: "ws6",
    date: "2025-10-08",
    totalDuration: 90,
    caloriesBurned: 600,
    notes: "Rutina de resistencia. Mucho cardio.",
  },
  // Reporte 7
  {
    id: "r7",
    userId: "1",
    planId: "wp1",
    scheduleId: "ws7",
    date: "2025-10-09",
    totalDuration: 55,
    caloriesBurned: 310,
    notes: "Sesión rápida de Full Body, me sentí cansado.",
  },
  // Reporte 8
  {
    id: "r8",
    userId: "3",
    planId: "wp3",
    scheduleId: "ws8",
    date: "2025-10-10",
    totalDuration: 75,
    caloriesBurned: 500,
    notes: "Sesión completa de core, sentí mucha estabilidad.",
  },
  // Reporte 9
  {
    id: "r9",
    userId: "2",
    planId: "wp5",
    scheduleId: "ws9",
    date: "2025-10-11",
    totalDuration: 65,
    caloriesBurned: 420,
    notes: "Buen entrenamiento de fuerza en banco inclinado.",
  },
  // Reporte 10
  {
    id: "r10",
    userId: "5",
    planId: "wp6",
    scheduleId: "ws10",
    date: "2025-10-12",
    totalDuration: 30,
    caloriesBurned: 180,
    notes: "Sesión corta de recuperación activa.",
  },
  // Reporte 11
  {
    id: "r11",
    userId: "4",
    planId: "wp4",
    scheduleId: "ws11",
    date: "2025-10-13",
    totalDuration: 100,
    caloriesBurned: 700,
    notes: "Entrenamiento de resistencia extremo.",
  },
  // Reporte 12
  {
    id: "r12",
    userId: "1",
    planId: "wp7",
    scheduleId: "ws12",
    date: "2025-10-14",
    totalDuration: 80,
    caloriesBurned: 520,
    notes: "Sesión enfocada en brazos, curls pesados.",
  },
  // Reporte 13
  {
    id: "r13",
    userId: "2",
    planId: "wp8",
    scheduleId: "ws13",
    date: "2025-10-15",
    totalDuration: 70,
    caloriesBurned: 450,
    notes: "Entrenamiento HIIT. Muy demandante.",
  },
  // Reporte 14
  {
    id: "r14",
    userId: "3",
    planId: "wp9",
    scheduleId: "ws14",
    date: "2025-10-16",
    totalDuration: 60,
    caloriesBurned: 400,
    notes: "Sesión de movilidad y flexibilidad.",
  },
  // Reporte 15
  {
    id: "r15",
    userId: "5",
    planId: "wp6",
    scheduleId: "ws15",
    date: "2025-10-17",
    totalDuration: 45,
    caloriesBurned: 290,
    notes: "Sesión de calentamiento con pesas rusas.",
  },
  // Reporte 16
  {
    id: "r16",
    userId: "4",
    planId: "wp4",
    scheduleId: "ws16",
    date: "2025-10-18",
    totalDuration: 120,
    caloriesBurned: 850,
    notes: "Entrenamiento largo. Maratón de cardio.",
  },
  // Reporte 17
  {
    id: "r17",
    userId: "1",
    planId: "wp7",
    scheduleId: "ws17",
    date: "2025-10-19",
    totalDuration: 90,
    caloriesBurned: 610,
    notes: "Sesión intensa de tríceps y pectoral.",
  },
  // Reporte 18
  {
    id: "r18",
    userId: "2",
    planId: "wp8",
    scheduleId: "ws18",
    date: "2025-10-20",
    totalDuration: 55,
    caloriesBurned: 330,
    notes: "Cardio ligero en cinta y bicicleta.",
  },
  // Reporte 19
  {
    id: "r19",
    userId: "3",
    planId: "wp9",
    scheduleId: "ws19",
    date: "2025-10-21",
    totalDuration: 65,
    caloriesBurned: 410,
    notes: "Trabajo de core y estabilidad.",
  },
  // Reporte 20
  {
    id: "r20",
    userId: "5",
    planId: "wp10",
    scheduleId: "ws20",
    date: "2025-10-22",
    totalDuration: 75,
    caloriesBurned: 480,
    notes: "Circuito mixto de fuerza y cardio.",
  },
];

// 1. GET /api/v1/workout-reports
const getGeneralReports = (req, res) => {
    // Commit 6: Validacion de Query Strings (ej. filtro por fecha)
    const { date } = req.query;
    let filtered = workoutReports;

    if (date) {
        // Asumiendo formato de fecha ISO simple (YYYY-MM-DD)
        filtered = filtered.filter(r => r.date === date);
    }
    
    // Si no se encuentran reportes con el filtro
    if (filtered.length === 0) {
        return res.status(200).json({ message: 'No hay reportes que coincidan con los criterios.' });
    }

    res.status(200).json(filtered);
};

// 2. GET /api/v1/users/:userId/workout-reports
const getReportsByUser = (req, res) => {
    // Commit 3: Implementación GET por Usuario
    const targetUserId = req.params.userId;
    const filteredReports = workoutReports.filter(r => r.userId === targetUserId);

    if (filteredReports.length === 0) {
         // Se puede devolver 200 con un array vacío o 404 si el usuario no tiene reportes
         return res.status(202).json(["Este usuario no tiene reportes."]);
    }

    res.status(200).json(filteredReports);
};

// 3. GET /api/v1/workoutPlans/:planId/workout-reports
const getReportsByPlan = (req, res) => {
    // Commit 4: Implementación GET por Plan
    const targetPlanId = req.params.planId;
    const filteredReports = workoutReports.filter(r => r.planId === targetPlanId);

    if (filteredReports.length === 0) {
         return res.status(200).json([]);
    }

    res.status(200).json(filteredReports);
};

// 4. GET /api/v1/workoutSchedules/:scheduleId/workout-reports
const getReportsBySchedule = (req, res) => {
    // Commit 5: Implementación GET por Schedule
    const targetScheduleId = req.params.scheduleId;
    // Como un Schedule solo debería tener 0 o 1 Reporte, usamos find
    const report = workoutReports.find(r => r.scheduleId === targetScheduleId);

    if (!report) {
         return res.status(404).json({ error: 'Reporte para esta Programación no encontrado.' });
    }

    res.status(200).json(report); // Devolvemos el objeto, no un array
};

module.exports = {
    getGeneralReports,
    getReportsByUser,
    getReportsByPlan,
    getReportsBySchedule,
};