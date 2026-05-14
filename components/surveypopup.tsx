"use client"

import { useState, useEffect } from "react"
import { useStyle } from "@/components/ThemeProvider"

const SURVEY_URL = "https://docs.google.com/forms/d/e/1FAIpQLSet54L3uWL8iZi6bKqyGgTpzK3lki5NTRFOmUMRSa4AtjFgBg/viewform?embedded=true"

function CloseIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

export default function SurveyPopup() {
  const [state, setState] = useState<"closed" | "open" | "minimized">("closed")
  const { style } = useStyle()
  const isColorful = style === "colorful"

  useEffect(() => {
    const alreadyDismissed = sessionStorage.getItem("surveyDismissed")
    if (!alreadyDismissed) {
      const timer = setTimeout(() => setState("open"), 10000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleDismiss = () => {
    setState("closed")
    sessionStorage.setItem("surveyDismissed", "true")
  }

  return (
    <>
      {/* Knop rechtsonder — volledig gesloten */}
      {state === "closed" && (
        <button
          onClick={() => setState("open")}
          className={`fixed bottom-6 right-6 z-[199] flex flex-col items-start px-6 py-4 rounded-2xl shadow-xl transition-all hover:scale-105 ${
            isColorful
              ? "bg-gradient-to-r from-pink-500 to-orange-400 text-white shadow-pink-500/30"
              : "bg-slate-900 dark:bg-white text-white dark:text-slate-900"
          }`}
        >
          <span className="text-sm font-black uppercase tracking-[0.15em]">Enquête</span>
          <span className="text-[10px] font-medium opacity-80 mt-0.5 normal-case tracking-normal">Wat vind jij van mijn portfolio?</span>
        </button>
      )}

      {/* Tab-knop — geminimaliseerd */}
      {state === "minimized" && (
        <button
          onClick={() => setState("open")}
          className={`fixed top-1/2 -translate-y-1/2 right-0 z-[201] text-xs font-black uppercase tracking-widest py-4 px-3 rounded-l-2xl shadow-xl transition-all hover:pr-4 ${
            isColorful
              ? "bg-gradient-to-b from-pink-500 to-orange-400 text-white"
              : "bg-slate-900 dark:bg-white text-white dark:text-slate-900"
          }`}
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          Enquête
        </button>
      )}

      {/* Side drawer */}
      <div className={`fixed top-0 right-0 z-[200] h-full w-full max-w-lg bg-white dark:bg-slate-900 border-l border-slate-100 dark:border-slate-800 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
        state === "open" ? "translate-x-0" : "translate-x-full"
      }`}>

        {/* Gekleurde topbalk */}
        <div className={`h-1.5 w-full flex-shrink-0 ${
          isColorful ? "bg-gradient-to-r from-pink-500 via-pink-400 to-orange-400" : "bg-slate-900 dark:bg-white"
        }`} />

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex-shrink-0">
          <div>
            <p className={`text-[9px] font-black uppercase tracking-[0.3em] ${isColorful ? "text-pink-500" : "text-slate-400"}`}>
              Jouw mening
            </p>
            <h2 className="text-lg font-black tracking-tighter text-slate-900 dark:text-white mt-0.5">
              Wat vind jij van mijn portfolio?
            </h2>
          </div>
          <div className="flex items-center gap-1 ml-4 flex-shrink-0">
            <button
              onClick={() => setState("minimized")}
              className="w-8 h-8 flex items-center justify-center rounded-full text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-xs font-black"
            >
              —
            </button>
            <button
              onClick={handleDismiss}
              className="w-8 h-8 flex items-center justify-center rounded-full text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <CloseIcon />
            </button>
          </div>
        </div>

        {/* Embedded form */}
        <div className="flex-1 overflow-hidden flex flex-col">
          <p className="px-6 py-4 text-xs text-slate-400 dark:text-slate-500 leading-relaxed border-b border-slate-100 dark:border-slate-800">
            Ik ben benieuwd naar jouw eerlijke feedback. Het invullen duurt slechts 2 minuten.
          </p>
          <div className="flex-1 overflow-hidden">
          <iframe
            src={SURVEY_URL}
            className="w-full h-full border-0"
            title="Enquête"
          >
            Laden…
          </iframe>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800 flex-shrink-0">
          <button
            onClick={handleDismiss}
            className={`w-full py-3.5 px-6 rounded-2xl text-sm font-black uppercase tracking-[0.15em] transition-all hover:scale-105 ${
              isColorful
                ? "bg-gradient-to-r from-pink-500 to-orange-400 text-white shadow-lg shadow-pink-500/20"
                : "bg-slate-900 dark:bg-white text-white dark:text-slate-900"
            }`}
          >
            Enquête ingevuld ✓
          </button>
        </div>
      </div>
    </>
  )
}
