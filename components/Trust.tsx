import { FaShieldAlt, FaLock, FaCheckCircle } from "react-icons/fa";
import { SiMeta, SiInstagram } from "react-icons/si";

export default function Trust() {
  const trustItems = [
    { icon: SiMeta, text: "API oficial da Meta" },
    { icon: SiInstagram, text: "integração nativa com Instagram" },
    { icon: FaLock, text: "comunicação HTTPS segura" },
    { icon: FaCheckCircle, text: "processamento confiável" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="scroll-reveal inline-flex items-center gap-3 px-6 py-3 bg-green-50 border border-green-200 rounded-full mb-8">
            <FaShieldAlt className="text-green-600" />
            <span className="text-green-700 font-semibold">Plataforma Segura</span>
          </div>

          <h2 className="scroll-reveal text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Integração segura com Instagram
          </h2>

          <div className="scroll-reveal flex flex-wrap items-center justify-center gap-3 mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-gray-700 text-sm font-semibold">
              <SiMeta className="text-[#0866FF]" /> Meta
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-gray-700 text-sm font-semibold">
              <SiInstagram className="text-pink-500" /> Instagram
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {trustItems.map((item, index) => (
              <div
                key={index}
                className="scroll-reveal flex items-center gap-4 bg-white border border-gray-200 rounded-2xl p-6 hover:border-green-300 hover:shadow-md transition-all"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-electric-500 rounded-xl flex items-center justify-center">
                  <item.icon className="text-white" />
                </div>
                <p className="text-gray-700 font-medium text-left">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
