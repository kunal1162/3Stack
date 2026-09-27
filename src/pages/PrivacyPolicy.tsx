import { SEOHead } from '../components/seo/SEOHead';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Privacy Policy', url: '/privacy' }
  ];

  return (
    <>
      <SEOHead
        title="Privacy Policy | 3Stack"
        description="Learn how 3Stack collects, protects, and handles personal and commercial data across our web services."
        keywords="Privacy Policy, 3Stack Privacy, 3Stack, 3 Stack, 3stack.in"
        breadcrumbs={breadcrumbs}
      />
      <section className="section" style={{ paddingTop: '140px', minHeight: '80vh' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: "1.5rem" }}>
            <ol style={{ display: "flex", gap: "0.5rem", listStyle: "none", padding: 0, margin: 0, fontSize: "0.875rem", color: "var(--text-secondary)" }}>
              <li><Link to="/" style={{ color: "var(--text-secondary)", textDecoration: "none" }}>Home</Link></li>
              <li>/</li>
              <li aria-current="page" style={{ color: "var(--accent-primary)", fontWeight: 600 }}>Privacy Policy</li>
            </ol>
          </nav>

          <div className="animate-fade-in-up">
            <h1 className="section-title">Privacy <span className="text-gradient">Policy</span></h1>
            <div className="glass-card mt-md" style={{ padding: 'clamp(2rem, 4vw, 3rem)', borderRadius: 'var(--radius-lg)' }}>
               <p style={{ color: 'var(--text-secondary)' }}>Last Updated: September 20, 2026</p>
               
               <h2 style={{ marginTop: '2rem', fontSize: '1.4rem' }}>1. Overview & Scope</h2>
               <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem', lineHeight: 1.8 }}>
                 3Stack IT Agency ("we", "our", "us") values your privacy. This Privacy Policy details how we collect, store, and safeguard information gathered through our website (<a href="https://3stack.in" style={{ color: 'var(--accent-primary)' }}>https://3stack.in</a>) and client communications.
               </p>

               <h2 style={{ marginTop: '2rem', fontSize: '1.4rem' }}>2. Information We Collect</h2>
               <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem', lineHeight: 1.8 }}>
                 We collect information provided directly by you when submitting project inquiry forms (full name, corporate email address, phone number, and project descriptions). We also collect non-personally identifiable technical telemetry (browser type, device specifications, and page interaction metrics) to improve site performance.
               </p>

               <h2 style={{ marginTop: '2rem', fontSize: '1.4rem' }}>3. How We Use Collected Information</h2>
               <ul style={{ color: 'var(--text-secondary)', marginTop: '0.75rem', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
                 <li>To provide formal project estimates, proposals, and technical consultations.</li>
                 <li>To execute contractual client service agreements and communicate project milestones.</li>
                 <li>To analyze website usage patterns and optimize Core Web Vitals and user experience.</li>
                 <li>We never sell, lease, or monetize your contact or proprietary project data to third-party brokers.</li>
               </ul>

               <h2 style={{ marginTop: '2rem', fontSize: '1.4rem' }}>4. Data Security Standards</h2>
               <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem', lineHeight: 1.8 }}>
                 We implement industry-standard administrative, technical, and physical safeguards—including SSL/TLS 256-bit encryption for all data in transit—to protect your personal information against unauthorized access, disclosure, or destruction.
               </p>

               <h2 style={{ marginTop: '2rem', fontSize: '1.4rem' }}>5. Contact Our Data Protection Lead</h2>
               <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem', lineHeight: 1.8 }}>
                 If you have questions regarding this Privacy Policy or wish to request data deletion, please contact us at <a href="mailto:3stacktech@gmail.com" style={{ color: 'var(--accent-primary)', textDecoration: 'underline' }}>3stacktech@gmail.com</a> or via mail to 3Stack IT Agency, Jaipur, Rajasthan, 302012, India.
               </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
