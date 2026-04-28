"use client"
import React, { useEffect, useState } from "react"
import Link from 'next/link'
import { useStyle } from "@/components/ThemeProvider"

// We definiëren precies hoe een project eruit ziet voor TypeScript
interface Project {
  name: string;
  slug: string;
  category: string;
  description: string;
  image: string;
}

const PROJECTS_DATA: Project[] = [
  { name: "Ijs", slug: "ijs", category: "Branding", description: "Een verfrissend merkconcept voor ambachtelijk ijs.", image: "/img/mockupijs.jpg" },
  { name: "Ember", slug: "ember", category: "Identiteit", description: "Visuele identiteit voor een modern interieurlabel.", image: "/img/magazine.png" },
  { name: "Cinecity", slug: "cinecity", category: "UX/UI Design", description: "User experience design voor een bioscoopplatform.", image: "/img/cinecity.jpg" },
  { name: "Kelloggs", slug: "kelloggs", category: "Packaging", description: "Nieuwe branding voor lekkere cornflakes.", image: "/img/kelloggsdoos.jpg" },
  { name: "Leporello", slug: "leporello", category: "Print", description: "Tribute to Stefan Vanfleteren.", image: "/img/leporello.jpg" },
  { name: "Typografische poster", slug: "typografischeposter", category: "Poster Design", description: "Typografisch poster design.", image: "/img/poster.jpg" },
  { name: "Portfolio in data", slug: "data", category: "Web Design", description: "Webdesign met data verwerkt.", image: "/img/data.png" },
  { name: "Sneaker", slug: "sneaker", category: "Promotie", description: "Visuele promotie sneaker.", image: "/img/nike.png" },
];

export default function ProjectsOverview() {
  // We halen de hele context op in plaats van direct te destructureren
  const styleContext = useStyle();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Veilige check: als de context er niet is, gebruiken we 'colorful' als standaard
  const isColorful = styleContext?.style === "colorful";

  if (!mounted) return null;

  return (
    <div className={`w-full min-h-screen transition-all duration-700 ${
      isColorful ? "bg-[#fafafa] dark:bg-[#050505]" : "bg-white dark:bg-slate-950"
    }`}>

      {/* HEADER */}
      <section className="relative pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col items-start gap-4">
          <span className={`text-[10px] font-black uppercase tracking-[0.4em] px-3 py-1.5 rounded-full border ${
            isColorful ? "border-pink-500 text-pink-600 dark:text-pink-400" : "border-slate-300 dark:border-slate-700 text-slate-500"
          }`}>
            Portfolio
          </span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-950 dark:text-white">
            SELECTED <br />
            <span className={`transition-all duration-700 ${
              isColorful ? "italic text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-violet-600 to-orange-500" : "text-slate-900 dark:text-slate-200"
            }`}>WORKS.</span>
          </h1>
        </div>
      </section>

      {/* GRID (3 KOLOMMEN) */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {PROJECTS_DATA.map((project) => (
            <Link 
              key={project.slug} 
              href={`/${project.slug}`} 
              className="group flex flex-col"
              style={{ textDecoration: 'none' }}
            >
              <div className="relative overflow-hidden rounded-[30px] aspect-[4/5] mb-6 bg-slate-100 dark:bg-slate-900">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { 
                    const target = e.currentTarget;
                    target.src = `https://via.placeholder.com/600x800?text=${project.name}`; 
                  }}
                />
              </div>

              <div className="px-2">
                <div className="flex items-center gap-3 mb-2">
                   <span className={`text-[9px] font-black uppercase tracking-widest ${
                     isColorful ? "text-pink-500" : "text-slate-400"
                   }`}>
                     {project.category}
                   </span>
                   <div className="flex-grow h-[1px] bg-slate-200 dark:bg-white/10" />
                </div>
                
                <h2 className="text-2xl font-black text-slate-950 dark:text-white tracking-tighter mb-2 group-hover:text-pink-500 transition-colors">
                  {project.name}
                </h2>
                
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed overflow-hidden" 
                   style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                  {project.description}
                </p>
                
                <div className={`mt-4 inline-flex items-center text-[9px] font-black uppercase tracking-[0.2em] transition-all ${
                  isColorful ? "text-pink-600 dark:text-pink-400 group-hover:translate-x-2" : "text-slate-950 dark:text-white"
                }`}>
                  Bekijk project <span className="ml-2">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="py-20 text-center border-t border-slate-100 dark:border-white/5">
        <Link href="/" className={`text-sm font-black uppercase tracking-[0.3em] ${
          isColorful ? "text-pink-500 hover:text-violet-600" : "text-slate-400 hover:text-slate-950 dark:hover:text-white"
        }`}>
          ← Terug naar Start
        </Link>
      </footer>
    </div>
  )
}