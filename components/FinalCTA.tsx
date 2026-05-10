import { FaInstagram, FaRocket } from "react-icons/fa";

export default function FinalCTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-white">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-electric-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white border border-orange-100 rounded-3xl p-12 md:p-16 text-center shadow-xl">
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Pare de perder leads no{" "}
              <span className="text-orange-500">
                Instagram
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Automatize respostas, entregue links instantaneamente e transforme comentários em
              oportunidades de venda.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <button className="group bg-orange-500 text-white px-12 py-6 rounded-2xl text-xl font-bold hover:bg-orange-600 hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-4">
                <FaInstagram className="text-3xl" />
                Teste Grátis
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <button className="px-12 py-6 rounded-2xl text-xl font-semibold text-gray-900 border-2 border-gray-300 hover:border-primary-500 hover:bg-gray-50 transition-all duration-300">
                Entrar
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>Sem cartão necessário</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>14 dias de teste grátis</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>Cancele quando quiser</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative mt-24 border-t border-gray-200 pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <span className="text-2xl font-bold text-orange-500">
                InstaLink
              </span>
              <p className="text-gray-500 text-sm mt-2">
                Automação de Instagram para criadores
              </p>
              <p className="text-gray-500 text-sm mt-1">
                CNPJ: 12.345.678/0001-90
              </p>
            </div>
            <div className="text-gray-500 text-sm text-center md:text-right">
              <p>© 2026 InstaLink. Todos os direitos reservados.</p>
              <p className="mt-1">Termos de uso • Política de privacidade</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
