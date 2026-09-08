"use client";

import { motion } from "framer-motion";
import { FaPassport, FaPlane, FaIdCard, FaCheck, FaFileContract, FaArrowRight } from "react-icons/fa";

interface ServicesProps {
  onOpenModal: () => void;
}

export default function Services({ onOpenModal }: ServicesProps) {
  const serviceCategories = [
    {
      icon: <FaPassport className="text-2xl text-[#C5A059]" />,
      badge: "Especialidad Migratoria",
      title: "Servicios Migratorios en Perú",
      subtitle:
        "Orientación y acompañamiento completo para obtener tu residencia legal en Perú.",
      details: [
        "Orientación personalizada sobre procesos de residencia legal.",
        "Apoyo integral en preparación y revisión documental.",
        "Acompañamiento en modalidades de Formación/Estudios y Reunificación Familiar.",
        "Gestión de antecedentes penales, actas de nacimiento y matrimonio ante el MINJUS Cuba (15–20 días hábiles).",
      ],
      note: "No gestionamos visas de turismo. Enfocados en procesos de residencia definitiva.",
    },
    {
      icon: <FaPlane className="text-2xl text-[#C5A059]" />,
      badge: "Logística Integral",
      title: "Pasajes y Servicios de Viaje",
      subtitle:
        "Soluciones completas para coordinar tu desplazamiento internacional sin contratiempos.",
      details: [
        "Búsqueda, reserva y emisión de pasajes aéreos optimizados.",
        "Reserva de hospedaje verificado para una llegada segura.",
        "Coordinación de movilidad y transporte interno en destino.",
        "Organización de itinerarios adaptados a tu plan migratorio.",
      ],
      note: "Coordinación desde Cuba, Rusia, Guyana, Surinam u otro punto geográfico.",
    },
    {
      icon: <FaIdCard className="text-2xl text-[#C5A059]" />,
      badge: "Recepción en Destino",
      title: "Acompañamiento al Llegar a Perú",
      subtitle:
        "Asistencia directa para una inserción rápida, ordenada y legal en el país.",
      details: [
        "Orientación paso a paso para la gestión del Carné de Extranjería.",
        "Programación y acompañamiento para la cita de INTERPOL.",
        "Asesoría para la apertura de cuenta bancaria en soles o USD.",
        "Guía para los primeros trámites de inserción civil.",
      ],
      note: "Atención presencial y guiada para mayor tranquilidad durante tu llegada.",
    },
  ];

  return (
    <section id="servicios" className="py-24 bg-[#0A192F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#050B14] border border-[#C5A059]/30 text-[#C5A059] text-xs font-semibold uppercase tracking-wider mb-4">
            <FaFileContract className="shrink-0" /> Portafolio Especializado
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            Nuestros <span className="gold-gradient-text">Servicios Integrales</span>
          </h2>
          <p className="text-gray-300 mt-5 text-base leading-relaxed">
            Cobertura estructurada desde la evaluación inicial y legalización documental en origen
            hasta la organización del viaje e integración en destino.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {serviceCategories.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              whileHover={{ y: -6 }}
              className="card-corporate rounded-2xl p-7 flex flex-col justify-between group"
            >
              <div>
                {/* Icon & Badge */}
                <div className="flex flex-col sm:flex-row items-start sm:items-start justify-between mb-6 gap-4 sm:gap-3">
                  <div className="w-13 h-13 rounded-2xl bg-[#050B14] border border-[#C5A059]/35 flex items-center justify-center p-3.5 shadow-inner shrink-0">
                    {service.icon}
                  </div>
                  <span className="text-[10px] font-bold text-[#C5A059] uppercase tracking-wider px-2.5 py-1 bg-[#050B14]/80 rounded-full border border-[#C5A059]/25 text-left sm:text-right leading-tight self-start sm:mt-1">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 leading-snug">{service.title}</h3>
                <p className="text-sm text-gray-300 mb-6 leading-relaxed">{service.subtitle}</p>

                {/* Details */}
                <ul className="space-y-2.5 mb-6">
                  {service.details.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-300">
                      <FaCheck className="text-[#C5A059] text-xs shrink-0 mt-1" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {/* Note */}
                <div className="p-3.5 rounded-xl bg-[#050B14]/60 border border-[#1A2942]/80 mb-5 text-xs text-gray-400 italic leading-relaxed">
                  * {service.note}
                </div>

                {/* Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onOpenModal}
                  className="w-full flex items-center justify-center gap-2 bg-transparent hover:bg-[#C5A059]/90 text-[#C5A059] hover:text-[#050B14] font-semibold text-sm py-3 px-4 rounded-xl border border-[#C5A059]/40 hover:border-[#C5A059] transition-all duration-300 cursor-pointer group"
                >
                  Consultar este servicio
                  <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
