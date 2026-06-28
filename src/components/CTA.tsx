export default function CTA() {
  return (
    <section className="py-16 bg-brand-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal rounded-3xl bg-brand-espresso px-8 py-16 text-center relative overflow-hidden">
          {/* Decorative rings */}
          <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full border border-brand-gold/10 pointer-events-none" />
          <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full border border-brand-gold/10 pointer-events-none" />

          <div className="ornament mb-5">
            <span className="text-xs tracking-[0.2em] text-brand-gold font-sans font-medium uppercase">
              ✦ Wujudkan Impian Anda
            </span>
          </div>

          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-white leading-tight mb-5 max-w-2xl mx-auto">
            Siap Memesan Cincin{" "}
            <em
              className="italic"
              style={{
                background: "linear-gradient(135deg, #D4A843, #F0CC78, #D4A843)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Impian Anda?
            </em>
          </h2>

          <p className="font-sans text-white/60 max-w-lg mx-auto leading-relaxed mb-10">
            Konsultasi gratis dengan tim kami. Kami akan membantu Anda dari memilih material, merancang desain, hingga perhiasan siap di tangan Anda.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6289767705361?text=Halo%20Jeengha%20Jewelry%2C%20saya%20ingin%20konsultasi%20mengenai%20cincin."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-sans font-medium text-sm text-white transition-all duration-200 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #D4A843 0%, #C4622D 100%)",
              }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Konsultasi via WhatsApp
            </a>
            <a
              href="mailto:info@jeenghajewelry.com"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-sans font-medium text-sm border border-white/20 text-white hover:bg-white/10 transition-all duration-200"
            >
              ✉ Kirim Email
            </a>
          </div>

          {/* Contact info */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center text-white/40 text-xs font-sans">
            <span>📞 0897 6770 536</span>
            <span className="hidden sm:block">·</span>
            <span>✉ info@jeenghajewelry.com</span>
            <span className="hidden sm:block">·</span>
            <span>📍 Revo Mall Bekasi, Lt. UG</span>
          </div>
        </div>
      </div>
    </section>
  );
}
