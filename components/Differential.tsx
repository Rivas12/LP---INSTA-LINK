import { FaServer, FaRocket, FaShieldAlt, FaBolt } from "react-icons/fa";

export default function Differential() {
  const features = [
    { icon: FaServer, text: "Entrega de PDF, foto, imagem e áudio" },
    { icon: FaRocket, text: "Fluxos visuais estilo ManyChat" },
    { icon: FaBolt, text: "Gatilhos por palavra-chave em tempo real" },
    { icon: FaShieldAlt, text: "Escala com estabilidade e velocidade" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="scroll-reveal text-4xl md:text-6xl font-bold text-gray-900 mb-8">
            Principal diferencial: envio de{" "}
            <span className="text-orange-500">
              arquivos + fluxos
            </span>
          </h2>

          <p className="scroll-reveal text-xl text-gray-600 leading-relaxed mb-12">
            Além de responder comentários, a plataforma envia materiais completos no direct e executa
            jornadas automáticas como no ManyChat, com foco total em conversão.
          </p>

          <div className="scroll-reveal-scale bg-white border border-gray-200 rounded-3xl p-10 mb-8 shadow-md">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex w-16 h-16 bg-orange-500 rounded-2xl items-center justify-center mb-4">
                    <feature.icon className="text-2xl text-white" />
                  </div>
                  <p className="text-gray-700 font-medium">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-8">
            <p className="text-gray-700 text-lg">
              Sua audiência comenta e o sistema já responde, envia o arquivo certo e continua o fluxo sem
              travar, mesmo com <span className="text-gray-900 font-bold">alto volume de mensagens</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
