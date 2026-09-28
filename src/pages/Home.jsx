import { ChevronRight, Code2 } from "lucide-react";
import useTheme from "../context/Theme";
import useTypewriter from "../costomHooks/useTypewriter";
import useScrollTo from "../costomHooks/scrollTo";
import { roles, STATS } from "../data.js";
import StateCard from "../components/StateCard.jsx";

export default function Home({ id }) {
  const scrollTo = useScrollTo();
  const typed = useTypewriter(roles, {
    typeSpeed: 175,
    deleteSpeed: 70,
    pauseTime: 1700,
  });
  const { themeMode } = useTheme();
  const orbOpacity = themeMode === "dark" ? 0.18 : 0.12;
  const orbOpacitySecondary = themeMode === "dark" ? 0.14 : 0.1;

  const orb = `absolute rounded-full blur-[60px] pointer-events-none orb-float `;

  return (
    <section id={id} className="relative min-h-auto overflow-hidden">
      <div
        className={`${orb} w-[clamp(140px,45vw,320px)] h-[clamp(140px,45vw,320px)] -top-20 -right-16 bg-light-accent dark:bg-dark-accent`}
        style={{ opacity: orbOpacity }}
      ></div>
      <div
        className={`${orb} w-[clamp(120px,45vw,260px)] h-[clamp(120px,45vw,260px)] -bottom-14 -left-14 bg-light-accent2 dark:bg-dark-accent2`}
        style={{ opacity: orbOpacitySecondary }}
      ></div>

      <div className="max-w-6xl mx-auto mt-20 relative px-6 ">
        <p className="font-mono text-[clamp(0.75rem,1.4vw,0.875rem)] mb-4 flex items-center gap-2 text-light-accent dark:text-dark-accent">
          <Code2 size={14} /> &lt;FrontendDeveloper /&gt;
        </p>

        <h1 className="font-display text-[clamp(2.25rem,6vw,3rem)] font-semibold leading-tight mb-4">
          Hi, I'm{" "}
          <span className="text-light-accent dark:text-dark-accent">Soyal</span>
        </h1>

        <p className="font-mono text-[clamp(1.1rem,2.5vw,1.25rem)] mb-6 text-light-text dark:text-dark-text">
          I'm a{" "}
          <span className="text-light-accent dark:text-dark-accent">
            {typed}
          </span>
          <span className="cursor-blink text-light-accent dark:text-dark-accent">
            |
          </span>
        </p>

        <p className="text-[clamp(1rem,2vw,1.125rem)] max-w-xl mb-9 text-light-textMuted dark:text-dark-textMuted">
          I build fast, accessible interfaces with React and Tailwind CSS —
          turning clean code into products people enjoy using.
        </p>

        <div className="flex flex-wrap gap-3 mb-10">
          <button
            onClick={() => scrollTo("projects")}
            className="font-mono text-[clamp(0.8rem,1.8vw,0.875rem)] px-5 py-2.5 rounded-md font-medium flex items-center gap-1.5 transition duration-200 ease-in-out hover:opacity-90 hover:-translate-y-0.5 bg-linear-to-r from-light-accent to-light-accent2 dark:from-dark-accent dark:to-dark-accent2 text-white shadow-sm"
          >
            View Projects <ChevronRight size={15} />
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="font-mono text-[clamp(0.8rem,1.8vw,0.875rem)] px-5 py-2.5 rounded-md font-medium text-light-textMuted dark:text-dark-textMuted"
          >
            Get in Touch
          </button>
        </div>
        <div className="grid max-w-xl grid-cols-2 gap-4 mb-30 border-t border-line pt-8 md:grid-cols-4 text-light-textMuted dark:text-dark-textMuted">
          {STATS.map((s) => (
            <StateCard key={s.label} stat={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
