import React, { useEffect, useState } from 'react';
import { useRouter, Link } from '../router';
import { SERVICES_MAP } from '../data/servicesData';
import { JsonLd, getBreadcrumbSchema, getServiceSchema, getFaqPageSchema } from '../components/JsonLd';
import Button from '../components/Button';
import {
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  HelpCircle,
  ChevronDown,
  Layers,
  ShieldCheck,
  Workflow,
  ArrowLeft,
} from 'lucide-react';

export function ServicePage({ slug, onOpenContact }) {
  const { navigate } = useRouter();
  const service = SERVICES_MAP[slug];
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  useEffect(() => {
    if (service) {
      document.title = service.metaTitle;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', service.metaDescription);
      }
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute('href', service.canonicalUrl);
      }
    }
  }, [service]);

  if (!service) {
    return (
      <div className="container" style={{ padding: '160px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '36px', marginBottom: '16px' }}>Service Not Found</h1>
        <p style={{ color: 'var(--muted)', marginBottom: '32px' }}>
          The requested service page does not exist or has been relocated.
        </p>
        <Button variant="primary" onClick={() => navigate('/')}>
          Return to Homepage
        </Button>
      </div>
    );
  }

  const breadcrumbs = [
    { name: 'Home', url: 'https://3stack.tech/' },
    { name: 'Services', url: 'https://3stack.tech/#services' },
    { name: service.shortTitle || service.title, url: service.canonicalUrl },
  ];

  const relatedServices = (service.relatedSlugs || [])
    .map((s) => SERVICES_MAP[s])
    .filter(Boolean);

  return (
    <div className="service-page-wrapper">
      {/* Dynamic JSON-LD Structured Data */}
      <JsonLd schema={getBreadcrumbSchema(breadcrumbs)} />
      <JsonLd schema={getServiceSchema(service)} />
      {service.faqs && service.faqs.length > 0 && (
        <JsonLd schema={getFaqPageSchema(service.faqs)} />
      )}

      {/* Cybernetic Background Glows */}
      <div
        className="service-hero-glow"
        style={{
          background: `radial-gradient(circle at 50% 20%, ${service.accentColor}15 0%, transparent 60%)`,
        }}
        aria-hidden="true"
      />

      <div className="container service-page-container">
        {/* Breadcrumbs Navigation */}
        <nav aria-label="Breadcrumbs" className="service-breadcrumbs">
          <Link href="/" className="breadcrumb-link">
            Home
          </Link>
          <ChevronRight size={14} className="breadcrumb-sep" />
          <Link href="/#services" className="breadcrumb-link">
            Services
          </Link>
          <ChevronRight size={14} className="breadcrumb-sep" />
          <span className="breadcrumb-current" aria-current="page">
            {service.shortTitle || service.title}
          </span>
        </nav>

        {/* Hero Section */}
        <header className="service-hero-head">
          <div className="about-hud-tag">
            <span className="hud-indicator-dot" style={{ backgroundColor: service.accentColor }} />
            <span className="hud-mono-label">// 3STACK SERVICE SPECIFICATION</span>
            <span className="hud-divider">/</span>
            <span className="hud-mono-desc">{service.tag}</span>
          </div>

          <h1 className="service-headline">
            {service.title}
          </h1>

          <p className="service-lead-summary">
            {service.summary}
          </p>

          <div className="service-hero-actions">
            <Button
              variant="primary"
              magnetic
              onClick={() => onOpenContact(service.shortTitle)}
            >
              Start Project Inquiry
            </Button>
            <Button
              variant="ghost-dark"
              magnetic
              onClick={() => {
                const el = document.getElementById('deliverables');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Deliverables
            </Button>
          </div>
        </header>

        {/* Hero Visual Mockup Card */}
        <div className="service-visual-hero-card">
          <div className="service-visual-badge-top">
            <span className="service-badge-pill">
              <Sparkles size={13} color="var(--accent)" />
              <span>{service.benchmark}</span>
            </span>
            <span className="service-hud-tag">{service.tag}</span>
          </div>

          <div className="service-hero-img-wrap">
            <picture>
              <source srcSet={service.imageSrc} type="image/webp" />
              <img
                src={service.fallbackImageSrc || service.imageSrc}
                alt={service.imageAlt}
                className="service-hero-img"
                width="1200"
                height="675"
                fetchPriority="high"
              />
            </picture>
            <div className="service-hero-overlay" />
          </div>
        </div>

        {/* The Friction & The Solution Grid */}
        <section className="service-problem-solution-section">
          <div className="problem-solution-grid">
            <div className="problem-card">
              <div className="section-mini-badge badge-friction">
                <span>THE CHALLENGE</span>
              </div>
              <h2 className="card-heading">The Friction Businesses Face</h2>
              <p className="card-body-text">{service.problemSolved}</p>
            </div>

            <div className="solution-card">
              <div className="section-mini-badge badge-solution">
                <span>OUR APPROACH</span>
              </div>
              <h2 className="card-heading">The 3STACK Solution</h2>
              <p className="card-body-text">{service.summary}</p>
              <div className="card-accent-strip" style={{ backgroundColor: service.accentColor }} />
            </div>
          </div>
        </section>

        {/* Who This Is For Section */}
        <section className="service-audience-section">
          <div className="section-kicker">
            <span className="kicker-dot" />
            <span>WHO IS IT FOR?</span>
          </div>
          <h2 className="service-section-title">Built for Real Business Needs</h2>

          <div className="audience-grid">
            {service.whoIsItFor.map((item, idx) => (
              <div key={idx} className="audience-card">
                <div className="audience-num">{String(idx + 1).padStart(2, '0')}</div>
                <p className="audience-text">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Deliverables & What's Included */}
        <section className="service-deliverables-section" id="deliverables">
          <div className="section-kicker">
            <span className="kicker-dot" />
            <span>WHAT IS INCLUDED</span>
          </div>
          <h2 className="service-section-title">Core Deliverables &amp; Specifications</h2>

          <div className="deliverables-grid">
            {service.deliverables.map((item, idx) => (
              <div key={idx} className="deliverable-card">
                <div className="deliverable-icon-box">
                  <CheckCircle2 size={18} color="var(--accent)" />
                </div>
                <h3 className="deliverable-title">{item}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Capabilities Badges */}
        <section className="service-tech-section">
          <div className="section-kicker">
            <span className="kicker-dot" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="service-section-title">Engineering Standards &amp; Tools</h2>

          <div className="tech-pills-wrap">
            {service.capabilities.map((cap, idx) => (
              <span key={idx} className="service-tech-badge">
                <span className="badge-bullet" style={{ backgroundColor: service.accentColor }} />
                <span>{cap}</span>
              </span>
            ))}
          </div>
        </section>

        {/* 5-Step Delivery Process */}
        <section className="service-process-section">
          <div className="section-kicker">
            <span className="kicker-dot" />
            <span>METHODOLOGY</span>
          </div>
          <h2 className="service-section-title">Our 5-Step Delivery Process</h2>

          <div className="process-steps-grid">
            {service.processSteps.map((pStep, idx) => (
              <div key={idx} className="process-step-item">
                <div className="process-step-header">
                  <span className="process-step-num">{pStep.step}</span>
                  <div className="process-step-line" />
                </div>
                <h3 className="process-step-title">{pStep.title}</h3>
                <p className="process-step-desc">{pStep.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Service Specific FAQs */}
        {service.faqs && service.faqs.length > 0 && (
          <section className="service-faqs-section">
            <div className="section-kicker">
              <span className="kicker-dot" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="service-section-title">Common Questions About This Service</h2>

            <div className="faq-list-grid">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={idx} className={`faq-item-card ${isOpen ? 'is-open' : ''}`}>
                    <button
                      type="button"
                      className="faq-question-btn"
                      onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                      aria-expanded={isOpen}
                    >
                      <div className="faq-question-title-group">
                        <span className="faq-question-num">{String(idx + 1).padStart(2, '0')}</span>
                        <h3 className="faq-question-text">{faq.question}</h3>
                      </div>
                      <span className="faq-chevron-icon" aria-hidden="true">
                        <ChevronDown size={18} />
                      </span>
                    </button>
                    <div
                      className="faq-answer-collapse"
                      style={{
                        maxHeight: isOpen ? '300px' : '0px',
                        opacity: isOpen ? 1 : 0,
                      }}
                    >
                      <div className="faq-answer-inner">
                        <p className="faq-answer-detail">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Related Services Internal Links */}
        {relatedServices.length > 0 && (
          <section className="service-related-section">
            <div className="section-kicker">
              <span className="kicker-dot" />
              <span>RELATED SERVICES</span>
            </div>
            <h2 className="service-section-title">Explore Connected Solutions</h2>

            <div className="related-services-grid">
              {relatedServices.map((rel) => (
                <Link
                  key={rel.slug}
                  href={rel.route}
                  className="related-service-card"
                >
                  <div className="related-card-top">
                    <span className="related-service-tag">{rel.tag}</span>
                    <ArrowRight size={16} className="related-arrow" />
                  </div>
                  <h3 className="related-service-title">{rel.title}</h3>
                  <p className="related-service-desc">{rel.summary}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Bottom Consultation CTA */}
        <section className="service-bottom-cta">
          <div className="cta-glow" aria-hidden="true" />
          <div className="service-cta-inner">
            <span className="service-badge-pill" style={{ margin: '0 auto 16px' }}>
              <Sparkles size={13} color="var(--accent)" />
              <span>DIRECT INQUIRY</span>
            </span>
            <h2 className="service-cta-title">
              Ready to Discuss Your {service.shortTitle || service.title} Project?
            </h2>
            <p className="service-cta-desc">
              Get in touch with 3STACK to discuss technical requirements, timelines, and pragmatic implementation.
            </p>
            <div className="service-cta-btns">
              <Button
                variant="primary"
                magnetic
                onClick={() => onOpenContact(service.shortTitle)}
              >
                Request a Consultation
              </Button>
              <Button
                variant="ghost-dark"
                magnetic
                onClick={() => navigate('/#services')}
              >
                View All Services
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ServicePage;
