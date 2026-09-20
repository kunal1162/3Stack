import { SEOHead } from '../components/seo/SEOHead';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { serviceDetailsData } from '../data/servicesData';
import { ArrowLeft, CheckCircle2, HelpCircle } from 'lucide-react';

export default function ServiceDetails() {
  const { id } = useParams<{ id: string }>();
  
  if (!id || !serviceDetailsData[id]) {
    return <Navigate to="/services" replace />;
  }

  const service = serviceDetailsData[id];

  // Schema Generation
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'serviceType': service.title,
    'description': service.seoDescription,
    'provider': {
      '@type': 'LocalBusiness',
      'name': '3Stack IT Agency'
    }
  };

  const faqSchema = service.faqs ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq: any) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  } : null;

  return (
    <>
      <SEOHead
        title={service.seoTitle}
        description={service.seoDescription}
        keywords={service.seoKeywords}
        schema={faqSchema ? [serviceSchema, faqSchema] : [serviceSchema]}
      />
      <section className="section" style={{ paddingTop: '160px', minHeight: '80vh', position: 'relative', overflow: 'hidden' }}>
        {/* Glow Effects */}
        <div style={{ position: 'absolute', top: '0', left: '0', width: '500px', height: '500px', background: 'var(--accent-primary)', opacity: '0.05', filter: 'blur(120px)', zIndex: 0, borderRadius: '50%' }}></div>
        <div style={{ position: 'absolute', bottom: '0', right: '-10%', width: '600px', height: '600px', background: 'var(--accent-secondary)', opacity: '0.05', filter: 'blur(150px)', zIndex: 0, borderRadius: '50%' }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '900px' }}>
          <div className="animate-fade-in-up">
            <Link to="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', marginBottom: '2rem', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
              <ArrowLeft size={18} /> Back to Services
            </Link>
            
            <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', lineHeight: 1.2, marginBottom: '1.5rem' }}>{service.title}</h1>
            
            <div className="glass-card mt-lg" style={{ padding: 'clamp(2rem, 5vw, 4rem)', borderRadius: 'var(--radius-lg)' }}>
               {/* Answer-first section */}
               <div style={{ background: 'rgba(16, 185, 129, 0.05)', borderLeft: '4px solid var(--accent-primary)', padding: '1.5rem', marginBottom: '2rem', borderRadius: '0 8px 8px 0' }}>
                 <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>What is {service.title}?</h3>
                 <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>{service.whatIsIt}</p>
               </div>

               <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Overview</h2>
               <div 
                 style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.8 }}
                 dangerouslySetInnerHTML={{ __html: service.overview }}
               />

               {service.whoIsItFor && (
                 <div style={{ marginTop: '3rem' }}>
                   <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Who is it for?</h2>
                   <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>{service.whoIsItFor}</p>
                 </div>
               )}

               {service.problemsSolved && (
                 <div style={{ marginTop: '3rem' }}>
                   <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>What problems can it solve?</h2>
                   <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                     {service.problemsSolved.map((prob: string, index: number) => (
                       <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', color: 'var(--text-secondary)' }}>
                         <CheckCircle2 size={24} style={{ color: '#ef4444', flexShrink: 0, marginTop: '2px' }} />
                         <span style={{ fontSize: '1.05rem', lineHeight: 1.6 }}>{prob}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
               )}

               {service.workflow && (
                 <div style={{ marginTop: '3rem' }}>
                   <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Our Process</h2>
                   <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                     {service.workflow.map((step: any, index: number) => (
                       <div key={index} style={{ background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                         <h4 style={{ color: 'var(--accent-primary)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Step {index + 1}: {step.step}</h4>
                         <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>{step.description}</p>
                       </div>
                     ))}
                   </div>
                 </div>
               )}

               <h2 style={{ fontSize: '1.75rem', marginTop: '3rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Key Deliverables</h2>
               <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                 {service.deliverables.map((item: string, index: number) => (
                   <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', color: 'var(--text-secondary)' }}>
                     <CheckCircle2 size={24} className="text-accent" style={{ flexShrink: 0, marginTop: '2px' }} />
                     <span style={{ fontSize: '1.05rem', lineHeight: 1.6 }}>{item}</span>
                   </li>
                 ))}
               </ul>

               {service.technologies && (
                 <>
                   <h2 style={{ fontSize: '1.75rem', marginTop: '3rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Technologies We Use</h2>
                   <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                     {service.technologies.map((tech: string, index: number) => (
                       <span key={index} style={{ padding: '0.5rem 1rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--border-color)', borderRadius: '50px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                         {tech}
                       </span>
                     ))}
                     <span style={{ padding: '0.5rem 1rem', background: 'rgba(16, 185, 129, 0.1)', border: '1px dashed var(--accent-primary)', borderRadius: '50px', color: 'var(--accent-primary)', fontSize: '0.9rem', fontWeight: 500 }}>
                       + Custom Solutions
                     </span>
                   </div>
                 </>
               )}

               {service.faqs && (
                 <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border-color)' }}>
                   <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Frequently Asked Questions</h2>
                   <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                     {service.faqs.map((faq: any, index: number) => (
                       <div key={index}>
                         <h4 style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: 'var(--text-primary)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                           <HelpCircle size={20} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '2px' }} />
                           {faq.question}
                         </h4>
                         <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6, paddingLeft: '1.75rem' }}>{faq.answer}</p>
                       </div>
                     ))}
                   </div>
                 </div>
               )}

               <div className="text-center" style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border-color)' }}>
                  <h3 style={{ marginBottom: '1rem' }}>How do I get started with {service.title}?</h3>
                  <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>Contact 3Stack today to schedule a free consultation and get a custom quote for your project.</p>
                  <Button href="/contact" size="lg" variant="primary">Request a Quote for {service.title}</Button>
               </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
