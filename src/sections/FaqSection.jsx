import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { HOMEPAGE_FAQS } from '../data/faqsData';
import { ChevronDown, Sparkles, HelpCircle, MessageSquare } from 'lucide-react';
import Button from '../components/Button';

gsap.registerPlugin(ScrollTrigger);

export function FaqSection({ onOpenContact }) {
  const [openIndex, setOpenIndex] = useState(0);
  const sectionRef = useRef(null);
  const faqListRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from('.faq-item-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        y: 24,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section className="faq-section" id="faq" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="faq-section-head">
          <div className="about-hud-tag">
            <span className="hud-indicator-dot" />
            <span className="hud-mono-label">// KNOWLEDGE BASE</span>
            <span className="hud-divider">/</span>
            <span className="hud-mono-desc">QUESTIONS &amp; DIRECT ANSWERS</span>
          </div>

          <h2 className="faq-main-title">
            Frequently Asked Questions.
          </h2>

          <p className="faq-lead-text">
            Straightforward answers about what we do, how we work, and how our solutions help your business build, grow, and automate.
          </p>
        </div>

        {/* Accordion FAQ Grid */}
        <div className="faq-list-grid" ref={faqListRef}>
          {HOMEPAGE_FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className={`faq-item-card ${isOpen ? 'is-open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  id={`faq-btn-${faq.id}`}
                >
                  <div className="faq-question-title-group">
                    <span className="faq-question-num">{String(index + 1).padStart(2, '0')}</span>
                    <h3 className="faq-question-text">{faq.question}</h3>
                  </div>
                  <span className="faq-chevron-icon" aria-hidden="true">
                    <ChevronDown size={18} />
                  </span>
                </button>

                <div
                  id={`faq-answer-${faq.id}`}
                  role="region"
                  aria-labelledby={`faq-btn-${faq.id}`}
                  className="faq-answer-collapse"
                  style={{
                    maxHeight: isOpen ? '400px' : '0px',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="faq-answer-inner">
                    <p className="faq-answer-summary">{faq.shortAnswer}</p>
                    <p className="faq-answer-detail">{faq.detailedAnswer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Direct Inquiry Support Card */}
        <div className="faq-bottom-cta">
          <div className="faq-cta-content">
            <div className="faq-cta-icon-box">
              <MessageSquare size={20} color="var(--accent)" />
            </div>
            <div>
              <h4 className="faq-cta-title">Have a specific question about your project?</h4>
              <p className="faq-cta-desc">
                We are happy to answer any technical or operational questions without sales pressure.
              </p>
            </div>
          </div>
          <Button
            variant="primary"
            magnetic
            onClick={() => onOpenContact()}
          >
            Ask Us Anything
          </Button>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
