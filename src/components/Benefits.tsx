"use client";

import { motion } from "framer-motion";
import { FaShieldAlt, FaRoute, FaHandshake, FaHeadset } from "react-icons/fa";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export default function Benefits() {
  const benefits = [
    {
      icon: <FaShieldAlt className="text-xl text-[#C5A059]" />,
      title: "Gestión Documental Segura",
      description:
        "Tus documentos y datos personales se manejan con protocolos estrictos de confidencialidad en cada etapa del proceso migratorio.",
    },
    {
      icon: <FaRoute className="text-xl text-[#C5A059]" />,
      title: "Acompañamiento Paso a Paso",
      description:
        "Desde la evaluación inicial hasta tu llegada al destino, te guiamos en cada trámite sin dejarte solo en ningún momento.",
    },
    {
      icon: <FaHandshake className="text-xl text-[#C5A059]" />,
      title: "Transparencia en Honorarios",
      description:
        "Conoces los costos antes de iniciar. El pago de honorarios se realiza en la primera cita consular, una vez revisada tu documentación.",
    },
    {
      icon: <FaHeadset className="text-xl text-[#C5A059]" />,
      title: "Soporte Directo y Humano",
      description:
        "Atención personalizada por WhatsApp con respuestas claras. No eres un número: tu caso recibe seguimiento individual.",
    },
  ];

  return (
    <section className="py-24 bg-[#050B14] relative border-t border-[#1A2942]/50">
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
            <FaShieldAlt className="shrink-0" /> ¿Por qué Yas Service?
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            Ventajas de trabajar{" "}
            <span className="gold-gradient-text">con nosotros</span>
          </h2>
          <p className="text-gray-300 mt-5 text-base leading-relaxed">
            Cada detalle de nuestro servicio está diseñado para brindarte seguridad,
            claridad y tranquilidad durante todo tu proceso.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -5, borderColor: "rgba(197, 160, 89, 0.4)" }}
              className="card-corporate rounded-2xl p-7 flex gap-5"
            >
              <div className="w-12 h-12 rounded-xl bg-[#050B14] border border-[#C5A059]/25 flex items-center justify-center shrink-0">
                {b.icon}
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1.5">{b.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{b.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
