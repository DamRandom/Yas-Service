"use client";
import { motion } from "framer-motion";
import { FaPlane, FaMoneyBillWave, FaBox } from "react-icons/fa";

export default function Services() {
  const PHONE_NUMBER = "51986763560"; 

  const services = [
    {
      icon: <FaMoneyBillWave size={40} />,
      title: "Remesas",
      desc: "Envío de dinero seguro y rápido a cualquier destino.",
      message: "Hola, buenas, me interesa una remesa.",
    },
    {
      icon: <FaBox size={40} />,
      title: "Envíos",
      desc: "Transporte confiable de paquetes y documentos.",
      message: "Hola, buenas, me interesa un envío.",
    },
    {
      icon: <FaPlane size={40} />,
      title: "Vacaciones",
      desc: "Planes de viaje diseñados para tu comodidad.",
      message: "Hola, buenas, me interesa un viaje.",
    },
  ];

  const createWhatsAppLink = (message: string) => {
    return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="relative container mx-auto px-6 md:px-16 z-10">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center text-[#0E8C8C] mb-12 drop-shadow-lg"
        >
          Nuestros Servicios
        </motion.h2>

        {/* Grid de servicios */}
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.a
              key={index}
              href={createWhatsAppLink(service.message)}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative p-8 bg-[#0A0F12]/70 border border-transparent flex flex-col justify-between cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg group"
            >
              <div>
                <div className="text-[#dad6d4] mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-center text-[#0E8C8C] mb-3">
                  {service.title}
                </h3>
                <p className="text-center text-gray-300">{service.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
