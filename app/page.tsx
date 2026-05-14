"use client"
import React, { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useStyle } from "@/components/ThemeProvider"

const PROJECTS = [
  { name: "Ijs", slug: "ijs", category: "Branding", description: "Een verfrissend merkconcept voor ambachtelijk ijs.", image: "/img/mockupijs.jpg" },
  { name: "Ember", slug: "ember", category: "Identiteit", description: "Visuele identiteit voor een modern interieurlabel.", image: "/img/magazine.png" },
  { name: "Cinecity", slug: "cinecity", category: "UX/UI Design", description: "User experience design voor een bioscoopplatform.", image: "/img/cinecity.jpg" },
  { name: "Kelloggs", slug: "kelloggs", category: "Packaging", description: "Nieuwe branding voor lekkere cornflakes.", image: "/img/kelloggsdoos.jpg" },
  { name: "Leporello", slug: "leporello", category: "Print", description: "Tribute to Stefan Vanfleteren.", image: "/img/leporello.jpg" },
  { name: "Typografische poster", slug: "typografischeposter", category: "Posterontwerp", description: "Typografisch posterontwerp.", image: "/img/poster.jpg" },
  { name: "Portfolio in data", slug: "data", category: "Webdesign", description: "Webdesign met data verwerkt.", image: "/img/data.png" },
  { name: "Sneaker", slug: "sneaker", category: "Promotie", description: "Visuele promotie sneaker.", image: "/img/nike.png" },
]

const TICKER = ["Branding", "UX/UI Design", "Verpakking", "Print", "Identiteit", "Webdesign", "Concept", "Posterontwerp"]

const ease = [0.25, 0.46, 0.45, 0.94] as const

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

function ProjectCard({ proj, isColorful }: { proj: typeof PROJECTS[0]; isColorful: boolean }) {
  return (
    <motion.div variants={fadeUp}>
      <Link href={`/${proj.slug}`} className="group flex flex-col">
        <div className="relative overflow-hidden rounded-[30px] aspect-[4/5] mb-5 bg-slate-100 dark:bg-slate-900">
          <img
            src={proj.image}
            alt={proj.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = `https://via.placeholder.com/600x800?text=${proj.name}`
            }}
          />
        </div>
        <div className="flex items-center gap-3 mb-2">
          <span className={`text-[9px] font-black uppercase tracking-widest ${isColorful ? "text-pink-500" : "text-slate-400"}`}>
            {proj.category}
          </span>
          <div className="flex-grow h-[1px] bg-slate-200 dark:bg-white/10" />
        </div>
        <h3 className="text-xl font-black text-slate-950 dark:text-white tracking-tighter group-hover:text-pink-500 transition-colors">
          {proj.name}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed line-clamp-2">
          {proj.description}
        </p>
      </Link>
    </motion.div>
  )
}

