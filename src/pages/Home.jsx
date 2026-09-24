import useTheme from "../context/Theme";

export default function Home({ id }) {
  const { themeMode } = useTheme();

  const orb = `absolute rounded-full blur-[60px] pointer-events-none`;

  return (
    <section id={id} className="h-dvh relative overflow-hidden ">
      <style>
        {`
        @keyframes float {
        0%, 100% {transform: translateY(0px);}
        50% {transform: translateY(-18px);}
        }
        `}
      </style>
      <div className={`${orb} w-80 h-80 -top-20 -right-15 float- `}></div>
      <div className={`${orb} w-65 h-65 -bottom-65 -left-15  `}></div>
    </section>
  );
}
