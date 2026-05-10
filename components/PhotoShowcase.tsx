export default function PhotoShowcase() {
  const photos = [
    {
      src: "https://via.placeholder.com/1200x700/F3F4F6/111827?text=Print+1+-+Dashboard",
      title: "Visão geral do painel",
      description: "Mostre aqui como fica o controle das automações.",
    },
    {
      src: "https://via.placeholder.com/1200x700/EEF2FF/111827?text=Print+2+-+Automacao",
      title: "Configuração de palavra-chave",
      description: "Exiba o fluxo de gatilho e resposta automática.",
    },
    {
      src: "https://via.placeholder.com/1200x700/ECFDF5/111827?text=Print+3+-+Resultados",
      title: "Resultados e conversões",
      description: "Apresente dados de leads gerados e performance.",
    },
  ];

  return (
    <section id="fotos" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">Veja telas reais da plataforma</h2>
          <p className="text-base sm:text-lg text-gray-600">Troque estas imagens pelos prints oficiais do seu sistema.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {photos.map((photo, index) => (
            <article key={index} className="overflow-hidden rounded-2xl sm:rounded-3xl border border-gray-200 bg-white shadow-lg">
              <img src={photo.src} alt={photo.title} className="h-48 sm:h-56 w-full object-cover" loading="lazy" />
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{photo.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{photo.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
