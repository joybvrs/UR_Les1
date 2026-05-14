"use client"
import Link from "next/link"
import { useStyle } from "@/components/ThemeProvider"

export default function TermsOfAgreement() {
  const styleContext = useStyle()
  const isColorful = styleContext?.style === "colorful"

  const terms = [
    {
      title: "Akkoord met de voorwaarden",
      text: `Door gebruik te maken van onze website ga je akkoord met deze gebruiksvoorwaarden, evenals eventuele aanvullende voorwaarden, beleidsregels of richtlijnen die op de site worden vermeld.`
    },
    {
      title: "Verantwoordelijkheden van de gebruiker",
      text: `Gebruikers dienen correcte informatie te verstrekken, de rechten van anderen te respecteren en de site niet voor onrechtmatige doeleinden te gebruiken. Elke overtreding kan leiden tot schorsing of beëindiging van de toegang.`
    },
    {
      title: "Accountregistratie",
      text: `Sommige functies vereisen een account. Je bent zelf verantwoordelijk voor de vertrouwelijkheid van je inloggegevens en voor alle activiteiten die via jouw account worden uitgevoerd.`
    },
    {
      title: "Intellectueel eigendom",
      text: `Alle inhoud op deze site is beschermd door auteursrecht, handelsmerk of andere intellectuele eigendomswetten. Gebruikers mogen inhoud niet kopiëren, verspreiden of wijzigen zonder uitdrukkelijke toestemming.`
    },
    {
      title: "Beperking van aansprakelijkheid",
      text: `Wij zijn niet aansprakelijk voor schade die voortvloeit uit het gebruik van deze website of diensten, inclusief directe, indirecte, incidentele of gevolgschade.`
    },
    {
      title: "Wijziging van de voorwaarden",
      text: `Wij behouden het recht om deze gebruiksvoorwaarden op elk moment te wijzigen. Voortgezet gebruik van de site na wijzigingen geldt als aanvaarding van de bijgewerkte voorwaarden.`
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
            GEBRUIKS<br />
            <span className={`transition-all duration-700 ${
              isColorful ? "italic text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-orange-400" : "text-slate-900 dark:text-slate-200"
            }`}>VOORWAARDEN.</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl text-sm font-medium leading-relaxed mt-2">
            Lees deze gebruiksvoorwaarden aandachtig door voor je gebruik maakt van onze website of diensten. Door de site te bezoeken ga je akkoord met onderstaande voorwaarden.
          </p>
        </div>
      </section>

      {/* TERMS */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {terms.map((term, index) => (
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
                {term.title}
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                {term.text}
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
            Akkoord
          </button>
          <Link href="/" className={`flex-1 py-4 rounded-full text-[10px] font-black uppercase tracking-widest text-center transition-all hover:scale-105 border ${
            isColorful
              ? "border-pink-200 dark:border-white/10 text-slate-950 dark:text-white hover:border-pink-400"
              : "border-slate-200 dark:border-white/10 text-slate-950 dark:text-white hover:border-slate-400"
          }`}>
            Weigeren
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
