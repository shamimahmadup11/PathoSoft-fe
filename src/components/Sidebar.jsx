import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, LayoutDashboard, FileText, History, User, LogOut } from "lucide-react";

// Simple class‑name joiner — no external imports or aliases needed
const cn = (...classes) => classes.filter(Boolean).join(" ");

const Sidebar = ({ isOpen, onToggle }) => {
  const navItems = [
    { path: "/", label: "Dashboard", icon: <LayoutDashboard size={20} /> },
    { path: "/generatereport", label: "Generate Report", icon: <FileText size={20} /> },
    { path: "/history", label: "History", icon: <History size={20} /> },
    { path: "/profile", label: "Profile", icon: <User size={20} /> },
    { path: "/logout", label: "Logout", icon: <LogOut size={20} /> },
  ];

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={onToggle}
        className="fixed z-50 flex items-center justify-center w-10 h-10 m-4 text-white transition-all duration-200 bg-gradient-to-br from-indigo-600 to-blue-700 rounded-lg hover:shadow-lg hover:from-indigo-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed z-40 w-72 bg-gradient-to-b from-slate-800 to-slate-900 text-white min-h-screen shadow-xl transform transition-all duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Sidebar Header */}
        <div className="relative p-6 border-b border-slate-700/50">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center">
              <span className="font-bold text-xl text-white">P</span>
            </div>
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-indigo-100">
              Pathosoft
            </h2>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
                      isActive
                        ? "bg-gradient-to-r from-indigo-600/40 to-blue-600/20 text-white font-medium shadow-sm"
                        : "text-slate-300 hover:bg-slate-700/50 hover:text-white"
                    )
                  }
                >
                  <span className="text-indigo-300">{item.icon}</span>
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-700/50">
          <div className="flex items-center justify-between text-sm text-slate-400">
            <span>© 2025 Pathosoft</span>
            <span>v1.0.0</span>
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={onToggle}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Sidebar;
