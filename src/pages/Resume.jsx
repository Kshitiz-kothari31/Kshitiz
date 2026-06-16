import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect } from 'react';

export default function Resume() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-canvas text-primary font-body-intro min-h-screen flex flex-col cursor-crosshair selection:bg-primary selection:text-on-primary">
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-center max-w-[1100px] mx-auto w-full px-6 md:px-margin-desktop py-16 md:py-24 animate-reveal">
        <div className="w-full max-w-3xl flex flex-col items-center text-center">
          
          {/* Elegant Metadata Pill */}
          <div className="inline-flex items-center gap-3 px-5 py-2 border border-outline-variant rounded-full mb-10 md:mb-12">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            <span className="font-metadata text-[10px] md:text-xs tracking-widest uppercase text-secondary">Document / 04</span>
          </div>
          
          <h1 className="font-display-title text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold tracking-tight mb-6 leading-[1.1]">
            Kshitiz Kothari
          </h1>
          
          <p className="text-secondary text-base sm:text-lg md:text-xl mb-12 md:mb-16 max-w-xl leading-relaxed px-4">
            A comprehensive overview of my technical experience, academic background, and professional projects.
          </p>

          <a
            href="/Resume.pdf"
            download="Resume.pdf"
            className="group inline-flex items-center justify-center gap-3 font-display-title text-lg md:text-2xl font-medium text-primary border-b border-transparent hover:border-primary transition-all duration-300 pb-2"
          >
            DOWNLOAD RESUME
            <span className="material-symbols-outlined text-[18px] md:text-[22px] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">north_east</span>
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
