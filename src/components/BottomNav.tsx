"use client";

import { useState, useEffect } from "react";
import { House, Sparkles, MessageCircle, GalleryHorizontalEnd, AlignJustify } from "lucide-react";

const navItems = [
  { icon: House, label: "Beranda", href: "beranda" },
  { icon: Sparkles, label: "Produk", href: "produk" },
  { icon: MessageCircle, label: "Konsultasi", href: "wa", isWA: true },
  { icon: GalleryHorizontalEnd, label: "Galeri", href: "galeri" },
  { icon: AlignJustify, label: "Menu", href: "", isMenu: true },
];

const WA = "6289767705361";
const allLinks = [
  { label: "Tentang Kami", href: "tentang" },
  { label: "Nilai Kami", href: "nilai" },
  { label: "Layanan", href: "layanan" },
  { label: "Testimoni", href: "testimoni" },
  { label: "Blog", href: "blog" },
];

export default function BottomNav() {
  const [active, setActive] = useState("beranda");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const ids = ["beranda", "produk", "galeri", "tentang", "nilai", "layanan", "blog"];
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleNav = (item: typeof navItems[0]) => {
    if (item.isWA) {
      window.open(`https://wa.me/${WA}?text=${encodeURIComponent("Halo Jeengha Jewelry, saya ingin konsultasi.")}`, "_blank");
      return;
    }
    if (item.isMenu) {
      setMenuOpen(!menuOpen);
      return;
    }
    scrollTo(item.href);
    setActive(item.href);
  };

  return (
    <>
      {/* Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Popup Menu */}
      {menuOpen && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 md:hidden bg-white rounded-2xl shadow-2xl px-6 py-4 min-w-[200px]">
          {allLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="w-full text-left py-2.5 text-sm font-sans text-brand-espresso hover:text-brand-orange transition-colors border-b border-brand-cream last:border-0"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}

      {/* Bottom Nav Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="mx-4 mb-4 bg-brand-espresso/95 backdrop-blur-md rounded-2xl shadow-2xl px-2 py-2">
          <div className="flex items-center justify-around">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = active === item.href;
              const isWA = item.isWA;

              return (
                <button
                  key={item.label}
                  onClick={() => handleNav(item)}
                  className="flex flex-col items-center gap-1 px-3 py-1.5 relative"
                >
                  {isWA ? (
                    <div className="w-12 h-12 -mt-6 rounded-2xl bg-brand-orange flex items-center justify-center shadow-lg shadow-brand-orange/40">
                      <Icon size={22} className="text-white" />
                    </div>
                  ) : (
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 ${
                      isActive ? "bg-brand-orange/20" : ""
                    }`}>
                      <Icon
                        size={20}
                        className={`transition-colors duration-200 ${
                          isActive ? "text-brand-orange" : "text-white/60"
                        }`}
                      />
                    </div>
                  )}
                  <span className={`text-[10px] font-sans transition-colors duration-200 ${
                    isWA ? "text-brand-orange mt-1" : isActive ? "text-brand-orange" : "text-white/50"
                  }`}>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
