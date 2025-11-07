import { games } from '@/lib/games';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getAssetPath } from '@/lib/utils';

export function generateStaticParams() {
    return games.map((game) => ({
        id: game.id,
    }));
}

export default async function GameDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const game = games.find((g) => g.id === id);

    if (!game) {
        notFound();
    }

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
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Header */}
            <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-8 px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="flex items-center gap-4 mb-3">
                        <div className="relative w-16 h-16 bg-white dark:bg-gray-900 rounded-xl shadow-lg flex items-center justify-center p-2">
                            <Image
                                src={getAssetPath(game.logo)}
                                alt={`${game.title} Logo`}
                                width={48}
                                height={48}
                                className="object-contain"
                            />
                        </div>
                        <div>
                            <span className={`${statusColors[game.status]} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                                {statusText[game.status]}
                            </span>
                        </div>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        {game.title}
                    </h1>
                    <p className="text-lg text-gray-100">
                        {game.shortDescription}
                    </p>
                </div>
            </section>

            {/* Content */}
            <div className="max-w-5xl mx-auto px-4 py-16">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div>
                            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Kategori</h3>
                            <p className="text-lg font-bold text-gray-900 dark:text-white">{game.category}</p>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Platformlar</h3>
                            <div className="flex flex-wrap gap-2">
                                {game.platform.map((platform) => (
                                    <span
                                        key={platform}
                                        className="text-sm bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full"
                                    >
                                        {platform}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Çıkış Tarihi</h3>
                            <p className="text-lg font-bold text-gray-900 dark:text-white">{game.releaseDate}</p>
                        </div>
                    </div>

                    <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Oyun Hakkında</h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                            {game.description}
                        </p>
                    </div>
                </div>

                {/* Download Links */}
                {game.status === 'released' && (
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Oyunu İndir</h2>
                        <div className="flex flex-col sm:flex-row gap-4">
                            {game.steamLink && (
                                <a
                                    href={game.steamLink}
                                    className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z" />
                                    </svg>
                                    Steam'de İndir
                                </a>
                            )}
                            {game.playStoreLink && (
                                <a
                                    href={game.playStoreLink}
                                    className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Play Store
                                </a>
                            )}
                            {game.appStoreLink && (
                                <a
                                    href={game.appStoreLink}
                                    className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    App Store
                                </a>
                            )}
                        </div>
                    </div>
                )}

                {/* Back Button */}
                <div className="text-center">
                    <Link
                        href="/games"
                        className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-semibold"
                    >
                        <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M15 19l-7-7 7-7"></path>
                        </svg>
                        Tüm Oyunlara Dön
                    </Link>
                </div>
            </div>
        </div>
    );
}
