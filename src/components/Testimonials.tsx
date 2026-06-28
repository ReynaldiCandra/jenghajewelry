const testimonials = [
  {
    name: "Rina & Dimas",
    location: "Bekasi",
    text: "Cincin tunangan kami sungguh luar biasa — desainnya persis seperti yang kami impikan. Tim Jeengha sangat sabar dan profesional dalam memandu kami dari awal hingga cincin jadi.",
    rating: 5,
    product: "Cincin Tunangan Custom Emas 18K",
  },
  {
    name: "Dewi & Fajar",
    location: "Jakarta Selatan",
    text: "Ukiran nama di cincin nikah kami terlihat begitu elegan. Kualitas emas-nya terasa premium dan berat di tangan. Pengiriman juga aman dengan packaging yang sangat cantik!",
    rating: 5,
    product: "Cincin Pernikahan + Ukiran Nama",
  },
  {
    name: "Sari & Budi",
    location: "Depok",
    text: "Pelayanan di toko sangat ramah dan tidak pernah terasa terburu-buru. Staf membantu kami memilih material dan desain yang sesuai budget tanpa mengurangi kualitas sedikit pun.",
    rating: 5,
    product: "Cincin Palladium Couple",
  },
  {
    name: "Amanda & Reza",
    location: "Tangerang",
    text: "Sudah dua tahun kami pakai cincin dari Jeengha dan masih seperti baru! Memang tidak salah pilih. Waktu service juga cepat dan hasilnya memuaskan.",
    rating: 5,
    product: "Cincin Silver 925 Custom",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-cream">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="ornament mb-4">
            <span className="text-xs tracking-[0.2em] text-brand-gold font-sans font-medium uppercase">
              ✦ Testimoni
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-brand-espresso leading-tight mb-4">
            Kata Mereka Tentang{" "}
            <em className="italic text-brand-orange">Jeengha</em>
          </h2>
          <p className="font-sans text-brand-espresso/60 max-w-lg mx-auto">
            Kepercayaan dan kebahagiaan pelanggan adalah mahkota kami yang sesungguhnya.
          </p>
        </div>

        {/* Testimonial grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="reveal bg-brand-cream-dark rounded-2xl p-6 border border-brand-gold/20 hover:border-brand-gold/50 transition-all duration-300 flex flex-col"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <span key={si} className="text-brand-gold text-base">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif italic text-brand-espresso/80 text-sm leading-relaxed flex-1 mb-5">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent mb-4" />

              {/* Author */}
              <div>
                <div className="font-sans font-semibold text-brand-espresso text-sm">
                  {t.name}
                </div>
                <div className="font-sans text-xs text-brand-espresso/50 mt-0.5">
                  {t.location}
                </div>
                <div className="font-sans text-xs text-brand-orange mt-1.5 font-medium">
                  {t.product}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust metric */}
        <div className="mt-14 text-center reveal">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-brand-espresso">
            <span className="text-brand-gold text-xl">★★★★★</span>
            <span className="font-sans text-white/90 text-sm font-medium">
              4.9/5 dari 500+ ulasan pelanggan
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
