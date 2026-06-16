import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();

  return (
    <>
      <footer className="w-full mt-section-gap bg-canvas border-t border-outline-variant pb-24 md:pb-0">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center max-w-[1100px] mx-auto px-margin-mobile md:px-margin-desktop py-gutter gap-item-gap">
          <div className="font-metadata text-[10px] md:text-metadata text-faded uppercase tracking-widest md:w-1/3">
            © {new Date().getFullYear()} ALL RIGHTS RESERVED
          </div>
          
          <div className="flex gap-8 font-metadata text-metadata uppercase tracking-widest md:w-1/3 justify-center">
            <a className="text-secondary hover:text-primary transition-all duration-200 hover:underline" href="https://github.com/Kshitiz-kothari31" target="_blank" rel="noreferrer">GITHUB</a>
            <a className="text-secondary hover:text-primary transition-all duration-200 hover:underline" href="https://www.linkedin.com/in/kshitiz-kothari-455950326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">LINKEDIN</a>
            <a className="text-secondary hover:text-primary transition-all duration-200 hover:underline" href="https://github.com/Kshitiz-kothari31" target="_blank" rel="noreferrer">SOURCE</a>
          </div>

          <div className="flex items-center gap-3 md:w-1/3 justify-end">
            <img src="https://ui-avatars.com/api/?name=Kshitiz+Kothari&background=random&color=fff&rounded=true" className="w-10 h-10 object-cover grayscale opacity-80 rounded-sm" alt="Kshitiz Kothari" />
            <div className="flex flex-col text-left">
              <span className="font-metadata text-[10px] text-primary uppercase tracking-widest leading-[1.2]">KSHITIZ KOTHARI</span>
              <span className="font-metadata text-[10px] text-faded uppercase tracking-widest leading-[1.2]">SOFTWARE ENGINEER</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Shared Mobile Navigation Shell (Bottom) */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-canvas border-t border-outline-variant py-4 px-margin-mobile flex justify-around items-center z-50 shadow-[0_-10px_30px_rgba(0,0,0,0.1)]">
        <Link className={`flex flex-col items-center gap-1 ${location.pathname === '/' ? 'text-primary' : 'text-secondary'}`} to="/">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: location.pathname === '/' ? "'FILL' 1" : "'FILL' 0" }}>work</span>
          <span className="text-metadata font-metadata uppercase">Work</span>
        </Link>
        <Link className={`flex flex-col items-center gap-1 ${location.pathname === '/about' ? 'text-primary' : 'text-secondary'}`} to="/about">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: location.pathname === '/about' ? "'FILL' 1" : "'FILL' 0" }}>person</span>
          <span className="text-metadata font-metadata uppercase">About</span>
        </Link>
        <Link className={`flex flex-col items-center gap-1 ${location.pathname === '/contact' ? 'text-primary' : 'text-secondary'}`} to="/contact">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: location.pathname === '/contact' ? "'FILL' 1" : "'FILL' 0" }}>alternate_email</span>
          <span className="text-metadata font-metadata uppercase">Contact</span>
        </Link>
      </div>
    </>
  );
}
