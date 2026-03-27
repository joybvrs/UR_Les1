"use client"

import { createContext, useContext, useEffect, useState } from "react"

type Style = "minimal" | "colorful"

const StyleContext = createContext<{
  style: Style
  toggleStyle: () => void
}>({ style: "minimal", toggleStyle: () => {} })

export function useStyle() {
  return useContext(StyleContext)
}

export function StyleProvider({ children }: { children: React.ReactNode }) {
  const [style, setStyle] = useState<Style>("minimal")

  useEffect(() => {
    const saved = localStorage.getItem("style") as Style
    if (saved === "colorful" || saved === "minimal") {
      setStyle(saved)
      document.documentElement.setAttribute("data-style", saved)
    }
  }, [])

  const toggleStyle = () => {
    const next: Style = style === "minimal" ? "colorful" : "minimal"
    setStyle(next)
    localStorage.setItem("style", next)
    document.documentElement.setAttribute("data-style", next)
  }

  return (
    <StyleContext.Provider value={{ style, toggleStyle }}>
      {children}
    </StyleContext.Provider>
  )
}