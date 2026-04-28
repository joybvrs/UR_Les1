"use client"

import { useState, useEffect } from "react"
import { useStyle } from "@/components/ThemeProvider"

type Survey = {
  id: string
  label: string
  description: string
  url: string
}

const SURVEYS: Survey[] = [
  {
    id: "portfolio",
    label: "Evaluatie van mijn portfolio",
    description: "Jouw algemene mening over mijn website",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfDeFxnEZiLfrXYXqeUbC6bfqYHwLNv01s0OAzmMy2jevy0yA/viewform?embedded=true",
  },
  {
    id: "navigatie",
    label: "Navigatie van mijn portfolio",
    description: "Vind jij alles makkelijk terug?",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSd09Av10RnCfssRfeRqFEwBP2nVVVmBLa7fMlWTwE5CNVsIXw/viewform?embedded=true",
  },
]

function CloseIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

function ChevronLeft() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  )
}

function MinimizeIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  )
}

function SurveyChoice({
  surveys,
  completed,
  onSelect,
  onDismiss,
  onMinimize,
  isColorful,
}: {
  surveys: Survey[]
  completed: string[]
  onSelect: (id: string) => void
  onDismiss: () => void
  onMinimize: () => void
  isColorful: boolean
}) {
  const allDone = completed.length === surveys.length

  return (
    <div className="flex flex-col h-full">
      {/* Gekleurde topbalk */}
      <div className={`h-2 w-full flex-shrink-0 ${
        isColorful
          ? "bg-gradient-to-r from-pink-500 via-pink-400 to-orange-400"
          : "bg-slate-900 dark:bg-white"
      }`} />

      {/* Header */}
      <div className="p-8 pb-6 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-start justify-between">
          <div>
            <p className={`text-[10px] font-black uppercase tracking-[0.3em] mb-3 ${
              isColorful ? "text-pink-500" : "text-slate-400"
            }`}>
              Jouw mening
            </p>
            <h2 className="text-3xl font-black tracking-tighter text-slate-900 dark:text-white leading-tight">
              {allDone ? "Bedankt! 🎉" : "Wat vind jij\nvan mijn werk?"}
            </h2>
            {!allDone && (
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-3 leading-relaxed">
                Ik ben{" "}
                <span className="font-black text-slate-900 dark:text-white">Joy Bevers</span>
                , grafisch & visual designer. Het duurt slechts 2 minuutjes!
              </p>
            )}
            {allDone && (
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-3">
                Je hebt beide enquêtes ingevuld. Ik waardeer je tijd enorm!
              </p>
            )}
          </div>
          <div className="flex items-center gap-1 ml-4 flex-shrink-0">
            <button
              onClick={onMinimize}
              className="w-9 h-9 flex items-center justify-center rounded-full text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <MinimizeIcon />
            </button>
            <button
              onClick={onDismiss}
              className="w-9 h-9 flex items-center justify-center rounded-full text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Survey knoppen */}
      <div className="flex-1 overflow-y-auto p-8 pt-6 flex flex-col gap-4">
        {surveys.map((survey, i) => {
          const done = completed.includes(survey.id)
          const gradients = [
            "from-pink-500 to-orange-400",
            "from-violet-600 to-indigo-500",
          ]
          return (
            <button
              key={survey.id}
              onClick={() => { if (!done) onSelect(survey.id) }}
              disabled={done}
              className={`relative overflow-hidden flex items-center gap-5 p-6 rounded-[24px] text-left w-full transition-all duration-300 group ${
                done
                  ? "opacity-50 cursor-default bg-slate-50 dark:bg-slate-800/50"
                  : isColorful
                    ? "bg-white dark:bg-white/5 hover:scale-[1.02] shadow-sm hover:shadow-md border border-slate-100 dark:border-white/10"
                    : "bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
              }`}
            >
              {/* Kleurlijn links */}
              {!done && isColorful && (
                <div className={`absolute left-0 top-0 h-full w-1 rounded-l-[24px] bg-gradient-to-b ${gradients[i]}`} />
              )}

              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                done
                  ? "bg-emerald-100 dark:bg-emerald-900/30"
                  : isColorful
                    ? `bg-gradient-to-br ${gradients[i]}`
                    : "bg-slate-900 dark:bg-white"
              }`}>
                {done ? (
                  <span className="text-emerald-500"><CheckIcon /></span>
                ) : (
                  <span className="text-white dark:text-slate-900 text-lg font-black">{i + 1}</span>
                )}
              </div>

              <div className="flex-1">
                <p className="text-base font-black tracking-tighter text-slate-900 dark:text-white">
                  {survey.label}
                </p>
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-1 font-medium">
                  {done ? "Ingevuld — bedankt!" : survey.description}
                </p>
              </div>

              {!done && (
                <span className={`text-slate-300 group-hover:translate-x-1 transition-transform duration-200 ${
                  isColorful ? "group-hover:text-pink-400" : "group-hover:text-slate-900 dark:group-hover:text-white"
                }`}>
                  →
                </span>
              )}
            </button>
          )
        })}
      </div>

      {/* Footer */}
      <div className="p-8 pt-0">
        {allDone ? (
          <button
            onClick={onDismiss}
            className={`w-full py-4 px-6 rounded-2xl text-sm font-black uppercase tracking-[0.15em] transition-all hover:scale-105 ${
              isColorful
                ? "bg-gradient-to-r from-pink-500 to-orange-400 text-white shadow-lg shadow-pink-500/20"
                : "bg-slate-900 dark:bg-white text-white dark:text-slate-900"
            }`}
          >
            Sluiten
          </button>
        ) : (
          <button
            onClick={onDismiss}
            className="w-full py-4 px-6 rounded-2xl text-sm font-black uppercase tracking-[0.15em] border-2 border-slate-100 dark:border-slate-800 text-slate-400 dark:text-slate-500 hover:border-slate-300 transition-all"
          >
            Misschien later
          </button>
        )}
      </div>
    </div>
  )
}

function SurveyEmbed({
  survey,
  onBack,
  onDone,
  onDismiss,
  onMinimize,
  isColorful,
}: {
  survey: Survey
  onBack: () => void
  onDone: () => void
  onDismiss: () => void
  onMinimize: () => void
  isColorful: boolean
}) {
  return (
    <div className="flex flex-col h-full">
      {/* Gekleurde topbalk */}
      <div className={`h-2 w-full flex-shrink-0 ${
        isColorful
          ? "bg-gradient-to-r from-pink-500 via-pink-400 to-orange-400"
          : "bg-slate-900 dark:bg-white"
      }`} />

      {/* Header */}
      <div className="flex items-center gap-4 px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex-shrink-0">
        <button
          onClick={onBack}
          className={`flex items-center gap-2 text-sm font-black uppercase tracking-wider transition-colors ${
            isColorful
              ? "text-slate-400 hover:text-pink-500"
              : "text-slate-400 hover:text-slate-900 dark:hover:text-white"
          }`}
        >
          <ChevronLeft />
          Terug
        </button>
        <span className="text-sm font-black tracking-tighter text-slate-900 dark:text-white truncate">
          {survey.label}
        </span>
        <div className="ml-auto flex items-center gap-1 flex-shrink-0">
          <button
            onClick={onMinimize}
            className="w-9 h-9 flex items-center justify-center rounded-full text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <MinimizeIcon />
          </button>
          <button
            onClick={onDismiss}
            className="w-9 h-9 flex items-center justify-center rounded-full text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <CloseIcon />
          </button>
        </div>
      </div>

      {/* iframe */}
      <div className="flex-1 overflow-hidden">
        <iframe
          src={survey.url}
          className="w-full h-full border-0"
          title={survey.label}
        >
          Laden…
        </iframe>
      </div>

      {/* Footer */}
      <div className="px-6 py-5 border-t border-slate-100 dark:border-slate-800 flex-shrink-0">
        <button
          onClick={onDone}
          className={`w-full py-4 px-6 rounded-2xl text-sm font-black uppercase tracking-[0.15em] transition-all hover:scale-105 ${
            isColorful
              ? "bg-gradient-to-r from-pink-500 to-orange-400 text-white shadow-lg shadow-pink-500/20"
              : "bg-slate-900 dark:bg-white text-white dark:text-slate-900"
          }`}
        >
          Enquête ingevuld ✓
        </button>
      </div>
    </div>
  )
}

export default function SurveyPopup() {
  const [state, setState] = useState<"closed" | "open" | "minimized">("closed")
  const [activeSurveyId, setActiveSurveyId] = useState<string | null>(null)
  const [completed, setCompleted] = useState<string[]>([])
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
    setActiveSurveyId(null)
    sessionStorage.setItem("surveyDismissed", "true")
  }

  const handleMinimize = () => setState("minimized")
  const handleOpen = () => setState("open")

  const handleSurveyDone = () => {
    if (!activeSurveyId) return
    setCompleted((prev) => [...new Set([...prev, activeSurveyId])])
    setActiveSurveyId(null)
  }

  const activeSurvey = SURVEYS.find((s) => s.id === activeSurveyId) ?? null

  return (
    <>
      {/* Knop rechtsonder — volledig gesloten */}
      {state === "closed" && (
        <button
          onClick={handleOpen}
          className={`fixed bottom-6 right-6 z-[199] text-sm font-black uppercase tracking-[0.15em] px-6 py-4 rounded-2xl shadow-xl transition-all hover:scale-105 ${
            isColorful
              ? "bg-gradient-to-r from-pink-500 to-orange-400 text-white shadow-pink-500/30"
              : "bg-slate-900 dark:bg-white text-white dark:text-slate-900"
          }`}
        >
          ✨ Enquête
        </button>
      )}

      {/* Tab-knop rechts — geminimaliseerd */}
      {state === "minimized" && (
        <button
          onClick={handleOpen}
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
      <div
        className={`fixed top-0 right-0 z-[200] h-full w-full max-w-lg bg-white dark:bg-slate-900 border-l border-slate-100 dark:border-slate-800 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          state === "open" ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex-1 overflow-hidden">
          {activeSurvey ? (
            <SurveyEmbed
              survey={activeSurvey}
              onBack={() => setActiveSurveyId(null)}
              onDone={handleSurveyDone}
              onDismiss={handleDismiss}
              onMinimize={handleMinimize}
              isColorful={isColorful}
            />
          ) : (
            <SurveyChoice
              surveys={SURVEYS}
              completed={completed}
              onSelect={setActiveSurveyId}
              onDismiss={handleDismiss}
              onMinimize={handleMinimize}
              isColorful={isColorful}
            />
          )}
        </div>
      </div>
    </>
  )
}