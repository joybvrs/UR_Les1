"use client"
import { useStyle } from "@/components/ThemeProvider"

export default function AboutPage() {
  const { style } = useStyle()
  const isColorful = style === "colorful"

  return (
    <div className={`w-full min-h-screen transition-colors duration-500 py-24 px-6 md:px-16 ${
      isColorful
        ? "bg-[radial-gradient(circle_at_top_left,#fff5f7,white,#fff9f0)] dark:bg-[radial-gradient(circle_at_top_left,#020617,#0f172a,#000000)]"
        : "bg-white dark:bg-slate-900"
    }`}>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className={`text-4xl md:text-6xl transition-colors ${
            isColorful
              ? "font-black text-pink-500 dark:text-cyan-400"
              : "font-semibold text-indigo-600 dark:text-indigo-400"
          }`}>
            Hoi, ik ben Joy!
          </h1>
        </div>

        {/* Foto + Tekst */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-24">

          {/* Tekst Sectie */}
          <div className="flex-1">
            <p className={`text-lg md:text-xl leading-relaxed text-indigo-950/80 dark:text-slate-300 transition-colors ${
              isColorful ? "font-normal" : "font-light"
            }`}>
              Welkom op mijn pagina! Ik ben{" "}
              <span className={`${isColorful ? "font-bold text-pink-500 dark:text-cyan-400" : "font-medium text-indigo-600 dark:text-indigo-400"}`}>
                26 jaar
              </span>{" "}
              en heb een enorme passie voor alles wat met creativiteit te maken heeft. Als{" "}
              <span className={`${isColorful ? "font-bold text-orange-500 dark:text-blue-400" : "font-medium text-indigo-500 dark:text-indigo-400"}`}>
                Grafisch Designer
              </span>{" "}
              tover ik concepten om tot visuele verhalen.
            </p>

            <ul className={`mt-8 space-y-4 text-indigo-950 dark:text-slate-200 ${
              isColorful ? "font-normal" : "font-light"
            }`}>
              <li className="flex items-center gap-3">
                {isColorful ? <span className="text-pink-500 font-bold text-xl">✦</span> : <span className="text-indigo-400">→</span>}
                <span className="opacity-80">Specialisatie in Visual Design</span>
              </li>
              <li className="flex items-center gap-3">
                {isColorful ? <span className="text-orange-500 font-bold text-xl">✦</span> : <span className="text-indigo-400">→</span>}
                <span className="opacity-80">Gevoel voor kleur en detail</span>
              </li>
              <li className="flex items-center gap-3">
                {isColorful ? <span className="text-cyan-500 font-bold text-xl">✦</span> : <span className="text-indigo-400">→</span>}
                <span className="opacity-80">Gepassioneerd door fotografie</span>
              </li>
            </ul>
          </div>

          {/* Foto Sectie */}
          <div className="relative shrink-0">
            <div className={`w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl transition-all border-4 ${
              isColorful
                ? "border-white dark:border-cyan-400/50"
                : "border-indigo-100 dark:border-indigo-900"
            }`}>
              <img src="img/foto-joy.jpeg" alt="Joy" className="w-full h-full object-cover" />
            </div>
            {isColorful ? (
              <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full -z-10 dark:opacity-100 transition-opacity" />
            ) : (
              <div className="absolute inset-0 bg-indigo-500/10 blur-3xl rounded-full -z-10 dark:opacity-60 transition-opacity" />
            )}
          </div>
        </div>

        {/* Mijn Reis Sectie */}
        <div className="mb-24">
          <h2 className={`text-3xl mb-12 ${
            isColorful ? "font-black text-orange-500 dark:text-blue-400" : "font-medium text-indigo-600 dark:text-indigo-400"
          }`}>
            Hoe ik hier ben geraakt
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <span className={`text-sm font-bold uppercase tracking-wider ${isColorful ? "text-pink-500" : "text-indigo-400"}`}>De Start</span>
              <p className={`leading-relaxed text-indigo-950/70 dark:text-slate-400 ${isColorful ? "font-normal" : "font-light"}`}>
                Mijn grafische carrière begon bij <strong>CVO Edu Kempen</strong>. In het volwassenenonderwijs volgde ik de richting Webdesigner. Hier ontdekte ik hoe leuk het is om digitale werelden te bouwen.
              </p>
            </div>

            <div className="space-y-4 border-l border-slate-200 dark:border-slate-800 pl-8">
              <span className={`text-sm font-bold uppercase tracking-wider ${isColorful ? "text-orange-500" : "text-indigo-400"}`}>De Verdieping</span>
              <p className={`leading-relaxed text-indigo-950/70 dark:text-slate-400 ${isColorful ? "font-normal" : "font-light"}`}>
                De smaak smaakte naar meer! Ik besloot me volledig onder te dompelen in het vak en trok naar de <strong>AP Hogeschool in Antwerpen</strong> voor de opleiding Grafische en Digitale Media.
              </p>
            </div>

            <div className="space-y-4 border-l border-slate-200 dark:border-slate-800 pl-8">
              <span className={`text-sm font-bold uppercase tracking-wider ${isColorful ? "text-cyan-500" : "text-indigo-400"}`}>Altijd aanwezig</span>
              <p className={`leading-relaxed text-indigo-950/70 dark:text-slate-400 ${isColorful ? "font-normal" : "font-light"}`}>
                Eigenlijk zat de creativiteit er altijd al in, ik deed er alleen niet altijd iets mee. Naast het grafische werk vind ik het heerlijk om de wereld vast te leggen door de lens van mijn <strong>camera</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Onderste blokjes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`p-8 rounded-[32px] transition-all border ${
            isColorful
              ? "bg-pink-50/50 dark:bg-slate-800/40 border-pink-100 dark:border-slate-700"
              : "bg-slate-50 dark:bg-slate-800/20 border-slate-100 dark:border-slate-800"
          }`}>
            <h3 className={`text-2xl mb-2 ${
              isColorful
                ? "font-bold text-pink-500 dark:text-cyan-400"
                : "font-medium text-indigo-600 dark:text-indigo-400"
            }`}>Wat ik doe</h3>
            <p className={`text-sm opacity-70 ${isColorful ? "font-normal" : "font-light"}`}>
              Mijn ontwerpen zijn niet alleen visueel aantrekkelijk, maar vertellen een verhaal. Ik combineer mijn technische kennis van webdesign met de grafische skills van AP.
            </p>
          </div>

          <div className={`p-8 rounded-[32px] transition-all border ${
            isColorful
              ? "bg-orange-50/50 dark:bg-slate-800/40 border-orange-100 dark:border-slate-700"
              : "bg-slate-50 dark:bg-slate-800/20 border-slate-100 dark:border-slate-800"
          }`}>
            <h3 className={`text-2xl mb-2 ${
              isColorful
                ? "font-bold text-orange-500 dark:text-blue-400"
                : "font-medium text-indigo-600 dark:text-indigo-400"
            }`}>Samenwerken?</h3>
            <p className={`text-sm opacity-70 ${isColorful ? "font-normal" : "font-light"}`}>
              Heb je een leuk project in gedachten waar zowel design als een goede visuele presentatie (of fotografie!) voor nodig is?
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}