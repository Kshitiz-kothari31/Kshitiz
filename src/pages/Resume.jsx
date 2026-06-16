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

      <main className="flex-grow max-w-[1100px] mx-auto w-full px-margin-mobile md:px-margin-desktop pt-section-gap mb-section-gap">
        <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start animate-reveal">
          <div className="md:col-span-8 order-2 md:order-1">
            <h1 className="font-display-title text-3xl md:text-[32px] font-extrabold tracking-tighter mb-8 leading-tight">
              A comprehensive overview of my technical experience, academic background, and professional projects.
            </h1>
            <p className="text-secondary max-w-xl font-body-intro text-body-intro mb-12">
              The curriculum vitae details core engineering capabilities, technical stack proficiencies, and architectural leadership roles. A formal record of ongoing professional development and project delivery.
            </p>
            
            <a
              href="/Resume.pdf"
              download="Resume.pdf"
              className="group inline-flex items-center gap-6 border border-outline-variant p-6 hover:bg-surface hover:border-primary transition-all duration-300 cursor-pointer w-full md:w-auto"
            >
              <div className="flex flex-col items-start">
                <span className="font-list-item text-list-item font-bold uppercase tracking-wider mb-2">Download Resume</span>
                <span className="font-metadata text-[10px] text-secondary uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                  PDF FORMAT / CURRENT
                </span>
              </div>
              <span className="material-symbols-outlined text-[28px] text-faded group-hover:text-primary transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 ml-auto md:ml-8">north_east</span>
            </a>
          </div>
          
          <div className="md:col-span-4 flex md:justify-end items-start order-1 md:order-2 mb-8 md:mb-0">
            <span className="font-metadata text-metadata text-faded uppercase tracking-widest">[ 4 ]</span>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
