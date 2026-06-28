"use client";

import Image from "next/image";

const products = [
  { id: "JJ-01", name: "Cincin Tunangan Emas 18K", material: "Emas 18K", price: "Rp 3.500.000", image: "https://images.pexels.com/photos/10983783/pexels-photo-10983783.jpeg" },
  { id: "JJ-02", name: "Cincin Couple Palladium", material: "Palladium 950", price: "Rp 4.200.000", image: "https://images.pexels.com/photos/9428881/pexels-photo-9428881.jpeg" },
  { id: "JJ-03", name: "Cincin Nikah Silver 925", material: "Silver 925", price: "Rp 1.800.000", image: "https://images.pexels.com/photos/3094345/pexels-photo-3094345.jpeg" },
  { id: "JJ-04", name: "Cincin Solitaire Emas", material: "Emas 18K", price: "Rp 5.500.000", image: "https://images.pexels.com/photos/31729341/pexels-photo-31729341.jpeg" },
  { id: "JJ-05", name: "Cincin Couple Emas Putih", material: "Emas Putih 18K", price: "Rp 6.800.000", image: "https://images.pexels.com/photos/13456843/pexels-photo-13456843.jpeg" },
  { id: "JJ-06", name: "Cincin Custom Ukiran", material: "Palladium 950", price: "Rp 3.900.000", image: "https://images.pexels.com/photos/25946875/pexels-photo-25946875.jpeg" },
  { id: "JJ-07", name: "Cincin Silver Minimalis", material: "Silver 925", price: "Rp 1.200.000", image: "https://images.pexels.com/photos/30193805/pexels-photo-30193805.jpeg" },
  { id: "JJ-08", name: "Cincin Tunangan Berlian", material: "Emas 18K + Berlian", price: "Rp 12.000.000", image: "https://images.pexels.com/photos/10983783/pexels-photo-10983783.jpeg" },
];

const WA = "6289767705361";

export default function Products() {
  const handleClick = (p: typeof products[0]) => {
    const msg = encodeURIComponent(`Halo Jeengha Jewelry, saya tertarik dengan produk:\n*${p.name}* (${p.id})\nMaterial: ${p.material}\nHarga: ${p.price}\n\nBoleh info lebih lanjut?`);
    window.open(`https://wa.me/${WA}?text=${msg}`, "_blank");
  };

  return (
    <section id="produk" className="py-20 bg-brand-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-brand-orange text-sm font-sans tracking-[0.2em] uppercase font-medium mb-3">✦ Koleksi Kami</p>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-espresso">Our <em className="text-brand-gold not-italic">Product</em></h2>
          <p className="mt-4 text-brand-espresso/60 font-sans text-sm max-w-md mx-auto">Klik produk untuk konsultasi langsung via WhatsApp</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((p) => (
            <div key={p.id} onClick={() => handleClick(p)} className="group cursor-pointer">
              <div className="relative aspect-square overflow-hidden rounded-xl bg-brand-cream-dark mb-3">
                <Image src={p.image} alt={p.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-brand-espresso/0 group-hover:bg-brand-espresso/30 traition-all duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white text-brand-espresso text-xs font-sans font-semibold px-4 py-2 rounded-full shadow-lg">Tanya via WA</span>
                </div>
                <div className="absolute top-2 left-2 bg-brand-espresso/80 text-white text-[10px] font-sans font-medium px-2 py-1 rounded-full">{p.id}</div>
              </div>
              <p className="font-sans text-[11px] text-brand-gold uppercase tracking-wider mb-0.5">{p.material}</p>
              <h3 className="font-serif text-sm text-brand-espresso leading-snug mb-1 group-hover:text-brand-orange transition-colors">{p.name}</h3>
              <p className="font-sans text-sm font-semibold text-brand-espresso">{p.price}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href={`https://wa.me/${WA}?text=${encodeURIComponent("Halo Jeengha Jewelry, saya ingin melihat koleksi lengkap.")}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-brand-orange text-brand-orange font-sans font-medium text-sm hover:bg-brand-orange hover:text-white transition-all duration-300">
            Lihat Semua Koleksi
          </a>
        </div>
      </div>
    </section>
  );
}
