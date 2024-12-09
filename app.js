import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import methodOverride from "method-override";
import path from "path";
import { fileURLToPath } from "url";
import ejsMate from "ejs-mate";
import ExpressError from "./utils/ExpressError.js";
import flash from "connect-flash";
import session from "express-session";
import passport from "passport";
import LocalStrategy from "passport-local";

import generalPostRoutes from "./routes/generalPosts.js";
import mealPostRoutes from "./routes/mealPosts.js";
import workoutPostRoutes from "./routes/workoutPosts.js";
import userRoutes from "./routes/users.js";
import mealPlansRoutes from "./routes/mealPlans.js"
import workoutPlans from "./routes/workoutPlans.js";
import createRoutes from "./routes/create.js"; 
import dashboardRoutes from "./routes/dashboard.js";

import MealPost from "./models/MealPost.js";
import GeneralPost from "./models/GeneralPost.js";
import WorkoutPost from "./models/WorkoutPost.js";
import User from "./models/User.js"; 
import { isLoggedIn } from './utils/middleware.js';

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
app.use(express.static(path.join(__dirname, "public")));

// Session and Flash Configuration
app.use(
  session({
    secret: "yourSecretKey", // Replace with a secure key
    resave: false,
    saveUninitialized: true,
  })
);

app.use(flash());

// Passport Configuration
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Flash Messages Middleware
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

// Modular Routes
app.use("/", userRoutes);
app.use("/generalPosts", generalPostRoutes);
app.use("/mealPosts", mealPostRoutes);
app.use("/workoutPosts", workoutPostRoutes);
app.use("/mealPlans", mealPlansRoutes);
app.use("/workoutPlans", workoutPlans);
app.use("/create", createRoutes);
app.use("/dashboard", dashboardRoutes);

// Home Route
app.get("/", (req, res) => {
  res.render("home");
});

app.use((req, res, next) => {
  res.locals.user = req.user; // Make the logged-in user available to templates
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
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

app.get("/posts/new", (req, res) => {
  res.render("posts/selectType");
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
