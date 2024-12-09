import mongoose from "mongoose";
import BasePost from "./BasePost.js";

const { Schema } = mongoose;

const workoutSchema = new Schema({
  exercises: [
    {
      name: { type: String, required: true },
      sets: { type: Number },
      reps: { type: Number },
      duration: { type: Number }, 
      weight: { type: Number } 
    }
  ],
  totalDuration: { type: Number, required: true }, 
  caloriesBurned: { type: Number, required: true }
});

const WorkoutPost = BasePost.discriminator("workout", workoutSchema);

export default WorkoutPost;
