export interface Game {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  logo: string;
  category: string;
  platform: string[];
  releaseDate: string;
  status: 'released' | 'in-development' | 'coming-soon';
  steamLink?: string;
  playStoreLink?: string;
  appStoreLink?: string;
}

export const games: Game[] = [
  {
    id: '1',
    slug: 'kelime-imparatoru',
    title: 'Kelime İmparatoru',
    shortDescription: 'Kelime ustalarının yarıştığı bulmaca oyunu',
    description: '📚 Kelime İmparatoru ile Türkçe kelime dağarcığınızı geliştirin ve zihinsel yeteneklerinizi test edin.\n\n🎮 Binlerce kelime bulmacası ile eğlenceli vakit geçirin.\n\n⭐ Her seviye giderek zorlaşan bulmacalar ve ipuçları ile dolu! Bölümlerde verilen harflerle ne kadar kelime türetebilirsin?\n\n✨ Tek yapman gereken verilen harfler üzerinde parmağını gezdirerek kelimeleri bulmaya çalışmak. Yeni Bölümler için oyunu güncellemeyi unutma.\n\n🎯 Adam asmaca ve kelime tahmini oyunlarıyla canın hiç sıkılmasın.\n\n💡 Kelimeleri tahmin ederken hem eğlenip hem de kelime bilgini pekiştirebilirsin!',
    image: '/games/kelimeimparatoru.webp',
    logo: '/games/kelimeimparatorulogo.webp',
    category: 'Kelime Oyunu',
    platform: ['Android'],
    releaseDate: '2024',
    status: 'released',
    playStoreLink: 'https://play.google.com/store/apps/details?id=com.GreenPalace.Kelimeimparatoru'
  },
  {
    id: '2',
    slug: 'kare-doku',
    title: 'Kare Doku',
    shortDescription: 'Mantık ve strateji oyunu',
    description: '🧠 Zekânı ve stratejini sınayacak bağımlılık yapıcı bir bulmaca!\nKare Doku, modern grafikler ve akıcı oynanışla 8×8’lik tahtada blokları yerleştirip satır ve sütunları tamamlamanı ister. Ne kadar çok satır/sütun tamamlarsan, o kadar yüksek puan alırsın!\n\n🎮 Nasıl oynanır?\n\n🧩 Ekranın altındaki blokları 8×8 tahtaya sürükleyip bırak.\n✅ Bir satır/sütun tamamen dolunca temizlenir ve puan kazanırsın.\n⛔ Yer kalmazsa oyun biter; en yüksek skoru hedefle.\n\n✨ Öne çıkanlar\n\n🎯 Net ve anlaşılır tasarım: Odak tamamen bulmacada.\n⚡ Kısa turlar: Her an aç, birkaç dakikada keyif.\n🎯 Net ve anlaşılır tasarım: Odak tamamen bulmacada.\n⚡ Kısa turlar: Her an aç, birkaç dakikada keyif.\n🧠 Zorlayıcı ama adil: Kolay öğrenilir, ustalaşması strateji ister.\n🛠️ Performans dostu: Akıcı oynanış, gecikmesiz hamleler.\n🎧 Rahatlatıcı ve minimalist deneyim.\n\n🕹️ Oyun Modları\n\n♾️ Sonsuz Mod: Zaman sınırı yok; sadece strateji ve dikkat!\n🏆 Skor Yarışı: Belirli bir skora ulaş, bölümü tamamla; ilerledikçe hedefler artar.\n💥 Yokedici Modu: Hedeflenen ögelerin bulunduğu kareleri yok et; seviyeler giderek zorlaşır.\n⏱️ Zamana Karşı: Süre işliyor! Süre bitmeden kareleri yok et, ek süre kazan.\n🧩 “Bir hamle daha” dedirten, sade ama derin bir blok bulmaca istiyorsan Kare Doku tam sana göre!',
    image: '/games/karedoku.webp',
    logo: '/games/karedokulogo.webp',
    category: 'Puzzle',
    platform: ['Android'],
    releaseDate: '2025',
    status: 'released',
    playStoreLink: 'https://play.google.com/store/apps/details?id=com.GreenPalaceGames.KareDoku'
  }
];
