import useCountUp from "../costomHooks/useCountUp";
import useReveal from "../costomHooks/useReveal.js";

export default function StateCard({ stat }) {
  const [ref, visible] = useReveal();
  const value = useCountUp(stat.value, visible);

  return (
    <div ref={ref} className="px-3 text-center">
      <p className="font-display text-[clamp(2rem,6vw,3rem)] font-semibold text-light-accent dark:text-dark-accent">
        {value}
        {stat.suffix}
      </p>
      <p className="mt-2 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-light-textMuted dark:text-dark-textMuted">
        {stat.label}
      </p>
    </div>
  );
}
