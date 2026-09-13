import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '../hooks/useReducedMotion';
import {
  Code2,
  TrendingUp,
  Workflow,
  Sparkles,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const PHILOSOPHY_PILLARS = [
  {
    num: '01',
    word: 'BUILD',
    accent: '#00C79E',
    tagline: 'BUILD better.',
    desc: 'Modern websites, web applications, and custom software engineered to solve real business challenges with high performance.',
    icon: Code2,
  },
  {
    num: '02',
    word: 'GROW',
    accent: '#00D9F5',
    tagline: 'GROW smarter.',
    desc: 'Targeted digital marketing, high-converting customer experiences, and organic search visibility that reaches the right audience.',
    icon: TrendingUp,
  },
  {
    num: '03',
    word: 'AUTOMATE',
    accent: '#3B82F6',
    tagline: 'AUTOMATE what can be simplified.',
    desc: 'Eliminate repetitive manual tasks, connect fragmented tools, and save valuable operational hours every single week.',
    icon: Workflow,
  },
];


const STARTUP_PROMISES = [
  'Humble & Transparent Collaboration',
  'Clean, Maintainable Code',
  'Practical Problem Solving',
  'Zero Unnecessary Tool Bloat',
];

export function Capabilities() {
  const sectionRef = useRef(null);
  const pillarsRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Subtle entrance fade for pillars (NO text animation / scramble)
      gsap.from('.about-pillar-card', {
        scrollTrigger: {
          trigger: pillarsRef.current,
          start: 'top 82%',
          toggleActions: 'play none none reverse',
        },
        y: 28,
        opacity: 0,
        duration: 0.65,
        stagger: 0.12,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section className="about-capabilities-section" id="capabilities" ref={sectionRef}>
      <div className="container">
        {/* Section Header with Crisp, Non-Animated Static Typography */}
        <div className="about-section-head">
          <div className="about-hud-tag">
            <span className="hud-indicator-dot" />
            <span className="hud-mono-label">// ABOUT 3STACK</span>
            <span className="hud-divider">/</span>
            <span className="hud-mono-desc">BUILDING TECHNOLOGY WITH PURPOSE</span>
          </div>

          <h2 className="about-clean-headline">
            Building Technology with Purpose.
          </h2>

          <p className="about-lead-text">
            3STACK is a modern technology and digital solutions startup focused on helping businesses build better digital products, grow their presence and automate repetitive operations.
          </p>

          <p className="about-lead-text" style={{ marginTop: '14px' }}>
            We believe that technology should be simple, effective and directly tied to business results. Instead of overcomplicating things with unnecessary tools, we focus on what actually works for your business.
          </p>
        </div>

        {/* 3 Core Philosophy Pillars: BUILD • GROW • AUTOMATE */}
        <div className="about-pillars-grid" ref={pillarsRef}>
          {PHILOSOPHY_PILLARS.map((pillar) => {
            const IconComp = pillar.icon;
            return (
              <div key={pillar.num} className="about-pillar-card">
                <div className="pillar-header">
                  <span className="pillar-num">{pillar.num}</span>
                  <div className="pillar-icon-box">
                    <IconComp size={20} color={pillar.accent} />
                  </div>
                </div>

                <div className="pillar-metric-row">
                  <strong className="pillar-metric-val" style={{ color: pillar.accent }}>
                    {pillar.word}
                  </strong>
                </div>

                <h3 className="pillar-title" style={{ fontSize: '18px' }}>{pillar.tagline}</h3>
                <p className="pillar-desc">{pillar.desc}</p>
              </div>
            );
          })}
        </div>



        {/* Bottom Tagline / Statement Card */}
        <div className="about-tagline-card">
          <div className="tagline-badge">
            <Sparkles size={13} color="var(--accent)" />
            <span>3STACK PHILOSOPHY</span>
          </div>
          <h3 className="tagline-quote">
            “SMALL STARTUP. BIG IDEAS. REAL SOLUTIONS.”
          </h3>
          <p className="tagline-sub">
            We are committed to delivering clean engineering, honest communication, and genuine value on every project we take on.
          </p>
        </div>

        {/* Startup Promises Trust Strip */}
        <div className="about-trust-strip" style={{ marginTop: '24px' }}>
          {STARTUP_PROMISES.map((item, idx) => (
            <div key={idx} className="trust-item">
              <span className="trust-dot" />
              <span className="trust-text">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Capabilities;
