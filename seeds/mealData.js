export default {
    meals: [
      {
        user: "63bfc9f95c56452040d83d28", // Replace with actual ObjectId of a user
        type: "meal",
        title: "Healthy Breakfast",
        description: "Oatmeal with fruits and nuts",
        foods: [
          { name: "Oatmeal", quantity: "1 cup", calories: 150, protein: 5, carbs: 27, fats: 3 },
          { name: "Banana", quantity: "1 medium", calories: 105, protein: 1, carbs: 27, fats: 0.3 },
          { name: "Almonds", quantity: "10 pieces", calories: 70, protein: 3, carbs: 2, fats: 6 }
        ],
        totalCalories: 325,
        totalProtein: 9,
        totalCarbs: 56,
        totalFats: 9.3,
        tags: ["breakfast", "healthy"],
        privacy: "public"
      },
      {
        user: "63bfc9f95c56452040d83d28",
        type: "meal",
        title: "Quick Lunch",
        description: "Grilled chicken with steamed broccoli and rice",
        foods: [
          { name: "Grilled Chicken", quantity: "150g", calories: 250, protein: 40, carbs: 0, fats: 5 },
          { name: "Broccoli", quantity: "1 cup", calories: 55, protein: 5, carbs: 11, fats: 0.5 },
          { name: "White Rice", quantity: "1 cup", calories: 200, protein: 4, carbs: 44, fats: 0.5 }
        ],
        totalCalories: 505,
        totalProtein: 49,
        totalCarbs: 55,
        totalFats: 6,
        tags: ["lunch", "protein-rich"],
        privacy: "friends"
      },
      {
        user: "63bfc9f95c56452040d83d28",
        type: "meal",
        title: "Post-Workout Snack",
        description: "Protein smoothie with berries and spinach",
        foods: [
          { name: "Whey Protein", quantity: "1 scoop", calories: 120, protein: 25, carbs: 2, fats: 1 },
          { name: "Mixed Berries", quantity: "1/2 cup", calories: 40, protein: 0.5, carbs: 10, fats: 0.2 },
          { name: "Spinach", quantity: "1 cup", calories: 7, protein: 1, carbs: 1, fats: 0.1 },
          { name: "Almond Milk", quantity: "1 cup", calories: 30, protein: 1, carbs: 2, fats: 2 }
        ],
        totalCalories: 197,
        totalProtein: 27.5,
        totalCarbs: 15,
        totalFats: 3.3,
        tags: ["snack", "post-workout"],
        privacy: "private"
      },
      {
        user: "63bfc9f95c56452040d83d28",
        type: "meal",
        title: "Dinner Delight",
        description: "Grilled salmon with quinoa and asparagus",
        foods: [
          { name: "Grilled Salmon", quantity: "200g", calories: 350, protein: 35, carbs: 0, fats: 20 },
          { name: "Quinoa", quantity: "1 cup", calories: 220, protein: 8, carbs: 39, fats: 3 },
          { name: "Asparagus", quantity: "5 spears", calories: 20, protein: 2, carbs: 4, fats: 0.2 }
        ],
        totalCalories: 590,
        totalProtein: 45,
        totalCarbs: 43,
        totalFats: 23.2,
        tags: ["dinner", "omega-3"],
        privacy: "public"
      },
      {
        user: "63bfc9f95c56452040d83d28",
        type: "meal",
        title: "Vegan Brunch",
        description: "Avocado toast with tomato and cucumber salad",
        foods: [
          { name: "Whole Grain Bread", quantity: "2 slices", calories: 160, protein: 6, carbs: 30, fats: 2 },
          { name: "Avocado", quantity: "1/2 avocado", calories: 120, protein: 1, carbs: 6, fats: 10 },
          { name: "Tomato", quantity: "1 medium", calories: 20, protein: 1, carbs: 4, fats: 0 },
          { name: "Cucumber", quantity: "1/2 cucumber", calories: 10, protein: 0.5, carbs: 2, fats: 0 }
        ],
        totalCalories: 310,
        totalProtein: 8.5,
        totalCarbs: 42,
        totalFats: 12,
        tags: ["brunch", "vegan"],
        privacy: "friends"
      },
      {
        user: "63bfc9f95c56452040d83d28",
        type: "meal",
        title: "High-Protein Dinner",
        description: "Beef steak with sweet potato and green beans",
        foods: [
          { name: "Beef Steak", quantity: "200g", calories: 400, protein: 40, carbs: 0, fats: 25 },
          { name: "Sweet Potato", quantity: "1 medium", calories: 110, protein: 2, carbs: 26, fats: 0.1 },
          { name: "Green Beans", quantity: "1 cup", calories: 45, protein: 2, carbs: 10, fats: 0.2 }
        ],
        totalCalories: 555,
        totalProtein: 44,
        totalCarbs: 36,
        totalFats: 25.3,
        tags: ["dinner", "high-protein"],
        privacy: "private"
      },
      {
        user: "63bfc9f95c56452040d83d28",
        type: "meal",
        title: "Cheat Meal",
        description: "Pepperoni pizza with a side of fries",
        foods: [
          { name: "Pizza Slice", quantity: "2 slices", calories: 600, protein: 20, carbs: 70, fats: 25 },
          { name: "French Fries", quantity: "1 medium", calories: 365, protein: 5, carbs: 45, fats: 18 }
        ],
        totalCalories: 965,
        totalProtein: 25,
        totalCarbs: 115,
        totalFats: 43,
        tags: ["cheat day", "comfort food"],
        privacy: "public"
      },
      {
        user: "63bfc9f95c56452040d83d28",
        type: "meal",
        title: "Vegetarian Lunch",
        description: "Lentil soup with whole grain bread",
        foods: [
          { name: "Lentil Soup", quantity: "1 cup", calories: 180, protein: 12, carbs: 25, fats: 3 },
          { name: "Whole Grain Bread", quantity: "2 slices", calories: 160, protein: 6, carbs: 30, fats: 2 }
        ],
        totalCalories: 340,
        totalProtein: 18,
        totalCarbs: 55,
        totalFats: 5,
        tags: ["lunch", "vegetarian"],
        privacy: "friends"
      },
      {
        user: "63bfc9f95c56452040d83d28",
        type: "meal",
        title: "Midnight Snack",
        description: "Greek yogurt with honey and almonds",
        foods: [
          { name: "Greek Yogurt", quantity: "1 cup", calories: 100, protein: 10, carbs: 8, fats: 2 },
          { name: "Honey", quantity: "1 tbsp", calories: 64, protein: 0, carbs: 17, fats: 0 },
          { name: "Almonds", quantity: "10 pieces", calories: 70, protein: 3, carbs: 2, fats: 6 }
        ],
        totalCalories: 234,
        totalProtein: 13,
        totalCarbs: 27,
        totalFats: 8,
        tags: ["snack", "healthy"],
        privacy: "private"
      },
      {
        user: "63bfc9f95c56452040d83d28",
        type: "meal",
        title: "Keto Breakfast",
        description: "Egg scramble with spinach and cheese",
        foods: [
          { name: "Eggs", quantity: "3 large", calories: 210, protein: 18, carbs: 2, fats: 15 },
          { name: "Spinach", quantity: "1 cup", calories: 7, protein: 1, carbs: 1, fats: 0 },
          { name: "Cheddar Cheese", quantity: "1/4 cup", calories: 110, protein: 7, carbs: 0, fats: 9 }
        ],
        totalCalories: 327,
        totalProtein: 26,
        totalCarbs: 3,
        totalFats: 24,
        tags: ["breakfast", "keto"],
        privacy: "public"
      }
    ]
  };
  