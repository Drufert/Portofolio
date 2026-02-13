
import React, { useEffect } from 'react';
import { Category } from '../types';

interface GalleryViewProps {
  category: Category;
  onBack: () => void;
}

const GalleryView: React.FC<GalleryViewProps> = ({ category, onBack }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [category]);

  return (
    <div className="pt-20 min-h-screen bg-black animate-fade-in">
      {/* Category Header */}
      <div className="px-6 py-20 md:px-16 md:py-40 flex flex-col items-center text-center">
        <button 
          onClick={onBack}
          className="mb-16 text-[9px] tracking-[0.6em] text-gold hover:text-white transition-colors uppercase flex items-center group"
        >
          <span className="mr-4 transition-transform group-hover:-translate-x-2">←</span> BACK TO GALLERY
        </button>
        <h2 className="font-serif text-6xl md:text-9xl font-light tracking-tighter mb-8 lowercase italic">
          {category.title.toLowerCase()}
        </h2>
        <div className="w-16 h-[1px] bg-gold/30 mb-8"></div>
        <p className="text-[10px] md:text-xs tracking-[0.8em] text-white/40 font-light uppercase max-w-lg leading-relaxed">
          {category.subtitle}
        </p>
      </div>

      {/* Borderless Flush Grid */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {category.photos.map((photo, i) => (
            <div 
              key={photo.id} 
              className="relative group overflow-hidden animate-reveal bg-zinc-900"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <img 
                src={photo.url} 
                alt={photo.alt}
                loading="lazy"
                className="w-full h-auto block transition-transform duration-[2s] group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Minimal Footer Transition */}
      <div className="px-6 py-40 flex flex-col items-center">
        <div className="w-[1px] h-20 bg-gradient-to-b from-gold to-transparent mb-12"></div>
        <button 
          onClick={onBack}
          className="font-serif text-4xl md:text-7xl text-white hover:text-gold transition-colors tracking-tighter italic"
        >
          the next story
        </button>
      </div>
    </div>
  );
};

export default GalleryView;
