"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center text-[#0A0F12] overflow-hidden">
      <div className="relative container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-16 z-10">
        {/* Columna Izquierda - Logo + Info */}
        <div className="flex flex-col justify-center space-y-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <Image
              src="/logo.png"
              alt="Yas Service Logo"
              width={220}
              height={220}
              className="object-contain drop-shadow-[0_0_30px_rgba(255,165,0,0.5)]"
              priority
            />
          </motion.div>

          {/* Tagline principal resumido */}
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight text-[#0E8C8C] drop-shadow-lg"
          >
            Conexión Global
          </motion.h1>

          {/* Subtítulo comercial */}
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex gap-4 flex-wrap text-lg md:text-xl max-w-md justify-center"
          >
            <span className="text-[#e25e0b] drop-shadow-[0_0_8px_#e25e0b]">
              #Remesas
            </span>
            <span className="text-[#e25e0b] drop-shadow-[0_0_8px_#e25e0b]">
              #Envíos
            </span>
            <span className="text-[#e25e0b] drop-shadow-[0_0_8px_#e25e0b]">
              #Vacaciones
            </span>

            <span className="w-full text-gray-200 font-semibold mt-3 text-center">
              Todo en un lugar, rápido y confiable siempre.
            </span>
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <button className="px-8 py-4 bg-[#0E8C8C] text-lg rounded-full font-semibold shadow-xl hover:bg-[#086b6b] hover:text-[#b6eeee] transition relative group overflow-hidden">
              <span className="relative z-10">Empieza ahora</span>
              {/* Glow animado */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0E8C8C] to-[#086b6b] opacity-0 group-hover:opacity-100 blur-xl transition"></div>
            </button>
          </motion.div>
        </div>

        {/* Columna Derecha - Imagen circular con borde naranja atardecer */}
        {/* Columna Derecha - Imagen circular con borde tipo sol atardecer */}
        {/* Columna Derecha - Imagen circular con borde tipo sol atardecer */}
        <div className="flex justify-center md:justify-end items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative w-[340px] h-[340px] md:w-[460px] md:h-[460px] 
               rounded-full overflow-hidden 
               shadow-[0_0_60px_rgba(226,94,11,0.6)] 
               border-4 border-transparent 
               bg-[radial-gradient(circle_at_center,_#FFD93D,_#FFB347,_#E25E0B)] 
               p-1"
          >
            <Image
              src="/hero-image.jpg"
              alt="Imagen Principal"
              width={460}
              height={460}
              className="object-cover w-full h-full rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
