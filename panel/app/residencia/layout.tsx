import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trámites de Residencia - YAS Service Panel",
  description: "Gestiona y realiza seguimiento de todos tus trámites de residencia y documentación",
};

export default function ResidenciaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}


