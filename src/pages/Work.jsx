import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Work() {
  const [expandedProject, setExpandedProject] = useState(null);

  const selectedProjects = [
    {
      ref: "01",
      name: "CoSketch",
      tag: " High-Performance Spatial Whiteboard with Quadtree Optimization & CRDT Sync",
      version: "v2.0.4",
      description: "An advanced, production-ready real-time collaborative whiteboard built on a hybrid high-performance architecture. It integrates a C++ WebAssembly (Wasm) CRDT engine for conflict-free element ordering, a custom 2D Spatial Quadtree for rendering and hit-testing optimizations, and a reactive client-server synchronization pipeline powered by React, Socket.IO, Node.js, and MongoDB.",
      colorClass: "bg-accent-red",
      stack: "React / Socket.io / Node.js / Express.js / MongoDB",
      year: "2026",
      image: "/images/CoSketch_image.png",
      link: "https://cosketch-o2li.onrender.com"
    },
    {
      ref: "02",
      name: "Koda",
      tag: "The AI-First Code Editor & Performance Diagnostics IDE 🚀",
      version: "OPEN SOURCE",
      description: "KODA is a next-generation, developer-centric Web IDE designed for writing, execution-tracing, and optimizing high-performance code. Moving beyond traditional, static code editors and passive algorithm visualizers, Koda acts as an active development companion. It integrates a custom-engineered C++ execution engine with a machine learning model and Google Gemini-powered intelligence to deliver real-time variable tracing, deep logic inspection, and line-by-line complexity diagnostics Whether you are writing competitive programming solutions, optimizing hot paths, or learning advanced structures, KODA gives you microscopic visibility into how your code behaves and performs..",
      colorClass: "bg-accent-blue",
      stack: "React 19 / Three.js / Express.js / Node.js / MongoDB / Scikit-Learn",
      year: "2026",
      image: "/images/Koda_image.png",
      link: "https://koda-rho-lemon.vercel.app/"
    },
    {
      ref: "03",
      name: "GoRafts",
      tag: "🌄 GoRafts - Ultimate Rishikesh Adventure Website",
      version: "#",
      description: "GoRafts is a fully responsive, high-performance adventure business website for Rishikesh-based tours — including thrilling rafting packages, serene stays, breathtaking treks, and adrenaline-pumping bungee experiences.",
      colorClass: "bg-surface-variant border border-outline",
      stack: "React(Vite) / Tailwind CSS / Framer Motion / WebGPU",
      year: "2025",
      image: "/images/GoRafts_image.png",
      link: "https://goraftsss.netlify.app/"
    }
    // {
    //   ref: "04",
    //   name: "Semantic Search Engine",
    //   tag: "MACHINE LEARNING",
    //   version: "v1.2.0",
    //   description: "A vector database wrapper for lightning-fast semantic querying. Uses advanced indexing to return contextual matches in milliseconds.",
    //   colorClass: "bg-primary",
    //   stack: "Python / PyTorch / Pinecone",
    //   year: "2023",
    //   image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=600&auto=format&fit=crop",
    //   link: "#"
    // },
    // {
    //   ref: "05",
    //   name: "Distributed File System",
    //   tag: "BACKEND ARCHITECTURE",
    //   version: "v4.0.0",
    //   description: "A highly optimized, fault-tolerant distributed caching layer. Used across core microservices to dramatically reduce latency and database load.",
    //   colorClass: "bg-surface-variant border border-outline",
    //   stack: "Go / gRPC / Raft",
    //   year: "2022",
    //   image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop",
    //   link: "#"
    // }
  ];

  const revealRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
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
    <div className="font-body-intro bg-canvas text-primary min-h-screen">
      <style>{`
        .material-symbols-outlined {
          font-size: 1.25rem;
          vertical-align: middle;
        }
        .project-row:hover .project-year {
          opacity: 1;
        }
        .reveal-up {
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>

      <Navbar />

      <main className="max-w-[1100px] mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Hero Section */}
        <section
          className="mt-section-gap mb-section-gap reveal-up"
          style={{ transitionDelay: '0.1s' }}
          ref={addToRevealRefs}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
            <div className="md:col-span-8">
              <h1 className="font-display-title text-3xl md:text-[32px] font-extrabold tracking-tighter mb-8 leading-tight">
                I build scalable software systems, focusing on robust backend architecture and high-performance web applications.
              </h1>
              <p className="text-secondary max-w-xl font-body-intro text-body-intro">
                Currently focused on cloud infrastructure and full-stack engineering. I believe code is a craft that demands clarity, performance, and maintainability. Always exploring new patterns to handle scale efficiently.
              </p>
            </div>
            <div className="md:col-span-4 flex md:justify-end">
              <span className="font-metadata text-metadata text-faded uppercase tracking-widest">[ 1 ]</span>
            </div>
          </div>
        </section>


        {/* Selected Projects (List) */}
        <section
          className="mb-section-gap reveal-up"
          style={{ transitionDelay: '0.3s' }}
          ref={addToRevealRefs}
        >
          <div className="flex justify-between items-baseline mb-gutter border-b border-outline-variant pb-base">
            <h3 className="font-section-header text-section-header uppercase tracking-widest">Selected Works</h3>
            <span className="font-metadata text-metadata text-faded uppercase tracking-widest">[ 2 ]</span>
          </div>

          <div className="flex justify-between text-metadata font-metadata text-faded uppercase tracking-widest border-b border-outline-variant pb-2 mb-4">
            <div className="w-12">REF</div>
            <div className="flex-1">PROJECT NAME</div>
            <div className="w-1/3 md:block hidden">TECH STACK</div>
            <div className="w-16 text-right">YEAR</div>
          </div>

          {selectedProjects.map((project) => {
            const isExpanded = expandedProject === project.ref;
            return (
            <div
              key={project.ref}
              className={`relative flex flex-col border-b border-outline-variant group cursor-crosshair transition-colors ${isExpanded ? 'bg-surface' : 'hover:bg-surface'}`}
              onClick={() => setExpandedProject(isExpanded ? null : project.ref)}
            >
              {/* List Row */}
              <div className={`flex justify-between items-center w-full py-6 px-4 md:px-0 transition-opacity duration-300 ${isExpanded ? 'opacity-50' : 'group-hover:opacity-50'}`}>
                <div className="w-12 text-metadata font-metadata text-faded relative z-10">{project.ref}</div>
                <div className="flex-1 flex items-center gap-3 relative z-10">
                  <div className={`w-1.5 h-1.5 ${project.colorClass}`}></div>
                  <span className={`font-bold transition-colors ${isExpanded ? 'text-primary' : 'group-hover:text-primary'}`}>{project.name}</span>
                </div>
                <div className="w-1/3 text-metadata font-metadata text-secondary md:block hidden relative z-10">{project.stack}</div>
                <div className="w-16 text-right text-metadata font-metadata text-secondary relative z-10">{project.year}</div>
              </div>

              {/* Expanding Detail View */}
              <div className={`w-full overflow-hidden transition-all duration-500 ease-in-out relative z-10 ${isExpanded ? 'h-auto opacity-100' : 'h-0 opacity-0 md:group-hover:h-auto md:group-hover:opacity-100'}`}>
                <div className="pt-4 pb-8 px-4 md:px-0">
                  <div className="md:ml-12 mb-8 border-l border-outline-variant pl-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-1.5 h-1.5 ${project.colorClass}`}></div>
                      <span className="block font-metadata text-metadata text-primary uppercase tracking-widest">{project.tag}</span>
                    </div>
                    <p className="text-secondary max-w-3xl leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <a href={project.link} target="_blank" rel="noreferrer" className="block relative z-20 cursor-pointer" onClick={(e) => e.stopPropagation()}>
                    <img src={project.image} className={`w-full h-auto object-contain grayscale brightness-90 transition-all duration-700 rounded-lg shadow-md ${isExpanded ? 'grayscale-0' : 'group-hover:grayscale-0 hover:scale-[1.01]'}`} alt={`${project.name} preview`} />
                  </a>
                </div>
              </div>
            </div>
          )})}
        </section>

        {/* Footer Visual */}
        <div
          className="flex justify-center py-section-gap opacity-30 reveal-up"
          style={{ transitionDelay: '0.5s' }}
          ref={addToRevealRefs}
        >
          <img className="w-16 grayscale" alt="Minimalist architectural icon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAOGEwIQnp2NIuGoPxnVYWm2vE-RbXKWyXJ_VjyHrF2GlCqrBMt-T1jEyDcbOWAEcu3Gz2XVPVV7XGSlLOPXzyv239Q0gYc2ayGrs7Zm_V6tsgF-BxEcatrsINjQ3Tdn5wPCKEd9TW7bbWb92rF9QO8iH2bYIksvQDVtXeQlj6cnlT1LMW29BQiJV9F52QF1Gsx0VA1EDAYvihfv1FJXrD1aJLQH20rgKHF2ibgSwsif4OoTmPMqT5VCtmKLh8P-_jToj4WCZ8unw" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
