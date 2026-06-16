import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Footer() {
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <footer className="w-full mt-16 md:mt-24 bg-canvas border-t border-outline-variant pb-12 md:pb-0 relative z-40">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center max-w-[1100px] mx-auto px-6 md:px-12 py-10 md:py-12 gap-8 md:gap-10">
          
          {/* Profile Section (Top on mobile, Right on desktop) */}
          <div className="flex flex-row items-center gap-4 md:w-1/3 md:justify-end order-1 md:order-3 w-full border-b border-outline-variant md:border-0 pb-6 md:pb-0">
            <img src="https://ui-avatars.com/api/?name=Kshitiz+Kothari&background=random&color=fff&rounded=true" className="w-12 h-12 object-cover grayscale opacity-80 rounded-full border border-outline-variant shadow-sm" alt="Kshitiz Kothari" />
            <div className="flex flex-col items-start">
              <span className="font-metadata text-[11px] text-primary uppercase tracking-widest font-bold">KSHITIZ KOTHARI</span>
              <span className="font-metadata text-[10px] text-secondary uppercase tracking-widest mt-1">SOFTWARE ENGINEER</span>
            </div>
          </div>
          
          {/* Links Section (Middle on both) */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 font-metadata text-[11px] md:text-xs uppercase tracking-widest md:w-1/3 order-2 w-full border-b border-outline-variant md:border-0 pb-6 md:pb-0">
            <a className="text-secondary hover:text-primary transition-all duration-300 w-fit" href="https://github.com/Kshitiz-kothari31" target="_blank" rel="noreferrer">GITHUB</a>
            <a className="text-secondary hover:text-primary transition-all duration-300 w-fit" href="https://www.linkedin.com/in/kshitiz-kothari-455950326" target="_blank" rel="noreferrer">LINKEDIN</a>
            <a className="text-secondary hover:text-primary transition-all duration-300 w-fit" href="https://github.com/Kshitiz-kothari31" target="_blank" rel="noreferrer">SOURCE</a>
          </div>

          {/* Copyright Section (Bottom on mobile, Left on desktop) */}
          <div className="font-metadata text-[10px] text-faded uppercase tracking-widest md:w-1/3 md:justify-start flex md:block order-3 md:order-1 pt-2 md:pt-0">
            © {new Date().getFullYear()} ALL RIGHTS RESERVED
          </div>

        </div>
      </footer>

      {/* Expandable Mobile Floating Action Menu */}
      <div className="md:hidden fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
        
        {/* Menu Options (Slides up and fades in) */}
        <div 
          className={`flex flex-col items-end gap-3 transition-all duration-300 origin-bottom ${isNavOpen ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' : 'opacity-0 scale-90 translate-y-4 pointer-events-none'}`}
        >
          <Link 
            className={`flex items-center gap-4 bg-surface-variant/95 backdrop-blur-md rounded-full border border-outline-variant/60 pl-6 pr-4 py-3 shadow-lg transition-transform active:scale-95 ${location.pathname === '/contact' ? 'text-primary border-primary/30' : 'text-secondary'}`} 
            to="/contact"
            onClick={() => setIsNavOpen(false)}
          >
            <span className="font-metadata text-[10px] uppercase tracking-widest mt-0.5">Contact</span>
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: location.pathname === '/contact' ? "'FILL' 1" : "'FILL' 0" }}>alternate_email</span>
          </Link>

          <Link 
            className={`flex items-center gap-4 bg-surface-variant/95 backdrop-blur-md rounded-full border border-outline-variant/60 pl-6 pr-4 py-3 shadow-lg transition-transform active:scale-95 ${location.pathname === '/about' ? 'text-primary border-primary/30' : 'text-secondary'}`} 
            to="/about"
            onClick={() => setIsNavOpen(false)}
          >
            <span className="font-metadata text-[10px] uppercase tracking-widest mt-0.5">About</span>
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: location.pathname === '/about' ? "'FILL' 1" : "'FILL' 0" }}>person</span>
          </Link>

          <Link 
            className={`flex items-center gap-4 bg-surface-variant/95 backdrop-blur-md rounded-full border border-outline-variant/60 pl-6 pr-4 py-3 shadow-lg transition-transform active:scale-95 ${location.pathname === '/' ? 'text-primary border-primary/30' : 'text-secondary'}`} 
            to="/"
            onClick={() => setIsNavOpen(false)}
          >
            <span className="font-metadata text-[10px] uppercase tracking-widest mt-0.5">Work</span>
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: location.pathname === '/' ? "'FILL' 1" : "'FILL' 0" }}>work</span>
          </Link>
        </div>

        {/* Toggle Button */}
        <button 
          onClick={() => setIsNavOpen(!isNavOpen)}
          className="w-14 h-14 bg-primary text-on-primary rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 border border-outline-variant/20 relative overflow-hidden"
          aria-label="Toggle Menu"
        >
          <span className={`material-symbols-outlined text-[28px] absolute transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isNavOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`}>apps</span>
          <span className={`material-symbols-outlined text-[28px] absolute transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isNavOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`}>close</span>
        </button>
      </div>
    </>
  );
}
