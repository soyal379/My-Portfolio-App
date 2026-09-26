import { Code2 } from "lucide-react";
import useTheme from "../context/Theme";
import useTypewriter from "../costomHooks/useTypewriter";

const roles = [
  "Frontend Developer",
  "React Enthusiast",
  "UI Craftsman",
  "Problem Solver",
];

export default function Home({ id }) {
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
    <section id={id} className="relative min-h-screen overflow-hidden">
      <div
        className={`${orb} w-[clamp(140px,45vw,320px)] h-[clamp(140px,45vw,320px)] -top-20 -right-15 dark:bg-dark-accent light:bg-light-accent  `}
        style={{
          opacity: orbOpacity,
        }}
      ></div>
      <div
        className={`${orb} w-[clamp(120px,45vw,260px)] h-[clamp(120px,45vw,260px)] -bottom-15 -left-14 dark:bg-dark-accent2 light:bg-light-accent2`}
        style={{
          opacity: orbOpacitySecondary,
        }}
      ></div>

      <div className="max-w-6xl mx-auto relative">
        <p className="font-mono text-sm mb-4 flex items-center gap-2 dark:text-dark-accent light:text-light-accent">
          <Code2 size={14} /> &lt;FrontendDeveloper /&gt;
        </p>

        <h1 className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-4">
          Hi, I'm{" "}
          <span className="dark:text-dark-accent light:text-light-accent">
            SOYAL
          </span>
        </h1>
        <p className="font-mono text-lg md:text-xl mb-6 dark:text-dark-text light:text-light-text">
          I'm a{" "}
          <span className=" dark:text-dark-accent light:text-light-accent">
            {typed}
          </span>
          <span className=".cursor-blink dark:text-dark-accent light:text-light-accent">
            |
          </span>
        </p>
      </div>
    </section>
  );
}
