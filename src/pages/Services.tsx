import { SEOHead } from '../components/seo/SEOHead';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { Code, Smartphone, Megaphone, Cog, Palette, PenTool, CheckCircle2 } from 'lucide-react';
import './Services.css';

export default function Services() {
  const services = [
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'We build fast, secure, and scalable web applications using modern technologies like React, TypeScript, and Node.js. From corporate websites to complex SaaS platforms.',
      features: ['Custom Web Applications', 'E-commerce Solutions', 'CMS Development', 'Performance Optimization'],
      icon: <Code size={32} />,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'app-development',
      title: 'App Development',
      description: 'Engaging native and cross-platform mobile experiences for iOS and Android. We ensure your app is intuitive, performant, and ready for scale.',
      features: ['iOS & Android Apps', 'Cross-Platform (React Native)', 'UI/UX Design', 'App Store Optimization'],
      icon: <Smartphone size={32} />,
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies to increase your visibility, traffic, and conversion rates across all digital channels.',
      features: ['Search Engine Optimization (SEO)', 'Pay-Per-Click (PPC)', 'Social Media Marketing', 'Content Strategy'],
      icon: <Megaphone size={32} />,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'business-automation',
      title: 'Business Automation',
      description: 'Streamline your operations with intelligent automation tools and integrations. Reduce manual work and increase efficiency.',
      features: ['Workflow Automation', 'CRM Integrations', 'Custom Dashboards', 'API Development'],
      icon: <Cog size={32} />,
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'web-design',
      title: 'Web Design',
      description: 'Stunning, user-centric interfaces that captivate and retain your audience while clearly communicating your brand value.',
      features: ['UI/UX Prototyping', 'Brand Identity', 'Responsive Design', 'Interactive Prototypes'],
      icon: <Palette size={32} />,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'autocad',
      title: 'AutoCAD Services',
      description: 'Precision drafting and 3D modeling for architectural and engineering projects. We deliver accurate technical drawings on time.',
      features: ['2D Drafting', '3D Modeling', 'Architectural Plans', 'MEP Drawings'],
      icon: <PenTool size={32} />,
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' }
  ];

  const serviceSchemas = services.map(service => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `https://3stack.agency/services/${service.id}/#service`,
    'name': service.title,
    'serviceType': service.title,
    'description': service.description,
    'provider': {
      '@type': 'Organization',
      '@id': 'https://3stack.agency/#organization',
      'name': '3Stack IT Agency'
    }
  }));

  return (
    <>
      <SEOHead
        title="Our Services | 3Stack IT Agency"
        description="Explore 3Stack's premium digital services: custom web development, mobile app development, digital marketing, business automation, UI/UX design, and AutoCAD drafting."
        keywords="Web Development Services, IT Agency Services, Mobile App Development, Digital Marketing Experts, Best SEO Services, Business Automation Consulting, Custom UI/UX Design"
        breadcrumbs={breadcrumbs}
        schema={serviceSchemas}
      />

      {/* Services Header */}
      <section className="section services-header" style={{ position: 'relative', overflow: 'hidden', padding: '140px 0 60px' }}>
        {/* Glow Effects */}
        <div style={{ position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '600px', background: 'var(--accent-primary)', opacity: '0.1', filter: 'blur(120px)', zIndex: 0, borderRadius: '50%' }}></div>
        <div style={{ position: 'absolute', bottom: '0', right: '-10%', width: '400px', height: '400px', background: 'var(--accent-secondary)', opacity: '0.1', filter: 'blur(100px)', zIndex: 0, borderRadius: '50%' }}></div>
        
        <div className="container text-center" style={{ position: 'relative', zIndex: 1, maxWidth: '900px' }}>
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
            <ol style={{ display: 'flex', gap: '0.5rem', listStyle: 'none', padding: 0, margin: 0, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              <li><Link to="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Home</Link></li>
              <li>/</li>
              <li aria-current="page" style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>Services</li>
            </ol>
          </nav>

          <div className="inline-badge animate-fade-in-up" style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '50px', color: 'var(--accent-primary)', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1.5rem' }}>
            Transforming Ideas Into Reality
          </div>
          
          <h1 className="hero-title animate-fade-in-up delay-100" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', lineHeight: 1.15 }}>
            Digital Solutions To <br/>
            <span className="text-gradient">Scale Your Business</span>
          </h1>
          
          <p className="hero-subtitle animate-fade-in-up delay-200" style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
            We architect comprehensive digital ecosystems designed to elevate your brand, automate operations, and drive measurable, compound business growth.
          </p>
          
          <div className="animate-fade-in-up delay-300" style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {services.map((s, i) => (
              <a href={`#${s.id}`} key={i} style={{ padding: '0.6rem 1.1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '50px', color: 'var(--text-secondary)', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.3s' }} className="service-pill">
                <span style={{ color: 'var(--accent-primary)' }}>{s.icon}</span>
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="section services-list-section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="services-stack">
            {services.map((service) => (
              <article id={service.id} key={service.id} className="service-detail-card animate-fade-in-up">
                <div className="service-detail-content">
                  <div className="service-icon-large">
                    {service.icon}
                  </div>
                  <h2>{service.title}</h2>
                  <p className="service-description">{service.description}</p>
                  
                  <ul className="feature-list">
                    {service.features.map((feature, i) => (
                      <li key={i}>
                        <CheckCircle2 size={18} className="text-accent" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button href={`/services/${service.id}`} variant="primary" className="mt-md">
                    Explore {service.title} Details &rarr;
                  </Button>
                </div>
                
                {/* Visual Representation with semantic img */}
                <div className="service-detail-visual">
                  <div className="glass-card visual-card" style={{ position: 'relative', overflow: 'hidden', padding: 0, height: '320px' }}>
                    <img 
                      src={service.image} 
                      alt={`${service.title} by 3Stack IT Agency`} 
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
                    />
                    <div className="visual-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, var(--bg-primary) 0%, transparent 100%)', opacity: 0.8 }}></div>
                    <div className="visual-placeholder" style={{ zIndex: 10 }}>
                      {service.icon}
                      <div className="pulse-ring"></div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="section">
        <div className="container">
           <div className="cta-box text-center animate-fade-in-up">
              <h2>Not sure which solution fits your business?</h2>
              <p>Schedule a free 30-minute consultation with our engineering team to map out your digital roadmap.</p>
              <Button href="/contact" size="lg" className="mt-md">Book a Strategy Session</Button>
           </div>
        </div>
      </section>
    </>
  );
}