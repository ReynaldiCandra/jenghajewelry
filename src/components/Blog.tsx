const posts = [
  {
    slug: "tips-memilih-cincin-tunangan",
    category: "Panduan",
    title: "5 Tips Memilih Cincin Tunangan yang Tepat untuk Pasangan Anda",
    excerpt:
      "Memilih cincin tunangan bisa terasa overwhelming. Dari ukuran hingga material — kami rangkum panduan lengkap agar Anda tidak salah pilih.",
    readTime: "4 menit",
    date: "12 Juni 2025",
  },
  {
    slug: "emas-vs-palladium-vs-silver",
    category: "Edukasi",
    title: "Emas, Palladium, atau Silver? Ini Perbedaan dan Kelebihannya",
    excerpt:
      "Setiap material perhiasan punya karakter uniknya. Pelajari mana yang paling cocok untuk gaya hidup dan budget Anda sebelum memutuskan.",
    readTime: "5 menit",
    date: "28 Mei 2025",
  },
  {
    slug: "cara-merawat-cincin-pernikahan",
    category: "Perawatan",
    title: "Cara Merawat Cincin Pernikahan Agar Tetap Berkilau Selamanya",
    excerpt:
      "Cincin pernikahan adalah investasi cinta seumur hidup. Ikuti panduan perawatan ini agar kilau dan keindahannya bertahan bertahun-tahun.",
    readTime: "3 menit",
    date: "10 Mei 2025",
  },
];

const categoryColors: Record<string, string> = {
  Panduan: "bg-brand-gold/10 text-brand-brown-mid",
  Edukasi: "bg-brand-orange/10 text-brand-orange",
  Perawatan: "bg-green-100 text-green-700",
};

export default function Blog() {
  return (
    <section id="blog" className="py-24 section-alt">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 reveal">
          <div>
            <div className="ornament justify-start mb-4">
              <span className="text-xs tracking-[0.2em] text-brand-gold font-sans font-medium uppercase">
                ✦ Blog & Edukasi
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-brand-espresso leading-tight">
              Panduan & Inspirasi{" "}
              <em className="italic text-brand-orange">Perhiasan</em>
            </h2>
          </div>
          <a
            href="#blog"
            className="shrink-0 text-sm font-sans font-medium text-brand-orange border-b border-brand-orange/30 pb-0.5 hover:border-brand-orange transition-colors"
          >
            Lihat semua artikel →
          </a>
        </div>

        {/* Posts */}
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <article
              key={post.slug}
              className="reveal group bg-brand-cream rounded-2xl overflow-hidden border border-brand-gold/20 hover:border-brand-gold/50 hover:shadow-md transition-all duration-300 flex flex-col"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Placeholder image */}
              <div className="aspect-[16/9] bg-gradient-to-br from-brand-espresso to-brand-orange-dark flex items-center justify-center relative overflow-hidden">
                <span className="text-4xl opacity-20">✦</span>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-espresso/60 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span
                    className={`text-xs font-sans font-medium px-2.5 py-1 rounded-full ${categoryColors[post.category] || "bg-white/20 text-white"}`}
                  >
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                {/* Meta */}
                <div className="flex items-center gap-3 text-xs font-sans text-brand-espresso/50 mb-3">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime} baca</span>
                </div>

                <h3 className="font-serif text-lg font-semibold text-brand-espresso leading-snug mb-3 group-hover:text-brand-orange transition-colors duration-200">
                  {post.title}
                </h3>

                <p className="font-sans text-sm text-brand-espresso/60 leading-relaxed flex-1 mb-4">
                  {post.excerpt}
                </p>

                <a
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-sans font-medium text-brand-orange group/link"
                >
                  Baca artikel
                  <span className="group-hover/link:translate-x-1 transition-transform duration-200">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
