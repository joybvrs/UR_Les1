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
    "/img/magazine4.png"
  ]

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % magazinePages.length)
  const prevPage = () => setCurrentPage((prev) => (prev - 1 + magazinePages.length) % magazinePages.length)

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-indigo-950 dark:text-white font-sans transition-colors duration-500">

      {/* Hero Sectie */}
      <section className={`py-16 px-6 border-b text-center transition-colors duration-500 ${
        isColorful
          ? "bg-fuchsia-50 dark:bg-slate-800/40 border-fuchsia-100 dark:border-slate-700"
          : "bg-slate-50 dark:bg-slate-800/20 border-slate-100 dark:border-slate-800"
      }`}>
        <h1 className={`text-5xl md:text-7xl tracking-tighter mb-4 text-indigo-950 dark:text-white ${
          isColorful ? "font-black" : "font-semibold"
        }`}>
          EMBER{" "}
          <span className={isColorful ? "text-fuchsia-500 dark:text-cyan-400" : "text-indigo-500 dark:text-indigo-400"}>
            EDITORIAL
          </span>
        </h1>
        <p className={`text-xs uppercase tracking-[0.3em] ${
          isColorful
            ? "font-bold text-fuchsia-400 dark:text-cyan-500"
            : "font-medium text-indigo-400 dark:text-indigo-500"
        }`}>
          Magazine Design • Print & Layout
        </p>
      </section>

      {/* Magazine Slider Sectie */}
      <section className={`py-12 md:py-20 px-6 transition-colors duration-500 ${
        isColorful
          ? "bg-slate-50 dark:bg-slate-800/20"
          : "bg-slate-50/50 dark:bg-slate-800/10"
      }`}>
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white dark:bg-slate-800 shadow-2xl dark:shadow-slate-900 rounded-sm overflow-hidden border border-slate-200 dark:border-slate-700 aspect-[1/1.414]">
            <img
              src={magazinePages[currentPage]}
              alt={`Magazine pagina ${currentPage + 1}`}
              className="w-full h-full object-contain transition-opacity duration-300"
            />

            {/* Navigatie Knoppen */}
            <button
              onClick={prevPage}
              className={`absolute left-4 top-1/2 -translate-y-1/2 backdrop-blur p-3 rounded-full shadow-lg transition-all ${
                isColorful
                  ? "bg-white/80 dark:bg-slate-700/80 hover:bg-fuchsia-500 dark:hover:bg-cyan-400 hover:text-white dark:hover:text-slate-900"
                  : "bg-white/80 dark:bg-slate-700/80 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500"
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextPage}
              className={`absolute right-4 top-1/2 -translate-y-1/2 backdrop-blur p-3 rounded-full shadow-lg transition-all ${
                isColorful
                  ? "bg-white/80 dark:bg-slate-700/80 hover:bg-fuchsia-500 dark:hover:bg-cyan-400 hover:text-white dark:hover:text-slate-900"
                  : "bg-white/80 dark:bg-slate-700/80 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500"
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Pagina Indicator */}
          <div className="mt-6 flex justify-center space-x-2">
            {magazinePages.map((_, idx) => (
              <div
                key={idx}
                className={`h-2 rounded-full transition-all ${
                  idx === currentPage
                    ? isColorful
                      ? "bg-fuchsia-500 dark:bg-cyan-400 w-6"
                      : "bg-indigo-500 dark:bg-indigo-400 w-6"
                    : "bg-slate-300 dark:bg-slate-600 w-2"
                }`}
              />
            ))}
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
              Voor de opdracht rond Ember Magazine kreeg ik de uitdaging om de bestaande stijl en lay-out kritisch te herwerken. Het doel was om het magazine beter af te stemmen op de doelgroep en de waarden waar het voor staat.

Tijdens dit proces analyseerde ik eerst de huidige visuele identiteit en structuur. Vervolgens paste ik elementen zoals typografie, kleurgebruik en compositie aan om een meer consistente en doelgerichte uitstraling te creëren. Hierbij hield ik steeds rekening met de beleving van de lezer en de boodschap die het magazine wil overbrengen.

Het eindresultaat is een vernieuwde lay-out die niet alleen visueel sterker is, maar ook beter aansluit bij de doelgroep en de kernwaarden van Ember Magazine.
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

      {/* Footer Navigatie */}
      <footer className={`py-20 text-center border-t transition-colors duration-500 ${
        isColorful
          ? "border-fuchsia-100 dark:border-slate-700"
          : "border-slate-100 dark:border-slate-800"
      }`}>
        <Link
          href="/projects"
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