import { History as HistoryIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

import { getProjects } from "../../services/project.service";
import { getReviewHistory } from "../../services/review.service";
import type { Project, ReviewSummary } from "../../types/domain";

export default function History() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [projectId, setProjectId] = useState("");
  const [reviews, setReviews] = useState<ReviewSummary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProjects()
      .then((res) => {
        const items = res.projects || [];
        setProjects(items);
        setProjectId(items[0]?.id || "");
      })
      .catch(() => toast.error("Could not load projects"))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!projectId) {
      setReviews([]);
      return;
    }

    getReviewHistory(projectId)
      .then((res) => setReviews(res.reviews || []))
      .catch(() => toast.error("Could not load review history"));
  }, [projectId]);

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <section className="rounded-lg border border-slate-200 bg-white p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-slate-950">Review History</h2>
            <p className="mt-1 text-sm text-slate-500">Browse previous reviews by project.</p>
          </div>
          <select
            className="h-11 rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-950 outline-none focus:border-slate-950 focus:ring-4 focus:ring-slate-200"
            disabled={loading || projects.length === 0}
            value={projectId}
            onChange={(event) => setProjectId(event.target.value)}
          >
            {projects.map((project) => (
              <option key={project.id} value={project.id}>
                {project.name}
              </option>
            ))}
          </select>
        </div>
      </section>

      <section className="rounded-lg border border-slate-200 bg-white">
        {reviews.length ? (
          <div className="divide-y divide-slate-200">
            {reviews.map((review) => (
              <Link
                key={review.id}
                to={`/reviews/${review.id}`}
                className="grid gap-4 p-5 transition hover:bg-slate-50 sm:grid-cols-[1fr_auto]"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <HistoryIcon className="h-4 w-4 text-slate-400" />
                    <p className="font-semibold text-slate-950">{review.status}</p>
                  </div>
                  <p className="mt-2 line-clamp-2 text-sm text-slate-500">
                    {review.summary || "No summary available"}
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-xl font-semibold text-slate-950">{review.overallScore}/100</p>
                  <p className="text-sm text-slate-500">
                    {new Date(review.createdAt).toLocaleString()}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="p-5 text-sm text-slate-500">
            {projects.length ? "No reviews for this project yet." : "Create a project to build review history."}
          </p>
        )}
      </section>
    </div>
  );
}
