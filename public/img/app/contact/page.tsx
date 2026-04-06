"use client"

import React, { useState } from 'react'
import { useStyle } from "@/components/ThemeProvider"

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const { style } = useStyle()
  const isColorful = style === "colorful"

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      alert("Bericht verzonden! 🎉")
    }, 1500)
  }

  return (
    <main className={`w-full min-h-screen py-24 px-6 md:px-16 transition-colors duration-500 ${
      isColorful
        ? "bg-gradient-to-br from-pink-50 via-white to-orange-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800"
        : "bg-white dark:bg-slate-900"
    }`}>

      {/* Titel sectie */}
      <div className="mb-16">
        <h1 className={`text-4xl md:text-6xl tracking-tighter ${
          isColorful
            ? "font-extrabold text-pink-500 dark:text-cyan-400"
            : "font-semibold text-indigo-600 dark:text-indigo-400"
        }`}>
          Contact
          <span className={isColorful ? "text-orange-400 dark:text-blue-400" : "text-indigo-400 dark:text-indigo-600"}>.</span>
        </h1>
        <p className={`text-lg text-slate-600 dark:text-slate-400 mt-3 italic ${
          isColorful ? "font-normal" : "font-light"
        }`}>
          Heb je een vraag? Stuur me een berichtje!
        </p>
      </div>

      {/* Twee kolommen layout */}
      <div className="flex flex-col md:flex-row gap-16 items-start">

        {/* Links: extra info */}
        <div className="flex-1 space-y-8">
          <div className={`p-8 rounded-[32px] border transition-all duration-500 ${
            isColorful
              ? "bg-pink-50/50 dark:bg-slate-800/40 border-pink-100 dark:border-slate-700"
              : "bg-slate-50 dark:bg-slate-800/20 border-slate-100 dark:border-slate-800"
          }`}>
            <h3 className={`text-2xl mb-2 ${
              isColorful
                ? "font-bold text-pink-500 dark:text-cyan-400"
                : "font-medium text-indigo-600 dark:text-indigo-400"
            }`}>Samenwerken?</h3>
            <p className={`text-sm text-slate-600 dark:text-slate-400 leading-relaxed ${
              isColorful ? "font-normal" : "font-light"
            }`}>
              Heb je een project in gedachten? Ik sta altijd open voor nieuwe samenwerkingen en creatieve uitdagingen.
            </p>
          </div>

          <div className={`p-8 rounded-[32px] border transition-all duration-500 ${
            isColorful
              ? "bg-orange-50/50 dark:bg-slate-800/40 border-orange-100 dark:border-slate-700"
              : "bg-slate-50 dark:bg-slate-800/20 border-slate-100 dark:border-slate-800"
          }`}>
            <h3 className={`text-2xl mb-2 ${
              isColorful
                ? "font-bold text-orange-500 dark:text-blue-400"
                : "font-medium text-indigo-600 dark:text-indigo-400"
            }`}>Reactietijd</h3>
            <p className={`text-sm text-slate-600 dark:text-slate-400 leading-relaxed ${
              isColorful ? "font-normal" : "font-light"
            }`}>
              Ik reageer doorgaans binnen 1-2 werkdagen. Voor dringende vragen kun je me ook bereiken via Instagram.
            </p>
          </div>
        </div>

        {/* Rechts: formulier */}
        <div className={`flex-1 w-full rounded-[2.5rem] p-8 md:p-12 shadow-2xl transition-all duration-500 ${
          isColorful
            ? "bg-gradient-to-br from-pink-500 via-orange-400 to-yellow-300 dark:bg-none dark:bg-slate-800/60 dark:border dark:border-slate-700 border-4 border-white dark:border-0 dark:shadow-slate-900"
            : "bg-slate-50 dark:bg-slate-800/20 border border-slate-100 dark:border-slate-800 shadow-slate-100 dark:shadow-slate-900"
        }`}>

          <form onSubmit={handleSubmit} className="space-y-6">

            <div>
              <label className={`block ml-1 mb-2 drop-shadow-sm ${
                isColorful
                  ? "font-bold text-white dark:text-cyan-400"
                  : "font-medium text-indigo-600 dark:text-indigo-400"
              }`}>Naam</label>
              <input
                required
                type="text"
                placeholder="Je naam"
                className={`w-full px-4 py-3 rounded-xl focus:outline-none transition-all ${
                  isColorful
                    ? "border border-white/30 dark:border-slate-600 bg-white/20 dark:bg-slate-700/60 text-white dark:text-white placeholder:text-white/60 dark:placeholder:text-slate-400 focus:ring-2 focus:ring-white dark:focus:ring-cyan-400"
                    : "border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-600"
                }`}
              />
            </div>

            <div>
              <label className={`block ml-1 mb-2 drop-shadow-sm ${
                isColorful
                  ? "font-bold text-white dark:text-cyan-400"
                  : "font-medium text-indigo-600 dark:text-indigo-400"
              }`}>E-mail</label>
              <input
                required
                type="email"
                placeholder="hallo@voorbeeld.nl"
                className={`w-full px-4 py-3 rounded-xl focus:outline-none transition-all ${
                  isColorful
                    ? "border border-white/30 dark:border-slate-600 bg-white/20 dark:bg-slate-700/60 text-white dark:text-white placeholder:text-white/60 dark:placeholder:text-slate-400 focus:ring-2 focus:ring-white dark:focus:ring-cyan-400"
                    : "border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-600"
                }`}
              />
            </div>

            <div>
              <label className={`block ml-1 mb-2 drop-shadow-sm ${
                isColorful
                  ? "font-bold text-white dark:text-cyan-400"
                  : "font-medium text-indigo-600 dark:text-indigo-400"
              }`}>Bericht</label>
              <textarea
                required
                rows={4}
                placeholder="Typ hier je bericht..."
                className={`w-full px-4 py-3 rounded-2xl focus:outline-none transition-all ${
                  isColorful
                    ? "border border-white/30 dark:border-slate-600 bg-white/20 dark:bg-slate-700/60 text-white dark:text-white placeholder:text-white/60 dark:placeholder:text-slate-400 focus:ring-2 focus:ring-white dark:focus:ring-cyan-400"
                    : "border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-600"
                }`}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4 rounded-full text-lg shadow-xl disabled:opacity-50 transition-all ${
                isColorful
                  ? "font-bold bg-white text-orange-500 hover:bg-indigo-950 hover:text-white dark:bg-cyan-400 dark:text-slate-900 dark:hover:bg-cyan-300"
                  : "font-medium bg-indigo-600 dark:bg-indigo-500 text-white hover:bg-indigo-700 dark:hover:bg-indigo-400"
              }`}
            >
              {loading ? "Verzenden..." : "Verstuur bericht ✨"}
            </button>

          </form>
        </div>

      </div>
    </main>
  )
}