"use client"
import React, { useEffect, useState } from "react"
import Link from 'next/link'
import { motion } from "framer-motion"
import { useStyle } from "@/components/ThemeProvider"

const ease = [0.25, 0.46, 0.45, 0.94] as const
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
}
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

interface Project {
  name: string;
  slug: string;
  category: string;
  description: string;
  image: string;
}

const PROJECTS_DATA: Project[] = [
  { name: "Ijs", slug: "ijs", category: "Branding", description: "Een verfrissend merkconcept voor ambachtelijk ijs.", image: "/img/mockupijs.jpg" },
  { name: "Ember", slug: "ember", category: "Identiteit", description: "Visuele identiteit voor een modern interieurlabel.", image: "/img/magazine.png" },
  { name: "Cinecity", slug: "cinecity", category: "UX/UI Design", description: "User experience design voor een bioscoopplatform.", image: "/img/cinecity.jpg" },
  { name: "Kelloggs", slug: "kelloggs", category: "Packaging", description: "Nieuwe branding voor lekkere cornflakes.", image: "/img/kelloggsdoos.jpg" },
  { name: "Leporello", slug: "leporello", category: "Print", description: "Tribute to Stefan Vanfleteren.", image: "/img/leporello.jpg" },
  { name: "Typografische poster", slug: "typografischeposter", category: "Posterontwerp", description: "Typografisch posterontwerp.", image: "/img/poster.jpg" },
  { name: "Portfolio in data", slug: "data", category: "Webdesign", description: "Webdesign met data verwerkt.", image: "/img/data.png" },
  { name: "Sneaker", slug: "sneaker", category: "Promotie", description: "Visuele promotie sneaker.", image: "/img/nike.png" },
];

const CATEGORIES = ["Alles", ...Array.from(new Set(PROJECTS_DATA.map(p => p.category)))];


export default function ProjectsOverview() {
  const styleContext = useStyle();
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Alles");

  useEffect(() => { setMounted(true); }, []);

  const isColorful = styleContext?.style === "colorful";

  if (!mounted) return null;

  const filtered = activeCategory === "Alles"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === activeCategory);

  return (
    <div className={`w-full min-h-screen transition-all duration-700 ${
      isColorful ? "bg-[#fafafa] dark:bg-[#050505]" : "bg-white dark:bg-slate-950"
    }`}>

      {/* HEADER */}
      <section className="relative pt-32 pb-10 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          initial="hidden" animate="visible"
          variants={{ ...stagger, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <div className="flex flex-col gap-4">
            <motion.span variants={fadeUp} className={`text-[10px] font-black uppercase tracking-[0.4em] px-3 py-1.5 rounded-full border w-fit ${
              isColorful ? "border-pink-500 text-pink-600 dark:text-pink-400" : "border-slate-300 dark:border-slate-700 text-slate-500"
            }`}>
              Portfolio
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl font-black tracking-tighter text-slate-950 dark:text-white">
              MIJN<br />
              <span className={`transition-all duration-700 ${
                isColorful ? "italic text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-violet-600 to-orange-500" : "text-slate-900 dark:text-slate-200"
              }`}>WERKEN.</span>
            </motion.h1>
          </div>

          <motion.div variants={fadeUp} className="flex flex-col items-start md:items-end gap-1 pb-2">
            <span className="text-5xl font-black text-slate-950 dark:text-white tracking-tighter">
              {filtered.length}<span className="text-slate-300 dark:text-slate-700">/{PROJECTS_DATA.length}</span>
            </span>
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">Projecten zichtbaar</span>
          </motion.div>
        </motion.div>

        {/* Categoriefilters */}
        <motion.div
          className="flex flex-wrap gap-2 mt-10"
          initial="hidden" animate="visible"
          variants={{ ...stagger, visible: { transition: { staggerChildren: 0.06, delayChildren: 0.3 } } }}
        >
          {CATEGORIES.map((cat) => (
            <motion.button
              key={cat}
              variants={fadeUp}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.25em] transition-all duration-200 border ${
                activeCategory === cat
                  ? isColorful
                    ? "bg-slate-900 dark:bg-white text-white dark:text-slate-950 border-transparent"
                    : "bg-slate-950 dark:bg-white text-white dark:text-slate-950 border-transparent"
                  : isColorful
                    ? "border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:border-pink-300 hover:text-pink-500"
                    : "border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:border-slate-400"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>
      </section>

      {/* GRID */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 pb-32 mt-12">
        {filtered.length === 0 && (
          <p className="text-slate-400 text-sm font-medium py-20 text-center">Geen projecten gevonden.</p>
        )}

        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ ...stagger, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {filtered.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={PROJECTS_DATA.indexOf(project)}
              isColorful={isColorful}
            />
          ))}
        </motion.div>
      </main>

      <footer className="py-20 text-center border-t border-slate-100 dark:border-white/5">
        <Link href="/" className={`text-sm font-black uppercase tracking-[0.3em] ${
          isColorful ? "text-pink-500 hover:text-violet-600" : "text-slate-400 hover:text-slate-950 dark:hover:text-white"
        }`}>
          ← Terug naar Start
        </Link>
      </footer>
    </div>
  );
}

function ProjectCard({
  project,
  index,
  isColorful,
}: {
  project: Project;
  index: number;
  isColorful: boolean;
}) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div variants={fadeUp}>
    <Link
      href={`/${project.slug}`}
      className="group flex flex-col"
      style={{ textDecoration: "none" }}
    >
      {/* Afbeelding */}
      <div className="relative overflow-hidden rounded-[20px] aspect-square bg-slate-100 dark:bg-slate-900">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
            e.currentTarget.src = `https://via.placeholder.com/800x600?text=${project.name}`;
          }}
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-7">
          <div className="translate-y-3 group-hover:translate-y-0 transition-transform duration-400">
            <span className={`text-[9px] font-black uppercase tracking-widest ${isColorful ? "text-pink-400" : "text-white/50"}`}>
              {project.category}
            </span>
            <h2 className="text-2xl font-black text-white tracking-tighter mt-1">{project.name}</h2>
            <p className="text-sm text-white/60 mt-1 line-clamp-2">{project.description}</p>
            <span className={`inline-flex items-center gap-2 mt-4 text-[9px] font-black uppercase tracking-[0.2em] ${isColorful ? "text-pink-400" : "text-white"}`}>
              Bekijk project →
            </span>
          </div>
        </div>

        {/* Projectnummer */}
        <div className="absolute top-4 left-4 text-[10px] font-black text-white/50 tracking-[0.2em]">
          {num}
        </div>
      </div>

      {/* Labels onder kaart */}
      <div className="mt-4 px-1 flex items-center justify-between">
        <div>
          <span className={`text-[9px] font-black uppercase tracking-widest ${isColorful ? "text-pink-500" : "text-slate-400"}`}>
            {project.category}
          </span>
          <h3 className={`text-lg font-black tracking-tighter text-slate-950 dark:text-white group-hover:text-pink-500 transition-colors`}>
            {project.name}
          </h3>
        </div>
        <span className={`text-[10px] font-black uppercase tracking-[0.15em] transition-all opacity-0 group-hover:opacity-100 group-hover:translate-x-1 ${
          isColorful ? "text-pink-500" : "text-slate-950 dark:text-white"
        }`}>
          →
        </span>
      </div>
    </Link>
    </motion.div>
  );
}
