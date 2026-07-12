const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth.middleware");

const {
  createProject,
  getProjects,
  getProject,
  updateProject,
  deleteProject,
} = require("../controllers/project.controller");

const validate = require("../middleware/validate.middleware");
const {
  projectSchema,
} = require("../validators/project.validator");

router.post(
  "/",
  validate(projectSchema),
  createProject
);

router.put(
  "/:id",
  validate(projectSchema),
  updateProject
);

router.use(auth);

router.post("/", createProject);

router.get("/", getProjects);

router.get("/:id", getProject);

router.put("/:id", updateProject);

router.delete("/:id", deleteProject);

module.exports = router;