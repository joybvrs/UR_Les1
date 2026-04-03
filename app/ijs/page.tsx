"use client"

import React from "react"
import Link from 'next/link'
import { useStyle } from "@/components/ThemeProvider"

const PROJECT_DATA = {
  title: "Lemon Mint Tea",
  subtitle: "Brand Design Concept",
  description: "Voor deze opdracht ontwikkelde ik een visueel symbool voor een nieuwe ijssmaak: Lemon Mint Tea Sorbet. Vanuit het archetype 'Innocent' heb ik gezocht naar een vormtaal die puurheid, frisheid en eenvoud uitstraalt. Het ontwerp weerspiegelt de natuurlijke essentie van de ingrediënten zonder overbodige ruis.e keuze voor de smaak Lemon Mint Tea Sorbet is voortgekomen uit het verlangen naar een fris gevoel, vergelijkbaar met een warme zomerdag. Hierbij sluit het merkarchetype 'Innocent' perfect aan, omdat deze smaak uitnodigt tot dromen over vakantie en puurheid.",
  mainImage: "/img/mockupijs.png",
  details: {
    archetype: "Innocent",
    category: "Packaging Design",
    target: "Families & Zomergenieters",
  },
  colors: [
    { color: "#FFD700", name: "Citroengeel" },
    { color: "#FF8C00", name: "Zonne-oranje" },
    { color: "#32CD32", name: "Muntgroen" },
  ],
  assets: {
    positive: "/img/logopositief.png",
    negative: "[Afbeelding Symbool Negatief]" 
  }
}

export default function ProjectPage() {
  const styleContext = useStyle();
  const isColorful = styleContext ? styleContext.style === "colorful" : true;

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isColorful ? "bg-white text-slate-900" : "bg-slate-950 text-white"
    }`}>
      
      {/* 1. HERO SECTIE: COMPACT & VERTICAAL */}
      <section className="pt-24 pb-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          
          {/* Tekst kant */}
          <div className="flex-1">
            <span className={`text-[10px] uppercase tracking-[0.4em] font-black ${isColorful ? "text-fuchsia-500" : "text-indigo-500"}`}>
              {PROJECT_DATA.subtitle}
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mt-2 mb-6 uppercase italic leading-[0.9]">
              {PROJECT_DATA.title}
            </h1>
            <p className="text-lg opacity-70 max-w-md hidden md:block leading-relaxed">
              {PROJECT_DATA.description}
            </p>
          </div>
          
          {/* Afbeelding kant: Verticale focus die op het scherm past */}
          <div className="w-full max-w-[380px]"> 
            <div className={`relative aspect-[3/4] rounded-[2.5rem] overflow-hidden border shadow-2xl transition-all duration-700 ${
              isColorful ? "border-fuchsia-100 shadow-fuchsia-100/20" : "border-slate-800 shadow-black/40"
            }`}>
              <img 
                src={PROJECT_DATA.mainImage} 
                alt={PROJECT_DATA.title} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. INFO SECTIE: QUICK FACTS */}
      <section className={`py-16 px-6 ${isColorful ? "bg-slate-50" : "bg-slate-900/50"}`}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-black mb-4 tracking-tight">De Merkgedachte</h2>
            <p className="text-lg opacity-70 font-light italic">
              "Vertaald naar een fris gevoel van een warme zomerdag."
            </p>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
             <div className="p-4 rounded-2xl border border-black/5 dark:border-white/5">
                <p className="text-[10px] uppercase font-bold opacity-40">Archetype</p>
                <p className="font-bold">{PROJECT_DATA.details.archetype}</p>
             </div>
             <div className="p-4 rounded-2xl border border-black/5 dark:border-white/5">
                <p className="text-[10px] uppercase font-bold opacity-40">Doelgroep</p>
                <p className="font-bold">{PROJECT_DATA.details.target}</p>
             </div>
          </div>
        </div>
      </section>

      {/* 3. DETAILS SECTIE: KLEUREN & LOGO'S COMPACT */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Kleurenpalet */}
          <div className={`p-8 rounded-[2.5rem] ${isColorful ? "bg-indigo-950 text-white" : "bg-slate-900"}`}>
            <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-8 opacity-60">Visueel Palet</h3>
            <div className="flex flex-wrap gap-6">
              {PROJECT_DATA.colors.map((item) => (
                <div key={item.color} className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 rounded-full border-2 border-white/10" style={{ backgroundColor: item.color }} />
                  <p className="text-[10px] font-bold opacity-70">{item.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Logo's kleiner en naast elkaar */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <div className="aspect-square rounded-[2rem] bg-white border border-slate-100 flex items-center justify-center p-10">
                <img src={PROJECT_DATA.assets.positive} alt="Logo" className="max-w-full h-auto object-contain" />
              </div>
              <p className="text-[9px] text-center uppercase font-bold opacity-30">Positief</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="aspect-square rounded-[2rem] bg-slate-900 flex items-center justify-center p-10 text-[10px] text-white/20 italic">
                {PROJECT_DATA.assets.negative.startsWith('/') ? <img src={PROJECT_DATA.assets.negative} alt="Logo" className="max-w-full h-auto object-contain" /> : "Negatief"}
              </div>
              <p className="text-[9px] text-center uppercase font-bold opacity-30">Negatief</p>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 text-center border-t border-black/5 dark:border-white/5">
        <Link href="/project" className="text-[10px] font-black uppercase tracking-[0.3em] hover:opacity-50 transition-all">
          ← Terug naar alle projecten
        </Link>
      </footer>
    </div>
  )
}