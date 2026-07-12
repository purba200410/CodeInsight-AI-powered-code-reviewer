
const { z } = require("zod");

const projectSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Project name must be at least 3 characters")
    .max(100, "Project name cannot exceed 100 characters"),

  language: z.enum([
    "JAVASCRIPT",
    "TYPESCRIPT",
    "PYTHON",
    "JAVA",
    "CPP",
  ]),
});

module.exports = {
  projectSchema,
};