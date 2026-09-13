import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { scrollToTarget } from '../hooks/useLenis';
import { useReducedMotion } from '../hooks/useReducedMotion';
import {
  Shield,
  Zap,
  Workflow,
  ArrowRight,
  ArrowDown,
  Activity,
  Cpu,
  Server,
  Database,
  Globe,
  Radio,
  Sparkles,
  Terminal,
  Layers,
  Lock,
} from 'lucide-react';

const NODES_DATA = [
  {
    id: 'web',
    name: 'WEB & APPS',
    type: 'Responsive, Modern UI/UX',
    latency: 'Fast',
    load: 'Clean Code',
    status: 'ACTIVE',
    cx: 240,
    cy: 110,
    icon: Globe,
    color: '#00C79E',
  },
  {
    id: 'software',
    name: 'CUSTOM SOFTWARE',
    type: 'Tailored Business Logic',
    latency: 'Scalable',
    load: 'Modular',
    status: 'OPTIMAL',
    cx: 140,
    cy: 220,
    icon: Cpu,
    color: '#00D9F5',
  },
  {
    id: 'marketing',
    name: 'DIGITAL GROWTH',
    type: 'Reach Audience & Brand Presence',
    latency: 'Engaged',
    load: 'Strategic',
    status: 'ACTIVE',
    cx: 340,
    cy: 220,
    icon: Database,
    color: '#3B82F6',
  },
  {
    id: 'automation',
    name: 'AUTOMATION SYSTEMS',
    type: 'Simplify Repetitive Workflows',
    latency: 'Saves Time',
    load: 'Autonomous',
    status: 'OPTIMIZED',
    cx: 150,
    cy: 340,
    icon: Zap,
    color: '#00D9F5',
  },
  {
    id: 'autocad',
    name: 'AUTOCAD DESIGNS',
    type: 'Precise 2D Drafting & 3D Modeling',
    latency: 'Accurate',
    load: 'Detailed',
    status: 'READY',
    cx: 330,
    cy: 340,
    icon: Lock,
    color: '#10B981',
  },
  {
    id: 'cloud',
    name: 'CLOUD SOLUTIONS',
    type: 'Dependable, Modern Infrastructure',
    latency: 'Reliable',
    load: 'Secure',
    status: 'READY',
    cx: 240,
    cy: 420,
    icon: Workflow,
    color: '#00C79E',
  },
];

const FOCUS_PILLARS = [
  { value: 'BUILD', label: 'Websites, apps & tailored software', tag: 'PILLAR 01' },
  { value: 'GROW', label: 'Digital reach & customer experience', tag: 'PILLAR 02' },
  { value: 'AUTOMATE', label: 'Simplify workflows & save time', tag: 'PILLAR 03' },
  { value: 'SOLUTIONS', label: 'Practical technology for real problems', tag: 'PHILOSOPHY' },
];

