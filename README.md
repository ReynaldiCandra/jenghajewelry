# Jeengha Jewelry — Next.js Website

Website resmi Jeengha Jewelry, dibangun dengan Next.js 14, TypeScript, dan Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Deployment:** Vercel
- **Fonts:** Playfair Display + Inter (Google Fonts)

## Setup Lokal

### 1. Clone & Install

```bash
git clone https://github.com/USERNAME/jeengha-jewelry.git
cd jeengha-jewelry
npm install
```

### 2. Tambahkan Logo

Letakkan file logo Jeengha Jewelry di:
```
public/logo.png
```

### 3. Jalankan Development Server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## Deploy ke Vercel

### Cara 1: Via GitHub (Rekomendasi)

1. Push kode ke GitHub repository
2. Buka [vercel.com](https://vercel.com) → Import Repository
3. Pilih repo `jeengha-jewelry`
4. Klik **Deploy** — selesai!

### Cara 2: Via Vercel CLI

```bash
npm i -g vercel
vercel
```

## Arahkan Domain dari Rumahweb ke Vercel

1. Di Vercel → Settings → Domains → tambahkan `jeenghajewelry.com`
2. Di panel Rumahweb → DNS Management → ubah record:
   ```
   A     @     76.76.19.19        (Vercel IP)
   CNAME www   cname.vercel-dns.com
   ```
3. Tunggu propagasi DNS 15–60 menit.

## Struktur Project

```
src/
├── app/
│   ├── layout.tsx      # Root layout + metadata
│   ├── page.tsx        # Main page (one-page)
│   └── globals.css     # Global styles
└── components/
    ├── Navbar.tsx       # Sticky nav + mobile menu
    ├── Hero.tsx         # Hero slider
    ├── About.tsx        # Tentang kami
    ├── Values.tsx       # Nilai kami
    ├── Services.tsx     # Layanan + custom order steps
    ├── Gallery.tsx      # Galeri + lightbox + filter
    ├── Testimonials.tsx # Ulasan pelanggan
    ├── Blog.tsx         # Artikel & edukasi
    ├── CTA.tsx          # Call to action
    ├── Footer.tsx       # Footer
    ├── ScrollReveal.tsx # Animasi scroll
    └── WAButton.tsx     # Tombol WhatsApp floating
```

## Kustomisasi

### Ganti nomor WhatsApp
Cari semua `6289767705361` dan ganti dengan nomor WA Jeengha.

### Ganti foto galeri
Edit `src/components/Gallery.tsx` → array `galleryItems`, ganti URL foto.

### Tambah artikel blog
Edit `src/components/Blog.tsx` → array `posts`.

### Ganti warna brand
Edit `tailwind.config.ts` → `colors.brand`.

## Kontak Developer

WhatsApp: [hubungi developer]
