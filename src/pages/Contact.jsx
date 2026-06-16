import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true, timeZone: 'Asia/Kolkata' };
      const formattedTime = new Intl.DateTimeFormat('en-US', options).format(now);
      setTimeString(formattedTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-canvas text-primary font-body-intro min-h-screen flex flex-col cursor-crosshair selection:bg-primary selection:text-on-primary">
      <style>{`
        .cursor-crosshair { cursor: crosshair; }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
            font-size: 1.25rem;
        }
        .reveal {
            animation: revealUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            opacity: 0;
        }
        @keyframes revealUp {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <Navbar />

      <main className="flex-grow max-w-[1100px] mx-auto w-full px-margin-mobile md:px-margin-desktop pt-section-gap">
        {/* Header Info */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-section-gap reveal" style={{ animationDelay: '0.1s' }}>
          <div className="md:col-span-8">
            <h1 className="font-display-title text-2xl md:text-[32px] font-bold md:leading-tight mb-4">
              Inquiries regarding software development, system architecture, or open-source collaborations.
            </h1>
            <p className="text-secondary max-w-lg">
              I am currently open to discussing new opportunities in distributed systems and backend engineering.
            </p>
          </div>
          <div className="md:col-span-4 flex md:justify-end items-start">
            <span className="font-metadata text-metadata text-faded uppercase tracking-widest">[1]</span>
          </div>
        </section>

        {/* Main Contact Grid */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter border-t border-outline-variant pt-gutter reveal" style={{ animationDelay: '0.2s' }}>
          {/* Direct Channel */}
          <div className="md:col-span-6 space-y-gutter">
            <div className="flex justify-between items-baseline">
              <h2 className="font-metadata text-metadata text-faded uppercase tracking-widest">Primary Channel</h2>
              <span className="font-metadata text-metadata text-faded">[2]</span>
            </div>
            <div className="group py-4">
              <a className="font-display-title text-display-title block border-b-2 border-transparent hover:border-primary transition-all duration-300 py-2" href="mailto:hello@archive2024.studio">
                kshitizkothari69@gmail.com
              </a>
              <p className="font-metadata text-metadata text-faded mt-4 uppercase">Typical response window: 24-48 hours</p>
            </div>
          </div>

          {/* Social Ecosystem */}
          <div className="md:col-span-6 space-y-gutter">
            <div className="flex justify-between items-baseline">
              <h2 className="font-metadata text-metadata text-faded uppercase tracking-widest">Digital Presence</h2>
              <span className="font-metadata text-metadata text-faded">[3]</span>
            </div>
            <ul className="space-y-base">
              <li className="flex items-center justify-between py-3 border-b border-surface-container hover:bg-surface-container transition-colors px-2 -mx-2">
                <a className="font-list-item text-list-item flex items-center gap-2 group" href="https://github.com/Kshitiz-kothari31" target="_blank" rel="noreferrer">
                  <sup className="text-metadata text-faded">01</sup>
                  <span>GitHub</span>
                  <span className="material-symbols-outlined text-[14px] opacity-0 group-hover:opacity-100 transition-opacity">north_east</span>
                </a>
                <span className="font-metadata text-metadata text-faded">Source & Repos</span>
              </li>
              <li className="flex items-center justify-between py-3 border-b border-surface-container hover:bg-surface-container transition-colors px-2 -mx-2">
                <a className="font-list-item text-list-item flex items-center gap-2 group" href="https://www.linkedin.com/in/kshitiz-kothari-455950326" target="_blank" rel="noreferrer">
                  <sup className="text-metadata text-faded">02</sup>
                  <span>LinkedIn</span>
                  <span className="material-symbols-outlined text-[14px] opacity-0 group-hover:opacity-100 transition-opacity">north_east</span>
                </a>
                <span className="font-metadata text-metadata text-faded">Professional Network</span>
              </li>
              <li className="flex items-center justify-between py-3 border-b border-surface-container hover:bg-surface-container transition-colors px-2 -mx-2">
                <a className="font-list-item text-list-item flex items-center gap-2 group" href="#" target="_blank" rel="noreferrer">
                  <sup className="text-metadata text-faded">03</sup>
                  <span>Twitter</span>
                  <span className="material-symbols-outlined text-[14px] opacity-0 group-hover:opacity-100 transition-opacity">north_east</span>
                </a>
                <span className="font-metadata text-metadata text-faded">Current Thoughts</span>
              </li>
              <li className="flex items-center justify-between py-3 border-b border-surface-container hover:bg-surface-container transition-colors px-2 -mx-2">
                <a className="font-list-item text-list-item flex items-center gap-2 group" href="#" target="_blank" rel="noreferrer">
                  <sup className="text-metadata text-faded">04</sup>
                  <span>Instagram</span>
                  <span className="material-symbols-outlined text-[14px] opacity-0 group-hover:opacity-100 transition-opacity">north_east</span>
                </a>
                <span className="font-metadata text-metadata text-faded">Visual Archive</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Atmospheric Visual */}
        <section className="mt-section-gap relative h-[400px] w-full overflow-hidden bg-surface-container reveal" style={{ animationDelay: '0.3s' }}>
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70 hover:opacity-100 transition-opacity duration-700 scale-[1.15]" style={{ backgroundImage: "url('/images/dehradun_map.png')" }}></div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center p-gutter bg-canvas/90 backdrop-blur-md border border-outline-variant shadow-2xl">
              <p className="font-metadata text-metadata uppercase tracking-[0.2em] font-bold text-primary">Dehradun, Uttarakhand, India</p>
              <p className="font-metadata text-metadata text-secondary mt-2">UTC+5:30 (Indian Standard Time)</p>
              {timeString && <p className="font-metadata text-metadata mt-2 text-primary opacity-80">[{timeString} IST]</p>}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
