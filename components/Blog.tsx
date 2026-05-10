import { FaCalendarAlt, FaUser } from "react-icons/fa";

const posts = [
  {
    title: "Por que o social media está morrendo (e isso pode ser bom)",
    author: "Rafael Kiso",
    role: "CMO & Founder",
    date: "09/05/2026",
    category: "InstaLink",
  },
  {
    title: "InstaLink Chat: centralize mensagens, comentários e interações das redes sociais",
    author: "Lucas Amaral",
    role: "Editor de Conteúdo",
    date: "06/05/2026",
    category: "SAC Social",
  },
  {
    title: "Como criar uma estratégia de conteúdo vencedora para redes sociais",
    author: "Mariana Silva",
    role: "Redatora",
    date: "04/05/2026",
    category: "Estratégia",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Últimas do Blog</h2>
          <p className="text-xl text-gray-600">
            Fique por dentro das novidades e dicas sobre redes sociais
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group cursor-pointer"
            >
              <div className="h-48 bg-gradient-to-br from-primary-400 to-orange-500"></div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-primary-600 mb-3">
                  <span className="bg-primary-100 px-3 py-1 rounded-full">{post.category}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition">
                  {post.title}
                </h3>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <FaUser className="mr-2" />
                  <span>
                    {post.author} - {post.role}
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <FaCalendarAlt className="mr-2" />
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition">
            Ver todos os posts
          </button>
        </div>
      </div>
    </section>
  );
}
