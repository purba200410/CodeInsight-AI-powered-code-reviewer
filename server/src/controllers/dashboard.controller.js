const prisma = require("../config/prisma");

exports.getDashboardStats = async (req, res) => {
  try {
    const userId = req.user.id;

    // Total Projects
    const totalProjects = await prisma.project.count({
      where: {
        userId,
      },
    });

    // Reviews belonging to the user's projects
    const reviews = await prisma.review.findMany({
      where: {
        project: {
          userId,
        },
      },
      select: {
        id: true,
        overallScore: true,
        status: true,
        createdAt: true,
        project: {
          select: {
            name: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const totalReviews = reviews.length;

    const pendingReviews = reviews.filter(
      (review) => review.status === "PENDING"
    ).length;

    const averageScore =
      totalReviews > 0
        ? Math.round(
            reviews.reduce(
              (sum, review) => sum + review.overallScore,
              0
            ) / totalReviews
          )
        : 0;

    const highestScore =
      totalReviews > 0
        ? Math.max(...reviews.map((review) => review.overallScore))
        : 0;

    const lowestScore =
      totalReviews > 0
        ? Math.min(...reviews.map((review) => review.overallScore))
        : 0;

    const recentReviews = reviews.slice(0, 5);

    res.json({
      success: true,
      stats: {
        totalProjects,
        totalReviews,
        averageScore,
        highestScore,
        lowestScore,
        pendingReviews,
      },
      recentReviews,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};