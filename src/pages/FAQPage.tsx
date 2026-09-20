import { useState } from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import { ChevronDown, Target } from 'lucide-react';
import './FAQ.css'; // Reuse existing FAQ styles if any

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: 'Brand & General',
      questions: [
        { q: 'What is 3Stack IT Agency?', a: '3Stack IT Agency is a premium software development and digital marketing agency based in India. We engineer custom web applications, build mobile apps, and execute AI-driven marketing campaigns to help businesses scale.' },
        { q: 'What services does 3Stack provide?', a: 'We provide Custom Web Development, Mobile App Development (iOS/Android), AI-driven Digital Marketing (SEO/PPC), Custom Software & Business Automation, UI/UX Design, and AutoCAD Drafting services.' },
        { q: 'Where is 3Stack located?', a: '3Stack IT Agency is headquartered in Jaipur, Rajasthan, India, but we serve ambitious startups and enterprise clients globally.' },
        { q: 'Who does 3Stack serve?', a: 'We serve B2B enterprises, SaaS startups, e-commerce brands, and any business that requires high-performance digital platforms or data-driven marketing to outpace their competitors.' },
        { q: 'What makes 3Stack different?', a: 'Unlike traditional agencies that rely on templates, 3Stack focuses on custom engineering and AI-driven strategies. We blend deep technical architecture with conversion-optimized design to deliver measurable ROI.' }
      ]
    },
    {
      category: 'Web & Custom Software Development',
      questions: [
        { q: 'What does a web development agency do?', a: 'A web development agency engineers the architecture, design, and functionality of websites and web applications. At 3Stack, we go beyond basic websites to build highly scalable, custom SaaS platforms and enterprise portals.' },
        { q: 'Does 3Stack develop custom software?', a: 'Yes. 3Stack develops bespoke software solutions, replacing manual workflows with custom API integrations and automated CRM systems tailored precisely to your operational needs.' },
        { q: 'What business problems can custom software solve?', a: 'Custom software solves critical inefficiencies like manual data entry errors, siloed tools that don\'t communicate, slow response times, and the inability to scale operations with generic off-the-shelf software.' },
        { q: 'Does 3Stack build e-commerce websites?', a: 'Yes, we build secure, scalable e-commerce platforms capable of handling high traffic and complex inventory systems using modern tech stacks like React and Node.js.' }
      ]
    },
    {
      category: 'Digital Marketing & SEO',
      questions: [
        { q: 'What does a digital marketing agency provide?', a: 'A digital marketing agency provides strategies to acquire customers online. 3Stack specifically provides technical SEO, AI-driven content strategies, targeted PPC (Pay-Per-Click) campaigns, and conversion rate optimization (CRO).' },
        { q: 'What is AI-driven SEO?', a: 'AI-driven SEO utilizes artificial intelligence tools to analyze search intent gaps, structure authoritative content, and map semantic relationships faster and more accurately than traditional manual SEO methods.' },
        { q: 'Does 3Stack provide SEO and PPC?', a: 'Yes. We offer comprehensive Search Engine Optimization (SEO) to build long-term organic traffic, and Pay-Per-Click (PPC) advertising on Google and Meta for immediate lead generation and sales.' },
        { q: 'What services should a business expect from a digital marketing agency?', a: 'You should expect a data-backed strategy, transparent attribution reporting, technical website optimization, and a clear focus on lowering your Customer Acquisition Cost (CAC) while increasing lifetime value.' }
      ]
    }
  ];

  // Flatten for schema
  const allQuestions = faqs.flatMap(cat => cat.questions);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allQuestions.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a
      }
    }))
  };

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  let globalIndex = 0;

  return (
    <>
      <SEOHead
        title="Frequently Asked Questions"
        description="Get answers to common questions about 3Stack IT Agency, our custom software development, web design, and digital marketing services."
        keywords="3Stack FAQ, Web Development Questions, Digital Marketing Agency FAQ, Custom Software Solutions"
        schema={faqSchema}
      />
      <section className="section" style={{ position: 'relative', overflow: 'hidden', paddingTop: '160px', paddingBottom: '100px', minHeight: '100vh' }}>
        
        {/* Glow Effects */}
        <div style={{ position: 'absolute', top: '0', left: '0', width: '500px', height: '500px', background: 'var(--accent-primary)', opacity: '0.1', filter: 'blur(120px)', zIndex: 0, borderRadius: '50%' }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '900px' }}>
          
          <div className="text-center animate-fade-in-up" style={{ marginBottom: '4rem' }}>
            <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', lineHeight: 1.1 }}>
              Frequently Asked <span className="text-gradient">Questions</span>
            </h1>
            <p className="section-subtitle mt-md" style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', lineHeight: 1.6 }}>
              Comprehensive answers about our agency, services, and how we can help scale your business.
            </p>
          </div>

          <div className="faq-accordion mt-lg">
            {faqs.map((category, catIdx) => (
              <div key={catIdx} style={{ marginBottom: '3rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                  <Target size={24} className="text-accent" />
                  <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>{category.category}</h2>
                </div>
                
                {category.questions.map((faq) => {
                  const currentIndex = globalIndex++;
                  return (
                    <div key={currentIndex} className={`animate-fade-in-up delay-${(currentIndex % 5) * 100}`}>
                      <div 
                        className={`glass-card faq-item ${openIndex === currentIndex ? 'open' : ''}`}
                        onClick={() => toggleAccordion(currentIndex)}
                        style={{ cursor: 'pointer', marginBottom: '1rem' }}
                      >
                         <div className="faq-question">
                           <h3 style={{ fontSize: '1.1rem', paddingRight: '2rem' }}>{faq.q}</h3>
                           <div className="faq-icon" style={{ position: 'absolute', right: '1.5rem', top: '50%', transform: 'translateY(-50%)' }}>
                             <ChevronDown size={20} />
                           </div>
                         </div>
                         
                         {openIndex === currentIndex && (
                           <div className="faq-answer-wrapper" style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                             <div className="faq-answer">
                               <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{faq.a}</p>
                             </div>
                           </div>
                         )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
