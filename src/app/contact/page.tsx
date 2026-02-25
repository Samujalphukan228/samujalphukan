"use client";

interface Social {
  label: string;
  href: string;
}

const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/Samujalphukan228" },
  { label: "Twitter", href: "https://x.com/samujalphukan" },
  { label: "Instagram", href: "https://www.instagram.com/samujal_phukan/" },
];

export default function Contact() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@300;400&display=swap');

        .email-link {
          background-size: 0% 1px;
          background-repeat: no-repeat;
          background-position: left bottom;
          background-image: linear-gradient(#111, #111);
          transition: background-size 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .email-link:hover {
          background-size: 100% 1px;
        }
      `}</style>

      <section className="py-20 px-7 w-full">

        {/* Section header */}
        <div className="flex items-end justify-between mb-14 border-b border-[#e8e8e8] pb-6">
          <p
            className="text-[11px] text-[#999] uppercase tracking-[0.25em]"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Contact
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-16">

          {/* Left — heading + email */}
          <div className="max-w-md">
            <h2
              className="text-4xl md:text-5xl text-[#111] leading-tight mb-6"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
               Let's build
              <br />
              <span style={{ fontStyle: "italic" }}>something.</span>
            </h2>

            <p
              className="text-[12px] text-[#888] leading-relaxed mb-10 max-w-sm"
              style={{ fontFamily: "'DM Mono', monospace", fontWeight: 300 }}
            >
              Open to freelance projects, collaborations, or just a good conversation about backend systems.
            </p>

            <a
              href="mailto:samujalphukan@yahoo.com"
              className="email-link text-2xl md:text-3xl text-[#111] pb-0.5"
              style={{ fontFamily: "'DM Serif Display', serif", fontStyle: "italic" }}
            >
              samujalphukan@yahoo.com
            </a>
          </div>

          {/* Right — socials */}
          <div className="flex flex-col gap-5">
            <p
              className="text-[10px] text-[#bbb] uppercase tracking-[0.2em] mb-2"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Find me on
            </p>
            {socials.map((s: Social) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-[#555] hover:text-[#111] transition-colors duration-200"
              >
                <span
                  className="text-[11px] uppercase tracking-[0.2em]"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {s.label}
                </span>
                <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  ↗
                </span>
              </a>
            ))}
          </div>

        </div>

      </section>
    </>
  );
}