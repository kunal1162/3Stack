import { useParams, Link } from 'react-router-dom';
import { SEOHead } from '../components/seo/SEOHead';
import { ArrowLeft, Clock, User, Share2 } from 'lucide-react';
import { blogs } from '../data/blogs';

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();

  // Find the blog article by slug
  const article = blogs.find(b => b.slug === slug);

  if (!article) {
    return (
      <section className="section" style={{ paddingTop: '160px', minHeight: '80vh', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Article Not Found</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>We couldn't find the article you were looking for.</p>
        <Link to="/blog" style={{ color: 'var(--accent-primary)', borderBottom: '1px solid var(--accent-primary)' }}>Return to Blog</Link>
      </section>
    );
  }

  return (
    <>
      <SEOHead
        title={article.title}
        description={article.seoDescription}
        keywords={article.seoKeywords}
        type="article"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          'headline': article.title,
          'image': article.image,
          'datePublished': new Date(article.date).toISOString(),
          'author': {
            '@type': 'Organization',
            'name': article.author
          },
          'publisher': {
            '@type': 'Organization',
            'name': '3Stack IT Agency',
            'logo': {
              '@type': 'ImageObject',
              'url': 'https://3stack.agency/3stack-logo.png'
            }
          }
        }}
      />
      <article className="section" style={{ position: 'relative', overflow: 'hidden', paddingTop: '160px', paddingBottom: '100px' }}>
        
        {/* Glow Effects */}
        <div style={{ position: 'absolute', top: '0', left: '0', width: '500px', height: '500px', background: 'var(--accent-primary)', opacity: '0.05', filter: 'blur(120px)', zIndex: 0, borderRadius: '50%' }}></div>
        <div style={{ position: 'absolute', bottom: '0', right: '-10%', width: '600px', height: '600px', background: 'var(--accent-secondary)', opacity: '0.05', filter: 'blur(150px)', zIndex: 0, borderRadius: '50%' }}></div>

        <div className="container" style={{ maxWidth: '800px', position: 'relative', zIndex: 1 }}>
          <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', marginBottom: '2rem', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
            <ArrowLeft size={18} /> Back to Blog
          </Link>

          <div className="animate-fade-in-up">
            <div className="inline-badge" style={{ display: 'inline-block', padding: '0.4rem 0.8rem', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '50px', color: 'var(--accent-primary)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '1.5rem' }}>
              {article.category}
            </div>
            
            <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', lineHeight: 1.2, marginBottom: '1.5rem' }}>
              {article.title}
            </h1>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><User size={16} /> {article.author}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Clock size={16} /> {article.date} &bull; {article.readTime}</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="animate-fade-in-up delay-100" style={{ width: '100%', height: '400px', borderRadius: 'var(--radius-lg)', backgroundImage: `url(${article.image})`, backgroundSize: 'cover', backgroundPosition: 'center', marginBottom: '4rem' }}></div>

          {/* Rich Text Content */}
          <div 
            className="blog-content animate-fade-in-up delay-200" 
            style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Footer Actions */}
          <div className="animate-fade-in-up delay-300" style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
             <p style={{ margin: 0, fontWeight: 600, color: 'var(--text-primary)' }}>Share this article</p>
             <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '50px', color: 'var(--text-primary)', cursor: 'pointer' }}>
               <Share2 size={16} /> Share
             </button>
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
