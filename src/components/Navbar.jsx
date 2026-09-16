import React, { useState, useEffect, useRef } from 'react';
import { scrollToTarget } from '../hooks/useLenis';
import { useRouter } from '../router';
import { ArrowUpRight, Radio, Clock, Sparkles } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'hero', label: 'Home', href: '#hero', index: '01' },
  { id: 'services', label: 'Services', href: '#services', index: '02' },
  { id: 'why', label: 'Solutions', href: '#why', index: '03' },
  { id: 'work', label: 'Work', href: '#work', index: '04' },
  { id: 'capabilities', label: 'About', href: '#capabilities', index: '05' },
  { id: 'faq', label: 'FAQ', href: '#faq', index: '06' },
  { id: 'contact', label: 'Contact', href: '#contact', index: '07' },
];

export function Navbar({ onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [hoveredSection, setHoveredSection] = useState(null);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const [currentTime, setCurrentTime] = useState('');

  const linksTrackRef = useRef(null);
  const itemRefs = useRef({});

  // Digital clock for mobile HUD overlay
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      setCurrentTime(timeStr);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Scroll detection & section spy
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll-Spy detection for active section
      const scrollPos = window.scrollY + 200;
      let current = '';

      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            current = item.id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update sliding pill position based on hovered or active item
  useEffect(() => {
    const targetId = hoveredSection || activeSection;
    if (targetId && itemRefs.current[targetId] && linksTrackRef.current) {
      const trackRect = linksTrackRef.current.getBoundingClientRect();
      const itemRect = itemRefs.current[targetId].getBoundingClientRect();

      setPillStyle({
        left: itemRect.left - trackRect.left,
        width: itemRect.width,
        opacity: 1,
      });
    } else {
      setPillStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [hoveredSection, activeSection]);

  const { path, navigate } = useRouter();

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    if (isMobileOpen) {
      setIsMobileOpen(false);
      document.body.style.overflow = '';
    }

    if (targetId === '#contact') {
      onOpenContact();
      return;
    }

    if (path !== '/') {
      navigate('/' + targetId);
    } else {
      if (targetId === '#hero') {
        scrollToTarget(0);
      } else {
        scrollToTarget(targetId, -80);
      }
    }
  };

  const toggleMobileMenu = () => {
    const nextState = !isMobileOpen;
    setIsMobileOpen(nextState);
    document.body.style.overflow = nextState ? 'hidden' : '';
  };

  return (
    <>
      {/* Floating Aerospace HUD Capsule Header */}
      <header className={`nav-wrapper ${isScrolled ? 'is-scrolled' : ''}`} id="nav">
        <nav className="nav-capsule" aria-label="Main Navigation">
          {/* Brand Logo */}
          <div className="nav-brand-group">
            <a
              href="/"
              className="nav-logo-link"
              aria-label="3STACK home"
              onClick={(e) => {
                e.preventDefault();
                if (path !== '/') {
                  navigate('/');
                } else {
                  scrollToTarget(0);
                }
              }}
            >
              <picture>
                <source srcSet="/images/3stack-logo.webp" type="image/webp" />
                <img
                  src="/images/3stack-logo.png"
                  alt="3STACK — Build, Grow, Automate"
                  className="nav-logo-img"
                  width="42"
                  height="48"
                />
              </picture>

              {/* High-tech audio equalizer micro bars */}
              <div className="nav-eq-bars" aria-hidden="true">
                <span className="nav-eq-bar"></span>
                <span className="nav-eq-bar"></span>
                <span className="nav-eq-bar"></span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links with Fluid Magnetic Sliding Pill */}
          <div
            className="nav-links-track"
            ref={linksTrackRef}
            onMouseLeave={() => setHoveredSection(null)}
          >
            {/* Sliding background pill indicator */}
            <div
              className="nav-sliding-pill"
              style={{
                left: `${pillStyle.left}px`,
                width: `${pillStyle.width}px`,
                opacity: pillStyle.opacity,
              }}
              aria-hidden="true"
            />

            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  ref={(el) => (itemRefs.current[item.id] = el)}
                  className={`nav-link-item ${isActive ? 'is-active' : ''}`}
                  onMouseEnter={() => setHoveredSection(item.id)}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  <span className="nav-link-dot" aria-hidden="true" />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* Actions: Live Radar Status Pill & Shimmer Magnetic CTA */}
          <div className="nav-actions-group">
            {/* Live Radar Status Pill: Click to start inquiry */}
            <button
              type="button"
              className="nav-radar-pill"
              onClick={() => onOpenContact()}
              title="Click to initiate project collaboration"
            >
              <div className="nav-radar-beacon" aria-hidden="true">
                <span className="nav-radar-ping"></span>
                <span className="nav-radar-dot"></span>
              </div>
              <span>TAKING PROJECTS</span>
            </button>

            {/* Shimmer Beam Button */}
            <button
              type="button"
              className="nav-shimmer-cta"
              onClick={() => onOpenContact()}
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={15} />
              <span className="nav-shimmer-light" aria-hidden="true" />
            </button>

            {/* Cybernetic Mobile Burger Button */}
            <button
              type="button"
              className={`nav-cyber-burger ${isMobileOpen ? 'is-open' : ''}`}
              id="burger"
              aria-label="Toggle menu"
              aria-expanded={isMobileOpen}
              onClick={toggleMobileMenu}
            >
              <div className="nav-burger-lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Fullscreen Cinematic Mobile Command Center */}
      <div
        className={`mobile-hud-overlay ${isMobileOpen ? 'is-open' : ''}`}
        id="mobileMenu"
        aria-hidden={!isMobileOpen}
      >
        <div className="mobile-hud-grid" aria-hidden="true" />

        <div className="mobile-hud-links">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="mobile-hud-item"
              onClick={(e) => handleNavClick(e, item.href)}
            >
              <span className="mobile-hud-name">
                {item.label}
              </span>
              <span className="mobile-hud-index">{item.index}</span>
            </a>
          ))}
        </div>

        <div className="mobile-hud-footer">
          <div className="mobile-hud-clock">
            <Clock size={14} color="var(--accent)" />
            <span>SYS_TIME: {currentTime || 'ONLINE'}</span>
          </div>

          <div className="mobile-hud-contact-card">
            <div style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '12px', letterSpacing: '0.04em' }}>
              DIRECT TRANSMISSION
            </div>
            <div>
              Email:{' '}
              <a href="mailto:3stacktech@gmail.com">
                3stacktech@gmail.com
              </a>
            </div>
            <div>
              Instagram:{' '}
              <a href="https://www.instagram.com/3stacktech" target="_blank" rel="noopener noreferrer">
                @3stacktech
              </a>
            </div>
          </div>

          <button
            type="button"
            className="nav-shimmer-cta"
            style={{ width: '100%', justifyContent: 'center', padding: '14px' }}
            onClick={() => {
              setIsMobileOpen(false);
              document.body.style.overflow = '';
              onOpenContact();
            }}
          >
            <span>Let's Talk</span>
            <Sparkles size={16} />
            <span className="nav-shimmer-light" aria-hidden="true" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
