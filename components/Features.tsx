import { FaCalendarAlt, FaRobot, FaChartBar, FaUsers, FaMobileAlt, FaHeadset } from "react-icons/fa";

const features = [
  {
    icon: FaCalendarAlt,
    title: "Agende uma vez, publique em todos os lugares",
    description:
      "Crie seu conteúdo e distribua automaticamente para Instagram, TikTok, LinkedIn e mais. Nossa IA sugere os melhores horários para engajamento máximo.",
    color: "text-blue-500",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: FaRobot,
    title: "IA que escreve melhor que você (brincadeira!)",
    description:
      "Desbloqueio criativo instantâneo. Nossa IA gera legendas personalizadas, hashtags estratégicas e até sugestões visuais em segundos.",
    color: "text-purple-500",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: FaChartBar,
    title: "Dados que realmente importam",
    description:
      "Esqueça planilhas confusas. Veja seu crescimento, engajamento e ROI em dashboards visuais que qualquer um entende.",
    color: "text-green-500",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: FaUsers,
    title: "Espione seus concorrentes (legalmente)",
    description:
      "Descubra o que está funcionando para sua concorrência. Analise estratégias, horários de pico e conteúdos virais.",
    color: "text-red-500",
    gradient: "from-red-500 to-orange-500",
  },
  {
    icon: FaMobileAlt,
    title: "Seu escritório no bolso",
    description:
      "Aprove posts, responda comentários e monitore resultados de qualquer lugar. Funciona offline também!",
    color: "text-indigo-500",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: FaHeadset,
    title: "Suporte que realmente ajuda",
    description:
      "Pessoas reais respondendo em minutos. Sem robôs, sem respostas prontas. Só ajuda de verdade quando você precisa.",
    color: "text-orange-500",
    gradient: "from-orange-500 to-red-500",
  },
];

export default function Features() {
  return (
    <section id="funcionalidades" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            FUNCIONALIDADES
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Tudo que você precisa para
            <br />
            <span className="bg-gradient-to-r from-primary-600 to-orange-600 bg-clip-text text-transparent">
              dominar as redes sociais
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Feito para agências, creators, empresas e profissionais que querem resultados reais
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-white hover:bg-gradient-to-br hover:from-white hover:to-gray-50 border-2 border-gray-100 hover:border-primary-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6`}>
                <feature.icon className="text-4xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              <div className="mt-6 flex items-center text-primary-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Explorar</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <div className="relative bg-gradient-to-br from-primary-600 via-orange-600 to-red-600 text-white rounded-3xl p-14 max-w-4xl mx-auto shadow-2xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="relative">
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
                🎉 OFERTA ESPECIAL
              </span>
              <p className="text-5xl md:text-6xl font-extrabold mb-4">
                R$ 29,90<span className="text-2xl">/mês</span>
              </p>
              <p className="text-xl md:text-2xl mb-8 text-white/90 font-medium">
                Marcas, usuários e relatórios <span className="underline">ilimitados</span>.
                <br />Cancele quando quiser. Sem pegadinhas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <button className="group bg-white text-primary-600 px-10 py-5 rounded-2xl text-lg font-bold hover:scale-105 hover:shadow-2xl transition-all duration-300">
                  <span className="flex items-center gap-2">
                    Começar Teste Grátis
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </button>
                <p className="text-sm text-white/90">
                  ✓ 14 dias grátis • Sem cartão • Cancele a qualquer momento
                </p>
              </div>
              <p className="text-xs text-white/70 max-w-2xl mx-auto">
                *Valor do plano anual com pagamento à vista. Plano mensal disponível por R$ 49,90/mês.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
