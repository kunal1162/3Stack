import { SEOHead } from '../components/seo/SEOHead';
import { Link } from 'react-router-dom';

export default function Terms() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Terms of Service', url: '/terms' }
  ];

  return (
    <>
      <SEOHead
        title="Terms of Service | 3Stack"
        description="Review the terms and conditions governing professional services provided by 3Stack."
        keywords="Terms of Service, 3Stack Terms, 3Stack, 3 Stack, 3stack.in"
        breadcrumbs={breadcrumbs}
      />
      <section className="section" style={{ paddingTop: '140px', minHeight: '80vh' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: "1.5rem" }}>
            <ol style={{ display: "flex", gap: "0.5rem", listStyle: "none", padding: 0, margin: 0, fontSize: "0.875rem", color: "var(--text-secondary)" }}>
              <li><Link to="/" style={{ color: "var(--text-secondary)", textDecoration: "none" }}>Home</Link></li>
              <li>/</li>
              <li aria-current="page" style={{ color: "var(--accent-primary)", fontWeight: 600 }}>Terms of Service</li>
            </ol>
          </nav>

          <div className="animate-fade-in-up">
            <h1 className="section-title">Terms of <span className="text-gradient">Service</span></h1>
            <div className="glass-card mt-md" style={{ padding: 'clamp(2rem, 4vw, 3rem)', borderRadius: 'var(--radius-lg)' }}>
               <p style={{ color: 'var(--text-secondary)' }}>Last Updated: September 20, 2026</p>
               
               <h2 style={{ marginTop: '2rem', fontSize: '1.4rem' }}>1. Acceptance of Terms</h2>
               <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem', lineHeight: 1.8 }}>
                 By engaging 3Stack IT Agency ("3Stack", "Company", "we", "us") for custom software development, mobile application engineering, digital marketing, business automation, or AutoCAD drafting services, you agree to be bound by these Terms of Service.
               </p>
               
               <h2 style={{ marginTop: '2rem', fontSize: '1.4rem' }}>2. Scope of Services & Milestones</h2>
               <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem', lineHeight: 1.8 }}>
                 All client engagements are executed pursuant to a mutually agreed Statement of Work (SOW) or proposal outlining specific deliverables, milestone payment schedules, and project timelines. Changes to scope must be documented and agreed upon in writing.
               </p>

               <h2 style={{ marginTop: '2rem', fontSize: '1.4rem' }}>3. Intellectual Property & Code Ownership</h2>
               <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem', lineHeight: 1.8 }}>
                 Upon full receipt of project payments as specified in the agreed project agreement, full intellectual property rights and source code repositories for custom-developed software are transferred to the client.
               </p>

               <h2 style={{ marginTop: '2rem', fontSize: '1.4rem' }}>4. Confidentiality & Non-Disclosure</h2>
               <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem', lineHeight: 1.8 }}>
                 3Stack IT Agency treats all client trade secrets, proprietary workflows, and customer data with strict confidentiality. Non-Disclosure Agreements (NDAs) are executed prior to project initiation upon request.
               </p>

               <h2 style={{ marginTop: '2rem', fontSize: '1.4rem' }}>5. Contact Information</h2>
               <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem', lineHeight: 1.8 }}>
                 For inquiries regarding these terms, please contact legal support at <a href="mailto:3stacktech@gmail.com" style={{ color: 'var(--accent-primary)', textDecoration: 'underline' }}>3stacktech@gmail.com</a> or visit our office in Jaipur, Rajasthan, 302012, India.
               </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
