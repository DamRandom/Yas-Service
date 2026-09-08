"use client";

import { motion } from "framer-motion";
import { FaUserCheck, FaHandshake, FaRoute, FaEye, FaGlobeAmericas, FaAward } from "react-icons/fa";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export default function About() {
  const values = [
    {
      icon: <FaUserCheck className="text-xl text-[#C5A059]" />,
      title: "Atención Personalizada",
      description:
        "Analizamos cada situación de forma individual para ofrecerte alternativas realistas y estructuradas según tus necesidades específicas.",
    },
    {
      icon: <FaHandshake className="text-xl text-[#C5A059]" />,
      title: "Compromiso Total",
      description:
        "Asumimos tu caso con máxima responsabilidad y rigor documental, de principio a fin, sin excepciones.",
    },
    {
      icon: <FaRoute className="text-xl text-[#C5A059]" />,
      title: "Acompañamiento Continuo",
      description:
        "No te dejamos solo en el camino. Te guiamos en cada etapa de tu trámite y tu viaje hasta el destino.",
    },
    {
      icon: <FaEye className="text-xl text-[#C5A059]" />,
      title: "Transparencia Total",
      description:
        "Información clara sobre requisitos, tiempos reales de gestión y estructura de honorarios antes de iniciar cualquier proceso.",
    },
  ];

  return (
    <section id="nosotros" className="py-24 bg-[#050B14] relative border-t border-[#1A2942]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B213F] border border-[#C5A059]/30 text-[#C5A059] text-xs font-semibold uppercase tracking-wider mb-4">
            <FaAward className="shrink-0" /> Sobre Yas Service
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            Experiencia, Integridad y{" "}
            <span className="gold-gradient-text">Compromiso Migratorio</span>
          </h2>
          <p className="text-gray-300 mt-5 text-base leading-relaxed">
            Nacimos del apoyo genuino a personas cercanas en sus procesos de movilidad internacional.
            Hoy consolidamos una trayectoria dedicada a simplificar cada paso administrativo.
          </p>
        </motion.div>

        {/* Origin & Story Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-br from-[#0B213F]/80 via-[#0A192F] to-[#081A33] p-8 sm:p-10 rounded-2xl border border-[#C5A059]/25 shadow-2xl shadow-black/30 relative overflow-hidden"
        >
          {/* Subtle bg accent */}
          <div className="absolute right-0 top-0 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(197,160,89,0.05) 0%, transparent 70%)" }} />

          <div className="lg:col-span-8 space-y-4 relative z-10">
            <h3 className="text-xl sm:text-2xl font-bold text-white">Nuestra historia y proyección</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Yas Service nace de la experiencia directa de respaldar a ciudadanos cubanos y sus familias
              en la planificación de sus viajes y procesos legales. Con{" "}
              <strong className="text-white">más de 3 años de experiencia</strong> continua, nos
              enfocamos en reducir la incertidumbre, coordinar documentación y brindar soluciones
              integrales de movilidad internacional.
            </p>
            <div className="flex flex-wrap gap-2.5 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#050B14]/80 border border-[#1A2942] text-xs text-gray-300">
                <FaGlobeAmericas className="text-[#C5A059]" /> Enfoque Internacional
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#050B14]/80 border border-[#1A2942] text-xs text-gray-300">
                <FaHandshake className="text-[#C5A059]" /> Soluciones a Medida
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center relative z-10">
            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.3 }}
              className="text-center p-7 bg-[#050B14]/70 rounded-2xl border border-[#C5A059]/35 w-full max-w-xs shadow-lg backdrop-blur-sm"
            >
              <p className="text-5xl font-black gold-gradient-text leading-none">+3</p>
              <p className="text-sm font-semibold text-white mt-2">Años de Trayectoria</p>
              <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
                Acompañando familias en sus trámites con dedicación constante.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Core Values */}
        <div>
          <h3 className="text-lg font-semibold text-white/70 text-center mb-8 uppercase tracking-widest text-sm">
            Nuestros valores
          </h3>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((val, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -5, borderColor: "rgba(197, 160, 89, 0.4)" }}
                className="card-corporate p-6 rounded-2xl flex flex-col gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-[#050B14] border border-[#C5A059]/25 flex items-center justify-center shrink-0">
                  {val.icon}
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1.5">{val.title}</h4>
                  <p className="text-sm text-gray-300 leading-relaxed">{val.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
