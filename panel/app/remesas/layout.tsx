import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Remesas - YAS Service Panel",
  description: "Envía y recibe dinero de forma segura y rápida. Gestiona tus tarjetas y transacciones",
};

export default function RemesasLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}


