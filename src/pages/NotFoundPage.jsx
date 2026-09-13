import React from 'react';
import { useRouter, Link } from '../router';
import Button from '../components/Button';
import { AlertCircle, ArrowLeft, Home } from 'lucide-react';

export function NotFoundPage() {
  const { navigate } = useRouter();

  return (
    <div className="not-found-wrapper">
      <div className="container" style={{ textAlign: 'center', padding: '160px 20px' }}>
        <div className="about-hud-tag" style={{ justifyContent: 'center', marginBottom: '24px' }}>
          <span className="hud-indicator-dot" style={{ backgroundColor: '#EF4444' }} />
          <span className="hud-mono-label">// 404 ERROR</span>
          <span className="hud-divider">/</span>
          <span className="hud-mono-desc">PAGE NOT FOUND</span>
        </div>

        <h1 style={{ fontSize: 'clamp(40px, 8vw, 72px)', fontWeight: 800, marginBottom: '16px' }}>
          LOST IN <span style={{ color: 'var(--accent)' }}>CYBERSPACE.</span>
        </h1>

        <p style={{ color: 'var(--muted)', maxWidth: '520px', margin: '0 auto 36px', fontSize: '18px' }}>
          The page or system resource you are attempting to access does not exist or has been relocated to a different route.
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button variant="primary" magnetic onClick={() => navigate('/')}>
            <Home size={16} />
            <span>Return to Homepage</span>
          </Button>
          <Button variant="ghost-dark" magnetic onClick={() => navigate('/#services')}>
            <span>Explore Services</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
