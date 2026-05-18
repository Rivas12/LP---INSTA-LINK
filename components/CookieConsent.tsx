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
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl">
      <div className="max-w-6xl mx-auto px-4 py-5 sm:px-6">
        <div className="flex gap-4 items-start sm:items-center">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-50">
              <FiShield className="h-5 w-5 text-blue-600" />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-gray-900">
              Sua experiência importa
            </h3>
            <p className="mt-0.5 text-xs text-gray-600">
              Usamos cookies analíticos para melhorar nossos serviços.
            </p>
          </div>
          
          <div className="flex-shrink-0 flex gap-2">
            <button
              onClick={handleReject}
              className="px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Recusar
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              Aceitar e continuar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
