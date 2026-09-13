import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useReducedMotion } from '../hooks/useReducedMotion';

export function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Hide cursor on touch/mobile devices or when reduced motion is preferred
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch || prefersReducedMotion) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    // Fast GSAP quickTo setters for 60fps buttery tracking
    const setCursorX = gsap.quickTo(cursor, 'x', { duration: 0.1, ease: 'power3' });
    const setCursorY = gsap.quickTo(cursor, 'y', { duration: 0.1, ease: 'power3' });
    const setFollowerX = gsap.quickTo(follower, 'x', { duration: 0.35, ease: 'power2.out' });
    const setFollowerY = gsap.quickTo(follower, 'y', { duration: 0.35, ease: 'power2.out' });

    const onMouseMove = (e) => {
      setIsVisible(true);
      setCursorX(e.clientX);
      setCursorY(e.clientY);
      setFollowerX(e.clientX);
      setFollowerY(e.clientY);
    };

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);

    // Track hover over interactive targets
    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, [role="button"], input, textarea, select, .service-card, .work-item, .why-row');
      if (target) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className="custom-cursor-dot"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '6px',
          height: '6px',
          backgroundColor: 'var(--accent)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.2s ease, transform 0.15s ease',
        }}
      />
      <div
        ref={followerRef}
        className="custom-cursor-follower"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHovered ? '48px' : '26px',
          height: isHovered ? '48px' : '26px',
          border: '1px solid var(--accent)',
          backgroundColor: isHovered ? 'rgba(0, 199, 158, 0.08)' : 'transparent',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          transform: 'translate(-50%, -50%)',
          opacity: isVisible ? (isHovered ? 0.9 : 0.45) : 0,
          transition: 'width 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), height 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), background-color 0.3s ease, opacity 0.2s ease',
          mixBlendMode: 'difference',
        }}
      />
    </>
  );
}

export default CustomCursor;
