import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '../hooks/useReducedMotion';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Layers,
  Globe,
  Database,
  Workflow,
  Cloud,
  CheckCircle2,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const WORK_PROJECTS = [
  {
    id: 'muscle-factory',
    num: '01',
    title: 'THE MUSCLE FACTORY',
    category: 'PROJECT / WEBSITE',
    tag: 'GYM / FITNESS WEBSITE',
    statusBadge: 'LIVE PROJECT',
    rating: '5.0',
    imageSrc: '/images/project-muscle-factory.webp',
    fallbackImageSrc: '/images/project-muscle-factory.jpg',
    imageAlt: 'The Muscle Factory - Modern Gym & Fitness Website Digital Experience',
    description:
      'A modern, dark-themed, high-energy gym website designed to showcase facilities, membership plans, training programs and create a strong digital presence for a fitness brand.',
    deliverables: [
      'High-impact visual design & dynamic typography',
      'Responsive layout optimized across all devices',
      'Clear membership plans & pricing structure',
      'Facility & trainer showcases with quick inquiry flow',
    ],
    techStack: ['React', 'GSAP Animation', 'Tailwind CSS', 'UI/UX Design', 'Performance Tuning'],
    ctaText: 'VIEW PROJECT',
    accentColor: '#00C79E',
  },
  {
    id: 'cafe-mgmt',
    num: '02',
    title: 'CAFE MANAGEMENT SYSTEM',
    category: 'CURRENTLY IN DEVELOPMENT',
    tag: 'BUSINESS MANAGEMENT SOFTWARE',
    statusBadge: 'IN DEVELOPMENT',
    rating: '5.0',
    imageSrc: '/images/project-cafe-mgmt.webp',
    fallbackImageSrc: '/images/project-cafe-mgmt.jpg',
    imageAlt: 'Cafe & Restaurant Management POS System Interface (In Development)',
    description:
      'A tailored software system designed to simplify day-to-day cafe and restaurant operations, streamline billing, manage orders and track inventory.',
    deliverables: [
      'Order management & streamlined POS billing',
      'Menu and item categorization with pricing tiers',
      'Daily sales and revenue tracking dashboards',
      'Simple inventory tracking and staff/table management',
    ],
    techStack: ['Custom Software', 'Order Management', 'POS Billing', 'Inventory Tracking', 'Admin Dashboard'],
    ctaText: 'EXPLORE SCOPE',
    accentColor: '#00D9F5',
  },
  {
    id: 'gym-mgmt',
    num: '03',
    title: 'GYM MANAGEMENT SYSTEM',
    category: 'CURRENTLY IN DEVELOPMENT',
    tag: 'BUSINESS MANAGEMENT SOFTWARE',
    statusBadge: 'IN DEVELOPMENT',
    rating: '5.0',
    imageSrc: '/images/project-gym-mgmt.webp',
    fallbackImageSrc: '/images/project-gym-mgmt.jpg',
    imageAlt: 'Gym Management & Member Administration Platform (In Development)',
    description:
      'A complete gym administration platform to manage member registrations, subscription renewals, attendance tracking and trainer assignments efficiently.',
    deliverables: [
      'Member registration & comprehensive profile management',
      'Subscription plans & renewal reminder system',
      'Attendance & check-in activity records',
      'Payment history, billing receipts & batch scheduling',
    ],
    techStack: ['Business Management', 'Member Administration', 'Renewal Reminders', 'Attendance Records', 'Scheduling'],
    ctaText: 'EXPLORE SCOPE',
    accentColor: '#3B82F6',
  },
];

