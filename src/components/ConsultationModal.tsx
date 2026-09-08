"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaWhatsapp, FaShieldAlt } from "react-icons/fa";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("Cuba");
  const [service, setService] = useState("Residencia Legal en Perú");
  const [message, setMessage] = useState("");

  // Lock body scroll while modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola Yas Service, solicito asesoría personalizada.\n\n*Nombre:* ${name || "No especificado"}\n*Ubicación Actual:* ${location}\n*Servicio de Interés:* ${service}\n*Detalles/Consulta:* ${message || "Deseo recibir orientación sobre el proceso."}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/51963807151?text=${encodedText}`, "_blank");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative w-full max-w-lg bg-[#0A192F] border border-[#C5A059]/40 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-[#C5A059]/15 text-white z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-lg transition-colors cursor-pointer"
              aria-label="Cerrar modal"
            >
              <FaTimes className="text-xl" />
            </button>

            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#C5A059] text-xs font-semibold uppercase tracking-wider mb-3">
                <FaShieldAlt className="text-base" /> Asesoría Personalizada
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Solicitar Evaluación de Caso
              </h3>
              <p className="text-sm text-gray-300 mt-1">
                Completa el formulario para ser atendido directamente por nuestro equipo por WhatsApp.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmitWhatsApp} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Juan Pérez"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#050B14] border border-[#1A2942] focus:border-[#C5A059] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A192F] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                    Ubicación Actual
                  </label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-[#050B14] border border-[#1A2942] focus:border-[#C5A059] rounded-xl px-3 py-3 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A192F] transition-colors cursor-pointer"
                  >
                    <option value="Cuba">Cuba</option>
                    <option value="Rusia">Rusia</option>
                    <option value="Guyana">Guyana</option>
                    <option value="Surinam">Surinam</option>
                    <option value="Perú">Perú</option>
                    <option value="Otro país">Otro país</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                    Servicio Requerido
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-[#050B14] border border-[#1A2942] focus:border-[#C5A059] rounded-xl px-3 py-3 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A192F] transition-colors cursor-pointer"
                  >
                    <option value="Residencia Legal en Perú (Estudios)">Residencia (Estudios)</option>
                    <option value="Residencia Legal en Perú (Reunificación)">Reunificación Familiar</option>
                    <option value="Legalización de Documentos">Legalización de Documentos</option>
                    <option value="Pasajes y Reserva de Hospedaje">Pasajes y Viajes</option>
                    <option value="Acompañamiento al Llegar a Perú">Llegada a Perú (CE/INTERPOL)</option>
                    <option value="Orientación General">Orientación General</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                  Detalle de tu consulta
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe brevemente tu situación o duda..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#050B14] border border-[#1A2942] focus:border-[#C5A059] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A192F] transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 gold-gradient-bg text-[#050B14] font-bold py-3.5 px-6 rounded-xl hover:shadow-lg hover:shadow-[#C5A059]/20 transition-all cursor-pointer animate-shine"
                >
                  <FaWhatsapp className="text-xl" /> Enviar Consulta por WhatsApp
                </motion.button>
              </div>

              <p className="text-center text-xs text-gray-400 mt-2">
                Respuesta confidencial y directa. Honorarios previa revisión consular.
              </p>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
