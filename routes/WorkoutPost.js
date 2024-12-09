import express from "express";
import WorkoutPost from "../models/WorkoutPost.js";
import ExpressError from "../utils/ExpressError.js";
import { isLoggedIn } from "../utils/middleware.js"; 

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const workoutPosts = await WorkoutPost.find({ type: "workout" });
        res.render("posts/workoutPosts/index", { workoutPosts });
    } catch (err) {
        next(new ExpressError("Error fetching workout posts.", 500));
    }
});

router.get("/new", isLoggedIn, (req, res) => {
    res.render("posts/workoutPosts/new");
});

router.post("/", isLoggedIn, async (req, res, next) => {
    try {
        const newWorkoutPost = new WorkoutPost({ ...req.body, type: "workout" });
        await newWorkoutPost.save();
        res.redirect("/workoutPosts");
    } catch (err) {
        next(new ExpressError("Error creating a new workout post.", 500));
    }
});

router.get("/:id", async (req, res, next) => {
    try {
        const workoutPost = await WorkoutPost.findById(req.params.id);
        if (!workoutPost) {
            throw new ExpressError("Workout post not found.", 404);
        }
        res.render("posts/workoutPosts/show", { workoutPost });
    } catch (err) {
        next(err);
    }
});

router.get("/:id/edit", isLoggedIn, async (req, res, next) => {
    try {
        const workoutPost = await WorkoutPost.findById(req.params.id);
        if (!workoutPost) {
            throw new ExpressError("Workout post not found.", 404);
        }
        res.render("posts/workoutPosts/edit", { workoutPost });
    } catch (err) {
        next(err);
    }
});

router.delete("/:id", isLoggedIn, async (req, res, next) => {
    try {
        await WorkoutPost.findByIdAndDelete(req.params.id);
        res.redirect("/workoutPosts");
    } catch (err) {
        next(new ExpressError("Error deleting workout post.", 500));
    }
});

export default router;
