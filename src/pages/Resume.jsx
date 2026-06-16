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

      <main className="flex-grow flex flex-col items-center justify-center max-w-[1100px] mx-auto w-full px-margin-mobile md:px-margin-desktop py-16 animate-reveal">
        <div className="text-center max-w-2xl flex flex-col items-center">
          <span className="material-symbols-outlined text-[48px] text-primary mb-8 animate-pulse">description</span>
          <h1 className="font-display-title text-4xl md:text-6xl font-bold tracking-tight mb-6">Kshitiz Kothari</h1>
          <p className="text-secondary text-lg md:text-xl mb-12 font-medium">MCA Student & Freelance Developer</p>

          <a
            href="/Resume.pdf"
            download="Resume.pdf"
            className="group flex items-center gap-4 border border-outline-variant px-10 py-5 hover:bg-surface-variant hover:text-primary transition-all duration-300"
          >
            <span className="font-section-header text-sm tracking-widest uppercase">Download Resume</span>
            <span className="material-symbols-outlined text-[20px] group-hover:translate-y-1 transition-transform">download</span>
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
