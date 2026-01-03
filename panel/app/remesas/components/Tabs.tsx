"use client";

import { motion } from "framer-motion";
import { Calendar, CreditCard, TrendingUp } from "lucide-react";
import type { Tab } from "../types";

interface TabsProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

export default function Tabs({ activeTab, setActiveTab }: TabsProps) {
  const tabs = [
    { id: "historial" as Tab, label: "Historial", icon: Calendar },
    { id: "tarjetas" as Tab, label: "Tarjetas", icon: CreditCard },
    { id: "estadisticas" as Tab, label: "Estadísticas", icon: TrendingUp },
  ];

  return (
    <div className="relative z-10 border-b border-[#0E8C8C]/30 bg-gradient-to-b from-[#0A0F12]/80 to-[#0A0F12]/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="flex gap-2">
          {tabs.map((tab, index) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative flex items-center gap-2 px-6 py-4 border-b-2 transition-all duration-300 ${
                activeTab === tab.id
                  ? "border-[#0E8C8C] text-[#0E8C8C]"
                  : "border-transparent text-gray-400 hover:text-[#0E8C8C]/70 hover:border-[#0E8C8C]/30"
              }`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0E8C8C] via-[#FFB347] to-[#0E8C8C]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <tab.icon className="w-5 h-5 relative z-10" />
              <span className="relative z-10 font-medium">{tab.label}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}

