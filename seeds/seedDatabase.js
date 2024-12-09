import mongoose from "mongoose";
import dotenv from "dotenv";
import MealPost from "../models/MealPost.js";
import WorkoutPost from "../models/WorkoutPost.js";
import GeneralPost from "../models/GeneralPost.js";
import User from "../models/User.js";

import mealData from "./mealData.js";
import workoutData from "./workoutData.js";
import generalPostData from "./generalPostData.js";
import userData from "./userData.js";

dotenv.config();

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/kondition");
    console.log("Database connected!");

    await User.deleteMany();
    console.log("Users cleared!");

    await MealPost.deleteMany();
    console.log("Meal posts cleared!");

    await WorkoutPost.deleteMany();
    console.log("Workout posts cleared!");

    await GeneralPost.deleteMany();
    console.log("General posts cleared!");

    const users = await Promise.all(
      userData.users.map(async (user) => {
        const newUser = new User({ username: user.username, email: user.email });
        await User.register(newUser, user.password); 
        return newUser;
      })
    );
    console.log("Users seeded!");

    const userId = users[0]._id;

    const mealPostsWithUser = mealData.meals.map((meal) => ({ ...meal, user: userId }));
    const workoutPostsWithUser = workoutData.workouts.map((workout) => ({ ...workout, user: userId }));
    const generalPostsWithUser = generalPostData.generalPosts.map((post) => ({ ...post, user: userId }));

    await MealPost.insertMany(mealPostsWithUser);
    console.log("Meal posts seeded!");

    await WorkoutPost.insertMany(workoutPostsWithUser);
    console.log("Workout posts seeded!");

    await GeneralPost.insertMany(generalPostsWithUser);
    console.log("General posts seeded!");

    mongoose.connection.close();
  } catch (err) {
    console.error("Error seeding database:", err);
    mongoose.connection.close();
  }
};

seedDatabase();
