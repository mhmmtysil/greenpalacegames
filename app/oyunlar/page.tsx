import { games } from '@/lib/games';
import GameCard from '@/components/GameCard';
import PageTitle from '@/components/PageTitle';

export default function GamesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center animate-fade-in-up">
          <PageTitle title="Oyunlarımız" subtitle="Green Palace Games olarak geliştirdiğimiz tüm oyunları keşfedin" />
        </div>
      </section>
      {/* Games Grid */}
      < section className="py-16 px-4" >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
      </section >

      {/* Empty State (if needed) */}
      {
        games.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-600 text-xl">
              Henüz oyun eklenmedi.
            </p>
          </div>
        )
      }
    </div >
  );
}
