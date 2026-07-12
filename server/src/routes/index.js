const express = require("express");

const router = express.Router();

router.use("/auth", require("./auth.routes"));
router.use("/projects", require("./project.routes"));

router.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "API Running",
  });
});

module.exports = router;