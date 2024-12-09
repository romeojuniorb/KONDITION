import express from "express";
import { isLoggedIn } from "../utils/middleware.js"; // Ensure user is logged in

const router = express.Router();

router.get("/", isLoggedIn, (req, res) => {
  res.render("create");
});

export default router;
