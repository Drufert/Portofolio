
import React from 'react';
import { ViewState } from '../types';

interface NavbarProps {
  onNavigate: (view: ViewState) => void;
  currentView: ViewState;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-sm text-white h-20 flex items-center px-6 md:px-16 justify-between border-b border-gold/20">
      <div className="flex items-center">
        <button 
          onClick={() => onNavigate('home')}
          className="group flex flex-col items-start leading-none"
        >
          <span className="font-serif text-2xl md:text-3xl tracking-[0.15em] text-gold-light group-hover:text-white transition-colors">
            EYES ON YOU
          </span>
          <span className="text-[8px] tracking-[0.6em] text-white/40 uppercase mt-1 group-hover:text-gold transition-colors">
            Visual Arts Studio
          </span>
        </button>
      </div>

      <div className="hidden md:flex items-center space-x-12 text-[10px] tracking-[0.3em] font-light uppercase">
        <button 
          onClick={() => onNavigate('home')}
          className={`hover:text-gold transition-colors relative pb-1 ${currentView === 'home' ? 'text-gold' : 'text-white/60'}`}
        >
          Gallery
          {currentView === 'home' && <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold"></span>}
        </button>
        <button 
          onClick={() => onNavigate('contact')}
          className={`hover:text-gold transition-colors relative pb-1 ${currentView === 'contact' ? 'text-gold' : 'text-white/60'}`}
        >
          Inquiry
          {currentView === 'contact' && <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold"></span>}
        </button>
      </div>

      <div className="flex items-center space-x-6">
        <a href="#" className="text-gold hover:text-white transition-colors">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.247 2.242 1.308 3.607.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.247-3.607 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.247-2.242-1.308-3.607-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.247 3.607-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.385.063-2.66.33-3.67 1.341-1.01 1.011-1.278 2.286-1.341 3.671-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.063 1.385.33 2.66 1.341 3.67 1.011 1.01 2.286 1.278 3.671 1.341 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.385-.063 2.66-.33 3.67-1.341 1.011-1.01 1.278-2.286 1.341-3.671.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.063-1.385-.33-2.66-1.341-3.67-1.011-1.01 2.286-1.278-3.671-1.341-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
