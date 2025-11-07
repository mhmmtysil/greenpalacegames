import { games } from '@/lib/games';
import GameCard from '@/components/GameCard';

export default function GamesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Oyunlarımız
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Green Palace Games olarak geliştirdiğim tüm oyunları keşfedin
          </p>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game, index) => (
              <div 
                key={game.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <GameCard game={game} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Empty State (if needed) */}
      {games.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-600 dark:text-gray-400 text-xl">
            Henüz oyun eklenmedi.
          </p>
        </div>
      )}
    </div>
  );
}
