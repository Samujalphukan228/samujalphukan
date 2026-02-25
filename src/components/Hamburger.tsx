"use client";

import "./hamburger.css";

interface HamburgerProps {
  isOpen: boolean;
}

export default function Hamburger({ isOpen }: HamburgerProps) {
  return (
    <div className={`hamburger ${isOpen ? "open" : ""}`}>
      <span className="bar top"></span>
      <span className="bar bottom"></span>
    </div>
  );
}