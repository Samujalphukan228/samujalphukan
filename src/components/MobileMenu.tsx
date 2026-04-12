"use client";

import Link from "next/link";
import { useEffect } from "react";
import { FaGithub, FaXTwitter, FaInstagram } from "react-icons/fa6";

interface NavLink { href: string; label: string; }
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLink[];
  isActive: (href: string) => boolean;
}

const socials = [
  { name: "GitHub", href: "https://github.com/Samujalphukan228", icon: FaGithub },
  { name: "Twitter", href: "https://x.com/samujalphukan", icon: FaXTwitter },
  { name: "Instagram", href: "https://www.instagram.com/samujal_phukan/", icon: FaInstagram },
];

export default function MobileMenu({ isOpen, onClose, navLinks, isActive }: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;1,300&display=swap');
        .mlink-item { color: #c7c7cc; transition: color 0.25s; }
        .mlink-item:hover { color: #1d1d1f; }
        .mlink-item::after {
          content: ''; position: absolute; bottom: 2px; left: 0;
          height: 0.5px; background: #1d1d1f; width: 0;
          transition: width 0.4s cubic-bezier(0.4,0,0.2,1);
        }
        .mlink-item:hover::after { width: 100%; }
        .mlink-arrow { opacity: 0; transform: translateX(-6px); transition: opacity 0.2s, transform 0.25s; }
        .mlink-item:hover .mlink-arrow { opacity: 1; transform: translateX(0); }
        .soc-link { color: #aeaeb2; transition: color 0.2s; }
        .soc-link:hover { color: #1d1d1f; }
        .close-circle { transition: background 0.2s; }
        .close-circle:hover { background: rgba(0,0,0,0.1) !important; }
        .menu-img-inner { transition: transform 0.6s ease, opacity 0.4s; opacity: 0.75; }
        .sheet-open .menu-img-inner { transform: scale(1.03); }
      `}</style>

      {/* Overlay */}
      <div
        style={{
          position: "fixed", inset: 0, zIndex: 50,
          pointerEvents: isOpen ? "auto" : "none",
          opacity: isOpen ? 1 : 0,
          transition: "opacity 0.4s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        {/* Backdrop */}
        <div
          onClick={onClose}
          style={{
            position: "absolute", inset: 0,
            background: "rgba(0,0,0,0.18)",
            backdropFilter: "blur(2px)",
            WebkitBackdropFilter: "blur(2px)",
          }}
        />

        {/* Sheet */}
        <div
          className={isOpen ? "sheet-open" : ""}
          style={{
            position: "absolute", inset: 8,
            display: "grid", gridTemplateColumns: "1fr 1fr",
            overflow: "hidden", borderRadius: 16,
            background: "#ffffff",
            boxShadow: "0 32px 80px rgba(0,0,0,0.18), 0 0 0 0.5px rgba(0,0,0,0.06)",
            transform: isOpen ? "scale(1) translateY(0)" : "scale(0.97) translateY(8px)",
            opacity: isOpen ? 1 : 0,
            transition: "transform 0.45s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s",
          }}
        >
          {/* Nav side */}
          <div style={{ display: "flex", flexDirection: "column", borderRight: "0.5px solid rgba(0,0,0,0.06)" }}>

            {/* Top bar */}
            <div style={{
              padding: "20px 28px 16px",
              borderBottom: "0.5px solid rgba(0,0,0,0.06)",
              display: "flex", alignItems: "center", justifyContent: "space-between",
            }}>
              <span style={{ fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "#aeaeb2", fontWeight: 400 }}>
                Menu
              </span>
              <button
                onClick={onClose}
                className="close-circle"
                style={{
                  width: 28, height: 28, borderRadius: "50%",
                  background: "rgba(0,0,0,0.05)", border: "none", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#6e6e73",
                }}
              >
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
                  <path d="M1 1l9 9M10 1L1 10" />
                </svg>
              </button>
            </div>

            {/* Links */}
            <nav style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "20px 28px", gap: 2 }}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="mlink-item"
                  style={{
                    display: "block", position: "relative",
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 300,
                    fontSize: "clamp(32px, 4.5vw, 44px)",
                    lineHeight: 1.15,
                    letterSpacing: "-0.01em",
                    fontStyle: isActive(link.href) ? "italic" : "normal",
                    color: isActive(link.href) ? "#1d1d1f" : undefined,
                    textDecoration: "none",
                    padding: "4px 0",
                  }}
                >
                  {link.label}
                  {" "}
                  <span className="mlink-arrow" style={{ fontStyle: "normal", fontSize: 22 }}>↗</span>
                </Link>
              ))}
            </nav>

            {/* Footer */}
            <div style={{
              padding: "16px 28px",
              borderTop: "0.5px solid rgba(0,0,0,0.06)",
              display: "flex", alignItems: "center", justifyContent: "space-between",
            }}>
              <div style={{ display: "flex", gap: 20 }}>
                {socials.map(({ name, href, icon: Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="soc-link"
                    style={{ fontSize: 11, letterSpacing: "0.04em", textDecoration: "none", fontWeight: 400 }}
                    aria-label={name}
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
              <a
                href="mailto:samujalphukan@yahoo.com"
                className="soc-link"
                style={{ fontSize: 11, letterSpacing: "0.04em", textDecoration: "none", fontWeight: 400 }}
              >
                Mail
              </a>
            </div>
          </div>

          {/* Image side */}
          <div style={{ position: "relative", background: "#1d1d1f", overflow: "hidden" }}>
            <img
              src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=1200&auto=format&fit=crop&q=80"
              alt=""
              className="menu-img-inner"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              loading="lazy"
            />
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              padding: "28px 28px 24px",
              background: "linear-gradient(transparent, rgba(0,0,0,0.55))",
            }}>
              <p style={{ fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 10, fontWeight: 400 }}>
                Exxupp · Digital
              </p>
              <p style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 300, fontStyle: "italic",
                fontSize: "clamp(18px, 2.5vw, 22px)",
                lineHeight: 1.3, color: "rgba(255,255,255,0.88)", letterSpacing: "0.01em",
              }}>
                Building systems<br />that scale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}