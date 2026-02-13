
import React from 'react';

const ContactView: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen flex items-center justify-center bg-black px-6">
      <div className="max-w-4xl w-full text-center space-y-16 animate-fade-in">
        <div className="space-y-4">
          <span className="text-gold text-[10px] tracking-[0.8em] uppercase block">Get in Touch</span>
          <h2 className="font-serif text-5xl md:text-8xl font-light tracking-tight">LET'S CREATE</h2>
        </div>
        
        <div className="relative inline-block group">
          <a 
            href="mailto:studio@eyesonu.com" 
            className="block font-serif text-3xl md:text-6xl text-gold-light hover:text-white transition-colors tracking-wide py-4"
          >
            HELLO@EYESONYOU.STUDIO
          </a>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-20 border-t border-white/10">
          <div className="space-y-3">
            <span className="block text-[8px] tracking-[0.5em] text-white/30 uppercase">Presence</span>
            <a href="#" className="text-xs tracking-[0.3em] hover:text-gold transition-colors block">INSTAGRAM</a>
            <a href="#" className="text-xs tracking-[0.3em] hover:text-gold transition-colors block">VIMEO</a>
          </div>
          <div className="space-y-3">
            <span className="block text-[8px] tracking-[0.5em] text-white/30 uppercase">Location</span>
            <span className="text-xs tracking-[0.3em] block">JAKARTA / SINGAPORE</span>
            <span className="text-xs tracking-[0.3em] text-white/50 block">GLOBAL DISPATCH</span>
          </div>
          <div className="space-y-3">
            <span className="block text-[8px] tracking-[0.5em] text-white/30 uppercase">Craft</span>
            <span className="text-xs tracking-[0.3em] block">HIGH FASHION</span>
            <span className="text-xs tracking-[0.3em] block">EDITORIAL CINEMA</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactView;
