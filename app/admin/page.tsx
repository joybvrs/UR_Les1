"use client"

import { useState, useEffect, ChangeEvent } from "react"
import Link from 'next/link'

interface ProjectContent {
  title: string;
  highlight: string;
  subtitle: string;
  rationaleTitle: string;
  rationaleText: string;
  symbolTitle: string;
  symbolText: string;
  targetTitle: string;
  targetText: string;
  // Nieuwe sectie voor kleuren
  colors: {
    primary: string;
    secondary: string;
    accentBg: string;
  }
}

export default function IjsProjectPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [content, setContent] = useState<ProjectContent>({
    title: "Lemon Mint",
    highlight: "Tea",
    subtitle: "Brand Design Concept • Archetype: Innocent",
    rationaleTitle: "De Merkgedachte",
    rationaleText: "De keuze voor de smaak Lemon Mint Tea Sorbet is voortgekomen uit het verlangen naar een fris gevoel, vergelijkbaar met een warme zomerdag.",
    symbolTitle: "Het Symbool",
    symbolText: "Het logo combineert een halve citroen met twee muntblaadjes.",
    targetTitle: "Doelgroep",
    targetText: "Dit concept is uitermate geschikt voor families.",
    colors: {
      primary: "#1e1b4b",   // Indigo 950
      secondary: "#d946ef", // Fuchsia 500
      accentBg: "#fdf4ff",  // Fuchsia 50
    }
  });

  useEffect(() => {
    const savedData = localStorage.getItem('project-data');
    if (savedData) {
      const parsed = JSON.parse(savedData);
      // Zorg dat we fallback kleuren hebben als de oude data nog geen kleuren had
      if (!parsed.colors) {
        parsed.colors = { primary: "#1e1b4b", secondary: "#d946ef", accentBg: "#fdf4ff" };
      }
      setContent(parsed);
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updatedContent = { ...content, [name]: value };
    setContent(updatedContent);
    localStorage.setItem('project-data', JSON.stringify(updatedContent));
  };

  const handleColorChange = (key: keyof ProjectContent['colors'], value: string) => {
    const updatedContent = {
      ...content,
      colors: { ...content.colors, [key]: value }
    };
    setContent(updatedContent);
    localStorage.setItem('project-data', JSON.stringify(updatedContent));
  };

  return (
    <div 
      className="min-h-screen flex flex-col font-sans transition-colors duration-300"
      style={{
        // Deze variabelen sturen de hele pagina aan
        // @ts-ignore
        '--p-color': content.colors.primary,
        '--s-color': content.colors.secondary,
        '--a-bg': content.colors.accentBg,
      } as React.CSSProperties}
    >
      
      {/* --- ADMIN BAR --- */}
      <nav className="sticky top-0 z-50 bg-slate-900 text-white px-6 py-3 flex flex-wrap justify-between items-center border-b border-white/10 gap-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${isAdmin ? 'bg-green-500 animate-pulse' : 'bg-slate-500'}`}></div>
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-70">Editor</span>
          </div>
          
          {/* Kleuren Pickers (Alleen zichtbaar in Admin mode) */}
          {isAdmin && (
            <div className="flex items-center gap-4 bg-background/5 px-4 py-1 rounded-full border border-white/10">
              <label className="flex items-center gap-2 cursor-pointer">
                <span className="text-[8px] uppercase font-bold opacity-60">Tekst</span>
                <input type="color" value={content.colors.primary} onChange={(e) => handleColorChange('primary', e.target.value)} className="w-4 h-4 bg-transparent border-none cursor-pointer" />
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <span className="text-[8px] uppercase font-bold opacity-60">Accent</span>
                <input type="color" value={content.colors.secondary} onChange={(e) => handleColorChange('secondary', e.target.value)} className="w-4 h-4 bg-transparent border-none cursor-pointer" />
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <span className="text-[8px] uppercase font-bold opacity-60">Sectie BG</span>
                <input type="color" value={content.colors.accentBg} onChange={(e) => handleColorChange('accentBg', e.target.value)} className="w-4 h-4 bg-transparent border-none cursor-pointer" />
              </label>
            </div>
          )}
        </div>
        
        <button 
          onClick={() => setIsAdmin(!isAdmin)}
          className={`px-6 py-1.5 rounded-full text-[10px] font-bold uppercase transition-all shadow-lg ${
            isAdmin ? 'bg-background text-black' : 'bg-fuchsia-600 text-white'
          }`}
        >
          {isAdmin ? "Sla wijzigingen op" : "Pas Pagina Aan"}
        </button>
      </nav>

      {/* --- DE PAGINA CONTENT --- */}
      <main className="flex-grow bg-background">
        {/* Hero Sectie - Gebruikt Accent Kleur als BG */}
        <section className="py-16 md:py-24 px-6 border-b transition-colors" style={{ backgroundColor: 'var(--a-bg)' }}>
          <div className="max-w-4xl mx-auto text-center">
            {isAdmin ? (
              <div className="flex flex-col gap-2 mb-6">
                 <input name="title" value={content.title} onChange={handleChange} className="text-4xl font-black text-center border-2 border-dashed border-slate-300 p-2 rounded-lg bg-background w-full" />
                 <input name="highlight" value={content.highlight} onChange={handleChange} className="text-4xl font-black text-center border-2 border-dashed border-slate-300 p-2 rounded-lg bg-background" style={{ color: 'var(--s-color)' }} />
              </div>
            ) : (
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 italic uppercase" style={{ color: 'var(--p-color)' }}>
                {content.title} <span style={{ color: 'var(--s-color)' }}>{content.highlight}</span>
              </h1>
            )}

            {isAdmin ? (
              <input name="subtitle" value={content.subtitle} onChange={handleChange} className="w-full text-center border-2 border-dashed border-slate-300 p-2 font-bold mb-12 rounded-lg bg-background" />
            ) : (
              <p className="text-xs font-bold uppercase tracking-[0.3em] mb-12 italic opacity-80" style={{ color: 'var(--s-color)' }}>
                {content.subtitle}
              </p>
            )}
            
            <div className="bg-background p-3 rounded-[2.5rem] shadow-2xl border border-black/5 overflow-hidden">
               <div className="aspect-[4/5] md:aspect-video bg-slate-50 flex items-center justify-center">
                 <img src="/img/ijs.png" alt="Mockup" className="max-h-full object-contain" />
               </div>
            </div>
          </div>
        </section>

        {/* Content Sectie */}
        <section className="max-w-6xl mx-auto py-20 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-7 space-y-8">
              <div>
                {isAdmin ? (
                  <input name="rationaleTitle" value={content.rationaleTitle} onChange={handleChange} className="text-2xl font-black mb-4 w-full border-b border-dashed border-slate-200" />
                ) : (
                  <h2 className="text-3xl font-black mb-6 tracking-tight" style={{ color: 'var(--p-color)' }}>{content.rationaleTitle}</h2>
                )}

                {isAdmin ? (
                  <textarea name="rationaleText" value={content.rationaleText} onChange={handleChange} className="w-full h-40 p-4 border-2 border-dashed border-slate-100 rounded-2xl bg-slate-50" />
                ) : (
                  <p className="text-slate-600 leading-relaxed text-lg">{content.rationaleText}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Kaart: Symbool */}
                <div className="p-6 rounded-3xl border transition-colors" style={{ backgroundColor: 'var(--a-bg)', borderColor: 'rgba(0,0,0,0.05)' }}>
                  {isAdmin ? (
                    <input name="symbolTitle" value={content.symbolTitle} onChange={handleChange} className="font-black uppercase text-xs mb-2 w-full bg-transparent border-b border-black/10" style={{ color: 'var(--s-color)' }} />
                  ) : (
                    <h3 className="font-black uppercase text-xs mb-3 tracking-widest" style={{ color: 'var(--s-color)' }}>{content.symbolTitle}</h3>
                  )}
                  {isAdmin ? (
                    <textarea name="symbolText" value={content.symbolText} onChange={handleChange} className="text-sm text-slate-600 w-full h-24 bg-transparent border-none" />
                  ) : (
                    <p className="text-sm text-slate-600 leading-relaxed">{content.symbolText}</p>
                  )}
                </div>

                {/* Kaart: Doelgroep */}
                <div className="p-6 rounded-3xl border" style={{ backgroundColor: 'white', borderColor: 'var(--a-bg)', borderWidth: '2px' }}>
                  {isAdmin ? (
                    <input name="targetTitle" value={content.targetTitle} onChange={handleChange} className="font-black uppercase text-xs mb-2 w-full bg-transparent border-b border-black/10" style={{ color: 'var(--p-color)' }} />
                  ) : (
                    <h3 className="font-black uppercase text-xs mb-3 tracking-widest" style={{ color: 'var(--p-color)' }}>{content.targetTitle}</h3>
                  )}
                  {isAdmin ? (
                    <textarea name="targetText" value={content.targetText} onChange={handleChange} className="text-sm text-slate-600 w-full h-24 bg-transparent border-none" />
                  ) : (
                    <p className="text-sm text-slate-600 leading-relaxed">{content.targetText}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Kleurenpalet display */}
            <div className="lg:col-span-5">
              <div className="p-8 rounded-[2rem] text-white shadow-xl" style={{ backgroundColor: 'var(--p-color)' }}>
                <h3 className="font-bold uppercase tracking-widest text-[10px] mb-8" style={{ color: 'var(--s-color)' }}>Visueel Palet</h3>
                <div className="space-y-6">
                  {/* Primaire Kleur */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full border border-white/20 shadow-inner" style={{ backgroundColor: 'var(--p-color)' }}></div>
                      <span className="text-sm font-bold">Main Brand Color</span>
                    </div>
                    <span className="text-[10px] opacity-40 font-mono italic">{content.colors.primary}</span>
                  </div>
                  {/* Secundaire Kleur */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full shadow-inner" style={{ backgroundColor: 'var(--s-color)' }}></div>
                      <span className="text-sm font-bold">Accent Color</span>
                    </div>
                    <span className="text-[10px] opacity-40 font-mono italic">{content.colors.secondary}</span>
                  </div>
                  {/* Achtergrond Kleur */}
                  <div className="flex items-center justify-between opacity-80">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full border border-white/10 shadow-inner" style={{ backgroundColor: 'var(--a-bg)' }}></div>
                      <span className="text-sm font-bold">Soft Background</span>
                    </div>
                    <span className="text-[10px] opacity-40 font-mono italic">{content.colors.accentBg}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 text-center border-t border-slate-100">
        <Link href="/projects" className="text-[10px] font-bold uppercase tracking-[0.2em] hover:opacity-50 transition-colors" style={{ color: 'var(--p-color)' }}>
          ← Terug naar overzicht
        </Link>
      </footer>
    </div>
  )
}