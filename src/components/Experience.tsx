"use client";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  duration: string;
  type: string;
  description: string;
  tags: string[];
  current: boolean;
}

export default function Experience() {
  const experience: ExperienceItem[] = [
    {
      company: "Nxxupp",
      role: "Founder & Backend Engineer",
      period: "2025 — Present",
      duration: "~ 1 yr",
      type: "Digital Agency · Startup",
      description:
        "Founded a digital agency that builds custom software for businesses. Currently serving 7 customers across various industries. Responsible for the full backend architecture, client delivery, and technical direction. Actively migrating performance-critical services to Rust.",
      tags: ["Rust", "Node.js", "Next.js", "PostgreSQL", "Redis", "Docker"],
      current: true,
    },
    {
      company: "MERN & Backend",
      role: "Backend Engineer",
      period: "2024 — 2025",
      duration: "1 yr",
      type: "Full-Stack · Backend",
      description:
        "Built production backend systems with Node.js and Express. Developed full-stack applications using the MERN stack and Next.js. Implemented Elasticsearch for search and Redis for caching and session management.",
      tags: ["Node.js", "Express", "MongoDB", "React", "Next.js", "Redis", "Elasticsearch"],
      current: false,
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;1,300&display=swap');

        .exp-item {
          opacity: 0;
          transform: translateY(14px);
          animation: expUp 0.65s cubic-bezier(0.16,1,0.3,1) forwards;
        }
        @keyframes expUp { to { opacity:1; transform:translateY(0); } }

        .exp-tag { transition: background .18s, color .18s, border-color .18s; }
        .exp-tag:hover {
          background: #1d1d1f !important;
          color: #fff !important;
          border-color: transparent !important;
        }

        @media (max-width: 640px) {
          .exp-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <section style={{ padding: "80px 0 96px" }}>

        {/* ── Section label ── */}
        <div
          className="exp-item"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 64,
            animationDelay: "0s",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span style={{
              fontFamily: "'SF Mono','Fira Code',monospace",
              fontSize: 9, letterSpacing: "0.18em",
              textTransform: "uppercase", color: "#aeaeb2",
            }}>
              02
            </span>
            <span style={{
              width: 32, height: "0.5px", background: "rgba(0,0,0,0.12)",
            }} />
            <span style={{
              fontFamily: "'SF Mono','Fira Code',monospace",
              fontSize: 9, letterSpacing: "0.18em",
              textTransform: "uppercase", color: "#aeaeb2",
            }}>
              Experience
            </span>
          </div>
          <span style={{
            fontFamily: "'SF Mono','Fira Code',monospace",
            fontSize: 9, letterSpacing: "0.14em",
            textTransform: "uppercase", color: "#c7c7cc",
          }}>
            2024 — Present
          </span>
        </div>

        {/* ── Entries ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {experience.map((item, index) => (
            <div
              key={index}
              className="exp-item"
              style={{ animationDelay: `${0.1 + index * 0.14}s` }}
            >
              {/* Top divider */}
              <div style={{ height: "0.5px", background: "rgba(0,0,0,0.07)" }} />

              <div
                className="exp-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "200px 1fr",
                  gap: 64,
                  padding: "52px 0",
                  alignItems: "start",
                }}
              >
                {/* ── Left meta ── */}
                <div style={{ display: "flex", flexDirection: "column", gap: 10, paddingTop: 6 }}>

                  {/* Period + duration */}
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{
                      fontFamily: "'SF Mono','Fira Code',monospace",
                      fontSize: 10, letterSpacing: "0.08em",
                      color: "#6e6e73", tabularNums: true,
                    } as React.CSSProperties}>
                      {item.period}
                    </span>
                    <span style={{
                      fontFamily: "'SF Mono','Fira Code',monospace",
                      fontSize: 8.5, letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#c7c7cc",
                      border: "0.5px solid rgba(0,0,0,0.08)",
                      padding: "2px 7px", borderRadius: 980,
                    }}>
                      {item.duration}
                    </span>
                  </div>

                  {/* Type */}
                  <span style={{
                    fontFamily: "'SF Mono','Fira Code',monospace",
                    fontSize: 9, letterSpacing: "0.1em",
                    textTransform: "uppercase", color: "#aeaeb2",
                  }}>
                    {item.type}
                  </span>

                  {/* Current badge */}
                  {item.current && (
                    <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 4 }}>
                      <span style={{ position: "relative", display: "flex", width: 7, height: 7 }}>
                        <span style={{
                          position: "absolute", inset: 0,
                          borderRadius: "50%", background: "#34c759",
                          opacity: 0.4,
                          animation: "ping 1.4s cubic-bezier(0,0,0.2,1) infinite",
                        }} />
                        <span style={{
                          position: "relative", width: 7, height: 7,
                          borderRadius: "50%", background: "#34c759",
                          display: "inline-flex",
                        }} />
                      </span>
                      <span style={{
                        fontFamily: "'SF Mono','Fira Code',monospace",
                        fontSize: 9, letterSpacing: "0.14em",
                        textTransform: "uppercase", color: "#34c759",
                      }}>
                        Current
                      </span>
                    </div>
                  )}
                </div>

                {/* ── Right content ── */}
                <div>
                  {/* Company + customers */}
                  <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 6, flexWrap: "wrap" }}>
                    <h3 style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontWeight: 300,
                      fontSize: "clamp(28px, 3.5vw, 36px)",
                      lineHeight: 1.08,
                      color: "#1d1d1f",
                      letterSpacing: "-0.02em",
                    }}>
                      {item.company}
                    </h3>
                    {item.current && (
                      <span style={{
                        fontFamily: "'SF Mono','Fira Code',monospace",
                        fontSize: 9, letterSpacing: "0.12em",
                        textTransform: "uppercase", color: "#aeaeb2",
                      }}>
                        · 7 clients
                      </span>
                    )}
                  </div>

                  {/* Role */}
                  <p style={{
                    fontFamily: "'SF Mono','Fira Code',monospace",
                    fontSize: 10, letterSpacing: "0.14em",
                    textTransform: "uppercase", color: "#aeaeb2",
                    marginBottom: 20,
                  }}>
                    {item.role}
                  </p>

                  {/* Description */}
                  <p style={{
                    fontSize: 14,
                    lineHeight: 1.72,
                    color: "#6e6e73",
                    maxWidth: 480,
                    marginBottom: 24,
                    letterSpacing: "-0.01em",
                    fontWeight: 400,
                  }}>
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="exp-tag"
                        style={{
                          fontFamily: "'SF Mono','Fira Code',monospace",
                          fontSize: 9, letterSpacing: "0.09em",
                          textTransform: "uppercase", color: "#6e6e73",
                          padding: "5px 11px", borderRadius: 980,
                          border: "0.5px solid rgba(0,0,0,0.08)",
                          background: "rgba(255,255,255,0.55)",
                          cursor: "default",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Bottom divider */}
          <div style={{ height: "0.5px", background: "rgba(0,0,0,0.07)" }} />
        </div>

        {/* ── Footer summary ── */}
        <div
          className="exp-item"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 40,
            animationDelay: "0.4s",
          }}
        >
          <span style={{
            fontFamily: "'SF Mono','Fira Code',monospace",
            fontSize: 9, letterSpacing: "0.16em",
            textTransform: "uppercase", color: "#c7c7cc",
          }}>
            Total
          </span>
          <span style={{
            fontFamily: "'SF Mono','Fira Code',monospace",
            fontSize: 9, letterSpacing: "0.14em",
            textTransform: "uppercase", color: "#aeaeb2",
          }}>
            2+ years · 2 roles
          </span>
        </div>

      </section>

      <style>{`
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
      `}</style>
    </>
  );
}