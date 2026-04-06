"use client"

import { useState, useEffect } from "react"

export default function SurveyPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const alreadySeen = sessionStorage.getItem("surveyDismissed")
    if (!alreadySeen) {
      const timer = setTimeout(() => setIsOpen(true), 10000)
      return () => clearTimeout(timer)
    } else {
      setIsDismissed(true)
    }
  }, [])

  const handleDismiss = () => {
    setIsOpen(false)
    setIsDismissed(true)
    sessionStorage.setItem("surveyDismissed", "true")
  }

  return (
    <>
      {isDismissed && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-[199] bg-indigo-600 text-white text-xs font-bold px-4 py-3 rounded-full shadow-lg hover:bg-indigo-700 transition-all"
        >
          ✨ Enquête
        </button>
      )}

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-[200] bg-black/40 backdrop-blur-sm"
            onClick={handleDismiss}
          />
          <div className="fixed z-[201] bottom-6 right-6 md:bottom-10 md:right-10 w-[calc(100vw-3rem)] max-w-md rounded-[2rem] shadow-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
            <div className="h-2 w-full bg-indigo-600 dark:bg-indigo-500" />
            <div className="p-8">
              <button
                onClick={handleDismiss}
                className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="mb-5">
                <span className="text-3xl">✨</span>
                <h2 className="mt-2 text-xl font-semibold text-indigo-950 dark:text-white leading-snug">
                  Wat vind jij van mijn portfolio?
                </h2>
              </div>

              <p className="text-sm font-light text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                Ik ben <span className="font-medium text-indigo-950 dark:text-white">Joy Bevers</span>, grafisch & visual designer, en ik ben benieuwd naar jouw eerlijke mening over mijn website. Kies hieronder welke enquête je wilt invullen, het duurt slechts 2 minuutjes!
              </p>

              {/* ↓ wrapper div toegevoegd ↓ */}
              <div className="flex flex-col gap-3">

                {/* Enquête 1 — Portfolio-evaluatie */}
                
                 <a href="https://docs.google.com/forms/d/e/1FAIpQLSfDeFxnEZiLfrXYXqeUbC6bfqYHwLNv01s0OAzmMy2jevy0yA/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-indigo-200 dark:hover:border-indigo-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 transition-all duration-200 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-indigo-100 dark:bg-indigo-950 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-sm font-medium text-indigo-950 dark:text-white">Evaluatie van mijn portfolio</p>
                    <p className="text-xs text-slate-400 dark:text-slate-500">Jouw algemene mening over mijn website</p>
                  </div>
                  <svg className="w-4 h-4 text-slate-300 group-hover:text-indigo-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                {/* Enquête 2 — Navigatie */}
                
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSd09Av10RnCfssRfeRqFEwBP2nVVVmBLa7fMlWTwE5CNVsIXw/viewform?usp=publish-editor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-emerald-200 dark:hover:border-emerald-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-all duration-200 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6h16M4 12h10M4 18h7" />
                    </svg>
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-sm font-medium text-indigo-950 dark:text-white">Navigatie van mijn portfolio</p>
                    <p className="text-xs text-slate-400 dark:text-slate-500">Vind jij alles makkelijk terug?</p>
                  </div>
                  <svg className="w-4 h-4 text-slate-300 group-hover:text-emerald-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                {/* Misschien later knop */}
                <button
                  onClick={handleDismiss}
                  className="w-full py-3 px-6 rounded-xl text-sm border-2 border-slate-100 dark:border-slate-800 text-slate-400 dark:text-slate-500 font-medium hover:border-slate-200 transition-all duration-300"
                >
                  Misschien later
                </button>

              </div>
              {/* ↑ einde wrapper div ↑ */}

            </div>
          </div>
        </>
      )}
    </>
  )
}