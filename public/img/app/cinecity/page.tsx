"use client"

import React, { useState, useEffect } from "react"
import Link from 'next/link'
import { useStyle } from "@/components/ThemeProvider"

export default function CinecityPage() {
  const styleContext = useStyle()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isColorful = styleContext?.style === "colorful"

  const PROJECT_COLORS = {
    primary: "#8C0B18", // Het bordeaux-rood uit je palet
    accent: "#4C8DAA",  // Het staalblauw uit je palet
    dark: "#1A1A1A"     // Donkere basis voor contrast
  }

  const projecten = [
    { id: 1, titel: "Brand Identity", img: "/img/cinecity1.png" },
    { id: 2, titel: "Poster Design", img: "/img/comingsoon.png" },
    { id: 3, titel: "UX/UI Design", img: "/img/cinecity3.png" },
    { id: 4, titel: "Motion Graphics", img: "/img/cinecity4.mp4" },
    { id: 5, titel: "Editorial Design", img: "/img/cinecity5.jpg" },
    { id: 6, titel: "Poster Design", img: "/img/cinecity6.png" },
    { id: 7, titel: "Merchandise concept", img: "/img/extravoorstel.png" }, // Gefixt voor Hydration Error
  ]

  if (!mounted) return null

  return (
    <div className={`w-full min-h-screen transition-all duration-700 ${
      isColorful ? "bg-[#fafafa] dark:bg-[#050505]" : "bg-white dark:bg-slate-950"
    }`}>
      
      {/* 1. HERO SECTIE */}
      <section className="pt-32 pb-12 px-6 max-w-7xl mx-auto">
        <span className={`text-[10px] font-black uppercase tracking-[0.4em] mb-4 block ${
          isColorful ? "text-fuchsia-500" : "text-slate-400"
        }`}>
          Branding • UX • Motion
        </span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-16 italic uppercase dark:text-white">
          Cine<span className={isColorful ? "text-fuchsia-500" : "text-indigo-500"}>city</span>
        </h1>

        {/* 2. TOP SECTION: HOOFDBEELD & BESCHRIJVING */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-24">
          <div className="lg:col-span-7">
            <div className={`p-3 rounded-[2.5rem] shadow-2xl border transition-all ${
              isColorful ? "bg-fuchsia-50 border-fuchsia-100" : "bg-slate-50 border-slate-100"
            }`}>
               <img
                src="/img/cinecity1.png"
                alt="Cinecity Brand Identity"
                className="w-full aspect-video object-cover rounded-[2rem]"
              />
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <h2 className={`text-3xl tracking-tight text-slate-950 dark:text-white ${
              isColorful ? "font-black" : "font-semibold"
            }`}>De Merkgedachte</h2>
            <p className={`text-slate-600 dark:text-slate-400 leading-relaxed text-xl ${
              isColorful ? "font-normal" : "font-light"
            }`}>
              Voor het fictieve filmfestival Cinecity ontwikkelde ik een volledige cross-mediale branding met het thema 'Coming of Age'. Het concept is gebaseerd op de zoektocht van jongeren naar hun eigen identiteit. Het doolhof-motief in het ontwerp symboliseert de weg die zij bewandelen: een pad van keuzes maken, verdwalen en jezelf uiteindelijk vinden
            </p>
            <div className={`h-1 w-20 ${isColorful ? "bg-fuchsia-500" : "bg-indigo-500"}`} />
          </div>
        </div>
      </section>

      {/* 3. DETAILS & KLEURENPALET */}
      <section className="max-w-7xl mx-auto py-24 px-6 border-t border-slate-100 dark:border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Kleurenpalet (Links) */}
          <div className="lg:col-span-5">
             <div className={`p-8 rounded-[2rem] text-white shadow-xl transition-colors duration-500 ${
              isColorful ? "bg-slate-950 border border-white/10" : "bg-indigo-900"
            }`}>
              <h3 className={`uppercase tracking-[0.2em] text-[10px] mb-8 opacity-60`}>Visueel Palet</h3>
              <div className="space-y-4">
                {[
                  { color: PROJECT_COLORS.primary, name: "Bordeaux Rood" },
                  { color: PROJECT_COLORS.accent, name: "Staalblauw" },
                  { color: "#FFFFFF", name: "Helder Wit" },
                  { color: PROJECT_COLORS.dark, name: "Deep Charcoal" },
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

          {/* Beschrijving Blokken (Rechts) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={`p-8 rounded-3xl border transition-colors duration-500 ${
              isColorful ? "bg-fuchsia-50/50 border-fuchsia-100" : "bg-slate-50 border-slate-100 dark:bg-slate-900/50"
            }`}>
              <h3 className="uppercase text-xs mb-3 tracking-widest font-black">Het Concept</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">De stad zelf wordt het decor, waarbij contrasten tussen licht en duisternis de visuele kern vormen.</p>
            </div>
            <div className={`p-8 rounded-3xl border transition-colors duration-500 ${
              isColorful ? "bg-indigo-50/50 border-indigo-100" : "bg-slate-50 border-slate-100 dark:bg-slate-900/50"
            }`}>
              <h3 className="uppercase text-xs mb-3 tracking-widest font-black">Aanpak</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Een cross-mediale benadering van een tactiel programmaboekje tot dynamische motion graphics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WORK GRID */}
      <section className="max-w-7xl mx-auto py-24 px-6">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projecten.map((project) => (
              <div key={project.id} className="group space-y-4">
                <div className="aspect-video rounded-[2rem] overflow-hidden bg-slate-100 border border-slate-200">
                  {project.img.endsWith('.mp4') ? (
                    <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                      <source src={project.img} type="video/mp4" />
                    </video>
                  ) : (
                    <img src={project.img} alt={project.titel} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                  )}
                </div>
                <div className="flex justify-between items-center px-2">
                  <span className="font-bold uppercase text-sm tracking-widest">{project.titel}</span>
                  <span className="opacity-30 font-mono text-xs">0{project.id}</span>
                </div>
              </div>
            ))}
         </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 text-center border-t border-slate-100 dark:border-white/5">
        <Link href="/project" className="text-xs font-black uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">
          ← Terug naar alle projecten
        </Link>
      </footer>
    </div>
  )
}