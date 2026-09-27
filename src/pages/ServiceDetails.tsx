import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SEOHead } from '../components/seo/SEOHead';
import { Button } from '../components/ui/Button';
import { serviceDetailsData } from '../data/servicesData';
import { ArrowLeft, CheckCircle2, ChevronDown, Sparkles, Workflow, Users, Wrench } from 'lucide-react';
import './FAQ.css';

export default function ServiceDetails() {
  const { id } = useParams<{ id: string }>();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  
  if (!id || !serviceDetailsData[id]) {
    return <Navigate to="/services" replace />;
  }

  const service = serviceDetailsData[id];
  const allServiceKeys = Object.keys(serviceDetailsData);
  const relatedServices = allServiceKeys
    .filter(key => key !== id)
    .slice(0, 3)
    .map(key => serviceDetailsData[key]);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: service.title, url: `/services/${service.id}` }
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `https://3stack.in/services/${service.id}/#service`,
    'name': service.title,
    'serviceType': service.title,
    'description': service.seoDescription,
    'provider': {
      '@type': 'Organization',
      '@id': 'https://3stack.in/#organization',
      'name': '3Stack'
    },
    'areaServed': {
      '@type': 'Country',
      'name': 'Global'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `https://3stack.in/services/${service.id}/#faq`,
    'mainEntity': service.faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.q,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.a
      }
    }))
  };

  return (
    <>
      <SEOHead
        title={service.seoTitle}
        description={service.seoDescription}
        keywords={service.seoKeywords}
        breadcrumbs={breadcrumbs}
        schema={[serviceSchema, faqSchema]}
      />
      
      <section className="section" style={{ paddingTop: '140px', minHeight: '80vh', position: 'relative', overflow: 'hidden' }}>
        {/* Glow Effects */}
        <div style={{ position: 'absolute', top: '0', left: '0', width: '500px', height: '500px', background: 'var(--accent-primary)', opacity: '0.05', filter: 'blur(120px)', zIndex: 0, borderRadius: '50%' }}></div>
        <div style={{ position: 'absolute', bottom: '0', right: '-10%', width: '600px', height: '600px', background: 'var(--accent-secondary)', opacity: '0.05', filter: 'blur(150px)', zIndex: 0, borderRadius: '50%' }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1000px' }}>
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: '1.5rem' }}>
            <ol style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', listStyle: 'none', padding: 0, margin: 0, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              <li>
                <Link to="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Home</Link>
              </li>
              <li>/</li>
              <li>
                <Link to="/services" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Services</Link>
              </li>
              <li>/</li>
              <li aria-current="page" style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>{service.title}</li>
            </ol>
          </nav>

          <div className="animate-fade-in-up">
            <Link to="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
              <ArrowLeft size={18} /> Back to All Services
            </Link>
            
            <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', lineHeight: 1.15, marginBottom: '1.25rem' }}>{service.title}</h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '800px', marginBottom: '2.5rem' }}>
              {service.shortDescription}
            </p>

            {/* Overview Section */}
            <div className="glass-card mb-xl" style={{ padding: 'clamp(2rem, 4vw, 3rem)', borderRadius: 'var(--radius-lg)' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', fontWeight: 600, marginBottom: '0.75rem' }}>
                <Sparkles size={20} />
                <span>Service Definition</span>
              </div>
              <h2 style={{ fontSize: '1.85rem', marginBottom: '1.25rem', color: 'var(--text-primary)' }}>Service Overview</h2>
              <div 
                style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.8 }}
                dangerouslySetInnerHTML={{ __html: service.overview }}
              />
            </div>

            {/* Who Needs This Section */}
            <div className="glass-card mb-xl" style={{ padding: 'clamp(2rem, 4vw, 3rem)', borderRadius: 'var(--radius-lg)' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', fontWeight: 600, marginBottom: '0.75rem' }}>
                <Users size={20} />
                <span>Target Audiences & Use Cases</span>
              </div>
              <h2 style={{ fontSize: '1.85rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Who Needs This Service?</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {service.whoNeedsThis.map((item, idx) => (
                  <div key={idx} style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{item.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Deliverables Section */}
            <div className="glass-card mb-xl" style={{ padding: 'clamp(2rem, 4vw, 3rem)', borderRadius: 'var(--radius-lg)' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', fontWeight: 600, marginBottom: '0.75rem' }}>
                <CheckCircle2 size={20} />
                <span>Scope of Work</span>
              </div>
              <h2 style={{ fontSize: '1.85rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>What We Deliver</h2>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem', listStyle: 'none', padding: 0, margin: 0 }}>
                {service.deliverables.map((item: string, index: number) => (
                  <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                    <CheckCircle2 size={22} className="text-accent" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '1.05rem', lineHeight: 1.6 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Execution Process Section */}
            <div className="glass-card mb-xl" style={{ padding: 'clamp(2rem, 4vw, 3rem)', borderRadius: 'var(--radius-lg)' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', fontWeight: 600, marginBottom: '0.75rem' }}>
                <Workflow size={20} />
                <span>Our Methodology</span>
              </div>
              <h2 style={{ fontSize: '1.85rem', marginBottom: '1.75rem', color: 'var(--text-primary)' }}>Our 5-Step Execution Process</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {service.process.map((step, index) => (
                  <div key={index} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', padding: '1.25rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)', fontWeight: 700, fontSize: '0.95rem', flexShrink: 0 }}>
                      {step.step}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.4rem' }}>{step.title}</h3>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Section */}
            {service.technologies && (
              <div className="glass-card mb-xl" style={{ padding: 'clamp(2rem, 4vw, 3rem)', borderRadius: 'var(--radius-lg)' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', fontWeight: 600, marginBottom: '0.75rem' }}>
                  <Wrench size={20} />
                  <span>Tools & Stack</span>
                </div>
                <h2 style={{ fontSize: '1.85rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Technologies & Tools We Rely On</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  {service.technologies.map((tech: string, index: number) => (
                    <span key={index} style={{ padding: '0.5rem 1.25rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--border-color)', borderRadius: '50px', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                      {tech}
                    </span>
                  ))}
                  <span style={{ padding: '0.5rem 1.25rem', background: 'rgba(16, 185, 129, 0.1)', border: '1px dashed var(--accent-primary)', borderRadius: '50px', color: 'var(--accent-primary)', fontSize: '0.95rem', fontWeight: 500 }}>
                    + Bespoke Architectures
                  </span>
                </div>
              </div>
            )}

            {/* Service-Specific FAQs */}
            <div className="glass-card mb-xl" style={{ padding: 'clamp(2rem, 4vw, 3rem)', borderRadius: 'var(--radius-lg)' }}>
              <h2 style={{ fontSize: '1.85rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Frequently Asked Questions</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Key answers regarding timelines, costs, deliverables, and expectations for {service.title}.
              </p>
              
              <div className="faq-accordion">
                {service.faqs.map((faq, idx) => (
                  <div key={idx} style={{ marginBottom: '1rem' }}>
                    <div 
                      className={`glass-card faq-item ${openFaqIndex === idx ? 'open' : ''}`}
                      onClick={() => toggleFaq(idx)}
                      style={{ padding: '1.25rem', cursor: 'pointer', borderRadius: '10px' }}
                    >
                      <div className="faq-question" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h3 style={{ fontSize: '1.1rem', margin: 0, color: 'var(--text-primary)' }}>{faq.q}</h3>
                        <div className="faq-icon" style={{ color: 'var(--accent-primary)', flexShrink: 0 }}>
                          <ChevronDown size={20} />
                        </div>
                      </div>
                      
                      <div className="faq-answer-wrapper">
                        <div className="faq-answer" style={{ paddingTop: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                          <p style={{ margin: 0 }}>{faq.a}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Box */}
            <div className="glass-card text-center mb-xl" style={{ padding: 'clamp(2rem, 5vw, 4rem)', borderRadius: 'var(--radius-lg)', background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(255,255,255,0.02) 100%)' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Ready to Scale with {service.title}?</h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 1.75rem auto', lineHeight: 1.6 }}>
                Contact 3Stack today to schedule a 30-minute discovery call and receive a detailed technical roadmap with predictable pricing.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button href="/contact" size="lg" variant="primary">Schedule a Consultation</Button>
                <Button href="/portfolio" size="lg" variant="outline">View Case Studies</Button>
              </div>
            </div>

            {/* Related Services (Topical Cross-Linking) */}
            <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border-color)' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1.25rem', color: 'var(--text-primary)' }}>Explore Related Services</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                {relatedServices.map((rel, idx) => (
                  <Link 
                    key={idx} 
                    to={`/services/${rel.id}`} 
                    className="glass-card" 
                    style={{ padding: '1.25rem', borderRadius: '10px', textDecoration: 'none', display: 'block', transition: 'transform 0.2s ease, border-color 0.2s ease' }}
                  >
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{rel.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.5, margin: 0 }}>
                      {rel.shortDescription}
                    </p>
                    <span style={{ display: 'inline-block', marginTop: '0.75rem', color: 'var(--accent-primary)', fontSize: '0.85rem', fontWeight: 600 }}>
                      Learn More &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
