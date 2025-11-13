import Link from 'next/link';
import Image from 'next/image';
import { Game } from '@/lib/games';
import { getAssetPath } from '@/lib/utils';

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
    <Link href={`/oyunlar/${game.slug}`}>
      <div className="group relative h-full">
        {/* Animated Background Glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-all duration-700 animate-gradient bg-[length:200%_auto]"></div>
        
        {/* Main Card */}
        <div className="relative h-full bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:border-purple-300 group-hover:-translate-y-2">
          
          {/* Header Section with Icon */}
          <div className="relative p-8 bg-gradient-to-br from-purple-50 via-blue-50 to-purple-50 overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-200/40 to-blue-200/40 rounded-full blur-3xl transform translate-x-20 -translate-y-20 group-hover:scale-150 transition-transform duration-1000"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-200/40 to-purple-200/40 rounded-full blur-2xl transform -translate-x-16 translate-y-16 group-hover:scale-150 transition-transform duration-1000"></div>
            
            <div className="relative flex items-start justify-between mb-6">
              {/* Icon with Advanced Effects */}
              <div className="relative">
                {/* Icon Container with 3D Transform */}
                <div className="relative group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 ease-out">
                  <div className="relative w-24 h-24 bg-gradient-to-br from-white via-purple-50 to-white rounded-3xl shadow-2xl flex items-center justify-center p-4 border-2 border-purple-200 overflow-visible">
                    {/* Animated Background Pattern - Only Transform */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 to-blue-100/50 opacity-50"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(167,139,250,0.3),transparent_50%)] opacity-50 group-hover:scale-125 transition-transform duration-500"></div>
                    
                    {/* Image with Multi-transform */}
                    <div className="relative group-hover:scale-105 transition-transform duration-500">
                      <Image
                        src={getAssetPath(game.logo)}
                        alt={`${game.title} Logo`}
                        width={64}
                        height={64}
                        className="object-contain relative z-10"
                      />
                    </div>
                    
                    {/* Complex Particle System - Stars & Fireworks */}
                    {/* Corner Sparkle Stars */}
                    <div className="absolute -top-3 -right-3 w-4 h-4 bg-purple-500 star scale-0 group-hover:scale-100 group-hover:animate-sparkle transition-all duration-300"></div>
                    <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-blue-500 star scale-0 group-hover:scale-100 group-hover:animate-sparkle transition-all duration-300" style={{ animationDelay: '0.2s' }}></div>
                    <div className="absolute -top-3 -left-3 w-3 h-3 bg-pink-400 diamond scale-0 group-hover:scale-100 group-hover:animate-sparkle transition-all duration-300" style={{ animationDelay: '0.4s' }}></div>
                    <div className="absolute -bottom-3 -right-3 w-3 h-3 bg-indigo-400 diamond scale-0 group-hover:scale-100 group-hover:animate-sparkle transition-all duration-300" style={{ animationDelay: '0.6s' }}></div>
                    
                    {/* Firework Particles - Exploding Outward */}
                    <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-purple-400 plus scale-0 opacity-0 group-hover:opacity-100 group-hover:animate-firework" style={{ '--tx': '-2rem', '--ty': '-2rem' } as React.CSSProperties}></div>
                    <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-blue-400 star scale-0 opacity-0 group-hover:opacity-100 group-hover:animate-firework" style={{ '--tx': '2rem', '--ty': '-2rem', animationDelay: '0.1s' } as React.CSSProperties}></div>
                    <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-pink-400 diamond scale-0 opacity-0 group-hover:opacity-100 group-hover:animate-firework" style={{ '--tx': '-2rem', '--ty': '2rem', animationDelay: '0.2s' } as React.CSSProperties}></div>
                    <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-indigo-400 plus scale-0 opacity-0 group-hover:opacity-100 group-hover:animate-firework" style={{ '--tx': '2rem', '--ty': '2rem', animationDelay: '0.3s' } as React.CSSProperties}></div>
                    
                    {/* Mid-range Rotating Stars */}
                    <div className="absolute top-0 left-1/2 w-2.5 h-2.5 bg-purple-300 star scale-0 rotate-0 group-hover:scale-100 transition-all duration-500 group-hover:-translate-y-5 group-hover:rotate-180"></div>
                    <div className="absolute bottom-0 left-1/2 w-2.5 h-2.5 bg-blue-300 star scale-0 rotate-0 group-hover:scale-100 transition-all duration-500 group-hover:translate-y-5 group-hover:rotate-180" style={{ transitionDelay: '0.1s' }}></div>
                    <div className="absolute top-1/2 left-0 w-2.5 h-2.5 bg-pink-300 diamond scale-0 rotate-0 group-hover:scale-100 transition-all duration-500 group-hover:-translate-x-5 group-hover:rotate-90" style={{ transitionDelay: '0.2s' }}></div>
                    <div className="absolute top-1/2 right-0 w-2.5 h-2.5 bg-indigo-300 diamond scale-0 rotate-0 group-hover:scale-100 transition-all duration-500 group-hover:translate-x-5 group-hover:rotate-90" style={{ transitionDelay: '0.3s' }}></div>
                    
                    {/* Small Scattered Plus Signs */}
                    <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-purple-200 plus scale-0 rotate-0 group-hover:scale-100 transition-all duration-700 group-hover:-translate-x-6 group-hover:-translate-y-6 group-hover:rotate-45" style={{ transitionDelay: '0.15s' }}></div>
                    <div className="absolute top-1/4 right-1/4 w-1.5 h-1.5 bg-blue-200 plus scale-0 rotate-0 group-hover:scale-100 transition-all duration-700 group-hover:translate-x-6 group-hover:-translate-y-6 group-hover:rotate-45" style={{ transitionDelay: '0.25s' }}></div>
                    <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-pink-200 star scale-0 rotate-0 group-hover:scale-100 transition-all duration-700 group-hover:-translate-x-6 group-hover:translate-y-6 group-hover:rotate-180" style={{ transitionDelay: '0.35s' }}></div>
                    <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-indigo-200 star scale-0 rotate-0 group-hover:scale-100 transition-all duration-700 group-hover:translate-x-6 group-hover:translate-y-6 group-hover:rotate-180" style={{ transitionDelay: '0.45s' }}></div>
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              <div className={`${statusColors[game.status]} text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg group-hover:scale-110 transition-all duration-300`}>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                  {statusText[game.status]}
                </span>
              </div>
            </div>

            {/* Title */}
            <h3 className="relative text-3xl font-black text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-500">
              {game.title}
            </h3>

            {/* Category & Date Pills */}
            <div className="relative flex items-center gap-2 flex-wrap">
              <span className="text-xs bg-white/80 backdrop-blur-sm text-purple-700 font-bold px-3 py-1.5 rounded-full border border-purple-200 shadow-sm">
                {game.category}
              </span>
              <span className="text-xs bg-white/80 backdrop-blur-sm text-gray-600 font-medium px-3 py-1.5 rounded-full border border-gray-200 shadow-sm">
                📅 {game.releaseDate}
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 space-y-4">
            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 min-h-[4rem]">
              {game.shortDescription}
            </p>

            {/* Platforms */}
            <div className="flex flex-wrap gap-2">
              {game.platform.map((platform, index) => (
                <span
                  key={platform}
                  className="text-xs bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold px-4 py-2 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    animation: 'fade-in 0.5s ease-out forwards'
                  }}
                >
                  {platform}
                </span>
              ))}
            </div>

            {/* CTA Section */}
            <div className="pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <span className="text-purple-600 font-bold text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-2 group-hover:translate-x-0">
                  Detayları Gör
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </span>
                
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-180 shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
