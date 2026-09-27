import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import './Footer.css';

const FacebookIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.64l.36-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const WhatsAppIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-col brand-col">
            <Link to="/" className="footer-logo">
              <img 
                src="/3stack-logo.webp" 
                alt="3Stack Logo" 
                width={107}
                height={80}
                loading="lazy"
                style={{ height: '80px', width: 'auto', aspectRatio: '1022 / 768', objectFit: 'contain' }} 
              />
            </Link>
            <p className="footer-description">
              Elevating brands through cutting-edge web development, digital marketing, and intelligent business automation.
            </p>
            <div className="social-links">
              <a href="https://www.facebook.com/share/1FFHZrXkja/" target="_blank" rel="noreferrer" className="social-link" aria-label="Facebook"><FacebookIcon size={20} /></a>
              <a href="https://wa.me/918306099337" target="_blank" rel="noreferrer" className="social-link" aria-label="WhatsApp"><WhatsAppIcon size={20} /></a>
              <a href="https://instagram.com/3stacktech" target="_blank" rel="noreferrer" className="social-link" aria-label="Instagram"><InstagramIcon size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/portfolio">Our Work</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><Link to="/services/web-development">Web Development</Link></li>
              <li><Link to="/services/app-development">App Development</Link></li>
              <li><Link to="/services/digital-marketing">Digital Marketing</Link></li>
              <li><Link to="/services/business-automation">Business Automation</Link></li>
              <li><Link to="/services/web-design">UI/UX Web Design</Link></li>
              <li><Link to="/services/autocad">AutoCAD Drafting</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 className="footer-heading">Contact Us</h4>
            <address style={{ fontStyle: 'normal' }}>
              <ul className="footer-contact">
                <li>
                  <Mail size={16} className="contact-icon" />
                  <a href="mailto:3stacktech@gmail.com">3stacktech@gmail.com</a>
                </li>
                <li>
                  <Phone size={16} className="contact-icon" />
                  <a href="tel:+918306099337">+91 8306099337</a>
                </li>
                <li>
                  <MapPin size={16} className="contact-icon" />
                  <span>Jaipur, Rajasthan, 302012</span>
                </li>
              </ul>
            </address>
          </div>
        </div>

        {/* Semantic AEO Entity Summary for Search & AI Answer Engines */}
        <section className="footer-aeo-summary" aria-label="About 3Stack">
          <div className="footer-aeo-grid">
            <article className="footer-aeo-card">
              <h3 className="footer-aeo-title">What is 3Stack?</h3>
              <p className="footer-aeo-text">
                <strong>3Stack</strong> (also known as <em>3 Stack</em>) is a premier full-service software engineering and digital marketing agency based in Jaipur, India. We engineer custom web applications, cross-platform mobile apps, and AI-driven growth systems for businesses globally.
              </p>
            </article>

            <article className="footer-aeo-card">
              <h3 className="footer-aeo-title">What services does 3Stack provide?</h3>
              <ul className="footer-aeo-list">
                <li><strong>Custom Web Development:</strong> High-performance web applications using React, TypeScript, and Node.js.</li>
                <li><strong>Mobile App Development:</strong> Native and cross-platform apps for iOS &amp; Android.</li>
                <li><strong>AI-Driven Digital Marketing:</strong> Organic SEO, PPC search ads, and conversion optimization.</li>
                <li><strong>Business Automation:</strong> Intelligent workflow automation, CRM integrations, and custom APIs.</li>
                <li><strong>UI/UX Design:</strong> High-conversion user interfaces, design systems, and prototypes.</li>
                <li><strong>AutoCAD Drafting:</strong> Technical 2D drafting and 3D architectural modeling.</li>
              </ul>
            </article>
          </div>
        </section>

        <div className="footer-bottom">
          <p>&copy; {currentYear} 3Stack. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
