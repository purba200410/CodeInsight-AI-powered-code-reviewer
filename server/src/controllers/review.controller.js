const prisma = require("../config/prisma");

const {
  reviewSnippet,
} = require("../services/review/review.service");

exports.reviewSnippet = async (req, res) => {

  try {

    const { projectId, language, code } = req.body;

    const project = await prisma.project.findFirst({
      where: {
        id: projectId,
        userId: req.user.id,
      },
    });

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    const result = await reviewSnippet(projectId, language, code);

    return res.json({
      success: true,
      review: result,
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message:  error.message,
    });

  }

};