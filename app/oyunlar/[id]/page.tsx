import { games } from '@/lib/games';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getAssetPath } from '@/lib/utils';

export function generateStaticParams() {
    return games.map((game) => ({
        id: game.slug,
    }));
}

export default async function GameDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const game = games.find((g) => g.slug === id);

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
        <div className="min-h-screen bg-gray-50">
            {/* Hero Image Section */}
            <section className="py-8">
                <div className="max-w-5xl mx-auto px-4">
                    {/* Image Only */}
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src={getAssetPath(game.image)}
                            alt={game.title}
                            width={1200}
                            height={400}
                            className="w-full h-auto object-cover"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="bg-white py-16">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="flex items-center gap-6 mb-6">
                        {/* Logo */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-400 rounded-3xl blur-xl opacity-40"></div>
                            <div className="relative w-28 h-28 bg-white rounded-3xl shadow-2xl flex items-center justify-center p-4 border border-gray-200">
                                <Image
                                    src={getAssetPath(game.logo)}
                                    alt={`${game.title} Logo`}
                                    width={80}
                                    height={80}
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        {/* Status Badge */}
                        <div className={`${statusColors[game.status]} text-white text-sm font-bold px-6 py-3 rounded-full shadow-lg`}>
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                                {statusText[game.status]}
                            </span>
                        </div>
                    </div>

                    {/* Title & Description */}
                    <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
                        {game.title}
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mb-8">
                        {game.shortDescription}
                    </p>
                </div>
            </section>

            {/* Game Info and Details */}
            <div className="max-w-5xl mx-auto px-4 pb-12">
                {/* Game Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-20 mb-12 relative z-10">
                    <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                        <h3 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">Kategori</h3>
                        <p className="text-2xl font-bold text-gray-900">
                            {game.category}
                        </p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                        <h3 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">Platformlar</h3>
                        <div className="flex flex-wrap gap-2">
                            {game.platform.map((platform) => (
                                <span
                                    key={platform}
                                    className="text-sm bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold px-4 py-2 rounded-xl shadow-lg"
                                >
                                    {platform}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                        <h3 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">Çıkış Tarihi</h3>
                        <p className="text-2xl font-bold text-gray-900">
                            📅 {game.releaseDate}
                        </p>
                    </div>
                </div>

                {/* Description */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <span className="w-1.5 h-8 bg-gradient-to-b from-purple-600 to-blue-600 rounded-full"></span>
                        Oyun Hakkında
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                        {game.description}
                    </p>
                </div>

                {/* Download Links */}
                {game.status === 'released' && (
                    <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Oyunu İndir</h2>
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
                                    className="inline-block transition-transform hover:scale-105"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="https://play.google.com/intl/en_us/badges/static/images/badges/tr_badge_web_generic.png"
                                        alt="Google Play'den alın"
                                        className="h-16"
                                    />
                                </a>
                            )}
                            {game.appStoreLink && (
                                <a
                                    href={game.appStoreLink}
                                    className="inline-block transition-transform hover:scale-105"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/tr-tr"
                                        alt="App Store'dan indirin"
                                        className="h-16"
                                    />
                                </a>
                            )}
                        </div>
                    </div>
                )}

                {/* Back Button */}
                <div className="text-center">
                    <Link
                        href="/oyunlar"
                        className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold"
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