export function Work({ onSelectProject }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const sectionRef = useRef(null);
  const contentDeckRef = useRef(null);
  const trackRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const total = WORK_PROJECTS.length;
  const activeProject = WORK_PROJECTS[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 40) {
      handleNext();
    } else if (diff < -40) {
      handlePrev();
    }
  };

  // Keyboard left/right arrow navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="work-side-scroll-section" id="work" ref={sectionRef}>
      {/* Dynamic Ambient Backdrop */}
      <div
        className="work-backdrop-glow"
        style={{
          background: `radial-gradient(circle at 65% 50%, ${activeProject.accentColor}18 0%, transparent 65%)`,
        }}
        aria-hidden="true"
      />

      <div className="container work-stage-container">
        {/* Section Top HUD Tag */}
        <div className="work-top-hud">
          <div>
            <div className="hud-badge">
              <Sparkles size={13} color="var(--accent)" />
              <span className="hud-label">// OUR WORK</span>
              <span className="hud-sep">/</span>
              <span className="hud-desc">PROJECTS WE'RE BUILDING</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.85rem, 3.2vw, 2.6rem)', fontWeight: 800, color: '#FFFFFF', marginTop: '10px', marginBottom: '8px' }}>
              PROJECTS WE'RE BUILDING
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', maxWidth: '640px', lineHeight: 1.6, margin: 0 }}>
              We are currently building our portfolio through real-world projects and practical digital solutions. Here are some of the projects we have worked on or are currently developing.
            </p>
          </div>

          <div className="work-slider-counter">
            <span className="counter-current">0{activeIndex + 1}</span>
            <span className="counter-sep">/</span>
            <span className="counter-total">0{total}</span>
          </div>
        </div>

        {/* Main Side-Scroll Showcase Arena */}
        <div
          className="work-carousel-arena"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Vertical Step Indicator Rail (Far Left - matching reference image) */}
          <div className="work-vertical-rail" aria-hidden="true">
            {WORK_PROJECTS.map((p, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={p.id}
                  type="button"
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`rail-step-dot ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActiveIndex(idx)}
                >
                  <span className="rail-dot-inner" />
                  {isActive && <span className="rail-active-ring" />}
                </button>
              );
            })}
          </div>

          {/* Left Column: Active Project Details Deck */}
          <div className="work-active-deck" ref={contentDeckRef}>
            <div className="deck-tag-row">
              <span className="deck-category">{activeProject.category}</span>
              <span
                className="deck-tag-badge"
                style={{
                  background: activeProject.statusBadge === 'IN DEVELOPMENT' ? 'rgba(0, 217, 245, 0.12)' : 'rgba(0, 199, 158, 0.12)',
                  color: activeProject.statusBadge === 'IN DEVELOPMENT' ? '#00D9F5' : 'var(--accent)',
                  borderColor: activeProject.statusBadge === 'IN DEVELOPMENT' ? 'rgba(0, 217, 245, 0.3)' : 'rgba(0, 199, 158, 0.3)',
                }}
              >
                {activeProject.statusBadge}
              </span>
            </div>

            <h2 className="deck-title">
              {activeProject.title}
            </h2>

            <p className="deck-description">
              {activeProject.description}
            </p>

            {/* Key Deliverables / Highlights */}
            <div className="deck-deliverables deck-animate-target" style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '18px' }}>
              {activeProject.deliverables.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: 'rgba(255, 255, 255, 0.82)' }}>
                  <CheckCircle2 size={13} color="var(--accent)" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Quick Metrics & Tech Stack */}
            <div className="deck-tech-row deck-animate-target">
              {activeProject.techStack.map((tech, tIdx) => (
                <span key={tIdx} className="deck-tech-pill">
                  {tech}
                </span>
              ))}
            </div>

            {/* Glassmorphism Explore Button */}
            <div className="deck-action-row deck-animate-target">
              <button
                type="button"
                className="btn-explore-glass"
                onClick={() => onSelectProject && onSelectProject(activeProject)}
              >
                <span className="btn-glass-text">{activeProject.ctaText}</span>
                <span className="btn-arrow-circle">
                  <ArrowRight size={15} />
                </span>
              </button>
            </div>
          </div>

          {/* Right Column: Horizontal Floating Project Cards (Side Scroll Track) */}
          <div className="work-cards-track-container">
            <div
              className="work-floating-track"
              ref={trackRef}
              style={{
                transform: `translateX(calc(-${activeIndex * 320}px + 0px))`,
              }}
            >
              {WORK_PROJECTS.map((project, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <div
                    key={project.id}
                    className={`work-floating-card ${isActive ? 'is-spotlight' : ''}`}
                    onClick={() => setActiveIndex(idx)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setActiveIndex(idx);
                      }
                    }}
                  >
                    {/* Floating Card Top Metadata (Title + 5 Dots matching reference) */}
                    <div className="card-top-meta">
                      <div className="card-meta-text">
                        <span className="card-mini-title">{project.title}</span>
                        <div className="card-dots-rating" aria-hidden="true">
                          <span className="rating-dot fill" />
                          <span className="rating-dot fill" />
                          <span className="rating-dot fill" />
                          <span className="rating-dot fill" />
                          <span className="rating-dot fill" />
                        </div>
                      </div>
                      <span className="card-index-pill">{project.num}</span>
                    </div>

                    {/* Card Visual Graphic Canvas */}
                    <div className="card-visual-frame">
                      {project.imageSrc ? (
                        <img
                          src={project.imageSrc}
                          alt={project.imageAlt || project.title}
                          className="card-project-img"
                          width="310"
                          height="220"
                          loading="lazy"
                        />
                      ) : (
                        project.visual
                      )}
                      {/* Interactive Hover Vignette & Overlay */}
                      <div className="card-vignette-overlay" />
                    </div>

                    {/* Card Footer Tag & Quick Click CTA */}
                    <div className="card-bottom-footer">
                      <span className="card-footer-category">{project.tag}</span>
                      <button
                        type="button"
                        className="card-quick-view-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectProject && onSelectProject(project);
                        }}
                        aria-label="View Project Details"
                      >
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Horizontal Progress Bar & Slider Controls (Matching Reference Image) */}
        <div className="work-bottom-bar">
          <div className="bottom-progress-slider">
            <span className="slider-num-start">01</span>
            <div className="slider-track-rail">
              <div
                className="slider-track-fill"
                style={{
                  width: `${((activeIndex + 1) / total) * 100}%`,
                }}
              />
            </div>
            <span className="slider-num-end">0{total}</span>
          </div>

          {/* Previous / Next Arrow Controls */}
          <div className="slider-arrows-group">
            <button
              type="button"
              className="slider-nav-btn"
              onClick={handlePrev}
              aria-label="Previous project"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              className="slider-nav-btn"
              onClick={handleNext}
              aria-label="Next project"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Additional Note: More Projects On The Way */}
        <div className="work-upcoming-banner" style={{
          marginTop: '48px',
          padding: '28px 24px',
          background: 'rgba(10, 20, 36, 0.6)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          position: 'relative',
          overflow: 'hidden',
          backdropFilter: 'blur(10px)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', fontFamily: 'monospace' }}>
            <Sparkles size={13} />
            <span>CONTINUOUS DEVELOPMENT</span>
          </div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', margin: 0 }}>
            MORE PROJECTS ARE ON THE WAY.
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0, maxWidth: '780px' }}>
            We are continuously working on new ideas, business solutions and digital products. If you have a project or software requirement, we'd love to build it with you.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Work;
