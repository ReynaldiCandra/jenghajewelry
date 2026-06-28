"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Nilai Kami", href: "#nilai" },
  { label: "Layanan", href: "#layanan" },
  { label: "Galeri", href: "#galeri" },
  { label: "Blog", href: "#blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("beranda");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 nav-blur ${
          scrolled
            ? "bg-brand-cream/90 border-b border-brand-gold/20 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between">
          <button
            onClick={() => handleNav("#beranda")}
            className="flex items-center focus:outline-none group"
            aria-label="Kembali ke beranda"
          >
            <div className="relative w-36 h-12">
              <Image
                src="/logo.png"
                alt="Jeengha Jewelry"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              return (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`text-sm font-sans transition-colors duration-200 relative pb-0.5 ${
                    active === id
                      ? "text-brand-orange font-medium"
                      : "text-brand-espresso/70 hover:text-brand-espresso"
                  }`}
                >
                  {link.label}
                  {active === id && (
                    <span className="absolute bottom-0 left-0 right-0 h-px bg-brand-gold" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/6289767705361"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-sans font-medium px-5 py-2 rounded-full bg-brand-orange text-white hover:bg-brand-orange-dark transition-colors duration-200"
            >
              Konsultasi Gratis
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          >
            <span className={`block w-6 h-0.5 bg-brand-espresso transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-brand-espresso transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-brand-espresso transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-brand-cream/98 border-t border-brand-gold/20 px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-left text-base font-sans text-brand-espresso/80 hover:text-brand-orange transition-colors py-1"
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://wa.me/6289767705361"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-center text-sm font-medium px-5 py-2.5 rounded-full bg-brand-orange text-white"
            >
              Konsultasi Gratis
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
