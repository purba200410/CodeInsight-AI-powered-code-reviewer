const { z } = require("zod");

const snippetSchema = z.object({
  projectId: z.string().min(1, "Project ID is required"),

  code: z
    .string()
    .min(10, "Code must contain at least 10 characters"),

  language: z.enum([
    "JAVASCRIPT",
    "TYPESCRIPT",
    "PYTHON",
    "JAVA",
    "CPP",
  ]),
});

module.exports = {
  snippetSchema,
};