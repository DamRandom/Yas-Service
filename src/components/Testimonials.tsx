"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar, FaUserCheck, FaGlobeAmericas } from "react-icons/fa";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(/[\s&]+/)
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
  return (
    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C5A059] to-[#9A7B39] flex items-center justify-center text-[#050B14] font-bold text-sm shrink-0 shadow-md">
      {initials}
    </div>
  );
}

export default function Testimonials() {
  const testimonials = [
    {
      name: "Carlos M.",
      location: "La Habana, Cuba → Lima, Perú",
      type: "Residencia por Reunificación Familiar",
      quote:
        "El acompañamiento de Yas Service fue decisivo. Me guiaron con total transparencia en la legalización de mis documentos en el MINJUS y el proceso de residencia se cumplió tal como me explicaron.",
      rating: 5,
    },
    {
      name: "Yamilé G.",
      location: "Moscú, Rusia → Perú",
      type: "Residencia por Estudios & Logística de Viaje",
      quote:
        "Desde Rusia coordinaron mis pasajes y la reserva del hospedaje inicial. Al llegar a Perú me asistieron con la cita de INTERPOL y el trámite del Carné de Extranjería sin ningún contratiempo.",
      rating: 5,
    },
    {
      name: "Roberto & Familia",
      location: "Georgetown, Guyana → Perú",
      type: "Asesoría Documental & Solución de Viaje",
      quote:
        "Lo que más valoro es la honestidad: el pago de honorarios se realizó recién en la primera cita consular, una vez revisados los documentos. Esa transparencia nos dio tranquilidad absoluta.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-[#050B14] relative border-t border-[#1A2942]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Collage / Image Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center gap-3 sm:gap-4 md:gap-5 mb-14 max-w-5xl mx-auto h-[200px] sm:h-[300px] md:h-[350px] overflow-hidden px-2"
        >
          <div className="w-16 sm:w-28 md:w-40 h-32 sm:h-48 md:h-64 rounded-2xl overflow-hidden shrink-0 mt-12 opacity-60 hover:opacity-100 transition-opacity">
            <img src="/images/client1.png" alt="Cliente 1" className="w-full h-full object-cover" />
          </div>
          <div className="w-20 sm:w-36 md:w-48 h-40 sm:h-56 md:h-72 rounded-2xl overflow-hidden shrink-0 -mt-16 opacity-80 hover:opacity-100 transition-opacity">
            <img src="/images/client2.png" alt="Cliente 2" className="w-full h-full object-cover" />
          </div>
          <div className="w-28 sm:w-48 md:w-64 h-48 sm:h-64 md:h-80 rounded-2xl overflow-hidden shrink-0 z-10 shadow-2xl ring-4 ring-[#050B14]">
            <img src="/images/client3.png" alt="Cliente 3" className="w-full h-full object-cover" />
          </div>
          <div className="w-20 sm:w-36 md:w-48 h-40 sm:h-56 md:h-72 rounded-2xl overflow-hidden shrink-0 mt-20 opacity-80 hover:opacity-100 transition-opacity">
            <img src="/images/client4.png" alt="Cliente 4" className="w-full h-full object-cover" />
          </div>
          <div className="w-16 sm:w-28 md:w-40 h-32 sm:h-48 md:h-64 rounded-2xl overflow-hidden shrink-0 -mt-10 opacity-60 hover:opacity-100 transition-opacity hidden sm:block">
            <img src="/images/client5.png" alt="Cliente 5" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B213F] border border-[#C5A059]/30 text-[#C5A059] text-xs font-semibold uppercase tracking-wider mb-4">
            <FaUserCheck className="shrink-0" /> Experiencia de clientes
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            Casos de Acompañamiento <span className="gold-gradient-text">Exitoso</span>
          </h2>
          <p className="text-gray-300 mt-5 text-base leading-relaxed">
            La confianza de nuestros clientes respalda la seriedad de nuestra gestión
            documental y orientación personalizada en cada etapa.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-7"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="card-corporate rounded-2xl p-7 flex flex-col justify-between gap-6"
            >
              <div>
                {/* Top row: quote icon + stars */}
                <div className="flex items-center justify-between mb-5">
                  <FaQuoteLeft className="text-2xl text-[#C5A059]/35" />
                  <div className="flex gap-0.5 text-[#C5A059]">
                    {[...Array(item.rating)].map((_, i) => (
                      <FaStar key={i} className="text-xs" />
                    ))}
                  </div>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="pt-5 border-t border-[#1A2942]/60 flex items-center gap-3">
                <Avatar name={item.name} />
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">{item.name}</h4>
                  <p className="text-xs text-[#C5A059] font-medium mt-0.5">{item.type}</p>
                  <p className="text-[11px] text-gray-400 flex items-center gap-1 mt-0.5">
                    <FaGlobeAmericas className="shrink-0" /> {item.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Privacy note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 text-center p-5 rounded-xl bg-[#0A192F]/50 border border-[#1A2942] max-w-2xl mx-auto"
        >
          <p className="text-xs text-gray-400 leading-relaxed">
            <strong className="text-gray-300">Garantía de privacidad:</strong> Todos los testimonios presentados
            cuentan con la autorización expresa de nuestros clientes, conforme a nuestras políticas de
            confidencialidad.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
