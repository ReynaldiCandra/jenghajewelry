"use client";

import { useState, useEffect } from "react";
import { House, Sparkles, Images, AlignJustify, Phone } from "lucide-react";

const navItems = [
  { icon: House, label: "Beranda", href: "beranda" },
  { icon: Sparkles, label: "Produk", href: "produk" },
  { icon: Phone, label: "Konsultasi", href: "konsultasi", isCenter: true },
  { icon: Images, label: "Galeri", href: "galeri" },
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
    if (item.isCenter) {
      window.open(`https://wa.me/${WA}?text=${encodeURIComponent("Halo Jeengha Jewelry, saya ingin konsultasi.")}`, "_blank");
      return;
    }
    if (item.isMenu) { setMenuOpen(!menuOpen); return; }
    scrollTo(item.href);
    setActive(item.href);
  };

  return (
    <>
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden" onClick={() => setMenuOpen(false)} />
      )}
      {menuOpen && (
        <div className="fixed bottom-28 left-1/2 -translate-x-1/2 z-50 md:hidden bg-white rounded-2xl shadow-2xl px-6 py-4 min-w-[200px]">
          {allLinks.map((link) => (
            <button key={link.href} onClick={() => scrollTo(link.href)} className="w-full text-left py-2.5 text-sm font-sans text-brand-espresso hover:text-brand-orange transition-colors border-b border-brand-cream last:border-0">
              {link.label}
            </button>
          ))}
        </div>
      )}

      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="mx-3 mb-3">
          <div className="relative bg-brand-espresso rounded-[28px] shadow-2xl">
            <div className="flex items-end justify-around px-2 pb-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = active === item.href;

                if (item.isCenter) {
                  return (
                    <button key={item.label} onClick={() => handleNav(item)} className="flex flex-col items-center -mt-5 mb-1 gap-1">
                      <div className="w-14 h-14 rounded-full bg-brand-orange flex items-center justify-center shadow-xl shadow-brand-orange/50 border-4 border-brand-cream">
                        <Icon size={24} className="text-white" />
                      </div>
                      <span className="text-[10px] font-sans text-white/60">{item.label}</span>
                    </button>
                  );
                }

                return (
                  <button key={item.label} onClick={() => handleNav(item)} className="flex flex-col items-center gap-1 pt-3 pb-1 w-1/5">
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300 ${isActive ? "bg-brand-orange/20" : ""}`}>
                      <Icon size={20} className={`transition-colors duration-300 ${isActive ? "text-brand-orange" : "text-white/50"}`} />
                    </div>
                    <span className={`text-[10px] font-sans transition-colors duration-300 ${isActive ? "text-brand-orange" : "text-white/40"}`}>
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
