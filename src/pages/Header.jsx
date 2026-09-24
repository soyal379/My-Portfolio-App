import { Sun, Moon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import useTheme from "../context/Theme";

export default function Header() {
  const { themeMode, toggleTheme } = useTheme();
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const isNearTop = currentY < 30;
      const isScrollingDown = currentY > lastScrollY.current;

      if (isNearTop) {
        setIsVisible(true);
      } else if (isScrollingDown && currentY > 60) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass =
    "font-mono text-[clamp(0.7rem,1.5vw,1rem)] font-light whitespace-nowrap rounded-md px-2 py-1.5 transition-colors  dark:hover:bg-dark-border light:hover:bg-light-border sm:px-3";

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-md transition-transform duration-300 ease-in-out dark:border-dark-border dark:bg-dark-bg light:border-light-border light:bg-light-bg ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-3 py-4 sm:px-6">
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
