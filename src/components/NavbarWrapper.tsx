"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function NavbarWrapper() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />;
}