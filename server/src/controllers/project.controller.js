const prisma = require("../config/prisma");

exports.createProject = async (req, res) => {
  try {
    const { name, language } = req.body;

    const project = await prisma.project.create({
      data: {
        name,
        language,
        userId: req.user.id,
      },
    });

    res.status(201).json({
      success: true,
      project,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }
};

exports.getProjects = async (req, res) => {

  try {

    const projects = await prisma.project.findMany({

      where: {
        userId: req.user.id,
      },

      orderBy: {
        createdAt: "desc",
      },

    });

    res.json({
      success: true,
      count: projects.length,
      projects,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }

};

exports.getProject = async (req, res) => {

  try {

    const project = await prisma.project.findFirst({

      where: {
        id: req.params.id,
        userId: req.user.id,
      },

    });

    if (!project) {

      return res.status(404).json({
        success: false,
        message: "Project not found",
      });

    }

    res.json({
      success: true,
      project,
    });

  } catch {

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }

};

exports.updateProject = async (req, res) => {

  try {

    const { name, language } = req.body;

    const project = await prisma.project.findFirst({

      where: {
        id: req.params.id,
        userId: req.user.id,
      },

    });

    if (!project) {

      return res.status(404).json({
        success: false,
        message: "Project not found",
      });

    }

    const updated = await prisma.project.update({

      where: {
        id: project.id,
      },

      data: {
        name,
        language,
      },

    });

    res.json({
      success: true,
      project: updated,
    });

  } catch {

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }

};

exports.deleteProject = async (req, res) => {

  try {

    const project = await prisma.project.findFirst({

      where: {
        id: req.params.id,
        userId: req.user.id,
      },

    });

    if (!project) {

      return res.status(404).json({
        success: false,
        message: "Project not found",
      });

    }

    await prisma.project.delete({

      where: {
        id: project.id,
      },

    });

    res.json({
      success: true,
      message: "Project deleted successfully",
    });

  } catch {

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }

};