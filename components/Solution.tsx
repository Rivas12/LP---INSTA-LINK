import { FaCheckCircle, FaPaperPlane, FaFileAlt, FaLink, FaDatabase } from "react-icons/fa";

export default function Solution() {
  const capabilities = [
    { icon: FaCheckCircle, text: "responder comentários automaticamente" },
    { icon: FaPaperPlane, text: "enviar PDF, foto, imagem e áudio no direct" },
    { icon: FaFileAlt, text: "entregar arquivos e materiais automaticamente" },
    { icon: FaLink, text: "fluxos avançados estilo ManyChat" },
    { icon: FaDatabase, text: "captar e qualificar leads em tempo real" },
  ];

  return (
    <section id="solucao" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-5 sm:mb-8">
            Automatize tudo com{" "}
            <span className="text-orange-500">
              palavras-chave
            </span>
          </h2>

          <div className="text-left space-y-4 sm:space-y-6 text-base sm:text-xl text-gray-600">
            <p>Escolha uma palavra-chave e monte seu fluxo.</p>
            <p>
              Quando alguém comentar essa palavra, <span className="text-gray-900 font-bold">a automação entrega o arquivo certo e segue o fluxo automaticamente.</span>
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mb-10 sm:mb-16">
          <div className="bg-white border border-gray-200 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-md">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5 sm:mb-6">A plataforma pode:</h3>
            <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
              {capabilities.map((capability, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                    <capability.icon className="text-white" />
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 font-medium">{capability.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Visual Example */}
        <div className="max-w-4xl mx-auto scroll-reveal">
          <div className="bg-white border border-gray-200 rounded-2xl sm:rounded-3xl p-5 sm:p-10 shadow-lg">
            <div className="grid md:grid-cols-3 gap-5 sm:gap-8 items-center">
              <div className="text-center">
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 sm:p-6 mb-4">
                  <p className="text-sm text-gray-500 mb-2">Usuário comenta:</p>
                  <p className="text-xl sm:text-2xl text-gray-900 font-bold">&quot;ebook&quot;</p>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="text-electric-400 text-3xl">→</div>
              </div>

              <div className="space-y-3">
                <div className="bg-primary-500/10 border border-primary-500/30 rounded-xl p-3 sm:p-4">
                  <p className="text-sm text-primary-700 font-semibold">✓ responde comentário</p>
                </div>
                <div className="bg-electric-500/10 border border-electric-500/30 rounded-xl p-3 sm:p-4">
                  <p className="text-sm text-electric-700 font-semibold">✓ envia DM</p>
                </div>
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-3 sm:p-4">
                  <p className="text-sm text-green-700 font-semibold">✓ entrega link</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
