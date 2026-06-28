import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jeengha Jewelry — Cincin Tunangan & Pernikahan Elegan",
  description:
    "Jeengha Jewelry adalah spesialis cincin tunangan dan pernikahan dengan material emas, palladium, dan silver berkualitas tinggi. Kustomisasi perhiasan impian Anda di Revo Mall Bekasi.",
  keywords:
    "cincin tunangan, cincin pernikahan, perhiasan custom, emas, palladium, silver, Bekasi, Jeengha Jewelry",
  openGraph: {
    title: "Jeengha Jewelry",
    description: "Simbol cinta yang abadi untuk momen tak terlupakan.",
    url: "https://jeenghajewelry.com",
    siteName: "Jeengha Jewelry",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
