"use client";

import { Dispatch, SetStateAction } from "react";
import MobileMenu from "@/components/MobileMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLink { href: string; label: string; }
interface NavbarProps {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Navbar({ menuOpen, setMenuOpen }: NavbarProps) {
  const pathname = usePathname();

  const navLinks: NavLink[] = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 50,
          height: "52px",
          display: "flex",
          alignItems: "center",
          padding: "0 24px",
          background: "rgba(245,245,247,0.92)",
          borderBottom: "0.5px solid rgba(0,0,0,0.08)",
          backdropFilter: "saturate(180%) blur(20px)",
          WebkitBackdropFilter: "saturate(180%) blur(20px)",
        }}
      >
        {/* Left */}
        <div style={{ flex: 1 }}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            style={{
              background: "none", border: "none", cursor: "pointer",
              width: 36, height: 36, borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "background 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(0,0,0,0.06)")}
            onMouseLeave={e => (e.currentTarget.style.background = "none")}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "4.5px", width: 18 }}>
              {[0, 1, 2].map(i => (
                <span
                  key={i}
                  style={{
                    display: "block",
                    height: 1,
                    borderRadius: 1,
                    background: "#1d1d1f",
                    width: i === 1 ? (menuOpen ? 18 : 12) : 18,
                    transformOrigin: "center",
                    transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.2s, width 0.3s",
                    transform: menuOpen
                      ? i === 0 ? "translateY(5.5px) rotate(45deg)"
                      : i === 2 ? "translateY(-5.5px) rotate(-45deg)"
                      : "none"
                      : "none",
                    opacity: menuOpen && i === 1 ? 0 : 1,
                  }}
                />
              ))}
            </div>
          </button>
        </div>

        {/* Center */}
        <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
          <Link
            href="/"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 300,
              fontSize: 19,
              letterSpacing: "0.06em",
              color: "#1d1d1f",
              textDecoration: "none",
            }}
          >
            Samujal
          </Link>
        </div>

        {/* Right */}
        <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
          <a
            href="/Samujal_Phukan_Resume.pdf"
            download
            style={{
              display: "flex", alignItems: "center", gap: 5,
              fontSize: 12, fontWeight: 400, letterSpacing: "0.01em",
              color: "#6e6e73", textDecoration: "none",
              padding: "6px 12px", borderRadius: 980,
              border: "0.5px solid transparent",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "rgba(0,0,0,0.05)";
              e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)";
              e.currentTarget.style.color = "#1d1d1f";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "none";
              e.currentTarget.style.borderColor = "transparent";
              e.currentTarget.style.color = "#6e6e73";
            }}
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6.5 1.5v7M3 8.5l3.5 3 3.5-3M2 12h9" />
            </svg>
            <span>Resume</span>
          </a>
        </div>
      </nav>

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        navLinks={navLinks}
        isActive={isActive}
      />

      <div style={{ height: 52 }} />
    </>
  );
}