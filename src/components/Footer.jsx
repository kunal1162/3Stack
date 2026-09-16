import React from 'react';
import { scrollToTarget } from '../hooks/useLenis';
import { useRouter, Link } from '../router';

const SERVICES_FOOTER_NAV = [
  { label: 'Web Design & Development', route: '/services/web-design-development' },
  { label: 'Digital Marketing & SEO', route: '/services/digital-marketing-seo' },
  { label: 'Business Automation', route: '/services/business-automation' },
  { label: 'Custom Software Development', route: '/services/software-development' },
  { label: 'AutoCAD 2D Designs', route: '/services/autocad-designs' },
  { label: 'Cloud Solutions & Hosting', route: '/services/cloud-solutions' },
];

export function Footer({ onOpenContact }) {
  const { path, navigate } = useRouter();

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
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

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a
              href="/"
              className="footer-logo-link"
              aria-label="3STACK homepage"
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
                  className="footer-logo-img"
                  width="48"
                  height="55"
                />
              </picture>
            </a>
            <p className="footer-desc">
              Technology and digital solutions built around real business needs. Clean engineering, digital growth, and workflow automation.
            </p>
          </div>

          <div className="footer-cols">
            <div className="footer-col">
              <h5>NAVIGATION</h5>
              <ul>
                <li>
                  <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" onClick={(e) => handleNavClick(e, '#services')}>
                    Services
                  </a>
                </li>
                <li>
                  <a href="#why" onClick={(e) => handleNavClick(e, '#why')}>
                    Solutions
                  </a>
                </li>
                <li>
                  <a href="#work" onClick={(e) => handleNavClick(e, '#work')}>
                    Work
                  </a>
                </li>
                <li>
                  <a href="#capabilities" onClick={(e) => handleNavClick(e, '#capabilities')}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#faq" onClick={(e) => handleNavClick(e, '#faq')}>
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h5>SERVICES</h5>
              <ul>
                {SERVICES_FOOTER_NAV.map((srv, idx) => (
                  <li key={idx}>
                    <Link href={srv.route}>
                      {srv.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h5>CONNECT</h5>
              <ul>
                <li>
                  <a href="mailto:3stacktech@gmail.com" aria-label="Email 3STACK">
                    3stacktech@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/3stacktech"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="3STACK Instagram profile"
                  >
                    Instagram: @3stacktech
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 3STACK Technologies. All rights reserved.</span>
          <div className="footer-social">
            <span>Follow</span>
            <a
              href="https://www.instagram.com/3stacktech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="3STACK Instagram profile"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
