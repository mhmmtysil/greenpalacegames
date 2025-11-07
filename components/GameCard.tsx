import Link from 'next/link';
import Image from 'next/image';
import { Game } from '@/lib/games';

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  const statusColors = {
    'released': 'bg-green-500',
    'in-development': 'bg-yellow-500',
    'coming-soon': 'bg-blue-500'
  };

  const statusText = {
    'released': 'Yayında',
    'in-development': 'Geliştiriliyor',
    'coming-soon': 'Yakında'
  };

  return (
    <Link href={`/games/${game.id}`}>
      <div className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        {/* Image */}
        <div className="relative h-64 bg-gradient-to-br from-purple-500 to-blue-600 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={game.image}
              alt={game.title}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          
          {/* Logo - Sol Üst Köşe */}
          <div className="absolute top-4 left-4 z-10">
            <div className="relative w-20 h-20 bg-white dark:bg-gray-900 rounded-xl shadow-lg flex items-center justify-center p-2">
              <Image
                src={game.logo}
                alt={`${game.title} Logo`}
                width={64}
                height={64}
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
          {/* Status Badge */}
          <div className="absolute top-4 right-4 z-10">
            <span className={`${statusColors[game.status]} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
              {statusText[game.status]}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-purple-600 dark:text-purple-400 font-semibold">
              {game.category}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {game.releaseDate}
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            {game.title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
            {game.shortDescription}
          </p>

          {/* Platforms */}
          <div className="flex flex-wrap gap-2">
            {game.platform.map((platform) => (
              <span 
                key={platform}
                className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
          <span className="text-white font-semibold">Detayları Gör →</span>
        </div>
      </div>
    </Link>
  );
}
