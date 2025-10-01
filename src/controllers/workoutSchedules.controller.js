let workoutSchedules = [
  // Usuario 1
  { id: "ws1", userId: "1", planId: "wp1", date: "2025-10-02", startTime: "07:00", durationMinutes: 60, status: "scheduled" },
  { id: "ws2", userId: "1", planId: "wp2", date: "2025-10-04", startTime: "18:30", durationMinutes: 45, status: "completed" },
  { id: "ws3", userId: "1", planId: "wp3", date: "2025-10-06", startTime: "06:30", durationMinutes: 70, status: "scheduled" },
  { id: "ws4", userId: "1", planId: "wp4", date: "2025-10-08", startTime: "19:00", durationMinutes: 40, status: "cancelled" },

  // Usuario 2
  { id: "ws5", userId: "2", planId: "wp1", date: "2025-10-01", startTime: "08:00", durationMinutes: 55, status: "completed" },
  { id: "ws6", userId: "2", planId: "wp2", date: "2025-10-03", startTime: "20:00", durationMinutes: 60, status: "scheduled" },
  { id: "ws7", userId: "2", planId: "wp5", date: "2025-10-05", startTime: "17:15", durationMinutes: 30, status: "scheduled" },
  { id: "ws8", userId: "2", planId: "wp3", date: "2025-10-07", startTime: "06:00", durationMinutes: 75, status: "completed" },

  // Usuario 3
  { id: "ws9", userId: "3", planId: "wp4", date: "2025-10-02", startTime: "07:30", durationMinutes: 50, status: "completed" },
  { id: "ws10", userId: "3", planId: "wp1", date: "2025-10-05", startTime: "18:00", durationMinutes: 65, status: "scheduled" },
  { id: "ws11", userId: "3", planId: "wp2", date: "2025-10-09", startTime: "19:30", durationMinutes: 40, status: "scheduled" },
  { id: "ws12", userId: "3", planId: "wp5", date: "2025-10-11", startTime: "09:00", durationMinutes: 35, status: "cancelled" },

  // Usuario 4
  { id: "ws13", userId: "4", planId: "wp2", date: "2025-10-03", startTime: "06:45", durationMinutes: 55, status: "completed" },
  { id: "ws14", userId: "4", planId: "wp3", date: "2025-10-06", startTime: "20:15", durationMinutes: 60, status: "scheduled" },
  { id: "ws15", userId: "4", planId: "wp4", date: "2025-10-08", startTime: "07:15", durationMinutes: 45, status: "completed" },
  { id: "ws16", userId: "4", planId: "wp5", date: "2025-10-10", startTime: "18:45", durationMinutes: 50, status: "scheduled" },

  // Usuario 5
  { id: "ws17", userId: "5", planId: "wp1", date: "2025-10-01", startTime: "06:00", durationMinutes: 70, status: "completed" },
  { id: "ws18", userId: "5", planId: "wp2", date: "2025-10-04", startTime: "19:45", durationMinutes: 55, status: "scheduled" },
  { id: "ws19", userId: "5", planId: "wp3", date: "2025-10-07", startTime: "08:30", durationMinutes: 60, status: "cancelled" },
  { id: "ws20", userId: "5", planId: "wp4", date: "2025-10-09", startTime: "20:00", durationMinutes: 50, status: "scheduled" },
];

const getWorkoutSchedules = (req, res) => {
    // Commit 2: Implementación GET lista
    res.status(200).json(workoutSchedules);
};

const getWorkoutScheduleById = (req, res) => {
    // Commit 2: Implementación GET individual
    const targetId = String(req.params.id); 
    const schedule = workoutSchedules.find(s => s.id === targetId);

    if (!schedule) {
        return res.status(404).json({ error: 'Programación de entrenamiento no encontrada' });
    }

    res.status(200).json(schedule);
};

const createWorkoutSchedule = (req, res) => {
    res.status(201).json({ message: "POST /workout-schedules - Implementacion pendiente", body: req.body });
};

const putWorkoutSchedule = (req, res) => {
    res.status(200).json({ message: "PUT /workout-schedules/:id - Implementacion pendiente", id: req.params.id, body: req.body });
};

const patchWorkoutSchedule = (req, res) => {
    res.status(200).json({ message: "PATCH /workout-schedules/:id - Implementacion pendiente", id: req.params.id, body: req.body });
};

const deleteWorkoutSchedule = (req, res) => {
    res.status(204).json({ message: "DELETE /workout-schedules/:id - Implementacion pendiente", id: req.params.id });
};

module.exports = {
    getWorkoutSchedules,
    getWorkoutScheduleById,
    createWorkoutSchedule,
    putWorkoutSchedule,
    patchWorkoutSchedule,
    deleteWorkoutSchedule,
};