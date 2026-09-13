import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '../hooks/useReducedMotion';
import {
  Shield,
  Zap,
  Workflow,
  Rocket,
  ArrowRight,
  AlertTriangle,
  Lightbulb,
  Sparkles,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const SOLUTIONS_DATA = [
  {
    id: 'understand',
    num: '01',
    discipline: 'UNDERSTAND',
    tagline: 'Listen & Define the Exact Need',
    problem: 'Generic off-the-shelf templates and blind assumptions fail because they do not reflect how your business actually operates.',
    solution: 'We listen to understand the business, goals, current workflow and the exact problem that needs solving.',
    transformation: 'Crystal-clear understanding of requirements before any code or design work begins, avoiding costly reworks.',
    metrics: [
      { label: 'Core Priority', value: 'Listen First' },
      { label: 'Scope Target', value: 'Workflow First' },
      { label: 'Outcome', value: 'Clear Direction' },
    ],
    tech: ['Workflow Discovery', 'Goal Alignment', 'Stakeholder Review', 'Pain-point Audit'],
    accentColor: '#00C79E',
    badge: 'STEP 01 // DISCOVERY',
    icon: Shield,
    ctaText: 'Discuss Your Requirements',
  },
  {
    id: 'analyze',
    num: '02',
    discipline: 'ANALYZE',
    tagline: 'Break Down Bottlenecks & Find Value',
    problem: 'Many digital projects build features that users never touch while leaving critical operational bottlenecks unsolved.',
    solution: 'Break down the problem, identify bottlenecks or missing digital opportunities, and determine what will actually deliver value.',
    transformation: 'Prioritized feature roadmap focused 100% on efficiency, usability, and measurable business growth.',
    metrics: [
      { label: 'Analysis', value: 'Bottleneck Audit' },
      { label: 'Roadmap', value: 'Value Driven' },
      { label: 'Outcome', value: 'Zero Waste' },
    ],
    tech: ['Bottleneck Analysis', 'Opportunity Mapping', 'Value Prioritization', 'Architecture Review'],
    accentColor: '#00D9F5',
    badge: 'STEP 02 // ANALYSIS',
    icon: Zap,
    ctaText: 'Explore Strategic Approach',
  },
  {
    id: 'plan',
    num: '03',
    discipline: 'PLAN',
    tagline: 'Define Solution & Implementation Plan',
    problem: 'Rushing directly into development without architecture leads to spaghetti code, security issues, and fragile systems.',
    solution: 'Define the solution, choose the right technology approach, map user experience and create a clear implementation roadmap.',
    transformation: 'Transparent milestones, validated UI prototypes, and clean system blueprints ensuring smooth execution.',
    metrics: [
      { label: 'Architecture', value: 'Scalable Plan' },
      { label: 'Design UX', value: 'User Mapped' },
      { label: 'Milestones', value: 'Clear Roadmap' },
    ],
    tech: ['Solution Architecture', 'UI/UX Wireframing', 'Tech Stack Choice', 'Delivery Roadmap'],
    accentColor: '#3B82F6',
    badge: 'STEP 03 // PLANNING',
    icon: Workflow,
    ctaText: 'Plan Your Solution',
  },
  {
    id: 'build',
    num: '04',
    discipline: 'BUILD',
    tagline: 'Design & Develop with Precision',
    problem: 'Poorly constructed websites and software suffer from sluggish load times, broken layouts, and hard-to-maintain code.',
    solution: 'Design, develop and implement the solution with focus on usability, clean code, performance and reliability.',
    transformation: 'Modern, reliable, and production-ready digital product built to delight users and represent your brand.',
    metrics: [
      { label: 'Execution', value: 'Clean Code' },
      { label: 'Quality', value: 'High Performance' },
      { label: 'Reliability', value: 'Production Ready' },
    ],
    tech: ['Modern Frontend', 'Tailored Backend', 'Responsive QA', 'Security Standards'],
    accentColor: '#10B981',
    badge: 'STEP 04 // EXECUTION',
    icon: Rocket,
    ctaText: 'Build With 3STACK',
  },
  {
    id: 'improve',
    num: '05',
    discipline: 'IMPROVE',
    tagline: 'Test, Refine & Continuous Support',
    problem: 'Launching a project without testing, updates, or post-launch support leaves businesses stranded when requirements change.',
    solution: 'Test, refine and support the solution to make sure it continues to deliver results as the business grows.',
    transformation: 'Long-term reliability, continuous optimizations, and dependable partner support whenever you need assistance.',
    metrics: [
      { label: 'Testing', value: 'Cross-Device QA' },
      { label: 'Support', value: 'Dedicated' },
      { label: 'Evolution', value: 'Future Ready' },
    ],
    tech: ['Quality Assurance', 'Performance Tuning', 'Post-Launch Support', 'Iterative Upgrades'],
    accentColor: '#00C79E',
    badge: 'STEP 05 // EVOLUTION',
    icon: Sparkles,
    ctaText: 'Start Partnership',
  },
];

export function Solutions({ onOpenContact }) {
  const sectionRef = useRef(null);
  const pinViewportRef = useRef(null);
  const visualDeckRef = useRef(null);
  const canvasRefs = useRef([]);
  const textSlideRefs = useRef([]);
  const progressBarRef = useRef(null);
  const watermarkRef = useRef(null);
  const headlineRef = useRef(null);

  const [activeStep, setActiveStep] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  // Handle smooth scroll to specific step when clicking step tab
  const handleStepClick = (index) => {
    if (!sectionRef.current || prefersReducedMotion) {
      setActiveStep(index);
      return;
    }
    const sectionTop = sectionRef.current.offsetTop;
    const pinDistance = window.innerHeight * 4;
    const targetScroll = sectionTop + (index / 4) * pinDistance + 10;

    if (window.__lenis) {
      window.__lenis.scrollTo(targetScroll, { duration: 1.2 });
    } else {
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
  };

  // 3D Perspective Tilt on Mouse Movement over Active Canvas
  const handleCanvasMouseMove = (e) => {
    if (prefersReducedMotion || window.innerWidth <= 1024) return;
    const activeCanvas = canvasRefs.current[activeStep];
    if (!activeCanvas) return;

    const rect = activeCanvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(activeCanvas.querySelector('.canvas-3d-inner'), {
      rotateY: x * 6,
      rotateX: -y * 6,
      scale: 1.02,
      duration: 0.35,
      ease: 'power1.out',
      transformPerspective: 1000,
    });
  };

  const handleCanvasMouseLeave = () => {
    const activeCanvas = canvasRefs.current[activeStep];
    if (!activeCanvas) return;

    gsap.to(activeCanvas.querySelector('.canvas-3d-inner'), {
      rotateY: 0,
      rotateX: 0,
      scale: 1,
      duration: 0.6,
      ease: 'power2.out',
    });
  };

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Kinetic Background Watermark Parallax
      if (watermarkRef.current) {
        gsap.to(watermarkRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
          x: -180,
          opacity: 0.05,
          ease: 'none',
        });
      }

      // 2. Large Editorial Headline Split-Text Reveal
      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll('.headline-word');
        gsap.fromTo(
          words,
          { y: 70, opacity: 0 },
          {
            scrollTrigger: {
              trigger: headlineRef.current,
              start: 'top 82%',
              toggleActions: 'play none none reverse',
            },
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.1,
            ease: 'power3.out',
          }
        );
      }

      // 3. Responsive Pinning with matchMedia
      const mm = gsap.matchMedia();

      // Desktop Pinned Storytelling Viewport (min-width: 1025px)
      mm.add('(min-width: 1025px)', () => {
        // Initial setup of canvas clip-paths
        canvasRefs.current.forEach((canvas, idx) => {
          if (!canvas) return;
          if (idx === 0) {
            gsap.set(canvas, {
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
              opacity: 1,
              zIndex: 10,
            });
            const inner = canvas.querySelector('.canvas-scale-target');
            if (inner) gsap.set(inner, { scale: 1 });
          } else {
            gsap.set(canvas, {
              clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
              opacity: 0,
              zIndex: 10 + idx,
            });
            const inner = canvas.querySelector('.canvas-scale-target');
            if (inner) gsap.set(inner, { scale: 1.12 });
          }
        });

        // Initial setup of text slides
        textSlideRefs.current.forEach((slide, idx) => {
          if (!slide) return;
          if (idx === 0) {
            gsap.set(slide, { opacity: 1, y: 0, pointerEvents: 'auto' });
          } else {
            gsap.set(slide, { opacity: 0, y: 40, pointerEvents: 'none' });
          }
        });

        // Master Pinned Storytelling Timeline
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pinViewportRef.current,
            start: 'top top',
            end: () => '+=' + window.innerHeight * 4,
            pin: true,
            scrub: 0.8,
            anticipatePin: 1,
            onUpdate: (self) => {
              const p = self.progress;
              const currentIdx = Math.min(4, Math.floor(p * 5));
              setActiveStep(currentIdx);

              // Update progress bar width
              if (progressBarRef.current) {
                progressBarRef.current.style.width = `${p * 100}%`;
              }
            },
          },
        });

        // Transition 0 -> 1 (Understand -> Analyze)
        tl.addLabel('step0')
          .to({}, { duration: 0.2 })
          .to(textSlideRefs.current[0], { opacity: 0, y: -35, duration: 0.1, ease: 'power2.inOut', pointerEvents: 'none' })
          .fromTo(textSlideRefs.current[1], { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.12, ease: 'power2.out', pointerEvents: 'auto' }, '<')
          .to(canvasRefs.current[1], {
            opacity: 1,
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            duration: 0.18,
            ease: 'power2.inOut',
          }, '<')
          .to(canvasRefs.current[1]?.querySelector('.canvas-scale-target'), { scale: 1, duration: 0.18, ease: 'power2.out' }, '<')
          .to(canvasRefs.current[0], { opacity: 0.15, duration: 0.15 }, '<');

        // Transition 1 -> 2 (Analyze -> Plan)
        tl.addLabel('step1')
          .to({}, { duration: 0.2 })
          .to(textSlideRefs.current[1], { opacity: 0, y: -35, duration: 0.1, ease: 'power2.inOut', pointerEvents: 'none' })
          .fromTo(textSlideRefs.current[2], { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.12, ease: 'power2.out', pointerEvents: 'auto' }, '<')
          .to(canvasRefs.current[2], {
            opacity: 1,
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            duration: 0.18,
            ease: 'power2.inOut',
          }, '<')
          .to(canvasRefs.current[2]?.querySelector('.canvas-scale-target'), { scale: 1, duration: 0.18, ease: 'power2.out' }, '<')
          .to(canvasRefs.current[1], { opacity: 0.15, duration: 0.15 }, '<');

        // Transition 2 -> 3 (Plan -> Build)
        tl.addLabel('step2')
          .to({}, { duration: 0.2 })
          .to(textSlideRefs.current[2], { opacity: 0, y: -35, duration: 0.1, ease: 'power2.inOut', pointerEvents: 'none' })
          .fromTo(textSlideRefs.current[3], { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.12, ease: 'power2.out', pointerEvents: 'auto' }, '<')
          .to(canvasRefs.current[3], {
            opacity: 1,
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            duration: 0.18,
            ease: 'power2.inOut',
          }, '<')
          .to(canvasRefs.current[3]?.querySelector('.canvas-scale-target'), { scale: 1, duration: 0.18, ease: 'power2.out' }, '<')
          .to(canvasRefs.current[2], { opacity: 0.15, duration: 0.15 }, '<');

        // Transition 3 -> 4 (Build -> Improve)
        tl.addLabel('step3')
          .to({}, { duration: 0.2 })
          .to(textSlideRefs.current[3], { opacity: 0, y: -35, duration: 0.1, ease: 'power2.inOut', pointerEvents: 'none' })
          .fromTo(textSlideRefs.current[4], { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.12, ease: 'power2.out', pointerEvents: 'auto' }, '<')
          .to(canvasRefs.current[4], {
            opacity: 1,
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            duration: 0.18,
            ease: 'power2.inOut',
          }, '<')
          .to(canvasRefs.current[4]?.querySelector('.canvas-scale-target'), { scale: 1, duration: 0.18, ease: 'power2.out' }, '<')
          .to(canvasRefs.current[3], { opacity: 0.15, duration: 0.15 }, '<');
      });

      // Mobile / Tablet Fluid Unpinned Scroll Experience (<= 1024px)
      mm.add('(max-width: 1024px)', () => {
        const mobileCards = sectionRef.current.querySelectorAll('.solutions-mobile-card');
        mobileCards.forEach((card) => {
          gsap.fromTo(
            card,
            { y: 50, opacity: 0 },
            {
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: 'power3.out',
            }
          );
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  // Render Visual Canvas Graphics based on ID
  const renderCanvasGraphic = (id, accentColor) => {
    switch (id) {
      case 'understand':
        return (
          <div className="canvas-graphic-wrapper strength-graphic">
            <svg viewBox="0 0 600 420" className="canvas-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="understandGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#00C79E" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#00C79E" stopOpacity="0" />
                </radialGradient>
              </defs>

              <g stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="3 3">
                <line x1="50" y1="50" x2="550" y2="50" />
                <line x1="50" y1="130" x2="550" y2="130" />
                <line x1="50" y1="210" x2="550" y2="210" />
                <line x1="50" y1="290" x2="550" y2="290" />
                <line x1="50" y1="370" x2="550" y2="370" />
                <line x1="120" y1="40" x2="120" y2="380" />
                <line x1="240" y1="40" x2="240" y2="380" />
                <line x1="360" y1="40" x2="360" y2="380" />
                <line x1="480" y1="40" x2="480" y2="380" />
              </g>

              <circle cx="300" cy="210" r="140" fill="url(#understandGlow)" />

              <polygon
                points="300,90 420,150 420,270 300,330 180,270 180,150"
                stroke="rgba(0,199,158,0.7)"
                strokeWidth="2"
                fill="rgba(0,199,158,0.04)"
              />

              <line x1="300" y1="90" x2="300" y2="330" stroke="rgba(0,199,158,0.5)" strokeWidth="1.5" />
              <line x1="180" y1="150" x2="420" y2="270" stroke="rgba(0,199,158,0.5)" strokeWidth="1.5" />
              <line x1="180" y1="270" x2="420" y2="150" stroke="rgba(0,199,158,0.5)" strokeWidth="1.5" />

              <circle cx="300" cy="210" r="10" fill="#00C79E" />
              <circle cx="300" cy="210" r="18" stroke="#00C79E" strokeWidth="1.5" strokeOpacity="0.6" />
              <circle cx="300" cy="90" r="6" fill="#00C79E" />
              <circle cx="420" cy="150" r="6" fill="#00C79E" />
              <circle cx="420" cy="270" r="6" fill="#00C79E" />
              <circle cx="300" cy="330" r="6" fill="#00C79E" />
              <circle cx="180" cy="270" r="6" fill="#00C79E" />
              <circle cx="180" cy="150" r="6" fill="#00C79E" />

              <text x="300" y="70" textAnchor="middle" fill="#00C79E" fontSize="11" fontFamily="monospace">BUSINESS GOALS</text>
              <text x="440" y="145" textAnchor="start" fill="#94A3B8" fontSize="11" fontFamily="monospace">WORKFLOW AUDIT</text>
              <text x="440" y="275" textAnchor="start" fill="#94A3B8" fontSize="11" fontFamily="monospace">PAIN POINTS</text>
              <text x="300" y="355" textAnchor="middle" fill="#00C79E" fontSize="11" fontFamily="monospace">EXACT PROBLEM</text>
              <text x="160" y="275" textAnchor="end" fill="#94A3B8" fontSize="11" fontFamily="monospace">USER NEEDS</text>
              <text x="160" y="145" textAnchor="end" fill="#94A3B8" fontSize="11" fontFamily="monospace">STAKEHOLDERS</text>
            </svg>

            <div className="canvas-hud-pill hud-top-left">
              <span className="hud-indicator active-glow" />
              <span className="hud-mono-text">DISCOVERY: WORKFLOW MAPPING</span>
            </div>

            <div className="canvas-hud-card hud-bottom-right">
              <div className="hud-header">
                <Shield size={14} color="#00C79E" />
                <span className="hud-title">DISCOVERY PHASE</span>
              </div>
              <div className="hud-row">
                <span>PRIORITY:</span>
                <strong className="hud-val" style={{ color: '#00C79E' }}>UNDERSTAND THE NEED</strong>
              </div>
              <div className="hud-progress-wrap">
                <div className="hud-progress-fill" style={{ width: '100%', backgroundColor: '#00C79E' }} />
              </div>
              <div className="hud-footer">NO ASSUMPTIONS • PURPOSE-DRIVEN</div>
            </div>
          </div>
        );

      case 'analyze':
        return (
          <div className="canvas-graphic-wrapper conditioning-graphic">
            <svg viewBox="0 0 600 420" className="canvas-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="analyzeWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00D9F5" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#00D9F5" stopOpacity="1" />
                  <stop offset="100%" stopColor="#00C79E" stopOpacity="0.8" />
                </linearGradient>
              </defs>

              <g stroke="rgba(255,255,255,0.06)" strokeWidth="1">
                {[70, 140, 210, 280, 350].map((y) => (
                  <line key={y} x1="40" y1={y} x2="560" y2={y} />
                ))}
                {[100, 200, 300, 400, 500].map((x) => (
                  <line key={x} x1={x} y1="40" x2={x} y2="380" strokeDasharray="3 3" />
                ))}
              </g>

              <path
                d="M 40 210 Q 100 210 140 130 T 220 280 T 300 110 T 370 290 T 440 150 T 500 210 L 560 210"
                stroke="url(#analyzeWaveGrad)"
                strokeWidth="3.5"
                strokeLinecap="round"
                fill="none"
              />

              {[
                { x: 140, y: 130, val: 'BOTTLENECK' },
                { x: 220, y: 280, val: 'EFFICIENCY' },
                { x: 300, y: 110, val: 'OPPORTUNITY' },
                { x: 370, y: 290, val: 'PRIORITY' },
                { x: 440, y: 150, val: 'VALUE TARGET' },
              ].map((pt, i) => (
                <g key={i}>
                  <circle cx={pt.x} cy={pt.y} r={7} fill="#00D9F5" />
                  <circle cx={pt.x} cy={pt.y} r={14} stroke="#00D9F5" strokeWidth="1.5" strokeOpacity="0.5" />
                  <text x={pt.x} y={pt.y + (pt.y > 200 ? 28 : -18)} textAnchor="middle" fill="#00D9F5" fontSize="10" fontFamily="monospace">
                    {pt.val}
                  </text>
                </g>
              ))}
            </svg>

            <div className="canvas-hud-pill hud-top-left">
              <span className="hud-indicator active-glow" />
              <span className="hud-mono-text">ANALYSIS: BOTTLENECK AUDIT</span>
            </div>

            <div className="canvas-hud-card hud-bottom-right">
              <div className="hud-header">
                <Zap size={14} color="#00D9F5" />
                <span className="hud-title">VALUE ANALYSIS</span>
              </div>
              <div className="hud-row">
                <span>OBJECTIVE:</span>
                <strong className="hud-val" style={{ color: '#00D9F5' }}>ELIMINATE FRICTION</strong>
              </div>
              <div className="hud-progress-wrap">
                <div className="hud-progress-fill" style={{ width: '100%', backgroundColor: '#00D9F5' }} />
              </div>
              <div className="hud-footer">DELIVERING PRACTICAL VALUE</div>
            </div>
          </div>
        );

      case 'plan':
        return (
          <div className="canvas-graphic-wrapper mobility-graphic">
            <svg viewBox="0 0 600 420" className="canvas-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g stroke="rgba(255,255,255,0.05)" strokeWidth="1">
                {[60, 120, 180, 240, 300, 360].map((y) => (
                  <line key={y} x1="40" y1={y} x2="560" y2={y} strokeDasharray="4 4" />
                ))}
              </g>

              {/* Connected Solution Architecture Mesh */}
              <path
                d="M 100 210 C 180 210, 200 120, 300 120 C 400 120, 420 210, 500 210"
                stroke="#3B82F6"
                strokeWidth="2.5"
                fill="none"
              />
              <path
                d="M 100 210 C 180 210, 200 300, 300 300 C 400 300, 420 210, 500 210"
                stroke="#00C79E"
                strokeWidth="2"
                strokeDasharray="6 4"
                fill="none"
              />

              {[
                { cx: 100, cy: 210, label: 'TECH ARCHITECTURE', r: 8, fill: '#3B82F6' },
                { cx: 300, cy: 120, label: 'UX / UI PROTOTYPE', r: 8, fill: '#00D9F5' },
                { cx: 300, cy: 300, label: 'DATA MODEL', r: 7, fill: '#00C79E' },
                { cx: 500, cy: 210, label: 'DELIVERY ROADMAP', r: 8, fill: '#3B82F6' },
              ].map((node, i) => (
                <g key={i}>
                  <circle cx={node.cx} cy={node.cy} r={node.r + 6} stroke={node.fill} strokeWidth="1.5" strokeOpacity="0.4" />
                  <circle cx={node.cx} cy={node.cy} r={node.r} fill={node.fill} />
                  <text
                    x={node.cx}
                    y={node.cy + (node.cy > 210 ? 24 : -16)}
                    textAnchor="middle"
                    fill="#94A3B8"
                    fontSize="11"
                    fontFamily="monospace"
                    letterSpacing="0.05em"
                  >
                    {node.label}
                  </text>
                </g>
              ))}
            </svg>

            <div className="canvas-hud-pill hud-top-left">
              <span className="hud-indicator active-glow-blue" />
              <span className="hud-mono-text">PLANNING: ARCHITECTURE & ROADMAP</span>
            </div>

            <div className="canvas-hud-card hud-bottom-right">
              <div className="hud-header">
                <Workflow size={14} color="#3B82F6" />
                <span className="hud-title">SYSTEM BLUEPRINT</span>
              </div>
              <div className="hud-row">
                <span>ROADMAP:</span>
                <strong className="hud-val" style={{ color: '#3B82F6' }}>CLEAR MILESTONES</strong>
              </div>
              <div className="hud-progress-wrap">
                <div className="hud-progress-fill" style={{ width: '100%', backgroundColor: '#3B82F6' }} />
              </div>
              <div className="hud-footer">STRUCTURED FOR SMOOTH EXECUTION</div>
            </div>
          </div>
        );

      case 'build':
        return (
          <div className="canvas-graphic-wrapper performance-graphic">
            <svg viewBox="0 0 600 420" className="canvas-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="buildGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10B981" stopOpacity="0.2" />
                  <stop offset="60%" stopColor="#00C79E" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#00D9F5" stopOpacity="1" />
                </linearGradient>
              </defs>

              <g stroke="rgba(255,255,255,0.06)" strokeWidth="1">
                {[100, 160, 220, 280, 340].map((y) => (
                  <line key={y} x1="50" y1={y} x2="550" y2={y} />
                ))}
                {[120, 200, 280, 360, 440, 520].map((x) => (
                  <line key={x} x1={x} y1="80" x2={x} y2="360" strokeDasharray="3 3" />
                ))}
              </g>

              {/* Code Building Blocks Matrix */}
              <rect x="100" y="120" width="160" height="90" rx="6" fill="rgba(0,199,158,0.08)" stroke="#00C79E" strokeWidth="1.5" />
              <rect x="115" y="135" width="80" height="12" rx="3" fill="#00C79E" opacity="0.8" />
              <rect x="115" y="155" width="120" height="8" rx="2" fill="rgba(255,255,255,0.2)" />
              <rect x="115" y="170" width="95" height="8" rx="2" fill="rgba(255,255,255,0.2)" />
              <text x="180" y="195" textAnchor="middle" fill="#00C79E" fontSize="10" fontFamily="monospace">CLEAN CODE</text>

              <rect x="340" y="120" width="160" height="90" rx="6" fill="rgba(0,217,245,0.08)" stroke="#00D9F5" strokeWidth="1.5" />
              <rect x="355" y="135" width="80" height="12" rx="3" fill="#00D9F5" opacity="0.8" />
              <rect x="355" y="155" width="120" height="8" rx="2" fill="rgba(255,255,255,0.2)" />
              <rect x="355" y="170" width="95" height="8" rx="2" fill="rgba(255,255,255,0.2)" />
              <text x="420" y="195" textAnchor="middle" fill="#00D9F5" fontSize="10" fontFamily="monospace">RESPONSIVE UX</text>

              <line x1="260" y1="165" x2="340" y2="165" stroke="#00C79E" strokeWidth="2" strokeDasharray="4 4" />

              {/* Bottom Target Indicator */}
              <path
                d="M 60 340 Q 220 330 320 270 T 520 230"
                stroke="url(#buildGrad)"
                strokeWidth="3.5"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="520" cy="230" r="8" fill="#00D9F5" />
              <circle cx="520" cy="230" r="16" stroke="#00D9F5" strokeWidth="1.5" strokeOpacity="0.5" />
            </svg>

            <div className="canvas-hud-pill hud-top-left">
              <span className="hud-indicator active-glow" />
              <span className="hud-mono-text">BUILD: CLEAN CODE & PERFORMANCE</span>
            </div>

            <div className="canvas-hud-card hud-bottom-right">
              <div className="hud-header">
                <Rocket size={14} color="#10B981" />
                <span className="hud-title">PRODUCTION SYSTEM</span>
              </div>
              <div className="hud-row">
                <span>STANDARD:</span>
                <strong className="hud-val" style={{ color: '#10B981' }}>RELIABLE & USABLE</strong>
              </div>
              <div className="hud-progress-wrap">
                <div className="hud-progress-fill" style={{ width: '100%', backgroundColor: '#10B981' }} />
              </div>
              <div className="hud-footer">HIGH PERFORMANCE & RELIABILITY</div>
            </div>
          </div>
        );

      case 'improve':
        return (
          <div className="canvas-graphic-wrapper strength-graphic">
            <svg viewBox="0 0 600 420" className="canvas-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="improveRadial" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#00C79E" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#00C79E" stopOpacity="0" />
                </radialGradient>
              </defs>

              <circle cx="300" cy="210" r="150" fill="url(#improveRadial)" />

              {/* Continuous Iteration Orbital Rings */}
              <circle cx="300" cy="210" r="120" stroke="#00C79E" strokeWidth="1.5" strokeDasharray="8 6" />
              <circle cx="300" cy="210" r="80" stroke="#00D9F5" strokeWidth="2" strokeDasharray="4 4" />
              <circle cx="300" cy="210" r="40" fill="rgba(0,199,158,0.1)" stroke="#00C79E" strokeWidth="1.5" />
              <circle cx="300" cy="210" r="10" fill="#00C79E" />

              {/* 4 Loop Quadrants */}
              {[
                { angle: 0, label: 'QA TESTING' },
                { angle: 90, label: 'USER FEEDBACK' },
                { angle: 180, label: 'OPTIMIZATION' },
                { angle: 270, label: 'CONTINUOUS SUPPORT' },
              ].map((pt, i) => {
                const rad = (pt.angle * Math.PI) / 180;
                const cx = 300 + Math.cos(rad) * 120;
                const cy = 210 + Math.sin(rad) * 120;
                return (
                  <g key={i}>
                    <circle cx={cx} cy={cy} r={8} fill="#00D9F5" />
                    <circle cx={cx} cy={cy} r={14} stroke="#00D9F5" strokeWidth="1" strokeOpacity="0.6" />
                    <text
                      x={cx}
                      y={cy + (cy > 210 ? 24 : -16)}
                      textAnchor="middle"
                      fill="#FFFFFF"
                      fontSize="10"
                      fontFamily="monospace"
                      fontWeight="700"
                    >
                      {pt.label}
                    </text>
                  </g>
                );
              })}
            </svg>

            <div className="canvas-hud-pill hud-top-left">
              <span className="hud-indicator active-glow" />
              <span className="hud-mono-text">IMPROVEMENT: ONGOING PARTNERSHIP</span>
            </div>

            <div className="canvas-hud-card hud-bottom-right">
              <div className="hud-header">
                <Sparkles size={14} color="#00C79E" />
                <span className="hud-title">CONTINUOUS EVOLUTION</span>
              </div>
              <div className="hud-row">
                <span>STATUS:</span>
                <strong className="hud-val" style={{ color: '#00C79E' }}>TESTED & REFINED</strong>
              </div>
              <div className="hud-progress-wrap">
                <div className="hud-progress-fill" style={{ width: '100%', backgroundColor: '#00C79E' }} />
              </div>
              <div className="hud-footer">SUPPORTING BUSINESS GROWTH</div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="solutions-section" id="why" ref={sectionRef}>
      {/* Kinetic Background Watermark Typography */}
      <div className="solutions-watermark-wrap" aria-hidden="true">
        <span className="solutions-watermark-text" ref={watermarkRef}>
          HOW WE WORK • 3STACK METHODOLOGY
        </span>
      </div>

      <div className="container">
        {/* Section Editorial Header */}
        <div className="solutions-hero-head">
          <div className="solutions-tagline-hud">
            <span className="hud-dot" />
            <span className="hud-code">// HOW WE WORK</span>
            <span className="hud-separator">/</span>
            <span className="hud-sub">PRACTICAL PROBLEM-SOLVING METHODOLOGY</span>
          </div>

          <h2 className="solutions-large-headline" ref={headlineRef}>
            <span className="headline-line">
              <span className="headline-word">FROM</span>{' '}
              <span className="headline-word">PROBLEM</span>{' '}
              <span className="headline-word">TO</span>
            </span>
            <span className="headline-line">
              <span className="headline-word accent-text">PRACTICAL</span>{' '}
              <span className="headline-word accent-text">SOLUTION.</span>
            </span>
          </h2>

          <p className="solutions-lead-desc">
            Every business has different challenges. Instead of forcing a predefined product, we first understand the problem, identify the right approach and then build a solution around it.
          </p>
        </div>

        {/* DESKTOP PINNED STORYTELLING ARENA (min-width: 1025px) */}
        <div className="solutions-pinned-arena" ref={pinViewportRef}>
          {/* Top Integrated Progress Tracker & Interactive Tabs */}
          <div className="solutions-progress-nav" role="tablist" aria-label="Solutions Progression">
            <div className="progress-nav-tabs">
              {SOLUTIONS_DATA.map((item, index) => {
                const IconComponent = item.icon;
                const isActive = activeStep === index;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`nav-step-tab ${isActive ? 'is-active' : ''}`}
                    onClick={() => handleStepClick(index)}
                  >
                    <span className="tab-num">{item.num}</span>
                    <IconComponent size={14} className="tab-icon" />
                    <span className="tab-label">{item.discipline}</span>
                    {isActive && <span className="tab-active-glow" />}
                  </button>
                );
              })}
            </div>

            {/* Continuous Progress Bar Track */}
            <div className="progress-track-rail">
              <div className="progress-track-fill" ref={progressBarRef} />
            </div>
          </div>

          {/* Main 2-Column Pinned Deck: Left Storytelling Deck + Right Cinematic Visual Viewport */}
          <div className="solutions-pinned-layout">
            {/* Left Storytelling Deck */}
            <div className="solutions-story-deck">
              {SOLUTIONS_DATA.map((item, index) => {
                return (
                  <div
                    key={item.id}
                    className="solutions-story-slide"
                    ref={(el) => (textSlideRefs.current[index] = el)}
                  >
                    {/* Header Discipline & Number Ticker */}
                    <div className="story-meta-header">
                      <span className="story-number-badge">{item.num}</span>
                      <div className="story-meta-titles">
                        <span className="story-discipline-tag">{item.discipline}</span>
                        <h3 className="story-tagline">{item.tagline}</h3>
                      </div>
                    </div>

                    {/* Storytelling Narrative Matrix: Problem -> Solution -> Transformation */}
                    <div className="story-pst-matrix">
                      {/* 1. Problem */}
                      <div className="pst-block pst-problem">
                        <div className="pst-badge-label">
                          <AlertTriangle size={13} className="pst-icon text-problem" />
                          <span>THE FRICTION</span>
                        </div>
                        <p className="pst-text">{item.problem}</p>
                      </div>

                      {/* 2. Solution */}
                      <div className="pst-block pst-solution">
                        <div className="pst-badge-label">
                          <Lightbulb size={13} className="pst-icon text-solution" />
                          <span>THE SYSTEM</span>
                        </div>
                        <p className="pst-text">{item.solution}</p>
                      </div>

                      {/* 3. Transformation */}
                      <div className="pst-block pst-transformation">
                        <div className="pst-badge-label">
                          <Sparkles size={13} className="pst-icon text-transform" />
                          <span>THE OUTCOME</span>
                        </div>
                        <p className="pst-text highlight">{item.transformation}</p>
                      </div>
                    </div>

                    {/* Performance Benchmarks Metrics */}
                    <div className="story-metrics-grid">
                      {item.metrics.map((metric, mIdx) => (
                        <div key={mIdx} className="story-metric-item">
                          <span className="metric-val">{metric.value}</span>
                          <span className="metric-lbl">{metric.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Badges */}
                    <div className="story-tech-row">
                      {item.tech.map((t, tIdx) => (
                        <span key={tIdx} className="story-tech-pill">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Magnetic CTA Action */}
                    <div className="story-action-row">
                      <button
                        type="button"
                        className="btn-story-explore"
                        onClick={() => onOpenContact && onOpenContact(item.discipline)}
                      >
                        <span className="btn-text">{item.ctaText}</span>
                        <span className="btn-arrow-wrap">
                          <ArrowRight size={16} className="btn-arrow" />
                        </span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Cinematic Visual Viewport with Clip-Path Reveal Stack */}
            <div
              className="solutions-visual-viewport"
              ref={visualDeckRef}
              onMouseMove={handleCanvasMouseMove}
              onMouseLeave={handleCanvasMouseLeave}
            >
              <div className="canvas-stack-container">
                {SOLUTIONS_DATA.map((item, index) => (
                  <div
                    key={item.id}
                    className="solutions-canvas-layer"
                    ref={(el) => (canvasRefs.current[index] = el)}
                  >
                    <div className="canvas-3d-inner">
                      <div className="canvas-scale-target">
                        {renderCanvasGraphic(item.id, item.accentColor)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE / TABLET FLUID UNPINNED CARDS (<= 1024px) */}
        <div className="solutions-mobile-stack">
          {SOLUTIONS_DATA.map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.id} className="solutions-mobile-card">
                <div className="mobile-card-header">
                  <div className="mobile-header-left">
                    <span className="mobile-step-num">{item.num}</span>
                    <IconComponent size={18} color={item.accentColor} />
                    <span className="mobile-step-discipline">{item.discipline}</span>
                  </div>
                  <span className="mobile-step-badge">{item.badge}</span>
                </div>

                <h3 className="mobile-card-title">{item.tagline}</h3>

                {/* Mobile Visual Canvas */}
                <div className="mobile-canvas-wrap">
                  {renderCanvasGraphic(item.id, item.accentColor)}
                </div>

                {/* Mobile Problem -> Solution -> Transformation */}
                <div className="mobile-pst-list">
                  <div className="mobile-pst-item is-problem">
                    <div className="mobile-pst-tag">
                      <AlertTriangle size={12} />
                      <span>FRICTION</span>
                    </div>
                    <p>{item.problem}</p>
                  </div>

                  <div className="mobile-pst-item is-solution">
                    <div className="mobile-pst-tag">
                      <Lightbulb size={12} />
                      <span>THE SYSTEM</span>
                    </div>
                    <p>{item.solution}</p>
                  </div>

                  <div className="mobile-pst-item is-transformation">
                    <div className="mobile-pst-tag">
                      <Sparkles size={12} />
                      <span>OUTCOME</span>
                    </div>
                    <p>{item.transformation}</p>
                  </div>
                </div>

                {/* Mobile Metrics */}
                <div className="mobile-metrics-row">
                  {item.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="mobile-metric-col">
                      <strong className="mobile-metric-value">{m.value}</strong>
                      <span className="mobile-metric-label">{m.label}</span>
                    </div>
                  ))}
                </div>

                {/* Mobile Tech */}
                <div className="mobile-tech-pills">
                  {item.tech.map((t, tIdx) => (
                    <span key={tIdx} className="tech-pill-sm">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Mobile CTA */}
                <button
                  type="button"
                  className="btn-story-explore mobile-cta-btn"
                  onClick={() => onOpenContact && onOpenContact(item.discipline)}
                >
                  <span>{item.ctaText}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom Statement / Quote */}
        <div className="solutions-bottom-statement">
          <div className="statement-quote-box">
            <p className="statement-quote-text">
              “WE DON'T JUST BUILD SOFTWARE. WE BUILD SOLUTIONS AROUND REAL PROBLEMS.”
            </p>
          </div>
          <span className="statement-tag">// 3STACK METHODOLOGY</span>
        </div>
      </div>
    </section>
  );
}

export default Solutions;
