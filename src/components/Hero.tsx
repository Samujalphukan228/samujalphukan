"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const stack = ["Rust", "Tokio", "PostgreSQL", "LLM Agents", "Docker", "AWS", "Design"];

export default function Hero() {
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = dividerRef.current;
    if (!el) return;
    el.style.transform = "scaleX(0)";
    el.style.transformOrigin = "left";
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        el.style.transition = "transform 1s cubic-bezier(0.16,1,0.3,1) 0.4s";
        el.style.transform = "scaleX(1)";
      })
    );
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;1,300;1,400&display=swap');

        .hero-up {
          opacity: 0;
          transform: translateY(16px);
          animation: heroUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards;
        }
        @keyframes heroUp { to { opacity:1; transform:translateY(0); } }

        .hero-tag { transition: background 0.2s, color 0.2s, border-color 0.2s; }
        .hero-tag:hover { background: #1d1d1f !important; color: #fff !important; border-color: transparent !important; }

        .hero-lnk { transition: color 0.2s, border-color 0.2s; }
        .hero-lnk:hover { color: #aeaeb2 !important; border-color: #aeaeb2 !important; }

        @keyframes heroBlink { 0%,100%{opacity:1;} 50%{opacity:0;} }
        .hero-blink { animation: heroBlink 1.1s step-end infinite; }

        @keyframes heroSpin { from{transform:rotate(0);} to{transform:rotate(360deg);} }
        .hero-spin { animation: heroSpin 20s linear infinite; }
      `}</style>

      <section style={{ minHeight: "88vh", display: "flex", alignItems: "center", padding: "48px 0" }}>
        <div
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 280px",
            gap: 72,
            alignItems: "center",
          }}
        >
          {/* ── LEFT ── */}
          <div>
            {/* Status + role chips */}
            <div className="hero-up" style={{ animationDelay: "0.05s", marginBottom: 24 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                <span style={{
                  width: 6, height: 6, borderRadius: "50%", flexShrink: 0,
                  background: "#ff9f0a", boxShadow: "0 0 0 3px rgba(255,159,10,0.15)",
                }} />
                <span style={{
                  fontFamily: "var(--font-mono,'SF Mono','Fira Code',monospace)",
                  fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#aeaeb2",
                }}>
                  Building · Not available for hire
                </span>
              </div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {[
                  { label: "Rust", color: "#ce4a2c", bg: "rgba(206,74,44,0.06)", border: "rgba(206,74,44,0.25)" },
                  { label: "Agentic AI", color: "#007aff", bg: "rgba(0,122,255,0.05)", border: "rgba(0,122,255,0.2)" },
                  { label: "Design Systems", color: "#5856d6", bg: "rgba(88,86,214,0.05)", border: "rgba(88,86,214,0.2)" },
                  { label: "Backend", color: "#6e6e73", bg: "rgba(255,255,255,0.5)", border: "rgba(0,0,0,0.08)" },
                ].map(({ label, color, bg, border }) => (
                  <span
                    key={label}
                    style={{
                      fontFamily: "var(--font-mono,'SF Mono','Fira Code',monospace)",
                      fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase",
                      padding: "3px 9px", borderRadius: 980,
                      border: `0.5px solid ${border}`,
                      color, background: bg,
                    }}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Name */}
            <h1
              className="hero-up"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 300, fontSize: "clamp(46px,6.5vw,70px)",
                lineHeight: 1.05, color: "#1d1d1f", letterSpacing: "-0.02em",
                animationDelay: "0.15s",
              }}
            >
              Samujal
            </h1>
            <h1
              className="hero-up"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 300, fontStyle: "italic",
                fontSize: "clamp(46px,6.5vw,70px)",
                lineHeight: 1.05, color: "#1d1d1f", letterSpacing: "-0.02em",
                animationDelay: "0.25s",
              }}
            >
              Phukan.
            </h1>

            {/* Divider */}
            <div ref={dividerRef} style={{ height: "0.5px", background: "rgba(0,0,0,0.08)", margin: "26px 0" }} />

            {/* Bio */}
            <p
              className="hero-up"
              style={{
                fontSize: 14.5, lineHeight: 1.7, color: "#6e6e73",
                maxWidth: 420, marginBottom: 28, letterSpacing: "-0.01em",
                animationDelay: "0.5s",
              }}
            >
              I write{" "}
              <strong style={{ color: "#1d1d1f", fontWeight: 500 }}>Rust</strong>
              {" "}for systems that demand reliability, craft{" "}
              <strong style={{ color: "#1d1d1f", fontWeight: 500 }}>agentic AI</strong>
              {" "}pipelines that think and act autonomously, and bring a designer{"'"}s eye to everything I build.
            </p>

            {/* Stack tags */}
            <div
              className="hero-up"
              style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 32, animationDelay: "0.64s" }}
            >
              {stack.map((item) => (
                <span
                  key={item}
                  className="hero-tag"
                  style={{
                    fontFamily: "var(--font-mono,'SF Mono','Fira Code',monospace)",
                    fontSize: 9.5, letterSpacing: "0.1em", textTransform: "uppercase",
                    color: "#6e6e73", padding: "5px 11px", borderRadius: 980,
                    border: "0.5px solid rgba(0,0,0,0.08)",
                    background: "rgba(255,255,255,0.6)", cursor: "default",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="hero-up" style={{ display: "flex", gap: 20, animationDelay: "0.76s" }}>
              {[
                { label: "Work", href: "/work" },
                { label: "Contact", href: "mailto:samujalphukan@yahoo.com" },
              ].map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="hero-lnk"
                  style={{
                    fontFamily: "var(--font-mono,'SF Mono','Fira Code',monospace)",
                    fontSize: 10.5, letterSpacing: "0.12em", textTransform: "uppercase",
                    color: "#1d1d1f", textDecoration: "none",
                    display: "flex", alignItems: "center", gap: 5,
                    paddingBottom: 2, borderBottom: "0.5px solid #1d1d1f",
                  }}
                >
                  {label}
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 11 11"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M1 10L10 1M4 1h6v6" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div
            className="hero-up"
            style={{
              display: "flex", flexDirection: "column",
              alignItems: "flex-end", gap: 28,
              animationDelay: "0.3s",
            }}
          >
            {/* Rotating badge */}
            <div style={{ position: "relative", width: 104, height: 104, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg viewBox="0 0 120 120" className="hero-spin" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
                <path id="hero-arc" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" fill="none" />
                <text style={{ fontFamily: "monospace", fontSize: "10px", fill: "#aeaeb2", letterSpacing: "3px" }}>
                  <textPath href="#hero-arc">RUST · AI · DESIGN · SYSTEMS ·&nbsp;</textPath>
                </text>
              </svg>
              <span style={{ fontFamily: "monospace", fontSize: 18, color: "#1d1d1f", zIndex: 1 }}>{"{}"}</span>
            </div>

            {/* Terminal */}
            <div style={{
              width: "100%",
              background: "rgba(255,255,255,0.75)",
              border: "0.5px solid rgba(0,0,0,0.08)",
              borderRadius: 13, overflow: "hidden",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
            }}>
              <div style={{
                padding: "11px 13px 9px",
                borderBottom: "0.5px solid rgba(0,0,0,0.06)",
                display: "flex", gap: 5, alignItems: "center",
              }}>
                {["#ff5f57", "#ffbd2e", "#28c840"].map((c) => (
                  <div key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c }} />
                ))}
              </div>
              <div style={{
                padding: "14px 15px 17px",
                fontFamily: "var(--font-mono,'SF Mono','Fira Code',monospace)",
                fontSize: 10.5, lineHeight: 1.85,
              }}>
                {[
                  { cmd: "whoami", output: ["samujal_phukan"] },
                  { cmd: "stack", output: ["Rust · Tokio · Axum", "LLM Agents · RAG · MCP"] },
                ].map(({ cmd, output }) => (
                  <div key={cmd}>
                    <div><span style={{ color: "#34c759" }}>→</span> <span style={{ color: "#aeaeb2" }}>{cmd}</span></div>
                    {output.map((line) => <div key={line} style={{ color: "#1d1d1f" }}>{line}</div>)}
                    <div style={{ marginTop: 8 }} />
                  </div>
                ))}
                <div><span style={{ color: "#34c759" }}>→</span> <span style={{ color: "#aeaeb2" }}>focus</span></div>
                <div><span style={{ color: "#007aff" }}>agentic_ai</span>{": "}<span style={{ color: "#34c759" }}>active</span></div>
                <div style={{ color: "#1d1d1f" }}>systems{": "}<span style={{ color: "#34c759" }}>always</span></div>
                <div style={{ marginTop: 8 }}>
                  <span style={{ color: "#34c759" }}>→</span>{" "}
                  <span className="hero-blink" style={{ color: "#1d1d1f" }}>▌</span>
                </div>
              </div>
            </div>

            {/* Proficiency bars */}
            <div style={{
              width: "100%", padding: "14px 16px",
              background: "rgba(255,255,255,0.65)",
              border: "0.5px solid rgba(0,0,0,0.08)",
              borderRadius: 12,
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}>
              <div style={{
                fontFamily: "var(--font-mono,'SF Mono','Fira Code',monospace)",
                fontSize: 8.5, letterSpacing: "0.16em", textTransform: "uppercase",
                color: "#aeaeb2", marginBottom: 10,
              }}>
                Proficiency
              </div>
              {[
                { label: "Rust", pct: 92, color: "#ce4a2c" },
                { label: "AI / LLMs", pct: 85, color: "#007aff" },
                { label: "Design", pct: 78, color: "#5856d6" },
                { label: "Backend", pct: 90, color: "#34c759" },
              ].map(({ label, pct, color }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 7 }}>
                  <span style={{
                    fontFamily: "var(--font-mono,'SF Mono','Fira Code',monospace)",
                    fontSize: 9.5, color: "#6e6e73", width: 60, flexShrink: 0, letterSpacing: "0.04em",
                  }}>
                    {label}
                  </span>
                  <div style={{ flex: 1, height: 2, background: "rgba(0,0,0,0.06)", borderRadius: 2, overflow: "hidden" }}>
                    <div style={{ width: `${pct}%`, height: "100%", background: color, borderRadius: 2 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}