const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth.middleware");
const validate = require("../middleware/validate.middleware");

const { projectSchema } = require("../validators/project.validator");

const {
  createProject,
  getProjects,
  getProject,
  updateProject,
  deleteProject,
} = require("../controllers/project.controller");

// Protect all routes
router.use(auth);

router.post("/", validate(projectSchema), createProject);

router.get("/", getProjects);

router.get("/:id", getProject);

router.put("/:id", validate(projectSchema), updateProject);

router.delete("/:id", deleteProject);

module.exports = router;