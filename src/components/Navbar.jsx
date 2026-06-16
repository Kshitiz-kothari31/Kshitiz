import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const getLinkClass = (path) => {
    const isActive = location.pathname === path;
    const baseClass = "font-section-header text-section-header uppercase tracking-widest transition-colors duration-300";
    if (isActive) {
      return `${baseClass} text-primary underline underline-offset-8 decoration-2`;
    }
    return `${baseClass} text-secondary hover:text-primary`;
  };

  return (
    <header className="w-full top-0 sticky bg-canvas border-b border-outline-variant z-50">
      <nav className="flex justify-between items-center max-w-[1100px] mx-auto px-margin-mobile md:px-margin-desktop py-8 cursor-crosshair">
        <Link className="font-caveat text-4xl font-bold tracking-normal text-primary" to="/">Kshitiz</Link>
        <div className="hidden md:flex gap-8 items-center">
          <Link className={getLinkClass('/')} to="/">WORK</Link>
          <Link className={getLinkClass('/about')} to="/about">ABOUT</Link>
          <Link className={getLinkClass('/contact')} to="/contact">CONTACT</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link className="font-section-header text-section-header uppercase tracking-widest text-secondary hover:text-primary transition-colors duration-300" to="/resume">RESUME</Link>
        </div>
      </nav>
    </header>
  );
}
