"use client"

import { useState, useEffect, ChangeEvent } from "react"
import Link from 'next/link'

interface UserData {
  name: string;
  email: string;
  role: string;
  bio: string;
}

export default function AdminUserPage() {
  // State voor user info
  const [user, setUser] = useState<UserData>({
    name: "Joy Bevers",
    email: "joy@bevers-design.be",
    role: "Graphic & Visual Designer",
    bio: "Passie voor esthetiek en impact. Ik vertaal visies naar krachtige beeldtaal."
  });

  const [isSaved, setIsSaved] = useState(false);

  // Laden van data
  useEffect(() => {
    const savedUser = localStorage.getItem('user-settings');
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  // Opslaan van data
  const handleSave = () => {
    localStorage.setItem('user-settings', JSON.stringify(user));
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000); // Melding verdwijnt na 3 sec
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleDeleteAccount = () => {
    if (confirm("Weet je zeker dat je jouw account wilt verwijderen? Dit kan niet ongedaan worden gemaakt.")) {
      localStorage.removeItem('user-settings');
      alert("Account verwijderd.");
      window.location.href = "/"; // Terug naar home
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-10 my-10 space-y-12 bg-gradient-to-br from-pink-100 via-white to-orange-100 rounded-[2rem] shadow-2xl border border-white/20 min-h-[80vh]">
      
      {/* Header / Breadcrumb */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-pink-200/50 pb-10">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="px-4 py-1 rounded-full text-[10px] font-black tracking-widest uppercase text-white bg-gradient-to-r from-indigo-900 to-indigo-800">
              User Settings
            </span>
            {isSaved && <span className="text-green-600 text-xs font-bold animate-pulse">✓ Opgeslagen!</span>}
          </div>
          <h1 className="text-4xl font-black text-indigo-950 tracking-tight">
            Beheer je <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">Profiel</span>
          </h1>
        </div>
        
        <Link href="/" className="px-6 py-3 bg-background text-indigo-950 font-bold rounded-xl border border-indigo-50 hover:border-pink-300 transition-all text-sm shadow-sm">
          Terug naar site
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Linker kolom: Formulier */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-background/60 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white">
            <h2 className="text-lg font-bold text-indigo-950 mb-6 flex items-center gap-2">
              <span className="w-2 h-6 bg-pink-500 rounded-full"></span>
              Persoonlijke Informatie
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Volledige Naam</label>
                <input 
                  type="text" name="name" value={user.name} onChange={handleChange}
                  className="w-full p-4 rounded-2xl border border-pink-100 focus:border-pink-400 focus:ring-4 focus:ring-pink-500/5 outline-none transition-all font-medium text-indigo-950"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">E-mail Adres</label>
                <input 
                  type="email" name="email" value={user.email} onChange={handleChange}
                  className="w-full p-4 rounded-2xl border border-pink-100 focus:border-pink-400 focus:ring-4 focus:ring-pink-500/5 outline-none transition-all font-medium text-indigo-950"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Huidige Rol / Functie</label>
                <input 
                  type="text" name="role" value={user.role} onChange={handleChange}
                  className="w-full p-4 rounded-2xl border border-pink-100 focus:border-pink-400 focus:ring-4 focus:ring-pink-500/5 outline-none transition-all font-medium text-indigo-950"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Korte Bio</label>
                <textarea 
                  name="bio" value={user.bio} onChange={handleChange} rows={4}
                  className="w-full p-4 rounded-2xl border border-pink-100 focus:border-pink-400 focus:ring-4 focus:ring-pink-500/5 outline-none transition-all font-medium text-indigo-950 resize-none"
                />
              </div>
            </div>

            <button 
              onClick={handleSave}
              className="mt-8 px-10 py-4 bg-indigo-950 text-white font-bold rounded-2xl hover:bg-indigo-900 transition-all shadow-lg shadow-indigo-200"
            >
              Wijzigingen Opslaan
            </button>
          </div>
        </div>

        {/* Rechter kolom: Acties / Kaarten */}
        <div className="space-y-8">
          
          {/* Preview Kaart */}
          <div className="bg-gradient-to-br from-indigo-950 to-slate-900 p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/20 blur-3xl rounded-full -mr-10 -mt-10 group-hover:bg-pink-500/40 transition-all"></div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-pink-400 mb-6 italic">Live Preview</h3>
            <div className="space-y-4 relative z-10">
              <p className="text-2xl font-bold tracking-tight leading-tight">{user.name}</p>
              <p className="text-sm opacity-70 leading-relaxed font-light">{user.bio}</p>
              <div className="pt-4">
                <span className="text-[10px] px-3 py-1 bg-backgrond /10 rounded-full border border-white/10 font-bold uppercase tracking-widest">
                  {user.role}
                </span>
              </div>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="bg-background p-8 rounded-3xl shadow-lg border border-orange-100">
            <h3 className="text-xs font-black uppercase tracking-widest text-orange-600 mb-4 italic">Danger Zone</h3>
            <p className="text-sm text-slate-500 mb-6 leading-relaxed">
              Het verwijderen van je account is permanent. Alle data wordt direct gewist.
            </p>
            <button 
              onClick={handleDeleteAccount}
              className="w-full py-4 text-orange-600 font-bold border-2 border-orange-50 rounded-2xl hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all duration-300"
            >
              Verwijder Mijn Account
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}