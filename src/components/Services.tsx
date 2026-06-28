const services = [
  {
    icon: "💍",
    title: "Cincin Tunangan",
    desc: "Desain cincin yang indah sebagai simbol cinta dan komitmen pertama Anda bersama pasangan.",
    cta: "Lihat Koleksi",
  },
  {
    icon: "👑",
    title: "Cincin Pernikahan",
    desc: "Cincin yang dirancang penuh makna untuk melambangkan kebersamaan Anda seumur hidup.",
    cta: "Lihat Koleksi",
  },
  {
    icon: "✏️",
    title: "Perhiasan Kustom",
    desc: "Wujudkan perhiasan impian Anda — dari sketsa awal hingga karya jadi, kami kerjakan setiap detail.",
    cta: "Custom Sekarang",
  },
  {
    icon: "🔧",
    title: "Perawatan Perhiasan",
    desc: "Servis profesional untuk menjaga perhiasan Anda tetap berkilau dan tampak baru sepanjang waktu.",
    cta: "Booking Servis",
  },
  {
    icon: "📐",
    title: "Konsultasi Desain",
    desc: "Tim desainer kami siap membantu Anda merancang perhiasan yang benar-benar mencerminkan kisah cinta Anda.",
    cta: "Konsultasi Gratis",
  },
  {
    icon: "📦",
    title: "Pengiriman Aman",
    desc: "Pengiriman cepat dengan packing premium dan asuransi penuh langsung ke alamat Anda di seluruh Indonesia.",
    cta: "Pelajari Lebih",
  },
];

export default function Services() {
  return (
    <section id="layanan" className="py-24 bg-brand-cream">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="ornament mb-4">
            <span className="text-xs tracking-[0.2em] text-brand-gold font-sans font-medium uppercase">
              ✦ Layanan Kami
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-brand-espresso leading-tight mb-4">
            Semua yang Anda Butuhkan,{" "}
            <em className="italic text-brand-orange">Kami Siapkan</em>
          </h2>
          <p className="font-sans text-brand-espresso/60 max-w-lg mx-auto leading-relaxed">
            Dari konsultasi pertama hingga perhiasan tiba di tangan Anda — Jeengha hadir di setiap langkah.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="reveal group bg-brand-cream-dark hover:bg-white rounded-2xl p-7 border border-brand-gold/20 hover:border-brand-gold/50 hover:shadow-lg transition-all duration-300"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="font-serif text-xl font-semibold text-brand-espresso mb-3">
                {s.title}
              </h3>
              <p className="font-sans text-sm text-brand-espresso/60 leading-relaxed mb-5">
                {s.desc}
              </p>
              <a
                href="https://wa.me/6289767705361"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-sans font-medium text-brand-orange hover:text-brand-orange-dark transition-colors group/cta"
              >
                {s.cta}
                <span className="group-hover/cta:translate-x-1 transition-transform duration-200">→</span>
              </a>
            </div>
          ))}
        </div>

        {/* Custom Order Steps */}
        <div className="mt-20 reveal">
          <div className="text-center mb-10">
            <h3 className="font-serif text-2xl font-semibold text-brand-espresso">
              Cara Custom Order Cincin Anda
            </h3>
          </div>
          <div className="grid sm:grid-cols-4 gap-0 relative">
            {/* connector line */}
            <div className="hidden sm:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-brand-gold/30 via-brand-gold to-brand-gold/30" />
            {[
              { step: "01", title: "Konsultasi", desc: "Ceritakan desain impian via WA atau kunjungi toko kami" },
              { step: "02", title: "Desain & Estimasi", desc: "Tim kami buat sketsa digital dan estimasi harga" },
              { step: "03", title: "Produksi", desc: "Pengerjaan 7–14 hari kerja oleh pengrajin terpilih" },
              { step: "04", title: "Terima & Bahagia", desc: "Ambil di toko atau dikirim dengan packing eksklusif" },
            ].map((s) => (
              <div key={s.step} className="text-center px-4 relative">
                <div className="w-16 h-16 rounded-full bg-brand-espresso text-brand-gold font-serif text-xl font-bold flex items-center justify-center mx-auto mb-4 border-4 border-brand-cream relative z-10">
                  {s.step}
                </div>
                <h4 className="font-serif font-semibold text-brand-espresso mb-2">{s.title}</h4>
                <p className="font-sans text-xs text-brand-espresso/60 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
