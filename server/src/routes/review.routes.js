const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth.middleware");
const validate = require("../middleware/validate.middleware");

const {
  snippetSchema,
} = require("../validators/review.validator");

const {
  reviewSnippet,
} = require("../controllers/review.controller");

router.use(auth);

router.post(
  "/snippet",
  validate(snippetSchema),
  reviewSnippet
);

module.exports = router;