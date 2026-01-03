"use client";

import { motion } from "framer-motion";
import { Calendar, User, Phone, CreditCard, DollarSign, ArrowRight } from "lucide-react";
import type { Remesa } from "../types";

interface RemesasTableProps {
  remesas: Remesa[];
}

const formatDate = (dateString: string) =>
  new Date(dateString).toLocaleString("es-ES", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

const formatCurrency = (amount: number, currency: string) =>
  new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(amount);

function RemesaCard({ remesa, index }: { remesa: Remesa; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ scale: 1.02, y: -4 }}
      className="bg-linear-to-br from-white/5 via-white/3 to-white/5 border-2 border-[#0E8C8C]/40 rounded-2xl p-6 shadow-xl shadow-[#0E8C8C]/20 backdrop-blur-sm relative overflow-hidden"
    >
      {/* Líneas decorativas */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-[#0E8C8C] via-[#FFB347] to-[#0E8C8C]" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#0E8C8C] via-[#FFB347] to-[#0E8C8C]" />

      {/* Header */}
      <div className="flex justify-between items-start mb-6 pb-4 border-b border-[#0E8C8C]/30">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Calendar className="w-4 h-4 text-[#0E8C8C]" />
            <span className="text-xs text-gray-400 uppercase tracking-wider">
              Fecha
            </span>
          </div>
          <p className="text-sm font-semibold text-white">
            {formatDate(remesa.fecha)}
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-400 uppercase tracking-wider">
            ID Remesa
          </p>
          <p className="text-sm font-bold text-[#0E8C8C]">
            #{remesa.id.toString().padStart(6, "0")}
          </p>
        </div>
      </div>

      {/* Remitente → Destinatario (horizontal) */}
      <div className="grid grid-cols-[1fr_auto_1fr] gap-4 mb-6 items-center">
        {/* Remitente */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 bg-[#0E8C8C]/20 rounded-lg">
              <User className="w-4 h-4 text-[#0E8C8C]" />
            </div>
            <span className="text-xs font-semibold text-[#0E8C8C] uppercase tracking-wide">
              Remitente
            </span>
          </div>
          <p className="text-base font-semibold text-white">
            {remesa.remitenteNombre}
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <Phone className="w-3 h-3" />
            <span>{remesa.remitenteTelefono}</span>
          </div>
        </div>

        {/* Flecha */}
        <motion.div
          animate={{ x: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="p-3 bg-linear-to-br from-[#0E8C8C]/30 to-[#FFB347]/30 rounded-full"
        >
          <ArrowRight className="w-5 h-5 text-[#FFB347]" />
        </motion.div>

        {/* Destinatario */}
        <div className="text-right">
          <div className="flex items-center justify-end gap-2 mb-2">
            <span className="text-xs font-semibold text-[#FFB347] uppercase tracking-wide">
              Destinatario
            </span>
            <div className="p-2 bg-[#FFB347]/20 rounded-lg">
              <User className="w-4 h-4 text-[#FFB347]" />
            </div>
          </div>
          <p className="text-base font-semibold text-white">
            {remesa.destinatarioNombre}
          </p>
          <div className="flex items-center justify-end gap-2 text-sm text-gray-300">
            <Phone className="w-3 h-3" />
            <span>{remesa.destinatarioTelefono}</span>
          </div>
        </div>
      </div>

      {/* Montos */}
      <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-linear-to-r from-[#0E8C8C]/10 to-[#FFB347]/10 rounded-xl border border-[#0E8C8C]/30">
        <div>
          <p className="text-xs text-gray-400 uppercase mb-1">
            Monto enviado
          </p>
          <p className="text-xl font-bold text-transparent bg-clip-text bg-linear-to-r from-green-400 to-emerald-500">
            {formatCurrency(remesa.montoPEN, "PEN")}
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-400 uppercase mb-1">
            Monto recibido
          </p>
          <p className="text-xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#FFB347] to-[#FF8C42]">
            {formatCurrency(remesa.montoCUP, "CUP")}
          </p>
        </div>
      </div>

      {/* Tarjetas */}
      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#0E8C8C]/30">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <CreditCard className="w-4 h-4 text-[#0E8C8C]" />
            <span className="text-xs text-gray-400 uppercase">Origen</span>
          </div>
          <p className="text-sm font-semibold text-white">
            {remesa.tarjetaOrigenAlias || `ID: ${remesa.tarjetaOrigenId}`}
          </p>
        </div>
        <div className="text-right">
          <div className="flex items-center justify-end gap-2 mb-1">
            <span className="text-xs text-gray-400 uppercase">Destino</span>
            <CreditCard className="w-4 h-4 text-[#FFB347]" />
          </div>
          <p className="text-sm font-semibold text-white">
            {remesa.tarjetaDestinoAlias || `ID: ${remesa.tarjetaDestinoId}`}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-dashed border-[#0E8C8C]/30 flex items-center justify-center gap-2">
        <DollarSign className="w-4 h-4 text-[#0E8C8C]" />
        <p className="text-xs text-gray-400">
          Transacción completada exitosamente
        </p>
      </div>
    </motion.div>
  );
}

export default function RemesasTable({ remesas }: RemesasTableProps) {
  if (remesas.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-linear-to-br from-[#0A0F12]/90 via-[#0E1A1F]/90 to-[#0A0F12]/90 border border-[#0E8C8C]/40 rounded-2xl p-12 text-center backdrop-blur-sm"
      >
        <div className="flex flex-col items-center gap-4">
          <div className="p-4 bg-[#0E8C8C]/20 rounded-full">
            <DollarSign className="w-8 h-8 text-[#0E8C8C]" />
          </div>
          <p className="text-gray-400 text-lg">
            No hay remesas registradas
          </p>
          <p className="text-gray-500 text-sm">
            Las remesas aparecerán aquí cuando se creen
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {remesas.map((remesa, index) => (
        <RemesaCard key={remesa.id} remesa={remesa} index={index} />
      ))}
    </div>
  );
}
