"use client"

import React, { useState } from 'react'
import Link from 'next/link'
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
            <Link
              href="https://www.instagram.com/joy.desings/"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 mt-5 px-6 py-3 rounded-xl font-black text-xs uppercase tracking-[0.2em] transition-all hover:scale-105 ${
                isColorful
                  ? "bg-gradient-to-r from-pink-500 to-orange-400 text-white shadow-lg shadow-pink-500/20"
                  : "bg-slate-950 dark:bg-white text-white dark:text-slate-950"
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Volg mij op Instagram
            </Link>
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