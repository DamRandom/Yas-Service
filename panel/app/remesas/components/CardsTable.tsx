"use client";

import { motion } from "framer-motion";
import { CreditCard, User, Phone, Building2, DollarSign, Clock, CheckCircle } from "lucide-react";
import type { Card } from "../types";

interface CardsTableProps {
  cards: Card[];
  onMarkUsed: (cardId: number) => void;
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleString("es-ES", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const formatCurrency = (amount: number, currency: string) => {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
  }).format(amount);
};

function CardItem({ card, index, onMarkUsed }: { card: Card; index: number; onMarkUsed: (id: number) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="bg-gradient-to-br from-white/5 via-white/3 to-white/5 border-2 border-[#0E8C8C]/40 rounded-2xl p-6 shadow-xl shadow-[#0E8C8C]/20 backdrop-blur-sm relative overflow-hidden"
    >
      {/* Líneas decorativas tipo tarjeta */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0E8C8C] via-[#FFB347] to-[#0E8C8C]" />
      
      {/* Header tipo tarjeta de crédito */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gradient-to-br from-[#0E8C8C] to-[#0B6B6B] rounded-xl shadow-lg">
            <CreditCard className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Tarjeta</p>
            <p className="text-lg font-bold text-white">{card.alias}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">ID</p>
          <p className="text-sm font-bold text-[#0E8C8C]">#{card.id.toString().padStart(4, '0')}</p>
        </div>
      </div>

      {/* Saldo destacado */}
      <div className="mb-6 p-5 bg-gradient-to-r from-[#0E8C8C]/20 via-[#0E8C8C]/10 to-[#FFB347]/20 to-[#FFB347]/10 rounded-xl border border-[#0E8C8C]/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#0E8C8C]/10 rounded-full blur-3xl -mr-16 -mt-16" />
        <div className="relative z-10">
          <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">Saldo Disponible</p>
          <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
            {formatCurrency(card.saldo, "CUP")}
          </p>
        </div>
      </div>

      {/* Información del usuario */}
      <div className="space-y-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-[#0E8C8C]/20 rounded-lg">
            <User className="w-4 h-4 text-[#0E8C8C]" />
          </div>
          <div className="flex-1">
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Titular</p>
            <p className="text-sm font-semibold text-white">{card.userName}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-2 bg-[#0E8C8C]/20 rounded-lg">
            <Phone className="w-4 h-4 text-[#0E8C8C]" />
          </div>
          <div className="flex-1">
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Teléfono</p>
            <p className="text-sm font-semibold text-white">{card.phone}</p>
          </div>
        </div>

        {card.bankName && (
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#FFB347]/20 rounded-lg">
              <Building2 className="w-4 h-4 text-[#FFB347]" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Banco</p>
              <p className="text-sm font-semibold text-white">{card.bankName}</p>
            </div>
          </div>
        )}

        {card.manager && (
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#0E8C8C]/20 rounded-lg">
              <User className="w-4 h-4 text-[#0E8C8C]" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Manager</p>
              <p className="text-sm font-semibold text-white">{card.manager}</p>
            </div>
          </div>
        )}
      </div>

      {/* Último uso */}
      <div className="mb-6 p-4 bg-[#0A0F12]/50 rounded-xl border border-[#0E8C8C]/20">
        <div className="flex items-center gap-3">
          <Clock className="w-4 h-4 text-[#0E8C8C]" />
          <div className="flex-1">
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Último Uso</p>
            <p className="text-sm font-semibold text-white">
              {card.lastUsedAt ? formatDate(card.lastUsedAt) : "Nunca utilizada"}
            </p>
          </div>
        </div>
      </div>

      {/* Botón de acción */}
      <motion.button
        onClick={() => onMarkUsed(card.id)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full px-4 py-3 bg-gradient-to-r from-[#0E8C8C] to-[#0B6B6B] hover:from-[#0B6B6B] hover:to-[#0E8C8C] rounded-xl font-semibold text-white shadow-lg shadow-[#0E8C8C]/30 transition-all duration-300 flex items-center justify-center gap-2"
      >
        <CheckCircle className="w-5 h-5" />
        Marcar como usada
      </motion.button>
    </motion.div>
  );
}

export default function CardsTable({ cards, onMarkUsed }: CardsTableProps) {
  if (cards.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-br from-[#0A0F12]/90 via-[#0E1A1F]/90 to-[#0A0F12]/90 border border-[#0E8C8C]/40 rounded-2xl p-12 text-center backdrop-blur-sm"
      >
        <div className="flex flex-col items-center gap-4">
          <div className="p-4 bg-[#0E8C8C]/20 rounded-full">
            <CreditCard className="w-8 h-8 text-[#0E8C8C]" />
          </div>
          <p className="text-gray-400 text-lg">No hay tarjetas registradas</p>
          <p className="text-gray-500 text-sm">Las tarjetas aparecerán aquí cuando se creen</p>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <CardItem key={card.id} card={card} index={index} onMarkUsed={onMarkUsed} />
      ))}
    </div>
  );
}
