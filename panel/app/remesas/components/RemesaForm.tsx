"use client";

import { motion, AnimatePresence } from "framer-motion";
import { User, ArrowRight } from "lucide-react";
import type { RemesaFormData, Card } from "../types";

interface RemesaFormProps {
  remesaForm: RemesaFormData;
  setRemesaForm: (form: RemesaFormData) => void;
  cards: Card[];
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
}

export default function RemesaForm({
  remesaForm,
  setRemesaForm,
  cards,
  onSubmit,
  onCancel,
}: RemesaFormProps) {
  return (
    <AnimatePresence>
      {/* Wrapper solo para stacking */}
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        initial={false}
        animate={{}}
        exit={{}}
      >
        {/* Backdrop */}
        <motion.div
          onClick={onCancel}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        />

        {/* Modal */}
        <motion.div
          initial={{ scale: 0.96, opacity: 0, y: 24 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.96, opacity: 0, y: 24 }}
          transition={{
            duration: 0.28,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-50 w-full max-w-md mx-auto
                     bg-linear-to-br from-white/5 via-white/3 to-white/5
                     border-2 border-[#0E8C8C]/40 rounded-2xl
                     p-5 shadow-2xl shadow-black/50
                     backdrop-blur-sm overflow-hidden"
        >
          {/* Línea decorativa */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-[#0E8C8C] via-[#FFB347] to-[#0E8C8C]" />

          <h3 className="text-sm font-semibold mb-4 text-transparent bg-clip-text bg-linear-to-r from-[#0E8C8C] to-[#FFB347] uppercase tracking-wide">
            Nueva remesa
          </h3>

          <form onSubmit={onSubmit} className="space-y-4">
            {/* Remitente → Destinatario */}
            <div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-center">
              {/* Remitente */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="p-1.5 bg-[#0E8C8C]/20 rounded-md">
                    <User className="w-4 h-4 text-[#0E8C8C]" />
                  </div>
                  <span className="text-xs font-semibold text-[#0E8C8C] uppercase">
                    Remitente
                  </span>
                </div>

                <input
                  type="text"
                  placeholder="Nombre"
                  required
                  value={remesaForm.remitenteNombre}
                  onChange={(e) =>
                    setRemesaForm({
                      ...remesaForm,
                      remitenteNombre: e.target.value,
                    })
                  }
                  className="w-full mb-2 px-3 py-1.5 text-sm
                             bg-[#0A0F12]/70 border border-[#0E8C8C]/30
                             rounded-lg text-white"
                />

                <input
                  type="text"
                  placeholder="Teléfono"
                  required
                  value={remesaForm.remitenteTelefono}
                  onChange={(e) =>
                    setRemesaForm({
                      ...remesaForm,
                      remitenteTelefono: e.target.value,
                    })
                  }
                  className="w-full px-3 py-1.5 text-sm
                             bg-[#0A0F12]/70 border border-[#0E8C8C]/30
                             rounded-lg text-white"
                />
              </div>

              {/* Flecha */}
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="p-1"
              >
                <ArrowRight className="w-5 h-5 text-[#FFB347]" />
              </motion.div>

              {/* Destinatario */}
              <div className="text-right">
                <div className="flex items-center justify-end gap-2 mb-1">
                  <span className="text-xs font-semibold text-[#FFB347] uppercase">
                    Destinatario
                  </span>
                  <div className="p-1.5 bg-[#FFB347]/20 rounded-md">
                    <User className="w-4 h-4 text-[#FFB347]" />
                  </div>
                </div>

                <input
                  type="text"
                  placeholder="Nombre"
                  required
                  value={remesaForm.destinatarioNombre}
                  onChange={(e) =>
                    setRemesaForm({
                      ...remesaForm,
                      destinatarioNombre: e.target.value,
                    })
                  }
                  className="w-full mb-2 px-3 py-1.5 text-sm
                             bg-[#0A0F12]/70 border border-[#FFB347]/30
                             rounded-lg text-white text-right"
                />

                <input
                  type="text"
                  placeholder="Teléfono"
                  required
                  value={remesaForm.destinatarioTelefono}
                  onChange={(e) =>
                    setRemesaForm({
                      ...remesaForm,
                      destinatarioTelefono: e.target.value,
                    })
                  }
                  className="w-full px-3 py-1.5 text-sm
                             bg-[#0A0F12]/70 border border-[#FFB347]/30
                             rounded-lg text-white text-right"
                />
              </div>
            </div>

            {/* Monto */}
            <div
              className="grid grid-cols-2 gap-3 p-3
                         bg-linear-to-r from-[#0E8C8C]/10 to-[#FFB347]/10
                         rounded-xl border border-[#0E8C8C]/30"
            >
              <div>
                <p className="text-xs text-gray-400 uppercase mb-1">
                  Monto (PEN)
                </p>
                <input
                  type="number"
                  step="0.01"
                  min="0.01"
                  required
                  value={remesaForm.montoPEN}
                  onChange={(e) =>
                    setRemesaForm({
                      ...remesaForm,
                      montoPEN: e.target.value,
                    })
                  }
                  className="w-full px-3 py-1.5 text-sm
                             bg-[#0A0F12]/70 border border-[#0E8C8C]/30
                             rounded-lg text-white"
                />
              </div>

              <div className="text-right">
                <p className="text-xs text-gray-400 uppercase mb-1">≈ CUP</p>
                <p className="text-lg font-bold text-[#FFB347]">
                  {remesaForm.montoPEN
                    ? (parseFloat(remesaForm.montoPEN) * 24).toFixed(2)
                    : "--"}
                </p>
              </div>
            </div>

            {/* Tarjetas */}
            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#0E8C8C]/30">
              <select
                required
                value={remesaForm.tarjetaOrigenId}
                onChange={(e) =>
                  setRemesaForm({
                    ...remesaForm,
                    tarjetaOrigenId: e.target.value,
                  })
                }
                className="px-3 py-1.5 text-sm bg-[#0A0F12]/70 border border-[#0E8C8C]/30 rounded-lg text-white"
              >
                <option value="">Origen</option>
                {cards.map((card) => (
                  <option key={card.id} value={card.id}>
                    {card.alias}
                  </option>
                ))}
              </select>

              <select
                required
                value={remesaForm.tarjetaDestinoId}
                onChange={(e) =>
                  setRemesaForm({
                    ...remesaForm,
                    tarjetaDestinoId: e.target.value,
                  })
                }
                className="px-3 py-1.5 text-sm bg-[#0A0F12]/70 border border-[#FFB347]/30 rounded-lg text-white text-right"
              >
                <option value="">Destino</option>
                {cards.map((card) => (
                  <option key={card.id} value={card.id}>
                    {card.alias}
                  </option>
                ))}
              </select>
            </div>

            {/* Acciones */}
            <div className="flex justify-center gap-3 pt-3">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-8 py-2.5 text-sm font-semibold rounded-full
                           bg-gradient-to-r from-[#0E8C8C] to-[#0B6B6B]
                           text-white shadow-md shadow-[#0E8C8C]/30"
              >
                Crear remesa
              </motion.button>

              <motion.button
                type="button"
                onClick={onCancel}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-6 py-2.5 text-sm rounded-full
                           bg-transparent border border-gray-600
                           text-gray-400 hover:text-white"
              >
                Cancelar
              </motion.button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