export function Hero({ onOpenContact }) {
  const containerRef = useRef(null);
  const visualCardRef = useRef(null);
  const spotlightRef = useRef(null);

  const [activeMode, setActiveMode] = useState('architecture'); // 'architecture' | 'traffic' | 'autonomous'
  const [hoveredNode, setHoveredNode] = useState(null);
  const [activeKeyword, setActiveKeyword] = useState(null);
  const [pingTime, setPingTime] = useState(14);

  const prefersReducedMotion = useReducedMotion();

  // Simulate subtle live ping fluctuation
  useEffect(() => {
    const interval = setInterval(() => {
      setPingTime(12 + Math.floor(Math.random() * 5));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // 3D Perspective Tilt and Spotlight tracking
  useEffect(() => {
    if (prefersReducedMotion) return;

    const container = containerRef.current;
    const visual = visualCardRef.current;
    const spotlight = spotlightRef.current;
    if (!container || !visual) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const rect = container.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      // Update background spotlight
      if (spotlight) {
        spotlight.style.opacity = '1';
        spotlight.style.transform = `translate(${x - 300}px, ${y - 300}px)`;
      }

      // Calculate 3D tilt angles for the visual card
      const vRect = visual.getBoundingClientRect();
      const vx = (clientX - vRect.left) / vRect.width - 0.5;
      const vy = (clientY - vRect.top) / vRect.height - 0.5;

      gsap.to(visual, {
        rotationY: vx * 12,
        rotationX: -vy * 12,
        transformPerspective: 1200,
        duration: 0.4,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      if (spotlight) spotlight.style.opacity = '0';
      gsap.to(visual, {
        rotationY: 0,
        rotationX: 0,
        duration: 0.8,
        ease: 'power2.out',
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [prefersReducedMotion]);

  // Handle keyword hover linking to system nodes
  const handleKeywordEnter = (keyword) => {
    setActiveKeyword(keyword);
    if (keyword === 'build') {
      setActiveMode('architecture');
      setHoveredNode(NODES_DATA[0]);
    } else if (keyword === 'grow') {
      setActiveMode('traffic');
      setHoveredNode(NODES_DATA[2]);
    } else if (keyword === 'automate') {
      setActiveMode('autonomous');
      setHoveredNode(NODES_DATA[3]);
    }
  };

  const handleKeywordLeave = () => {
    setActiveKeyword(null);
    setHoveredNode(null);
  };

  return (
    <section className="hero-interactive" id="hero" ref={containerRef} aria-label="3STACK Hero Introduction">
      {/* Dynamic Cursor Spotlight Aura */}
      <div className="hero-spotlight" ref={spotlightRef} aria-hidden="true" />

      {/* Cybernetic Perspective Grid Background */}
      <div className="hero-grid-bg" aria-hidden="true" />

      <div className="container hero-layout">
        {/* LEFT COLUMN: High-Impact Editorial Copy & Controls */}
        <div className="hero-content-deck">
          {/* Eyebrow / Category Tag */}
          <div className="hero-status-pill">
            <span className="status-ping-beacon">
              <span className="ping-ring" />
              <span className="ping-dot" />
            </span>
            <span className="status-mono-code">// 3STACK</span>
            <span className="status-sep">/</span>
            <span className="status-tag">TECHNOLOGY • DIGITAL • AUTOMATION</span>
          </div>

          {/* Monumental Kinetic Typographic Headline with Entity Optimization */}
          <h1
            className="hero-monumental-headline"
            aria-label="3STACK — Modern Web Development, Custom Software Solutions, Digital Marketing & Business Automation"
          >
            <span className="headline-row">
              <span className="headline-num">01</span>
              <span className="headline-scramble-word">
                BUILD.
              </span>
            </span>
            <span className="headline-row">
              <span className="headline-num">02</span>
              <span className="headline-scramble-word accent-gradient">
                GROW.
              </span>
            </span>
            <span className="headline-row">
              <span className="headline-num">03</span>
              <span className="headline-scramble-word">
                AUTOMATE.
              </span>
            </span>
            <span style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', border: 0 }}>
              3STACK — Modern Web Development, Custom Software Engineering, Digital Marketing &amp; Business Workflow Automation
            </span>
          </h1>

          <div style={{ marginTop: '0.6rem', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.12em', color: 'var(--accent)', textTransform: 'uppercase' }}>
              SOLUTIONS THAT BUILD, GROW &amp; AUTOMATE
            </span>
          </div>

          {/* Subheading / Supporting Text with Interactive Keywords */}
          <p className="hero-lead-paragraph">
            We build modern{' '}
            <button
              type="button"
              className={`interactive-keyword-btn ${activeKeyword === 'build' ? 'is-active' : ''}`}
              onMouseEnter={() => handleKeywordEnter('build')}
              onMouseLeave={handleKeywordLeave}
            >
              digital experiences
            </button>
            ,{' '}
            <button
              type="button"
              className={`interactive-keyword-btn ${activeKeyword === 'grow' ? 'is-active' : ''}`}
              onMouseEnter={() => handleKeywordEnter('grow')}
              onMouseLeave={handleKeywordLeave}
            >
              software solutions
            </button>
            {' '}and{' '}
            <button
              type="button"
              className={`interactive-keyword-btn ${activeKeyword === 'automate' ? 'is-active' : ''}`}
              onMouseEnter={() => handleKeywordEnter('automate')}
              onMouseLeave={handleKeywordLeave}
            >
              automation systems
            </button>
            {' '}that help businesses work smarter, connect better and grow digitally.
          </p>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '2rem', borderLeft: '2px solid rgba(0,199,158,0.4)', paddingLeft: '1rem' }}>
            From digital presence to business automation — we turn ideas and problems into practical technology solutions.
          </p>

          {/* Action Buttons */}
          <div className="hero-actions-group">
            <button
              type="button"
              className="btn-hero-primary"
              onClick={onOpenContact}
            >
              <span className="btn-glow-layer" />
              <span className="btn-content">
                <span>Let's Build Together</span>
                <ArrowRight size={17} className="btn-arrow-icon" />
              </span>
            </button>

            <button
              type="button"
              className="btn-hero-secondary"
              onClick={() => scrollToTarget('#services', -60)}
            >
              <span className="btn-content">
                <span>Explore Our Services</span>
                <ArrowDown size={15} className="btn-arrow-down" />
              </span>
            </button>
          </div>

          {/* Real 3STACK Focus Pillars (replaces fake enterprise metrics) */}
          <div className="hero-benchmark-grid">
            {FOCUS_PILLARS.map((m, idx) => (
              <div key={idx} className="hero-metric-card">
                <div className="metric-header">
                  <span className="metric-tag">{m.tag}</span>
                  <span className="metric-dot" />
                </div>
                <strong className="metric-number" style={{ fontSize: '1.35rem', letterSpacing: '0.04em' }}>{m.value}</strong>
                <span className="metric-desc">{m.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive 3D Holographic Core Viewport */}
        <div className="hero-visual-deck">
          <div className="hero-hologram-card" ref={visualCardRef}>
            {/* Top Interactive Mode Selector Header */}
            <div className="hologram-mode-bar">
              <div className="mode-tabs-group" role="tablist">
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeMode === 'architecture'}
                  className={`mode-tab-item ${activeMode === 'architecture' ? 'is-active' : ''}`}
                  onClick={() => setActiveMode('architecture')}
                >
                  <Layers size={13} />
                  <span>01 // BUILD</span>
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeMode === 'traffic'}
                  className={`mode-tab-item ${activeMode === 'traffic' ? 'is-active' : ''}`}
                  onClick={() => setActiveMode('traffic')}
                >
                  <Zap size={13} />
                  <span>02 // GROW</span>
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeMode === 'autonomous'}
                  className={`mode-tab-item ${activeMode === 'autonomous' ? 'is-active' : ''}`}
                  onClick={() => setActiveMode('autonomous')}
                >
                  <Workflow size={13} />
                  <span>03 // AUTOMATE</span>
                </button>
              </div>

              <div className="mode-status-badge">
                <Radio size={12} className="radar-pulse-icon" />
                <span>INTERACTIVE STACK</span>
              </div>
            </div>

            {/* Core Interactive Visual Canvas */}
            <div className="hologram-canvas-stage">
              <svg viewBox="0 0 480 520" className="hologram-core-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="heroCoreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00C79E" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="#00D9F5" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.4" />
                  </linearGradient>

                  <radialGradient id="hologramGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#00C79E" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#00D9F5" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#040C18" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Central Radiance Glow */}
                <circle cx="240" cy="260" r="160" fill="url(#hologramGlow)" />

                {/* MODE 1: ARCHITECTURE MESH */}
                {activeMode === 'architecture' && (
                  <g className="mode-layer-architecture">
                    {/* Outer Hexagonal Shield Boundary */}
                    <polygon
                      points="240,40 420,145 420,375 240,480 60,375 60,145"
                      stroke="rgba(0,199,158,0.3)"
                      strokeWidth="1.2"
                      fill="none"
                      strokeDasharray="6 3"
                    />

                    {/* Concentric Rotating Cyber Ring */}
                    <circle
                      cx="240"
                      cy="260"
                      r="180"
                      stroke="rgba(0,217,245,0.18)"
                      strokeWidth="1"
                      strokeDasharray="4 8"
                      className="svg-rotate-clockwise"
                    />
                    <circle
                      cx="240"
                      cy="260"
                      r="120"
                      stroke="rgba(255,255,255,0.12)"
                      strokeWidth="1"
                      strokeDasharray="3 3"
                      className="svg-rotate-counter"
                    />

                    {/* Interconnecting Isometric Flow Lines */}
                    <g stroke="rgba(0,199,158,0.4)" strokeWidth="1.5">
                      <line x1="240" y1="110" x2="140" y2="220" />
                      <line x1="240" y1="110" x2="340" y2="220" />
                      <line x1="140" y1="220" x2="340" y2="220" stroke="rgba(255,255,255,0.15)" strokeDasharray="3 3" />
                      <line x1="140" y1="220" x2="150" y2="340" />
                      <line x1="340" y1="220" x2="330" y2="340" />
                      <line x1="150" y1="340" x2="240" y2="420" />
                      <line x1="330" y1="340" x2="240" y2="420" />
                      <line x1="240" y1="110" x2="240" y2="420" stroke="rgba(0,217,245,0.5)" strokeDasharray="4 4" />
                    </g>

                    {/* Central Quantum Reactor Matrix */}
                    <rect
                      x="215"
                      y="235"
                      width="50"
                      height="50"
                      rx="8"
                      stroke="#00C79E"
                      strokeWidth="1.5"
                      fill="rgba(0,199,158,0.1)"
                      transform="rotate(45 240 260)"
                    />
                    <circle cx="240" cy="260" r="8" fill="#00C79E" />
                    <circle cx="240" cy="260" r="16" stroke="#00D9F5" strokeWidth="1" strokeOpacity="0.7" />
                  </g>
                )}

                {/* MODE 2: LIVE TRAFFIC FLOW */}
                {activeMode === 'traffic' && (
                  <g className="mode-layer-traffic">
                    {/* Background Oscilloscope Axis */}
                    <line x1="40" y1="260" x2="440" y2="260" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="2 4" />
                    <line x1="240" y1="60" x2="240" y2="460" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="2 4" />

                    {/* Dynamic High-Frequency Oscilloscope Waves */}
                    <path
                      d="M 40 260 Q 100 160 160 260 T 280 260 T 400 260 L 440 260"
                      stroke="#00D9F5"
                      strokeWidth="3"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <path
                      d="M 40 260 Q 120 340 200 260 T 320 260 T 440 260"
                      stroke="#00C79E"
                      strokeWidth="2.5"
                      strokeDasharray="5 3"
                      fill="none"
                    />

                    {/* Pulsing High-Speed Data Packets */}
                    <circle cx="160" cy="260" r="7" fill="#00D9F5" />
                    <circle cx="160" cy="260" r="14" stroke="#00D9F5" strokeWidth="1" strokeOpacity="0.5" />
                    <circle cx="280" cy="260" r="7" fill="#00C79E" />
                    <circle cx="340" cy="260" r="5" fill="#3B82F6" />

                    {/* Throughput Cadence Spectrum Columns */}
                    {[
                      { x: 100, h: 60 },
                      { x: 130, h: 90 },
                      { x: 160, h: 140 },
                      { x: 190, h: 80 },
                      { x: 220, h: 110 },
                      { x: 250, h: 170 },
                      { x: 280, h: 120 },
                      { x: 310, h: 70 },
                      { x: 340, h: 130 },
                      { x: 370, h: 85 },
                    ].map((col, i) => (
                      <rect
                        key={i}
                        x={col.x}
                        y={420 - col.h}
                        width="10"
                        height={col.h}
                        rx="3"
                        fill={i % 2 === 0 ? 'rgba(0,217,245,0.4)' : 'rgba(0,199,158,0.4)'}
                      />
                    ))}
                  </g>
                )}

                {/* MODE 3: AUTONOMOUS ENGINE */}
                {activeMode === 'autonomous' && (
                  <g className="mode-layer-autonomous">
                    {/* Concentric Dual Gyro Orbital Rings */}
                    <circle
                      cx="240"
                      cy="260"
                      r="170"
                      stroke="#00C79E"
                      strokeWidth="1.5"
                      strokeDasharray="12 6"
                      className="svg-rotate-clockwise"
                    />
                    <circle
                      cx="240"
                      cy="260"
                      r="130"
                      stroke="#3B82F6"
                      strokeWidth="1.5"
                      strokeDasharray="8 4"
                      className="svg-rotate-counter"
                    />
                    <circle
                      cx="240"
                      cy="260"
                      r="90"
                      stroke="#00D9F5"
                      strokeWidth="2"
                      strokeDasharray="4 2"
                      className="svg-rotate-clockwise"
                    />

                    {/* Radial Autonomous Routing Rays */}
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => {
                      const rad = (angle * Math.PI) / 180;
                      const x2 = 240 + Math.cos(rad) * 170;
                      const y2 = 260 + Math.sin(rad) * 170;
                      return (
                        <g key={idx}>
                          <line
                            x1="240"
                            y1="260"
                            x2={x2}
                            y2={y2}
                            stroke="rgba(0,199,158,0.3)"
                            strokeWidth="1"
                            strokeDasharray="3 3"
                          />
                          <circle cx={x2} cy={y2} r="4" fill="#00C79E" />
                        </g>
                      );
                    })}

                    {/* Central Autonomous Decision Nucleus */}
                    <circle cx="240" cy="260" r="28" fill="rgba(0,199,158,0.2)" stroke="#00C79E" strokeWidth="2" />
                    <circle cx="240" cy="260" r="10" fill="#00D9F5" />
                  </g>
                )}

                {/* INTERACTIVE NODES (Shared Across Modes) */}
                {NODES_DATA.map((node) => {
                  const isHovered = hoveredNode?.id === node.id;
                  return (
                    <g
                      key={node.id}
                      className={`interactive-node-pin ${isHovered ? 'is-active' : ''}`}
                      onMouseEnter={() => setHoveredNode(node)}
                      onMouseLeave={() => setHoveredNode(null)}
                      onClick={() => setHoveredNode(node)}
                      style={{ cursor: 'pointer' }}
                    >
                      {/* Node Halo Ring */}
                      <circle
                        cx={node.cx}
                        cy={node.cy}
                        r={isHovered ? 26 : 18}
                        stroke={node.color}
                        strokeWidth="1.5"
                        strokeOpacity={isHovered ? 0.9 : 0.4}
                        fill={isHovered ? 'rgba(0,199,158,0.15)' : 'rgba(4,12,24,0.7)'}
                        style={{ transition: 'all 0.3s var(--ease)' }}
                      />

                      {/* Outer Pulse Wave if active */}
                      {isHovered && (
                        <circle
                          cx={node.cx}
                          cy={node.cy}
                          r="34"
                          stroke={node.color}
                          strokeWidth="1"
                          strokeOpacity="0.6"
                          strokeDasharray="3 2"
                        />
                      )}

                      {/* Node Center Dot */}
                      <circle cx={node.cx} cy={node.cy} r={isHovered ? 7 : 5} fill={node.color} />

                      {/* Node Label Text */}
                      <text
                        x={node.cx}
                        y={node.cy + (node.cy > 260 ? 32 : -22)}
                        textAnchor="middle"
                        fill={isHovered ? '#FFFFFF' : '#94A3B8'}
                        fontSize="10"
                        fontFamily="monospace"
                        fontWeight={isHovered ? '700' : '500'}
                        letterSpacing="0.08em"
                      >
                        {node.name}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Floating Dynamic Tooltip When Node is Hovered */}
              {hoveredNode && (
                <div
                  className="node-floating-tooltip"
                  style={{
                    left: `${(hoveredNode.cx / 480) * 100}%`,
                    top: `${(hoveredNode.cy / 520) * 100}%`,
                  }}
                >
                  <div className="tooltip-header">
                    <span className="tooltip-title">{hoveredNode.name}</span>
                    <span className="tooltip-status-badge">{hoveredNode.status}</span>
                  </div>
                  <p className="tooltip-type">{hoveredNode.type}</p>
                  <div className="tooltip-metrics">
                    <div>
                      <span>LATENCY:</span>
                      <strong>{hoveredNode.latency}</strong>
                    </div>
                    <div>
                      <span>CURRENT LOAD:</span>
                      <strong>{hoveredNode.load}</strong>
                    </div>
                  </div>
                </div>
              )}

              {/* Top-Left Telemetry HUD Widget */}
              <div className="hud-floating-pill hud-pill-top">
                <span className="hud-dot-active" />
                <span className="hud-mono">3STACK ECOSYSTEM</span>
                <span className="hud-sep">•</span>
                <span className="hud-val">PURPOSE-DRIVEN</span>
              </div>

              {/* Bottom-Right Status HUD Card */}
              <div className="hud-floating-card hud-card-bottom">
                <div className="hud-card-row">
                  <span className="hud-label">METHODOLOGY</span>
                  <span className="hud-badge-green">ACTIVE</span>
                </div>
                <div className="hud-card-row">
                  <span className="hud-label">APPROACH</span>
                  <strong className="hud-strong">BUILD • GROW • AUTOMATE</strong>
                </div>
                <div className="hud-card-progress">
                  <div className="hud-progress-fill" style={{ width: '100%' }} />
                </div>
              </div>
            </div>

            {/* Bottom Quick-Action Interactive Ribbon */}
            <div className="hologram-footer-ribbon">
              <div className="ribbon-item">
                <Shield size={12} color="#00C79E" />
                <span>PERFORMANCE DRIVEN</span>
              </div>
              <div className="ribbon-item">
                <Activity size={12} color="#00D9F5" />
                <span>CLIENT FOCUSED</span>
              </div>
              <div className="ribbon-item">
                <Terminal size={12} color="#3B82F6" />
                <span>SAVE TIME. AUTOMATE.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
