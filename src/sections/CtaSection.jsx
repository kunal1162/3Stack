import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../components/Button';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { scrollToTarget } from '../hooks/useLenis';

gsap.registerPlugin(ScrollTrigger);

export function CtaSection({ onOpenContact }) {
  const sectionRef = useRef(null);
  const glowRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Glow pulse animation
      gsap.to(glowRef.current, {
        scale: 1.15,
        opacity: 0.28,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Section content reveal
      gsap.from('.cta-content-item', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        y: 35,
        opacity: 0,
        duration: 0.75,
        stagger: 0.12,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  const handleServicesClick = (e) => {
    e.preventDefault();
    scrollToTarget('#services', -80);
  };

  return (
    <section className="cta-section" id="contact" ref={sectionRef}>
      <div className="cta-glow" ref={glowRef} aria-hidden="true" />
      <div className="container">
        <div className="cta-eyebrow cta-content-item">
          <span className="hud-indicator-dot" />
          <span>HAVE A PROBLEM TO SOLVE?</span>
        </div>

        <h2 className="cta-content-item">
          Let's build something <br />
          <span style={{ color: 'var(--accent)' }}>extraordinary.</span>
        </h2>

        <p className="cta-content-item">
          Whether you need a modern website, custom software, digital growth strategy or business automation, let's discuss what you are trying to achieve.
        </p>

        <div className="cta-btns cta-content-item">
          <Button
            variant="primary"
            magnetic
            onClick={onOpenContact}
          >
            Start a Conversation
          </Button>
          <Button
            variant="ghost-dark"
            magnetic
            as="a"
            href="#services"
            onClick={handleServicesClick}
          >
            View Our Services
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
