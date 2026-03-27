"use client"

import Link from 'next/link'
import { useStyle } from "@/components/ThemeProvider"

export default function CinecityPage() {
  const { style } = useStyle()
  const isColorful = style === "colorful"

  const projecten = [
    { id: 1, titel: "Brand Identity", img: "/img/cinecity1.png" },
    { id: 2, titel: "Visual Design", img: "/img/cinecity2.png" },
    { id: 3, titel: "Poster Design", img: "/img/cinecity3.png" },
    { id: 4, titel: "Motion Graphics", img: "/img/cinecity4.mp4" },
    { id: 5, titel: "Editorial Design", img: "/img/cinecity5.jpg" },
    { id: 6, titel: "Poster Design", img: "/img/cinecity6.png" },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-indigo-950 dark:text-white font-sans transition-colors duration-500">

      {/* Hero Sectie */}
      <section className={`py-16 md:py-24 px-6 border-b transition-colors duration-500 ${
        isColorful
          ? "bg-fuchsia-50 dark:bg-slate-800/40 border-fuchsia-100 dark:border-slate-700"
          : "bg-slate-50 dark:bg-slate-800/20 border-slate-100 dark:border-slate-800"
      }`}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`text-5xl md:text-7xl tracking-tighter mb-4 italic uppercase text-indigo-950 dark:text-white ${
            isColorful ? "font-black" : "font-semibold"
          }`}>
            Cine
            <span className={isColorful ? "text-fuchsia-500 dark:text-cyan-400" : "text-indigo-500 dark:text-indigo-400"}>
              city
            </span>
          </h1>
          <p className={`text-xs uppercase tracking-[0.3em] mb-12 ${
            isColorful
              ? "font-bold text-fuchsia-400 dark:text-cyan-500"
              : "font-medium text-indigo-400 dark:text-indigo-500"
          }`}>
            Brand Identity • UX Design • Motion Graphics
          </p>

          <div className={`bg-white p-3 rounded-[2.5rem] shadow-2xl overflow-hidden border transition-colors duration-500 ${
            isColorful
              ? "shadow-fuchsia-200/50 dark:shadow-slate-900 border-fuchsia-100 dark:border-slate-700"
              : "shadow-slate-100 dark:shadow-slate-900 border-slate-100 dark:border-slate-800"
          }`}>
            <div className="aspect-video overflow-hidden rounded-[2rem]">
              <img
                src="/img/cinecity1.png"
                alt="Cinecity Brand Identity"
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/1200x675?text=Cinecity" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Sectie */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Linker kolom */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className={`text-3xl mb-6 tracking-tight text-indigo-950 dark:text-white ${
                isColorful ? "font-black" : "font-semibold"
              }`}>De Merkgedachte</h2>
              <p className={`text-slate-600 dark:text-slate-400 leading-relaxed text-lg ${
                isColorful ? "font-normal" : "font-light"
              }`}>
                Voor dit nieuwe Antwerpse filmfestival vertaalde ik de leefwereld van jongeren naar een herkenbare visuele identiteit.
                Door een{" "}
                <strong className={`text-indigo-950 dark:text-white ${isColorful ? "font-bold" : "font-medium"}`}>
                  cross-mediale aanpak
                </strong>{" "}
                — van een tactiel programmaboekje tot een dynamische openingstitel — vangt het ontwerp de rauwe dynamiek van de stad en de contrasten tussen dag en nacht.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className={`p-6 rounded-3xl border transition-colors duration-500 ${
                isColorful
                  ? "bg-fuchsia-50 dark:bg-slate-800/40 border-fuchsia-100 dark:border-slate-700"
                  : "bg-slate-50 dark:bg-slate-800/20 border-slate-100 dark:border-slate-800"
              }`}>
                <h3 className={`uppercase text-xs mb-3 tracking-widest ${
                  isColorful
                    ? "font-black text-fuchsia-500 dark:text-cyan-400"
                    : "font-semibold text-indigo-500 dark:text-indigo-400"
                }`}>Het Concept</h3>
                <p className={`text-sm text-slate-600 dark:text-slate-400 leading-relaxed ${
                  isColorful ? "font-normal" : "font-light"
                }`}>
                  Een prikkelend concept dat verder gaat dan een letterlijke verbeelding van film.
                  De stad zelf wordt het decor, met contrasten tussen licht en duisternis als visuele kern.
                </p>
              </div>
              <div className={`p-6 rounded-3xl border transition-colors duration-500 ${
                isColorful
                  ? "bg-indigo-50 dark:bg-slate-800/40 border-indigo-100 dark:border-slate-700"
                  : "bg-slate-50 dark:bg-slate-800/20 border-slate-100 dark:border-slate-800"
              }`}>
                <h3 className={`uppercase text-xs mb-3 tracking-widest ${
                  isColorful
                    ? "font-black text-indigo-500 dark:text-blue-400"
                    : "font-semibold text-indigo-500 dark:text-indigo-400"
                }`}>Doelgroep</h3>
                <p className={`text-sm text-slate-600 dark:text-slate-400 leading-relaxed ${
                  isColorful ? "font-normal" : "font-light"
                }`}>
                  Gericht op{" "}
                  <strong className={`text-indigo-950 dark:text-white ${isColorful ? "font-bold" : "font-medium"}`}>
                    jongeren en filmliefhebbers
                  </strong>{" "}
                  in Antwerpen die op zoek zijn naar een authentieke, stedelijke festivalervaring.
                </p>
              </div>
            </div>
          </div>

          {/* Rechter kolom: Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className={`p-8 rounded-[2rem] text-white shadow-xl transition-colors duration-500 ${
              isColorful
                ? "bg-indigo-950 dark:bg-slate-800/60 dark:border dark:border-slate-700"
                : "bg-indigo-600 dark:bg-slate-800/60 dark:border dark:border-slate-700"
            }`}>
              <h3 className={`uppercase tracking-[0.2em] text-[10px] mb-8 ${
                isColorful ? "font-bold text-fuchsia-300 dark:text-cyan-400" : "font-semibold text-indigo-200 dark:text-indigo-400"
              }`}>Visueel Palet</h3>
              <div className="space-y-4">
                {[
                  { color: "#0A0A0A", name: "Stads-zwart" },
                  { color: "#E63946", name: "Bioscooprood" },
                  { color: "#F1FAEE", name: "Schermwit" },
                ].map((item) => (
                  <div key={item.color} className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full border-2 border-white/20" style={{ backgroundColor: item.color }}></div>
                      <span className={isColorful ? "font-bold" : "font-medium"}>{item.name}</span>
                    </div>
                    <span className="text-[10px] text-white/40 font-mono">{item.color}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className={`py-20 px-6 transition-colors duration-500 ${
        isColorful
          ? "bg-slate-50 dark:bg-slate-800/20"
          : "bg-slate-50/50 dark:bg-slate-800/10"
      }`}>
        <div className="max-w-5xl mx-auto">
          <h2 className={`text-3xl mb-12 tracking-tight text-indigo-950 dark:text-white ${
            isColorful ? "font-black" : "font-semibold"
          }`}>Werk</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projecten.map((project) => {
              const isVideo = project.img?.toLowerCase().endsWith('.mp4')
              return (
                <div key={project.id} className="group cursor-pointer space-y-4">
                  <div className={`rounded-3xl overflow-hidden aspect-video border transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1 ${
                    isColorful
                      ? "border-fuchsia-100 dark:border-slate-700 bg-fuchsia-50 dark:bg-slate-800/40"
                      : "border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-800"
                  }`}>
                    {isVideo ? (
                      <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                        <source src={project.img} type="video/mp4" />
                      </video>
                    ) : (
                      <img
                        src={project.img}
                        alt={project.titel}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/800x450?text=Beeld+niet+gevonden" }}
                      />
                    )}
                  </div>
                  <div className="flex items-center px-1">
                    <h3 className={`text-lg tracking-tight text-indigo-950 dark:text-white ${
                      isColorful ? "font-bold" : "font-medium"
                    }`}>{project.titel}</h3>
                    <div className={`h-px flex-1 mx-4 opacity-30 ${
                      isColorful ? "bg-fuchsia-300 dark:bg-slate-600" : "bg-slate-200 dark:bg-slate-700"
                    }`}></div>
                    <span className={`font-mono text-sm ${
                      isColorful ? "text-fuchsia-400 dark:text-cyan-400 font-bold" : "text-indigo-400 dark:text-indigo-500"
                    }`}>0{project.id}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer navigatie */}
      <footer className={`py-20 text-center border-t transition-colors duration-500 ${
        isColorful
          ? "border-fuchsia-100 dark:border-slate-700"
          : "border-slate-100 dark:border-slate-800"
      }`}>
        <Link
          href="/projects"
          className={`inline-flex items-center space-x-3 uppercase text-xs tracking-widest transition-colors ${
            isColorful
              ? "font-bold text-indigo-950 dark:text-slate-300 hover:text-fuchsia-600 dark:hover:text-cyan-400"
              : "font-medium text-indigo-500 dark:text-indigo-400 hover:text-indigo-950 dark:hover:text-white"
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Terug naar alle projecten</span>
        </Link>
      </footer>
    </div>
  )
}