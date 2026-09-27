import { SEOHead } from "../components/seo/SEOHead";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";

export default function Work() {
  const projects = [
    {
      title: "Modern Invitation Card",
      category: "Web Design",
      desc: "Elegant, interactive, and beautifully crafted digital invitation cards for weddings and premium events.",
      image:
        "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80",
      stats: "Interactive Design",
      link: "https://royalwedding-one.vercel.app",
    },
    {
      title: "Gym Website",
      category: "Web Development",
      desc: "A comprehensive and interactive gym website with a modern design and smooth user experience.",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
      stats: "Interactive Design",
      link: "https://gym-proto.netlify.app",
    },
    {
      title: "Photography Portfolio",
      category: "Web Design",
      desc: "A visually stunning and highly responsive portfolio website designed to showcase high-res photography.",
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
      stats: "Image Optimized",
      link: "https://www.theajphotography.in"
    },
    {
      title: "Beauty Parlour Platform",
      category: "Web Development",
      desc: "An elegant booking and service discovery platform tailored for a premium beauty salon.",
      image:
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
      stats: "Seamless Booking",
      link: "https://blushbeauty698.in/"
    },
  ];

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Portfolio', url: '/portfolio' }
  ];

  return (
    <>
      <SEOHead
        title="Our Work & Case Studies | 3Stack"
        description="Explore 3Stack's portfolio of custom web development, mobile applications, and digital marketing case studies delivered for growing businesses."
        keywords="3Stack portfolio, 3Stack work, 3Stack, 3 Stack, 3stack.in, Portfolio, Case Studies, Web Development Projects, Custom App Development, Digital Marketing Results, Best Web Design"
        breadcrumbs={breadcrumbs}
      />
      <section
        className="section"
        style={{
          position: "relative",
          overflow: "hidden",
          paddingTop: "140px",
          paddingBottom: "100px",
          minHeight: "100vh",
        }}
      >
        {/* Glow Effects */}
        <div
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            width: "500px",
            height: "500px",
            background: "var(--accent-secondary)",
            opacity: "0.1",
            filter: "blur(120px)",
            zIndex: 0,
            borderRadius: "50%",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "-10%",
            width: "600px",
            height: "600px",
            background: "var(--accent-primary)",
            opacity: "0.1",
            filter: "blur(150px)",
            zIndex: 0,
            borderRadius: "50%",
          }}
        ></div>

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: "1.5rem", display: "flex", justifyContent: "center" }}>
            <ol style={{ display: "flex", gap: "0.5rem", listStyle: "none", padding: 0, margin: 0, fontSize: "0.875rem", color: "var(--text-secondary)" }}>
              <li><Link to="/" style={{ color: "var(--text-secondary)", textDecoration: "none" }}>Home</Link></li>
              <li>/</li>
              <li aria-current="page" style={{ color: "var(--accent-primary)", fontWeight: 600 }}>Portfolio</li>
            </ol>
          </nav>

          <div className="text-center animate-fade-in-up">
            <div
              className="inline-badge"
              style={{
                display: "inline-block",
                padding: "0.5rem 1rem",
                background: "rgba(16, 185, 129, 0.1)",
                border: "1px solid rgba(16, 185, 129, 0.2)",
                borderRadius: "50px",
                color: "var(--accent-primary)",
                fontSize: "0.875rem",
                fontWeight: 600,
                marginBottom: "1.5rem",
              }}
            >
              Featured Case Studies
            </div>

            <h1
              className="section-title"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              Projects We're <span className="text-gradient">Proud Of</span>
            </h1>
            <p
              className="section-subtitle"
              style={{ maxWidth: "700px", margin: "0 auto 3rem auto" }}
            >
              Explore how we've helped businesses across various industries
              achieve their digital goals through innovative technology, custom web applications, and
              strategic design.
            </p>
          </div>

          <h2 style={{ fontSize: "1.85rem", textAlign: "center", marginBottom: "2.5rem", color: "var(--text-primary)" }}>
            Selected Client Work & Live Demonstrations
          </h2>

          {/* Project Grid */}
          <div
            className="grid grid-cols-2 gap-lg"
            style={{ transition: "all 0.5s ease" }}
          >
            {projects.map((project, idx) => (
              <article
                key={project.title}
                className={`glass-card animate-fade-in-up delay-${(idx % 4) * 100}`}
                style={{
                  padding: "0",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    height: "300px",
                    overflow: "hidden",
                  }}
                >
                  <img 
                    src={project.image} 
                    alt={`${project.title} - ${project.category} Case Study by 3Stack`} 
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} 
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "1rem",
                      right: "1rem",
                      background: "rgba(7,7,7,0.85)",
                      backdropFilter: "blur(10px)",
                      padding: "0.5rem 1rem",
                      borderRadius: "50px",
                      color: "var(--text-primary)",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    {project.stats}
                  </div>
                </div>

                <div
                  style={{
                    padding: "2.5rem",
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                  }}
                >
                  <div
                    style={{
                      color: "var(--accent-primary)",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {project.category}
                  </div>
                  <h3 style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>
                    {project.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      lineHeight: 1.6,
                      flexGrow: 1,
                      fontSize: "0.95rem",
                      margin: 0,
                    }}
                  >
                    {project.desc}
                  </p>

                  <div
                    style={{
                      marginTop: "2rem",
                      borderTop: "1px solid var(--border-color)",
                      paddingTop: "1.5rem",
                    }}
                  >
                    <a
                      href={project.link}
                      style={{
                        color: "var(--text-primary)",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        fontWeight: 600,
                        transition: "color 0.3s ease",
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseOver={(e) =>
                        (e.currentTarget.style.color = "var(--accent-primary)")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.color = "var(--text-primary)")
                      }
                    >
                      Visit Live Site <ArrowUpRight size={18} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA Box */}
          <div className="text-center" style={{ marginTop: "5rem", padding: "3rem", background: "rgba(255,255,255,0.02)", borderRadius: "var(--radius-lg)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Have a Project in Mind?</h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto 2rem auto" }}>
              Let's engineer an exceptional digital experience tailored to your market goals.
            </p>
            <Button href="/contact" size="lg" variant="primary">Start Your Project</Button>
          </div>
        </div>
      </section>
    </>
  );
}
