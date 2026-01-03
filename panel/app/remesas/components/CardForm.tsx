"use client";

import { motion } from "framer-motion";
import type { CardFormData } from "../types";

interface CardFormProps {
  cardForm: CardFormData;
  setCardForm: (form: CardFormData) => void;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
}

export default function CardForm({
  cardForm,
  setCardForm,
  onSubmit,
  onCancel,
}: CardFormProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="bg-gradient-to-br from-[#0A0F12]/90 via-[#0E1A1F]/90 to-[#0A0F12]/90 border border-[#0E8C8C]/40 rounded-2xl p-6 shadow-2xl shadow-[#0E8C8C]/20 backdrop-blur-sm"
    >
      <h3 className="text-xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#0E8C8C] to-[#FFB347]">
        Nueva Tarjeta
      </h3>
      <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {[
          { key: "alias", label: "Alias *", required: true },
          { key: "userName", label: "Usuario *", required: true },
          { key: "phone", label: "Teléfono *", required: true },
          { key: "manager", label: "Manager", required: false },
          { key: "bankName", label: "Banco", required: false },
          { key: "saldo", label: "Saldo (CUP) *", required: true, type: "number" },
        ].map((field, index) => (
          <motion.div
            key={field.key}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + index * 0.05 }}
          >
            <label className="block text-sm font-medium mb-2 text-gray-300">{field.label}</label>
            <input
              type={field.type || "text"}
              required={field.required}
              step={field.type === "number" ? "0.01" : undefined}
              min={field.type === "number" ? "0" : undefined}
              value={cardForm[field.key as keyof CardFormData]}
              onChange={(e) => setCardForm({ ...cardForm, [field.key]: e.target.value })}
              className="w-full px-4 py-3 bg-[#0A0F12]/80 border border-[#0E8C8C]/30 rounded-xl text-white focus:border-[#0E8C8C] focus:ring-2 focus:ring-[#0E8C8C]/50 transition-all duration-300 hover:border-[#0E8C8C]/50"
            />
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="md:col-span-2 flex gap-4 mt-2"
        >
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 px-6 py-3 bg-gradient-to-r from-[#0E8C8C] to-[#0B6B6B] hover:from-[#0B6B6B] hover:to-[#0E8C8C] rounded-xl font-semibold text-white shadow-lg shadow-[#0E8C8C]/30 transition-all duration-300"
          >
            Crear Tarjeta
          </motion.button>
          <motion.button
            type="button"
            onClick={onCancel}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-[#1A1F22] hover:bg-[#252A2F] border border-gray-700 rounded-xl font-semibold text-gray-300 transition-all duration-300"
          >
            Cancelar
          </motion.button>
        </motion.div>
      </form>
    </motion.div>
  );
}
