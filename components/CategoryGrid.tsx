
import React from 'react';
import { Category } from '../types';

interface CategoryGridProps {
  categories: Category[];
  onSelectCategory: (category: Category) => void;
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ categories, onSelectCategory }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 pt-20">
      {categories.map((category, idx) => (
        <div 
          key={category.id}
          className="relative group overflow-hidden cursor-pointer animate-reveal"
          onClick={() => onSelectCategory(category)}
          style={{ animationDelay: `${idx * 100}ms` }}
        >
          <div className="aspect-[4/5] overflow-hidden bg-zinc-900">
            <img 
              src={category.thumbnailUrl} 
              alt={category.title}
              className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
            />
            {/* Minimalist Overlay - only darkens slightly to pop text */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-700"></div>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out">
            <div className="flex flex-col items-start opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
              <h3 className="font-serif text-3xl md:text-5xl tracking-tight text-white mb-2">
                {category.title}
              </h3>
              <div className="flex items-center space-x-4">
                <span className="w-8 h-[1px] bg-gold"></span>
                <p className="text-[10px] tracking-[0.5em] text-gold uppercase font-light">
                  {category.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryGrid;
