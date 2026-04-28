"use client"
import Link from "next/link"
import { useStyle } from "@/components/ThemeProvider"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const styleContext = useStyle()
  const isColorful = styleContext?.style === "colorful"

  return (
    <footer className={`w-full py-16 px-6 md:px-12 transition-all duration-700 border-t ${
      isColorful 
      ? "bg-gradient-to-r from-pink-500 via-rose-500 to-orange-400 border-pink-400/50 text-white"
              : "bg-slate-950 dark:bg-black border-slate-800 text-white"
    }`}>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        
        {/* LINKERKANT: Groter Logo + Hoofdmenu */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          <div className="text-4xl font-black tracking-tighter">JOY.</div>
          
          <nav className="flex gap-8 text-xs font-black uppercase tracking-[0.2em]">
            <Link href="/project" className="hover:opacity-60 transition-all hover:scale-105">Projecten</Link>
            <Link href="/over mij" className="hover:opacity-60 transition-all hover:scale-105">Over mij</Link>
            <Link href="/contact" className="hover:opacity-60 transition-all hover:scale-105">Contact</Link>
          </nav>
        </div>

        {/* RECHTERKANT: Juridisch + Copyright (Duidelijker leesbaar) */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-2 font-bold uppercase tracking-widest text-[10px] opacity-80">
            <Link href="/terms-of-agreement" className="hover:underline transition-all">Terms of Agreement</Link>
            <Link href="/copyright-regulations" className="hover:underline transition-all">Copyright</Link>
            <Link href="/cookie-settings" className="hover:underline transition-all">Cookies</Link>
          </div>
          
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-50 text-center md:text-right">
            &copy; {currentYear} Joy Bevers &bull; Visual Design Specialist
          </p>
        </div>

      </div>
    </footer>
  )
}