// app/remesas/page.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import { useBouncingElement } from "@/hooks/useBouncingElement";

function MovingSun() {
  const { x, y } = useBouncingElement(256, 256, 0.7);
  return (
    <motion.div
      className="absolute w-64 h-64 bg-[#FFB347]/70 rounded-full blur-3xl"
      style={{ left: x, top: y }}
    />
  );
}

export default function RemesasPage() {
  const [amount, setAmount] = useState<number | "">("");
  const [currency, setCurrency] = useState("USD");

  const rates: Record<string, number> = {
    USD: 250,
    EUR: 260,
    PEN: 65,
  };

  const converted =
    amount && !isNaN(Number(amount)) ? Number(amount) * rates[currency] : 0;

  return (
    <>
      <div className="mb-12">
        <Hero />
      </div>

      <main className="relative min-h-screen text-white overflow-hidden px-6 md:px-12">
        {/* Fondo animado */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1200] via-[#1a1f2200] to-[#0a0f1200]" />

          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#0E3A5F]/70 rounded-full blur-3xl animate-drift-slow" />
          <div className="absolute bottom-10 right-1/4 w-60 h-60 bg-[#0B2A46]/60 rounded-full blur-3xl animate-drift-medium" />
          <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-[#134B73]/50 rounded-full blur-3xl animate-drift-fast" />

          <MovingSun />

          <div className="absolute inset-0 backdrop-blur-[100px]" />
        </div>

        {/* Contenido */}
        <div className="relative container max-w-3xl mx-auto p-10 rounded-2xl shadow-lg border border-[#0E8C8C]/40">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center text-[#e25e0b] mb-8 drop-shadow-[0_0_15px_#e25e0b]"
          >
            Envía dinero a Cuba
          </motion.h1>

          <div className="grid gap-6">
            {/* Nombre y Teléfono del remitente */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Tu nombre y apellidos"
                className="w-full p-3 rounded-md bg-transparent border border-gray-600 focus:border-[#e25e0b] outline-none transition"
              />
              <input
                type="tel"
                placeholder="Tu número de teléfono"
                className="w-full p-3 rounded-md bg-transparent border border-gray-600 focus:border-[#e25e0b] outline-none transition"
              />
            </div>

            {/* Nombre y Teléfono del destinatario */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nombre del destinatario"
                className="w-full p-3 rounded-md bg-transparent border border-gray-600 focus:border-[#e25e0b] outline-none transition"
              />
              <input
                type="tel"
                placeholder="Teléfono del destinatario"
                className="w-full p-3 rounded-md bg-transparent border border-gray-600 focus:border-[#e25e0b] outline-none transition"
              />
            </div>

            {/* Cantidad y Moneda */}
            <div className="grid md:grid-cols-2 gap-4 items-center">
              <input
                type="number"
                placeholder="Monto a enviar"
                value={amount}
                onChange={(e) =>
                  setAmount(
                    e.target.value === "" ? "" : Number(e.target.value)
                  )
                }
                className="w-full p-3 rounded-md bg-transparent border border-gray-600 focus:border-[#e25e0b] outline-none transition"
              />
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full p-3 rounded-md bg-transparent border border-gray-600 focus:border-[#e25e0b] outline-none transition text-white"
              >
                <option value="USD">Dólares (USD)</option>
                <option value="EUR">Euros (EUR)</option>
                <option value="PEN">Soles (PEN)</option>
              </select>
            </div>

            {/* Resultado */}
            {converted > 0 && (
              <div className="text-center text-lg font-semibold text-[#0E8C8C] mt-2">
                El destinatario recibirá aproximadamente{" "}
                <span className="text-[#e25e0b]">
                  {converted.toLocaleString()} CUP
                </span>
              </div>
            )}
          </div>

          {/* Botón Aceptar */}
          <div className="mt-8 flex justify-center">
            <motion.a
              href="https://wa.me/51987654321"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block bg-[#e25e0b] text-white font-bold px-10 py-4 rounded-full shadow-lg drop-shadow-[0_0_15px_#e25e0b] hover:scale-105 hover:drop-shadow-[0_0_25px_#e25e0b] transition-transform duration-300"
            >
              Aceptar y Enviar
            </motion.a>
          </div>

          {/* Nota guía */}
          <p className="mt-6 text-center text-sm text-gray-400">
            Al presionar{" "}
            <span className="text-[#e25e0b] font-semibold">Aceptar</span>, se
            enviará un mensaje al WhatsApp de un encargado con tu solicitud. Uno
            de nuestros agentes se pondrá en contacto contigo para confirmar la
            operación.
          </p>

          {/* Contacto alternativo */}
          <div className="mt-8 text-center text-gray-300">
            <p>¿Muy complicado?</p>
            <Link
              href="https://wa.me/51987654321"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e25e0b] font-semibold hover:underline"
            >
              Contacta directamente con un empleado →
            </Link>
          </div>
        </div>
      </main>

      <div className="mt-16">
        <Footer />
      </div>
    </>
  );
}
