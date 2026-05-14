"use client"
import Link from "next/link"
import { useStyle } from "@/components/ThemeProvider"

export default function CopyrightRegulations() {
  const styleContext = useStyle()
  const isColorful = styleContext?.style === "colorful"

  const items = [
    {
      title: "Algemeen beleid",
      text: `Alle inhoud op deze website, inclusief tekst, afbeeldingen, video's en software, is beschermd door auteursrechtelijke wetgeving, tenzij anders vermeld. Ongeoorloofd gebruik of verspreiding van auteursrechtelijk beschermd materiaal is strikt verboden.`
    },
    {
      title: "Eerlijk gebruik & toestemming",
      text: `Bepaald gebruik van auteursrechtelijk beschermd materiaal kan vallen onder eerlijk gebruik, zoals commentaar, kritiek of educatieve doeleinden. Voor ander gebruik dien je schriftelijke toestemming te verkrijgen van de rechthebbende.`
    },
    {
      title: "Inbreuk melden",
      text: `Als je van mening bent dat jouw werk onrechtmatig wordt gebruikt op deze website, neem dan onmiddellijk contact met ons op met een gedetailleerd rapport. Wij zullen de situatie onderzoeken en passende maatregelen nemen.`
    },
    {
      title: "Verantwoordelijkheden van de gebruiker",
      text: `Gebruikers mogen geen inhoud uploaden of delen die inbreuk maakt op auteursrechten. Door gebruik te maken van deze website ga je akkoord met de auteursrechtelijke wetgeving en respecteer je de intellectuele eigendom van anderen.`
    },
    {
      title: "Licentie-informatie",
      text: `Sommige inhoud kan beschikbaar zijn onder licenties die hergebruik, aanpassing of verspreiding toestaan. Controleer altijd de licentievoorwaarden voordat je dergelijk materiaal gebruikt.`
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
            AUTEURS<br />
            <span className={`transition-all duration-700 ${
              isColorful ? "italic text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-orange-400" : "text-slate-900 dark:text-slate-200"
            }`}>RECHT.</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl text-sm font-medium leading-relaxed mt-2">
            Wij respecteren intellectuele eigendomsrechten en verwachten hetzelfde van onze gebruikers. Op deze pagina vind je ons auteursrechtbeleid en jouw verantwoordelijkheden als gebruiker.
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
            Begrepen
          </button>
          <Link href="/contact" className={`flex-1 py-4 rounded-full text-[10px] font-black uppercase tracking-widest text-center transition-all hover:scale-105 border ${
            isColorful
              ? "border-pink-200 dark:border-white/10 text-slate-950 dark:text-white hover:border-pink-400"
              : "border-slate-200 dark:border-white/10 text-slate-950 dark:text-white hover:border-slate-400"
          }`}>
            Meer info
          </Link>
        </div>
      </main>

      <footer className="py-20 text-center border-t border-slate-100 dark:border-white/5">
        <Link href="/" className={`text-sm font-black uppercase tracking-[0.3em] ${
          isColorful ? "text-pink-500 hover:text-violet-600" : "text-slate-400 hover:text-slate-950 dark:hover:text-white"
        }`}>
          ← Terug naar Start
        </Link>
      </footer>
    </div>
  )
}