export default function HomePage() {
  const styleContext = useStyle()
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  const isColorful = styleContext ? styleContext.style === "colorful" : true

  if (!mounted) return null

  const featured = PROJECTS[2]

  return (
    <div className={`relative w-full min-h-screen transition-all duration-700 overflow-x-hidden ${
      isColorful ? "bg-[#fafafa] dark:bg-[#050505]" : "bg-white dark:bg-slate-950"
    }`}>

      {isColorful && (
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-[5%] left-[-15%] w-[55%] h-[55%] bg-pink-100/50 dark:bg-pink-900/10 blur-[140px] rounded-full" />
          <div className="absolute top-[30%] right-[-15%] w-[45%] h-[45%] bg-violet-100/40 dark:bg-violet-900/10 blur-[140px] rounded-full" />
          <div className="absolute bottom-[10%] left-[20%] w-[40%] h-[40%] bg-orange-100/40 dark:bg-orange-900/10 blur-[140px] rounded-full" />
        </div>
      )}

      {/* ── HERO ── */}
      <section className="relative z-20 min-h-screen flex flex-col px-6 md:px-12 max-w-7xl mx-auto pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 flex-1 items-start py-10">

          {/* Links: tekst */}
          <div className="lg:col-span-7 flex flex-col justify-start pt-4">
            <motion.h1
              className="text-[2.4rem] sm:text-[3.2rem] md:text-[4.2rem] lg:text-[5rem] font-black leading-[0.9] tracking-tighter text-slate-950 dark:text-white mb-10"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.span className="block" variants={fadeUp}>JOUW IDEE,</motion.span>
              <motion.span
                className={`block whitespace-nowrap transition-all duration-700 ${
                  isColorful
                    ? "italic text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-violet-600 to-orange-500"
                    : "text-slate-700 dark:text-slate-300"
                }`}
                variants={fadeUp}
              >
                MIJN VERHAAL.
              </motion.span>
            </motion.h1>

            <motion.div
              className="flex flex-wrap gap-x-10 gap-y-3 mb-10"
              initial="hidden"
              animate="visible"
              variants={{ ...stagger, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } } }}
            >
              {[
                { value: `${PROJECTS.length}`, label: "Projecten" },
                { value: "5+", label: "Categorieën" },
                { value: "Antwerpen", label: "Gevestigd" },
              ].map(({ value, label }) => (
                <motion.div key={label} className="flex flex-col" variants={fadeUp}>
                  <span className="text-3xl font-black text-slate-950 dark:text-white tracking-tighter">{value}</span>
                  <span className="text-[9px] font-black uppercase tracking-[0.25em] text-slate-400 mt-0.5">{label}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              className="text-lg text-slate-500 dark:text-slate-400 max-w-sm font-medium leading-relaxed mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Ik vertaal complexe ideeën naar heldere, esthetische visuals die impact maken.
            </motion.p>

            {/* Diensten */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              initial="hidden"
              animate="visible"
              variants={{ ...stagger, visible: { transition: { staggerChildren: 0.15, delayChildren: 1 } } }}
            >
              {[
                { title: "Branding", gradient: "from-pink-500 to-rose-500", text: "Van logo tot volledige brand guide — ik leg de visuele basis van een merk." },
                { title: "Design", gradient: "from-violet-600 to-indigo-500", text: "Gedurfd digitaal design dat esthetisch sterk én gebruiksvriendelijk is." },
                { title: "Concept", gradient: "from-orange-500 to-amber-500", text: "Elk ontwerp begint bij een sterk idee. Ik vertaal jouw vraag naar een helder concept." },
              ].map(({ title, gradient, text }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  className={`p-6 rounded-[28px] border transition-all ${isColorful ? "bg-white dark:bg-white/5 border-slate-100 dark:border-white/5" : "bg-transparent border-slate-200 dark:border-slate-800"}`}
                >
                  <div className={`w-8 h-1 rounded-full bg-gradient-to-r ${gradient} mb-4`} />
                  <h3 className="text-base font-black text-slate-900 dark:text-white tracking-tighter">{title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">{text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Rechts: featured video */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
          >
            <Link href={`/${featured.slug}`} className="group block relative">
              <div className="relative overflow-hidden rounded-[40px] shadow-2xl aspect-[3/4]">
                <video
                  src="/img/cinecity4.mp4"
                  autoPlay loop muted playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-950/55 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div>
                    <span className={`text-[9px] font-black uppercase tracking-widest ${isColorful ? "text-pink-400" : "text-white/60"}`}>
                      {featured.category}
                    </span>
                    <h2 className="text-2xl font-black text-white tracking-tighter mt-1">{featured.name}</h2>
                    <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/70 mt-3">
                      Bekijk project →
                    </span>
                  </div>
                </div>
              </div>
              <div className={`absolute -bottom-4 -left-4 px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] shadow-lg ${
                isColorful ? "bg-pink-500 text-white" : "bg-slate-950 dark:bg-white text-white dark:text-slate-950"
              }`}>
                Uitgelicht ↗
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── TICKER ── */}
      <div className={`relative z-20 w-full overflow-hidden border-y py-5 ${
        isColorful ? "border-slate-100 dark:border-white/5" : "border-slate-200 dark:border-slate-800"
      }`}>
        <div className="animate-marquee flex whitespace-nowrap">
          {[...TICKER, ...TICKER].map((item, i) => (
            <span key={i} className={`inline-flex items-center gap-5 px-5 text-[11px] font-black uppercase tracking-[0.3em] ${
              isColorful ? "text-slate-400 dark:text-slate-600" : "text-slate-300 dark:text-slate-700"
            }`}>
              {item}
              <span className={isColorful ? "text-pink-400" : "text-slate-300 dark:text-slate-600"}>·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── WERKEN ── */}
      <main className="relative z-20 max-w-7xl mx-auto pb-40 px-6 md:px-12">
        <section className="pt-28 mb-32">
          <motion.div
            className="flex items-baseline justify-between mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter">Mijn Werken</h2>
            <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${isColorful ? "text-pink-500" : "text-slate-400"}`}>
              {PROJECTS.length} projecten
            </span>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ ...stagger, visible: { transition: { staggerChildren: 0.12 } } }}
          >
            {PROJECTS.slice(0, 3).map((proj) => (
              <ProjectCard key={proj.slug} proj={proj} isColorful={isColorful} />
            ))}
          </motion.div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 max-h-[260px] overflow-hidden">
              {PROJECTS.slice(3, 6).map((proj) => (
                <ProjectCard key={proj.slug} proj={proj} isColorful={isColorful} />
              ))}
            </div>
            <div className={`absolute inset-x-0 bottom-0 h-52 pointer-events-none ${
              isColorful
                ? "bg-gradient-to-t from-[#fafafa] dark:from-[#050505] to-transparent"
                : "bg-gradient-to-t from-white dark:from-slate-950 to-transparent"
            }`} />
          </div>

          <motion.div
            className="mt-14 flex flex-col items-center gap-5 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
              Van packaging tot UX, van print tot branding —{" "}
              <span className="text-slate-900 dark:text-white font-black">er is nog {PROJECTS.length - 3} meer te zien.</span>
            </p>
            <Link
              href="/project"
              className={`group inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all hover:scale-105 active:scale-100 ${
                isColorful
                  ? "bg-slate-900 dark:bg-white text-white dark:text-slate-950 shadow-2xl shadow-pink-500/20 hover:shadow-pink-500/40"
                  : "bg-slate-950 dark:bg-white text-white dark:text-slate-950"
              }`}
            >
              Bekijk alle {PROJECTS.length} werken
              <span className="inline-block transition-transform group-hover:translate-x-1.5">→</span>
            </Link>
          </motion.div>
        </section>

      </main>
    </div>
  )
}
