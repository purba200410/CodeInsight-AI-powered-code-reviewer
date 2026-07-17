import { LogOut, Plus, Search } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";

const titles: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/projects": "Projects",
  "/review": "New Review",
  "/history": "Review History",
};

const mobileLinks = [
  ["Dashboard", "/dashboard"],
  ["Projects", "/projects"],
  ["Review", "/review"],
  ["History", "/history"],
];

export default function Navbar() {
  const { user, logout } = useAuth();
  const { pathname } = useLocation();
  const title = titles[pathname] || "Review Details";

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="flex min-h-16 items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Workspace
          </p>
          <h1 className="mt-1 text-xl font-semibold text-slate-950">{title}</h1>
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/review"
            className="hidden h-10 items-center gap-2 rounded-md border border-cyan-200 bg-cyan-50 px-4 text-sm font-semibold text-cyan-900 transition hover:bg-cyan-100 sm:inline-flex"
          >
            <Plus className="h-4 w-4" />
            Review Code
          </Link>

          <div className="hidden items-center gap-2 rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-600 md:flex">
            <Search className="h-4 w-4 text-slate-400" />
            {user?.name || "Developer"}
          </div>

          <button
            onClick={logout}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
            title="Logout"
            type="button"
          >
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </div>

      <nav className="flex gap-1 overflow-x-auto border-t border-slate-200 px-3 py-2 lg:hidden">
        {mobileLinks.map(([name, path]) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `rounded-md px-3 py-2 text-sm font-medium ${
                isActive
                  ? "border border-cyan-200 bg-cyan-50 text-cyan-900"
                  : "text-slate-700 hover:bg-slate-100"
              }`
            }
          >
            {name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
