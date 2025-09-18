"use client";
import { motion } from "framer-motion";
import * as React from "react";
import { FaUserAlt } from "react-icons/fa";

export default function Testimonials() {
  const allTestimonials = [
    { name: "Carlos M.", message: <>Excelente servicio, mis <span className="text-[#e25e0b] drop-shadow-[0_0_8px_#e25e0b]">#Remesas</span> llegaron rápido y sin problemas. Totalmente confiable.</> },
    { name: "Ana G.", message: <>Nunca pensé que enviar dinero fuera tan fácil y seguro. La atención fue <span className="text-[#e25e0b] drop-shadow-[0_0_8px_#e25e0b]">#Personalizada</span> y profesional.</> },
    { name: "Luis F.", message: <>Gracias a ellos mis paquetes llegaron a tiempo. Servicio <span className="text-[#e25e0b] drop-shadow-[0_0_8px_#e25e0b]">#Confiable</span> y eficiente.</> },
    { name: "María P.", message: <>Siempre me atienden con rapidez y claridad. Me siento segura enviando mi dinero y documentos. Verdaderamente <span className="text-[#e25e0b] drop-shadow-[0_0_8px_#e25e0b]">#Tranquila</span>.</> },
    { name: "Jorge L.", message: <>Servicio rápido y confiable, me encanta cómo manejan todo. <span className="text-[#e25e0b] drop-shadow-[0_0_8px_#e25e0b]">#Profesional</span> siempre.</> },
    { name: "Lucía R.", message: <>Me sentí segura enviando dinero por primera vez. Atención <span className="text-[#e25e0b] drop-shadow-[0_0_8px_#e25e0b]">#Amigable</span> y cercana.</> },
    { name: "Miguel T.", message: <>Todo llegó rápido y sin problemas. Realmente un servicio <span className="text-[#e25e0b] drop-shadow-[0_0_8px_#e25e0b]">#Eficiente</span>.</> },
    { name: "Sofía H.", message: <>Excelente comunicación y resultados. Me siento <span className="text-[#e25e0b] drop-shadow-[0_0_8px_#e25e0b]">#Segura</span> usando esta plataforma.</> },
  ];

  // Duplicamos las burbujas para hacer scroll infinito
  const loopTestimonials = [...allTestimonials, ...allTestimonials];

  const bubbleHeight = 90; // altura aproximada de cada burbuja + gap
  const totalHeight = bubbleHeight * allTestimonials.length;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-white px-6 md:px-16 overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-[#0E8C8C] mb-16 drop-shadow-lg">
        Lo Que Dicen Nuestros Clientes
      </h2>

      <div className="w-full max-w-3xl h-[360px] overflow-hidden relative">
        <motion.div
          animate={{ y: [-0, -totalHeight] }}
          transition={{ repeat: Infinity, repeatType: "loop", duration: allTestimonials.length * 3, ease: "linear" }}
          className="flex flex-col gap-4"
        >
          {loopTestimonials.map((test, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={index} className={`flex ${isLeft ? "justify-start" : "justify-end"} w-full`}>
                <div className={`flex ${isLeft ? "flex-row" : "flex-row-reverse"} items-start gap-3`}>
                  <div className="w-10 h-10 rounded-full bg-[#0E8C8C] flex items-center justify-center text-white text-base flex-shrink-0 z-10">
                    <FaUserAlt />
                  </div>

                  <div className="relative bg-[#0A0F12]/80 p-4 shadow-md max-w-[75%] rounded-xl">
                    <p className="text-gray-300 text-base leading-relaxed">{test.message}</p>
                    <span className={`block mt-1 text-sm font-semibold ${isLeft ? "text-left text-[#0E8C8C]" : "text-right text-[#0E8C8C]"}`}>
                      — {test.name}
                    </span>

                    <div className={`absolute top-2 ${isLeft ? "-left-5" : "-right-5"} w-0 h-0
                      border-t-[10px] border-b-[10px] border-t-transparent border-b-transparent
                      ${isLeft ? "border-r-[#0A0F12]/80" : "border-l-[#0A0F12]/80"}`}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
