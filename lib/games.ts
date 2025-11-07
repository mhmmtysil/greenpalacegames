export interface Game {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
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
    title: 'Fantasy Quest',
    shortDescription: 'Büyülü bir dünyada epik macera',
    description: 'Büyülü bir dünyada unutulmaz bir maceraya atılın. Ejderhalarla savaşın, hazineler bulun ve krallığı kurtarın.',
    image: '/games/fantasy-quest.jpg',
    category: 'RPG',
    platform: ['PC', 'Mobile'],
    releaseDate: '2024',
    status: 'in-development'
  },
  {
    id: '2',
    title: 'Space Warriors',
    shortDescription: 'Uzayda aksiyon dolu savaşlar',
    description: 'Galaksinin en büyük savaşında tarafınızı seçin. Uzay gemilerinizi özelleştirin ve düşmanlarınızı yok edin.',
    image: '/games/space-warriors.jpg',
    category: 'Action',
    platform: ['PC', 'Console'],
    releaseDate: '2025',
    status: 'coming-soon'
  },
  {
    id: '3',
    title: 'Puzzle Master',
    shortDescription: 'Zihninizi zorlayan bulmacalar',
    description: 'Yüzlerce bulmaca ile zihninizi geliştirin. Mantık ve strateji becerilerinizi test edin.',
    image: '/games/puzzle-master.jpg',
    category: 'Puzzle',
    platform: ['Mobile', 'Web'],
    releaseDate: '2023',
    status: 'released'
  }
];
