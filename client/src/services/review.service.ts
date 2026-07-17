import api from "./api";

export const reviewSnippet = async (body: {
  projectId: string;
  language: string;
  code: string;
}) => {
  const { data } = await api.post(
    "/reviews/snippet",
    body
  );

  return data;
};

export const getReviewHistory = async (
  projectId: string
) => {
  const { data } = await api.get(
    `/reviews/project/${projectId}`
  );

  return data;
};

export const getReview = async (id: string) => {
  const { data } = await api.get(`/reviews/${id}`);

  return data;
};