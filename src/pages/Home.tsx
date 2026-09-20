import { SEOHead } from '../components/seo/SEOHead';
import { Button } from '../components/ui/Button';
import { ServiceCard } from '../components/ui/ServiceCard';
import { Code, Smartphone, Megaphone, Cog, Palette, PenTool } from 'lucide-react';
import './Home.css';

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

  return (
    <>
      <SEOHead
        title="3Stack | Premium IT & Digital Marketing Agency"
        description="We build high-performance websites, custom web apps, and data-driven marketing campaigns. Transform your business with 3Stack today."
        keywords="Top IT Agency, Web Development Company, Digital Marketing Services, Custom Software Development, Mobile App Developers, Tech Agency India, Business Automation"
      />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg-elements">
          <div className="glow-circle top-left"></div>
          <div className="glow-circle bottom-right"></div>
        </div>
        <div className="container hero-container text-center">
          <h1 className="hero-title animate-fade-in-up">
            Digital Experiences <br />
            <span className="text-gradient">Built For Growth</span>
          </h1>
          <p className="hero-subtitle animate-fade-in-up delay-100">
            <strong>What does 3Stack do?</strong> 3Stack is a premium IT and digital marketing agency. We engineer custom <a href="/services/web-development" style={{textDecoration: 'underline'}}>web applications</a>, build <a href="/services/app-development" style={{textDecoration: 'underline'}}>mobile apps</a>, and execute <a href="/services/digital-marketing" style={{textDecoration: 'underline'}}>AI-driven marketing</a> campaigns to scale your business.
          </p>
          <div className="hero-actions animate-fade-in-up delay-200">
            <Button href="/contact" size="lg">Start a Project</Button>
            <Button href="/portfolio" variant="outline" size="lg">View Our Work</Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section">
        <div className="container">
          <div className="section-header text-center animate-fade-in-up">
            <h2 className="section-title">Our Expertise</h2>
            <p className="section-subtitle">Comprehensive solutions to scale your business in the digital era.</p>
          </div>
          <div className="grid grid-cols-3 gap-md mt-lg">
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
              <h2 className="section-title">Why Partner With 3Stack?</h2>
              <p className="section-subtitle mb-md">
                We don't just build websites; we build digital ecosystems designed to convert, scale, and outperform your competition.
              </p>
              <ul className="benefits-list">
                <li>
                  <div className="benefit-icon">✓</div>
                  <div>
                    <h4>Conversion Focused</h4>
                    <p>Every design decision is made with your bottom line in mind.</p>
                  </div>
                </li>
                <li>
                  <div className="benefit-icon">✓</div>
                  <div>
                    <h4>Cutting-Edge Tech</h4>
                    <p>We use the latest modern frameworks (React, TS) for peak performance.</p>
                  </div>
                </li>
                <li>
                  <div className="benefit-icon">✓</div>
                  <div>
                    <h4>End-to-End Delivery</h4>
                    <p>From concept to deployment, we handle the entire lifecycle.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="why-us-image animate-fade-in-up delay-200">
              <div className="glass-card decorative-card" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', padding: 0, overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(135deg, rgba(7,7,7,0.8) 0%, rgba(7,7,7,0.2) 100%)', zIndex: 1 }}></div>
                <div style={{ position: 'relative', zIndex: 2, padding: '1.5rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div className="card-header">
                    <div className="dot red"></div>
                    <div className="dot yellow"></div>
                    <div className="dot green"></div>
                  </div>
                  <div style={{ marginTop: 'auto' }}>
                    <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem' }}>Innovative Teams</h3>
                    <p style={{ color: 'rgba(255,255,255,0.8)' }}>Working together to build your digital future.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section text-center">
        <div className="container">
          <div className="cta-box animate-fade-in-up">
            <h2>Ready to transform your digital presence?</h2>
            <p>Let's discuss how we can help you achieve your goals.</p>
            <Button href="/contact" size="lg" className="mt-md">Contact Us Today</Button>
          </div>
        </div>
      </section>
    </>
  );
}