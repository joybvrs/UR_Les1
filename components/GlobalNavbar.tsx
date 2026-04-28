"use client"

import { useState, useEffect, useTransition } from "react"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useStyle } from "@/components/ThemeProvider"
import { event } from "@/lib/gtag" // 👈 adjust this import to match your GA helper

export default function GlobalNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { style, toggleStyle } = useStyle()
  const isColorful = style === "colorful"

  const router = useRouter()
  const [isAnimating, startTransition] = useTransition()

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme")
    const isDark = savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    setDarkMode(isDark)
    if (isDark) document.documentElement.classList.add("dark")
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset'
  }, [isMenuOpen])

  const toggleTheme = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    if (newMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const handleNavigation = (href: string, label?: string) => {
    if (isAnimating) return
    // 🔥 GA TRACKING
    event({
      action: `nav_click_${label ?? href}`,
      category: "navigation",
      label: href,
    })
    setIsMenuOpen(false)
    startTransition(() => {
      router.push(href)
    })
  }

  if (!mounted) return <div className="h-16" />

  const navItems = [
    { name: 'Start', href: '/start' },
    { name: 'Over mij', href: '/overmij' },
    { name: 'Projecten', href: '/project' },
    { name: 'Admin', href: '/admin' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <>
      <header className={`fixed top-0 z-[200] w-full transition-all duration-500 ${
        isMenuOpen
          ? "bg-transparent py-4"
          : (isColorful
            ? "bg-gradient-to-r from-pink-500 via-rose-500 to-orange-400 backdrop-blur-xl py-3 border-b border-pink-400/50"
            : "bg-white/40 dark:bg-black/10 backdrop-blur-md py-3 shadow-sm")
      }`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">

          {/* Logo — tracked too */}
          <button
            onClick={() => handleNavigation('/', 'logo')}
            className={`text-xl tracking-tighter z-[210] transition-colors duration-500 font-black ${
              isMenuOpen
                ? (isColorful ? "text-white" : (darkMode ? "text-white" : "text-slate-900"))
                : "text-slate-900 dark:text-white"
            }`}
          >
            JOY<span className="text-indigo-500">.</span>
          </button>

          <div className="flex items-center gap-3 z-[210]">
            {/* Style & Theme Toggle Box */}
            <div className={`flex items-center gap-1 p-0.5 rounded-full border transition-all duration-300 ${
              isMenuOpen
                ? "bg-white/10 border-white/20 backdrop-blur-md"
                : "bg-slate-100/80 dark:bg-white/5 border-slate-200 dark:border-white/10"
            }`}>
              <button onClick={toggleStyle} className={`px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest transition-all ${
                isColorful ? "bg-gradient-to-r from-pink-500 to-indigo-600 text-white shadow-md" : "bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
              }`}>
                {isColorful ? "Color" : "Minimal"}
              </button>

              <button onClick={toggleTheme} className={`p-1.5 rounded-full transition-colors text-xs ${
                isMenuOpen ? "text-white" : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
              }`}>
                {darkMode ? "☀️" : "🌙"}
              </button>
            </div>

            {/* MENU KNOP */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-1 flex items-center gap-2 group"
            >
              <span className={`text-[10px] font-black uppercase tracking-widest transition-colors duration-300 ${
                isMenuOpen
                  ? (isColorful ? "text-white/70" : (darkMode ? "text-white/70" : "text-slate-400"))
                  : "text-slate-900 dark:text-white"
              }`}>
                {isMenuOpen ? "Sluiten" : "Menu"}
              </span>

              <div className={`relative w-10 h-10 flex flex-col justify-center items-center rounded-full transition-all duration-300 ${
                isMenuOpen
                  ? "bg-white text-indigo-950"
                  : "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-lg group-hover:scale-110"
              }`}>
                <span className={`h-[1.5px] w-5 bg-current transition-all ${isMenuOpen ? "rotate-45 translate-y-[0.75px]" : "-translate-y-1"}`} />
                <span className={`h-[1.5px] w-5 bg-current transition-all ${isMenuOpen ? "-rotate-45 -translate-y-[0.75px]" : "translate-y-1"}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* OVERLAY */}
      <div className={`fixed inset-0 z-[190] transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
        isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      } ${
        isColorful ? "bg-slate-950" : (darkMode ? "bg-slate-950" : "bg-white")
      }`}>

        {isColorful && (
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950" />
            <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-pink-600/30 blur-[130px] rounded-full animate-pulse" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/20 blur-[130px] rounded-full animate-pulse delay-700" />
          </div>
        )}

        <div className="relative z-10 flex flex-col md:flex-row h-full pt-24 md:pt-0">
          <div className="flex-[1.2] flex flex-col justify-center px-10 md:px-24">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href, item.name)}
                  disabled={isAnimating}
                  className={`md:text-8xl text-4xl tracking-tighter transition-all duration-200 ease-in-out hover:translate-x-4 origin-left text-left disabled:opacity-50 ${
                    isColorful
                      ? "font-black italic text-white hover:text-pink-400"
                      : "font-light text-slate-900 dark:text-white hover:opacity-40"
                  } ${isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>

          <div className={`flex-1 flex flex-col justify-center px-10 md:px-20 space-y-6 transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0"}`}>
            <div className={`h-[1px] w-12 ${isColorful ? "bg-pink-500" : "bg-slate-900 dark:bg-white"}`} />
            <div className={isColorful ? "text-white" : "text-slate-900 dark:text-white"}>
              <p className={`text-[9px] font-bold uppercase tracking-[0.4em] mb-3 ${isColorful ? "text-indigo-300" : "text-slate-400"}`}>Member area</p>
              <button
                onClick={() => handleNavigation('/login', 'login')}
                disabled={isAnimating}
                className={`text-3xl font-black transition-colors duration-150 text-left disabled:opacity-50 ${
                  isColorful ? "hover:text-pink-400" : "hover:opacity-40"
                }`}
              >
                LOGIN →
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}