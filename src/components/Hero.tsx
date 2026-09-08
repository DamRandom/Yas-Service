"use client";

import { motion, Variants } from "framer-motion";
import { FaWhatsapp, FaShieldAlt, FaCheckCircle, FaGlobe } from "react-icons/fa";

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  const stats = [
    { title: "+3 Años", desc: "de trayectoria" },
    { title: "Transparente", desc: "en honorarios" },
    { title: "Caso a caso", desc: "atención única" },
    { title: "Internacional", desc: "alcance global" },
  ];

  return (
    <section id="inicio" className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden bg-corporate-pattern">

      {/* Ambient orb — slow drift */}
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(197, 160, 89, 0.12) 0%, rgba(11, 33, 63, 0.4) 40%, transparent 80%)",
        }}
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.6, 0.85, 0.6],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary small gold orb */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(197, 160, 89, 0.06) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 30, -15, 0],
          y: [0, -20, 10, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center space-y-7"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          {/* Institutional Badge — sin animate-ping */}
          <motion.div variants={itemVariants} className="inline-block">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0B213F]/90 border border-[#C5A059]/35 shadow-lg shadow-black/20 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
              <span className="text-[11px] font-semibold text-[#C5A059] uppercase tracking-[0.18em]">
                Tu trámite es nuestra prioridad
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] lg:leading-[1.1]"
          >
            Acompañamiento Migratorio
            <br />
            <span className="gold-gradient-text">& Gestión de Viajes</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto"
          >
            Orientación personalizada para ciudadanos cubanos en sus procesos migratorios
            y en la organización de su viaje hacia nuevos destinos.
          </motion.p>

          {/* Coverage */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 text-sm text-gray-400 bg-[#0A192F]/60 border border-[#1A2942] px-4 py-2 rounded-full backdrop-blur-sm"
          >
            <FaGlobe className="text-[#C5A059] shrink-0" />
            <span>
              Cuba · Rusia · Guyana · Surinam · Perú · <strong className="text-gray-300">y más</strong>
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: "0 14px 32px -10px rgba(197,160,89,0.45)" }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenModal}
              className="w-full sm:w-auto gold-gradient-bg text-[#050B14] font-bold text-base px-8 py-4 rounded-xl shadow-lg cursor-pointer flex items-center justify-center gap-2 animate-shine"
            >
              <FaShieldAlt className="text-lg shrink-0" />
              Solicitar Asesoría Gratuita
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="https://wa.me/51963807151?text=Hola%20Yas%20Service%2C%20deseo%20solicitar%20asesor%C3%ADa%20personalizada%20sobre%20mi%20proceso."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#0B213F]/90 hover:bg-[#0A192F] text-white font-semibold text-base px-7 py-4 rounded-xl border border-[#C5A059]/30 hover:border-[#C5A059]/70 transition-all backdrop-blur-sm"
            >
              <FaWhatsapp className="text-green-500 text-xl shrink-0" />
              Contactar por WhatsApp
            </motion.a>
          </motion.div>

          {/* Stats Strip */}
          <motion.div
            variants={itemVariants}
            className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-[#1A2942]/50"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, borderColor: "rgba(197,160,89,0.45)" }}
                className="flex flex-col items-start gap-0.5 p-4 rounded-xl bg-[#0A192F]/50 border border-[#1A2942]/80 transition-all cursor-default backdrop-blur-sm"
              >
                <div className="flex items-center gap-1.5">
                  <FaCheckCircle className="text-[#C5A059] text-xs shrink-0" />
                  <p className="text-sm font-bold text-white">{stat.title}</p>
                </div>
                <p className="text-[11px] text-gray-400 pl-4">{stat.desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}