import express from "express";
const router = express.Router();

router.get("/dashboard", (req, res) => {
  if (!req.user) {
    return res.redirect("/login"); 
  }
  res.render("dashboard", { user: req.user });
});

export default router;
