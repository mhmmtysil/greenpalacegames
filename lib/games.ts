export interface Game {
  id: string;
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
    title: 'Kelime İmparatoru',
    shortDescription: 'Kelime ustalarının yarıştığı bulmaca oyunu',
    description: 'Kelime İmparatoru ile Türkçe kelime dağarcığınızı geliştirin ve zihinsel yeteneklerinizi test edin. Binlerce kelime bulmacası ile eğlenceli vakit geçirin. Her seviye giderek zorlaşan bulmacalar ve ipuçları ile dolu!',
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
    title: 'Kare Doku',
    shortDescription: 'Mantık ve strateji oyunu',
    description: 'Kare Doku, klasik Sudoku oyununun kare versiyonu. 4x4 karelerle başlayıp 9x9 karelere kadar uzanan zorlu bulmacalar. Mantık yürütme becerilerinizi geliştirin, günlük beyin jimnastiği yapın!',
    image: '/games/karedoku.webp',
    logo: '/games/karedokulogo.webp',
    category: 'Puzzle',
    platform: ['Android'],
    releaseDate: '2025',
    status: 'released',
    playStoreLink: 'https://play.google.com/store/apps/details?id=com.GreenPalaceGames.KareDoku'
  }
];
