"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { useStyle } from "@/components/ThemeProvider"
import { useEffect, useState } from "react"

const ease = [0.25, 0.46, 0.45, 0.94] as const
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
}
const stagger = (delay = 0) => ({
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: delay } },
})

const SKILLS = [
  "Visual Design", "Branding", "UI/UX", "Typography",
  "Packaging", "Print", "Fotografie", "Concept",
]

const JOURNEY = [
  {
    period: "De Start",
    place: "CVO Edu Kempen",
    description: "Mijn grafische carrière begon in het volwassenenonderwijs met de richting Webdesigner. Hier ontdekte ik hoe leuk het is om digitale werelden te bouwen.",
    accent: "from-pink-500 to-rose-500",
  },
  {
    period: "De Verdieping",
    place: "AP Hogeschool Antwerpen",
    description: "De smaak smaakte naar meer. Ik dompelde me volledig onder in het vak via de opleiding Grafische en Digitale Media.",
    accent: "from-violet-600 to-indigo-500",
  },
  {
    period: "Altijd aanwezig",
    place: "Camera in de hand",
    description: "Eigenlijk zat de creativiteit er altijd al in. Naast grafisch werk leg ik de wereld ook vast door de lens van mijn camera.",
    accent: "from-orange-500 to-amber-400",
  },
]

const WERKWIJZE = [
  {
    step: "01",
    title: "Kennismaken",
    description: "We bespreken je wensen, doelgroep en doel. Ik luister, stel de juiste vragen en zorg dat ik jouw verhaal begrijp vóór er ook maar één lijn getekend wordt.",
    accent: "from-pink-500 to-rose-500",
  },
  {
    step: "02",
    title: "Concept & Research",
    description: "Ik duik in je wereld: concurrenten, stijlreferenties, moodboards. Hier ontstaat de creatieve richting — onderbouwd en doordacht.",
    accent: "from-violet-600 to-indigo-500",
  },
  {
    step: "03",
    title: "Ontwerp & Verfijning",
    description: "De eerste schetsen worden uitgewerkt tot een volledig ontwerp. Jij geeft feedback, ik verfijn — tot het precies klopt.",
    accent: "from-orange-500 to-amber-400",
  },
  {
    step: "04",
    title: "Oplevering",
    description: "Het eindresultaat wordt aangeleverd in de juiste formats, klaar voor gebruik. Strak, volledig en precies zoals afgesproken.",
    accent: "from-emerald-500 to-teal-400",
  },
]

