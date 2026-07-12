const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth.middleware");
const validate = require("../middleware/validate.middleware");

const {
  register,
  login,
} = require("../controllers/auth.controller");

const {
  registerSchema,
  loginSchema,
} = require("../validators/auth.validator");

router.post(
  "/register",
  validate(registerSchema),
  register
);

router.post(
  "/login",
  validate(loginSchema),
  login
);

router.get("/profile", auth, (req, res) => {
  
  res.json({
    success: true,
    user: req.user,
  });

});

module.exports = router;