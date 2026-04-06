"use client"
import Link from "next/link"
import { useStyle } from "@/components/ThemeProvider"

export default function TermsOfAgreement() {
  const styleContext = useStyle()
  const isColorful = styleContext?.style === "colorful"

  const terms = [
    {
      title: "Acceptance of Terms",
      text: `By using our website, you agree to be bound by these Terms of Agreement, as well as any additional terms, policies, or guidelines posted on the site.`
    },
    {
      title: "User Responsibilities",
      text: `Users must provide accurate information, respect the rights of others, and refrain from using the site for unlawful purposes. Any violation may result in suspension or termination of access.`
    },
    {
      title: "Account Registration",
      text: `Some features may require account registration. You are responsible for maintaining the confidentiality of your account credentials and for all activities conducted under your account.`
    },
    {
      title: "Intellectual Property",
      text: `All content on this site is protected by copyright, trademark, or other intellectual property laws. Users may not copy, distribute, or modify content without proper authorization.`
    },
    {
      title: "Limitation of Liability",
      text: `We are not liable for any damages arising from the use of this website or services, including direct, indirect, incidental, or consequential losses.`
    },
    {
      title: "Modifications of Terms",
      text: `We reserve the right to update or modify these Terms of Agreement at any time. Continued use of the site after changes constitutes acceptance of the updated terms.`
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
            TERMS OF <br />
            <span className={`transition-all duration-700 ${
              isColorful ? "italic text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-orange-400" : "text-slate-900 dark:text-slate-200"
            }`}>AGREEMENT.</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl text-sm font-medium leading-relaxed mt-2">
            Please read these Terms of Agreement carefully before using our website or services. By accessing or using our site, you agree to comply with these terms and conditions.
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
            Accept Terms
          </button>
          <Link href="/" className={`flex-1 py-4 rounded-full text-[10px] font-black uppercase tracking-widest text-center transition-all hover:scale-105 border ${
            isColorful 
              ? "border-pink-200 dark:border-white/10 text-slate-950 dark:text-white hover:border-pink-400" 
              : "border-slate-200 dark:border-white/10 text-slate-950 dark:text-white hover:border-slate-400"
          }`}>
            Decline
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