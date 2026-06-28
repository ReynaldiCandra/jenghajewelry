"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    headline: "Simbol Cinta",
    sub: "yang Abadi",
    desc: "Cincin tunangan & pernikahan dari emas, palladium, dan silver — dirancang untuk momen paling berkesan dalam hidup Anda.",
    bg: "from-brand-espresso via-brand-brown-mid to-brand-orange-dark",
    accent: "Koleksi Cincin Tunangan",
  },
  {
    headline: "Kustomisasi",
    sub: "Impian Anda",
    desc: "Dari desain sketsa hingga perhiasan jadi — kami wujudkan setiap detail dengan presisi dan penuh cinta.",
    bg: "from-[#1C0F06] via-[#3B1A0A] to-[#6B3D1E]",
    accent: "Custom Order",
  },
  {
    headline: "Kualitas",
    sub: "Tanpa Kompromi",
    desc: "Material bersertifikat, pengerjaan tangan terampil, garansi keaslian — karena momen Anda layak mendapatkan yang terbaik.",
    bg: "from-[#2A1A08] via-[#4A2E10] to-[#8B5E2A]",
    accent: "Kenapa Jeengha?",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % slides.length);
        setAnimating(false);
      }, 400);
    }, 5500);
    return () => clearInterval(t);
  }, []);

  const slide = slides[current];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="beranda"
      className={`relative min-h-screen flex items-center justify-center bg-gradient-to-br ${slide.bg} transition-all duration-1000 overflow-hidden`}
    >
      {/* Decorative rings */}
      <div className="absolute top-1/4 -left-24 w-64 h-64 rounded-full border border-brand-gold/10 pointer-events-none" />
      <div className="absolute top-1/3 -left-16 w-40 h-40 rounded-full border border-brand-gold/15 pointer-events-none" />
      <div className="absolute bottom-1/4 -right-24 w-80 h-80 rounded-full border border-brand-gold/10 pointer-events-none" />
      <div className="absolute bottom-1/3 -right-16 w-48 h-48 rounded-full border border-brand-gold/15 pointer-events-none" />

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "200px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <div
          className={`inline-flex items-center gap-2 mb-8 transition-all duration-400 ${
            animating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
          }`}
        >
          <span className="w-8 h-px bg-brand-gold" />
          <span className="text-brand-gold text-xs tracking-[0.2em] font-sans font-medium uppercase">
            {slide.accent}
          </span>
          <span className="w-8 h-px bg-brand-gold" />
        </div>

        {/* Headline */}
        <h1
          className={`font-serif text-5xl md:text-7xl lg:text-8xl font-semibold text-white leading-tight mb-2 transition-all duration-400 ${
            animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
        >
          {slide.headline}
        </h1>
        <h1
          className={`font-serif text-5xl md:text-7xl lg:text-8xl font-semibold italic leading-tight mb-8 transition-all duration-500 ${
            animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
          style={{
            background:
              "linear-gradient(135deg, #D4A843 0%, #F0CC78 50%, #D4A843 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {slide.sub}
        </h1>

        <p
          className={`text-white/70 font-sans text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed transition-all duration-500 ${
            animating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
          }`}
        >
          {slide.desc}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection("galeri")}
            className="px-8 py-3.5 rounded-full font-sans font-medium text-sm transition-all duration-200 hover:scale-105"
            style={{
              background:
                "linear-gradient(135deg, #D4A843 0%, #C4622D 100%)",
              color: "white",
            }}
          >
            ✦ Lihat Koleksi
          </button>
          <button
            onClick={() => scrollToSection("tentang")}
            className="px-8 py-3.5 rounded-full font-sans font-medium text-sm border border-white/30 text-white hover:bg-white/10 transition-all duration-200"
          >
            Tentang Jeengha
          </button>
        </div>

        {/* Slide indicators */}
        <div className="flex justify-center gap-2 mt-14">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-px transition-all duration-300 ${
                i === current
                  ? "w-10 bg-brand-gold"
                  : "w-4 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs tracking-widest font-sans uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
