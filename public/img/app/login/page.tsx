"use client"

import * as React from "react"
import { useStyle } from "@/components/ThemeProvider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/toast"
import Link from "next/link"

export default function LoginPage() {
  const [loading, setLoading] = React.useState(false)
  const { style } = useStyle()
  const isColorful = style === "colorful"

  async function mockSubmit(e: React.FormEvent, actionName: string) {
    e.preventDefault()
    setLoading(true)
    try {
      await new Promise((r) => setTimeout(r, 1200))
      toast.success(`${actionName} succesvol!`)
    } catch {
      toast.error(`Fout bij ${actionName}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className={`relative flex min-h-screen items-center justify-center p-6 pt-32 transition-all duration-700 overflow-hidden 
      ${isColorful 
        ? "bg-white dark:bg-slate-950" // Color modus heeft nu ook een witte basis in light mode
        : "bg-slate-50 dark:bg-slate-950" 
      }`}>
      
      {/* DYNAMISCHE ACHTERGROND (Reageert op Light/Dark) */}
      {isColorful && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {/* In Light mode zijn de bollen heel zacht, in Dark mode zijn ze intenser */}
          <div className="absolute top-[-10%] right-[-10%] w-[70%] h-[70%] bg-pink-400/20 dark:bg-pink-600/20 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-indigo-400/20 dark:bg-indigo-500/10 blur-[120px] rounded-full animate-pulse delay-700" />
          
          {/* Extra subtiele gradient voor light mode om het "colorful" te maken */}
          <div className="absolute inset-0 bg-gradient-to-tr from-rose-50/50 to-indigo-50/50 dark:from-transparent dark:to-transparent" />
        </div>
      )}

      {/* LOGIN CARD */}
      <Card className={`w-full max-w-md relative z-10 border transition-all duration-500 shadow-2xl 
        ${isColorful 
          ? "bg-white/40 dark:bg-white/5 backdrop-blur-2xl border-white/20 dark:border-white/10" 
          : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800"
        }`}>
        <CardHeader className="space-y-1 pb-8">
          <CardTitle className={`text-3xl font-black tracking-tighter uppercase italic 
            ${isColorful 
              ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-600 dark:from-pink-400 dark:to-indigo-300" 
              : "text-slate-950 dark:text-white"
            }`}>
            Joy<span className="text-indigo-500">.</span> Admin
          </CardTitle>
          <CardDescription className="font-medium text-slate-500 dark:text-slate-400">
            Beheer je visuele wereld.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Tabs defaultValue="login" className="w-full">
            <TabsList className={`grid w-full grid-cols-3 mb-8 p-1 rounded-xl 
              ${isColorful ? "bg-slate-200/50 dark:bg-white/5" : "bg-slate-100 dark:bg-slate-800"}`}>
              {['login', 'register', 'forgot'].map((tab) => (
                <TabsTrigger 
                  key={tab}
                  value={tab}
                  className={`rounded-lg font-black text-[9px] uppercase tracking-widest transition-all 
                    ${isColorful 
                      ? "text-slate-600 dark:text-slate-400 data-[state=active]:bg-white dark:data-[state=active]:bg-white/20 data-[state=active]:text-indigo-600 dark:data-[state=active]:text-white" 
                      : "text-slate-500 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700 dark:text-slate-400 dark:data-[state=active]:text-white"
                    }`}
                >
                  {tab === 'forgot' ? 'Reset' : tab}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="login" className="space-y-5">
              <form onSubmit={(e) => mockSubmit(e, 'Login')} className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest opacity-60 text-slate-900 dark:text-white">E-mail</Label>
                  <Input 
                    type="email" 
                    placeholder="joy@example.be" 
                    className={`rounded-xl border transition-all h-12 
                      ${isColorful 
                        ? "bg-white/60 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400" 
                        : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                      }`} 
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest opacity-60 text-slate-900 dark:text-white">Wachtwoord</Label>
                  <Input 
                    type="password" 
                    className={`rounded-xl border transition-all h-12 
                      ${isColorful 
                        ? "bg-white/60 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-900 dark:text-white" 
                        : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                      }`} 
                  />
                </div>

                <Button className={`w-full py-7 rounded-xl font-black uppercase tracking-widest text-[11px] transition-all hover:scale-[1.02] mt-4 
                  ${isColorful 
                    ? "bg-gradient-to-r from-pink-500 to-indigo-600 text-white shadow-lg shadow-pink-500/20" 
                    : "bg-slate-950 dark:bg-white text-white dark:text-slate-950 hover:opacity-90 shadow-xl"
                  }`} disabled={loading}>
                  {loading ? "Verifiëren..." : "Inloggen →"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>

          <div className="mt-8 text-center">
            <Link href="/home" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors">
              ← Terug naar home
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}