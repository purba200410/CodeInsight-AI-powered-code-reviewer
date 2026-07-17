import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="grid min-h-screen lg:grid-cols-[1.1fr_0.9fr]">
        <section className="hidden items-center px-12 lg:flex">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-300">
              CodeInsight AI
            </p>
            <h1 className="mt-5 text-5xl font-semibold leading-tight text-white">
              Review code with static analysis and AI judgment in one workspace.
            </h1>
            <p className="mt-5 text-lg text-slate-300">
              Track projects, submit snippets, inspect findings, and keep a
              searchable review history for every codebase you touch.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {["ESLint checks", "Gemini review", "Score trends"].map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-white/10 bg-white/5 p-4 text-sm font-medium text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="flex min-h-screen items-center justify-center px-4 py-10">
          <Outlet />
        </section>
      </div>
    </div>
  );
}
