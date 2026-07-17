import { Activity, FolderKanban, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getDashboardStats } from "../../services/dashboard.service";
import type { ReviewSummary } from "../../types/domain";

interface DashboardResponse {
  stats: {
    totalProjects: number;
    totalReviews: number;
    averageScore: number;
    highestScore: number;
    lowestScore: number;
    completedReviews?: number;
    processingReviews?: number;
    failedReviews?: number;
    pendingReviews?: number;
  };
  recentReviews: ReviewSummary[];
}

const formatScore = (score?: number) => `${Math.round(score || 0)}/100`;

export default function Dashboard() {
  const [data, setData] = useState<DashboardResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDashboardStats()
      .then(setData)
      .catch(() => setData(null))
      .finally(() => setLoading(false));
  }, []);

  const stats = data?.stats;
  const statCards = [
    {
      title: "Projects",
      value: stats?.totalProjects ?? 0,
      icon: FolderKanban,
      note: "Active codebases",
    },
    {
      title: "Reviews",
      value: stats?.totalReviews ?? 0,
      icon: Sparkles,
      note: "Submitted snippets",
    },
    {
      title: "Average Score",
      value: formatScore(stats?.averageScore),
      icon: TrendingUp,
      note: `Best ${formatScore(stats?.highestScore)} / Low ${formatScore(stats?.lowestScore)}`,
    },
    {
      title: "In Progress",
      value: stats?.processingReviews ?? stats?.pendingReviews ?? 0,
      icon: Activity,
      note: "Pending AI analysis",
    },
  ];

  if (loading) {
    return <div className="h-40 rounded-lg border border-slate-200 bg-white" />;
  }

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <section className="grid gap-6 xl:grid-cols-[1.4fr_0.6fr]">
        <div className="rounded-lg border border-slate-200 bg-white p-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
            Review Command Center
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950">
            Ship cleaner code with faster review loops.
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Use static analysis for immediate issues, then let the AI reviewer
            summarize maintainability, security, performance, and readability.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/review"
              className="inline-flex h-10 items-center gap-2 rounded-md border border-cyan-200 bg-cyan-50 px-4 text-sm font-semibold text-cyan-900 hover:bg-cyan-100"
            >
              <Sparkles className="h-4 w-4" />
              Start Review
            </Link>
            <Link
              to="/projects"
              className="inline-flex h-10 items-center gap-2 rounded-md border border-slate-300 px-4 text-sm font-semibold text-slate-700 hover:bg-slate-100"
            >
              <FolderKanban className="h-4 w-4" />
              Manage Projects
            </Link>
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-slate-950 p-6 text-white">
          <ShieldCheck className="h-8 w-8 text-cyan-300" />
          <p className="mt-5 text-sm text-slate-300">Completed reviews</p>
          <p className="mt-2 text-5xl font-semibold">
            {stats?.completedReviews ?? 0}
          </p>
          <p className="mt-4 text-sm text-slate-400">
            Failed: {stats?.failedReviews ?? 0}
          </p>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {statCards.map((card) => {
          const Icon = card.icon;

          return (
            <div key={card.title} className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-500">{card.title}</p>
                <Icon className="h-5 w-5 text-slate-400" />
              </div>
              <p className="mt-4 text-3xl font-semibold text-slate-950">{card.value}</p>
              <p className="mt-2 text-sm text-slate-500">{card.note}</p>
            </div>
          );
        })}
      </section>

      <section className="rounded-lg border border-slate-200 bg-white">
        <div className="flex items-center justify-between border-b border-slate-200 p-5">
          <div>
            <h2 className="text-lg font-semibold text-slate-950">Recent Reviews</h2>
            <p className="text-sm text-slate-500">Latest AI review activity</p>
          </div>
          <Link to="/history" className="text-sm font-semibold text-cyan-700 hover:text-cyan-900">
            View all
          </Link>
        </div>

        <div className="divide-y divide-slate-200">
          {data?.recentReviews?.length ? (
            data.recentReviews.slice(0, 5).map((review) => (
              <Link
                key={review.id}
                to={`/reviews/${review.id}`}
                className="grid gap-3 p-5 transition hover:bg-slate-50 sm:grid-cols-[1fr_auto]"
              >
                <div>
                  <p className="font-medium text-slate-950">
                    {review.project?.name || "Code Review"}
                  </p>
                  <p className="mt-1 line-clamp-1 text-sm text-slate-500">
                    {review.summary || review.status}
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="font-semibold text-slate-950">
                    {formatScore(review.overallScore)}
                  </p>
                  <p className="text-sm text-slate-500">
                    {new Date(review.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <p className="p-5 text-sm text-slate-500">No reviews yet.</p>
          )}
        </div>
      </section>
    </div>
  );
}
