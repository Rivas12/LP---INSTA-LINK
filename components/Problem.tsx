import { FaTimes } from "react-icons/fa";

export default function Problem() {
  const problems = [
    "copiando e colando links",
    "perdendo comentários",
    "respondendo manualmente",
    "direct atrasado",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="scroll-reveal text-4xl md:text-6xl font-bold text-gray-900 mb-8">
            Você perde leads toda vez que{" "}
            <span className="text-red-600">
              demora para responder
            </span>
          </h2>

          <div className="scroll-reveal space-y-6 text-left mb-12">
            <p className="text-xl text-gray-600 leading-relaxed">
              Durante uma live, os comentários chegam rápido demais.
              <br />
              Responder manualmente faz você perder atenção, engajamento e vendas.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              Quem comenta quer o link <span className="text-gray-900 font-bold">agora</span>.
              <br />
              Se você demora, a chance passa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="scroll-reveal flex items-center gap-4 bg-red-50 border border-red-200 rounded-2xl p-6"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <FaTimes className="text-red-600" />
                </div>
                <p className="text-gray-700 font-medium">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
