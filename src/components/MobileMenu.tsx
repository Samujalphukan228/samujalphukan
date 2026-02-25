"use client";

import Link from "next/link";
import { useEffect, ReactNode } from "react";
import { FaGithub, FaXTwitter, FaInstagram } from "react-icons/fa6";

interface SocialLink {
  name: string;
  href: string;
  icon: ReactNode;
}

interface NavLink {
  href: string;
  label: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLink[];
  isActive: (href: string) => boolean;
}

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/Samujalphukan228",
    icon: <FaGithub className="w-4 h-4" />,
  },
  {
    name: "Twitter",
    href: "https://x.com/samujalphukan",
    icon: <FaXTwitter className="w-4 h-4" />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/samujal_phukan/",
    icon: <FaInstagram className="w-4 h-4" />,
  },
];

export default function MobileMenu({ isOpen, onClose, navLinks, isActive }: MobileMenuProps): JSX.Element {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@300;400&display=swap');
      `}</style>

      <div
        className={`fixed inset-0 z-50 transition-opacity duration-500
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        aria-label="Navigation menu"
      >
        <div className="absolute inset-0 bg-black/30" onClick={onClose} />

        <div
          className={`absolute inset-2 md:inset-4 bg-[#757272] shadow-2xl 
            transform transition-all duration-500 ease-out overflow-hidden
            ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"}
          `}
        >
          <div className="h-full grid grid-cols-1 grid-rows-[35%_65%] md:grid-rows-1 md:grid-cols-2">

            {/* Image Side */}
            <div className="relative bg-[#111] order-first md:order-last overflow-hidden">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-10 p-2 bg-white/10 backdrop-blur rounded-full
                  text-[#6b6b6b] hover:bg-white/20 transition-all group"
                aria-label="Close menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 group-hover:rotate-90 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="h-full w-full relative">
                <img
                  src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=1600&auto=format&fit=crop&q=80"
                  alt="Menu"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                  <p
                    className="text-[#6b6b6b] text-[10px] uppercase tracking-[0.25em] mb-2"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    Exxupp · Digital Agency
                  </p>
                  <h3
                    className="text-[#111111]  text-2xl md:text-3xl leading-tight"
                    style={{ fontFamily: "'DM Serif Display', serif", fontStyle: "italic" }}
                  >
                    Building systems<br />that scale.
                  </h3>
                </div>
              </div>
            </div>

            {/* Nav Side */}
            <div className="h-full flex flex-col bg-[#f8f8f8] order-last md:order-first overflow-hidden">

              {/* Header */}
              <div className="px-6 md:px-10 py-5 md:py-8 border-b border-[#e8e8e8]">
                <p
                  className="text-[10px] text-[#6b6b6b] uppercase tracking-[0.25em]"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  Navigation
                </p>
              </div>

              {/* Links */}
              <nav className="flex-1 flex flex-col justify-center px-6 md:px-10 lg:px-12">
                <div className="space-y-0 md:space-y-1">
                  {navLinks.map((link: NavLink, index: number) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={onClose}
                      className={`block py-2 md:py-3 text-3xl md:text-4xl lg:text-5xl
                        font-light tracking-wide transition-all duration-300 group
                        ${isActive(link.href) ? "text-[#111]" : "text-[#aaa] hover:text-[#111] hover:translate-x-2"}
                      `}
                      style={{ fontFamily: "'DM Serif Display', serif", animationDelay: `${index * 100}ms` }}
                    >
                      <span className="relative inline-block">
                        {isActive(link.href) ? <em>{link.label}</em> : link.label}
                        <span
                          className={`absolute -bottom-1 left-0 w-full h-[1px] bg-[#111]
                            transform origin-left transition-transform duration-300
                            ${isActive(link.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
                          `}
                        />
                      </span>
                    </Link>
                  ))}
                </div>
              </nav>

              {/* Footer */}
              <div className="px-6 md:px-10 py-5 md:py-8 border-t border-[#e8e8e8]">
                <div className="flex flex-row justify-between items-center">
                  <div className="flex gap-4 items-center">
                    {socialLinks.map((social: SocialLink) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#aaa] hover:text-[#111] transition-colors duration-200"
                        aria-label={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>

                  <a
                    href="mailto:samujalphukan@yahoo.com"
                    className="text-[10px] text-[#aaa] hover:text-[#111] transition-colors uppercase tracking-[0.2em]"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    Mail
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}