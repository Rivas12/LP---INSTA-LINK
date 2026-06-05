"use client";

import { useState } from "react";
import { FaRocket, FaBolt, FaStar, FaCrown, FaCheck, FaTimes } from "react-icons/fa";

const plans = [
  {
    id: "free",
    icon: FaRocket,
    iconColor: "text-orange-400",
    iconBg: "bg-orange-900/30",
    accentColor: "orange",
    name: "Free",
    tagline: "Experimente sem compromisso",
    monthlyPrice: 0,
    annualPrice: 0,
    badge: "Grátis",
    badgeColor: "bg-orange-500/20 text-orange-400 border border-orange-500/30",
    buttonLabel: "Começar Grátis",
    buttonStyle:
      "bg-orange-500/10 hover:bg-orange-500/20 text-orange-400 border border-orange-500/30 hover:border-orange-400",
    highlighted: false,
    included: [
      "3 automações ativas para posts",
      "50 créditos por mês",
      "1 conta Instagram conectada",
      "Suporte via e-mail",
    ],
    notIncluded: [
      "Automações para DM e live",
      "Sem plugins",
      "Sem suporte prioritário",
    ],
  },
  {
    id: "lite",
    icon: FaBolt,
    iconColor: "text-sky-400",
    iconBg: "bg-sky-900/40",
    accentColor: "sky",
    name: "Lite",
    tagline: "Dê o primeiro passo",
    monthlyPrice: 25,
    annualPrice: 22,
    badge: null,
    badgeColor: "",
    buttonLabel: "Assinar Lite",
    buttonStyle: "bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/30 hover:border-sky-400",
    highlighted: false,
    included: [
      "10 automações ativas para posts",
      "10 automações para live",
      "10 automações para DM",
      "250 créditos por mês",
      "1 conta Instagram conectada",
    ],
    notIncluded: [
      "Sem plugins",
      "Sem automações ilimitadas",
      "Sem suporte prioritário",
    ],
  },
  {
    id: "pro",
    icon: FaStar,
    iconColor: "text-blue-300",
    iconBg: "bg-blue-900/40",
    accentColor: "blue",
    name: "Pro",
    tagline: "Automatize e cresça de verdade",
    monthlyPrice: 49,
    annualPrice: 44,
    badge: "Mais Popular",
    badgeColor: "bg-green-500 text-white",
    buttonLabel: "Começar Agora",
    buttonStyle: "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white shadow-lg shadow-blue-500/30",
    highlighted: true,
    included: [
      "Envio de PDF",
      "Automações ilimitadas para posts, live e DM",
      "Créditos infinitos — sem limites",
      "2 contas Instagram conectadas",
      "1 plugin (em breve)",
      "Suporte prioritário",
    ],
    notIncluded: [
      "Envio de áudio e vídeo nas DMs",
      "Sem account manager dedicado",
    ],
  },
  {
    id: "superpro",
    icon: FaCrown,
    iconColor: "text-purple-400",
    iconBg: "bg-purple-900/40",
    accentColor: "purple",
    name: "Super Pro",
    tagline: "O máximo do Instagram",
    monthlyPrice: 79,
    annualPrice: 71,
    badge: null,
    badgeColor: "",
    buttonLabel: "Assinar Super Pro",
    buttonStyle:
      "bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 text-white shadow-lg shadow-purple-500/20",
    highlighted: false,
    included: [
      "Envio de PDF, imagem, vídeo e áudio nas DMs",
      "Automações ilimitadas para posts, live e DM",
      "Créditos infinitos — sem limites",
      "3 contas Instagram conectadas",
      "3 plugins (em breve)",
      "SLA garantido",
    ],
    notIncluded: [
      "Integrações via API",
      "Account manager exclusivo",
    ],
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="py-20 sm:py-28 bg-[#0d1b2e] relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-700/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            Escolha o plano ideal para você
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Comece grátis, escale quando quiser. Sem fidelidade, cancele quando precisar.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center mt-8 bg-[#111f33] rounded-full p-1 border border-white/10">
            <button
              onClick={() => setAnnual(false)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                !annual
                  ? "bg-white text-gray-900 shadow"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
                annual
                  ? "bg-white text-gray-900 shadow"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Anual
              <span className="bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                -10%
              </span>
            </button>
          </div>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const price = annual ? plan.annualPrice : plan.monthlyPrice;
            const isFree = plan.id === "free";

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 ${
                  plan.highlighted
                    ? "border-blue-500/60 bg-gradient-to-b from-[#0f2445] to-[#0d1b2e] shadow-[0_0_50px_rgba(59,130,246,0.18)]"
                    : "border-white/8 bg-[#111f33] hover:border-white/20"
                }`}
              >
                {/* Top accent bar */}
                <div
                  className={`h-1 w-full ${
                    plan.id === "free"
                      ? "bg-gradient-to-r from-orange-500 to-amber-400"
                      : plan.id === "lite"
                      ? "bg-gradient-to-r from-sky-500 to-cyan-400"
                      : plan.id === "pro"
                      ? "bg-gradient-to-r from-blue-500 to-indigo-400"
                      : "bg-gradient-to-r from-purple-600 to-fuchsia-500"
                  }`}
                />

                <div className="p-6 flex flex-col flex-1">
                  {/* Badge */}
                  {plan.badge && (
                    <span
                      className={`self-start text-xs font-bold px-3 py-1 rounded-full mb-4 ${plan.badgeColor}`}
                    >
                      {plan.badge}
                    </span>
                  )}

                  {/* Icon */}
                  <div
                    className={`w-11 h-11 flex items-center justify-center rounded-xl mb-4 ${plan.iconBg}`}
                  >
                    <Icon className={`text-xl ${plan.iconColor}`} />
                  </div>

                  {/* Name & tagline */}
                  <h3 className="text-white font-bold text-xl mb-1">{plan.name}</h3>
                  <p className="text-gray-500 text-sm mb-5 leading-snug">{plan.tagline}</p>

                  {/* Price */}
                  <div className="mb-6">
                    {isFree ? (
                      <div className="flex items-end gap-1">
                        <span className="text-white font-extrabold text-4xl sm:text-5xl">Grátis</span>
                      </div>
                    ) : (
                      <div className="flex items-end gap-1">
                        <span className="text-gray-400 font-light text-base">R$</span>
                        <span className="text-white font-extrabold text-4xl sm:text-5xl leading-none">
                          {price}
                        </span>
                        <span className="text-gray-500 text-sm mb-1">/mês</span>
                      </div>
                    )}
                    {annual && !isFree && (
                      <p className="text-green-400 text-xs mt-1 font-medium">
                        Economia de R$ {((plan.monthlyPrice! - plan.annualPrice!) * 12).toFixed(0)}/ano
                      </p>
                    )}
                  </div>

                  {/* CTA */}
                  <a
                    href="https://app.linkinsta.com.br/register"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 mb-6 text-center block ${plan.buttonStyle}`}
                  >
                    {plan.buttonLabel}
                  </a>

                  {/* Included */}
                  {plan.included.length > 0 && (
                    <div className="mb-4">
                      <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-3">
                        Incluído:
                      </p>
                      <ul className="space-y-2.5">
                        {plan.included.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-sm text-gray-300">
                            <FaCheck className="text-green-400 mt-0.5 shrink-0 text-[10px]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Not included */}
                  {plan.notIncluded.length > 0 && (
                    <div className="mt-auto pt-4 border-t border-white/5">
                      <p className="text-gray-600 text-[10px] font-bold uppercase tracking-widest mb-3">
                        Não incluído:
                      </p>
                      <ul className="space-y-2.5">
                        {plan.notIncluded.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                            <FaTimes className="text-gray-700 mt-0.5 shrink-0 text-[10px]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="text-center text-gray-500 text-sm mt-10">
          Todos os planos incluem 7 dias grátis. Sem necessidade de cartão de crédito para começar.
        </p>
      </div>
    </section>
  );
}
