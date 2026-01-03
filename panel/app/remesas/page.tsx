"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Send, Plus } from "lucide-react";
import type { Tab, RemesaFormData, CardFormData } from "./types";
import { useRemesasData } from "./hooks/useRemesasData";
import Tabs from "./components/Tabs";
import RemesaForm from "./components/RemesaForm";
import CardForm from "./components/CardForm";
import RemesasTable from "./components/RemesasTable";
import CardsTable from "./components/CardsTable";
import StatsSection from "./components/StatsSection";

export default function RemesasPage() {
  const [activeTab, setActiveTab] = useState<Tab>("historial");
  const [showRemesaForm, setShowRemesaForm] = useState(false);
  const [showCardForm, setShowCardForm] = useState(false);

  const {
    remesas,
    cards,
    stats,
    loading,
    error,
    handleCreateRemesa,
    handleCreateCard,
    handleMarkCardUsed,
  } = useRemesasData(activeTab);

  // Formulario de remesa
  const [remesaForm, setRemesaForm] = useState<RemesaFormData>({
    remitenteNombre: "",
    remitenteTelefono: "",
    destinatarioNombre: "",
    destinatarioTelefono: "",
    montoPEN: "",
    tarjetaOrigenId: "",
    tarjetaDestinoId: "",
  });

  // Formulario de tarjeta
  const [cardForm, setCardForm] = useState<CardFormData>({
    alias: "",
    userName: "",
    phone: "",
    manager: "",
    saldo: "",
    bankName: "",
  });

  const onSubmitRemesa = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await handleCreateRemesa(remesaForm);
    if (success) {
      setShowRemesaForm(false);
      setRemesaForm({
        remitenteNombre: "",
        remitenteTelefono: "",
        destinatarioNombre: "",
        destinatarioTelefono: "",
        montoPEN: "",
        tarjetaOrigenId: "",
        tarjetaDestinoId: "",
      });
    }
  };

  const onSubmitCard = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await handleCreateCard(cardForm);
    if (success) {
      setShowCardForm(false);
      setCardForm({
        alias: "",
        userName: "",
        phone: "",
        manager: "",
        saldo: "",
        bankName: "",
      });
    }
  };

  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      {/* Fondo general fijo */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1200] via-[#1a1f2200] to-[#0a0f1200]" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#0E3A5F]/70 rounded-full blur-3xl animate-drift-slow" />
        <div className="absolute bottom-10 right-1/4 w-60 h-60 bg-[#0B2A46]/60 rounded-full blur-3xl animate-drift-medium" />
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-[#134B73]/50 rounded-full blur-3xl animate-drift-fast" />
        <div className="absolute w-64 h-64 bg-[#FFB347]/70 rounded-full blur-3xl animate-drift-slow" style={{ left: '20%', top: '10%' }} />
        <div className="absolute inset-0 backdrop-blur-[100px]" />
      </div>

      {/* Barra de navegación */}
      <nav className="relative bg-gradient-to-r from-[#0A0F12]/90 via-[#0E1A1F]/90 to-[#0A0F12]/90 backdrop-blur-md border-b border-[#0E8C8C]/40 shadow-xl shadow-[#0E8C8C]/10 z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-4">
          <div className="flex items-center justify-between">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/" className="flex items-center gap-2 group">
  <motion.div whileHover={{ x: -3 }} className="p-1 rounded-full">
    <ArrowLeft className="w-5 h-5 text-[#0E8C8C]" />
  </motion.div>
  <span className="text-white group-hover:text-[#0E8C8C] transition-colors text-sm">
    Volver
  </span>
</Link>

            </motion.div>
            <div className="flex items-center gap-3">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
                className="w-12 h-12 bg-gradient-to-br from-[#0E8C8C] to-[#0B6B6B] rounded-xl flex items-center justify-center shadow-lg shadow-[#0E8C8C]/50"
              >
                <Send className="w-6 h-6 text-white" />
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0E8C8C] to-[#FFB347]"
              >
                Remesas
              </motion.h1>
            </div>
          </div>
        </div>
      </nav>

      {/* Tabs */}
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Contenido */}
      <section className="relative min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-16 z-10">
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-r from-red-900/50 to-red-800/50 border border-red-500/50 rounded-xl p-4 mb-6 backdrop-blur-sm shadow-lg"
            >
              <p className="text-red-200">{error}</p>
            </motion.div>
          )}
          {loading ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 border-4 border-[#0E8C8C]/30 border-t-[#0E8C8C] rounded-full mx-auto mb-4"
              />
              <p className="text-gray-400">Cargando...</p>
            </motion.div>
          ) : (
            <>
              {/* Tab: Historial */}
              {activeTab === "historial" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <div className="flex justify-between items-center">
                    <motion.h2
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0E8C8C] to-[#FFB347]"
                    >
                      Historial de Remesas
                    </motion.h2>
                    <motion.button
                      onClick={() => setShowRemesaForm(!showRemesaForm)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#0E8C8C] to-[#0B6B6B] hover:from-[#0B6B6B] hover:to-[#0E8C8C] rounded-xl font-semibold text-white shadow-lg shadow-[#0E8C8C]/30 transition-all duration-300"
                    >
                      <Plus className="w-5 h-5" />
                      Agregar remesa
                    </motion.button>
                  </div>

                  {/* Formulario de remesa */}
                  {showRemesaForm && (
                    <RemesaForm
                      remesaForm={remesaForm}
                      setRemesaForm={setRemesaForm}
                      cards={cards}
                      onSubmit={onSubmitRemesa}
                      onCancel={() => setShowRemesaForm(false)}
                    />
                  )}

                  {/* Tabla de remesas */}
                  <RemesasTable remesas={remesas} />
                </motion.div>
              )}

              {/* Tab: Tarjetas */}
              {activeTab === "tarjetas" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <div className="flex justify-between items-center">
                    <motion.h2
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0E8C8C] to-[#FFB347]"
                    >
                      Gestión de Tarjetas
                    </motion.h2>
                    <motion.button
                      onClick={() => setShowCardForm(!showCardForm)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#0E8C8C] to-[#0B6B6B] hover:from-[#0B6B6B] hover:to-[#0E8C8C] rounded-xl font-semibold text-white shadow-lg shadow-[#0E8C8C]/30 transition-all duration-300"
                    >
                      <Plus className="w-5 h-5" />
                      Crear tarjeta
                    </motion.button>
                  </div>

                  {/* Formulario de tarjeta */}
                  {showCardForm && (
                    <CardForm
                      cardForm={cardForm}
                      setCardForm={setCardForm}
                      onSubmit={onSubmitCard}
                      onCancel={() => setShowCardForm(false)}
                    />
                  )}

                  {/* Tabla de tarjetas */}
                  <CardsTable cards={cards} onMarkUsed={handleMarkCardUsed} />
                </motion.div>
              )}

              {/* Tab: Estadísticas */}
              {activeTab === "estadisticas" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <StatsSection stats={stats} />
                </motion.div>
              )}
            </>
          )}
        </div>
      </section>
    </main>
  );
}
