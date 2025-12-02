"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#theme", label: "Theme" },
  { href: "/#call-for-papers", label: "Call for Papers" },
  { href: "/#speakers", label: "Speakers" },
  { href: "/registration", label: "Registration" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all ${
        scrolled ? "bg-white/95 shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between py-3">
        <Link href="/" className="text-xl font-bold text-conferenceBlue">
          Professor Opoola Conference 2026
        </Link>

        <div className="hidden md:flex gap-6 font-medium">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-conferenceBlue">
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
