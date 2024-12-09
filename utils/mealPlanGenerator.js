import MealPost from "../models/MealPost.js";

/**
 * Function to calculate BMI
 */
const calculateBMI = (weight, height) => {
  const heightInMeters = height / 100;
  return Number((weight / (heightInMeters ** 2)).toFixed(1));
};

/**
 * Function to calculate daily calorie needs
 */
const calculateCalories = (weight, height, age, sex, goal) => {
  let bmr;
  if (sex === "male") {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  if (goal === "lose_weight") {
    return Math.round(bmr * 1.2 - 500);
  } else if (goal === "gain_weight") {
    return Math.round(bmr * 1.2 + 500);
  } else {
    return Math.round(bmr * 1.2);
  }
};

/**
 * Function to generate a meal plan
 */
export const generatePlan = async (weight, height, age, sex, goal) => {
  try {
    const bmi = calculateBMI(weight, height);
    const dailyCalories = calculateCalories(weight, height, age, sex, goal);

    // Fetch all available meals from the database
    const meals = await MealPost.find();
    if (!meals || meals.length === 0) {
      throw new Error("No meals available in the database.");
    }

    // Filter meals within calorie limits
    const filteredMeals = meals.filter(
      meal => meal.totalCalories <= dailyCalories / 3
    );

    if (filteredMeals.length < 3) {
      console.warn("Not enough meals to create a complete plan.");
    }

    // Allocate meals dynamically
    const mealPlan = {
      breakfast: filteredMeals[0] || null,
      lunch: filteredMeals[1] || null,
      dinner: filteredMeals[2] || null,
    };

    // Return the final plan
    return {
      user: {
        weight,
        height,
        age,
        sex,
        goal,
        bmi,
        recommendation: goal === "lose_weight"
          ? "Consider regular exercise and a calorie deficit diet."
          : goal === "gain_weight"
          ? "Focus on high-protein meals and strength training."
          : "Maintain a balanced diet with moderate activity.",
      },
      meals: Object.values(mealPlan).filter(meal => meal !== null),
    };
  } catch (error) {
    console.error("Error generating meal plan:", error.message);
    throw error;
  }
};
