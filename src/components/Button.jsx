import React, { useRef } from 'react';
import gsap from 'gsap';
import { useReducedMotion } from '../hooks/useReducedMotion';

export function Button({
  children,
  variant = 'primary',
  size = 'default',
  magnetic = false,
  className = '',
  as: Component = 'button',
  onClick,
  ...props
}) {
  const btnRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const handleMouseMove = (e) => {
    if (!magnetic || prefersReducedMotion) return;
    const btn = btnRef.current;
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(btn, {
      x: x * 0.22,
      y: y * 0.22,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    if (!magnetic || prefersReducedMotion) return;
    const btn = btnRef.current;
    if (!btn) return;

    gsap.to(btn, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: 'elastic.out(1.1, 0.4)',
    });
  };

  const variantClass =
    variant === 'primary'
      ? 'btn-primary'
      : variant === 'ghost-light'
      ? 'btn-ghost-light'
      : 'btn-ghost-dark';

  const sizeClass = size === 'sm' ? 'btn-sm' : '';

  return (
    <Component
      ref={btnRef}
      className={`btn ${variantClass} ${sizeClass} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Button;
