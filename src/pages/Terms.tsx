import { SEOHead } from '../components/seo/SEOHead';

export default function Terms() {
  return (
    <>
      <SEOHead
        title="Terms of Service"
        description="Terms and conditions for using 3Stack services."
      />
      <section className="section" style={{ paddingTop: '160px', minHeight: '80vh' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="animate-fade-in-up">
            <h1 className="section-title">Terms of <span className="text-gradient">Service</span></h1>
            <div className="glass-card mt-md" style={{ padding: '3rem', borderRadius: 'var(--radius-lg)' }}>
               <p style={{ color: 'var(--text-secondary)' }}>Last Updated: {new Date().toLocaleDateString()}</p>
               <h3 style={{ marginTop: '2rem' }}>1. Acceptance of Terms</h3>
               <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', lineHeight: 1.8 }}>
                 By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.
               </p>
               {/* Add more terms content as needed */}
               <h3 style={{ marginTop: '2rem' }}>2. Provision of Services</h3>
               <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', lineHeight: 1.8 }}>
                 We reserve the right to modify or discontinue the service with or without notice to you. We shall not be liable to you or any third party should we exercise our right to modify or discontinue the service.
               </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
