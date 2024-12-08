// controllers/postController.js
import BasePost from "../models/BasePost.js";
import WorkoutPost from "../models/WorkoutPost.js";
import MealPost from "../models/MealPost.js";
import GeneralPost from "../models/GeneralPost.js";

export const createBasePost = async (req, res) => {
  try {
    const {
      type, // 'workout', 'meal', 'general'
      title,
      description,
      media,
      tags,
      privacy,
    } = req.body;

    // Validate required fields
    if (!type || !["workout", "meal", "general"].includes(type)) {
      return res.status(400).json({ error: "Invalid or missing post type." });
    }

    if (!title) {
      return res.status(400).json({ error: "Title is required." });
    }

    // Determine which discriminator to use based on type
    let PostModel;

    switch (type) {
      case "workout":
        PostModel = WorkoutPost;
        break;
      case "meal":
        PostModel = MealPost;
        break;
      case "general":
        PostModel = GeneralPost;
        break;
      default:
        return res.status(400).json({ error: "Unsupported post type." });
    }

    // Create a new post instance
    const newPost = new PostModel({
      user: req.user.id, // Assuming you have authentication middleware that sets req.user
      type,
      title,
      description,
      media,
      tags,
      privacy,
    });

    // Attach type-specific fields
    switch (type) {
      case "workout":
        const { exercises, totalDuration, caloriesBurned } = req.body;
        if (!exercises || !Array.isArray(exercises) || exercises.length === 0) {
          return res
            .status(400)
            .json({
              error: "At least one exercise is required for workout posts.",
            });
        }
        newPost.exercises = exercises;
        newPost.totalDuration = totalDuration;
        newPost.caloriesBurned = caloriesBurned;
        break;

      case "meal":
        const { foods, totalCalories, totalProtein, totalCarbs, totalFats } =
          req.body;
        if (!foods || !Array.isArray(foods) || foods.length === 0) {
          return res
            .status(400)
            .json({
              error: "At least one food item is required for meal posts.",
            });
        }
        newPost.foods = foods;
        newPost.totalCalories = totalCalories;
        newPost.totalProtein = totalProtein;
        newPost.totalCarbs = totalCarbs;
        newPost.totalFats = totalFats;
        break;

      case "general":
        // If there are any additional fields for general posts, handle them here
        break;

      default:
        break;
    }

    // Save the post to the database
    const savedPost = await newPost.save();

    // Respond with the created post
    res.status(201).json(savedPost);
  } catch (error) {
    console.error("Error creating base post:", error);
    res.status(500).json({ error: "Server error while creating the post." });
  }
};

export const createWorkoutPost = async (req, res) => {
  try {
    const {
      title,
      description,
      exercises,
      totalDuration,
      caloriesBurned,
      tags,
      privacy,
      media,
    } = req.body;
    const userId = req.user.id; // Assuming you have user authentication

    const newWorkout = new WorkoutPost({
      user: userId,
      title,
      description,
      exercises,
      totalDuration,
      caloriesBurned,
      tags,
      privacy,
      media,
    });

    const savedPost = await newWorkout.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Create a new Meal Post
export const createMealPost = async (req, res) => {
  try {
    const {
      title,
      description,
      foods,
      totalCalories,
      totalProtein,
      totalCarbs,
      totalFats,
      tags,
      privacy,
      media,
    } = req.body;
    const userId = req.user.id; // Assuming user authentication middleware

    const newMeal = new MealPost({
      user: userId,
      title,
      description,
      foods,
      totalCalories,
      totalProtein,
      totalCarbs,
      totalFats,
      tags,
      privacy,
      media,
    });

    const savedMeal = await newMeal.save();
    res.status(201).json(savedMeal);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const createGeneralPost = async (req, res) => {
  try {
    const { title, description, media, tags, privacy } = req.body;

    if (!title) {
      return res.status(400).json({ error: "Title is required." });
    }

    const newGeneralPost = new GeneralPost({
      user: req.user.id, 
      type: "general", 
      title,
      description,
      media,
      tags,
      privacy,
    });

    const savedPost = await newGeneralPost.save();

    res.status(201).json(savedPost);
  } catch (error) {
    console.error("Error creating general post:", error);
    res
      .status(500)
      .json({ error: "Server error while creating the general post." });
  }
};
