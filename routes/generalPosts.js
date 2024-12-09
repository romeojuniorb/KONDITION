import express from "express";
import GeneralPost from "../models/GeneralPost.js";
import ExpressError from "../utils/ExpressError.js";
import { isLoggedIn } from "../utils/middleware.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const generalPosts = await GeneralPost.find({ type: "general" });
    res.render("posts/generalPosts/index", { generalPosts });
  } catch (err) {
    next(new ExpressError("Error fetching general posts.", 500));
  }
});

router.get("/new", isLoggedIn, (req, res) => {
  res.render("posts/generalPosts/new");
});

router.post("/", isLoggedIn, async (req, res, next) => {
  try {
    const newGeneralPost = new GeneralPost({ ...req.body, type: "general" });
    await newGeneralPost.save();
    req.flash("success", "General post created successfully!");
    res.redirect("/generalPosts");
  } catch (err) {
    next(new ExpressError("Error creating a new general post.", 500));
  }
});

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

router.get("/:id/edit", isLoggedIn, async (req, res, next) => {
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

router.delete("/:id", isLoggedIn, async (req, res, next) => {
  try {
    await GeneralPost.findByIdAndDelete(req.params.id);
    req.flash("success", "General post deleted successfully!");
    res.redirect("/generalPosts");
  } catch (err) {
    next(new ExpressError("Error deleting general post.", 500));
  }
});

export default router;
