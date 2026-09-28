import { useEffect, useRef, useState } from "react";

export default function useCountUp(target, start, duration = 1500) {
  const [value, setValue] = useState(0);
  const started = useRef(false);
  const raf = useRef(0);

  useEffect(() => {
    if (!start) {
      started.current = false;
      setValue(0);
      return;
    }

    if (started.current) return;
    started.current = true;

    const startTime = performance.now();

    const tick = (now) => {
      const p = Math.min((now - startTime) / duration, 1);
      setValue(Math.round((1 - Math.pow(1 - p, 3)) * target));

      if (p < 1) raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf.current);
  }, [start, target, duration]);

  return value;
}
