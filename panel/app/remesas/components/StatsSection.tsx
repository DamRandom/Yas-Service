"use client";

import { motion } from "framer-motion";
import { DollarSign, CreditCard } from "lucide-react";
import type { Stats } from "../types";

interface StatsSectionProps {
  stats: Stats;
}

const formatCurrency = (amount: number, currency: string) => {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: currency,
  }).format(amount);
};

const statsCards = [
  {
    icon: DollarSign,
    title: "Total Recibido",
    value: (stats: Stats) => formatCurrency(stats.totalPEN, "PEN"),
    color: "from-green-400 to-emerald-500",
    bgColor: "from-green-500/10 to-emerald-500/10",
    borderColor: "border-green-500/30",
    description: "En remesas recibidas",
  },
  {
    icon: DollarSign,
    title: "Total Enviado",
    value: (stats: Stats) => formatCurrency(stats.totalCUP, "CUP"),
    color: "from-[#FFB347] to-[#FF8C42]",
    bgColor: "from-[#FFB347]/10 to-[#FF8C42]/10",
    borderColor: "border-[#FFB347]/30",
    description: "En remesas enviadas",
  },
  {
    icon: CreditCard,
    title: "Saldo Total",
    value: (stats: Stats) => formatCurrency(stats.totalSaldo, "CUP"),
    color: "from-[#0E8C8C] to-[#0B6B6B]",
    bgColor: "from-[#0E8C8C]/10 to-[#0B6B6B]/10",
    borderColor: "border-[#0E8C8C]/30",
    description: "En todas las tarjetas",
  },
];

export default function StatsSection({ stats }: StatsSectionProps) {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0E8C8C] to-[#FFB347] mb-8"
      >
        Estadísticas
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statsCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: index * 0.15, duration: 0.4 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className={`bg-gradient-to-br ${card.bgColor} border ${card.borderColor} rounded-2xl p-6 shadow-2xl backdrop-blur-sm relative overflow-hidden group`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 bg-gradient-to-br ${card.bgColor} rounded-xl border ${card.borderColor}`}>
                  <card.icon className={`w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r ${card.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-white">{card.title}</h3>
              </div>
              <motion.p
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.15 + 0.2, type: "spring" }}
                className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${card.color} mb-2`}
              >
                {card.value(stats)}
              </motion.p>
              <p className="text-sm text-gray-400">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
