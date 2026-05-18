"use client";

import { useEffect, useState } from "react";
import { FiShield } from "react-icons/fi";

const LINKED_DOMAINS = ["lp.linkinsta.com.br", "app.linkinsta.com.br", "www.linkinsta.com.br"];

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Valida se está em um domínio autorizado
    const currentHost = typeof window !== "undefined" ? window.location.hostname : "";
    
    const allowedDomains = [...LINKED_DOMAINS, "localhost"];
    
    if (!allowedDomains.includes(currentHost)) {
      console.warn(`Domínio não autorizado: ${currentHost}`);
      return;
    }

    // Verifica se o usuário já aceitou cookies
    const consentCookie = localStorage.getItem("cookie-consent");
    
    if (!consentCookie) {
      setShowConsent(true);
    } else if (consentCookie === "accepted") {
      // Se já aceitou, carrega o Google Analytics
      loadGoogleAnalytics();
    }
  }, []);

  const loadGoogleAnalytics = () => {
    const gaId = process.env.NEXT_PUBLIC_GA_ID;
    if (!gaId) return;

    // Carrega o script do Google Analytics
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script1);

    // Inicializa o gtag com configurações
    const script2 = document.createElement("script");
    const userIdConfig = ""; // Adicione aqui se tiver userId, ex: `user_id: 'user_123',`
    
    script2.textContent = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', '${gaId}', {
        anonymize_ip: true,
        ${userIdConfig}
        linker: {
          domains: ${JSON.stringify(LINKED_DOMAINS)},
          accept_incoming: true,
        },
      });
    `;
    
    document.head.appendChild(script2);
  };

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowConsent(false);
    loadGoogleAnalytics();
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] sm:w-[calc(100%-3rem)] max-w-2xl bg-white border border-gray-200 rounded-2xl shadow-xl">
      <div className="px-4 py-3 sm:px-5 flex items-center gap-3">
        <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-blue-50">
          <FiShield className="h-4 w-4 text-blue-600" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-gray-600 leading-snug">
            <span className="font-semibold text-gray-800">Cookies analíticos</span> — usamos para melhorar nossos serviços.
          </p>
        </div>
        <div className="flex-shrink-0 flex items-center gap-2">
          <button
            onClick={handleReject}
            className="text-xs text-gray-400 hover:text-gray-600 transition-colors px-1"
          >
            recusar
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl whitespace-nowrap"
            style={{ animation: 'cookiePulse 2s ease-in-out infinite' }}
          >
            Aceitar
          </button>
          <style>{`
            @keyframes cookiePulse {
              0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(37,99,235,0.5); }
              50% { transform: scale(1.07); box-shadow: 0 0 0 7px rgba(37,99,235,0); }
            }
          `}</style>
        </div>
      </div>
    </div>
  );
}
