"use client";

import "./hamburger.css";

export default function Hamburger({ isOpen }) {
  return (
    <div className={`hamburger ${isOpen ? "open" : ""}`}>
      <span className="bar top"></span>
      <span className="bar bottom"></span>
    </div>
  );
}