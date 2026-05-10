import { FaInstagram, FaKey, FaCog, FaRocket } from "react-icons/fa";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      icon: FaInstagram,
      title: "Conecte seu Instagram",
      description: "Login rápido e seguro com integração Meta.",
      gradient: "from-pink-500 to-purple-500",
    },
    {
      number: "2",
      icon: FaKey,
      title: "Crie uma palavra-chave",
      description: "Exemplo: \"ebook\", \"curso\", \"planilha\".",
      gradient: "from-primary-500 to-electric-500",
    },
    {
      number: "3",
      icon: FaCog,
      title: "Defina a resposta",
      description: "Escolha o que será enviado automaticamente.",
      gradient: "from-electric-500 to-cyan-500",
    },
    {
      number: "4",
      icon: FaRocket,
      title: "Publique e automatize",
      description: "A plataforma responde tudo em tempo real.",
      gradient: "from-cyan-500 to-green-500",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16 scroll-reveal">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Configuração em{" "}
            <span className="text-orange-500">
              menos de 2 minutos
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="scroll-reveal relative group"
            >
              <div className="bg-white border border-gray-200 rounded-2xl sm:rounded-3xl p-5 sm:p-8 hover:border-primary-300 hover:shadow-xl transition-all h-full">
                {/* Number badge */}
                <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-full flex items-center justify-center font-bold text-white text-base sm:text-xl shadow-md">
                  {step.number}
                </div>

                <div className="inline-flex w-14 h-14 sm:w-16 sm:h-16 bg-orange-500 rounded-2xl items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <step.icon className="text-2xl sm:text-3xl text-white" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{step.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{step.description}</p>
              </div>

              {/* Connector arrow (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="text-primary-500 text-2xl">→</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
