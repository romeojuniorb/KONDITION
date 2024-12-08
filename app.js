import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import methodOverride from "method-override";
import path from "path";
import { fileURLToPath } from "url";
import ejsMate from "ejs-mate";
import ExpressError from "./utils/ExpressError.js";
import generalPostRoutes from "./routes/generalPosts.js";
import mealPostRoutes from "./routes/mealPosts.js";
import workoutPostRoutes from "./routes/workoutPosts.js";
import MealPost from "./models/MealPost.js";
import GeneralPost from "./models/GeneralPost.js";
import WorkoutPost from "./models/WorkoutPost.js";


// Define __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config();

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/kondition")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const app = express();

// Set up EJS
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


// Modular Routes
app.use("/generalPosts", generalPostRoutes);
app.use("/mealPosts", mealPostRoutes);
app.use("/workoutPosts", workoutPostRoutes);

// Home Route
app.get("/", (req, res) => {
  res.render("home");
});

// New Post Selector Route
app.get("/posts/new", (req, res) => {
  const postTypes = ["general", "meal", "workout"];
  const { type } = req.query;

  if (!type || !postTypes.includes(type)) {
    return res.render("posts/selectType", { postTypes });
  }

  res.redirect(`/${type}Posts/new`);
});

// All Posts Route
app.get("/posts", async (req, res) => {
  try {
    const mealPosts = await MealPost.find({ type: "meal" });
    const workoutPosts = await WorkoutPost.find({ type: "workout" });
    const generalPosts = await GeneralPost.find({ type: "general" });

    res.render("posts/index", { mealPosts, workoutPosts, generalPosts });
  } catch (err) {
    console.error("Error fetching posts:", err);
    res.status(500).send("An error occurred while fetching posts.");
  }
});

// Post Details Route
app.get("/posts/:id", async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return next(new ExpressError("Invalid Post ID", 400));
  }

  try {
    const mealPost = await MealPost.findById(id);
    if (mealPost) return res.render("posts/mealPosts/show", { mealPost });

    const workoutPost = await WorkoutPost.findById(id);
    if (workoutPost)
      return res.render("posts/workoutPosts/show", { workoutPost });

    const generalPost = await GeneralPost.findById(id);
    if (generalPost)
      return res.render("posts/generalPosts/show", { generalPost });

    return next(new ExpressError("Post not found", 404));
  } catch (err) {
    next(err);
  }
});

// 404 Route
app.all("*", (req, res, next) => {
  next(new ExpressError("Page Not Found", 404));
});

// Global Error Handler
app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Something went wrong" } = err;
  res.status(statusCode).render("error", { err });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serving on port ${PORT}`);
});
