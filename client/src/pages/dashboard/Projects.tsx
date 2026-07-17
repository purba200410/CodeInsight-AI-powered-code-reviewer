import { Plus, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createProject, deleteProject, getProjects } from "../../services/project.service";
import type { Language, Project } from "../../types/domain";

const languages: Language[] = ["JAVASCRIPT", "TYPESCRIPT", "PYTHON", "JAVA", "CPP"];

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [name, setName] = useState("");
  const [language, setLanguage] = useState<Language>("JAVASCRIPT");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const loadProjects = async () => {
    const res = await getProjects();
    setProjects(res.projects || []);
  };

  useEffect(() => {
    loadProjects()
      .catch(() => toast.error("Could not load projects"))
      .finally(() => setLoading(false));
  }, []);

  const handleCreate = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSaving(true);

    try {
      const res = await createProject({ name, language });
      setProjects((current) => [res.project, ...current]);
      setName("");
      toast.success("Project created");
    } catch {
      toast.error("Could not create project");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteProject(id);
      setProjects((current) => current.filter((project) => project.id !== id));
      toast.success("Project deleted");
    } catch {
      toast.error("Could not delete project");
    }
  };

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <section className="rounded-lg border border-slate-200 bg-white p-5">
        <h2 className="text-lg font-semibold text-slate-950">Create Project</h2>
        <p className="mt-1 text-sm text-slate-500">
          Projects group reviews by codebase and language.
        </p>

        <form className="mt-5 grid gap-3 md:grid-cols-[1fr_220px_auto]" onSubmit={handleCreate}>
          <Input
            placeholder="Project name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            minLength={3}
          />
          <select
            className="h-11 rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-950 outline-none focus:border-slate-950 focus:ring-4 focus:ring-slate-200"
            value={language}
            onChange={(event) => setLanguage(event.target.value as Language)}
          >
            {languages.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <Button disabled={saving || name.trim().length < 3} type="submit">
            <Plus className="h-4 w-4" />
            Add Project
          </Button>
        </form>
      </section>

      <section className="rounded-lg border border-slate-200 bg-white">
        <div className="border-b border-slate-200 p-5">
          <h2 className="text-lg font-semibold text-slate-950">Your Projects</h2>
          <p className="text-sm text-slate-500">{projects.length} saved projects</p>
        </div>

        {loading ? (
          <p className="p-5 text-sm text-slate-500">Loading projects...</p>
        ) : projects.length ? (
          <div className="divide-y divide-slate-200">
            {projects.map((project) => (
              <div
                key={project.id}
                className="grid gap-4 p-5 sm:grid-cols-[1fr_auto] sm:items-center"
              >
                <div>
                  <p className="font-semibold text-slate-950">{project.name}</p>
                  <p className="mt-1 text-sm text-slate-500">
                    {project.language} · Created {new Date(project.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <button
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-500 hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                  onClick={() => handleDelete(project.id)}
                  title="Delete project"
                  type="button"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="p-5 text-sm text-slate-500">Create your first project to start reviewing code.</p>
        )}
      </section>
    </div>
  );
}
