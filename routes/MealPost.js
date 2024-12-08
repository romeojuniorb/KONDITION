// models/MealPost.js
import mongoose from 'mongoose';
import BasePost from './BasePost.js';

const { Schema } = mongoose;

// Meal Schema
const mealSchema = new Schema({
  foods: [
    {
      name: { 
        type: String, 
        required: true 
      },
      quantity: { 
        type: String, 
        description: "e.g., '2 slices', '1 cup'"
      },
      calories: { 
        type: Number 
      },
      protein: { 
        type: Number, 
        description: "In grams"
      },
      carbs: { 
        type: Number 
      },
      fats: { 
        type: Number 
      }
    }
  ],
  totalCalories: { 
    type: Number 
  },
  totalProtein: { 
    type: Number 
  },
  totalCarbs: { 
    type: Number 
  },
  totalFats: { 
    type: Number 
  }
});

// Pre-save validation for MealPost
mealSchema.pre('save', function(next) {
  if (this.foods.length === 0) {
    return next(new Error('Meal must include at least one food item.'));
  }
  next();
});

const MealPost = BasePost.discriminator('meal', mealSchema);

export default MealPost;
