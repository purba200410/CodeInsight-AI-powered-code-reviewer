const jwt = require("jsonwebtoken");
const prisma = require("../config/prisma");

module.exports = async (req, res, next) => {

  try {

    const auth = req.headers.authorization;

    if (!auth) {
      return res.status(401).json({
        success: false,
        message: "No token provided",
      });
    }

    const token = auth.split(" ")[1];

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    const user = await prisma.user.findUnique({
      where: {
        id: decoded.id,
      },
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }

    req.user = user;

    next();

  } catch {

    res.status(401).json({
      success: false,
      message: "Unauthorized",
    });

  }

};