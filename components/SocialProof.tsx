import { FaCheckCircle, FaBolt, FaRocket, FaChartLine } from "react-icons/fa";

export default function SocialProof() {
  const features = [
    { icon: FaBolt, text: "Respostas automáticas em lives" },
    { icon: FaRocket, text: "Entrega instantânea de links" },
    { icon: FaChartLine, text: "Captura de leads no direct" },
    { icon: FaCheckCircle, text: "Automações por palavra-chave" },
  ];

  return (
    <section className="py-14 sm:py-20 border-y border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Criadores já estão automatizando o Instagram para vender mais
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 hover:border-primary-300 hover:shadow-lg transition-all group"
            >
              <feature.icon className="text-2xl sm:text-3xl text-primary-600 mb-3 group-hover:scale-110 transition-transform" />
              <p className="text-sm sm:text-base text-gray-900 font-semibold">{feature.text}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto scroll-reveal-scale">
          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5 sm:p-8 shadow-md">
            <p className="text-gray-700 text-sm sm:text-lg leading-relaxed italic">
              &quot;Enquanto você fala na live, a plataforma responde{" "}
              <span className="text-gray-900 font-bold">centenas de comentários automaticamente.</span>&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
