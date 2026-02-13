
export interface Photo {
  id: string;
  url: string;
  alt: string;
}

export interface Category {
  id: string;
  title: string;
  subtitle: string;
  thumbnailUrl: string;
  photos: Photo[];
}

export type ViewState = 'home' | 'category' | 'contact';
