import { useEffect, useRef, useState } from "react";

function useTypewriter(
  words,
  { typeSpeed = 200, deleteSpeed = 80, pauseTime = 1500 } = {},
) {
  const [text, setText] = useState("");
  const wordIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);

  useEffect(() => {
    if (!words || words.length === 0) return;

    let timeoutId;
    const currentWord = words[wordIndex.current % words.length];

    const tick = () => {
      if (!isDeleting.current) {
        const nextIndex = charIndex.current + 1;
        charIndex.current = nextIndex;
        setText(currentWord.slice(0, nextIndex));

        if (nextIndex >= currentWord.length) {
          isDeleting.current = true;
          timeoutId = setTimeout(tick, pauseTime);
          return;
        }

        timeoutId = setTimeout(tick, typeSpeed);
        return;
      }

      const nextIndex = charIndex.current - 1;
      charIndex.current = nextIndex;
      setText(currentWord.slice(0, nextIndex));

      if (nextIndex <= 0) {
        isDeleting.current = false;
        charIndex.current = 0;
        wordIndex.current = (wordIndex.current + 1) % words.length;
        timeoutId = setTimeout(tick, typeSpeed);
        return;
      }

      timeoutId = setTimeout(tick, deleteSpeed);
    };

    timeoutId = setTimeout(tick, typeSpeed);

    return () => clearTimeout(timeoutId);
  }, [words, typeSpeed, deleteSpeed, pauseTime]);

  return text;
}

export default useTypewriter;
