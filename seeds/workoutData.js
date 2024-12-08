export default {
    workouts: [
      {
        title: "Leg Day",
        description: "Focused on squats and lunges",
        exercises: [
          { name: "Squats", sets: 4, reps: 10, duration: 0, weight: 80 },
          { name: "Lunges", sets: 3, reps: 12, duration: 0, weight: 30 }
        ],
        totalDuration: 60, // In minutes
        caloriesBurned: 400,
        tags: ["legs", "strength"],
        type: "workout",
        user: "64a7f9f9b1d3c4e5f6789012" // Placeholder ObjectId
      },
      {
        title: "Morning Cardio",
        description: "Jogging and stretching to start the day",
        exercises: [
          { name: "Jogging", sets: 0, reps: 0, duration: 30, weight: 0 },
          { name: "Stretching", sets: 0, reps: 0, duration: 10, weight: 0 }
        ],
        totalDuration: 40,
        caloriesBurned: 250,
        tags: ["cardio", "morning"],
        type: "workout",
        user: "64a7f9f9b1d3c4e5f6789012" // Placeholder ObjectId
      }
    ]
  };
  