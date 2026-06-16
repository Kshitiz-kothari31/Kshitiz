import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  const revealRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-animate');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealRefs.current.forEach(el => {
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const addToRevealRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <div className="bg-canvas text-primary font-body-intro min-h-screen selection:bg-primary selection:text-on-primary">
      <style>{`
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 20;
            font-size: 1.25rem;
        }
        body {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            cursor: crosshair;
        }
        .reveal-base {
            opacity: 0;
            transform: translateY(4px);
        }
        .reveal-animate {
            animation: revealUp 0.4s ease-out forwards;
        }
        @keyframes revealUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
      `}</style>

      <Navbar />

      <main className="max-w-[1100px] mx-auto px-margin-mobile md:px-margin-desktop mt-section-gap">
        {/* Intro Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-section-gap reveal-base" ref={addToRevealRefs}>
          <div className="md:col-span-2">
            <p className="font-metadata text-metadata text-secondary">[1]</p>
          </div>
          <div className="md:col-span-8">
            <h1 className="font-display-title text-2xl md:text-3xl mb-gutter font-bold leading-snug">MCA student and freelance developer passionate about building impactful projects and leading agile teams.</h1>
            <p className="font-body-intro text-body-intro text-secondary leading-relaxed max-w-2xl">
              I enjoy tackling complex problems and collaborating with others to bring ideas to life. From leading technical projects to delivering high-quality freelance work, my approach is rooted in building intentional, scalable, and user-focused software.
            </p>
            <div className="mt-section-gap flex items-center gap-base font-metadata text-metadata">
              <span className="w-2 h-2 bg-accent-blue rounded-full"></span>
              <span className="text-primary uppercase tracking-wider">Currently, pursuing my MCA while working as a freelance developer and team lead.</span>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full border-b border-outline-variant mb-section-gap"></div>

        {/* Experience & Contacts Grid */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-section-gap">
          {/* Contact List */}
          <div className="md:col-span-4 reveal-base delay-1 mb-16 md:mb-0" ref={addToRevealRefs}>
            <div className="flex justify-between items-center mb-gutter">
              <h2 className="font-section-header text-section-header uppercase tracking-widest">Contact</h2>
              <span className="font-metadata text-metadata text-secondary">[2]</span>
            </div>
            <ul className="space-y-4">
              <li className="group border-b border-transparent hover:border-primary transition-all duration-200 py-1">
                <a href="#" target="_blank" rel="noreferrer" className="flex justify-between items-end w-full cursor-pointer">
                  <span className="font-list-item text-list-item flex gap-1 items-baseline">
                    <span className="font-footnote text-footnote text-faded">1</span> TWITTER
                  </span>
                  <span className="material-symbols-outlined text-faded group-hover:text-primary">north_east</span>
                </a>
              </li>
              <li className="group border-b border-transparent hover:border-primary transition-all duration-200 py-1">
                <a href="mailto:kshitizkothari69@gmail.com" className="flex justify-between items-end w-full cursor-pointer">
                  <span className="font-list-item text-list-item flex gap-1 items-baseline">
                    <span className="font-footnote text-footnote text-faded">2</span> MAIL
                  </span>
                  <span className="material-symbols-outlined text-faded group-hover:text-primary">north_east</span>
                </a>
              </li>
              <li className="group border-b border-transparent hover:border-primary transition-all duration-200 py-1">
                <a href="#" target="_blank" rel="noreferrer" className="flex justify-between items-end w-full cursor-pointer">
                  <span className="font-list-item text-list-item flex gap-1 items-baseline">
                    <span className="font-footnote text-footnote text-faded">3</span> INSTAGRAM
                  </span>
                  <span className="material-symbols-outlined text-faded group-hover:text-primary">north_east</span>
                </a>
              </li>
              <li className="group border-b border-transparent hover:border-primary transition-all duration-200 py-1">
                <a href="https://www.linkedin.com/in/kshitiz-kothari-455950326" target="_blank" rel="noreferrer" className="flex justify-between items-end w-full cursor-pointer">
                  <span className="font-list-item text-list-item flex gap-1 items-baseline">
                    <span className="font-footnote text-footnote text-faded">4</span> LINKEDIN
                  </span>
                  <span className="material-symbols-outlined text-faded group-hover:text-primary">north_east</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="hidden md:block md:col-span-1"></div>

          {/* Experience List */}
          <div className="md:col-span-7 reveal-base delay-2" ref={addToRevealRefs}>
            <div className="flex justify-between items-center mb-gutter">
              <h2 className="font-section-header text-section-header uppercase tracking-widest">Experience</h2>
              <span className="font-metadata text-metadata text-secondary">[3]</span>
            </div>
            <div className="space-y-6">
              <div className="flex justify-between items-start border-b border-outline-variant pb-4">
                <div className="flex gap-4">
                  <div className="w-1 h-4 bg-primary mt-1"></div>
                  <div>
                    <h3 className="font-list-item text-list-item font-bold">TECH INNOVATION INC.</h3>
                    <p className="font-metadata text-metadata text-secondary uppercase">Software Engineer</p>
                  </div>
                </div>
                <span className="font-metadata text-metadata">2023 – PRESENT</span>
              </div>
              <div className="flex justify-between items-start border-b border-outline-variant pb-4">
                <div className="flex gap-4">
                  <div className="w-1 h-4 bg-accent-red mt-1"></div>
                  <div>
                    <h3 className="font-list-item text-list-item font-bold">SCALEUP SOLUTIONS</h3>
                    <p className="font-metadata text-metadata text-secondary uppercase">Backend Engineer</p>
                  </div>
                </div>
                <span className="font-metadata text-metadata">2021 – 2023</span>
              </div>
              <div className="flex justify-between items-start border-b border-outline-variant pb-4 opacity-50">
                <div className="flex gap-4">
                  <div className="w-1 h-4 bg-secondary-fixed-dim mt-1"></div>
                  <div>
                    <h3 className="font-list-item text-list-item font-bold">OPEN SOURCE</h3>
                    <p className="font-metadata text-metadata text-secondary uppercase">Full-Stack Contributor</p>
                  </div>
                </div>
                <span className="font-metadata text-metadata">2019 – 2021</span>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Stack */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-section-gap reveal-base delay-3" ref={addToRevealRefs}>
          <div className="md:col-span-2 mb-8 md:mb-0">
            <h2 className="font-section-header text-section-header uppercase tracking-widest text-faded">Stack</h2>
          </div>
          <div className="md:col-span-10 grid grid-cols-1 sm:grid-cols-3 gap-12 md:gap-gutter">
            <div>
              <h4 className="font-metadata text-metadata font-bold mb-4 border-b border-primary pb-2 uppercase">Languages</h4>
              <ul className="font-metadata text-metadata space-y-2">
                <li>React</li>
                <li>c/C++</li>
                <li>PYTHON</li>
                <li>JAVA</li>
              </ul>
            </div>
            <div>
              <h4 className="font-metadata text-metadata font-bold mb-4 border-b border-primary pb-2 uppercase">Frameworks</h4>
              <ul className="font-metadata text-metadata space-y-2">
                <li>REACT / NEXT.JS</li>
                <li>NODE.JS</li>
                <li>EXPRESS</li>
                <li>FASTAPI</li>
                <li>MYSQL / ORACLE</li>
              </ul>
            </div>
            <div>
              <h4 className="font-metadata text-metadata font-bold mb-4 border-b border-primary pb-2 uppercase">Infrastructure</h4>
              <ul className="font-metadata text-metadata space-y-2">
                <li>AWS / GCP</li>
                <li>DOCKER</li>
                <li>POSTGRESQL</li>
                <li>REDIS</li>
                <li>GIT / GITHUB</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="mb-section-gap reveal-base delay-3" ref={addToRevealRefs}>
          <div className="flex justify-between items-end mb-gutter border-b border-primary pb-4">
            <h2 className="font-section-header text-section-header uppercase tracking-widest">Capabilities</h2>
            <p className="font-metadata text-metadata text-faded uppercase">Services & Leadership</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Box 1 */}
            <div className="group border border-outline-variant p-6 hover:bg-surface-variant transition-colors duration-300 flex flex-col justify-between min-h-[220px]">
              <div className="mb-8 flex justify-between items-start">
                <span className="material-symbols-outlined text-primary text-3xl transition-transform duration-500 group-hover:-translate-y-1">code_blocks</span>
                <span className="font-metadata text-metadata text-faded group-hover:text-primary transition-colors">01</span>
              </div>
              <div>
                <h3 className="font-list-item text-list-item font-bold mb-3 uppercase">Freelance Engineering</h3>
                <p className="font-body-intro text-sm text-secondary leading-relaxed">
                  Specialized in building high-performance web applications and scalable backend systems from scratch for clients.
                </p>
              </div>
            </div>
            
            {/* Box 2 */}
            <div className="group border border-outline-variant p-6 hover:bg-surface-variant transition-colors duration-300 flex flex-col justify-between min-h-[220px]">
              <div className="mb-8 flex justify-between items-start">
                <span className="material-symbols-outlined text-primary text-3xl transition-transform duration-500 group-hover:-translate-y-1">groups</span>
                <span className="font-metadata text-metadata text-faded group-hover:text-primary transition-colors">02</span>
              </div>
              <div>
                <h3 className="font-list-item text-list-item font-bold mb-3 uppercase">Team Leadership</h3>
                <p className="font-body-intro text-sm text-secondary leading-relaxed">
                  Mentoring developers, establishing robust code review processes, and leading agile teams to deliver complex projects.
                </p>
              </div>
            </div>

            {/* Box 3 */}
            <div className="group border border-outline-variant p-6 hover:bg-surface-variant transition-colors duration-300 flex flex-col justify-between min-h-[220px]">
              <div className="mb-8 flex justify-between items-start">
                <span className="material-symbols-outlined text-primary text-3xl transition-transform duration-500 group-hover:-translate-y-1">architecture</span>
                <span className="font-metadata text-metadata text-faded group-hover:text-primary transition-colors">03</span>
              </div>
              <div>
                <h3 className="font-list-item text-list-item font-bold mb-3 uppercase">System Architecture</h3>
                <p className="font-body-intro text-sm text-secondary leading-relaxed">
                  Designing distributed architectures, optimizing databases, and ensuring systems are built with intent.
                </p>
              </div>
            </div>
          </div>
          
          {/* Quick Stats Banner */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-t border-primary pt-6 group text-center">
              <p className="font-display-title text-6xl md:text-7xl font-bold text-primary mb-2 transition-transform duration-500 group-hover:-translate-y-2">15<span className="text-4xl text-secondary align-top">+</span></p>
              <p className="font-metadata text-metadata text-faded uppercase tracking-widest">Satisfied Clients</p>
            </div>
            <div className="border-t border-outline-variant hover:border-primary transition-colors duration-500 pt-6 group text-center">
              <p className="font-display-title text-6xl md:text-7xl font-bold text-primary mb-2 transition-transform duration-500 group-hover:-translate-y-2">100<span className="text-4xl text-secondary align-top">%</span></p>
              <p className="font-metadata text-metadata text-faded uppercase tracking-widest">Commitment</p>
            </div>
            <div className="border-t border-outline-variant hover:border-primary transition-colors duration-500 pt-6 group text-center">
              <p className="font-display-title text-6xl md:text-7xl font-bold text-primary mb-2 transition-transform duration-500 group-hover:-translate-y-2">4<span className="text-4xl text-secondary align-top">+</span></p>
              <p className="font-metadata text-metadata text-faded uppercase tracking-widest">Years Experience</p>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-section-gap reveal-base delay-4" ref={addToRevealRefs}>
          <div className="flex justify-between items-end mb-gutter border-b border-primary pb-4">
            <h2 className="font-section-header text-section-header uppercase tracking-widest">Certifications</h2>
            <p className="font-metadata text-metadata text-faded uppercase">Continuous Learning</p>
          </div>
          
          <div className="space-y-4">
            {/* Cert 1 */}
            <div className="group border border-outline-variant p-5 hover:bg-surface-variant transition-colors duration-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex flex-col">
                <h3 className="font-list-item text-list-item font-bold uppercase group-hover:text-primary transition-colors">AWS Certified Solutions Architect</h3>
                <p className="font-metadata text-metadata text-faded mt-1">Amazon Web Services (AWS) • Issued Jan 2024</p>
              </div>
              <a href="#" className="flex items-center gap-2 border border-outline-variant px-4 py-2 hover:border-primary hover:text-primary transition-colors uppercase font-metadata text-[10px] tracking-widest shrink-0">
                <span>View Credential</span>
                <span className="material-symbols-outlined text-[14px]">north_east</span>
              </a>
            </div>

            {/* Cert 2 */}
            <div className="group border border-outline-variant p-5 hover:bg-surface-variant transition-colors duration-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex flex-col">
                <h3 className="font-list-item text-list-item font-bold uppercase group-hover:text-primary transition-colors">Meta Front-End Developer Professional</h3>
                <p className="font-metadata text-metadata text-faded mt-1">Coursera / Meta • Issued Aug 2023</p>
              </div>
              <a href="#" className="flex items-center gap-2 border border-outline-variant px-4 py-2 hover:border-primary hover:text-primary transition-colors uppercase font-metadata text-[10px] tracking-widest shrink-0">
                <span>View Credential</span>
                <span className="material-symbols-outlined text-[14px]">north_east</span>
              </a>
            </div>

            {/* Cert 3 */}
            <div className="group border border-outline-variant p-5 hover:bg-surface-variant transition-colors duration-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex flex-col">
                <h3 className="font-list-item text-list-item font-bold uppercase group-hover:text-primary transition-colors">Postman API Fundamentals Student Expert</h3>
                <p className="font-metadata text-metadata text-faded mt-1">Postman • Issued May 2023</p>
              </div>
              <a href="#" className="flex items-center gap-2 border border-outline-variant px-4 py-2 hover:border-primary hover:text-primary transition-colors uppercase font-metadata text-[10px] tracking-widest shrink-0">
                <span>View Credential</span>
                <span className="material-symbols-outlined text-[14px]">north_east</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
