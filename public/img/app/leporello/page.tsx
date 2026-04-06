"use client"

import { useRef } from "react"
import Link from 'next/link'
import { useStyle } from "@/components/ThemeProvider"

export default function LeporelloProjectPage() {
  const { style } = useStyle()
  const isColorful = style === "colorful"
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Je leporello pagina's (vervang deze door je echte afbeeldingen)
  const leporelloPages = [
    "/img/leporello.jpg",
    "/img/2.jpg",
    "/img/3.jpg",
    "/img/4.jpg",
    "/img/5.jpg",
    "/img/6.jpg",
    "/img/7.jpg",
    "/img/8.jpg",
    "/img/9.jpg",
    "/img/10.jpg",
    "/img/11.jpg",
    "/img/1é.jpg",
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-indigo-950 dark:text-white font-sans transition-colors duration-500">

      {/* Hero Sectie */}
      <section className={`py-16 md:py-24 px-6 border-b transition-colors duration-500 ${
        isColorful
          ? "bg-red-50 dark:bg-slate-800/40 border-red-100 dark:border-slate-700"
          : "bg-slate-50 dark:bg-slate-800/20 border-slate-100 dark:border-slate-800"
      }`}>
        <div className="max-w-6xl mx-auto text-center">
          <h1 className={`text-5xl md:text-7xl tracking-tighter mb-4 italic uppercase text-indigo-950 dark:text-white ${
            isColorful ? "font-black" : "font-semibold"
          }`}>
            Leporello
          </h1>
          <p className={`text-xs uppercase tracking-[0.3em] mb-12 ${
            isColorful
              ? "font-bold text-red-400 dark:text-yellow-500"
              : "font-medium text-indigo-400 dark:text-indigo-500"
          }`}>
            Tribute to Stefan Vanfleteren, FOMU • Redactioneel ontwerp
          </p>

          {/* DE DIGITALE LEPORELLO VIEWER */}
          <div className="relative group">
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-0 py-10 no-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing"
              style={{ scrollbarWidth: 'none' }}
            >
              {leporelloPages.map((src, index) => (
                <div 
                  key={index} 
                  className={`flex-none w-[70vw] md:w-[30vw] snap-center transition-transform duration-500 hover:z-10`}
                  style={{
                    // Dit creëert het zigzag effect (om en om een beetje schuin)
                    transform: `rotateY(${index % 2 === 0 ? '-10deg' : '10deg'}) translateX(${index * -2}px)`,
                    perspective: '1000px'
                  }}
                >
                  <div className={`aspect-[3/4] bg-white shadow-2xl border-l border-black/5 overflow-hidden relative ${
                    isColorful ? "shadow-red-900/20" : "shadow-black/40"
                  }`}>
                    {/* De schaduw in de vouw */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-transparent pointer-events-none" />
                    <img 
                      src={src} 
                      alt={`Pagina ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Scroll hint */}
            <div className="mt-4 text-[10px] uppercase tracking-widest opacity-40 animate-pulse">
              ← Sleep om te bladeren →
            </div>
          </div>
        </div>
      </section>

      {/* Content Sectie (Teksten ongewijzigd) */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className={`text-3xl mb-6 tracking-tight text-indigo-950 dark:text-white ${
                isColorful ? "font-black" : "font-semibold"
              }`}>Het Ontwerp</h2>
              <p className={`text-slate-600 dark:text-slate-400 leading-relaxed text-lg ${
                isColorful ? "font-normal" : "font-light"
              }`}> 
               
                In opdracht van het FOMU ontwierp ik een leporello als eerbetoon aan fotograaf <strong className={isColorful ? "text-red-500" : ""}> Stefan Vanfleteren</strong>. De 'lijn' vormde het cruciale element in dit ontwerp. Door te denken en te kijken zoals Vanfleteren, heb ik de lijn op verschillende manieren in beeld gebracht, waarbij de focus ligt op rauw contrast en de essentie van het onderwerp.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className={`p-6 rounded-3xl border transition-colors duration-500 ${
                isColorful ? "bg-red-50 dark:bg-slate-800/40 border-red-100 dark:border-slate-700" : "bg-slate-50 dark:bg-slate-800/20 border-slate-100 dark:border-slate-800"
              }`}>
                <h3 className="uppercase text-xs mb-3 tracking-widest font-bold">Vormgeving</h3>
                <p className="text-sm opacity-70">Door de harmonica-vouw kan de kijker de beelden individueel bekijken of het hele verhaal in één oogopslag zien als een panorama.</p>
              </div>
              <div className={`p-6 rounded-3xl border transition-colors duration-500 ${
                isColorful ? "bg-red-50 dark:bg-slate-800/40 border-red-100 dark:border-slate-700" : "bg-slate-50 dark:bg-slate-800/20 border-slate-100 dark:border-slate-800"
              }`}>
                <h3 className="uppercase text-xs mb-3 tracking-widest font-bold">Typografie</h3>
                <p className="text-sm opacity-70">De typografie is sober en ondergeschikt aan de fotografie, uitgevoerd in een klassieke serif die de diepgang van de beelden ondersteunt.</p>
              </div>
            </div>
          </div>

          {/* Kleurenpalet (Stefan Vanfleteren stijl) */}
          <div className="lg:col-span-5">
            <div className={`p-8 rounded-[2rem] text-white shadow-xl transition-colors duration-500 ${
              isColorful ? "bg-red-950" : "bg-slate-900"
            }`}>
              <h3 className="uppercase tracking-[0.2em] text-[10px] mb-8 opacity-60 text-center">Kleurenpalet</h3>
              <div className="space-y-4">
                {[
                  { color: "#000000", name: "Zwart" },
                  { color: "#FFFFFF", name: "Wit" },
                  { color: "#808080", name: "Grijs" },
                ].map((item) => (
                  <div key={item.color} className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-full border border-white/10" style={{ backgroundColor: item.color }} />
                      <span className="text-sm font-bold">{item.name}</span>
                    </div>
                    <span className="text-[10px] opacity-40 font-mono">{item.color}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 text-center border-t border-black/5 dark:border-white/5">
        <Link href="/project" className="inline-flex items-center space-x-3 uppercase text-[10px] tracking-[0.3em] font-black hover:opacity-50 transition-all">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          <span>terug naar alle projecten</span>
        </Link>
      </footer>
    </div>
  )
}