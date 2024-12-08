import mongoose from "mongoose";
import BasePost from "./BasePost.js";

const { Schema } = mongoose;

const workoutSchema = new Schema({
  exercises: [
    {
      name: { type: String, required: true },
      sets: { type: Number },
      reps: { type: Number },
      duration: { type: Number }, // In minutes
      weight: { type: Number } // In kilograms
    }
  ],
  totalDuration: { type: Number, required: true }, // Total duration in minutes
  caloriesBurned: { type: Number, required: true }
});

const WorkoutPost = BasePost.discriminator("workout", workoutSchema);

export default WorkoutPost;
