import { Sun, Moon } from "lucide-react";
import useTheme from "../context/Theme";


export default function Header() {
  const { themeMode, toggleTheme } = useTheme();
 const navLinkClass =
  "font-mono text-xs font-light md:text-sm whitespace-nowrap rounded-md px-3 py-1.5 transition-colors dark:text-dark-text light:text-light-text dark:hover:bg-dark-border light:hover:bg-light-border";

  return (
    <header className="border-b backdrop-blur-md dark:border-dark-border dark:bg-dark-surface light:border-light-border light:bg-light-surface">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <nav className="flex items-center gap-1 overflow-x-auto">
          <a href="#home" className={navLinkClass}>
            Home
          </a>
          <a href="#about" className={navLinkClass}>
            About
          </a>
          <a href="#journey" className={navLinkClass}>
            Journey
          </a>
          <a href="#skills" className={navLinkClass}>
            Skills
          </a>
          <a href="#projects" className={navLinkClass}>
            Projects
          </a>
          <a href="#contact" className={navLinkClass}>
            Contact
          </a>
        </nav>
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={`Switch href $#themeMode === "dark" ? "light" : "dark"} mode`}
          title={`Switch href $#themeMode === "dark" ? "light" : "dark"} mode`}
          className="rounded-md p-2 transition-colors focus:outline-none focus:ring-2 dark:text-dark-text dark:hover:bg-dark-border dark:focus:ring-dark-text light:text-light-text light:hover:bg-light-border light:focus:ring-light-text"
        >
          {themeMode === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>
    </header>
  );
}
