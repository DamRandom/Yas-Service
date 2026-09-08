"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main className="relative min-h-screen text-white bg-[#050B14] selection:bg-[#C5A059] selection:text-[#050B14]">
      
      {/* Fixed Sticky Header Navigation */}
      <Navbar onOpenModal={openModal} />

      {/* Main Corporate Page Structure */}
      <Hero onOpenModal={openModal} />
      <About />
      <Services onOpenModal={openModal} />
      <HowItWorks />
      <FAQ />
      <Testimonials />
      <Footer />

      {/* Interactive Consultation Modal */}
      <ConsultationModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Animated Floating Action Button for WhatsApp */}
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, type: "spring" }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/51963807151?text=Hola%20Yas%20Service%2C%20deseo%20realizar%20una%20consulta%20directa."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-2xl shadow-green-500/40 transition-all duration-300 group"
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp className="text-3xl" />
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-[#0A192F] text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-[#C5A059]/40 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
          Atención Inmediata WhatsApp
        </span>
      </motion.a>

    </main>
  );
}
