
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CategoryGrid from './components/CategoryGrid';
import GalleryView from './components/GalleryView';
import ContactView from './components/ContactView';
import { CATEGORIES } from './constants';
import { Category, ViewState } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const handleNavigate = (newView: ViewState) => {
    setView(newView);
    setSelectedCategory(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (category: Category) => {
    setSelectedCategory(category);
    setView('category');
  };

  const handleBackToGrid = () => {
    setView('home');
    setSelectedCategory(null);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-gold selection:text-black">
      <Navbar onNavigate={handleNavigate} currentView={view} />
      
      <main className="relative">
        {/* Subtle Ambient Depth */}
        <div className="fixed inset-0 pointer-events-none -z-10">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#1a150e,transparent_70%)] opacity-40"></div>
        </div>

        {view === 'home' && (
          <CategoryGrid 
            categories={CATEGORIES} 
            onSelectCategory={handleSelectCategory} 
          />
        )}

        {view === 'category' && selectedCategory && (
          <GalleryView 
            category={selectedCategory} 
            onBack={handleBackToGrid} 
          />
        )}

        {view === 'contact' && (
          <ContactView />
        )}
      </main>

      <footer className="py-24 px-6 md:px-16 flex flex-col items-center justify-center space-y-10 bg-black">
        <div className="font-serif text-2xl tracking-[0.3em] text-gold uppercase opacity-80">EYES ON YOU</div>
        <div className="max-w-xs h-[1px] w-full bg-gold/10"></div>
        <div className="text-[8px] tracking-[0.6em] text-white/30 uppercase text-center leading-loose">
          Visual excellence through a minimalist lens.<br/>
          &copy; 2025 EYES ON YOU STUDIO. 
        </div>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes reveal {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-reveal {
          animation: reveal 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default App;
