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

export default function Experience(): JSX.Element {
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
      company: "MERN Stack & Backend",
      role: "Backend Engineer",
      period: "2024 — 2025",
      duration: "2 yrs",
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
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@300;400&display=swap');

        .exp-row {
          opacity: 0;
          transform: translateY(16px);
          animation: expIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes expIn {
          to { opacity: 1; transform: translateY(0); }
        }

        .tag-pill {
          transition: background 0.15s, color 0.15s;
        }

        .tag-pill:hover {
          background: #111;
          color: #f8f8f8;
          border-color: #111;
        }
      `}</style>

      <section className="py-20 w-full">

        {/* Section header */}
        <div className="flex items-end justify-between mb-14 border-b border-[#e8e8e8] pb-6">
          <p
            className="text-[11px] text-[#999] uppercase tracking-[0.25em]"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Experience
          </p>
          <p
            className="text-[10px] text-[#bbb] uppercase tracking-[0.15em]"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            As of Feb 2026
          </p>
        </div>

        <div className="space-y-0">
          {experience.map((item: ExperienceItem, index: number) => (
            <div
              key={index}
              className="exp-row"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6 md:gap-16 py-12">

                {/* Left */}
                <div className="flex flex-col gap-2 md:pt-1">
                  <div className="flex items-center gap-2">
                    <span
                      className="text-[11px] text-[#888] tabular-nums"
                      style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                      {item.period}
                    </span>
                    <span
                      className="text-[9px] text-[#bbb] border border-[#e8e8e8] px-1.5 py-0.5 uppercase tracking-wider"
                      style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                      {item.duration}
                    </span>
                  </div>

                  <span
                    className="text-[10px] text-[#bbb] uppercase tracking-[0.1em]"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {item.type}
                  </span>

                  {item.current && (
                    <span className="flex items-center gap-1.5 mt-1">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                      </span>
                      <span
                        className="text-[10px] text-emerald-500 uppercase tracking-[0.15em]"
                        style={{ fontFamily: "'DM Mono', monospace" }}
                      >
                        Current
                      </span>
                    </span>
                  )}
                </div>

                {/* Right */}
                <div>
                  <div className="flex items-baseline gap-3 mb-1 flex-wrap">
                    <h3
                      className="text-[1.75rem] text-[#111] leading-tight"
                      style={{ fontFamily: "'DM Serif Display', serif" }}
                    >
                      {item.company}
                    </h3>
                    {item.current && (
                      <span
                        className="text-[10px] text-[#aaa] uppercase tracking-widest hidden md:inline"
                        style={{ fontFamily: "'DM Mono', monospace" }}
                      >
                        · 7 customers
                      </span>
                    )}
                  </div>

                  <p
                    className="text-[11px] text-[#999] uppercase tracking-[0.15em] mb-5"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {item.role}
                  </p>

                  <p
                    className="text-[13px] text-[#666] leading-[1.8] mb-7 max-w-lg"
                    style={{ fontFamily: "'DM Mono', monospace", fontWeight: 300 }}
                  >
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="tag-pill text-[10px] uppercase tracking-[0.1em] text-[#555] border border-[#e0e0e0] px-2.5 py-1 cursor-default"
                        style={{ fontFamily: "'DM Mono', monospace" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {index < experience.length - 1 && (
                <div className="h-[1px] bg-[#ebebeb]" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom total */}
        <div className="mt-14 pt-6 border-t border-[#e8e8e8] flex justify-between items-center">
          <p
            className="text-[10px] text-[#ccc] uppercase tracking-[0.2em]"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Total experience
          </p>
          <p
            className="text-[10px] text-[#aaa] uppercase tracking-[0.2em]"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            2+ years · 2026 — Present
          </p>
        </div>

      </section>
    </>
  );
}