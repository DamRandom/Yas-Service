"use client";

import Image from "next/image";
import {
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#051326] border-t border-[#C5A059]/20 text-gray-300 relative pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_0.7fr] gap-12 lg:gap-16 pb-12 border-b border-[#1A2942]">

          {/* Col 1: Brand & Identity */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14 flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Yas Service"
                  fill
                  sizes="56px"
                  className="object-contain"
                />
              </div>

              <div>
                <span className="text-2xl font-bold tracking-tight text-white block">
                  Yas <span className="gold-gradient-text">Service</span>
                </span>

                <span className="text-[10px] text-[#C5A059] font-medium tracking-[0.14em] uppercase block mt-1">
                  Tu trámite es nuestra prioridad
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed max-w-lg">
              Yas Service brinda orientación, acompañamiento personalizado y
              gestión documental para ciudadanos cubanos interesados en
              realizar procesos migratorios y organizar su movilidad
              internacional.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-5">
            <h4 className="text-sm font-bold text-[#C5A059] uppercase tracking-wider">
              Navegación
            </h4>

            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#inicio"
                  className="hover:text-[#C5A059] transition-colors"
                >
                  Inicio & Presentación
                </a>
              </li>

              <li>
                <a
                  href="#nosotros"
                  className="hover:text-[#C5A059] transition-colors"
                >
                  Sobre Yas Service & Valores
                </a>
              </li>

              <li>
                <a
                  href="#servicios"
                  className="hover:text-[#C5A059] transition-colors"
                >
                  Servicios Migratorios & Viajes
                </a>
              </li>

              <li>
                <a
                  href="#proceso"
                  className="hover:text-[#C5A059] transition-colors"
                >
                  Proceso de Atención en 4 Pasos
                </a>
              </li>

              <li>
                <a
                  href="#faq"
                  className="hover:text-[#C5A059] transition-colors"
                >
                  Preguntas Frecuentes & Requisitos
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Social Buttons */}
          <div className="flex lg:justify-end">
            <div className="grid grid-cols-2 gap-3 h-fit">
              <a
                href="https://wa.me/51963807151"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-[#0B213F] border border-[#1A2942] hover:border-[#C5A059] flex items-center justify-center text-gray-300 hover:text-[#C5A059] transition-all hover:-translate-y-0.5"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-xl" />
              </a>

              <a
                href="mailto:informes@yasservices.com"
                className="w-12 h-12 rounded-xl bg-[#0B213F] border border-[#1A2942] hover:border-[#C5A059] flex items-center justify-center text-gray-300 hover:text-[#C5A059] transition-all hover:-translate-y-0.5"
                aria-label="Email"
              >
                <FaEnvelope className="text-lg" />
              </a>

              <a
                href="https://www.instagram.com/yas.service.pe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-[#0B213F] border border-[#1A2942] hover:border-[#C5A059] flex items-center justify-center text-gray-300 hover:text-[#C5A059] transition-all hover:-translate-y-0.5"
                aria-label="Instagram"
              >
                <FaInstagram className="text-lg" />
              </a>

              <a
                href="https://www.facebook.com/share/1Lk3WtuSYK/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-[#0B213F] border border-[#1A2942] hover:border-[#C5A059] flex items-center justify-center text-gray-300 hover:text-[#C5A059] transition-all hover:-translate-y-0.5"
                aria-label="Facebook"
              >
                <FaFacebook className="text-lg" />
              </a>
            </div>
          </div>
        </div>

        {/* Gold Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#C5A059]/30 to-transparent" />

        {/* Legal Disclaimer */}
        <div className="pt-8 space-y-4">
          <p className="text-[11px] text-gray-400 leading-relaxed">
            <strong>Aviso Legal & Exención de Responsabilidad:</strong> Yas
            Service es una entidad privada dedicada a la prestación de
            servicios de orientación profesional, apoyo documental, asesoría
            en itinerarios de viaje y gestión logística integral. Yas Service
            no es una entidad consular ni autoridad gubernamental. Las
            decisiones finales en materia de concesión de residencias o
            permisos competen exclusivamente a las autoridades migratorias de
            cada país.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 pt-4 border-t border-[#1A2942]">
            <p className="text-center sm:text-left">
              © {new Date().getFullYear()} Yas Service. Todos los derechos
              reservados. Tu trámite es nuestra prioridad.
            </p>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-xs text-[#C5A059] hover:text-white transition-colors cursor-pointer"
            >
              Volver arriba
              <FaArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}