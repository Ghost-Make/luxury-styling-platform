"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact Us", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4">
      {/* Pill shaped cinematic navbar */}
      <nav 
        className={`relative w-full h-16 rounded-full transition-all duration-500 ease-magnetic border flex items-center justify-between px-2 ${
          isScrolled 
            ? "bg-midnight-obsidian/60 backdrop-blur-xl border-midnight-champagne/20 shadow-2xl" 
            : "bg-white/5 backdrop-blur-md border-white/10 shadow-lg"
        }`}
      >
        
        {/* Left Logo */}
        <div className="flex items-center pl-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-midnight-champagne animate-pulse" />
            <span className="text-xs font-black uppercase tracking-tighter text-foreground">GS</span>
          </div>
        </div>

        {/* Middle Links */}
        <div className="hidden md:flex items-center text-[10px] font-black uppercase tracking-[0.2em]">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById(link.href.replace('#', ''));
                if (target) {
                  target.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className={`px-4 py-2 rounded-full transition-all duration-300 hover:text-midnight-champagne group relative`}
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-midnight-champagne transition-all duration-300 group-hover:w-1/2" />
            </a>
          ))}
        </div>

        {/* Right side status / avatar */}
        <div className={`flex items-center gap-3 text-[9px] font-black transition-all duration-500 rounded-full pl-4 pr-1 py-1 border backdrop-blur-sm mr-1 ${
          isScrolled ? "bg-midnight-champagne/10 border-midnight-champagne/20 text-midnight-champagne" : "bg-white/10 border-white/20 text-foreground"
        }`}>
          <div className={`w-1.5 h-1.5 rotate-45 ${isScrolled ? "bg-midnight-champagne" : "bg-white"} animate-pulse`} />
          <span className="uppercase tracking-[0.15em]">Gayathri Sreekumar</span>
          <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10 relative shadow-sm grayscale hover:grayscale-0 transition-all duration-500">
            <Image
              src="https://www.gayathrisreekumar.com/_next/image?url=%2Fabout%2Fgayathri-bg.jpeg&w=1080&q=75"
              alt="Gayathri Sreekumar"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </nav>
    </div>
  );
}
