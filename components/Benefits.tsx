import { FaChartLine, FaBolt, FaFire, FaHandPaper } from "react-icons/fa";

export default function Benefits() {
  const benefits = [
    {
      icon: FaChartLine,
      title: "Mais leads",
      description: "Capture contatos automaticamente durante lives e posts.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: FaBolt,
      title: "Mais velocidade",
      description: "Envio instantâneo de links sem depender de equipe.",
      gradient: "from-electric-500 to-blue-500",
    },
    {
      icon: FaFire,
      title: "Mais conversão",
      description: "Responda no momento exato em que a pessoa demonstra interesse.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: FaHandPaper,
      title: "Menos trabalho manual",
      description: "Pare de copiar e colar links no direct.",
      gradient: "from-primary-500 to-purple-500",
    },
  ];

  return (
    <section id="beneficios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Feito para criadores que querem{" "}
            <span className="text-orange-500">
              escalar
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="scroll-reveal group relative bg-white border border-gray-200 rounded-3xl p-10 hover:border-primary-300 hover:shadow-2xl transition-all overflow-hidden"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-transparent"></div>

              <div className="relative">
                <div className="inline-flex w-16 h-16 bg-orange-500 rounded-2xl items-center justify-center mb-6 group-hover:scale-110 transition-all">
                  <benefit.icon className="text-3xl text-white" />
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-xl text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
