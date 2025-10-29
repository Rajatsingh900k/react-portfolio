import React, { useEffect, useState } from "react";
export default function Typewriter({
  words = ["Web Developer","Game Developer","Software Engineer","Data Scientist"],
  typingSpeed = 80,
  deletingSpeed = 40,
  pause = 1200,
  loop = true,
  cursor = true,
  className = "text-lg font-medium",
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [subText, setSubText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let mounted = true;
    const currentWord = words[wordIndex % words.length];

    // choose speed based on typing or deleting
    const speed = isDeleting ? deletingSpeed : typingSpeed;

    const timer = setTimeout(() => {
      if (!mounted) return;

      if (!isDeleting) {
        // type next character
        setSubText(currentWord.slice(0, subText.length + 1));

        // finished typing word
        if (subText.length + 1 === currentWord.length) {
          if (loop || wordIndex + 1 < words.length) {
            // wait, then start deleting
            setTimeout(() => {
              setIsDeleting(true);
            }, pause);
          }
        }
      } else {
        // deleting
        setSubText(currentWord.slice(0, subText.length - 1));

        // finished deleting
        if (subText.length - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((idx) => (idx + 1) % words.length);
        }
      }
    }, speed);

    return () => {
      mounted = false;
      clearTimeout(timer);
    };
    // Intentionally include subText and isDeleting in deps to drive animation
  }, [subText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pause, loop]);

  // Simple blinking cursor using inline style (works without external CSS)
  const cursorStyle = {
    display: "inline-block",
    marginLeft: 6,
    width: 10,
    fontWeight: 700,
    lineHeight: 1,
    animation: cursor ? "tw-blink 1s steps(2, start) infinite" : "none",
  };

  // Keyframes as a React-friendly <style> block. If you already use Tailwind
  // or a global CSS file, move these styles there instead.
  const keyframes = `
    @keyframes tw-blink { 0% { opacity: 1 } 49% { opacity: 1 } 50% { opacity: 0 } 100% { opacity: 0 } }
  `;

  return (
    <div className={className}>
      <style>{keyframes}</style>
      <span>{subText}</span>
      {cursor && <span aria-hidden="true" style={cursorStyle}>|</span>}
    </div>
  );
}
