import Link from 'next/link';
import { games } from '@/lib/games';
import GameCard from '@/components/GameCard';
import PageTitle from '@/components/PageTitle';

export default function Home() {
  const featuredGames = games; // Tüm oyunları göster

  return (
    <div className="min-h-screen">
      {/* Featured Games Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <PageTitle title="Öne Çıkan Oyunlar" subtitle="En yeni ve popüler oyunlarımızı keşfedin" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredGames.map((game, index) => (
              <div
                key={game.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <GameCard game={game} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in">
            <Link
              href="/oyunlar"
              className="inline-block px-8 py-4 bg-purple-600 text-white rounded-full font-semibold text-lg hover:bg-purple-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Tüm Oyunları Gör
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 animate-scale-in animate-delay-100">
              <div className="text-5xl font-bold text-purple-600 mb-2">2</div>
              <div className="text-xl text-gray-600">Yayında Oyun</div>
            </div>
            <div className="p-8 animate-scale-in animate-delay-200">
              <div className="text-5xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-xl text-gray-600">Aktif Oyuncu</div>
            </div>
            <div className="p-8 animate-scale-in animate-delay-300">
              <div className="text-5xl font-bold text-purple-600 mb-2">Android</div>
              <div className="text-xl text-gray-600">Platform</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Bizimle İletişime Geçin
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Sorularınız mı var? İşbirliği yapmak mı istiyorsunuz? Hemen ulaşın!
          </p>
          <Link
            href="/iletisim"
            className="inline-block px-8 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
          >
            İletişime Geç
          </Link>
        </div>
      </section>
    </div>
  );
}
