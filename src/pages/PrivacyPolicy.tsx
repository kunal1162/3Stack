import { SEOHead } from '../components/seo/SEOHead';

export default function PrivacyPolicy() {
  return (
    <>
      <SEOHead
        title="Privacy Policy"
        description="Privacy policy for 3Stack."
      />
      <section className="section" style={{ paddingTop: '160px', minHeight: '80vh' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="animate-fade-in-up">
            <h1 className="section-title">Privacy <span className="text-gradient">Policy</span></h1>
            <div className="glass-card mt-md" style={{ padding: '3rem', borderRadius: 'var(--radius-lg)' }}>
               <p style={{ color: 'var(--text-secondary)' }}>Last Updated: {new Date().toLocaleDateString()}</p>
               <h3 style={{ marginTop: '2rem' }}>Information Collection And Use</h3>
               <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', lineHeight: 1.8 }}>
                 We collect several different types of information for various purposes to provide and improve our Service to you.
               </p>
               {/* Add more privacy policy content as needed */}
               <h3 style={{ marginTop: '2rem' }}>Contact Us</h3>
               <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', lineHeight: 1.8 }}>
                 If you have any questions about this Privacy Policy, please contact us.
               </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
