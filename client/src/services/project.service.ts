import api from "./api";

export const getProjects = async () => {
  const { data } = await api.get("/projects");
  return data;
};

export const createProject = async (project: {
  name: string;
  language: string;
}) => {
  const { data } = await api.post("/projects", project);
  return data;
};

export const updateProject = async (
  id: string,
  project: {
    name: string;
    language: string;
  }
) => {
  const { data } = await api.put(`/projects/${id}`, project);
  return data;
};

export const deleteProject = async (id: string) => {
  const { data } = await api.delete(`/projects/${id}`);
  return data;
};
