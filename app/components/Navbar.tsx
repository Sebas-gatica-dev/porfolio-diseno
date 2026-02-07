"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  { name: "UX/UI", href: "/ux-ui" },
  { name: "Editorial", href: "/editorial" },
  { name: "Afiches", href: "/afiches" },
  { name: "Arquigrafía", href: "/arquigrafia" },
  { name: "Branding", href: "/branding" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-40 border-b border-gray-100 text-black">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <Link href="/" className="font-bold text-2xl tracking-tighter">Soff.Design</Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm uppercase tracking-widest hover:text-gray-500 transition-colors">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Cerrar" : "Menú"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b p-6 flex flex-col gap-4 animate-in slide-in-from-top">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-medium">
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}