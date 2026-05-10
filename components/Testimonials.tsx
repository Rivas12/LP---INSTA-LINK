import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Carolina Lima",
    role: "Sócia e Diretora de Social Media",
    company: "8D Hubify",
    text: "Mudou completamente nosso fluxo de trabalho. Antes levávamos 3 horas para organizar o calendário mensal de um cliente. Hoje fazemos em 20 minutos. E com melhores resultados.",
    metric: "85% mais rápido",
  },
  {
    name: "Rodrigo Santos",
    role: "Gerente de Marketing",
    company: "TechStart",
    text: "A IA de conteúdo é assustadora de tão boa. Testamos 5 ferramentas e nenhuma chegou perto. Nosso engajamento aumentou 240% em 2 meses.",
    metric: "+240% engajamento",
  },
  {
    name: "Mariana Costa",
    role: "Social Media Manager",
    company: "Creative Agency",
    text: "Gerencio 23 contas sozinha agora. Antes mal conseguia lidar com 8. O app mobile é perfeito para aprovar posts de qualquer lugar. Game changer total.",
    metric: "3x mais produtiva",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-br from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600">
            Milhares de profissionais confiam na InstaLink
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary-200 hover:-translate-y-1"
            >
              <div className="absolute top-6 right-6">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                  {testimonial.metric}
                </span>
              </div>
              <FaQuoteLeft className="text-4xl text-primary-500 mb-6 opacity-50" />
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">{testimonial.text}</p>
              <div className="border-t border-gray-100 pt-6">
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-400 to-orange-500 rounded-full mr-4 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-primary-600 font-semibold">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
