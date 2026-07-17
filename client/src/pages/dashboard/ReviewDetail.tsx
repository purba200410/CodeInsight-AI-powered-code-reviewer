import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "sonner";

import { getReview } from "../../services/review.service";
import type { ReviewDetailData, ReviewFinding, StaticIssue } from "../../types/domain";

const severityClass = {
  LOW: "bg-emerald-50 text-emerald-700",
  MEDIUM: "bg-amber-50 text-amber-700",
  HIGH: "bg-red-50 text-red-700",
};

function FindingCard({ finding }: { finding: ReviewFinding }) {
  return (
    <article className="rounded-lg border border-slate-200 p-4">
      <div className="flex flex-wrap items-center gap-2">
        <span className={`rounded-md px-2 py-1 text-xs font-semibold ${severityClass[finding.severity]}`}>
          {finding.severity}
        </span>
        {finding.lineNumber ? <span className="text-sm text-slate-500">Line {finding.lineNumber}</span> : null}
      </div>
      <h3 className="mt-3 font-semibold text-slate-950">{finding.issue}</h3>
      <p className="mt-2 text-sm text-slate-600">{finding.explanation}</p>
      <p className="mt-3 rounded-md bg-slate-100 p-3 text-sm text-slate-700">{finding.suggestedFix}</p>
    </article>
  );
}

function StaticIssueRow({ issue }: { issue: StaticIssue }) {
  return (
    <div className="grid gap-2 border-b border-slate-200 px-5 py-4 last:border-b-0 sm:grid-cols-[120px_1fr_auto]">
      <span className={`w-fit rounded-md px-2 py-1 text-xs font-semibold ${severityClass[issue.severity]}`}>
        {issue.severity}
      </span>
      <p className="text-sm text-slate-700">{issue.message}</p>
      <p className="text-sm text-slate-500">{issue.lineNumber ? `Line ${issue.lineNumber}` : issue.tool}</p>
    </div>
  );
}

export default function ReviewDetail() {
  const { reviewId } = useParams();
  const [review, setReview] = useState<ReviewDetailData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!reviewId) {
      return;
    }

    getReview(reviewId)
      .then((res) => setReview(res.review))
      .catch(() => toast.error("Could not load review"))
      .finally(() => setLoading(false));
  }, [reviewId]);

  if (loading) {
    return <div className="h-40 rounded-lg border border-slate-200 bg-white" />;
  }

  if (!review) {
    return (
      <div className="rounded-lg border border-slate-200 bg-white p-6">
        <p className="text-sm text-slate-500">Review not found.</p>
        <Link className="mt-3 inline-block text-sm font-semibold text-cyan-700" to="/history">
          Back to history
        </Link>
      </div>
    );
  }

  const metricItems = review.metrics
    ? [
        ["Complexity", review.metrics.complexity],
        ["Maintainability", review.metrics.maintainability],
        ["Security", review.metrics.securityScore],
        ["Performance", review.metrics.performanceScore],
        ["Readability", review.metrics.readabilityScore],
      ]
    : [];

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <section className="grid gap-6 xl:grid-cols-[1fr_320px]">
        <div className="rounded-lg border border-slate-200 bg-white p-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
            {review.project.name}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950">
            Review Score: {review.overallScore}/100
          </h2>
          <p className="mt-3 text-slate-600">{review.summary}</p>
          <p className="mt-4 text-sm text-slate-500">
            {review.status} · {review.aiModel} · {new Date(review.createdAt).toLocaleString()}
          </p>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-5">
          <h3 className="font-semibold text-slate-950">Quality Metrics</h3>
          <div className="mt-4 space-y-3">
            {metricItems.length ? (
              metricItems.map(([label, value]) => (
                <div key={label}>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">{label}</span>
                    <span className="font-semibold text-slate-950">{value}</span>
                  </div>
                  <div className="mt-1 h-2 rounded-full bg-slate-100">
                    <div
                      className="h-2 rounded-full bg-cyan-600"
                      style={{ width: `${Math.min(Number(value), 100)}%` }}
                    />
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm text-slate-500">No metrics returned.</p>
            )}
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        <div className="rounded-lg border border-slate-200 bg-white">
          <div className="flex items-center gap-2 border-b border-slate-200 p-5">
            <CheckCircle2 className="h-5 w-5 text-cyan-700" />
            <h3 className="font-semibold text-slate-950">AI Findings</h3>
          </div>
          <div className="space-y-4 p-5">
            {review.findings.length ? (
              review.findings.map((finding) => <FindingCard key={finding.id} finding={finding} />)
            ) : (
              <p className="text-sm text-slate-500">No AI findings returned.</p>
            )}
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white">
          <div className="flex items-center gap-2 border-b border-slate-200 p-5">
            <AlertTriangle className="h-5 w-5 text-amber-600" />
            <h3 className="font-semibold text-slate-950">Static Issues</h3>
          </div>
          {review.staticIssues.length ? (
            review.staticIssues.map((issue) => <StaticIssueRow key={issue.id} issue={issue} />)
          ) : (
            <p className="p-5 text-sm text-slate-500">No static analysis issues.</p>
          )}
        </div>
      </section>

      <section className="rounded-lg border border-slate-200 bg-white">
        <div className="border-b border-slate-200 p-5">
          <h3 className="font-semibold text-slate-950">Reviewed Source</h3>
        </div>
        <pre className="overflow-auto bg-slate-950 p-5 text-sm leading-6 text-slate-100">
          <code>{review.sourceCode}</code>
        </pre>
      </section>
    </div>
  );
}
