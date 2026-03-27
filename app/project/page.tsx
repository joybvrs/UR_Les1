"use client"

import Link from 'next/link'
import { useStyle } from "@/components/ThemeProvider"

export default function ProjectsOverview() {
  const { style } = useStyle()
  const isColorful = style === "colorful"

  const projects = [
    { name: "Ijs", slug: "ijs", description: "Een verfrissend merkconcept voor ambachtelijk ijs.", color: "border-pink-400" },
    { name: "Ember", slug: "ember", description: "Visuele identiteit en branding voor een modern interieurlabel.", color: "border-purple-400" },
    { name: "Cinecity", slug: "cinecity", description: "User experience design voor een lokaal bioscoopplatform.", color: "border-orange-400" },
    { name: "Kelloggs", slug: "kelloggs", description: "Nieuwe branding voor lekkere cornflakes.", color: "border-yellow-400" },
    { name: "Leporello", slug: "leporello", description: "Tribute to Stefan Vanfleteren.", color: "border-green-400" },
    { name: "Typografische poster", slug: "typografischeposter", description: "Typografisch poster design.", color: "border-blue-400" },
    { name: "Portfolio in data", slug: "portfolio-in-data", description: "Webdesign met data verwerkt.", color: "border-red-400" },
    { name: "Sneaker", slug: "sneaker", description: "Visuele promotie sneaker.", color: "border-pink-400" },
  ]

  return (
    <div className={`w-full min-h-screen transition-colors duration-500 ${
      isColorful
        ? "bg-white dark:bg-slate-900"
        : "bg-white dark:bg-slate-900"
    }`}>

      {/* Header */}
      <section className="py-24 px-6 md:px-16 text-center">
        <h1 className={`text-5xl md:text-6xl tracking-tighter mb-4 text-indigo-950 dark:text-white ${
          isColorful ? "font-black" : "font-semibold"
        }`}>
          Mijn{" "}
          <span className={
            isColorful
              ? "text-fuchsia-500 dark:text-cyan-400"
              : "text-indigo-500 dark:text-indigo-400"
          }>
            Projecten
          </span>
        </h1>
        <p className={`text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg ${
          isColorful ? "font-normal" : "font-light"
        }`}>
          Een selectie van grafisch en visueel design door Joy Bevers.
        </p>
      </section>

      {/* Grid van Projecten */}
      <main className="px-6 md:px-16 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link key={project.slug} href={`/${project.slug}`} className="group">
              {isColorful ? (
                // Kleurrijk: gekleurde border-top, fuchsia achtergrond tint
                <div className={`h-full bg-fuchsia-50/50 dark:bg-slate-800/60 border-t-8 ${project.color} p-10 rounded-3xl shadow-sm dark:shadow-none dark:border dark:border-t-8 dark:border-slate-700/50 transition-all duration-300 group-hover:shadow-xl dark:group-hover:shadow-slate-900 group-hover:-translate-y-2`}>
                  <h2 className="text-3xl font-black text-indigo-950 dark:text-white mb-4 group-hover:text-fuchsia-600 dark:group-hover:text-cyan-400 transition-colors">
                    {project.name}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center text-indigo-950 dark:text-slate-300 font-bold uppercase text-xs tracking-widest group-hover:text-fuchsia-600 dark:group-hover:text-cyan-400 transition-colors">
                    Project bekijken
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              ) : (
                // Minimalistisch: neutrale kaart met indigo hover
                <div className="h-full bg-slate-50 dark:bg-slate-800/20 border border-slate-100 dark:border-slate-800 p-10 rounded-3xl transition-all duration-300 group-hover:shadow-lg group-hover:border-indigo-200 dark:group-hover:border-indigo-800 group-hover:-translate-y-2">
                  <h2 className="text-3xl font-medium text-indigo-950 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.name}
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed font-light">
                    {project.description}
                  </p>
                  <div className="flex items-center text-slate-400 dark:text-slate-500 font-medium uppercase text-xs tracking-widest group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    Project bekijken
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              )}
            </Link>
          ))}
        </div>
      </main>

      {/* Footer-achtig element */}
      <footer className={`py-10 px-6 md:px-16 text-center border-t transition-colors duration-500 ${
        isColorful
          ? "border-fuchsia-100 dark:border-slate-700/50"
          : "border-slate-100 dark:border-slate-800"
      }`}>
        <Link href="/home" className={`text-sm uppercase tracking-widest transition-colors ${
          isColorful
            ? "font-bold text-fuchsia-500 dark:text-cyan-400 hover:text-indigo-950 dark:hover:text-white"
            : "font-medium text-indigo-500 dark:text-indigo-400 hover:text-indigo-950 dark:hover:text-white"
        }`}>
          ← Terug naar Home
        </Link>
      </footer>
    </div>
  )
}