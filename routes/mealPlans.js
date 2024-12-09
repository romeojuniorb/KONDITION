import express from "express";
import { generatePlan } from "../utils/mealPlanGenerator.js";
import { isLoggedIn } from "../utils/middleware.js";

const router = express.Router();

router.get("/generate", isLoggedIn, (req, res) => {
  res.render("mealPlans/generateForm");
});

router.post("/generate-plan", isLoggedIn, async (req, res) => {
  try {
    const { weight, height, age, sex, goal } = req.body;
    const plan = await generatePlan(weight, height, age, sex, goal);

    console.log(plan);
    console.log("Generated BMI:", plan.user.bmi);

    res.render("mealPlans/show", { plan });
  } catch (err) {
    console.error("Error generating meal plan:", err.message);
    res.status(500).send("Error generating meal plan: " + err.message);
  }
});
router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong with meal plans.");
});

export default router;
