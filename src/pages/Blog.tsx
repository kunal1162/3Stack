import { SEOHead } from '../components/seo/SEOHead';
import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';

export default function Blog() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' }
  ];

  return (
    <>
      <SEOHead
        title="Blog & Insights | 3Stack"
        description="Read in-depth technical insights, architectural guides, and digital marketing strategies from 3Stack."
        keywords="3Stack blog, 3Stack, 3 Stack, 3stack.in, IT Agency Blog, Tech Trends 2026, Web Development Articles, Digital Marketing Tips, SEO Guides, Custom Software Insights"
        breadcrumbs={breadcrumbs}
      />
      <section className="section" style={{ paddingTop: '140px', minHeight: '80vh' }}>
        <div className="container">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
            <ol style={{ display: 'flex', gap: '0.5rem', listStyle: 'none', padding: 0, margin: 0, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              <li><Link to="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Home</Link></li>
              <li>/</li>
              <li aria-current="page" style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>Blog</li>
            </ol>
          </nav>

          <div className="text-center animate-fade-in-up">
            <h1 className="section-title">Insights & <span className="text-gradient">Articles</span></h1>
            <p className="section-subtitle mb-lg">
              Expert perspectives on engineering architecture, AI marketing, and enterprise software growth.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-md mt-lg">
            {blogs.map((post, idx) => (
              <article key={idx}>
                <Link to={`/blog/${post.slug}`} className={`glass-card animate-fade-in-up delay-${idx * 100}`} style={{ padding: '0', overflow: 'hidden', borderRadius: 'var(--radius-lg)', transition: 'all 0.3s', display: 'block', textDecoration: 'none', height: '100%' }}>
                  <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                    <img 
                      src={post.image} 
                      alt={`${post.title} - 3Stack IT Agency`} 
                      loading="lazy" 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
                    />
                  </div>
                  <div style={{ padding: '2rem' }}>
                    <div style={{ color: 'var(--accent-primary)', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>{post.category} &bull; {post.date}</div>
                    <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-primary)', lineHeight: 1.4 }}>{post.title}</h2>
                    <span style={{ color: 'var(--accent-primary)', fontWeight: 600, borderBottom: '1px solid var(--accent-primary)' }}>Read Article &rarr;</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
