import { useEffect, useState } from 'react';

export default function SplashScreen({ onComplete }) {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Hide body scrollbar while splash screen is active
    document.body.style.overflow = 'hidden';

    // Show splash for 2.5 seconds, then trigger fade out
    const timeout1 = setTimeout(() => {
      setIsFadingOut(true);
      // Restore scrollbar right before the fade out ends so it feels seamless
      document.body.style.overflow = 'unset';
    }, 2500);

    // After fade out transition (700ms), tell parent it's done
    const timeout2 = setTimeout(() => {
      onComplete();
    }, 3200);

    return () => {
      document.body.style.overflow = 'unset';
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 w-screen h-screen z-[9999] flex items-center justify-center bg-canvas transition-opacity duration-700 ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}>
      <div className="text-center px-4 max-w-4xl mx-auto flex flex-col items-center justify-center">
        <p className="font-caveat text-2xl md:text-4xl text-primary font-bold tracking-wide leading-relaxed">
          "Software is a great combination between artistry and engineering."
        </p>
        <div className="w-12 h-[2px] bg-primary mt-8 mb-4"></div>
        <p className="font-metadata text-metadata text-faded uppercase tracking-[0.3em]">
          Bill Gates
        </p>
      </div>
    </div>
  );
}
