"use client";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#061010]/80 text-gray-300 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/logo.png"
            alt="Yas Services Logo"
            width={140}
            height={140}
            className="mb-4"
          />
          <p className="text-sm text-gray-400">
            Conectamos personas con soluciones rápidas y confiables.
          </p>
        </div>

        {/* Links rápidos */}
        <div className="flex flex-col items-center">
          <h4 className="text-lg font-semibold mb-4 text-[#e25e0b]">Enlaces</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-[#e25e0b] transition-colors">
                Inicio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#e25e0b] transition-colors">
                Servicios
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#e25e0b] transition-colors">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div className="flex flex-col items-center md:items-end">
          <h4 className="text-lg font-semibold mb-4 text-[#e25e0b]">
            Contáctanos
          </h4>
          <div className="space-y-3 text-sm">
            <a
              href="https://facebook.com/yasservices"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#e25e0b] transition-colors"
            >
              <FaFacebookF /> Facebook
            </a>
            <a
              href="https://instagram.com/yasservices"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#e25e0b] transition-colors"
            >
              <FaInstagram /> Instagram
            </a>
            <a
              href="https://wa.me/51987654321"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#e25e0b] transition-colors"
            >
              <FaWhatsapp /> +51 987 654 321
            </a>
            <a
              href="mailto:yasservices@gmail.com"
              className="flex items-center gap-2 hover:text-[#e25e0b] transition-colors"
            >
              <FaEnvelope /> yasservices@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-[#e25e0b] drop-shadow-[0_0_15px_#e25e0b] mt-12 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Yas Services. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