export default function AboutPage() {
  const { style } = useStyle()
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  const isColorful = style === "colorful"

  if (!mounted) return null

  return (
    <div className={`relative w-full min-h-screen transition-all duration-700 overflow-x-hidden ${
      isColorful ? "bg-[#fafafa] dark:bg-[#050505]" : "bg-white dark:bg-slate-950"
    }`}>

      {/* ACHTERGROND */}
      {isColorful && (
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-[5%] right-[-10%] w-[50%] h-[50%] bg-pink-100/50 dark:bg-pink-900/10 blur-[140px] rounded-full" />
          <div className="absolute bottom-[20%] left-[-10%] w-[40%] h-[40%] bg-orange-100/40 dark:bg-orange-900/10 blur-[140px] rounded-full" />
        </div>
      )}

      <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-40">

        {/* ── HERO ── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-28">

          {/* Links: tekst */}
          <motion.div className="lg:col-span-7" initial="hidden" animate="visible" variants={stagger(0)}>
            <motion.span variants={fadeUp} className={`inline-block text-[10px] font-black uppercase tracking-[0.4em] px-3 py-1.5 rounded-full border mb-8 ${
              isColorful ? "border-pink-400 text-pink-500" : "border-slate-300 dark:border-slate-700 text-slate-500"
            }`}>
              Over mij
            </motion.span>

            <motion.h1 variants={fadeUp} className="font-black tracking-tighter text-slate-950 dark:text-white mb-8 leading-none">
              <span className={`block text-2xl md:text-3xl font-black uppercase tracking-[0.25em] mb-3 ${
                isColorful ? "text-pink-500" : "text-slate-400 dark:text-slate-500"
              }`}>
                Hoi, ik ben
              </span>
              <span className="block text-[5.5rem] md:text-[7.5rem] lg:text-[9rem] leading-[0.85]">
                JOY
              </span>
              <span className={`block text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] leading-[0.9] italic transition-all duration-700 ${
                isColorful
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-violet-600 to-orange-500"
                  : "text-slate-500 dark:text-slate-400"
              }`}>
                Grafisch Designer.
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-xl text-slate-600 dark:text-slate-400 max-w-lg font-medium leading-relaxed mb-10">
              26 jaar, Antwerpen. Grafisch designer met een grote passie voor visuele verhalen — van branding tot UI, van print tot fotografie.
            </motion.p>

            {/* Skills */}
            <motion.div className="flex flex-wrap gap-2" variants={stagger(0.1)}>
              {SKILLS.map((skill) => (
                <motion.span key={skill} variants={fadeUp} className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border transition-all ${
                  isColorful
                    ? "border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:border-pink-300 hover:text-pink-500"
                    : "border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400"
                }`}>
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Rechts: foto */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
          >
            <div className="relative">
              <div className="overflow-hidden rounded-[40px] shadow-2xl aspect-[3/4]">
                <img
                  src="/img/foto-joy.jpeg"
                  alt="Joy Bevers"
                  className="w-full h-full object-cover"
                />
              </div>
              {isColorful && (
                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-[24px] bg-gradient-to-br from-pink-500 to-orange-400 -z-10 blur-2xl opacity-40" />
              )}
              {/* Floating tag */}
              <div className={`absolute -bottom-4 -left-4 px-5 py-3 rounded-2xl shadow-lg ${
                isColorful ? "bg-white dark:bg-slate-900" : "bg-slate-950 dark:bg-white"
              }`}>
                <span className={`text-[9px] font-black uppercase tracking-[0.3em] ${
                  isColorful ? "text-slate-400" : "text-white dark:text-slate-950"
                }`}>Based in</span>
                <p className={`text-sm font-black tracking-tight ${
                  isColorful ? "text-slate-950 dark:text-white" : "text-white dark:text-slate-950"
                }`}>Antwerpen</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── JOURNEY ── */}
        <section className="mb-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
            <h2 className="text-4xl font-black tracking-tighter text-slate-950 dark:text-white">
              Hoe ik hier<br />
              <span className={`italic ${isColorful ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500" : "text-slate-500 dark:text-slate-400"}`}>
                ben geraakt.
              </span>
            </h2>
            <span className={`text-[9px] font-black uppercase tracking-[0.3em] pb-1 ${isColorful ? "text-pink-500" : "text-slate-400"}`}>
              3 hoofdstukken
            </span>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger(0)}
          >
            {JOURNEY.map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`relative overflow-hidden rounded-[36px] p-8 flex flex-col justify-between min-h-[340px] group ${
                  isColorful
                    ? "bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5"
                    : "bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-slate-800"
                }`}
              >
                {/* Decoratief groot nummer achtergrond */}
                <span className={`absolute -bottom-4 -right-2 text-[9rem] font-black leading-none select-none pointer-events-none bg-gradient-to-br ${step.accent} text-transparent bg-clip-text opacity-10`}>
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Boven: label + accent */}
                <div>
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.25em] mb-6 bg-gradient-to-r ${step.accent}`}>
                    <span className="text-white">{step.period}</span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-950 dark:text-white tracking-tighter leading-tight">
                    {step.place}
                  </h3>
                </div>

                {/* Onder: beschrijving */}
                <div>
                  <div className={`w-8 h-[2px] rounded-full bg-gradient-to-r ${step.accent} mb-4`} />
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── WAT IK DOE ── */}
        <section className="mb-28">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease }}
            className={`p-12 md:p-16 rounded-[40px] ${
            isColorful
              ? "bg-slate-950 dark:bg-white/5"
              : "bg-slate-950 dark:bg-white/5"
          }`}>
            <p className={`text-[10px] font-black uppercase tracking-[0.4em] mb-6 ${
              isColorful ? "text-pink-400" : "text-slate-400"
            }`}>
              Mijn aanpak
            </p>
            <p className="text-2xl md:text-4xl font-black text-white dark:text-white tracking-tighter leading-tight max-w-3xl">
              Mijn ontwerpen zijn niet alleen visueel aantrekkelijk —
              <span className={`italic ${isColorful ? " text-pink-400" : " text-slate-400"}`}> ze vertellen een verhaal.</span>
            </p>
            <p className="text-slate-400 mt-6 max-w-xl leading-relaxed">
              Ik combineer technische kennis van webdesign met grafische skills, en zorg er altijd voor dat vorm én inhoud kloppen.
            </p>
          </motion.div>
        </section>

        {/* ── WERKWIJZE ── */}
        <section className="mb-28">
          <motion.h2
            className="text-4xl font-black tracking-tighter text-slate-950 dark:text-white mb-3"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease }}
          >
            Mijn werkwijze.
          </motion.h2>
          <p className="text-slate-500 dark:text-slate-400 font-medium mb-14 max-w-lg">
            Van eerste gesprek tot eindoplevering — zo pak ik een project aan.
          </p>

          <motion.div className="flex flex-col" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger(0)}>
            {WERKWIJZE.map((item, i) => (
              <motion.div key={item.step} variants={fadeUp} className="grid grid-cols-[auto_1px_1fr] gap-x-8 group">

                {/* Nummer */}
                <div className="flex flex-col items-center">
                  <span className={`text-[5rem] font-black tracking-tighter leading-none bg-gradient-to-br ${item.accent} text-transparent bg-clip-text`}>
                    {item.step}
                  </span>
                </div>

                {/* Verticale lijn */}
                <div className="flex flex-col items-center py-2">
                  <div className={`flex-1 w-[1px] ${
                    isColorful ? "bg-slate-200 dark:bg-white/10" : "bg-slate-200 dark:bg-slate-800"
                  } ${i === WERKWIJZE.length - 1 ? "opacity-0" : ""}`} />
                </div>

                {/* Inhoud */}
                <div className={`pb-14 pt-3 ${i === WERKWIJZE.length - 1 ? "pb-0" : ""}`}>
                  <h3 className="text-2xl font-black text-slate-950 dark:text-white tracking-tighter mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-lg">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── CTA ── */}
        <section className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-t pt-16 ${
          isColorful ? 'border-slate-100 dark:border-white/5' : 'border-slate-200 dark:border-slate-800'
        }">
          <div>
            <h2 className="text-4xl font-black tracking-tighter text-slate-950 dark:text-white">
              Laten we samenwerken.
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2 font-medium">
              Heb je een project in gedachten? Ik hoor het graag.
            </p>
          </div>
          <Link
            href="/contact"
            className={`shrink-0 inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all hover:scale-105 ${
              isColorful
                ? "bg-slate-900 dark:bg-white text-white dark:text-slate-950 shadow-xl shadow-pink-500/20"
                : "bg-slate-950 dark:bg-white text-white dark:text-slate-950"
            }`}
          >
            Neem contact op
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </section>

      </main>
    </div>
  )
}
