"use client";

import { Dispatch, SetStateAction } from "react";
import Hamburger from "@/components/Hamburger";
import MobileMenu from "@/components/MobileMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiDownload } from "react-icons/hi";

interface NavLink {
  href: string;
  label: string;
}

interface NavbarProps {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Navbar({ menuOpen, setMenuOpen }: NavbarProps) {
  const pathname: string = usePathname();

  const navLinks: NavLink[] = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string): boolean => pathname === href;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center px-6 bg-white/90 backdrop-blur-sm border-b border-gray-100">

        {/* Left - Toggle Button */}
        <div className="flex-1">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 -ml-2 focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <Hamburger isOpen={menuOpen} />
          </button>
        </div>


        {/* Center - Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <h1 className="cormorant-garamond text-2xl md:text-3xl text-[#333333] font-semibold tracking-wide hover:text-[#555555] transition-colors">
              Samujal
            </h1>
          </Link>
        </div>


        {/* Right - Resume Download */}
        <div className="flex-1 flex justify-end">

          <a
            href="/Samujal_Phukan_Resume.pdf"
            download
            className="flex items-center gap-1.5 text-sm text-[#555555] hover:text-[#111111] transition-colors"
            aria-label="Download Resume"
          >
            <HiDownload className="text-lg" />
            <span className="hidden sm:inline">Resume</span>
          </a>

        </div>

      </nav>


      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        navLinks={navLinks}
        isActive={isActive}
      />

      {/* Spacer for fixed navbar */}
      <div className="h-16"></div>

    </>
  );
}