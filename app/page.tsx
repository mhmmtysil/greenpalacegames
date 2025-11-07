import Link from 'next/link';
import { games } from '@/lib/games';
import GameCard from '@/components/GameCard';

export default function Home() {
  const featuredGames = games.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-fade-in">
            Green Palace Games
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Hayal gücünüzü gerçeğe dönüştüren oyunlar yaratıyoruz
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/games"
              className="px-8 py-4 bg-white text-purple-900 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
            >
              Oyunlarımızı Keşfet
            </Link>
            <Link 
              href="/about"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all"
            >
              Hakkımızda
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Featured Games Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Öne Çıkan Oyunlar
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              En yeni ve popüler oyunlarımızı keşfedin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/games"
              className="inline-block px-8 py-4 bg-purple-600 text-white rounded-full font-semibold text-lg hover:bg-purple-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Tüm Oyunları Gör
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
              <div className="text-5xl font-bold text-purple-600 mb-2">3+</div>
              <div className="text-xl text-gray-600 dark:text-gray-400">Oyun Projesi</div>
            </div>
            <div className="p-8">
              <div className="text-5xl font-bold text-purple-600 mb-2">10K+</div>
              <div className="text-xl text-gray-600 dark:text-gray-400">Aktif Oyuncu</div>
            </div>
            <div className="p-8">
              <div className="text-5xl font-bold text-purple-600 mb-2">5+</div>
              <div className="text-xl text-gray-600 dark:text-gray-400">Platform</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Bizimle İletişime Geçin
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Sorularınız mı var? İşbirliği yapmak mı istiyorsunuz? Hemen ulaşın!
          </p>
          <Link 
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
          >
            İletişime Geç
          </Link>
        </div>
      </section>
    </div>
  );
}
