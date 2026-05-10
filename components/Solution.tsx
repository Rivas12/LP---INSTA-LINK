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
    <section id="solucao" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
            Automatize tudo com{" "}
            <span className="text-orange-500">
              palavras-chave
            </span>
          </h2>

          <div className="text-left space-y-6 text-xl text-gray-600">
            <p>Escolha uma palavra-chave e monte seu fluxo.</p>
            <p>
              Quando alguém comentar essa palavra, <span className="text-gray-900 font-bold">a automação entrega o arquivo certo e segue o fluxo automaticamente.</span>
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">A plataforma pode:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {capabilities.map((capability, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                    <capability.icon className="text-white" />
                  </div>
                  <p className="text-gray-700 font-medium">{capability.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Visual Example */}
        <div className="max-w-4xl mx-auto scroll-reveal">
          <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-lg">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-4">
                  <p className="text-sm text-gray-500 mb-2">Usuário comenta:</p>
                  <p className="text-2xl text-gray-900 font-bold">&quot;ebook&quot;</p>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="text-electric-400 text-3xl">→</div>
              </div>

              <div className="space-y-3">
                <div className="bg-primary-500/10 border border-primary-500/30 rounded-xl p-4">
                  <p className="text-sm text-primary-700 font-semibold">✓ responde comentário</p>
                </div>
                <div className="bg-electric-500/10 border border-electric-500/30 rounded-xl p-4">
                  <p className="text-sm text-electric-700 font-semibold">✓ envia DM</p>
                </div>
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
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
