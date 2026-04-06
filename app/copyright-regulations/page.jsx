"use client"
import Link from "next/link"
import { useStyle } from "@/components/ThemeProvider"

export default function CopyrightRegulations() {
  const styleContext = useStyle()
  const isColorful = styleContext?.style === "colorful"

  const items = [
    {
      title: "General Policy",
      text: `All content on this website, including text, images, videos, and software, is protected by copyright laws unless otherwise stated. Unauthorized use or distribution of copyrighted material is strictly prohibited.`
    },
    {
      title: "Fair Use & Permissions",
      text: `Certain uses of copyrighted material may fall under fair use, such as commentary, criticism, or educational purposes. For other uses, you must obtain written permission from the copyright owner.`
    },
    {
      title: "Reporting Copyright Infringement",
      text: `If you believe your work has been used in violation of copyright laws on this website, please contact us immediately with a detailed report. We will investigate and take appropriate action.`
    },
    {
      title: "User Responsibilities",
      text: `Users must not upload or share content that infringes on copyright. By using this website, you agree to comply with copyright laws and respect the intellectual property of others.`
    },
    {
      title: "Licensing Information",
      text: `Some content may be available under licenses that allow reuse, modification, or distribution. Always check the license terms before using such material.`
    },
  ]

  return (
    <div className={`w-full min-h-screen transition-all duration-700 ${
      isColorful ? "bg-[#fafafa] dark:bg-[#050505]" : "bg-white dark:bg-slate-950"
    }`}>

      {/* HEADER */}
      <section className="relative pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col items-start gap-4">
          <span className={`text-[10px] font-black uppercase tracking-[0.4em] px-3 py-1.5 rounded-full border ${
            isColorful ? "border-pink-500 text-pink-600 dark:text-pink-400" : "border-slate-300 dark:border-slate-700 text-slate-500"
          }`}>
            Juridisch
          </span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-950 dark:text-white">
            COPYRIGHT <br />
            <span className={`transition-all duration-700 ${
              isColorful ? "italic text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-orange-400" : "text-slate-900 dark:text-slate-200"
            }`}>REGULATIONS.</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl text-sm font-medium leading-relaxed mt-2">
            We respect intellectual property rights and expect our users to do the same. This page outlines our copyright policies, how to handle copyrighted material, and your responsibilities as a user.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <div key={index} className={`rounded-[24px] p-8 border transition-all duration-300 ${
              isColorful 
                ? "bg-white dark:bg-white/5 border-pink-100 dark:border-white/10 hover:border-pink-300 dark:hover:border-pink-500/30" 
                : "bg-slate-50 dark:bg-white/5 border-slate-100 dark:border-white/10 hover:border-slate-300"
            }`}>
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-[9px] font-black uppercase tracking-widest ${
                  isColorful ? "text-pink-500" : "text-slate-400"
                }`}>
                  0{index + 1}
                </span>
                <div className={`flex-grow h-[1px] ${
                  isColorful ? "bg-pink-100 dark:bg-white/10" : "bg-slate-200 dark:bg-white/10"
                }`} />
              </div>
              <h2 className="text-xl font-black tracking-tighter text-slate-950 dark:text-white mb-3">
                {item.title}
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 max-w-lg">
          <button className={`flex-1 py-4 rounded-full text-[10px] font-black uppercase tracking-widest text-white transition-all hover:scale-105 ${
            isColorful 
              ? "bg-gradient-to-r from-pink-500 via-rose-500 to-orange-400 shadow-lg shadow-pink-200 dark:shadow-pink-900/30" 
              : "bg-slate-950 dark:bg-white dark:text-slate-950"
          }`}>
            Acknowledge
          </button>
          <Link href="/contact" className={`flex-1 py-4 rounded-full text-[10px] font-black uppercase tracking-widest text-center transition-all hover:scale-105 border ${
            isColorful 
              ? "border-pink-200 dark:border-white/10 text-slate-950 dark:text-white hover:border-pink-400" 
              : "border-slate-200 dark:border-white/10 text-slate-950 dark:text-white hover:border-slate-400"
          }`}>
            Learn More
          </Link>
        </div>
      </main>

      <footer className="py-20 text-center border-t border-slate-100 dark:border-white/5">
        <Link href="/" className={`text-sm font-black uppercase tracking-[0.3em] ${
          isColorful ? "text-pink-500 hover:text-violet-600" : "text-slate-400 hover:text-slate-950 dark:hover:text-white"
        }`}>
          ← Terug naar Home
        </Link>
      </footer>
    </div>
  )
}