// Home.tsx
"use client";

import Benefits from "@/components/Benefits";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

import { motion } from "framer-motion";
import { useBouncingElement } from "@/hooks/useBouncingElement";
import CallToAction from "@/components/CTA";
import Footer from "@/components/Footer";

function MovingSun() {
  const { x, y } = useBouncingElement(256, 256, 0.7); // 256px = w-64/h-64

  return (
    <motion.div
      className="absolute w-64 h-64 bg-[#FFB347]/70 rounded-full blur-3xl"
      style={{ left: x, top: y }}
    />
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      {/* Fondo general fijo */}
      <div className="fixed inset-0 -z-10">
        {/* Gradiente base */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1200] via-[#1a1f2200] to-[#0a0f1200]" />

        {/* Burbujas azules (mar) */}
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#0E3A5F]/70 rounded-full blur-3xl animate-drift-slow" />
        <div className="absolute bottom-10 right-1/4 w-60 h-60 bg-[#0B2A46]/60 rounded-full blur-3xl animate-drift-medium" />
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-[#134B73]/50 rounded-full blur-3xl animate-drift-fast" />

        {/* Burbuja dorada (sol) con hook */}
        <MovingSun />

        {/* Capa de blur encima */}
        <div className="absolute inset-0 backdrop-blur-[100px]" />
      </div>

      <Hero />
      <Services />
      <Benefits />
      <Testimonials />
      <HowItWorks />
      <CallToAction />
      <Footer />
    </main>
  );
}
