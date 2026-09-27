import { useState } from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import { Button } from '../components/ui/Button';
import { ServiceCard } from '../components/ui/ServiceCard';
import { Code, Smartphone, Megaphone, Cog, Palette, PenTool, ChevronDown, CheckCircle2, ArrowRight, Star } from 'lucide-react';
import './Home.css';
import '../pages/FAQ.css';

export default function Home() {
  const services = [
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'High-performance, scalable websites and web apps tailored to your business needs.',
      icon: <Code size={32} />
    },
    {
      id: 'app-development',
      title: 'App Development',
      description: 'Engaging native and cross-platform mobile experiences for iOS and Android.',
      icon: <Smartphone size={32} />
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies to increase your visibility and conversion rates.',
      icon: <Megaphone size={32} />
    },
    {
      id: 'business-automation',
      title: 'Business Automation',
      description: 'Streamline your operations with intelligent automation tools and integrations.',
      icon: <Cog size={32} />
    },
    {
      id: 'web-design',
      title: 'Web Design',
      description: 'Stunning, user-centric interfaces that captivate and retain your audience.',
      icon: <Palette size={32} />
    },
    {
      id: 'autocad',
      title: 'AutoCAD Services',
      description: 'Precision drafting and 3D modeling for architectural and engineering projects.',
      icon: <PenTool size={32} />
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const homeFaqs = [
    { 
      q: 'What is 3Stack IT Agency and what services do you provide?',
      a: '3Stack IT Agency is a web development and digital marketing agency based in Jaipur, India. We specialize in custom software development, UI/UX design, AI-driven SEO, and PPC campaigns. We engineer custom web applications (React, Node.js), develop mobile apps, construct business automation pipelines, and provide AutoCAD drafting services.' 
    },
    {
      q: 'Does 3Stack IT Agency offer custom software and UI/UX design?',
      a: 'Yes, 3Stack IT Agency offers custom software development and UI/UX design services. Our full-stack engineering team builds scalable bespoke applications, while our design studio creates conversion-focused interfaces and design systems.'
    },
    {
      q: 'Is 3Stack IT Agency a digital marketing agency specializing in AI-driven SEO and PPC campaigns?',
      a: 'Yes, 3Stack IT Agency is a digital marketing agency that specializes in AI-driven SEO and PPC campaigns. We execute data-driven Search Engine Optimization and high-ROI Google & Meta Ads to drive measurable revenue growth.'
    },
    { 
      q: 'Where is 3Stack IT Agency located and which regions do you serve?', 
      a: 'Our central engineering studio is located in Jaipur, Rajasthan, 302012, India. We operate globally, serving funded technology startups, mid-market enterprises, e-commerce merchants, and service businesses across India, North America, the United Kingdom, Europe, and the UAE.' 
    },
    { 
      q: 'What is your pricing model and project cost structure?', 
      a: 'We offer transparent, fixed project-based pricing with clearly defined milestones for defined scopes, ensuring complete budget predictability. For growing products, dedicated engineering squads, or ongoing marketing campaigns, we offer sprint-based billing or monthly retainer agreements.' 
    },
    { 
      q: 'Who owns the intellectual property and code upon project completion?', 
      a: 'You retain 100% full intellectual property (IP) and source code ownership. Upon completion and settlement of project milestones, we execute a complete handover of all Git repositories, design tokens, asset libraries, and server configurations.' 
    },
    { 
      q: 'How does 3Stack optimize web applications for search and answer engines (AEO)?', 
      a: 'We architect every platform with server-side rendering, semantic HTML5, deep schema markup (JSON-LD), sub-second page speeds, and direct question-answer content structures to ensure top indexing by Google and citation by AI answer engines like ChatGPT, Perplexity, and Gemini.' 
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' }
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': 'https://3stack.in/#faq',
    mainEntity: homeFaqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a
      }
    }))
  };

  return (
    <>
      <SEOHead
        title="3Stack — Web Development & Digital Marketing Agency"
        description="3Stack builds high-performance web apps and drives revenue growth through digital marketing and intelligent automation."
        keywords="3Stack, 3 Stack, 3Stack agency, 3stack.in, 3Stack IT Agency, 3Stack web development, 3Stack Jaipur, digital marketing agency, custom web development"
        canonicalUrl="https://3stack.in/"
        breadcrumbs={breadcrumbs}
        schema={faqSchema}
      />

      {/* Hero Section */}
      <section className="hero-section">
        {/* Animated background */}
        <div className="hero-bg-elements">
          <div className="glow-circle top-left"></div>
          <div className="glow-circle bottom-right"></div>
          <div className="hero-grid-overlay"></div>
        </div>

        <div className="container hero-container text-center">
          {/* Eyebrow Badge */}
          <div className="hero-eyebrow animate-fade-in-up">
            <span className="hero-badge">
              <span className="hero-badge-dot"></span>
              🚀 Top-Rated Tech &amp; Growth Agency
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="hero-title animate-fade-in-up delay-100">
            We Build High-Impact Websites
            <br />
            &amp; <span className="text-gradient">Scale Modern Brands.</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle animate-fade-in-up delay-200">
            From bespoke web apps to ROI-driven digital marketing, we engineer scalable digital
            experiences for ambitious businesses worldwide.
          </p>

          {/* CTA Buttons */}
          <div className="hero-actions animate-fade-in-up delay-300">
            <Button
              href="/contact"
              size="lg"
              icon={<ArrowRight size={20} />}
              iconPosition="right"
              className="hero-btn-primary"
            >
              Start a Project
            </Button>
            <Button
              href="/portfolio"
              variant="glass"
              size="lg"
              className="hero-btn-secondary"
            >
              View Our Work
            </Button>
          </div>

          {/* Trust / Social Proof Row */}
          <div className="hero-trust animate-fade-in-up delay-400">
            <div className="hero-trust-item">
              <div className="hero-trust-stars">
                <Star size={14} /><Star size={14} /><Star size={14} /><Star size={14} /><Star size={14} />
              </div>
              <span>4.9/5 Client Rating</span>
            </div>
            <div className="hero-trust-divider"></div>
            <div className="hero-trust-item">
              <span>✦</span>
              <span>Trusted by 20+ Scaling Startups</span>
            </div>
            <div className="hero-trust-divider"></div>
            <div className="hero-trust-item hero-tech-icons">
              {/* React */}
              <svg viewBox="0 0 40 40" className="tech-icon" aria-label="React"><circle cx="20" cy="20" r="3.5" fill="#61DAFB"/><ellipse cx="20" cy="20" rx="18" ry="7" fill="none" stroke="#61DAFB" strokeWidth="2"/><ellipse cx="20" cy="20" rx="18" ry="7" fill="none" stroke="#61DAFB" strokeWidth="2" transform="rotate(60 20 20)"/><ellipse cx="20" cy="20" rx="18" ry="7" fill="none" stroke="#61DAFB" strokeWidth="2" transform="rotate(120 20 20)"/></svg>
              {/* Node.js */}
              <svg viewBox="0 0 40 40" className="tech-icon" aria-label="Node.js"><text x="4" y="27" fontSize="12" fontWeight="bold" fill="#68A063" fontFamily="monospace">Node</text></svg>
              {/* TypeScript */}
              <svg viewBox="0 0 40 40" className="tech-icon" aria-label="TypeScript"><rect width="40" height="40" rx="5" fill="#3178C6"/><text x="5" y="28" fontSize="18" fontWeight="bold" fill="white" fontFamily="monospace">TS</text></svg>
              {/* Next.js */}
              <svg viewBox="0 0 40 40" className="tech-icon" aria-label="Next.js"><circle cx="20" cy="20" r="19" fill="#000" stroke="#fff" strokeWidth="1"/><text x="6" y="26" fontSize="12" fontWeight="bold" fill="white" fontFamily="sans-serif">Next</text></svg>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section">
        <div className="container">
          <div className="section-header text-center animate-fade-in-up">
            <h2 className="section-title">Our Expertise</h2>
            <p className="section-subtitle">Comprehensive digital solutions engineered to scale your business in the modern economy.</p>
          </div>
          <div className="grid grid-cols-3 gap-md mt-lg services-grid">
            {services.map((service, index) => (
              <ServiceCard 
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                delay={(index % 3) * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why-us-section">
        <div className="container">
          <div className="grid grid-cols-2 gap-lg items-center">
            <div className="why-us-content animate-fade-in-up">
              <h2 className="section-title">Why Partner With 3Stack IT Agency?</h2>
              <p className="section-subtitle mb-md">
                We don't merely assemble websites; we engineer robust digital ecosystems designed to convert traffic, automate manual bottlenecks, and outperform your competition.
              </p>
              <ul className="benefits-list" style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                  <div className="benefit-icon" style={{ marginTop: '4px' }}><CheckCircle2 size={20} className="text-accent" /></div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', margin: '0 0 0.25rem 0' }}>Conversion-Focused Architecture</h3>
                    <p style={{ margin: 0, color: 'var(--text-secondary)' }}>Every design and architectural decision is engineered with customer acquisition and measurable ROI at the core.</p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                  <div className="benefit-icon" style={{ marginTop: '4px' }}><CheckCircle2 size={20} className="text-accent" /></div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', margin: '0 0 0.25rem 0' }}>Type-Safe, Modern Tech Stack</h3>
                    <p style={{ margin: 0, color: 'var(--text-secondary)' }}>We use React, TypeScript, Node.js, and Next.js to ensure sub-second latency, maintainability, and zero technical debt.</p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                  <div className="benefit-icon" style={{ marginTop: '4px' }}><CheckCircle2 size={20} className="text-accent" /></div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', margin: '0 0 0.25rem 0' }}>End-to-End Agile Lifecycle</h3>
                    <p style={{ margin: 0, color: 'var(--text-secondary)' }}>From initial system architecture and Figma prototyping to cloud deployment and post-launch maintenance, we manage the entire delivery pipeline.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="why-us-image animate-fade-in-up delay-200">
              <div className="glass-card decorative-card" style={{ position: 'relative', height: '360px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', padding: 0 }}>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                  alt="3Stack Engineers Designing High-Performance Software" 
                  loading="lazy"
                  width={800}
                  height={533}
                  style={{ width: '100%', height: '100%', aspectRatio: '800 / 533', objectFit: 'cover', display: 'block' }} 
                />
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(135deg, rgba(7,7,7,0.85) 0%, rgba(7,7,7,0.3) 100%)', zIndex: 1 }}></div>
                <div style={{ position: 'relative', zIndex: 2, padding: '1.5rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div className="card-header">
                    <div className="dot red"></div>
                    <div className="dot yellow"></div>
                    <div className="dot green"></div>
                  </div>
                  <div style={{ marginTop: 'auto' }}>
                    <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '0.4rem' }}>Innovative Engineering Team</h3>
                    <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0, fontSize: '0.95rem' }}>Collaborating closely with ambitious founders and enterprise leaders.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section" id="faq" style={{ position: 'relative', overflow: 'hidden', paddingTop: '40px', paddingBottom: '100px' }}>
        <div className="container" style={{ maxWidth: '850px', position: 'relative', zIndex: 1 }}>
          <div className="text-center animate-fade-in-up">
            <h2 className="section-title">Frequently Asked <span className="text-gradient">Questions</span></h2>
            <p className="section-subtitle mb-lg">
              Direct answers to common questions regarding 3Stack IT Agency, our services, pricing, and execution.
            </p>
          </div>

          <div className="faq-accordion mt-lg">
            {homeFaqs.map((faq, idx) => (
              <div key={idx} className={`animate-fade-in-up delay-${(idx % 5) * 100}`} style={{ marginBottom: '1rem' }}>
                <div 
                  className={`glass-card faq-item ${openIndex === idx ? 'open' : ''}`}
                  onClick={() => toggleAccordion(idx)}
                  style={{ padding: '1.25rem', cursor: 'pointer', borderRadius: '10px' }}
                >
                   <div className="faq-question" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                     <h3 style={{ fontSize: '1.15rem', margin: 0 }}>{faq.q}</h3>
                     <div className="faq-icon" style={{ color: 'var(--accent-primary)', flexShrink: 0 }}>
                       <ChevronDown size={24} />
                     </div>
                   </div>
                   
                   <div className="faq-answer-wrapper">
                     <div className="faq-answer" style={{ paddingTop: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                       <p style={{ margin: 0 }}>{faq.a}</p>
                     </div>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section text-center">
        <div className="container">
          <div className="cta-box animate-fade-in-up">
            <h2>Ready to transform your digital presence?</h2>
            <p>Schedule a free 30-minute discovery call to discuss your roadmap with our technical leaders.</p>
            <Button href="/contact" size="lg" className="mt-md">Schedule a Consultation</Button>
          </div>
        </div>
      </section>
    </>
  );
}