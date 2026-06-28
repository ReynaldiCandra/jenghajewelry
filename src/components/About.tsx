import Image from "next/image";

export default function About() {
  return (
    <section id="tentang" className="py-24 bg-brand-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="reveal relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3094345/pexels-photo-3094345.jpeg"
                alt="Perhiasan Jeengha Jewelry"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay frame */}
              <div className="absolute inset-0 border border-brand-gold/20 rounded-2xl pointer-events-none" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-brand-espresso text-white rounded-2xl px-6 py-5 shadow-xl">
              <div className="text-3xl font-serif font-bold text-brand-gold">10+</div>
              <div className="text-xs font-sans text-white/70 tracking-wide mt-0.5">Tahun Pengalaman</div>
            </div>
          </div>

          {/* Text side */}
          <div className="reveal">
            <div className="ornament mb-6">
              <span className="text-xs tracking-[0.2em] text-brand-gold font-sans font-medium uppercase">
                ✦ Tentang Kami
              </span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-brand-espresso leading-tight mb-6">
              Rumah Perhiasan{" "}
              <em className="italic text-brand-orange">Terpercaya</em> di Bekasi
            </h2>

            <p className="font-sans text-brand-espresso/70 leading-relaxed mb-5">
              Jeengha Jewelry adalah rumah perhiasan yang lahir dari kecintaan mendalam terhadap seni dan keindahan. Kami hadir untuk menemani momen paling berkesan dalam hidup Anda — dari lamaran hingga hari pernikahan.
            </p>
            <p className="font-sans text-brand-espresso/70 leading-relaxed mb-8">
              Setiap perhiasan kami dibuat dengan tangan oleh pengrajin terampil menggunakan material pilihan: <strong className="text-brand-espresso font-medium">emas 18K, palladium 950, dan silver 925</strong>. Kami percaya bahwa cincin bukan sekadar aksesori — ia adalah cerita cinta yang akan dikenang selamanya.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-brand-gold/20">
              {[
                { num: "500+", label: "Pasangan Bahagia" },
                { num: "3", label: "Material Premium" },
                { num: "100%", label: "Custom Made" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-serif text-2xl font-semibold text-brand-orange">
                    {s.num}
                  </div>
                  <div className="text-xs font-sans text-brand-espresso/60 mt-0.5 leading-tight">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Location */}
            <div className="mt-8 flex items-start gap-3 p-4 rounded-xl bg-brand-cream-dark border border-brand-gold/20">
              <span className="text-brand-gold text-lg mt-0.5">📍</span>
              <div>
                <div className="font-sans font-medium text-brand-espresso text-sm">
                  Kunjungi Showroom Kami
                </div>
                <div className="font-sans text-brand-espresso/60 text-sm mt-0.5 leading-relaxed">
                  Lt. UG — Revo Mall Bekasi, Jl. Ahmad Yani No. Kav. 1,<br />
                  Pekayon Jaya, Bekasi Selatan, Jawa Barat 17148
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
