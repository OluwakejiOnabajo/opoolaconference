"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? "bg-white/95 shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between py-3 px-4 md:px-0 gap-3">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-wrap">
          Professor Opoola Conference 2026
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 font-medium">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-[#3b021d]">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 shadow-md backdrop-blur-sm absolute inset-x-0 top-full z-40">
          <div className="flex flex-col gap-4 py-4 px-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-[#d9b526] text-nowrap"
                onClick={() => setMenuOpen(false)} // Close menu on link click
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
