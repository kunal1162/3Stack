import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, Layers, Cpu, ShieldCheck } from 'lucide-react';
import Button from './Button';

export function DetailModal({ isOpen, onClose, data, onActionClick }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.__lenis?.stop();
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      window.__lenis?.start();
    }
    return () => {
      document.body.style.overflow = '';
      window.__lenis?.start();
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !data) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        backgroundColor: 'rgba(4, 12, 24, 0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        animation: 'fadeIn 0.3s ease forwards',
      }}
      data-lenis-prevent
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '680px',
          maxHeight: '90vh',
          overflowY: 'auto',
          backgroundColor: '#091420',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-l)',
          padding: '36px',
          boxShadow: '0 24px 64px -12px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(0, 199, 158, 0.2)',
          color: 'var(--fg)',
        }}
        data-lenis-prevent
      >
        <button
          onClick={onClose}
          aria-label="Close dialog"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#12212F',
            color: 'var(--muted)',
            border: '1px solid var(--border)',
            cursor: 'pointer',
            transition: 'color 0.2s, border-color 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--fg)';
            e.currentTarget.style.borderColor = 'var(--accent)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--muted)';
            e.currentTarget.style.borderColor = 'var(--border)';
          }}
        >
          <X size={18} />
        </button>

        {data.tag && (
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 10px',
              borderRadius: 'var(--radius-s)',
              backgroundColor: 'rgba(0, 199, 158, 0.1)',
              border: '1px solid rgba(0, 199, 158, 0.3)',
              color: 'var(--accent)',
              fontSize: '12px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              marginBottom: '16px',
            }}
          >
            {data.tag}
          </div>
        )}

        <h3 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '12px' }}>
          {data.title}
        </h3>

        {data.imageSrc && (
          <div
            style={{
              width: '100%',
              height: '220px',
              borderRadius: 'var(--radius-s)',
              overflow: 'hidden',
              marginBottom: '20px',
              border: '1px solid var(--border)',
              position: 'relative',
              backgroundColor: '#050D17',
            }}
          >
            <img
              src={data.imageSrc}
              alt={data.imageAlt || data.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
              loading="lazy"
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(180deg, transparent 40%, rgba(9, 20, 32, 0.75) 100%)',
                pointerEvents: 'none',
              }}
            />
          </div>
        )}

        <p style={{ color: 'var(--muted)', fontSize: '16px', lineHeight: 1.65, marginBottom: '28px' }}>
          {data.description}
        </p>

        {data.deliverables && (
          <div style={{ marginBottom: '28px' }}>
            <h4 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.04em', marginBottom: '14px', textTransform: 'uppercase' }}>
              Key Deliverables & Specifications
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '10px' }}>
              {data.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    backgroundColor: '#12212F',
                    border: '1px solid var(--border)',
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-s)',
                    fontSize: '13.5px',
                  }}
                >
                  <CheckCircle2 size={16} color="var(--accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {data.techStack && (
          <div style={{ marginBottom: '32px' }}>
            <h4 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--muted)', letterSpacing: '0.04em', marginBottom: '12px', textTransform: 'uppercase' }}>
              Technology Stack
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {data.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  style={{
                    padding: '6px 12px',
                    fontSize: '12.5px',
                    fontWeight: 600,
                    borderRadius: 'var(--radius-s)',
                    backgroundColor: '#1C3040',
                    color: 'var(--fg)',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border)', paddingTop: '20px' }}>
          <span style={{ fontSize: '13px', color: 'var(--muted)' }}>
            Ready to architect your solution?
          </span>
          <Button
            variant="primary"
            onClick={() => {
              onClose();
              if (onActionClick) onActionClick(data.title);
            }}
          >
            Start Project with this Spec
            <ArrowRight size={15} />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DetailModal;
