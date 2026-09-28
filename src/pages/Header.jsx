import { Sun, Moon, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import useTheme from "../context/Theme";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const { themeMode, toggleTheme } = useTheme();
  const [isVisible, setIsVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
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
        setMenuOpen(false); // header chhupe toh menu bhi band
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Escape dabane par menu band
  useEffect(() => {
    const onKeyDown = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const navLinkClass =
    "font-mono text-[clamp(0.7rem,1.5vw,1rem)] font-light whitespace-nowrap rounded-md px-2 py-1.5 transition-colors dark:hover:bg-dark-border light:hover:bg-light-border sm:px-3";

  const mobileLinkClass =
    "block w-full rounded-md px-3 py-3 font-mono text-[clamp(0.7rem,1.5vw,1rem)] font-light transition-colors dark:hover:bg-dark-border light:hover:bg-light-border";

  const iconBtnClass =
    "rounded-md p-2 transition-colors focus:outline-none focus:ring-2 dark:text-dark-text dark:hover:bg-dark-border dark:focus:ring-dark-text light:text-light-text light:hover:bg-light-border light:focus:ring-light-text";

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-md transition-transform duration-300 ease-in-out dark:border-dark-border dark:bg-dark-bg light:border-light-border light:bg-light-bg ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex items-center gap-10 px-3 py-4 sm:px-6">
        <h2 className="bg-linear-to-r from-light-accent to-light-accent2 bg-clip-text text-[clamp(1.1rem,5vw,1.5rem)] font-semibold text-transparent dark:from-dark-accent dark:to-dark-accent2">
          MY PortFolio
        </h2>

  
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={navLinkClass}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-1">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${themeMode === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${themeMode === "dark" ? "light" : "dark"} mode`}
            className={iconBtnClass}
          >
            {themeMode === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

        
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className={`${iconBtnClass} md:hidden`}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        aria-hidden={!menuOpen}
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out md:hidden ${
          menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <nav className="overflow-hidden">
          <div className="flex flex-col gap-1 px-3 pb-3 sm:px-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                tabIndex={menuOpen ? 0 : -1}
                onClick={() => setMenuOpen(false)}
                className={mobileLinkClass}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
