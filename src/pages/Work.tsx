import { SEOHead } from "../components/seo/SEOHead";
import { ArrowUpRight } from "lucide-react";

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

  return (
    <>
      <SEOHead
        title="Our Work & Case Studies | 3Stack"
        description="View our portfolio of successful web development, app development, and digital marketing projects."
        keywords="Portfolio, Case Studies, Web Development Projects, Custom App Development, Digital Marketing Results, 3Stack Work, Best Web Design"
      />
      <section
        className="section"
        style={{
          position: "relative",
          overflow: "hidden",
          paddingTop: "160px",
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
              style={{ fontSize: "clamp(3rem, 5vw, 4rem)" }}
            >
              Projects We're <span className="text-gradient">Proud Of</span>
            </h1>
            <p
              className="section-subtitle"
              style={{ maxWidth: "700px", margin: "0 auto 10rem auto" }}
            >
              Explore how we've helped businesses across various industries
              achieve their digital goals through innovative technology and
              strategic design.
            </p>
          </div>

          {/* Project Grid */}
          <div
            className="grid grid-cols-2 gap-lg"
            style={{ transition: "all 0.5s ease" }}
          >
            {projects.map((project, idx) => (
              <div
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
                    height: "320px",
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "1rem",
                      right: "1rem",
                      background: "rgba(7,7,7,0.8)",
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
                  <h3 style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>
                    {project.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      lineHeight: 1.6,
                      flexGrow: 1,
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
                      target="blank"
                      onMouseOver={(e) =>
                        (e.currentTarget.style.color = "var(--accent-primary)")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.color = "var(--text-primary)")
                      }
                    >
                      Visit Site <ArrowUpRight size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
