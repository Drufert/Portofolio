
import { Category } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'bc-studio',
    title: 'BC STUDIO',
    subtitle: 'GRANDE AMORE',
    thumbnailUrl: 'https://picsum.photos/id/64/1200/1200',
    photos: Array.from({ length: 8 }).map((_, i) => ({
      id: `bc-${i}`,
      url: `https://picsum.photos/id/${60 + i}/1200/1600`,
      alt: `BC Studio photo ${i + 1}`
    }))
  },
  {
    id: 'selected-work',
    title: 'STADIUM SQUAD',
    subtitle: 'LIFESTYLE',
    thumbnailUrl: 'https://picsum.photos/id/103/1200/1200',
    photos: Array.from({ length: 6 }).map((_, i) => ({
      id: `sw-${i}`,
      url: `https://picsum.photos/id/${110 + i}/1200/1600`,
      alt: `Selected work photo ${i + 1}`
    }))
  },
  {
    id: 'clarks-origin',
    title: 'CLARKS',
    subtitle: 'ORIGINAL SENSATION',
    thumbnailUrl: 'https://picsum.photos/id/121/1200/1200',
    photos: Array.from({ length: 10 }).map((_, i) => ({
      id: `co-${i}`,
      url: `https://picsum.photos/id/${120 + i}/1200/1600`,
      alt: `Clarks photo ${i + 1}`
    }))
  },
  {
    id: 'automotive',
    title: 'PORSCHE',
    subtitle: 'DETAILS & POWER',
    thumbnailUrl: 'https://picsum.photos/id/133/1200/1200',
    photos: Array.from({ length: 7 }).map((_, i) => ({
      id: `au-${i}`,
      url: `https://picsum.photos/id/${130 + i}/1200/1600`,
      alt: `Automotive photo ${i + 1}`
    }))
  },
  {
    id: 'sports',
    title: 'STRIKE',
    subtitle: 'THE BALL GAME',
    thumbnailUrl: 'https://picsum.photos/id/158/1200/1200',
    photos: Array.from({ length: 9 }).map((_, i) => ({
      id: `sp-${i}`,
      url: `https://picsum.photos/id/${150 + i}/1200/1600`,
      alt: `Sports photo ${i + 1}`
    }))
  },
  {
    id: 'racing-hero',
    title: 'RACING HERO',
    subtitle: 'VINTAGE TRACK',
    thumbnailUrl: 'https://picsum.photos/id/183/1200/1200',
    photos: Array.from({ length: 5 }).map((_, i) => ({
      id: `rh-${i}`,
      url: `https://picsum.photos/id/${180 + i}/1200/1600`,
      alt: `Racing hero photo ${i + 1}`
    }))
  }
];
