import Image from "next/image";
import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Image
              src="/logo.jpeg"
              alt="InstaLink"
              width={220}
              height={68}
              className="h-14 w-auto mb-4"
            />
            <p className="text-gray-400 mb-4">
              Gerenciamento de Redes Sociais em um só lugar!
            </p>
            <div className="flex gap-4 text-2xl">
              <FaInstagram className="hover:text-primary-500 cursor-pointer transition" />
              <FaLinkedin className="hover:text-primary-500 cursor-pointer transition" />
              <FaFacebook className="hover:text-primary-500 cursor-pointer transition" />
              <FaYoutube className="hover:text-primary-500 cursor-pointer transition" />
            </div>
          </div>

          {/* Funcionalidades */}
          <div>
            <h4 className="font-bold text-lg mb-4">Funcionalidades</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer transition">Agendamento de Posts</li>
              <li className="hover:text-white cursor-pointer transition">Relatórios de Redes Sociais</li>
              <li className="hover:text-white cursor-pointer transition">Criação com IA</li>
              <li className="hover:text-white cursor-pointer transition">Análise de Concorrentes</li>
              <li className="hover:text-white cursor-pointer transition">Gestão de Equipes</li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-bold text-lg mb-4">Empresa</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer transition">Sobre Nós</li>
              <li className="hover:text-white cursor-pointer transition">Blog</li>
              <li className="hover:text-white cursor-pointer transition">Carreiras</li>
              <li className="hover:text-white cursor-pointer transition">Contato</li>
              <li className="hover:text-white cursor-pointer transition">Central de Ajuda</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-primary-500" />
                <span>contato@instalink.com</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-primary-500" />
                <span>(11) 99999-9999</span>
              </li>
            </ul>
            <button className="mt-6 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition w-full">
              Fale Conosco
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 InstaLink Software S.A. All Rights Reserved.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-white transition">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-white transition">
                Acessibilidade
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
