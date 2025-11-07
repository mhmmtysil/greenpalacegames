export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Hakkımızda
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Green Palace Games olarak, oyunculara unutulmaz deneyimler sunmak için çalışıyoruz
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Hikayemiz</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Green Palace Games, oyun dünyasına tutkuyla bağlı bir grup geliştiricinin bir araya gelmesiyle 2020 yılında kuruldu. 
                Amacımız, oyunculara sadece eğlenceli değil, aynı zamanda unutulmaz deneyimler sunan oyunlar yaratmak.
              </p>
              <p>
                Her projemizde yaratıcılığı, inovasyonu ve kaliteyi ön planda tutuyoruz. Oyuncularımızın geri bildirimleriyle 
                sürekli gelişen ve büyüyen bir stüdyo olarak, oyun endüstrisinde iz bırakmayı hedefliyoruz.
              </p>
              <p>
                Çeşitli platformlarda (PC, mobil, konsol) oyunlar geliştiren ekibimiz, farklı türlerde projeler üzerinde çalışarak 
                geniş bir oyuncu kitlesine ulaşmayı amaçlıyor.
              </p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Misyonumuz</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Oyunculara yenilikçi, kaliteli ve eğlenceli oyunlar sunarak, oyun dünyasında fark yaratmak ve 
                oyuncularımızın hayatlarına değer katmak.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Vizyonumuz</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Dünya çapında tanınan, oyun endüstrisinde öncü bir stüdyo olmak ve her yıl milyonlarca 
                oyuncuya ulaşan projeler geliştirmek.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Değerlerimiz</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🎮</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">Tutku</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Yaptığımız işe olan tutkumuz, her projemize yansıyor
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">💡</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">İnovasyon</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Sürekli yenilik ve gelişim peşinde koşuyoruz
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">⭐</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">Kalite</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Her detayda mükemmelliği hedefliyoruz
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🤝</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">Topluluk</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Oyuncularımızın sesi bizim için çok değerli
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
