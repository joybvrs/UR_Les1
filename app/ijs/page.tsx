"use client"

import Link from 'next/link'
import { useStyle } from "@/components/ThemeProvider"

export default function IjsProjectPage() {
  const { style } = useStyle()
  const isColorful = style === "colorful"

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-indigo-950 dark:text-white font-sans transition-colors duration-500">

      {/* Hero Sectie */}
      <section className={`py-16 md:py-24 px-6 border-b transition-colors duration-500 ${
        isColorful
          ? "bg-fuchsia-50 dark:bg-slate-800/40 border-fuchsia-100 dark:border-slate-700"
          : "bg-slate-50 dark:bg-slate-800/20 border-slate-100 dark:border-slate-800"
      }`}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`text-5xl md:text-7xl tracking-tighter mb-4 italic uppercase text-indigo-950 dark:text-white ${
            isColorful ? "font-black" : "font-semibold"
          }`}>
            Lemon Mint{" "}
            <span className={isColorful ? "text-fuchsia-500 dark:text-cyan-400" : "text-indigo-500 dark:text-indigo-400"}>
              Tea
            </span>
          </h1>
          <p className={`text-xs uppercase tracking-[0.3em] mb-12 ${
            isColorful
              ? "font-bold text-fuchsia-400 dark:text-cyan-500"
              : "font-medium text-indigo-400 dark:text-indigo-500"
          }`}>
            Brand Design Concept • Archetype: Innocent
          </p>

          <div className={`bg-white p-3 rounded-[2.5rem] shadow-2xl overflow-hidden border transition-colors duration-500 ${
            isColorful
              ? "shadow-fuchsia-200/50 dark:shadow-slate-900 border-fuchsia-100 dark:border-slate-700"
              : "shadow-slate-100 dark:shadow-slate-900 border-slate-100 dark:border-slate-800"
          }`}>
            <div className="aspect-[4/5] md:aspect-video bg-white flex items-center justify-center text-slate-500 font-medium italic">
              <img src="/img/ijs.png" alt="Lemon Mint Tea Sorbet verpakking" />
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
                De keuze voor de smaak{" "}
                <strong className={`text-indigo-950 dark:text-white ${isColorful ? "font-bold" : "font-medium"}`}>
                  Lemon Mint Tea Sorbet
                </strong>{" "}
                is voortgekomen uit het verlangen naar een fris gevoel, vergelijkbaar met een warme zomerdag.
                Hierbij sluit het merkarchetype{" "}
                <strong className={`text-indigo-950 dark:text-white ${isColorful ? "font-bold" : "font-medium"}`}>
                  'Innocent'
                </strong>{" "}
                perfect aan, omdat deze smaak uitnodigt tot dromen over vakantie en puurheid.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className={`p-6 rounded-3xl border transition-colors duration-500 ${
                isColorful
                  ? "bg-fuchsia-50 dark:bg-slate-800/40 border-fuchsia-100 dark:border-slate-700"
                  : "bg-slate-50 dark:bg-slate-800/20 border-slate-100 dark:border-slate-800"
              }`}>
                <h3 className={`uppercase text-xs mb-3 tracking-widest ${
                  isColorful
                    ? "font-black text-fuchsia-500 dark:text-cyan-400"
                    : "font-semibold text-indigo-500 dark:text-indigo-400"
                }`}>Het Symbool</h3>
                <p className={`text-sm text-slate-600 dark:text-slate-400 leading-relaxed ${
                  isColorful ? "font-normal" : "font-light"
                }`}>
                  Het logo combineert een halve citroen, die een ondergaande zon voorstelt, met twee muntblaadjes.
                  Deze blaadjes vormen samen een subtiele snor, een knipoog naar de uitvinder van de thee.
                </p>
              </div>
              <div className={`p-6 rounded-3xl border transition-colors duration-500 ${
                isColorful
                  ? "bg-indigo-50 dark:bg-slate-800/40 border-indigo-100 dark:border-slate-700"
                  : "bg-slate-50 dark:bg-slate-800/20 border-slate-100 dark:border-slate-800"
              }`}>
                <h3 className={`uppercase text-xs mb-3 tracking-widest ${
                  isColorful
                    ? "font-black text-indigo-500 dark:text-blue-400"
                    : "font-semibold text-indigo-500 dark:text-indigo-400"
                }`}>Doelgroep</h3>
                <p className={`text-sm text-slate-600 dark:text-slate-400 leading-relaxed ${
                  isColorful ? "font-normal" : "font-light"
                }`}>
                  Door de frisse en fruitige smaak is dit concept uitermate geschikt voor{" "}
                  <strong className={`text-indigo-950 dark:text-white ${isColorful ? "font-bold" : "font-medium"}`}>
                    families
                  </strong>{" "}
                  die samen willen genieten van een zomers moment.
                </p>
              </div>
            </div>
          </div>

          {/* Rechter kolom: Kleuren & Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className={`p-8 rounded-[2rem] text-white shadow-xl transition-colors duration-500 ${
              isColorful
                ? "bg-indigo-950 dark:bg-slate-800/60 dark:border dark:border-slate-700"
                : "bg-indigo-600 dark:bg-slate-800/60 dark:border dark:border-slate-700"
            }`}>
              <h3 className={`uppercase tracking-[0.2em] text-[10px] mb-8 ${
                isColorful ? "font-bold text-fuchsia-300 dark:text-cyan-400" : "font-semibold text-indigo-200 dark:text-indigo-400"
              }`}>Visueel Palet</h3>
              <div className="space-y-4">
                {[
                  { color: "#FFD700", name: "Citroengeel" },
                  { color: "#FF8C00", name: "Zonne-oranje" },
                  { color: "#32CD32", name: "Muntgroen" },
                ].map((item) => (
                  <div key={item.color} className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full border-2 border-white/20" style={{ backgroundColor: item.color }}></div>
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

      {/* Logo Sectie */}
      <section className={`py-20 px-6 transition-colors duration-500 ${
        isColorful
          ? "bg-slate-50 dark:bg-slate-800/20"
          : "bg-slate-50/50 dark:bg-slate-800/10"
      }`}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className={`aspect-square rounded-3xl border flex items-center justify-center italic transition-colors duration-500 ${
                isColorful
                  ? "bg-white dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 text-slate-400 dark:text-slate-500"
                  : "bg-white dark:bg-slate-800/20 border-slate-100 dark:border-slate-800 text-slate-300 dark:text-slate-600"
              }`}>
                [Afbeelding Symbool Positief]
              </div>
              <p className={`text-center text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500 ${
                isColorful ? "font-bold" : "font-medium"
              }`}>Symbool Positief</p>
            </div>
            <div className="space-y-4">
              <div className={`aspect-square rounded-3xl border flex items-center justify-center italic transition-colors duration-500 ${
                isColorful
                  ? "bg-indigo-950 dark:bg-slate-900 dark:border-slate-700 text-white/20"
                  : "bg-indigo-600 dark:bg-slate-900 dark:border-slate-800 text-white/20"
              }`}>
                [Afbeelding Symbool Negatief]
              </div>
              <p className={`text-center text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500 ${
                isColorful ? "font-bold" : "font-medium"
              }`}>Symbool Negatief</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer navigatie */}
      <footer className={`py-20 text-center border-t transition-colors duration-500 ${
        isColorful
          ? "border-fuchsia-100 dark:border-slate-700"
          : "border-slate-100 dark:border-slate-800"
      }`}>
        <Link
          href="/projects"
          className={`inline-flex items-center space-x-3 uppercase text-xs tracking-widest transition-colors ${
            isColorful
              ? "font-bold text-indigo-950 dark:text-slate-300 hover:text-fuchsia-600 dark:hover:text-cyan-400"
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