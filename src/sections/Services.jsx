import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { useRouter, Link } from '../router';
import {
  Layout,
  TrendingUp,
  Workflow,
  Layers,
  Code2,
  Cloud,
  ArrowRight,
  Sparkles,
  Check,
  Zap,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const SERVICES_EDITORIAL_DATA = [
  {
    id: 'app-web',
    slug: 'web-design-development',
    route: '/services/web-design-development',
    num: '01',
    isReversed: false,
    tag: 'UI/UX & Web Solutions',
    hudIndex: '01 // APP & WEB DESIGN',
    benchmark: 'Responsive & Fast',
    title: 'App & Web Designing',
    imageSrc: '/images/service-web-design.webp',
    fallbackImageSrc: '/images/service-web-design.jpg',
    imageAlt: 'Modern Responsive Web and Mobile App UI Design Interface',
    badge1: 'RESPONSIVE & FAST',
    badge2: 'MODERN UI/UX',
    description:
      'Modern, responsive and user-focused websites and applications designed to represent your business effectively.',
    detailedDescription:
      'From clean business landing pages to multi-page websites and web applications, we design digital experiences that look modern, load fast and work seamlessly across mobile, tablet and desktop devices.',
    deliverables: [
      'UI/UX Design & Responsive Layouts',
      'Landing Pages, Portfolios & Web Apps',
      'Performance & Usability Optimization',
    ],
    techStack: [
      'UI/UX Design',
      'Responsive Web Design',
      'Mobile-First Interfaces',
      'Landing Pages & Portfolios',
      'Web Application Interfaces',
      'Usability Optimization',
    ],
    ctaText: 'EXPLORE WEB SOLUTIONS',
    icon: Layout,
  },
  {
    id: 'marketing',
    slug: 'digital-marketing-seo',
    route: '/services/digital-marketing-seo',
    num: '02',
    isReversed: true,
    tag: 'Growth & Visibility',
    hudIndex: '02 // DIGITAL MARKETING',
    benchmark: 'Audience Reach',
    title: 'Digital Marketing',
    imageSrc: '/images/service-marketing.webp',
    fallbackImageSrc: '/images/service-marketing.jpg',
    imageAlt: 'Digital Marketing Analytics and Growth Metrics Dashboard',
    badge1: 'SEO & SOCIAL REACH',
    badge2: 'AUDIENCE ENGAGEMENT',
    description:
      'Help businesses grow their digital presence, connect with potential customers and improve visibility online.',
    detailedDescription:
      'Building a great website is only the first step. We help businesses reach the right audience through search visibility, social media marketing, content planning and digital growth campaigns that drive real engagement.',
    deliverables: [
      'Search Engine Optimization (SEO)',
      'Social Media Marketing & Management',
      'Content Planning & Digital Growth Campaigns',
    ],
    techStack: [
      'Search Engine Optimization (SEO)',
      'Social Media Marketing & Management',
      'Content Planning & Strategy',
      'Brand Awareness Campaigns',
      'Performance Marketing',
      'Local Business Visibility',
    ],
    ctaText: 'EXPLORE MARKETING',
    icon: TrendingUp,
  },
  {
    id: 'automation',
    slug: 'business-automation',
    route: '/services/business-automation',
    num: '03',
    isReversed: false,
    tag: 'Workflow Systems',
    hudIndex: '03 // BUSINESS AUTOMATION',
    benchmark: 'Save Repetitive Hours',
    title: 'Business Automation',
    imageSrc: '/images/service-automation.webp',
    fallbackImageSrc: '/images/service-automation.jpg',
    imageAlt: 'Business Automation and Connected Node Workflow Pipeline System',
    badge1: 'SAVE MANUAL HOURS',
    badge2: 'CONNECTED WORKFLOWS',
    description:
      'Simplify repetitive tasks, connect tools and build automated workflows to save time and reduce manual work.',
    detailedDescription:
      'Modern businesses often waste hours every week on manual data entry, customer follow-ups and disconnected tools. We create smart automations and system integrations that help your business run faster with fewer errors.',
    deliverables: [
      'Repetitive Task & Process Automation',
      'CRM & Lead Capture Workflows',
      'Data Synchronization Across Tools',
    ],
    techStack: [
      'Repetitive Task Automation',
      'CRM & Lead Capture Workflows',
      'Automated Email & Notifications',
      'Data Synchronization Across Tools',
      'Customer Support Automation',
      'Process Optimization',
    ],
    ctaText: 'EXPLORE AUTOMATION',
    icon: Workflow,
  },
  {
    id: 'autocad',
    slug: 'autocad-designs',
    route: '/services/autocad-designs',
    num: '04',
    isReversed: true,
    tag: 'Engineering Precision',
    hudIndex: '04 // AUTOCAD DESIGNS',
    benchmark: 'Accurate Drafting',
    title: 'AutoCAD Designs',
    imageSrc: '/images/service-autocad.webp',
    fallbackImageSrc: '/images/service-autocad.jpg',
    imageAlt: 'AutoCAD 2D Architectural Floor Plan and Technical CAD Drafting',
    badge1: 'ACCURATE DRAFTING',
    badge2: 'STANDARDIZED CAD',
    description:
      'Accurate 2D drafting, layout planning and technical design support for engineering and architectural needs.',
    detailedDescription:
      'We provide clean and precise AutoCAD design services including floor plans, 2D architectural layouts, mechanical drafting and digital plan conversions for businesses, contractors and engineering projects.',
    deliverables: [
      '2D Architectural Layouts & Floor Plans',
      'Mechanical & Engineering Drafting',
      'Paper / Hand Sketch to CAD Conversion',
    ],
    techStack: [
      '2D Architectural Layouts',
      'Mechanical & Engineering Drafting',
      'Schematic Diagrams',
      'Paper Sketch to CAD Conversion',
      'Layered CAD Files',
      'Detail Drawings',
    ],
    ctaText: 'EXPLORE CAD DESIGNS',
    icon: Layers,
  },
  {
    id: 'software',
    slug: 'software-development',
    route: '/services/software-development',
    num: '05',
    isReversed: false,
    tag: 'Custom Operational Tools',
    hudIndex: '05 // SOFTWARE DEVELOPMENT',
    benchmark: 'Tailored Business Logic',
    title: 'Software Development',
    imageSrc: '/images/service-software.webp',
    fallbackImageSrc: '/images/service-software.jpg',
    imageAlt: 'Custom Software Development and Engineering Architecture IDE',
    badge1: 'TAILORED FEATURES',
    badge2: 'MODULAR SYSTEMS',
    description:
      'Custom software and tailored digital tools built to solve specific operational problems and improve productivity.',
    detailedDescription:
      "When off-the-shelf software doesn't fit your workflow, custom software gives you the exact features you need. We develop internal management tools, business dashboards and customized software tailored to your specific process.",
    deliverables: [
      'Custom Business Software Solutions',
      'Management Portals & Admin Dashboards',
      'Database Architecture & Maintenance',
    ],
    techStack: [
      'Custom Business Software',
      'Management Portals & Dashboards',
      'Internal Process Tools',
      'Database Management',
      'Custom Feature Development',
      'System Maintenance & Upgrades',
    ],
    ctaText: 'EXPLORE SOFTWARE',
    icon: Code2,
  },
  {
    id: 'cloud',
    slug: 'cloud-solutions',
    route: '/services/cloud-solutions',
    num: '06',
    isReversed: true,
    tag: 'Cloud & Infrastructure',
    hudIndex: '06 // CLOUD SOLUTIONS',
    benchmark: 'Dependable & Secure',
    title: 'Cloud Solutions',
    imageSrc: '/images/service-cloud.webp',
    fallbackImageSrc: '/images/service-cloud.jpg',
    imageAlt: 'Cloud Infrastructure Monitoring and Network Operations Operations',
    badge1: 'SECURE HOSTING',
    badge2: 'AUTOMATED BACKUPS',
    description:
      'Reliable cloud hosting setup, system deployment, data protection and modern digital infrastructure.',
    detailedDescription:
      'Ensure your digital systems run smoothly without downtime. We assist businesses with modern cloud setup, hosting configuration, secure data backups and infrastructure management so your platforms remain available and secure.',
    deliverables: [
      'Cloud Hosting & Infrastructure Setup',
      'Domain, SSL & Server Configuration',
      'Automated Data Backups & Redundancy',
    ],
    techStack: [
      'Cloud Hosting Setup',
      'Domain, SSL & Server Config',
      'Automated Data Backups',
      'Deployment Pipelines',
      'Performance Monitoring',
      'Security Best Practices',
    ],
    ctaText: 'EXPLORE CLOUD',
    icon: Cloud,
  },
];

export function Services({ onSelectService }) {
  const { navigate } = useRouter();
  const sectionRef = useRef(null);
  const listRef = useRef(null);
  const watermark1Ref = useRef(null);
  const watermark2Ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Background Watermark Parallax
      if (watermark1Ref.current && watermark2Ref.current) {
        gsap.to(watermark1Ref.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
          y: -100,
          ease: 'none',
        });

        gsap.to(watermark2Ref.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
          y: 120,
          ease: 'none',
        });
      }

      // Individual Block Reveals with Clip-Path Masks
      const blocks = gsap.utils.toArray('.service-editorial-block');
      blocks.forEach((block) => {
        const visual = block.querySelector('.service-editorial-visual');

        // Mask Reveal for Image Container
        gsap.fromTo(
          visual,
          {
            clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
            y: 40,
            scale: 0.98,
          },
          {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            y: 0,
            scale: 1,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: block,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section className="services-editorial" id="services" ref={sectionRef}>
      {/* Oversized Parallax Watermark Typography */}
      <div className="editorial-watermark-text watermark-pos-1" ref={watermark1Ref} aria-hidden="true">
        WHAT WE DO
      </div>
      <div className="editorial-watermark-text watermark-pos-2" ref={watermark2Ref} aria-hidden="true">
        3STACK SERVICES
      </div>

      <div className="container">
        {/* Massive Section Header */}
        <div className="services-editorial-head">
          <div className="services-editorial-eyebrow">
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 8px var(--accent)' }} />
            <span>WHAT WE DO</span>
          </div>

          <h2 className="services-editorial-title">
            TECHNOLOGY THAT MOVES
            <br />
            <span style={{ color: 'var(--accent)' }}>
              YOUR BUSINESS FORWARD.
            </span>
          </h2>

          <p className="services-editorial-sub">
            We combine design, development, marketing and automation to create practical digital solutions built around real business needs.
          </p>
        </div>

        {/* Expansive Alternating Editorial Block List */}
        <div className="services-editorial-list" ref={listRef}>
          {SERVICES_EDITORIAL_DATA.map((service) => {
            const isReversed = service.isReversed;
            return (
              <article
                key={service.id}
                className={`service-editorial-block ${isReversed ? 'is-reversed' : ''}`}
              >
                {/* Visual Box (Mask Reveal + Parallax) */}
                <div
                  className="service-editorial-visual"
                  onClick={() => navigate(service.route)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Explore ${service.title} details`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      navigate(service.route);
                    }
                  }}
                >
                  <div className="editorial-visual-grid" />
                  <div className="editorial-visual-overlay" />

                  {/* Top HUD Metadata */}
                  <div className="editorial-visual-hud-top">
                    <span className="editorial-visual-hud-tag">{service.hudIndex}</span>
                    <span className="editorial-visual-hud-benchmark">
                      <Sparkles size={12} color="var(--accent)" />
                      {service.benchmark}
                    </span>
                  </div>

                  {/* High-Resolution Responsive Image Mockup Container */}
                  <div className="editorial-img-container">
                    <picture>
                      <source srcSet={service.imageSrc} type="image/webp" />
                      <img
                        src={service.fallbackImageSrc || service.imageSrc}
                        alt={service.imageAlt || service.title}
                        className="editorial-service-img"
                        width="800"
                        height="450"
                        loading="lazy"
                      />
                    </picture>
                    <div className="editorial-img-gradient-overlay" />
                    {service.badge1 && (
                      <span className="feature-floating-badge badge-pos-1">
                        {service.badge1}
                      </span>
                    )}
                    {service.badge2 && (
                      <span className="feature-floating-badge badge-pos-2">
                        {service.badge2}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Story Column */}
                <div className="service-editorial-content">
                  <span className="service-editorial-num">{service.num}</span>

                  <div className="service-editorial-tag">
                    <Zap size={14} />
                    <span>{service.tag}</span>
                  </div>

                  <h3 className="service-editorial-title">{service.title}</h3>

                  <p className="service-editorial-desc">{service.description}</p>

                  {/* Key Deliverables Bullet Points */}
                  <div className="service-editorial-deliverables">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="service-editorial-deliverable-item">
                        <span className="deliverable-check-icon">
                          <Check size={11} strokeWidth={3} />
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Badges */}
                  <div className="service-editorial-tech-tags">
                    {service.techStack.map((tech, tIdx) => (
                      <span key={tIdx} className="service-editorial-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Magnetic Explore Action */}
                  <Link
                    href={service.route}
                    className="service-editorial-cta"
                    aria-label={`Explore ${service.title} specifications`}
                  >
                    <span>{service.ctaText}</span>
                    <span className="service-editorial-cta-arrow">
                      <ArrowRight size={15} />
                    </span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
