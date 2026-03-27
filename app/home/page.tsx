"use client"
import React from "react"
import Link from "next/link"
import { useStyle } from "@/components/ThemeProvider"

export default function HomePage() {
  const styleContext = useStyle();
  const isColorful = styleContext ? styleContext.style === "colorful" : true;

  const diensten = [
    {
      label: "01. Branding",
      title: "Identiteit",
      description: "Ik creëer visuele systemen die een blijvende indruk achterlaten.",
      color: isColorful ? "from-pink-500 to-rose-500" : "from-slate-700 to-slate-500",
    },
    {
      label: "02. Design",
      title: "Visuals",
      description: "Gedurfd design dat de grens tussen digitaal en fysiek doet vervagen.",
      color: isColorful ? "from-violet-600 to-indigo-500" : "from-slate-700 to-slate-500",
    },
    {
      label: "03. Concept",
      title: "Verhaal",
      description: "Vage ideeën transformeren tot krachtige, visuele fundamenten.",
      color: isColorful ? "from-orange-500 to-amber-500" : "from-slate-700 to-slate-500",
    }
  ];

  return (
    <div className={`relative w-full min-h-screen transition-all duration-700 overflow-x-hidden ${
      isColorful 
        ? "bg-[#fafafa] dark:bg-[#050505]" 
        : "bg-white dark:bg-slate-950" // Minimalistische modus is strak wit of diep donkerblauw/zwart
    }`}>
      
      {/* ACHTERGROND ELEMENTEN (Alleen bij Colorful) */}
      {isColorful && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] left-[-5%] w-[50%] h-[50%] bg-pink-100/50 dark:bg-pink-900/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[20%] right-[-5%] w-[40%] h-[40%] bg-orange-100/50 dark:bg-orange-900/10 blur-[120px] rounded-full" />
        </div>
      )}

      <main className="relative z-10 max-w-7xl mx-auto pt-32 pb-32 px-6 md:px-12">
        
        {/* BOVENSTE BADGE */}
        <section className="mb-12">
          <div className="flex items-center gap-3">
             <span className={`text-[10px] font-black uppercase tracking-[0.4em] px-3 py-1.5 rounded-full border transition-colors ${
               isColorful 
                ? "border-pink-500 text-pink-600 dark:text-pink-400" 
                : "border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400"
             }`}>
               Visual Design Specialist
             </span>
             {isColorful && <span className="animate-bounce">✨</span>}
          </div>
        </section>

        {/* HEADLINE */}
        <section className="mb-12">
          <h1 className="text-7xl md:text-[10rem] font-black leading-[0.8] tracking-tighter text-slate-950 dark:text-white">
            DESIGN <br />
            <span className={`transition-all duration-700 ${
              isColorful 
                ? "italic text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-violet-600 to-orange-500" 
                : "text-slate-900 dark:text-slate-200"
            }`}>
              THAT SPEAKS.
            </span>
          </h1>
        </section>

        {/* INTRO TEKST */}
        <section className="mb-40 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <p className="text-2xl md:text-4xl font-bold leading-[1.1] text-slate-800 dark:text-slate-100 mb-6 italic">
              Gevormd door de visie van <span className={`not-italic ${
                isColorful ? "text-pink-500" : "text-indigo-600 dark:text-indigo-400"
              }`}>Joy Bevers</span>. 
              Ik vertaal complexe ideeën naar heldere, esthetische visuals die impact maken.
            </p>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl font-medium">
              Als 26-jarige ontwerper combineer ik een frisse blik met een scherp oog voor typografie en kleur. Altijd op zoek naar de balans tussen vorm en functie (en de perfecte latte macchiato).
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-wrap gap-4 lg:justify-end">
            <Link href="/project" className={`px-10 py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] text-center transition-all ${
              isColorful 
              ? "bg-slate-900 text-white hover:bg-pink-600 shadow-xl shadow-pink-500/10 hover:scale-105" 
              : "bg-slate-950 dark:bg-white text-white dark:text-slate-950 hover:opacity-80"
            }`}>
              Bekijk Portfolio
            </Link>
          </div>
        </section>

        {/* DIENSTEN GRID */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {diensten.map((dienst, i) => (
            <div key={i} className={`group relative p-12 rounded-[40px] border transition-all duration-500 hover:-translate-y-3 ${
              isColorful 
                ? "bg-white dark:bg-white/[0.02] border-slate-100 dark:border-white/5 hover:shadow-2xl" 
                : "bg-transparent border-slate-200 dark:border-slate-800 hover:border-indigo-500/50"
            }`}>
              <div className={`w-12 h-1 rounded-full bg-gradient-to-r ${dienst.color} mb-10 transition-all group-hover:w-20`} />
              <span className="text-[10px] font-black tracking-[0.3em] uppercase mb-4 block text-slate-400">
                {dienst.label}
              </span>
              <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter">
                {dienst.title}
              </h3>
              <p className="text-base text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                {dienst.description}
              </p>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}