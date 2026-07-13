const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth.middleware");
const validate = require("../middleware/validate.middleware");

const {
  snippetSchema,
} = require("../validators/review.validator");

const {
  reviewSnippet,
  getProjectReviews,
  getSingleReview,
} = require("../controllers/review.controller");

router.use(auth);

router.post(
  "/snippet",
  validate(snippetSchema),
  reviewSnippet
);

router.get(
  "/project/:projectId",
  auth,
  getProjectReviews
);

router.get(
  "/:reviewId",
  auth,
  getSingleReview
);

module.exports = router;