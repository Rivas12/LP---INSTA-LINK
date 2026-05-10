import { FaInstagram, FaBolt, FaCheckCircle, FaPaperPlane } from "react-icons/fa";

export default function Demo() {
  return (
    <section id="demo" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 scroll-reveal">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Veja a automação{" "}
            <span className="text-orange-500">
              funcionando
            </span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            O sistema processa cada comentário automaticamente para você focar apenas no conteúdo.
          </p>
        </div>

        <div className="max-w-5xl mx-auto scroll-reveal-scale">
          <div className="bg-white border border-gray-200 rounded-2xl sm:rounded-3xl p-5 sm:p-12 relative overflow-hidden shadow-xl">
            {/* Animated glow */}
            <div className="absolute inset-0 bg-orange-50/40"></div>

            <div className="relative">
              {/* Flow visualization */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 items-center">
                {/* Step 1 */}
                <div className="text-center">
                  <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5 sm:p-8 mb-4">
                    <div className="mb-4 flex justify-center">
                      <FaInstagram className="text-4xl sm:text-5xl text-pink-500" />
                    </div>
                    <p className="text-gray-900 font-semibold">Comentário</p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="text-orange-500 text-4xl">→</div>
                </div>

                {/* Step 2 */}
                <div className="text-center">
                  <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5 sm:p-8 mb-4">
                    <div className="mb-4 flex justify-center">
                      <FaBolt className="text-4xl sm:text-5xl text-orange-500" />
                    </div>
                    <p className="text-gray-900 font-semibold">Automação</p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="text-orange-500 text-4xl">→</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
                {/* Response */}
                <div className="bg-green-50 border border-green-200 rounded-2xl p-5 sm:p-6">
                  <div className="mb-3">
                    <FaCheckCircle className="text-4xl text-green-600" />
                  </div>
                  <p className="text-gray-900 font-semibold mb-2">Resposta</p>
                  <p className="text-gray-600">Comentário respondido instantaneamente</p>
                </div>

                {/* DM */}
                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 sm:p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <FaPaperPlane className="text-3xl text-blue-600" />
                  </div>
                  <p className="text-gray-900 font-semibold mb-2">DM Enviada</p>
                  <p className="text-gray-600">Link entregue no direct automaticamente</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
