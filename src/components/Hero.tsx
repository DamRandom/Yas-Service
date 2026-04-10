"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full pt-28 pb-12 md:pt-40 md:pb-24 lg:min-h-screen flex items-center overflow-hidden text-white">
      {/* Fondos y decoraciones - Se ajustan al tema oscuro */}
      <div className="absolute top-[10%] left-[-10%] w-[300px] h-[300px] bg-[#0E8C8C]/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-[#e25e0b]/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container relative z-10 mx-auto px-6 md:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        
        {/* Izquierda: Textos */}
        <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left">
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 lg:mb-8"
          >
            <Image
              src="/logo.png"
              alt="Yas Service Logo"
              width={260}
              height={260}
              className="w-[180px] sm:w-[220px] lg:w-[260px] drop-shadow-[0_0_30px_rgba(255,165,0,0.5)] object-contain mx-auto lg:mx-0"
              priority
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6"
          >
            <span className="bg-[#e25e0b]/10 text-[#e25e0b] px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full shadow-sm border border-[#e25e0b]/30 backdrop-blur-md">Remesas</span>
            <span className="bg-[#0E8C8C]/10 text-[#0E8C8C] px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full shadow-sm border border-[#0E8C8C]/30 backdrop-blur-md">Envíos</span>
            <span className="bg-[#FFD93D]/10 text-[#FFD93D] px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full shadow-sm border border-[#FFD93D]/30 backdrop-blur-md">Vacaciones</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-black leading-[1.05] tracking-tight mb-6 drop-shadow-lg"
          >
            Conexión <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E8C8C] to-[#086b6b]">Global</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-lg mb-8 lg:mb-10 font-medium leading-relaxed drop-shadow-md"
          >
            Todo lo que necesitas en un solo lugar. <span className="font-bold text-white">Rápido, seguro y confiable siempre.</span>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button className="w-full sm:w-auto px-8 py-4 bg-[#0E8C8C] text-white text-base lg:text-lg rounded-full font-bold shadow-[0_0_20px_rgba(14,140,140,0.4)] hover:bg-[#086b6b] hover:shadow-[0_0_30px_rgba(14,140,140,0.6)] hover:-translate-y-1 transition-all duration-300">
              Empieza ahora
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-[#0A0F12]/50 backdrop-blur-md border border-white/20 text-white text-base lg:text-lg rounded-full font-bold hover:bg-white/10 hover:border-white/40 transition-all duration-300 shadow-sm flex items-center justify-center gap-2">
              Ver servicios
            </button>
          </motion.div>
        </div>

        {/* Derecha: Imagen responsiva horizontal en móvil */}
        <div className="w-full lg:w-[45%]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative w-full aspect-video lg:aspect-[4/5] xl:aspect-[3/4] rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-white/10"
          >
            <Image
              src="/hero-image.jpg"
              alt="Yas Service"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Elemento de seguridad/badge encima de la imagen ajustado a modo oscuro */}
            <div className="absolute bottom-4 left-4 lg:bottom-8 lg:left-8 bg-[#0A0F12]/80 backdrop-blur-md p-3 lg:p-4 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.5)] border border-white/10 flex items-center gap-3">
               <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-[#e25e0b] to-[#c95106] flex items-center justify-center shrink-0">
                 <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                 </svg>
               </div>
               <div>
                  <p className="text-white text-sm lg:text-base font-bold whitespace-nowrap">Confiabilidad 100%</p>
                  <p className="text-gray-300 text-xs lg:text-sm">Trámites Seguros</p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
