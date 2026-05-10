"use client";

import { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-xl border-b border-gray-200 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 sm:h-24">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="InstaLink"
              width={230}
              height={72}
              className="h-14 w-auto sm:h-16"
              priority
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#solucao" className="text-gray-700 hover:text-gray-900 transition font-medium">
              Como Funciona
            </a>
            <a href="#beneficios" className="text-gray-700 hover:text-gray-900 transition font-medium">
              Benefícios
            </a>
            <a href="#demo" className="text-gray-700 hover:text-gray-900 transition font-medium">
              Demo
            </a>
            <a href="#video" className="text-gray-700 hover:text-gray-900 transition font-medium">
              Vídeo
            </a>
            <a href="#fotos" className="text-gray-700 hover:text-gray-900 transition font-medium">
              Fotos
            </a>
            <div className="flex items-center gap-3">
              <button className="px-5 py-3 rounded-xl font-semibold text-gray-800 border border-gray-300 hover:bg-gray-50 transition-all duration-300">
                Entrar
              </button>
              <button className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 hover:shadow-lg hover:scale-105 transition-all duration-300">
                Teste Grátis
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 p-2 -mr-2">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <a href="#solucao" onClick={closeMenu} className="block py-2.5 text-sm text-gray-700 hover:text-gray-900 transition font-medium">
              Como Funciona
            </a>
            <a href="#beneficios" onClick={closeMenu} className="block py-2.5 text-sm text-gray-700 hover:text-gray-900 transition font-medium">
              Benefícios
            </a>
            <a href="#demo" onClick={closeMenu} className="block py-2.5 text-sm text-gray-700 hover:text-gray-900 transition font-medium">
              Demo
            </a>
            <a href="#video" onClick={closeMenu} className="block py-2.5 text-sm text-gray-700 hover:text-gray-900 transition font-medium">
              Vídeo
            </a>
            <a href="#fotos" onClick={closeMenu} className="block py-2.5 text-sm text-gray-700 hover:text-gray-900 transition font-medium">
              Fotos
            </a>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button onClick={closeMenu} className="w-full px-4 py-3 rounded-xl text-sm font-semibold text-gray-800 border border-gray-300 hover:bg-gray-50 transition">
                Entrar
              </button>
              <button onClick={closeMenu} className="w-full bg-orange-500 text-white px-4 py-3 rounded-xl text-sm font-semibold hover:bg-orange-600 hover:shadow-lg transition">
                Teste Grátis
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
