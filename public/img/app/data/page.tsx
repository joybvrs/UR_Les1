"use client"
import React, { useState, useEffect } from "react"
import Link from 'next/link'
import { useStyle } from "@/components/ThemeProvider"

export default function DataProjectPage() {
  const styleContext = useStyle();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isColorful = styleContext?.style === "colorful";

  const PROJECT_COLORS = {
    primary: "#F15298",    
    background: "#E390C0", 
    accent: "#D9E858",     
    text: "#2D2D2D"        
  }

  if (!mounted) return null;

  return (
    <div className={`w-full min-h-screen transition-all duration-700 ${
      isColorful ? "bg-[#fdf2f8] dark:bg-[#050505]" : "bg-white dark:bg-slate-950"
    }`}>
      
      {/* 1. HERO SECTIE */}
      <section className="pt-32 pb-12 px-6 max-w-7xl mx-auto">
        <span className={`text-[10px] font-black uppercase tracking-[0.4em] mb-4 block ${
          isColorful ? "text-[#F15298]" : "text-slate-400"
        }`}>
          Web Design & Data
        </span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-16 italic uppercase dark:text-white">
          Portfolio <span className={isColorful ? "text-[#F15298]" : "text-indigo-500"}>in Data</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Smartphone */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className={`relative w-[280px] h-[606px] overflow-hidden transition-all duration-700 rounded-[40px] ${
              isColorful 
                ? "shadow-[0_20px_50px_rgba(241,82,152,0.2)] ring-1 ring-pink-200 dark:ring-white/10" 
                : "shadow-2xl ring-1 ring-slate-200 dark:ring-white/5"
            }`}>
              <iframe 
                className="absolute inset-0 w-full h-full border-none"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FqQ61OkBrurIndqAt0gr5gj%2FPortfolio%3Fpage-id%3D0%253A1%26node-id%3D35-109%26viewport%3D336%252C89%252C0.59%26t%3DGkxJOEqYA9F18ZpB-1%26scaling%3Dscale-down-width%26content-scaling%3Dfixed%26starting-point-node-id%3D35%253A109%26hide-ui%3D1&chrome=0&device=0"
                allowFullScreen
                title="Figma iPhone 16 Pure View"
              />
            </div>
          </div>

          {/* Hoofdbeschrijving */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className={`text-3xl tracking-tight text-slate-950 dark:text-white ${
              isColorful ? "font-black" : "font-semibold"
            }`}>Over het ontwerp</h2>
            <p className={`text-slate-600 dark:text-slate-400 leading-relaxed text-xl ${
              isColorful ? "font-normal" : "font-light"
            }`}>
              Deze website is een persoonlijke vertaling van wie ik ben als vormgever. In de data-sectie gebruik ik illustraties om mijn identiteit en proces inzichtelijk te maken voor de bezoeker. Daarnaast ontwierp ik een postkaart die mijn persoonlijke manifest als ontwerper samenvat.
            </p>
            <div className={`h-1 w-20 ${isColorful ? "bg-[#F15298]" : "bg-slate-200"}`} />
          </div>
        </div>
      </section>

     {/* 2. GECORRIGEERDE AFBEELDINGSECTIE: PAST OP VOLLEDIG SCHERM */}
     <section className="w-full px-6 py-8 flex justify-center items-center">
        <div className={`relative w-full max-w-7xl mx-auto overflow-hidden rounded-[2rem] transition-all duration-700 ${
            isColorful ? "shadow-2xl shadow-pink-200/50" : "shadow-xl"
        }`}>
            <img 
                src="/img/postmoc.jpg" // Je postkaart afbeelding
                alt="Postkaart Manifest & Illustratie"
                
                /* max-h-[70vh]: Zorgt dat de foto nooit hoger is dan 70% van het scherm.
                   w-auto: Zorgt dat de breedte mee schaalt.
                   mx-auto: Centreert de afbeelding.
                */
                className="w-full max-h-[75vh] object-contain mx-auto block transition-transform duration-700 hover:scale-[1.02]" 
            />
            
            {/* Overlay label: Iets kleiner gemaakt voor betere verhoudingen */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full border border-slate-100 shadow-sm">
                <p className={`text-[10px] font-black uppercase tracking-[0.2em] ${
                    isColorful ? "text-fuchsia-600" : "text-slate-900"
                }`}>
                    Postkaart Manifest & Illustratie
                </p>
            </div>
        </div>
      </section>

      {/* 3. ONDERSTE SECTIE: KLEURENPALET & EXTRA INFO */}
      <section className="max-w-7xl mx-auto py-24 px-6 border-t border-slate-100 dark:border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Kleurenpalet */}
          <div className="lg:col-span-5">
             <div className={`p-8 rounded-[2rem] text-white shadow-xl transition-colors duration-500 ${
              isColorful ? "bg-[#2D2D2D] border border-white/10" : "bg-slate-900"
            }`}>
              <h3 className={`uppercase tracking-[0.2em] text-[10px] mb-8 ${
                isColorful ? "text-[#E390C0]" : "text-slate-400"
              }`}>Visueel Palet</h3>
              <div className="space-y-4">
                {[
                  { color: PROJECT_COLORS.primary, name: "Hot Pink" },
                  { color: PROJECT_COLORS.background, name: "Orchid Pink" },
                  { color: PROJECT_COLORS.accent, name: "Lime Yellow" },
                  { color: PROJECT_COLORS.text, name: "Charcoal" },
                ].map((item) => (
                  <div key={item.color} className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-full border border-white/10" style={{ backgroundColor: item.color }} />
                      <span className="text-sm font-bold">{item.name}</span>
                    </div>
                    <span className="text-[10px] opacity-40 font-mono uppercase">{item.color}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Extra info blokken */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={`p-8 rounded-3xl border transition-colors duration-500 ${
              isColorful ? "bg-pink-50/50 dark:bg-pink-900/10 border-pink-100" : "bg-slate-50 dark:bg-slate-800/20 border-slate-100"
            }`}>
              <h3 className={`uppercase text-xs mb-3 tracking-widest font-black ${isColorful ? "text-[#F15298]" : ""}`}>Data Visualisatie</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Persoonlijke statistieken en eigenschappen omgezet in heldere, sprekende illustraties die mijn identiteit tonen.</p>
            </div>
            <div className={`p-8 rounded-3xl border transition-colors duration-500 ${
              isColorful ? "bg-lime-50/50 dark:bg-lime-900/10 border-lime-100" : "bg-slate-50 dark:bg-slate-800/20 border-slate-100"
            }`}>
              <h3 className={`uppercase text-xs mb-3 tracking-widest font-black ${isColorful ? "text-[#D9E858]" : ""}`}>Het Manifest</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">De postkaart fungeert als tastbaar visitekaartje: waar sta ik voor als vormgever?</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 text-center">
        <Link href="/project" className={`text-xs font-black uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity ${isColorful ? "hover:text-[#F15298]" : ""}`}>
          ← Terug naar alle projecten
        </Link>
      </footer>
    </div>
  )
}