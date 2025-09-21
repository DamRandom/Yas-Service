"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-32 px-6 md:px-12 overflow-hidden">
      {/* Fondo dinámico */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0" />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-[#e25e0b]/40 rounded-full blur-3xl"
          initial={{ scale: 0.6, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>

      {/* Texto principal */}
      <motion.h2
        className="text-4xl md:text-6xl font-extrabold text-[#e25e0b] drop-shadow-[0_0_25px_#e25e0b] mb-12 tracking-wide"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Conéctate con Yas
      </motion.h2>

      {/* Botón */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Link
          href="https://wa.me/51987654321"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#e25e0b] text-white text-lg md:text-xl font-bold px-12 py-5 rounded-full shadow-lg drop-shadow-[0_0_15px_#e25e0b] hover:scale-110 hover:drop-shadow-[0_0_35px_#e25e0b] transition-transform duration-300"
        >
          WhatsApp
        </Link>
      </motion.div>
    </section>
  );
}
