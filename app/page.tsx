"use client"
import Link from "next/link"
import { useStyle } from "@/components/ThemeProvider"

export default function HomePage() {
  const { style } = useStyle()
  const isColorful = style === "colorful"

  return (
    <div className={`w-full space-y-16 transition-colors duration-500 ${
      isColorful 
        ? "bg-gradient-to-br from-pink-100 via-white to-orange-100 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800" 
        : "bg-white dark:bg-slate-900"
    }`}>
      
      {/* Hero Sectie */}
      <div className="flex flex-col items-center text-center space-y-8 py-24 px-6 md:px-16">
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="flex flex-col items-center space-y-4">
            <span className={`px-5 py-2 rounded-full text-xs font-bold tracking-[0.2em] uppercase text-white ${
              isColorful 
                ? "bg-gradient-to-r from-pink-500 to-orange-400 dark:from-cyan-500 dark:to-blue-500" 
                : "bg-indigo-600 dark:bg-indigo-500"
            }`}>
              Graphic & Visual Design
            </span>
            <p className={`text-2xl text-indigo-950 dark:text-white ${isColorful ? "font-bold" : "font-medium"}`}>
              Joy Bevers
            </p>
          </div>
          
          <h1 className={`text-5xl md:text-7xl text-indigo-950 dark:text-white tracking-tight leading-[1.1] ${
            isColorful ? "font-black" : "font-semibold"
          }`}>
            Design dat spreekt, <br />
            <span className={`${
              isColorful 
                ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400" 
                : "text-indigo-600 dark:text-indigo-400"
            }`}>
              verhalen die blijven.
            </span>
          </h1>
          
          <p className={`text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed ${
            isColorful ? "font-normal" : "font-light"
          }`}>
            Ik ben <span className={`text-indigo-950 dark:text-white ${isColorful ? "font-bold" : "font-medium"}`}>Joy Bevers</span>, een ontwerper met een passie voor esthetiek en impact. 
            Ik vertaal visies naar krachtige beeldtaal door middel van{" "}
            <span className={`font-medium italic underline underline-offset-4 decoration-2 ${
              isColorful 
                ? "text-pink-600 dark:text-cyan-400 decoration-pink-300 dark:decoration-cyan-700" 
                : "text-indigo-600 dark:text-indigo-400 decoration-indigo-300"
            }`}>Visual Design</span> en creatieve strategie.
          </p>
        </div>

        {/* Knoppen */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">

          {/* ← AANPASSING: verwijst naar projectenpagina */}
          <Link href="/projects" className={`px-10 py-4 text-white rounded-xl transition-all duration-300 shadow-lg ${
            isColorful 
              ? "bg-indigo-950 dark:bg-cyan-400 dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-cyan-300 font-bold" 
              : "bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 font-medium"
          }`}>
            Bekijk Portfolio
          </Link>

          {/* ← AANPASSING: verwijst naar contactpagina */}
          <Link href="/contact" className={`px-10 py-4 rounded-xl border-2 transition-all duration-300 shadow-sm ${
            isColorful 
              ? "bg-white dark:bg-slate-800/60 text-indigo-950 dark:text-white border-indigo-50 dark:border-slate-700 hover:border-pink-400 dark:hover:border-cyan-400 font-bold" 
              : "bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800 hover:border-indigo-400 font-medium"
          }`}>
            Neem Contact Op
          </Link>

        </div>
      </div>

      {/* Expertise Sectie */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-24 px-6 md:px-16">
        
        {/* Kaart 1 */}
        <div className={`p-8 rounded-2xl border transition-all duration-300 ${
          isColorful 
            ? "bg-white dark:bg-slate-800/40 shadow-lg border-pink-50 dark:border-slate-700 hover:shadow-pink-100/50 dark:hover:border-cyan-400/30" 
            : "bg-slate-50 dark:bg-slate-800/20 shadow-sm border-slate-100 dark:border-slate-800 hover:shadow-indigo-100/30"
        }`}>
          <h2 className={`text-xs uppercase tracking-widest mb-4 italic ${
            isColorful ? "font-black text-pink-600 dark:text-cyan-400" : "font-semibold text-indigo-500 dark:text-indigo-400"
          }`}>Dienst</h2>
          <h3 className={`text-2xl text-indigo-950 dark:text-white mb-3 ${isColorful ? "font-bold" : "font-medium"}`}>Branding</h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm font-light">
            Het bouwen van een tijdloze visuele identiteit die de kern van jouw merk vangt en versterkt.
          </p>
        </div>
        
        {/* Kaart 2 */}
        <div className={`p-8 rounded-2xl border transition-all duration-300 ${
          isColorful 
            ? "bg-white dark:bg-slate-800/40 shadow-lg border-purple-50 dark:border-slate-700 hover:shadow-purple-100/50 dark:hover:border-blue-400/30" 
            : "bg-slate-50 dark:bg-slate-800/20 shadow-sm border-slate-100 dark:border-slate-800 hover:shadow-indigo-100/30"
        }`}>
          <h2 className={`text-xs uppercase tracking-widest mb-4 italic ${
            isColorful ? "font-black text-purple-600 dark:text-blue-400" : "font-semibold text-indigo-500 dark:text-indigo-400"
          }`}>Focus</h2>
          <h3 className={`text-2xl text-indigo-950 dark:text-white mb-3 ${isColorful ? "font-bold" : "font-medium"}`}>Visual Design</h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm font-light">
            Gespecialiseerd in digitale en fysieke uitingen waarbij compositie en kleur de hoofdrol spelen.
          </p>
        </div>

        {/* Kaart 3 */}
        <div className={`p-8 rounded-2xl border transition-all duration-300 ${
          isColorful 
            ? "bg-white dark:bg-slate-800/40 shadow-lg border-orange-50 dark:border-slate-700 hover:shadow-orange-100/50 dark:hover:border-indigo-400/30" 
            : "bg-slate-50 dark:bg-slate-800/20 shadow-sm border-slate-100 dark:border-slate-800 hover:shadow-indigo-100/30"
        }`}>
          <h2 className={`text-xs uppercase tracking-widest mb-4 italic ${
            isColorful ? "font-black text-orange-600 dark:text-indigo-400" : "font-semibold text-indigo-500 dark:text-indigo-400"
          }`}>Aanpak</h2>
          <h3 className={`text-2xl text-indigo-950 dark:text-white mb-3 ${isColorful ? "font-bold" : "font-medium"}`}>Concepting</h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm font-light">
            Strategische creativiteit die verder gaat dan alleen beeld; we leggen het fundament voor je verhaal.
          </p>
        </div>
      </div>
    </div>
  )
}