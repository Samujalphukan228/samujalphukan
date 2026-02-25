"use client";

interface FooterLink {
  label: string;
  href: string;
}

export default function Footer(): JSX.Element {
  const year: number = 2026;

  const footerLinks: FooterLink[] = [
    { label: "GitHub", href: "https://github.com/Samujalphukan228" },
    { label: "Twitter", href: "https://x.com/samujalphukan" },
    { label: "Mail", href: "mailto:samujalphukan@yahoo.com" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@300;400&display=swap');
      `}</style>

      <footer className="border-t border-[#e8e8e8] py-12 w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">

          {/* Left */}
          <div>
            <h2
              className="text-2xl text-[#111] leading-tight mb-1"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              Samujal <span style={{ fontStyle: "italic" }}>Phukan.</span>
            </h2>
            <p
              className="text-[10px] text-[#aaa] uppercase tracking-[0.2em]"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Founder, Exxupp · Backend Engineer
            </p>
          </div>

          {/* Center — links */}
          <div className="flex gap-8">
            {footerLinks.map((link: FooterLink) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="text-[10px] uppercase tracking-[0.2em] text-[#888] hover:text-[#111] transition-colors duration-200 border-b border-transparent hover:border-[#111] pb-0.5"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right */}
          <p
            className="text-[10px] text-[#ccc] uppercase tracking-[0.2em]"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            © {year} Exxupp
          </p>

        </div>
      </footer>
    </>
  );
}