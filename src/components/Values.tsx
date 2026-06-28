const values = [
  {
    icon: "✦",
    title: "Kualitas Tak Tertandingi",
    desc: "Kami berkomitmen menggunakan bahan baku terbaik yang telah bersertifikat. Setiap perhiasan melewati kontrol kualitas ketat sebelum sampai ke tangan Anda.",
    detail: "Emas 18K • Palladium 950 • Silver 925",
  },
  {
    icon: "◈",
    title: "Desain Elegan & Abadi",
    desc: "Setiap desain lahir dari proses kreatif mendalam yang memadukan estetika modern dengan sentuhan klasik yang tidak lekang oleh waktu.",
    detail: "Custom • Ready Stock • Kolaborasi Desainer",
  },
  {
    icon: "❋",
    title: "Pelayanan dari Hati",
    desc: "Kami menemani Anda dari konsultasi pertama hingga perhiasan berada di tangan. Kepuasan Anda adalah standar tertinggi yang kami kejar setiap harinya.",
    detail: "Konsultasi Gratis • After-Sales • Garansi",
  },
  {
    icon: "◇",
    title: "Pengiriman Aman & Terpercaya",
    desc: "Perhiasan Anda dikemas dengan sangat teliti dan dikirim dengan jasa pengiriman asuransi ke seluruh Indonesia — aman sampai ke tangan Anda.",
    detail: "Asuransi Pengiriman • Seluruh Indonesia",
  },
];

export default function Values() {
  return (
    <section id="nilai" className="py-24 section-alt">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="ornament mb-4">
            <span className="text-xs tracking-[0.2em] text-brand-gold font-sans font-medium uppercase">
              ✦ Nilai Kami
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-brand-espresso leading-tight mb-4">
            Mengapa Memilih{" "}
            <em className="italic text-brand-orange">Jeengha?</em>
          </h2>
          <p className="font-sans text-brand-espresso/60 max-w-xl mx-auto leading-relaxed">
            Empat pilar yang menjadi fondasi setiap karya dan pelayanan kami — karena Anda layak mendapatkan yang terbaik.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="reveal group relative bg-brand-cream rounded-2xl p-6 border border-brand-gold/20 hover:border-brand-gold/60 transition-all duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Icon */}
              <div className="text-brand-gold text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {v.icon}
              </div>

              {/* Gold accent top */}
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />

              <h3 className="font-serif text-lg font-semibold text-brand-espresso mb-3 leading-snug">
                {v.title}
              </h3>
              <p className="font-sans text-sm text-brand-espresso/60 leading-relaxed mb-4">
                {v.desc}
              </p>
              <div className="text-xs font-sans text-brand-orange/80 font-medium tracking-wide border-t border-brand-gold/20 pt-3">
                {v.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust bar */}
        <div className="mt-14 grid sm:grid-cols-3 gap-4 reveal">
          {[
            { label: "Material Bersertifikat", icon: "🏅" },
            { label: "Garansi Keaslian", icon: "🛡️" },
            { label: "Pengerjaan Tangan Terampil", icon: "💎" },
          ].map((t) => (
            <div
              key={t.label}
              className="flex items-center gap-3 px-5 py-3 rounded-full border border-brand-gold/30 bg-brand-cream justify-center"
            >
              <span>{t.icon}</span>
              <span className="font-sans text-sm text-brand-espresso font-medium">
                {t.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
