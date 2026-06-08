"use client";

import { useState } from "react";
import { FaChevronDown, FaShieldAlt } from "react-icons/fa";
import { SiMeta } from "react-icons/si";

const faqs = [
  {
    question: "Preciso deixar o PC ligado para as automações funcionarem?",
    answer:
      "Não. Tudo roda na nuvem, 24 horas por dia, 7 dias por semana. Você pode fechar o computador, apagar a luz e ir dormir — as automações continuam respondendo e capturando leads enquanto você descansa.",
  },
  {
    question: "Corre risco de banimento da conta no Instagram?",
    answer:
      "Não. Utilizamos exclusivamente a API Oficial do Instagram, parceira da Meta. Isso significa que cada ação segue rigorosamente as políticas da plataforma — sem bots terceiros, sem simulação de comportamento humano e sem risco de bloqueio.",
    highlight: true,
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer:
      "Sim, sem burocracia. Não há fidelidade, multa ou carência. Basta cancelar pelo painel com um clique. O acesso continua até o fim do período já pago.",
  },
  {
    question: "O preço pode aumentar se minha audiência crescer?",
    answer:
      "Não. Nossos planos são por conta Instagram conectada, com preço fixo em Real. Você não paga mais caro quando viralizar — ao contrário das ferramentas gringas que cobram em dólar por contato ou volume de mensagens.",
  },
  {
    question: "Em quanto tempo consigo configurar minha primeira automação?",
    answer:
      "Em menos de 5 minutos. O painel é intuitivo: conecte sua conta Instagram, escolha a palavra-chave e defina o que será enviado no direct. Nenhum conhecimento técnico necessário.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 sm:py-28 bg-slate-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-orange-50 border border-orange-200 text-orange-600 rounded-full text-sm font-semibold mb-4">
            DÚVIDAS FREQUENTES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Perguntas que todo mundo faz
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                open === i
                  ? faq.highlight
                    ? "border-green-300 bg-green-50"
                    : "border-orange-200 bg-orange-50/40"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-gray-900 text-sm sm:text-base leading-snug">
                  {faq.question}
                </span>
                <FaChevronDown
                  className={`flex-shrink-0 text-gray-400 transition-transform duration-200 ${
                    open === i ? "rotate-180 text-orange-500" : ""
                  }`}
                />
              </button>

              {open === i && (
                <div className="px-5 pb-5">
                  {faq.highlight && (
                    <div className="flex items-center gap-2 mb-3">
                      <SiMeta className="text-[#0866FF] text-sm" />
                      <span className="text-xs font-semibold text-green-700 bg-green-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <FaShieldAlt className="text-[10px]" />
                        API Oficial Meta — 100% seguro
                      </span>
                    </div>
                  )}
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <p className="text-center text-gray-500 text-sm mt-10">
          Ainda tem dúvidas?{" "}
          <a
            href="https://wa.me/5500000000000?text=Oi!%20Tenho%20uma%20d%C3%BAvida%20sobre%20o%20InstaFlow."
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 font-semibold hover:underline"
          >
            Fale com a gente no WhatsApp →
          </a>
        </p>
      </div>
    </section>
  );
}
