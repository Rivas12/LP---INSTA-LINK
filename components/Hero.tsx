import { FaInstagram, FaRocket, FaBolt } from "react-icons/fa";
import { SiMeta } from "react-icons/si";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-white">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 border border-orange-200 rounded-full mb-8">
            <SiMeta className="text-[#0866FF]" />
            <span className="text-sm font-semibold text-gray-700">Automação para Instagram em tempo real</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
            <span className="text-gray-900">Transforme comentários do </span>
            <span className="text-orange-500">
              Instagram
            </span>
            <br />
            <span className="text-gray-900">em leads automaticamente</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            Crie fluxos completos estilo ManyChat e envie <span className="text-gray-900 font-semibold">PDF, foto, imagem, áudio e links</span> automaticamente no direct — sem equipe e sem trabalho manual.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group bg-orange-500 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-orange-600 hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-3">
              <FaInstagram className="text-2xl" />
              Teste Grátis
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button className="px-10 py-5 rounded-2xl text-lg font-semibold text-gray-900 border-2 border-gray-300 hover:border-primary-500 hover:bg-gray-50 transition-all duration-300">
              Entrar
            </button>
          </div>

          {/* Mockup visual */}
          <div className="relative mt-16">
            <div className="bg-white border border-gray-200 rounded-3xl p-8 backdrop-blur-sm shadow-2xl">
              <div className="grid md:grid-cols-3 gap-6 text-left">
                {/* Step 1 */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-primary-300 hover:shadow-lg transition-all group">
                  <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
                    <FaInstagram className="text-white text-xl" />
                  </div>
                  <p className="text-sm text-gray-500 mb-2">Comentário no post</p>
                  <p className="text-gray-900 font-semibold">&quot;ebook&quot;</p>
                </div>

                {/* Step 2 */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-electric-300 hover:shadow-lg transition-all group">
                  <div className="w-12 h-12 bg-electric-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
                    <FaBolt className="text-white" />
                  </div>
                  <p className="text-sm text-gray-500 mb-2">Resposta automática</p>
                  <p className="text-gray-900 font-semibold">&quot;Enviando no direct!&quot;</p>
                </div>

                {/* Step 3 */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-primary-300 hover:shadow-lg transition-all group">
                  <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
                    <FaRocket className="text-white" />
                  </div>
                  <p className="text-sm text-gray-500 mb-2">DM enviada automaticamente</p>
                  <p className="text-electric-600 font-semibold">Link do ebook entregue</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
