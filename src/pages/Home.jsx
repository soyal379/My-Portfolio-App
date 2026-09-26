import useTheme from "../context/Theme";

export default function Home({ id }) {
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
    </section>
  );
}
