"use client"

import { useState } from "react"
import Link from 'next/link'
import { useStyle } from "@/components/ThemeProvider"

export default function EamesMagazinePage() {
  const [currentPage, setCurrentPage] = useState(0)
  const { style } = useStyle()
  const isColorful = style === "colorful"

  const magazinePages = [
    "/img/magazine.png",
    "/img/magazine2.png",
    "/img/magazine3.png",
    "/img/magazine4.png",
    "/img/magazine5.png",
    "/img/magazine6.png",
    "/img/magazine7.png",
    "/img/magazine8.png",
    "/img/magazine9.png",
    "/img/magazine10.png",
    "/img/magazine11.png",
    "/img/magazine12.png",
    "/img/magazine13.png",
    "/img/magazine14.png",
    "/img/magazine15.png",
    "/img/magazine16.png"
  ]

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % magazinePages.length)
  const prevPage = () => setCurrentPage((prev) => (prev - 1 + magazinePages.length) % magazinePages.length)

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-indigo-950 dark:text-white font-sans transition-colors duration-500">

      {/* 1. HERO SECTIE: STIJL ZOALS BIJ HET IJS */}
      <section className={`py-16 md:py-24 px-6 border-b transition-colors duration-500 ${
        isColorful
          ? "bg-fuchsia-50 dark:bg-slate-800/40 border-fuchsia-100 dark:border-slate-700"
          : "bg-slate-50 dark:bg-slate-800/20 border-slate-100 dark:border-slate-800"
      }`}>
        <div className="max-w-4xl mx-auto text-center">
          
          {/* De Titel: Precies de styling van het ijs-project */}
          <h1 className={`text-5xl md:text-7xl tracking-tighter mb-4 italic uppercase text-indigo-950 dark:text-white ${
            isColorful ? "font-black" : "font-semibold"
          }`}>
            EMBER{" "}
            <span className={isColorful ? "text-fuchsia-500 dark:text-cyan-400" : "text-indigo-500 dark:text-indigo-400"}>
              EDITORIAL
            </span>
          </h1>

          {/* De Ondertitel: Precies de styling van het ijs-project */}
          <p className={`text-xs uppercase tracking-[0.3em] mb-12 ${
            isColorful
              ? "font-bold text-fuchsia-400 dark:text-cyan-500"
              : "font-medium text-indigo-400 dark:text-indigo-500"
          }`}>
            Magazine Design • Print & Layout
          </p>

          {/* De Magazine Container (met de max-height fix van zojuist) */}
          <div className={`bg-white p-3 rounded-[2.5rem] shadow-2xl overflow-hidden border transition-colors duration-500 ${
            isColorful
              ? "shadow-fuchsia-200/50 dark:shadow-slate-900 border-fuchsia-100 dark:border-slate-700"
              : "shadow-slate-100 dark:shadow-slate-900 border-slate-100 dark:border-slate-800"
          }`}>
            <div className="relative w-full max-h-[75vh] aspect-[1/1.414] bg-white flex items-center justify-center overflow-hidden">
               <img
                src={magazinePages[currentPage]}
                alt={`Magazine pagina ${currentPage + 1}`}
                className="w-full h-full object-contain transition-opacity duration-300"
              />
              
              {/* Navigatie Knoppen (Pijltjes) */}
              <button
                onClick={prevPage}
                className={`absolute left-4 top-1/2 -translate-y-1/2 backdrop-blur-md p-3 rounded-full shadow-lg transition-all z-10 ${
                  isColorful
                    ? "bg-white/80 dark:bg-slate-700/80 hover:bg-fuchsia-500 hover:text-white"
                    : "bg-white/80 dark:bg-slate-700/80 hover:bg-indigo-600 hover:text-white"
                }`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextPage}
                className={`absolute right-4 top-1/2 -translate-y-1/2 backdrop-blur-md p-3 rounded-full shadow-lg transition-all z-10 ${
                  isColorful
                    ? "bg-white/80 dark:bg-slate-700/80 hover:bg-fuchsia-500 hover:text-white"
                    : "bg-white/80 dark:bg-slate-700/80 hover:bg-indigo-600 hover:text-white"
                }`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </section>

     
      {/* Project Beschrijving */}
      <section className="max-w-4xl mx-auto py-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-8">
            <h2 className={`text-3xl mb-6 text-indigo-950 dark:text-white ${
              isColorful ? "font-black" : "font-semibold"
            }`}>Over het Ontwerp</h2>
            <p className={`text-slate-600 dark:text-slate-400 leading-relaxed text-lg mb-4 ${
              isColorful ? "font-normal" : "font-light"
            }`}>
            De uitdaging voor Ember Magazine was het creëren van een vernieuwde visuele stijl die de kernwaarden van het blad respecteert, maar tegelijkertijd een moderne impuls geeft. Ik heb gezocht naar een balans tussen de vertrouwde redactionele autoriteit en een frisse, hedendaagse esthetiek
            </p>
          </div>
          <div className="md:col-span-4 space-y-4">
            <div className={`p-6 rounded-2xl border transition-colors duration-500 ${
              isColorful
                ? "bg-fuchsia-50 dark:bg-slate-800/40 border-fuchsia-100 dark:border-slate-700"
                : "bg-slate-50 dark:bg-slate-800/20 border-slate-100 dark:border-slate-800"
            }`}>
              <h3 className={`text-xs uppercase tracking-widest mb-2 ${
                isColorful
                  ? "font-bold text-fuchsia-500 dark:text-cyan-400"
                  : "font-semibold text-indigo-500 dark:text-indigo-400"
              }`}>Technieken</h3>
              <ul className={`text-sm space-y-1 text-indigo-950 dark:text-slate-300 ${
                isColorful ? "font-bold" : "font-medium"
              }`}>
                <li>InDesign Layout</li>
                <li>Grid Systems</li>
                <li>Typography</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Kleuren & Details Sectie (Stijl van het Ijs-project) */}
      <section className="max-w-6xl mx-auto py-20 px-6 border-t border-slate-100 dark:border-slate-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Linker kolom: Extra informatie over de stijl */}
          <div className="lg:col-span-7">
            <div className={`p-8 rounded-3xl border transition-all ${
              isColorful 
                ? "bg-fuchsia-50/30 border-fuchsia-100 dark:bg-slate-800/40 dark:border-slate-700" 
                : "bg-slate-50 dark:bg-slate-800/20 border-slate-100 dark:border-slate-800"
            }`}>
              <h3 className={`uppercase text-xs mb-4 tracking-widest ${
                isColorful ? "text-fuchsia-500" : "text-indigo-500"
              }`}>Typografie & Grid</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Het magazine maakt gebruik van een streng 12-koloms grid-systeem. De koppen zijn gezet in een krachtige Serif om het klassieke karakter van een fysiek magazine te behouden, terwijl de broodtekst in een Sans-Serif is gezet voor maximale leesbaarheid op digitale schermen.
              </p>
            </div>
          </div>

          {/* Rechter kolom: Het Kleurenpalet (Precies zoals bij het ijs) */}
          <div className="lg:col-span-5">
            <div className={`p-8 rounded-[2rem] text-white shadow-xl transition-all ${
              isColorful
                ? "bg-indigo-950 dark:bg-slate-800/60"
                : "bg-indigo-600 dark:bg-slate-800/60"
            }`}>
              <h3 className={`uppercase tracking-[0.2em] text-[10px] mb-8 ${
                isColorful ? "text-fuchsia-300" : "text-indigo-200"
              }`}>Editorial Palette</h3>
              
              <div className="space-y-4">
                {[
                  { color: "#933E2B", name: "Roest bruin" },
                  { color: "#D6D7D1", name: "Grijs" },
                  { color: "#4D5E51", name: "Moss groen " },
                ].map((item) => (
                  <div key={item.color} className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div 
                        className="w-12 h-12 rounded-full border-2 border-white/20 shadow-inner" 
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="font-bold text-sm">{item.name}</span>
                    </div>
                    <span className="text-[10px] opacity-40 font-mono">{item.color}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Footer Navigatie */}
      <footer className={`py-20 text-center border-t transition-colors duration-500 ${
        isColorful
          ? "border-fuchsia-100 dark:border-slate-700"
          : "border-slate-100 dark:border-slate-800"
      }`}>
        <Link
          href="/project"
          className={`text-xs uppercase tracking-[0.2em] transition-colors ${
            isColorful
              ? "font-bold text-indigo-950 dark:text-slate-300 hover:text-fuchsia-500 dark:hover:text-cyan-400"
              : "font-medium text-indigo-500 dark:text-indigo-400 hover:text-indigo-950 dark:hover:text-white"
          }`}
        >
          ← Terug naar alle projecten
        </Link>
      </footer>
    </div>
  )
}