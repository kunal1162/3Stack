import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { Zap, TrendingUp, ShieldCheck, Clock, HeartHandshake } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const VALUES = [
  {
    num: '01',
    title: 'PERFORMANCE DRIVEN',
    desc: 'Fast, efficient and purposeful digital experiences built to perform smoothly across devices.',
    icon: Zap,
    color: '#00C79E',
  },
  {
    num: '02',
    title: 'SCALABLE SOLUTIONS',
    desc: 'Designed with future growth and changing business needs in mind from day one.',
    icon: TrendingUp,
    color: '#00D9F5',
  },
  {
    num: '03',
    title: 'SECURE & RELIABLE',
    desc: 'Clean implementation, responsible development practices and dependable digital solutions.',
    icon: ShieldCheck,
    color: '#3B82F6',
  },
  {
    num: '04',
    title: 'SAVE TIME. AUTOMATE.',
    desc: 'Identify opportunities to reduce repetitive work and simplify everyday business processes.',
    icon: Clock,
    color: '#10B981',
  },
  {
    num: '05',
    title: 'CLIENT FOCUSED. RESULT DRIVEN.',
    desc: "Every solution is built around the client's actual requirements instead of a one-size-fits-all approach.",
    icon: HeartHandshake,
    color: '#00C79E',
  },
];

export function ValueStrip() {
  const sectionRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from('.why-value-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        y: 28,
        opacity: 0,
        duration: 0.65,
        stagger: 0.1,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section className="why-3stack-section" ref={sectionRef}>
      <div className="container">
        <div className="why-3stack-header">
          <div className="section-kicker">
            <span className="kicker-dot" />
            <span>WHY 3STACK</span>
          </div>
          <h2 className="why-3stack-title">WHY BUILD WITH 3STACK?</h2>
          <p className="why-3stack-subtitle">
            Practical advantages of partnering with our team.
          </p>
        </div>

        <div className="why-3stack-grid">
          {VALUES.map((val, idx) => {
            const IconComp = val.icon;
            return (
              <div className="why-value-card" key={idx}>
                <div className="why-card-top">
                  <div className="why-card-icon-box" style={{ color: val.color }}>
                    <IconComp size={22} />
                  </div>
                  <span className="why-card-num">{val.num}</span>
                </div>
                <h3 className="why-card-title">{val.title}</h3>
                <p className="why-card-desc">{val.desc}</p>
                <div className="why-card-line" style={{ background: `linear-gradient(90deg, ${val.color} 0%, transparent 100%)` }} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ValueStrip;
