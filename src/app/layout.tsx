import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yas Service | Acompañamiento Migratorio & Gestión de Viajes",
  description:
    "Yas Service brinda orientación, gestión documental y acompañamiento personalizado a ciudadanos cubanos para procesos de residencia legal en Perú y soluciones de viaje internacionales. Tu trámite es nuestra prioridad.",
  keywords: [
    "Yas Service",
    "Trámites migratorios cubanos",
    "Residencia legal en Perú",
    "Gestión de antecedentes penales MINJUS",
    "Reunificación familiar Perú",
    "Viajes internacionales cubanos",
    "Carné de Extranjería Perú",
    "INTERPOL Perú",
  ],
  authors: [{ name: "Yas Service" }],
  openGraph: {
    title: "Yas Service | Tu trámite es nuestra prioridad",
    description:
      "Acompañamiento personalizado en procesos migratorios y logística de viaje para ciudadanos cubanos en Cuba, Rusia, Guyana, Surinam y Perú.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050B14] text-[#F8F9FA]`}
      >
        {children}
      </body>
    </html>
  );
}
