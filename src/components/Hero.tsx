"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const lineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el: HTMLDivElement | null = lineRef.current;
    if (!el) return;
    el.style.transform = "scaleX(0)";
    el.style.transformOrigin = "left";
    el.style.transition = "transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.6s";
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.transform = "scaleX(1)";
      });
    });
  }, []);

  const stack: string[] = ["Node.js", "PostgreSQL", "Redis", "Docker", "Rust", "AWS"];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@300;400&display=swap');

        .hero-line {
          opacity: 0;
          transform: translateY(20px);
          animation: lineUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes lineUp {
          to { opacity: 1; transform: translateY(0); }
        }

        .stack-tag:hover {
          background: #111;
          color: #f8f8f8;
        }

        .blink {
          animation: blink 1.2s step-end infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .rotate-text {
          animation: spinSlow 20s linear infinite;
        }

        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      <section className="min-h-[88vh] flex flex-col justify-center py-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-16">

          {/* Left — main content */}
          <div className="max-w-xl">

            {/* Mono label */}
            <p
              className="hero-line text-[11px] text-[#999] uppercase tracking-[0.2em] mb-8 flex items-center gap-2"
              style={{ fontFamily: "'DM Mono', monospace", animationDelay: "0.1s" }}
            >
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Available for work — Backend Engineer
            </p>

            {/* Name */}
            <h1
              className="hero-line text-5xl md:text-6xl text-[#111] leading-tight mb-2"
              style={{ fontFamily: "'DM Serif Display', serif", animationDelay: "0.25s" }}
            >
              Samujal
            </h1>
            <h1
              className="hero-line text-5xl md:text-6xl text-[#111] leading-tight mb-8"
              style={{ fontFamily: "'DM Serif Display', serif", fontStyle: "italic", animationDelay: "0.35s" }}
            >
              Phukan.
            </h1>

            {/* Divider */}
            <div className="h-[1px] bg-[#ddd] mb-8" ref={lineRef} />

            {/* Bio */}
            <p
              className="hero-line text-sm text-[#666] leading-relaxed max-w-md mb-10"
              style={{ fontFamily: "'DM Mono', monospace", fontWeight: 300, animationDelay: "0.9s" }}
            >
              I build reliable, scalable systems — APIs, databases, and the infrastructure that keeps things running quietly in the background.
            </p>

            {/* Stack tags */}
            <div
              className="hero-line flex flex-wrap gap-2 mb-10"
              style={{ animationDelay: "1s" }}
            >
              {stack.map((item: string) => (
                <span
                  key={item}
                  className="stack-tag text-[10px] uppercase tracking-[0.15em] text-[#555] border border-[#ddd] px-3 py-1.5 transition-colors duration-200 cursor-default"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Links */}
            <div
              className="hero-line flex gap-6"
              style={{ animationDelay: "1.1s" }}
            >
              <a
                href="/work"
                className="text-[11px] uppercase tracking-[0.2em] text-[#111] border-b border-[#111] pb-0.5 hover:text-[#888] hover:border-[#888] transition-colors duration-200"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                Projects
              </a>
              <a
                href="mailto:samujalphukan@yahoo.com"
                className="text-[11px] uppercase tracking-[0.2em] text-[#111] border-b border-[#111] pb-0.5 hover:text-[#888] hover:border-[#888] transition-colors duration-200"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                Contact
              </a>
            </div>
          </div>

          {/* Right — decorative code block + rotating badge */}
          <div
            className="hero-line hidden lg:flex flex-col items-end gap-8 shrink-0"
            style={{ animationDelay: "1.2s" }}
          >
            {/* Rotating circular badge */}
            <div className="relative w-28 h-28 flex items-center justify-center self-end">
              <svg viewBox="0 0 120 120" className="absolute inset-0 w-full h-full rotate-text">
                <path
                  id="circle"
                  d="M 60,60 m -45,0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"
                  fill="none"
                />
                <text style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", fill: "#aaa", letterSpacing: "3px" }}>
                  <textPath href="#circle">
                    BACKEND · SYSTEMS · INFRA · APIs ·&nbsp;
                  </textPath>
                </text>
              </svg>
              <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: "22px", color: "#111" }}>{ }</span>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "20px", color: "#111" }}>{"{}"}</span>
            </div>

            {/* Faux terminal block */}
            <div
              className="border border-[#e0e0e0] p-6 w-72"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              <div className="flex gap-1.5 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[#eee]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#eee]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#eee]" />
              </div>
              <div className="space-y-2 text-[11px]">
                <p className="text-[#aaa]"><span className="text-emerald-500">→</span> whoami</p>
                <p className="text-[#555]">samujal_phukan</p>
                <p className="text-[#aaa] mt-3"><span className="text-emerald-500">→</span> cat skills.txt</p>
                <p className="text-[#555]">Node · Go · PostgreSQL</p>
                <p className="text-[#555]">Redis · Docker · AWS</p>
                <p className="text-[#aaa] mt-3"><span className="text-emerald-500">→</span> status</p>
                <p className="text-[#555]">
                  open_to_work: <span className="text-emerald-500">true</span>
                </p>
                <p className="text-[#aaa] mt-3">
                  <span className="text-emerald-500">→</span>
                  <span className="blink ml-1">▌</span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}