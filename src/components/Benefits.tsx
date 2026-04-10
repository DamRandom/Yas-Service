"use client";
import * as React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaBolt, FaHandshake, FaHeadset } from "react-icons/fa";

export default function Benefits() {
  const benefits = [
    {
      icon: <FaShieldAlt />,
      title: "Seguridad Total",
      desc: (
        <>
          Tu dinero y tu información están siempre protegidos con protocolos de última generación. 
          Cada operación es <span className="text-[#e25e0b] drop-shadow-[0_0_8px_#e25e0b]">#Segura</span> y transparente. 
          Confía en nosotros para realizar tus <span className="text-[#e25e0b] drop-shadow-[0_0_8px_#e25e0b]">#Transacciones</span> sin preocupaciones.
        </>
      ),
    },
    {
      icon: <FaBolt />,
      title: "Rapidez Inigualable",
      desc: (
        <>
          Procesamos tus operaciones en minutos, no en días. Tu tiempo vale, por eso priorizamos la eficiencia en cada paso. 
          Disfruta de <span className="text-[#e25e0b] drop-shadow-[0_0_8px_#e25e0b]">#Rapidez</span> y resultados inmediatos en tus <span className="text-[#e25e0b] drop-shadow-[0_0_8px_#e25e0b]">#Envios</span>.
        </>
      ),
    },
    {
      icon: <FaHandshake />,
      title: "Confianza Garantizada",
      desc: (
        <>
          Miles de clientes satisfechos nos respaldan. Ofrecemos transparencia total, sin letras pequeñas ni sorpresas ocultas. 
          Vive la experiencia de un servicio confiable y <span className="text-[#e25e0b] drop-shadow-[0_0_8px_#e25e0b]">#Transparente</span> en cada operación.
        </>
      ),
    },
    {
      icon: <FaHeadset />,
      title: "Soporte Premium",
      desc: (
        <>
          Atención directa y personalizada. No eres un número: te acompañamos en cada paso para que tu experiencia sea fluida y segura. 
          Nuestro equipo está siempre disponible para <span className="text-[#e25e0b] drop-shadow-[0_0_8px_#e25e0b]">#Asistirte</span> cuando lo necesites.
        </>
      ),
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-white py-24 md:py-0">
      <div className="relative container mx-auto px-6 md:px-16 z-10 w-full">
        {/* Título principal */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-center text-[#0E8C8C] mb-12 md:mb-16 drop-shadow-lg"
        >
          Por Qué Elegirnos
        </motion.h2>

        {/* Grid de beneficios */}
        <div className="grid gap-8 md:gap-12 md:grid-cols-2 lg:grid-cols-2">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-6 md:p-8 bg-[#061010]/80 border border-transparent shadow-md hover:shadow-none transform hover:translate-y-1 transition-all duration-300 flex flex-col items-center"
            >
              <div className="flex justify-center mb-4 text-[#dad6d4]">
                {React.cloneElement(benefit.icon, { size: 48, className: "w-10 h-10 md:w-12 md:h-12" })}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#0E8C8C] mb-3 md:mb-4 text-center">
                {benefit.title}
              </h3>
              <p className="text-gray-300 text-sm md:text-lg leading-relaxed text-center">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
