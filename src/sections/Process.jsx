import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

const PROCESS_STEPS = [
  {
    stage: '01',
    phase: 'Discover',
    title: 'Understand',
    desc: 'The business, its goals and the challenges standing in the way.',
  },
  {
    stage: '02',
    phase: 'Design',
    title: 'Architect',
    desc: 'The experience, information architecture and visual direction.',
  },
  {
    stage: '03',
    phase: 'Build',
    title: 'Develop',
    desc: 'Reliable, scalable technology, built against a real specification.',
  },
  {
    stage: '04',
    phase: 'Launch',
    title: 'Deploy',
    desc: 'Ship, test against real usage, and fix what the data shows.',
  },
  {
    stage: '05',
    phase: 'Grow',
    title: 'Improve',
    desc: 'Automate the repeatable parts and scale what works.',
  },
];

export function Process() {
  const sectionRef = useRef(null);
  const railRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from('.process-step', {
        scrollTrigger: {
          trigger: railRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section className="process section" ref={sectionRef}>
      <div className="container">
        <div className="section-head process-head">
          <h2>From idea to impact.</h2>
          <p>A five-stage process, repeated for every engagement regardless of size.</p>
        </div>

        <div className="process-rail" ref={railRef}>
          {PROCESS_STEPS.map((step, idx) => (
            <div className="process-step" key={idx}>
              <div className="process-dot"></div>
              <span className="process-num">{step.stage}</span>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
