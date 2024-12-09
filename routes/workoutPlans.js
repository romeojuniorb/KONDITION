import express from "express";
import { generateWorkoutPlan } from "../utils/workoutPlanGenerator.js";
import { isLoggedIn } from "../utils/middleware.js";

const router = express.Router();

// Render the workout plan form
router.get("/generate", isLoggedIn, (req, res) => {
  res.render("workoutPlans/generateForm");
});

// Handle workout plan generation
router.post("/generate-plan", isLoggedIn, async (req, res) => {
  try {
    const { goal, experience } = req.body;
    const plan = generateWorkoutPlan(goal, parseInt(experience, 10));
    res.render("workoutPlans/show", { plan });
  } catch (err) {
    console.error("Error generating workout plan:", err.message);
    res.status(500).send("Error generating workout plan: " + err.message);
  }
});

export default router;
