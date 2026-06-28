"use client";

import { useState, useEffect } from "react";
import { House, Sparkles, Images, AlignJustify } from "lucide-react";

const navItems = [
  { icon: House, label: "Beranda", href: "beranda" },
  { icon: Sparkles, label: "Produk", href: "produk" },
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
          setActive(id); break;
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
    if (item.isMenu) { setMenuOpen(!menuOpen); return; }
    scrollTo(item.href);
    setActive(item.href);
  };

  const handleWA = () => {
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent("Halo Jeengha Jewelry, saya ingin konsultasi.")}`, "_blank");
  };

  const allNavItems = [
    navItems[0],
    navItems[1],
    { isCenter: true },
    navItems[2],
    navItems[3],
  ];

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
          <div className="relative bg-brand-espresso rounded-[28px] shadow-2xl overflow-visible">

            {/* Wave cutout for center button */}
            <svg className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[1px]" width="80" height="30" viewBox="0 0 80 30" fill="none">
              <path d="M0 0 Q20 0 28 8 Q35 18 40 18 Q45 18 52 8 Q60 0 80 0" fill="#1C0F06" />
            </svg>

            <div className="flex items-center justify-around px-2 pt-3 pb-2">
              {allNavItems.map((item: any, index) => {
                if (item.isCenter) {
                  return (
                    <div key="center" className="relative flex flex-col items-center -mt-7">
                      <button
                        onClick={handleWA}
                        className="w-14 h-14 rounded-full bg-brand-orange flex items-center justify-center shadow-xl shadow-brand-orange/40 border-4 border-[#1C0F06]"
                      >
                        <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.845L0 24l6.336-1.508A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.36-.213-3.728.888.93-3.619-.234-.372A9.818 9.818 0 1112 21.818z"/>
                        </svg>
                      </button>
                      <span className="text-[10px] font-sans text-white/50 mt-1">Chat WA</span>
                    </div>
                  );
                }

                const Icon = item.icon;
                const isActive = active === item.href;
                return (
                  <button key={item.label} onClick={() => handleNav(item)} className="flex flex-col items-center gap-1 py-1 w-1/5">
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
