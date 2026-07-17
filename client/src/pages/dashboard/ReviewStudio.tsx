import { Code2, Sparkles } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { getProjects } from "../../services/project.service";
import { reviewSnippet } from "../../services/review.service";
import type { Project } from "../../types/domain";

const starterCode = `function calculateTotal(items) {
  let total = 0;
  for (const item of items) {
    total += item.price * item.quantity;
  }
  return total;
}`;

export default function ReviewStudio() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>([]);
  const [projectId, setProjectId] = useState("");
  const [code, setCode] = useState(starterCode);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    getProjects()
      .then((res) => {
        const items = res.projects || [];
        setProjects(items);
        setProjectId(items[0]?.id || "");
      })
      .catch(() => toast.error("Create a project before submitting a review"))
      .finally(() => setLoading(false));
  }, []);

  const selectedProject = useMemo(
    () => projects.find((project) => project.id === projectId),
    [projectId, projects]
  );

  const submitReview = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedProject) {
      toast.error("Select a project first");
      return;
    }

    setSubmitting(true);

    try {
      const res = await reviewSnippet({
        projectId: selectedProject.id,
        language: selectedProject.language,
        code,
      });
      toast.success("Review completed");
      navigate(`/reviews/${res.review.id}`);
    } catch {
      toast.error("Review failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-7xl">
      <form className="grid gap-6 xl:grid-cols-[320px_1fr]" onSubmit={submitReview}>
        <aside className="space-y-4">
          <section className="rounded-lg border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-semibold text-slate-950">Review Setup</h2>
            <p className="mt-1 text-sm text-slate-500">
              Choose the project context for this snippet.
            </p>

            <label className="mt-5 block text-sm font-medium text-slate-700" htmlFor="project">
              Project
            </label>
            <select
              className="mt-2 h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-950 outline-none focus:border-slate-950 focus:ring-4 focus:ring-slate-200"
              disabled={loading || projects.length === 0}
              id="project"
              value={projectId}
              onChange={(event) => setProjectId(event.target.value)}
            >
              {projects.map((project) => (
                <option key={project.id} value={project.id}>
                  {project.name}
                </option>
              ))}
            </select>

            <div className="mt-4 rounded-md bg-slate-100 p-3 text-sm text-slate-600">
              Language:{" "}
              <span className="font-semibold text-slate-950">
                {selectedProject?.language || "No project"}
              </span>
            </div>

            <Button
              className="mt-5 w-full"
              disabled={submitting || !selectedProject || code.trim().length < 10}
              type="submit"
            >
              <Sparkles className="h-4 w-4" />
              {submitting ? "Reviewing..." : "Run Review"}
            </Button>
          </section>
        </aside>

        <section className="min-w-0 rounded-lg border border-slate-200 bg-white">
          <div className="flex items-center justify-between border-b border-slate-200 p-5">
            <div>
              <h2 className="text-lg font-semibold text-slate-950">Code Snippet</h2>
              <p className="text-sm text-slate-500">Paste at least 10 characters of source code.</p>
            </div>
            <Code2 className="h-5 w-5 text-slate-400" />
          </div>

          <textarea
            className="min-h-[520px] w-full resize-y border-0 bg-slate-950 p-5 font-mono text-sm leading-6 text-slate-100 outline-none"
            spellCheck={false}
            value={code}
            onChange={(event) => setCode(event.target.value)}
          />
        </section>
      </form>
    </div>
  );
}
