"use client";

import Link from "next/link";
import { FileText, Send, Package } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  comingSoon?: boolean;
  index: number;
}

function ServiceCard({ title, description, icon, href, comingSoon, index }: ServiceCardProps) {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`relative h-full p-8 bg-[#0A0F12]/70 border border-transparent flex flex-col justify-between transition-all duration-300 ${
        comingSoon 
          ? "opacity-60 cursor-not-allowed" 
          : "cursor-pointer hover:scale-105 hover:shadow-lg group hover:border-[#0E8C8C]"
      }`}
    >
      <div>
        <div className="text-[#dad6d4] mb-4 flex justify-center">
          {icon}
        </div>
        <h3 className={`text-2xl font-semibold text-center mb-3 ${
          comingSoon ? "text-gray-500" : "text-[#0E8C8C]"
        }`}>
          {title}
        </h3>
        <p className="text-center text-gray-300">{description}</p>
      </div>
      <div className="mt-6 text-center">
        {comingSoon ? (
          <span className="inline-block px-4 py-2 text-sm font-medium text-gray-500 bg-gray-800 rounded-lg">
            Próximamente
          </span>
        ) : (
          <span className="inline-block px-4 py-2 text-sm font-medium text-[#0E8C8C] group-hover:text-[#b6eeee] transition-colors">
            Acceder →
          </span>
        )}
      </div>
    </motion.div>
  );

  if (comingSoon) {
    return <div>{content}</div>;
  }

  return (
    <Link href={href} className="block h-full">
      {content}
    </Link>
  );
}

export default function Home() {
  const services = [
    {
      title: "Trámites de Residencia",
      description: "Gestiona y realiza seguimiento de todos tus trámites de residencia y documentación.",
      icon: <FileText size={40} />,
      href: "/residencia",
      comingSoon: false,
    },
    {
      title: "Remesas",
      description: "Envía y recibe dinero de forma segura y rápida. Gestiona tus tarjetas y transacciones.",
      icon: <Send size={40} />,
      href: "/remesas",
      comingSoon: false,
    },
    {
      title: "Envíos",
      description: "Rastrea y gestiona todos tus envíos y paquetes desde un solo lugar.",
      icon: <Package size={40} />,
      href: "/envios",
      comingSoon: true,
    },
  ];

  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      {/* Fondo general fijo */}
      <div className="fixed inset-0 -z-10">
        {/* Gradiente base */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1200] via-[#1a1f2200] to-[#0a0f1200]" />

        {/* Burbujas azules (mar) */}
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#0E3A5F]/70 rounded-full blur-3xl animate-drift-slow" />
        <div className="absolute bottom-10 right-1/4 w-60 h-60 bg-[#0B2A46]/60 rounded-full blur-3xl animate-drift-medium" />
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-[#134B73]/50 rounded-full blur-3xl animate-drift-fast" />

        {/* Burbuja dorada (sol) */}
        <div className="absolute w-64 h-64 bg-[#FFB347]/70 rounded-full blur-3xl animate-drift-slow" style={{ left: '20%', top: '10%' }} />

        {/* Capa de blur encima */}
        <div className="absolute inset-0 backdrop-blur-[100px]" />
      </div>

      {/* Barra de navegación */}
      <nav className="relative bg-[#0A0F12]/80 backdrop-blur-sm border-b border-[#0E8C8C]/30 shadow-sm z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#0E8C8C] rounded-lg flex items-center justify-center shadow-lg drop-shadow-[0_0_10px_#0E8C8C]">
                <span className="text-white font-bold text-lg">YS</span>
              </div>
              <h1 className="text-2xl font-bold text-white drop-shadow-lg">
                YAS Service Panel
              </h1>
            </div>
          </div>
        </div>
      </nav>

      {/* Contenido principal */}
      <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="relative container mx-auto px-6 md:px-16 z-10 py-20">
          {/* Sección de bienvenida */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center text-[#0E8C8C] mb-6 drop-shadow-lg">
              Panel de Servicios
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Accede a todos los servicios disponibles desde un solo lugar. Gestiona tus trámites, remesas y envíos de manera sencilla.
            </p>
          </motion.div>

          {/* Grid de servicios */}
          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={service.href}
                comingSoon={service.comingSoon}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-[#061010]/80 text-gray-300 py-12 px-6 md:px-16 z-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} YAS Service Panel. Todos los derechos reservados.
            </p>
            <p className="text-sm text-gray-500">
              Versión 1.0.0
            </p>
          </div>
          {/* Línea inferior */}
          <div className="border-t border-[#e25e0b] drop-shadow-[0_0_15px_#e25e0b] mt-6 pt-6 text-center text-sm text-gray-400">
            Conectamos personas con soluciones rápidas y confiables.
          </div>
        </div>
      </footer>
    </main>
  );
}
