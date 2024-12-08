import express from "express";
import GeneralPost from "../models/GeneralPost.js";
import ExpressError from "../utils/ExpressError.js";

const router = express.Router();

// Fetch all general posts
router.get("/", async (req, res, next) => {
  try {
    const generalPosts = await GeneralPost.find({ type: "general" });
    res.render("posts/generalPosts/index", { generalPosts });
  } catch (err) {
    next(new ExpressError("Error fetching general posts.", 500));
  }
});

// New general post form
router.get("/new", (req, res) => {
  res.render("posts/generalPosts/new");
});

// Create a new general post
router.post("/", async (req, res, next) => {
  try {
    const newGeneralPost = new GeneralPost({ ...req.body, type: "general" });
    await newGeneralPost.save();
    res.redirect("/generalPosts");
  } catch (err) {
    next(new ExpressError("Error creating a new general post.", 500));
  }
});

// Fetch a specific general post
router.get("/:id", async (req, res, next) => {
  try {
    const generalPost = await GeneralPost.findById(req.params.id);
    if (!generalPost) {
      throw new ExpressError("General post not found.", 404);
    }
    res.render("posts/generalPosts/show", { generalPost });
  } catch (err) {
    next(err);
  }
});

// Edit general post form
router.get("/:id/edit", async (req, res, next) => {
  try {
    const generalPost = await GeneralPost.findById(req.params.id);
    if (!generalPost) {
      throw new ExpressError("General post not found.", 404);
    }
    res.render("posts/generalPosts/edit", { generalPost });
  } catch (err) {
    next(err);
  }
});

// Delete a general post
router.delete("/:id", async (req, res, next) => {
  try {
    await GeneralPost.findByIdAndDelete(req.params.id);
    res.redirect("/generalPosts");
  } catch (err) {
    next(new ExpressError("Error deleting general post.", 500));
  }
});

export default router;
