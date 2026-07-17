import { BarChart3, FolderKanban, History, Sparkles } from "lucide-react";
import { NavLink } from "react-router-dom";

const links = [
  { name: "Dashboard", path: "/dashboard", icon: BarChart3 },
  { name: "Projects", path: "/projects", icon: FolderKanban },
  { name: "New Review", path: "/review", icon: Sparkles },
  { name: "History", path: "/history", icon: History },
];

export default function Sidebar() {
  return (
    <aside className="hidden w-72 border-r border-slate-200 bg-white lg:flex lg:flex-col">
      <div className="border-b border-slate-200 px-6 py-5">
        <p className="text-xl font-bold text-slate-950">CodeInsight AI</p>
        <p className="mt-1 text-sm text-slate-500">AI-assisted code review</p>
      </div>

      <nav className="flex-1 space-y-1 px-4 py-5">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `flex h-11 items-center gap-3 rounded-md px-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-slate-950 text-white"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                }`
              }
            >
              <Icon className="h-4 w-4" />
              {link.name}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}
