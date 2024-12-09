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
    },
    {
      title: "Upper Body Strength",
      description: "Push and pull exercises to strengthen upper body",
      exercises: [
        { name: "Bench Press", sets: 4, reps: 8, duration: 0, weight: 60 },
        { name: "Pull-ups", sets: 3, reps: 10, duration: 0, weight: 0 },
        { name: "Shoulder Press", sets: 3, reps: 12, duration: 0, weight: 30 }
      ],
      totalDuration: 75,
      caloriesBurned: 500,
      tags: ["upper body", "strength"],
      type: "workout",
      user: "64a7f9f9b1d3c4e5f6789012"
    },
    {
      title: "HIIT (High-Intensity Interval Training)",
      description: "Short bursts of high-intensity exercises with rests",
      exercises: [
        { name: "Burpees", sets: 3, reps: 15, duration: 0, weight: 0 },
        { name: "Jump Squats", sets: 3, reps: 12, duration: 0, weight: 0 },
        { name: "Mountain Climbers", sets: 3, reps: 20, duration: 0, weight: 0 }
      ],
      totalDuration: 30,
      caloriesBurned: 400,
      tags: ["hiit", "fat burn"],
      type: "workout",
      user: "64a7f9f9b1d3c4e5f6789012"
    },
    {
      title: "Yoga and Flexibility",
      description: "Relaxing yoga sequence to improve flexibility",
      exercises: [
        { name: "Sun Salutations", sets: 0, reps: 0, duration: 10, weight: 0 },
        { name: "Warrior Pose", sets: 0, reps: 0, duration: 5, weight: 0 },
        { name: "Child's Pose", sets: 0, reps: 0, duration: 5, weight: 0 }
      ],
      totalDuration: 30,
      caloriesBurned: 150,
      tags: ["yoga", "flexibility"],
      type: "workout",
      user: "64a7f9f9b1d3c4e5f6789012"
    },
    {
      title: "Endurance Training",
      description: "Build cardiovascular endurance",
      exercises: [
        { name: "Running", sets: 0, reps: 0, duration: 45, weight: 0 },
        { name: "Cycling", sets: 0, reps: 0, duration: 30, weight: 0 }
      ],
      totalDuration: 75,
      caloriesBurned: 600,
      tags: ["endurance", "cardio"],
      type: "workout",
      user: "64a7f9f9b1d3c4e5f6789012"
    },
    {
      title: "Core and Abs",
      description: "Strengthen your core muscles",
      exercises: [
        { name: "Plank", sets: 3, reps: 0, duration: 1, weight: 0 },
        { name: "Crunches", sets: 3, reps: 15, duration: 0, weight: 0 },
        { name: "Russian Twists", sets: 3, reps: 20, duration: 0, weight: 0 }
      ],
      totalDuration: 30,
      caloriesBurned: 200,
      tags: ["core", "abs"],
      type: "workout",
      user: "64a7f9f9b1d3c4e5f6789012"
    },
    {
      title: "Full Body Circuit",
      description: "Quick full-body workout with minimal rest",
      exercises: [
        { name: "Push-ups", sets: 3, reps: 15, duration: 0, weight: 0 },
        { name: "Squats", sets: 3, reps: 15, duration: 0, weight: 0 },
        { name: "Jumping Jacks", sets: 3, reps: 30, duration: 0, weight: 0 }
      ],
      totalDuration: 25,
      caloriesBurned: 350,
      tags: ["full body", "quick"],
      type: "workout",
      user: "64a7f9f9b1d3c4e5f6789012"
    },
    {
      title: "Swimming Session",
      description: "Laps in the pool for a low-impact workout",
      exercises: [
        { name: "Freestyle Laps", sets: 0, reps: 0, duration: 20, weight: 0 },
        { name: "Backstroke Laps", sets: 0, reps: 0, duration: 20, weight: 0 }
      ],
      totalDuration: 40,
      caloriesBurned: 300,
      tags: ["swimming", "low impact"],
      type: "workout",
      user: "64a7f9f9b1d3c4e5f6789012"
    }
  ]
};
