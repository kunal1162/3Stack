import { SEOHead } from '../components/seo/SEOHead';
import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';

export default function Blog() {
  return (
    <>
      <SEOHead
        title="Blog & Insights | 3Stack"
        description="Read the latest insights, trends, and tutorials from the 3Stack digital team."
        keywords="IT Agency Blog, Tech Trends 2026, Web Development Articles, Digital Marketing Tips, SEO Guides, Custom Software Insights"
      />
      <section className="section" style={{ paddingTop: '160px', minHeight: '80vh' }}>
        <div className="container">
          <div className="text-center animate-fade-in-up">
            <h1 className="section-title">Insights & <span className="text-gradient">Articles</span></h1>
            <p className="section-subtitle mb-lg">
              Thoughts on technology, design, and business growth.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-md mt-lg">
            {blogs.map((post, idx) => (
              <Link to={`/blog/${post.slug}`} key={idx} className={`glass-card animate-fade-in-up delay-${idx * 100}`} style={{ padding: '0', overflow: 'hidden', borderRadius: 'var(--radius-lg)', transition: 'all 0.3s', display: 'block', textDecoration: 'none' }}>
                 <div style={{ height: '200px', backgroundImage: `url(${post.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                 <div style={{ padding: '2rem' }}>
                   <div style={{ color: 'var(--accent-primary)', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>{post.category} &bull; {post.date}</div>
                   <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{post.title}</h3>
                   <span style={{ color: 'var(--accent-primary)', fontWeight: 600, borderBottom: '1px solid var(--accent-primary)' }}>Read Article</span>
                 </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
