import { useState, useEffect, useRef, useCallback } from 'react';

const DEFAULT_CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ#$!*_-~=\\/[]{}';

export function useScrambleText(targetText, options = {}) {
  const {
    chars = DEFAULT_CHARS,
    speed = 35,
    revealSpeed = 1.2,
    autoPlay = false,
    delay = 0,
  } = options;

  const [displayText, setDisplayText] = useState(targetText);
  const [isScrambling, setIsScrambling] = useState(false);
  const frameRef = useRef(null);
  const timeoutRef = useRef(null);

  const startScramble = useCallback(() => {
    if (!targetText) return;

    let iteration = 0;
    const maxIterations = targetText.length * revealSpeed * 4;
    setIsScrambling(true);

    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    const animate = () => {
      iteration++;

      const scrambled = targetText
        .split('')
        .map((char, index) => {
          if (char === ' ') return ' ';
          // If iteration has progressed past this character's reveal threshold, show true char
          if (index < iteration / (revealSpeed * 4)) {
            return targetText[index];
          }
          // Otherwise pick a random scramble character
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');

      setDisplayText(scrambled);

      if (iteration < maxIterations) {
        timeoutRef.current = setTimeout(() => {
          frameRef.current = requestAnimationFrame(animate);
        }, speed);
      } else {
        setDisplayText(targetText);
        setIsScrambling(false);
      }
    };

    if (delay > 0) {
      timeoutRef.current = setTimeout(() => {
        animate();
      }, delay);
    } else {
      animate();
    }
  }, [targetText, chars, speed, revealSpeed, delay]);

  useEffect(() => {
    if (autoPlay) {
      startScramble();
    } else {
      setDisplayText(targetText);
    }

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [targetText, autoPlay, startScramble]);

  return { displayText, isScrambling, startScramble };
}
