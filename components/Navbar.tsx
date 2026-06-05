"use client";

import { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 sm:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="LinkInsta"
              width={200}
              height={64}
              className="h-12 w-auto sm:h-14"
              priority
            />
          </div>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://app.linkinsta.com.br/login"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl text-sm font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-50 border border-gray-200 transition-all duration-200"
            >
              Entrar
            </a>
            <a
              href="https://app.linkinsta.com.br/register"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-orange-600 hover:shadow-md hover:scale-105 transition-all duration-200"
            >
              Começar Grátis
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 p-2 -mr-2">
              {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-3 pb-4 flex flex-col gap-2">
            <a
              href="https://app.linkinsta.com.br/login"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="w-full px-4 py-3 rounded-xl text-sm font-semibold text-gray-800 border border-gray-200 hover:bg-gray-50 transition text-center"
            >
              Entrar
            </a>
            <a
              href="https://app.linkinsta.com.br/register"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="w-full bg-orange-500 text-white px-4 py-3 rounded-xl text-sm font-semibold hover:bg-orange-600 transition text-center"
            >
              Começar Grátis
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
