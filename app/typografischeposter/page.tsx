"use client"

import Link from 'next/link'
import { useStyle } from "@/components/ThemeProvider"

export default function TypografischeposterProjectPage() {
  const { style } = useStyle()
  const isColorful = style === "colorful"

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-indigo-950 dark:text-white font-sans transition-colors duration-500">

      {/* Hero Sectie */}
      <section className={`py-16 md:py-24 px-6 border-b transition-colors duration-500 ${
        isColorful
          ? "bg-red-50 dark:bg-slate-800/40 border-red-100 dark:border-slate-700"
          : "bg-slate-50 dark:bg-slate-800/20 border-slate-100 dark:border-slate-800"
      }`}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`text-5xl md:text-7xl tracking-tighter mb-4 italic uppercase text-indigo-950 dark:text-white ${
            isColorful ? "font-black" : "font-semibold"
          }`}>
           Typografische poster
            <span className={isColorful ? "text-red-500 dark:text-yellow-400" : "text-indigo-500 dark:text-indigo-400"}>
              
            </span>
          </h1>
          <p className={`text-xs uppercase tracking-[0.3em] mb-12 ${
            isColorful
              ? "font-bold text-red-400 dark:text-yellow-500"
              : "font-medium text-indigo-400 dark:text-indigo-500"
          }`}>
            Brand Design Concept • Verpakkingsontwerp
          </p>

          <div className={`bg-white p-3 rounded-[2.5rem] shadow-2xl overflow-hidden border transition-colors duration-500 ${
            isColorful
              ? "shadow-red-200/50 dark:shadow-slate-900 border-red-100 dark:border-slate-700"
              : "shadow-slate-100 dark:shadow-slate-900 border-slate-100 dark:border-slate-800"
          }`}>
            <div className="aspect-[4/5] md:aspect-video bg-white flex items-center justify-center text-slate-500 font-medium italic">
              <img src="/img/poster.jpg" alt="Typografische poster" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Sectie */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Linker kolom */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className={`text-3xl mb-6 tracking-tight text-indigo-950 dark:text-white ${
                isColorful ? "font-black" : "font-semibold"
              }`}>De Merkgedachte</h2>
              <p className={`text-slate-600 dark:text-slate-400 leading-relaxed text-lg ${
                isColorful ? "font-normal" : "font-light"
              }`}>
                Dit project is een herontwerp van de iconische{" "}
                <strong className={`text-indigo-950 dark:text-white ${isColorful ? "font-bold" : "font-medium"}`}>
                  Kellogg's verpakking
                </strong>{" "}
                met een moderne kijk op het klassieke merk. Het ontwerp behoudt de herkenbaarheid
                van het origineel, maar ademt een frisse en hedendaagse uitstraling.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className={`p-6 rounded-3xl border transition-colors duration-500 ${
                isColorful
                  ? "bg-red-50 dark:bg-slate-800/40 border-red-100 dark:border-slate-700"
                  : "bg-slate-50 dark:bg-slate-800/20 border-slate-100 dark:border-slate-800"
              }`}>
                <h3 className={`uppercase text-xs mb-3 tracking-widest ${
                  isColorful
                    ? "font-black text-red-500 dark:text-yellow-400"
                    : "font-semibold text-indigo-500 dark:text-indigo-400"
                }`}>Het Concept</h3>
                <p className={`text-sm text-slate-600 dark:text-slate-400 leading-relaxed ${
                  isColorful ? "font-normal" : "font-light"
                }`}>
                  Het ontwerp speelt met de krachtige rode kleur van Kellogg's als basis,
                  aangevuld met warme gele en oranje accenten die energie en ochtendoptimisme uitstralen.
                </p>
              </div>
              <div className={`p-6 rounded-3xl border transition-colors duration-500 ${
                isColorful
                  ? "bg-yellow-50 dark:bg-slate-800/40 border-yellow-100 dark:border-slate-700"
                  : "bg-slate-50 dark:bg-slate-800/20 border-slate-100 dark:border-slate-800"
              }`}>
                <h3 className={`uppercase text-xs mb-3 tracking-widest ${
                  isColorful
                    ? "font-black text-yellow-500 dark:text-orange-400"
                    : "font-semibold text-indigo-500 dark:text-indigo-400"
                }`}>Doelgroep</h3>
                <p className={`text-sm text-slate-600 dark:text-slate-400 leading-relaxed ${
                  isColorful ? "font-normal" : "font-light"
                }`}>
                  Het concept richt zich op{" "}
                  <strong className={`text-indigo-950 dark:text-white ${isColorful ? "font-bold" : "font-medium"}`}>
                    gezinnen en jonge volwassenen
                  </strong>{" "}
                  die op zoek zijn naar een vertrouwd maar vernieuwd ontbijtproduct.
                </p>
              </div>
            </div>
          </div>

          {/* Rechter kolom: Kleurenpalet */}
          <div className="lg:col-span-5 space-y-6">
            <div className={`p-8 rounded-[2rem] text-white shadow-xl transition-colors duration-500 ${
              isColorful
                ? "bg-indigo-950 dark:bg-slate-800/60 dark:border dark:border-slate-700"
                : "bg-indigo-600 dark:bg-slate-800/60 dark:border dark:border-slate-700"
            }`}>
              <h3 className={`uppercase tracking-[0.2em] text-[10px] mb-8 ${
                isColorful ? "font-bold text-red-300 dark:text-yellow-400" : "font-semibold text-indigo-200 dark:text-indigo-400"
              }`}>Visueel Palet</h3>
              <div className="space-y-4">
                {[
                  { color: "#E3001B", name: "Kellogg's Rood" },
                  { color: "#FFD700", name: "Zonnegeel" },
                  { color: "#FF6B00", name: "Warm Oranje" },
                  { color: "#FFFFFF", name: "Zuiver Wit" },
                ].map((item) => (
                  <div key={item.color} className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full border-2 border-white/20" style={{ backgroundColor: item.color }} />
                      <span className={isColorful ? "font-bold" : "font-medium"}>{item.name}</span>
                    </div>
                    <span className="text-[10px] text-white/40 font-mono">{item.color}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer navigatie */}
      <footer className={`py-20 text-center border-t transition-colors duration-500 ${
        isColorful
          ? "border-red-100 dark:border-slate-700"
          : "border-slate-100 dark:border-slate-800"
      }`}>
        <Link
          href="/project"
          className={`inline-flex items-center space-x-3 uppercase text-xs tracking-widest transition-colors ${
            isColorful
              ? "font-bold text-indigo-950 dark:text-slate-300 hover:text-red-500 dark:hover:text-yellow-400"
              : "font-medium text-indigo-500 dark:text-indigo-400 hover:text-indigo-950 dark:hover:text-white"
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Terug naar alle projecten</span>
        </Link>
      </footer>
    </div>
  )
}