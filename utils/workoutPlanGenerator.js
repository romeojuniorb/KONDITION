/**
 * Function to generate a workout plan
 * @param {string} goal - User's goal: "lose_weight", "gain_muscle", "improve_endurance"
 * @param {number} experience - Experience level: 1 (Beginner), 2 (Intermediate), 3 (Advanced)
 * @returns {object} - Generated workout plan
 */
export const generateWorkoutPlan = (goal, experience) => {
    const beginnerWorkouts = [
      { day: "Monday", activity: "Full-body workout (bodyweight)" },
      { day: "Wednesday", activity: "Cardio (30 minutes brisk walk)" },
      { day: "Friday", activity: "Yoga and stretching" },
    ];
  
    const intermediateWorkouts = [
      { day: "Monday", activity: "Upper-body strength training" },
      { day: "Wednesday", activity: "HIIT (High-Intensity Interval Training)" },
      { day: "Friday", activity: "Lower-body strength training" },
    ];
  
    const advancedWorkouts = [
      { day: "Monday", activity: "Push-pull-legs split: Push day" },
      { day: "Tuesday", activity: "Cardio (running or cycling)" },
      { day: "Thursday", activity: "Push-pull-legs split: Pull day" },
      { day: "Saturday", activity: "Push-pull-legs split: Leg day" },
    ];
  
    if (experience === 1) return beginnerWorkouts;
    if (experience === 2) return intermediateWorkouts;
    return advancedWorkouts;
  };
  