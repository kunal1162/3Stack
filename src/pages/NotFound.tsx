import { useNavigate } from 'react-router-dom';
import { SEOHead } from '../components/seo/SEOHead';
import { Button } from '../components/ui/Button';

export default function NotFound() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    // If there's a history stack, go back; otherwise fall back to home
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <>
      <SEOHead
        title="Page Not Found"
        description="The page you are looking for does not exist."
        noindex={true}
      />
      <section className="section" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="container text-center animate-fade-in-up">
          <h1 style={{ fontSize: '6rem', color: 'var(--accent-primary)', marginBottom: '1rem' }}>404</h1>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Page Not Found</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button onClick={handleGoBack} variant="outline">Go Back</Button>
            <Button href="/">Return Home</Button>
          </div>
        </div>
      </section>
    </>
  );
}
