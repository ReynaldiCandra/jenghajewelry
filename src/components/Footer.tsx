import Image from "next/image";

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Nilai Kami", href: "#nilai" },
  { label: "Layanan", href: "#layanan" },
  { label: "Galeri", href: "#galeri" },
  { label: "Blog", href: "#blog" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-espresso text-white">
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-5">
            <div className="relative w-10 h-10">
              <Image
                src="/logo.png"
                alt="Jeengha Jewelry"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <span className="font-serif text-xl font-semibold text-white">Jeengha</span>
              <span className="block text-[9px] tracking-[0.25em] text-brand-gold font-sans font-medium uppercase">
                Jewelry
              </span>
            </div>
          </div>
          <p className="font-sans text-sm text-white/50 leading-relaxed max-w-xs mb-6">
            Spesialis cincin tunangan dan pernikahan dengan material emas, palladium, dan silver berkualitas tinggi. Kami hadir untuk membuat momen Anda tak terlupakan.
          </p>
          {/* Social */}
          <div className="flex gap-3">
            {[
              { label: "Instagram", icon: "IG", href: "https://www.instagram.com/" },
              { label: "WhatsApp", icon: "WA", href: "https://wa.me/6289767705361" },
              { label: "Tokopedia", icon: "TO", href: "#" },
              { label: "Shopee", icon: "SH", href: "#" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-[10px] font-sans font-medium text-white/60 hover:border-brand-gold hover:text-brand-gold transition-colors duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-sans text-xs tracking-[0.15em] text-brand-gold uppercase font-medium mb-5">
            Navigasi
          </h4>
          <ul className="space-y-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-sans text-sm text-white/50 hover:text-white transition-colors duration-200"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-sans text-xs tracking-[0.15em] text-brand-gold uppercase font-medium mb-5">
            Hubungi Kami
          </h4>
          <ul className="space-y-4">
            <li className="font-sans text-sm text-white/50 leading-relaxed">
              <span className="block text-white/80 mb-0.5 font-medium">Alamat</span>
              Lt. UG — Revo Mall Bekasi<br />
              Jl. Ahmad Yani No. Kav. 1,<br />
              Pekayon Jaya, Bekasi Selatan 17148
            </li>
            <li>
              <a href="tel:089767705361" className="font-sans text-sm text-white/50 hover:text-white transition-colors">
                <span className="block text-white/80 font-medium mb-0.5">Telepon</span>
                0897 6770 536
              </a>
            </li>
            <li>
              <a href="mailto:info@jeenghajewelry.com" className="font-sans text-sm text-white/50 hover:text-white transition-colors">
                <span className="block text-white/80 font-medium mb-0.5">Email</span>
                info@jeenghajewelry.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="font-sans text-xs text-white/30">
            © {new Date().getFullYear()} Jeengha Jewelry. Hak cipta dilindungi.
          </span>
          <div className="flex gap-5">
            {["Kebijakan Privasi", "Syarat & Ketentuan"].map((l) => (
              <a key={l} href="#" className="font-sans text-xs text-white/30 hover:text-white/60 transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
