import { Sun, Moon } from "lucide-react";
import useTheme from "../context/Theme";
import { NavLink } from "react-router-dom";

export default function Header() {
  const { themeMode, toggleTheme } = useTheme();
  const navLinkClass = ({ isActive }) =>
    `font-mono text-xs font-light md:text-sm whitespace-nowrap rounded-md px-3 py-1.5 transition-colors ${
      isActive
        ? "dark:bg-dark-acc-li dark:text-dark-accent light:bg-light-acc-li light:text-light-accent"
        : "dark:text-dark-text light:text-light-text dark:hover:bg-dark-border light:hover:bg-light-border"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b backdrop-blur-md dark:border-dark-border dark:bg-dark-surface light:border-light-border light:bg-light-surface">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <nav className="flex items-center gap-1 overflow-x-auto">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/journey" className={navLinkClass}>
            Journey
          </NavLink>
          <NavLink to="/skills" className={navLinkClass}>
            Skills
          </NavLink>
          <NavLink to="/projects" className={navLinkClass}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={`Switch to ${themeMode === "dark" ? "light" : "dark"} mode`}
          title={`Switch to ${themeMode === "dark" ? "light" : "dark"} mode`}
          className="rounded-md p-2 transition-colors focus:outline-none focus:ring-2 dark:text-dark-text dark:hover:bg-dark-border dark:focus:ring-dark-text light:text-light-text light:hover:bg-light-border light:focus:ring-light-text"
        >
          {themeMode === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>
    </header>
  );
}
