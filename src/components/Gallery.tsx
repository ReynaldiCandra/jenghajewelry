"use client";

import { useState } from "react";
import Image from "next/image";

const galleryItems = [
  {
    src: "https://images.pexels.com/photos/31729341/pexels-photo-31729341.jpeg",
    label: "Cincin Tunangan Emas",
    cat: "Tunangan",
  },
  {
    src: "https://images.pexels.com/photos/3094345/pexels-photo-3094345.jpeg",
    label: "Koleksi Premium",
    cat: "Pernikahan",
  },
  {
    src: "https://images.pexels.com/photos/30193805/pexels-photo-30193805.jpeg",
    label: "Custom Design",
    cat: "Custom",
  },
  {
    src: "https://images.pexels.com/photos/25946875/pexels-photo-25946875.jpeg",
    label: "Silver Edition",
    cat: "Silver",
  },
  {
    src: "https://images.pexels.com/photos/13456843/pexels-photo-13456843.jpeg",
    label: "Palladium Series",
    cat: "Palladium",
  },
  {
    src: "https://images.pexels.com/photos/3094345/pexels-photo-3094345.jpeg",
    label: "Eternal Collection",
    cat: "Pernikahan",
  },
];

const filters = ["Semua", "Tunangan", "Pernikahan", "Custom", "Silver", "Palladium"];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("Semua");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered =
    activeFilter === "Semua"
      ? galleryItems
      : galleryItems.filter((g) => g.cat === activeFilter);

  return (
    <section id="galeri" className="py-24 section-alt">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <div className="ornament mb-4">
            <span className="text-xs tracking-[0.2em] text-brand-gold font-sans font-medium uppercase">
              ✦ Galeri
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-brand-espresso leading-tight mb-4">
            Koleksi &{" "}
            <em className="italic text-brand-orange">Karya Terbaik</em>
          </h2>
          <p className="font-sans text-brand-espresso/60 max-w-lg mx-auto">
            Setiap karya menceritakan kisah cinta yang unik — temukan inspirasi untuk perhiasan impian Anda.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10 reveal">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-sans font-medium transition-all duration-200 ${
                activeFilter === f
                  ? "bg-brand-espresso text-brand-gold"
                  : "bg-brand-cream border border-brand-gold/30 text-brand-espresso/70 hover:border-brand-gold/60"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filtered.map((item, i) => (
            <div
              key={item.src + i}
              className="reveal ring-card relative aspect-square rounded-2xl overflow-hidden cursor-pointer group border border-brand-gold/10"
              onClick={() => setLightbox(item.src)}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <Image
                src={item.src}
                alt={item.label}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-brand-espresso/0 group-hover:bg-brand-espresso/50 transition-all duration-300 flex items-end p-4">
                <div className="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-xs text-brand-gold font-sans tracking-widest uppercase block mb-1">
                    {item.cat}
                  </span>
                  <span className="text-white font-serif text-base">{item.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 reveal">
          <a
            href="https://wa.me/6289767705361"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-brand-orange text-brand-orange font-sans font-medium text-sm hover:bg-brand-orange hover:text-white transition-all duration-200"
          >
            Pesan Koleksi Ini →
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white text-2xl font-light"
            onClick={() => setLightbox(null)}
            aria-label="Tutup"
          >
            ✕
          </button>
          <div className="relative max-w-2xl w-full aspect-square rounded-2xl overflow-hidden">
            <Image
              src={lightbox}
              alt="Preview"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </section>
  );
}
