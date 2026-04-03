"use client"
import React, { useEffect, useState } from "react"
import Link from "next/link"
import { useStyle } from "@/components/ThemeProvider"

const HOME_CONFIG = {
  hero: {
    title: "CREATE IMPACT.",
    subtitle: "DESIGN.",
    description: "Ik vertaal complexe ideeën naar heldere, esthetische visuals die impact maken.",
    mainImage: "/img/cinecity6.png", 
  },
  previews: [
    {
      id: 1,
      title: "Branding Project",
      category: "Branding",
      image: "/img/kelloggsdoos.jpg",
    },
    {
      id: 2,
      title: "Digital Design",
      category: "Design",
      image: "/img/cinecity3.png",
    }
  ]
};

export default function HomePage() {
  const styleContext = useStyle();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isColorful = styleContext ? styleContext.style === "colorful" : true;

  if (!mounted) return null;

  return (
    <div className={`relative w-full min-h-screen transition-all duration-700 overflow-x-hidden ${
      isColorful ? "bg-[#fafafa] dark:bg-[#050505]" : "bg-white dark:bg-slate-950"
    }`}>
      
      {/* ACHTERGROND */}
      {isColorful && (
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-pink-100/40 dark:bg-pink-900/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-orange-100/40 dark:bg-orange-900/10 blur-[120px] rounded-full" />
        </div>
      )}

      <main className="relative z-20 max-w-7xl mx-auto pt-32 pb-40 px-6 md:px-12">
        
        {/* HERO SECTIE */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="text-7xl md:text-[8rem] font-black leading-[0.85] tracking-tighter text-slate-950 dark:text-white mb-8">
              {HOME_CONFIG.hero.title}<br />
              <span className={`transition-all duration-700 ${
                isColorful ? "italic text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-violet-600 to-orange-500" : "text-slate-900 dark:text-slate-200"
              }`}>
                {HOME_CONFIG.hero.subtitle}
              </span>
            </h1>
            <p className="text-2xl text-slate-600 dark:text-slate-400 max-w-xl font-medium mb-10">
              {HOME_CONFIG.hero.description}
            </p>
            <Link href="/project" className={`inline-block w-fit px-12 py-6 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all hover:scale-105 ${
              isColorful ? "bg-slate-900 text-white shadow-xl shadow-pink-500/20" : "bg-slate-950 dark:bg-white text-white dark:text-slate-950"
            }`}>
              Bekijk Portfolio
            </Link>
          </div>

          <div className="lg:col-span-5">
            <div className="relative group overflow-hidden rounded-[40px] shadow-2xl">
              <img 
                src={HOME_CONFIG.hero.mainImage} 
                alt="Main work" 
                className="w-full h-[500px] lg:h-[650px] object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => { 
                  const target = e.target as HTMLImageElement; 
                  target.src = "https://via.placeholder.com/800x1000?text=Upload+Image+Hier"; 
                }}
              />
            </div>
          </div>
        </section>

        {/* PREVIEW VAN WERKEN */}
        <section className="mb-32">
          <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter mb-12">Recent Werk</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {HOME_CONFIG.previews.map((proj) => (
              <Link key={proj.id} href="/project" className="group block">
                <div className="relative overflow-hidden rounded-[30px] mb-6">
                  <img 
                    src={proj.image} 
                    alt={proj.title} 
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => { 
                      const target = e.target as HTMLImageElement; 
                      target.src = "https://via.placeholder.com/600x400?text=Check+Image+Pad"; 
                    }}
                  />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">{proj.category}</span>
                <h4 className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter">{proj.title}</h4>
              </Link>
            ))}
          </div>
        </section>

        {/* DIENSTEN (Behouden) */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`p-10 rounded-[40px] border transition-all ${isColorful ? "bg-white dark:bg-white/5 border-slate-100 dark:border-white/5" : "bg-transparent border-slate-200 dark:border-slate-800"}`}>
              <div className={`w-10 h-1 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 mb-6`} />
              <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tighter">Branding</h3>
              <p className="text-sm text-slate-500 mt-2">Ik bouw visuele fundamenten. Van logo-ontwerp tot volledige brand guides die de essentie van een merk vastleggen en consistent doorvertalen naar elk platform.</p>
            </div>
            <div className={`p-10 rounded-[40px] border transition-all ${isColorful ? "bg-white dark:bg-white/5 border-slate-100 dark:border-white/5" : "bg-transparent border-slate-200 dark:border-slate-800"}`}>
              <div className={`w-10 h-1 rounded-full bg-gradient-to-r from-violet-600 to-indigo-500 mb-6`} />
              <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tighter">Design</h3>
              <p className="text-sm text-slate-500 mt-2">Gedurfd digitaal design dat werkt. Ik ontwerp interfaces (UI) en interacties die niet alleen esthetisch hoogstaand zijn, maar ook een naadloze gebruikerservaring (UX) bieden.</p>
            </div>
            <div className={`p-10 rounded-[40px] border transition-all ${isColorful ? "bg-white dark:bg-white/5 border-slate-100 dark:border-white/5" : "bg-transparent border-slate-200 dark:border-slate-800"}`}>
              <div className={`w-10 h-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 mb-6`} />
              <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tighter">Concept</h3>
              <p className="text-sm text-slate-500 mt-2">Elk groot ontwerp begint bij een sterk idee. Ik help bij het vertalen van complexe vraagstukken naar heldere visuele concepten die een boodschap echt laten binnenkomen.</p>
            </div>
        </section>

      </main>
    </div>
  )
}