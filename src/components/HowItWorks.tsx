"use client";
import { motion } from "framer-motion";
import * as React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Elige",
      description:
        "Selecciona el servicio o producto que necesitas de manera rápida y segura.",
    },
    {
      number: 2,
      title: "Solicita",
      description:
        "Realiza tu solicitud con confianza, nuestro sistema se encarga de todo.",
    },
    {
      number: 3,
      title: "Listo",
      description:
        "Recibe tu servicio o producto sin complicaciones, de forma eficiente.",
    },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center text-white px-6 md:px-16 py-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center text-[#0E8C8C] mb-12 drop-shadow-lg"
      >
        Cómo Funciona
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center gap-12 w-full max-w-5xl">
        {steps.map((step, index) => {
          const delay = index * 1.2; // cada paso tiene su propio delay

          return (
            <React.Fragment key={index}>
              <div className="flex items-stretch gap-6 w-full">
                {/* Número grande */}
                <motion.div
                  className="flex items-center justify-center font-bold text-[#0E8C8C] drop-shadow-lg"
                  style={{ fontSize: "8rem", minWidth: "4rem" }}
                  initial={{ scale: 1.5, opacity: 1, x: 0, y: 0 }}
                  animate={{ scale: 1, opacity: 1, x: 0, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay,
                    ease: "easeInOut",
                  }}
                >
                  {step.number}
                </motion.div>

                {/* Título y descripción */}
                <div className="flex flex-col justify-center">
                  {/* Título: entra de arriba hacia abajo */}
                  <motion.h3
                    className="text-2xl md:text-3xl font-semibold text-[#e25e0b] drop-shadow-[0_0_8px_#e25e0b] mb-2"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: delay + 0.6,
                    }}
                  >
                    {step.title}
                  </motion.h3>

                  {/* Descripción: como estaba */}
                  <motion.p
                    className="text-gray-300 text-base md:text-lg leading-relaxed"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: delay + 0.9, // aparece después del título
                    }}
                  >
                    {step.description}
                  </motion.p>
                </div>
              </div>

              {/* Flecha */}
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden md:flex text-[#0E8C8C] text-3xl self-center"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: delay + 1,
                  }}
                >
                  <FaArrowRight />
                </motion.div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}
