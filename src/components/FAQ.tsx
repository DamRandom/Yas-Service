"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuestionCircle, FaChevronDown, FaShieldAlt, FaFileAlt, FaCreditCard } from "react-icons/fa";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>("visas");

  const faqData = [
    // Visas y Residencia
    {
      category: "visas",
      q: "¿Qué tipos de residencia gestiona Yas Service?",
      a: "Nos especializamos estrictamente en procesos de Residencia Legal en Perú, enfocados en las modalidades de Formación/Estudios y Reunificación Familiar. Aclaramos que no gestionamos visas de turismo.",
    },
    {
      category: "visas",
      q: "¿Cuánto tiempo toma el proceso migratorio completo?",
      a: "El tiempo estimado es de aproximadamente 2 meses desde el inicio del trámite. Este plazo puede variar según la entrega correcta, completa y oportuna de toda la documentación requerida.",
    },
    {
      category: "visas",
      q: "¿Puedo iniciar el proceso si estoy fuera de Cuba?",
      a: "Sí, absolutamente. Brindamos asesoría y acompañamiento a ciudadanos cubanos radicados en cualquier parte del mundo: Cuba, Rusia, Guyana, Surinam, Perú y otros países.",
    },

    // Documentación
    {
      category: "docs",
      q: "¿Cuáles son los documentos indispensables para comenzar?",
      a: "Los requisitos básicos son: 1) Pasaporte vigente con al menos 8 meses de validez, y 2) Antecedentes penales legalizados ante el MINJUS en Cuba. Los requisitos adicionales dependen de la modalidad elegida.",
    },
    {
      category: "docs",
      q: "¿Ayudan a obtener y legalizar documentos en Cuba?",
      a: "Sí. Ofrecemos asistencia en la obtención y legalización de antecedentes penales, actas de nacimiento y actas de matrimonio en Cuba, con tiempos estimados de 15 a 20 días hábiles.",
    },

    // Pagos
    {
      category: "pagos",
      q: "¿Cuándo se realiza el pago del servicio?",
      a: "Para máxima seguridad, el pago de honorarios se efectúa durante la primera cita consular, una vez que la documentación requerida haya sido revisada y aceptada por la entidad correspondiente.",
    },
    {
      category: "pagos",
      q: "¿Qué métodos de pago tienen disponibles?",
      a: "Contamos con múltiples opciones: Zelle (EE.UU.), Western Union, efectivo en La Habana, transferencias bancarias internacionales y Yape / Plin en Perú.",
    },
    {
      category: "pagos",
      q: "¿Existe alguna política de garantía o devolución?",
      a: "Sí. Operamos bajo un estricto compromiso de transparencia. Conforme a las condiciones de nuestro acuerdo de servicio, ofrecemos devolución en caso de no aprobación, sujeto a la verificación del cumplimiento completo de los requisitos.",
    },
  ];

  const filteredFaqs = faqData.filter((item) => item.category === activeCategory);

  const tabs = [
    { key: "visas", label: "Visas y Residencia", icon: <FaShieldAlt className="shrink-0" /> },
    { key: "docs", label: "Documentos", icon: <FaFileAlt className="shrink-0" /> },
    { key: "pagos", label: "Pagos y Garantías", icon: <FaCreditCard className="shrink-0" /> },
  ];

  return (
    <section id="faq" className="py-24 bg-[#0A192F] relative border-t border-[#1A2942]/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#050B14] border border-[#C5A059]/30 text-[#C5A059] text-xs font-semibold uppercase tracking-wider mb-4">
            <FaQuestionCircle className="shrink-0" /> Transparencia e Información
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            Preguntas <span className="gold-gradient-text">Frecuentes</span>
          </h2>
          <p className="text-gray-300 mt-5 text-base leading-relaxed">
            Resolvemos tus dudas con total claridad sobre requisitos, tiempos de gestión,
            legalizaciones y condiciones del servicio.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 mb-10 flex-wrap">
          {tabs.map((tab) => (
            <motion.button
              key={tab.key}
              whileTap={{ scale: 0.95 }}
              onClick={() => { setActiveCategory(tab.key); setOpenIdx(0); }}
              className={`flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === tab.key
                  ? "gold-gradient-bg text-[#050B14] shadow-md shadow-[#C5A059]/20"
                  : "bg-[#050B14] text-gray-300 border border-[#1A2942] hover:border-[#C5A059]/40 hover:text-[#C5A059]"
              }`}
            >
              {tab.icon} {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Accordion */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="space-y-3"
          >
            {filteredFaqs.map((faq, index) => {
              const isOpen = openIdx === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.07 }}
                  className={`card-corporate rounded-xl overflow-hidden transition-all duration-200 ${
                    isOpen ? "border-[#C5A059]/35 border-l-2 border-l-[#C5A059] shadow-lg shadow-[#C5A059]/5" : "border-[#C5A059]/15 border-l-2 border-l-transparent"
                  }`}
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 group cursor-pointer"
                  >
                    <span className="flex items-center gap-3">
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${isOpen ? "bg-[#C5A059]" : "bg-[#C5A059]/50"}`} />
                      <span className={`font-semibold text-sm sm:text-base transition-colors ${isOpen ? "text-[#C5A059]" : "text-white group-hover:text-[#C5A059]"}`}>
                        {faq.q}
                      </span>
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="shrink-0"
                    >
                      <FaChevronDown className={`text-sm transition-colors ${isOpen ? "text-[#C5A059]" : "text-[#C5A059]/60"}`} />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2">
                          <div className="w-full h-px bg-[#C5A059]/20 mb-4" />
                          <p className="text-sm text-gray-300 leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Help Notice */}
        <div className="mt-10 text-center text-sm text-gray-400">
          ¿Tienes alguna duda específica sobre tu caso?{" "}
          <a
            href="https://wa.me/51963807151?text=Hola%20Yas%20Service%2C%20tengo%20una%20pregunta%20espec%C3%ADfica."
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C5A059] hover:text-white font-semibold underline-offset-2 hover:underline transition-colors"
          >
            Consúltanos directamente por WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
