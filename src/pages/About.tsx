import { useState } from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { CheckCircle2, Target, ChevronDown, Award, MapPin } from 'lucide-react';
import './FAQ.css';

export default function About() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { 
      q: 'What is 3Stack and what does 3Stack do?',
      a: '3Stack (also known as 3 Stack) is a premier full-service software engineering and digital marketing agency based in Jaipur, India. We engineer custom web applications (React, Node.js), develop mobile applications (iOS, Android, React Native), execute AI-driven digital marketing and SEO campaigns, construct business automation pipelines, and provide certified AutoCAD drafting services.' 
    },
    { 
      q: 'Where does 3Stack operate and who do you serve?', 
      a: 'Our core development studio is located in Jaipur, Rajasthan, India (PIN: 302012). We serve clients globally, including funded startups, mid-market enterprises, and business service providers across India, the United States, the UK, Europe, and the Middle East.' 
    },
    { 
      q: 'How long does a website or app take to build?', 
      a: 'A standard corporate website or high-converting web application takes 4 to 6 weeks from discovery to deployment. Complex multi-role web platforms, SaaS products, or mobile applications typically require 3 to 5 months for a feature-complete Minimum Viable Product (MVP).' 
    },
    { 
      q: 'What is your pricing model?', 
      a: 'We provide transparent fixed project-based pricing for well-defined project scopes, giving our clients complete budget predictability with zero surprise costs. For evolving software platforms or long-term growth campaigns, we provide sprint-based rates or dedicated monthly developer retainers.' 
    },
    { 
      q: 'Do you work with startups or established enterprises?', 
      a: 'We partner with both. We specialize in helping early-stage founders architect scalable MVPs that impress investors, while also maintaining the enterprise-grade security protocols, NDA confidentiality, and code quality required by established corporations.' 
    },
    { 
      q: 'Do you provide ongoing post-launch maintenance?', 
      a: 'Yes. We offer continuous maintenance agreements covering security audits, automated dependency updates, cloud infrastructure monitoring on AWS/Vercel, and SLA-backed bug fixes.' 
    },
    { 
      q: 'How do we get started with 3Stack?', 
      a: 'Reach out via our Contact page or call us directly at +91-8306099337. We will schedule a free 30-minute discovery call to evaluate your requirements and deliver a detailed technical roadmap with milestone estimates.' 
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about' }
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': 'https://3stack.in/about/#faq',
    mainEntity: faqs.map(faq => ({
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
        title="About Us | 3Stack"
        description="Learn about 3Stack: our technical mission, full-stack engineering team in Jaipur, and commitment to building scalable digital platforms for businesses worldwide."
        keywords="About 3Stack, 3Stack, 3 Stack, 3Stack agency, 3stack.in, Digital Agency Jaipur, IT Agency India, Premium Web Developers, Expert App Developers"
        breadcrumbs={breadcrumbs}
        schema={faqSchema}
      />
      <section className="section" style={{ position: 'relative', overflow: 'hidden', paddingTop: '140px', paddingBottom: '100px', minHeight: '100vh' }}>
        
        {/* Glow Effects */}
        <div style={{ position: 'absolute', top: '0', left: '0', width: '500px', height: '500px', background: 'var(--accent-primary)', opacity: '0.1', filter: 'blur(120px)', zIndex: 0, borderRadius: '50%' }}></div>
        <div style={{ position: 'absolute', bottom: '20%', right: '-10%', width: '600px', height: '600px', background: 'var(--accent-secondary)', opacity: '0.1', filter: 'blur(150px)', zIndex: 0, borderRadius: '50%' }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
            <ol style={{ display: 'flex', gap: '0.5rem', listStyle: 'none', padding: 0, margin: 0, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              <li><Link to="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Home</Link></li>
              <li>/</li>
              <li aria-current="page" style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>About Us</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="text-center animate-fade-in-up" style={{ maxWidth: '1000px', margin: '0 auto 2.5rem auto' }}>
            <div className="inline-badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '50px', color: 'var(--accent-primary)', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1.5rem' }}>
              Who We Are
            </div>
            
            <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.15 }}>
              Web Development & <span className="text-gradient">Digital Marketing</span>
            </h1>
            <p className="section-subtitle mt-md" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: 1.6 }}>
              3Stack IT Agency is a web development and digital marketing agency based in Jaipur, India. We specialize in custom software development, UI/UX design, and AI-driven SEO & PPC campaigns for clients worldwide.
            </p>
          </div>

          {/* Hero Image with Semantic img */}
          <div className="animate-fade-in-up delay-100" style={{ marginBottom: '5rem', width: '100%', height: '400px', borderRadius: 'var(--radius-lg)', position: 'relative', overflow: 'hidden' }}>
             <img 
               src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
               alt="3Stack Team Collaborating in Office" 
               loading="lazy"
               width={1200}
               height={400}
               style={{ width: '100%', height: '100%', aspectRatio: '3 / 1', objectFit: 'cover', display: 'block' }} 
             />
             <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(7,7,7,0.85) 0%, transparent 100%)' }}></div>
          </div>

          <div className="grid grid-cols-2 gap-xl items-center mt-xl">
             <div className="animate-fade-in-up delay-200">
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', fontWeight: 600, marginBottom: '1rem' }}>
                  <Target size={20} /> Our Core Mission
                </div>
                <h2 style={{ fontSize: '2.25rem', marginBottom: '1.25rem', lineHeight: 1.25 }}>Custom Software, UI/UX Design, and AI-Driven SEO & PPC.</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                   Our mission is to empower ambitious businesses with high-performance custom software development, conversion-focused UI/UX design, and algorithmic AI-driven SEO and PPC campaigns that drive measurable revenue. We eliminate technical debt and deliver production systems built for long-term scalability.
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem', listStyle: 'none', padding: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-primary)' }}><CheckCircle2 size={20} className="text-accent" /> Type-Safe Modern Engineering (React, Node, TypeScript)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-primary)' }}><CheckCircle2 size={20} className="text-accent" /> Transparent Fixed-Price & Retainer Billing Models</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-primary)' }}><CheckCircle2 size={20} className="text-accent" /> Complete Source Code & Intellectual Property Ownership</li>
                </ul>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Button href="/contact" size="lg">Work With Us</Button>
                  <Button href="/services" size="lg" variant="outline">Explore Services</Button>
                </div>
             </div>
             
             <div className="animate-fade-in-up delay-300">
                <div className="glass-card" style={{ padding: '2.5rem', borderRadius: 'var(--radius-lg)', position: 'relative', overflow: 'hidden' }}>
                   <div style={{ position: 'absolute', top: '-50%', right: '-50%', width: '100%', height: '100%', background: 'radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)' }}></div>
                   
                   <div className="grid grid-cols-2 gap-md text-center" style={{ position: 'relative', zIndex: 1 }}>
                      <div style={{ padding: '1.25rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                         <h3 style={{ fontSize: '2.5rem', color: 'var(--accent-primary)', marginBottom: '0.4rem', lineHeight: 1 }}>50+</h3>
                         <p style={{ color: 'var(--text-secondary)', fontWeight: 500, fontSize: '0.9rem', margin: 0 }}>Projects Delivered</p>
                      </div>
                      <div style={{ padding: '1.25rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                         <h3 style={{ fontSize: '2.5rem', color: 'var(--accent-primary)', marginBottom: '0.4rem', lineHeight: 1 }}>15+</h3>
                         <p style={{ color: 'var(--text-secondary)', fontWeight: 500, fontSize: '0.9rem', margin: 0 }}>Team Members</p>
                      </div>
                      <div style={{ padding: '1.25rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                         <h3 style={{ fontSize: '2.5rem', color: 'var(--accent-primary)', marginBottom: '0.4rem', lineHeight: 1 }}>99%</h3>
                         <p style={{ color: 'var(--text-secondary)', fontWeight: 500, fontSize: '0.9rem', margin: 0 }}>Client Satisfaction</p>
                      </div>
                      <div style={{ padding: '1.25rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                         <h3 style={{ fontSize: '2.5rem', color: 'var(--accent-primary)', marginBottom: '0.4rem', lineHeight: 1 }}>24/7</h3>
                         <p style={{ color: 'var(--text-secondary)', fontWeight: 500, fontSize: '0.9rem', margin: 0 }}>Global Support</p>
                      </div>
                   </div>

                   <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.08)', textAlign: 'left' }}>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                       <MapPin size={18} className="text-accent" />
                       <span style={{ fontSize: '0.95rem' }}>Headquartered in Jaipur, Rajasthan, India (302012)</span>
                     </div>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-primary)' }}>
                       <Award size={18} className="text-accent" />
                       <span style={{ fontSize: '0.95rem' }}>Full-Stack Engineering, Digital Marketing & CAD Services</span>
                     </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section" id="faq" style={{ position: 'relative', overflow: 'hidden', paddingTop: '20px', paddingBottom: '100px' }}>
        <div className="container" style={{ maxWidth: '850px', position: 'relative', zIndex: 1 }}>
          <div className="text-center animate-fade-in-up">
            <h2 className="section-title">Frequently Asked <span className="text-gradient">Questions</span></h2>
            <p className="section-subtitle mb-lg">
              Clear answers regarding our agency operations, technology stacks, pricing, and project workflows.
            </p>
          </div>

          <div className="faq-accordion mt-lg">
            {faqs.map((faq, idx) => (
              <div key={idx} className={`animate-fade-in-up delay-${(idx % 5) * 100}`}>
                <div 
                  className={`glass-card faq-item ${openIndex === idx ? 'open' : ''}`}
                  onClick={() => toggleAccordion(idx)}
                  style={{ marginBottom: '1rem' }}
                >
                   <div className="faq-question">
                     <h3 style={{ fontSize: '1.15rem' }}>{faq.q}</h3>
                     <div className="faq-icon">
                       <ChevronDown size={24} />
                     </div>
                   </div>
                   
                   <div className="faq-answer-wrapper">
                     <div className="faq-answer">
                       <p>{faq.a}</p>
                     </div>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
