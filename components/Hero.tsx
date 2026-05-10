import { FaInstagram, FaRocket, FaBolt } from "react-icons/fa";
import { SiMeta } from "react-icons/si";

export default function Hero() {
  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden bg-white">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-orange-50 border border-orange-200 rounded-full mb-6 sm:mb-8 max-w-full">
            <SiMeta className="text-[#0866FF]" />
            <span className="text-xs sm:text-sm font-semibold text-gray-700">Automação para Instagram em tempo real</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold mb-6 sm:mb-8 leading-[1.1] sm:leading-tight px-1">
            <span className="text-gray-900">Transforme comentários do </span>
            <span className="text-orange-500">
              Instagram
            </span>
            <br />
            <span className="text-gray-900">em leads automaticamente</span>
          </h1>

          <p className="text-base sm:text-lg md:text-2xl text-gray-600 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto px-1">
            Crie fluxos completos estilo ManyChat e envie <span className="text-gray-900 font-semibold">PDF, foto, imagem, áudio e links</span> automaticamente no direct — sem equipe e sem trabalho manual.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-10 sm:mb-16 w-full max-w-md sm:max-w-none mx-auto">
            <button className="group w-full sm:w-auto bg-orange-500 text-white px-6 sm:px-10 py-4 sm:py-5 rounded-2xl text-base sm:text-lg font-bold hover:bg-orange-600 hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
              <FaInstagram className="text-2xl" />
              Teste Grátis
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button className="w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 rounded-2xl text-base sm:text-lg font-semibold text-gray-900 border-2 border-gray-300 hover:border-primary-500 hover:bg-gray-50 transition-all duration-300">
              Entrar
            </button>
          </div>

          {/* Mockup visual */}
          <div className="relative mt-10 sm:mt-16">
            <div className="bg-white border border-gray-200 rounded-2xl sm:rounded-3xl p-4 sm:p-8 backdrop-blur-sm shadow-xl sm:shadow-2xl">
              <div className="grid gap-4 sm:gap-6 md:grid-cols-3 text-left">
                {/* Step 1 */}
                <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 hover:border-primary-300 hover:shadow-lg transition-all group">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 bg-primary-500 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition">
                    <FaInstagram className="text-white text-xl" />
                  </div>
                  <p className="text-sm text-gray-500 mb-2">Comentário no post</p>
                  <p className="text-sm sm:text-base text-gray-900 font-semibold">&quot;ebook&quot;</p>
                </div>

                {/* Step 2 */}
                <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 hover:border-electric-300 hover:shadow-lg transition-all group">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 bg-electric-500 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition">
                    <FaBolt className="text-white" />
                  </div>
                  <p className="text-sm text-gray-500 mb-2">Resposta automática</p>
                  <p className="text-sm sm:text-base text-gray-900 font-semibold">&quot;Enviando no direct!&quot;</p>
                </div>

                {/* Step 3 */}
                <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 hover:border-primary-300 hover:shadow-lg transition-all group">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 bg-primary-500 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition">
                    <FaRocket className="text-white" />
                  </div>
                  <p className="text-sm text-gray-500 mb-2">DM enviada automaticamente</p>
                  <p className="text-sm sm:text-base text-electric-600 font-semibold">Link do ebook entregue</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
