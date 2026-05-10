export default function YouTubeSection() {
  const videoId = "dQw4w9WgXcQ";

  return (
    <section id="video" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Veja como funciona na prática</h2>
          <p className="text-lg text-gray-600">Substitua pelo vídeo oficial do seu produto no YouTube.</p>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-4 md:p-6 shadow-xl">
          <div className="aspect-video w-full overflow-hidden rounded-2xl border border-gray-200">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="Demonstração do sistema"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
