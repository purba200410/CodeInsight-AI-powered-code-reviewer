const prisma = require("../config/prisma");
const { reviewSnippet } = require("../services/review/review.service");

// 1. Review a brand new code snippet
exports.reviewSnippet = async (req, res) => {
  try {
    const { projectId, language, code } = req.body;

    // Verify ownership first
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

    // Call the external service to hit Gemini
    const result = await reviewSnippet(projectId, language, code);

    return res.json({
      success: true,
      review: result,
    });

  } catch (error) {
    console.error("Snippet review error:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Server Error",
    });
  }
};

// 2. Fetch history of reviews for a given project (Completely un-nested)
exports.getProjectReviews = async (req, res) => {
  try {
    const { projectId } = req.params;

    // Secure Check: Ensure the project belongs to the requesting user before exposing its reviews
    const projectOwnership = await prisma.project.findFirst({
      where: {
        id: projectId,
        userId: req.user.id,
      },
    });

    if (!projectOwnership) {
      return res.status(404).json({
        success: false,
        message: "Project not found or unauthorized",
      });
    }

    const reviews = await prisma.review.findMany({
      where: {
        projectId,
      },
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        overallScore: true,
        summary: true,
        aiModel: true,
        status: true,
        createdAt: true,
      },
    });

    return res.json({
      success: true,
      count: reviews.length,
      reviews,
    });

  } catch (error) {
    console.error("Fetch history error:", error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

exports.getSingleReview = async (req, res) => {
  try {
    const prisma = require("../config/prisma");

    const { reviewId } = req.params;

    const review = await prisma.review.findUnique({
      where: {
        id: reviewId,
      },
      include: {
        findings: true,
        metrics: true,
        staticIssues: true,
        project: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    if (!review) {
      return res.status(404).json({
        success: false,
        message: "Review not found",
      });
    }

    res.json({
      success: true,
      review,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};