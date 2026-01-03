"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, FileText } from "lucide-react";

export default function ResidenciaPage() {
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
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <ArrowLeft className="w-5 h-5 text-[#0E8C8C]" />
              <span className="text-white">Volver al inicio</span>
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#0E8C8C] rounded-lg flex items-center justify-center shadow-lg drop-shadow-[0_0_10px_#0E8C8C]">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white drop-shadow-lg">
                Trámites de Residencia
              </h1>
            </div>
          </div>
        </div>
      </nav>

      {/* Contenido principal */}
      <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="relative container mx-auto px-6 md:px-16 z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0E8C8C] mb-6 drop-shadow-lg">
              Trámites de Residencia
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Gestiona y realiza seguimiento de todos tus trámites de residencia y documentación.
            </p>
            <div className="bg-[#0A0F12]/70 border border-[#0E8C8C]/30 rounded-xl p-8 max-w-2xl mx-auto">
              <p className="text-gray-400">
                Esta sección estará disponible próximamente. Aquí podrás gestionar todos tus trámites de residencia.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}


