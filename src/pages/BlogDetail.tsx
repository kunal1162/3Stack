import { useParams, Link } from 'react-router-dom';
import { SEOHead } from '../components/seo/SEOHead';
import { ArrowLeft, Clock, User, Share2, Sparkles, ArrowRight } from 'lucide-react';
import { blogs } from '../data/blogs';
import { serviceDetailsData } from '../data/servicesData';
import { Button } from '../components/ui/Button';

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();

  // Find the blog article by slug
  const article = blogs.find(b => b.slug === slug);

  if (!article) {
    return (
      <section className="section" style={{ paddingTop: '160px', minHeight: '80vh', textAlign: 'center' }}>
        <SEOHead
          title="Article Not Found | 3Stack IT Agency"
          description="The requested article does not exist."
          noindex={true}
        />
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Article Not Found</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>We couldn't find the article you were looking for.</p>
        <Link to="/blog" style={{ color: 'var(--accent-primary)', borderBottom: '1px solid var(--accent-primary)' }}>Return to Blog</Link>
      </section>
    );
  }

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: article.title, url: `/blog/${article.slug}` }
  ];

  const canonicalUrl = `https://3stack.in/blog/${article.slug}`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${canonicalUrl}/#article`,
    'mainEntityOfPage': canonicalUrl,
    'headline': article.title,
    'description': article.seoDescription,
    'image': article.image,
    'datePublished': article.dateISO,
    'dateModified': article.dateModified,
    'author': {
      '@type': 'Organization',
      '@id': 'https://3stack.in/#organization',
      'name': article.author,
      'url': 'https://3stack.in'
    },
    'publisher': {
      '@type': 'Organization',
      '@id': 'https://3stack.in/#organization',
      'name': '3Stack',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://3stack.in/3stack-logo.png'
      }
    }
  };

  const relatedServices = (article.relatedServiceIds || [])
    .map(id => serviceDetailsData[id])
    .filter(Boolean);

  const otherBlogs = blogs.filter(b => b.slug !== slug).slice(0, 2);

  return (
    <>
      <SEOHead
        title={article.title}
        description={article.seoDescription}
        keywords={article.seoKeywords}
        type="article"
        canonicalUrl={canonicalUrl}
        ogImage={article.image}
        breadcrumbs={breadcrumbs}
        schema={articleSchema}
      />
      <article className="section" style={{ position: 'relative', overflow: 'hidden', paddingTop: '140px', paddingBottom: '100px' }}>
        
        {/* Glow Effects */}
        <div style={{ position: 'absolute', top: '0', left: '0', width: '500px', height: '500px', background: 'var(--accent-primary)', opacity: '0.05', filter: 'blur(120px)', zIndex: 0, borderRadius: '50%' }}></div>
        <div style={{ position: 'absolute', bottom: '0', right: '-10%', width: '600px', height: '600px', background: 'var(--accent-secondary)', opacity: '0.05', filter: 'blur(150px)', zIndex: 0, borderRadius: '50%' }}></div>

        <div className="container" style={{ maxWidth: '850px', position: 'relative', zIndex: 1 }}>
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: '1.5rem' }}>
            <ol style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', listStyle: 'none', padding: 0, margin: 0, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              <li><Link to="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Home</Link></li>
              <li>/</li>
              <li><Link to="/blog" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Blog</Link></li>
              <li>/</li>
              <li aria-current="page" style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>{article.title}</li>
            </ol>
          </nav>

          <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
            <ArrowLeft size={18} /> Back to Blog
          </Link>

          <div className="animate-fade-in-up">
            <div className="inline-badge" style={{ display: 'inline-block', padding: '0.4rem 0.8rem', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '50px', color: 'var(--accent-primary)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '1.25rem' }}>
              {article.category}
            </div>
            
            <h1 style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', lineHeight: 1.2, marginBottom: '1.5rem' }}>
              {article.title}
            </h1>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><User size={16} /> {article.author}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Clock size={16} /> {article.date} &bull; {article.readTime}</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="animate-fade-in-up delay-100" style={{ width: '100%', height: '400px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '3.5rem' }}>
            <img 
              src={article.image} 
              alt={article.title} 
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
            />
          </div>

          {/* Rich Text Content */}
          <div 
            className="blog-content animate-fade-in-up delay-200" 
            style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Footer Share Action */}
          <div className="animate-fade-in-up delay-300" style={{ marginTop: '3.5rem', paddingTop: '2rem', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
             <p style={{ margin: 0, fontWeight: 600, color: 'var(--text-primary)' }}>Share this article</p>
             <button 
               onClick={() => {
                 if (navigator.share) {
                   navigator.share({ title: article.title, url: window.location.href });
                 } else {
                   navigator.clipboard.writeText(window.location.href);
                   alert('Link copied to clipboard!');
                 }
               }} 
               style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '50px', color: 'var(--text-primary)', cursor: 'pointer' }}
             >
               <Share2 size={16} /> Share
             </button>
          </div>

          {/* Related Services (Topical Authority Cluster) */}
          {relatedServices.length > 0 && (
            <div style={{ marginTop: '4rem', padding: '2.5rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 'var(--radius-lg)' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', fontWeight: 600, marginBottom: '0.5rem' }}>
                <Sparkles size={18} />
                <span>Recommended Solutions</span>
              </div>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '1.25rem', color: 'var(--text-primary)' }}>Featured Services Mentioned</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                {relatedServices.map((svc) => (
                  <Link 
                    key={svc.id} 
                    to={`/services/${svc.id}`} 
                    className="glass-card" 
                    style={{ padding: '1.25rem', borderRadius: '10px', textDecoration: 'none', display: 'block' }}
                  >
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '0.4rem' }}>{svc.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.5, margin: 0 }}>{svc.shortDescription}</p>
                    <span style={{ display: 'inline-block', marginTop: '0.75rem', color: 'var(--accent-primary)', fontSize: '0.85rem', fontWeight: 600 }}>Explore Service &rarr;</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* More Articles */}
          {otherBlogs.length > 0 && (
            <div style={{ marginTop: '4rem' }}>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Continue Reading</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {otherBlogs.map((b) => (
                  <Link 
                    key={b.slug} 
                    to={`/blog/${b.slug}`} 
                    className="glass-card" 
                    style={{ padding: '1.5rem', borderRadius: 'var(--radius-lg)', textDecoration: 'none', display: 'block' }}
                  >
                    <span style={{ color: 'var(--accent-primary)', fontSize: '0.8rem', fontWeight: 600 }}>{b.category}</span>
                    <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', margin: '0.5rem 0' }}>{b.title}</h3>
                    <span style={{ color: 'var(--accent-primary)', fontSize: '0.85rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>Read Now <ArrowRight size={14} /></span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Direct CTA */}
          <div className="text-center" style={{ marginTop: '4rem', padding: '3rem 2rem', background: 'linear-gradient(135deg, rgba(16,185,129,0.05) 0%, rgba(255,255,255,0.02) 100%)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <h2 style={{ fontSize: '1.85rem', marginBottom: '0.75rem' }}>Ready to Elevate Your Digital Ecosystem?</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '550px', margin: '0 auto 1.5rem auto' }}>
              Partner with 3Stack IT Agency for custom engineering, digital marketing, and automated workflows.
            </p>
            <Button href="/contact" size="lg" variant="primary">Start Your Project</Button>
          </div>

        </div>
      </article>

      <style>{`
        .blog-content h2 {
          color: var(--text-primary);
          font-size: 1.75rem;
          margin-top: 3rem;
          margin-bottom: 1rem;
        }
        .blog-content p {
          margin-bottom: 1.5rem;
        }
        .blog-content strong {
          color: var(--text-primary);
        }
        .blog-content blockquote {
          font-size: 1.25rem;
          font-style: italic;
          border-left: 4px solid var(--accent-primary);
          padding-left: 1.5rem;
          margin: 3rem 0;
          color: var(--text-primary);
        }
      `}</style>
    </>
  );
}
