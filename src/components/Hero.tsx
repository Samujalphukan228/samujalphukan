"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const stack = ["Rust", "Tokio", "Axum", "LLM Agents", "PostgreSQL", "Docker", "Design"];

export default function Hero() {
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = dividerRef.current;
    if (!el) return;
    el.style.transform = "scaleX(0)";
    el.style.transformOrigin = "left";
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        el.style.transition = "transform 1s cubic-bezier(0.16,1,0.3,1) 0.38s";
        el.style.transform = "scaleX(1)";
      })
    );
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;1,300&display=swap');

        .h-up {
          opacity: 0;
          transform: translateY(14px);
          animation: hUp .65s cubic-bezier(.16,1,.3,1) forwards;
        }
        @keyframes hUp { to { opacity:1; transform:translateY(0); } }

        .h-tag { transition: background .18s, color .18s, border-color .18s; }
        .h-tag:hover { background: #1d1d1f !important; color: #fff !important; border-color: transparent !important; }

        .h-lnk { transition: color .18s, border-color .18s; }
        .h-lnk:hover { color: #aeaeb2 !important; border-color: #aeaeb2 !important; }

        @keyframes hBlink { 0%,100%{opacity:1;} 50%{opacity:0;} }
        .h-blink { animation: hBlink 1.1s step-end infinite; }

        @keyframes hSpin { to { transform: rotate(360deg); } }
        .h-spin { animation: hSpin 22s linear infinite; }

        @media (max-width: 640px) {
          .h-right { display: none !important; }
          .h-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <section
        style={{
          minHeight: "88vh",
          display: "flex",
          alignItems: "center",
          padding: "52px 0 64px",
        }}
      >
        <div style={{ width: "100%" }}>
          <div
            className="h-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 240px",
              gap: 80,
              alignItems: "center",
            }}
          >
            {/* ── LEFT ── */}
            <div>
              {/* Status */}
              <div
                className="h-up"
                style={{
                  display: "flex", alignItems: "center", gap: 7,
                  marginBottom: 24, animationDelay: "0.05s",
                }}
              >
                <span style={{
                  width: 5, height: 5, borderRadius: "50%",
                  background: "#ff9f0a", flexShrink: 0,
                }} />
                <span style={{
                  fontFamily: "'SF Mono','Fira Code',monospace",
                  fontSize: 9.5, letterSpacing: "0.14em",
                  textTransform: "uppercase", color: "#aeaeb2",
                }}>
                  Building · Not available for hire
                </span>
              </div>

              {/* Name */}
              <h1
                className="h-up"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 300,
                  fontSize: "clamp(44px, 6vw, 68px)",
                  lineHeight: 1.04, color: "#1d1d1f",
                  letterSpacing: "-0.025em",
                  animationDelay: "0.14s",
                }}
              >
                Samujal
              </h1>
              <h1
                className="h-up"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 300, fontStyle: "italic",
                  fontSize: "clamp(44px, 6vw, 68px)",
                  lineHeight: 1.04, color: "#1d1d1f",
                  letterSpacing: "-0.025em",
                  animationDelay: "0.23s",
                }}
              >
                Phukan.
              </h1>

              {/* Divider */}
              <div
                ref={dividerRef}
                style={{ height: "0.5px", background: "rgba(0,0,0,0.08)", margin: "24px 0" }}
              />

              {/* Bio */}
              <p
                className="h-up"
                style={{
                  fontSize: 15, lineHeight: 1.68,
                  color: "#6e6e73", maxWidth: 400,
                  marginBottom: 26, letterSpacing: "-0.012em",
                  animationDelay: "0.42s",
                }}
              >
                I write{" "}
                <strong style={{ color: "#1d1d1f", fontWeight: 500 }}>Rust</strong>
                {" "}for systems that demand reliability, build{" "}
                <strong style={{ color: "#1d1d1f", fontWeight: 500 }}>agentic AI</strong>
                {" "}that thinks and acts autonomously, and bring a designer{"'"}s eye to everything I ship.
              </p>

              {/* Tags */}
              <div
                className="h-up"
                style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 30, animationDelay: "0.54s" }}
              >
                {stack.map((item) => (
                  <span
                    key={item}
                    className="h-tag"
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
                    {item}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div
                className="h-up"
                style={{ display: "flex", gap: 20, animationDelay: "0.64s" }}
              >
                {[
                  { label: "Work", href: "/work" },
                  { label: "Contact", href: "mailto:samujalphukan@yahoo.com" },
                ].map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    className="h-lnk"
                    style={{
                      fontFamily: "'SF Mono','Fira Code',monospace",
                      fontSize: 10, letterSpacing: "0.13em",
                      textTransform: "uppercase", color: "#1d1d1f",
                      textDecoration: "none", display: "flex",
                      alignItems: "center", gap: 4,
                      paddingBottom: 2, borderBottom: "0.5px solid #1d1d1f",
                    }}
                  >
                    {label}
                    <svg
                      width="9"
                      height="9"
                      viewBox="0 0 10 10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M1 9L9 1M3.5 1H9v5.5" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>

            {/* ── RIGHT ── */}
            <div
              className="h-up h-right"
              style={{
                display: "flex", flexDirection: "column",
                alignItems: "center", gap: 24,
                animationDelay: "0.28s",
              }}
            >
              {/* Spinning badge */}
              <div style={{ position: "relative", width: 96, height: 96, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg
                  className="h-spin"
                  viewBox="0 0 110 110"
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
                >
                  <path id="h-arc" d="M55,55 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0" fill="none" />
                  <text style={{ fontFamily: "monospace", fontSize: "9.5px", fill: "#aeaeb2", letterSpacing: "3.2px" }}>
                    <textPath href="#h-arc">RUST · AI · DESIGN · SYSTEMS ·&nbsp;</textPath>
                  </text>
                </svg>
                <span style={{ fontFamily: "monospace", fontSize: 17, color: "#1d1d1f", zIndex: 1 }}>{"{}"}</span>
              </div>

              {/* Terminal */}
              <div style={{
                width: "100%",
                background: "rgba(255,255,255,0.8)",
                border: "0.5px solid rgba(0,0,0,0.08)",
                borderRadius: 12, overflow: "hidden",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}>
                <div style={{
                  padding: "10px 12px 8px",
                  borderBottom: "0.5px solid rgba(0,0,0,0.06)",
                  display: "flex", gap: 5,
                }}>
                  {["#ff5f57", "#ffbd2e", "#28c840"].map((c) => (
                    <div key={c} style={{ width: 8.5, height: 8.5, borderRadius: "50%", background: c }} />
                  ))}
                </div>
                <div style={{
                  padding: "13px 14px 16px",
                  fontFamily: "'SF Mono','Fira Code',monospace",
                  fontSize: 10, lineHeight: 1.9, color: "#1d1d1f",
                }}>
                  <div><span style={{ color: "#34c759" }}>→</span> <span style={{ color: "#aeaeb2" }}>whoami</span></div>
                  <div>samujal_phukan</div>
                  <div style={{ height: 6 }} />
                  <div><span style={{ color: "#34c759" }}>→</span> <span style={{ color: "#aeaeb2" }}>stack</span></div>
                  <div>Rust · Tokio · Axum</div>
                  <div>LLM · RAG · MCP</div>
                  <div style={{ height: 6 }} />
                  <div><span style={{ color: "#34c759" }}>→</span> <span style={{ color: "#aeaeb2" }}>status</span></div>
                  <div>building: <span style={{ color: "#34c759" }}>true</span></div>
                  <div style={{ height: 6 }} />
                  <div>
                    <span style={{ color: "#34c759" }}>→</span>{" "}
                    <span className="h-blink">▌</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}