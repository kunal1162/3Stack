import { useState } from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import { Button } from '../components/ui/Button';
import { CheckCircle2, Target, ChevronDown } from 'lucide-react';
import './FAQ.css';

export default function About() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { 
      q: 'What exactly does 3Stack do?',
      a: 'We are a full-service digital agency. We specialize in building high-performance web applications, mobile apps, executing data-driven digital marketing campaigns, setting up business automation systems, and providing professional AutoCAD drafting services.' 
    },
    { 
      q: 'How long does a website or app take to build?', 
      a: 'Depending on the complexity, a standard corporate website takes 4-6 weeks to design and develop. Complex web platforms or mobile applications typically take 3-6 months to launch your MVP (Minimum Viable Product).' 
    },
    { 
      q: 'Do you provide ongoing maintenance and support after launch?', 
      a: 'Absolutely! We believe in long-term partnerships. We offer flexible maintenance and support retainers to keep your digital assets secure, up-to-date, and optimized as your business grows.' 
    },
    { 
      q: 'What is your pricing model?', 
      a: 'We offer fixed project-based pricing for clear, well-defined scopes. For ongoing work, marketing campaigns, or highly fluid development requirements, we offer competitive hourly rates or dedicated monthly retainers.' 
    },
    { 
      q: 'Do you work with startups or only established enterprises?', 
      a: 'Both! We love working with ambitious startups to build their initial MVPs and scale their technology from the ground up. We also have the capacity and security protocols required to handle complex enterprise migrations.' 
    },
    { 
      q: 'How do you handle SEO and Digital Marketing?', 
      a: 'We bake technical SEO into the foundation of every website we build. Post-launch, our marketing team executes comprehensive strategies including content marketing, PPC (Google/Meta Ads), and organic social growth to drive real conversion.' 
    },
    { 
      q: 'How do we get started?', 
      a: 'Simply head over to our Contact page and drop us a message with your project details. We will schedule a free 30-minute discovery call to understand your goals and see if we are a good fit!' 
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
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
        description="Learn more about 3Stack, our mission, and the team behind our premium digital solutions."
        keywords="About 3Stack, Digital Agency Team, IT Agency India, Premium Web Developers, Expert App Developers, UI/UX Experts, Tech Startup Partner"
        schema={faqSchema}
      />
      <section className="section" style={{ position: 'relative', overflow: 'hidden', paddingTop: '160px', paddingBottom: '100px', minHeight: '100vh' }}>
        
        {/* Glow Effects */}
        <div style={{ position: 'absolute', top: '0', left: '0', width: '500px', height: '500px', background: 'var(--accent-primary)', opacity: '0.1', filter: 'blur(120px)', zIndex: 0, borderRadius: '50%' }}></div>
        <div style={{ position: 'absolute', bottom: '20%', right: '-10%', width: '600px', height: '600px', background: 'var(--accent-secondary)', opacity: '0.1', filter: 'blur(150px)', zIndex: 0, borderRadius: '50%' }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          
          {/* Header */}
          <div className="text-center animate-fade-in-up" style={{ maxWidth: '1000px', margin: '0 auto 2.5rem auto' }}>
            <div className="inline-badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '50px', color: 'var(--accent-primary)', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1.5rem' }}>
              Who We Are
            </div>
            
            <h1 className="section-title" style={{ fontSize: 'clamp(3rem, 5vw, 4rem)', lineHeight: 1.1 }}>
              About <span className="text-gradient">3Stack IT Agency</span>
            </h1>
            <p className="section-subtitle mt-md" style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', lineHeight: 1.6 }}>
              We are a collective of developers, designers, and strategists passionate about building digital experiences that drive real business growth and streamline operations.
            </p>
          </div>

          {/* Hero Image */}
          <div className="animate-fade-in-up delay-100" style={{ marginBottom: '6rem', width: '100%', height: '400px', borderRadius: 'var(--radius-lg)', backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', overflow: 'hidden' }}>
             <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(7,7,7,0.8) 0%, transparent 100%)' }}></div>
          </div>

          <div className="grid grid-cols-2 gap-xl items-center mt-xl">
             <div className="animate-fade-in-up delay-200">
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', fontWeight: 600, marginBottom: '1rem' }}>
                  <Target size={20} /> Our Mission
                </div>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>Building Partnerships, <br/>Not Just Projects.</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                   To empower businesses with cutting-edge technology, stunning design, and data-driven strategies that elevate their brand and streamline their operations. We don't just deliver code; we deliver measurable impact.
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-primary)' }}><CheckCircle2 size={20} className="text-accent" /> Relentless Innovation</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-primary)' }}><CheckCircle2 size={20} className="text-accent" /> Data-Driven Decisions</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-primary)' }}><CheckCircle2 size={20} className="text-accent" /> Uncompromised Quality</li>
                </ul>
                <Button href="/contact" size="lg">Work With Us</Button>
             </div>
             
             <div className="animate-fade-in-up delay-300">
                <div className="glass-card" style={{ padding: '3rem', borderRadius: 'var(--radius-lg)', position: 'relative', overflow: 'hidden' }}>
                   {/* Card inner glow */}
                   <div style={{ position: 'absolute', top: '-50%', right: '-50%', width: '100%', height: '100%', background: 'radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)' }}></div>
                   
                   <div className="grid grid-cols-2 gap-lg text-center" style={{ position: 'relative', zIndex: 1 }}>
                      <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                         <h3 style={{ fontSize: '3rem', color: 'var(--accent-primary)', marginBottom: '0.5rem', lineHeight: 1 }}>50+</h3>
                         <p style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>Projects Delivered</p>
                      </div>
                      <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                         <h3 style={{ fontSize: '3rem', color: 'var(--accent-primary)', marginBottom: '0.5rem', lineHeight: 1 }}>15+</h3>
                         <p style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>Team Members</p>
                      </div>
                      <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                         <h3 style={{ fontSize: '3rem', color: 'var(--accent-primary)', marginBottom: '0.5rem', lineHeight: 1 }}>99%</h3>
                         <p style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>Client Satisfaction</p>
                      </div>
                      <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                         <h3 style={{ fontSize: '3rem', color: 'var(--accent-primary)', marginBottom: '0.5rem', lineHeight: 1 }}>24/7</h3>
                         <p style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>Global Support</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section" id="faq" style={{ position: 'relative', overflow: 'hidden', paddingTop: '40px', paddingBottom: '100px' }}>
        <div className="container" style={{ maxWidth: '800px', position: 'relative', zIndex: 1 }}>
          <div className="text-center animate-fade-in-up">
            <h2 className="section-title">Frequently Asked <span className="text-gradient">Questions</span></h2>
            <p className="section-subtitle mb-lg">
              Everything you need to know about working with us.
            </p>
          </div>

          <div className="faq-accordion mt-lg">
            {faqs.map((faq, idx) => (
              <div key={idx} className={`animate-fade-in-up delay-${(idx % 5) * 100}`}>
                <div 
                  className={`glass-card faq-item ${openIndex === idx ? 'open' : ''}`}
                  onClick={() => toggleAccordion(idx)}
                >
                   <div className="faq-question">
                     <h3>{faq.q}</h3>
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
