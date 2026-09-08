"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

interface CTAProps {
  onOpenModal: () => void;
}

export default function CTA({ onOpenModal }: CTAProps) {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <motion.div
          className="w-[700px] h-[350px] rounded-[100%] blur-[100px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(11, 33, 63, 0.5) 0%, transparent 70%)",
          }}
          initial={{ scale: 0.7, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B213F] border border-[#C5A059]/30 text-[#C5A059] text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            Evaluación sin compromiso
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-5">
            ¿Listo para dar el{" "}
            <span className="gold-gradient-text">primer paso?</span>
          </h2>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Cuéntanos tu situación y recibe orientación personalizada
            sobre tu proceso migratorio o de viaje. Sin compromiso, sin costos ocultos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: "0 14px 32px -10px rgba(197,160,89,0.45)" }}
            whileTap={{ scale: 0.96 }}
            onClick={onOpenModal}
            className="w-full sm:w-auto gold-gradient-bg text-[#050B14] font-bold text-base px-8 py-4 rounded-xl shadow-lg cursor-pointer flex items-center justify-center gap-2 animate-shine"
          >
            Solicitar Asesoría Gratuita
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="https://wa.me/51963807151?text=Hola%20Yas%20Service%2C%20deseo%20evaluar%20mi%20caso."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#0B213F]/90 hover:bg-[#0A192F] text-white font-semibold text-base px-7 py-4 rounded-xl border border-[#C5A059]/30 hover:border-[#C5A059]/70 transition-all backdrop-blur-sm"
          >
            <FaWhatsapp className="text-green-500 text-xl shrink-0" />
            Contactar por WhatsApp
          </motion.a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-xs text-gray-400"
        >
          Respuesta confidencial en menos de 24 horas · Honorarios previa revisión consular
        </motion.p>
      </div>
    </section>
  );
}
