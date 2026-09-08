"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaSearch, FaClipboardCheck, FaRocket, FaShieldAlt } from "react-icons/fa";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: <FaWhatsapp className="text-xl text-green-400" />,
      title: "Contacto por WhatsApp",
      description:
        "Nos cuentas tu situación actual, ubicación geográfica y tu meta migratoria o de viaje. Sin formularios complejos.",
    },
    {
      num: "02",
      icon: <FaSearch className="text-xl text-[#C5A059]" />,
      title: "Evaluación de tu caso",
      description:
        "Analizamos tu documentación disponible, la viabilidad de las modalidades legales y las mejores rutas para tu situación.",
    },
    {
      num: "03",
      icon: <FaClipboardCheck className="text-xl text-[#C5A059]" />,
      title: "Tu hoja de ruta",
      description:
        "Te presentamos el procedimiento idóneo, los requisitos documentales, los tiempos estimados y los costos de forma clara.",
    },
    {
      num: "04",
      icon: <FaRocket className="text-xl text-[#C5A059]" />,
      title: "Acompañamiento integral",
      description:
        "Iniciamos la preparación de documentos, citas consulares, gestión de pasajes y te acompañamos hasta el destino.",
    },
  ];

  return (
    <section id="proceso" className="py-24 bg-[#050B14] relative border-t border-[#1A2942]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B213F] border border-[#C5A059]/30 text-[#C5A059] text-xs font-semibold uppercase tracking-wider mb-4">
            <FaShieldAlt className="shrink-0" /> Proceso Estructurado
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            ¿Cómo <span className="gold-gradient-text">trabajamos?</span>
          </h2>
          <p className="text-gray-300 mt-5 text-base leading-relaxed">
            Metodología clara, rápida y transparente para guiarte con total seguridad
            en cada paso administrativo.
          </p>
        </motion.div>

        {/* Steps — with connecting line on desktop */}
        <div className="relative">

          {/* Horizontal connector line (desktop only) */}
          <div className="hidden lg:block absolute top-[3.25rem] left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-px bg-gradient-to-r from-transparent via-[#C5A059]/30 to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.13 }}
                whileHover={{ y: -5 }}
                className="card-corporate rounded-2xl p-6 flex flex-col gap-5 relative"
              >
                {/* Step number + icon row */}
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black gold-gradient-text leading-none">{step.num}</span>
                  <div className="w-11 h-11 rounded-xl bg-[#050B14] border border-[#C5A059]/30 flex items-center justify-center shrink-0">
                    {step.icon}
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white mb-2 leading-snug">{step.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{step.description}</p>
                </div>

                <div className="pt-1 border-t border-[#1A2942]/60">
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-[#C5A059]/80">
                    Paso {step.num} · 04
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#0B213F] via-[#0A192F] to-[#0B213F] border border-[#C5A059]/25 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl shadow-black/20"
        >
          <div>
            <h3 className="text-xl font-bold text-white">¿Listo para evaluar tu caso?</h3>
            <p className="text-sm text-gray-300 mt-1.5">
              Sin compromiso. Escríbenos directamente a nuestro WhatsApp oficial.
            </p>
          </div>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="https://wa.me/51963807151?text=Hola%20Yas%20Service%2C%20deseo%20evaluar%20mi%20caso."
            target="_blank"
            rel="noopener noreferrer"
            className="gold-gradient-bg text-[#050B14] font-bold text-sm px-7 py-3.5 rounded-xl shadow-lg cursor-pointer flex items-center gap-2 shrink-0 animate-shine"
          >
            <FaWhatsapp className="text-lg" /> Iniciar evaluación ahora
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
