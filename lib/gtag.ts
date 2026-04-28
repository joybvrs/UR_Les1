export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID ?? ""

// Extend the Window interface so TypeScript knows about gtag
declare global {
  interface Window {
    gtag: (
      command: "config" | "event" | "js" | "set",
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void
    dataLayer: unknown[]
  }
}

// ─── Pageview ────────────────────────────────────────────────────────────────

export const pageview = (url: string) => {
  if (typeof window === "undefined" || !window.gtag) return
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  })
}

// ─── Custom event ─────────────────────────────────────────────────────────────

type EventParams = {
  action: string
  category?: string
  label?: string
  value?: number
  [key: string]: unknown // allow any extra GA4 params
}

export const event = ({ action, category, label, value, ...rest }: EventParams) => {
  if (typeof window === "undefined" || !window.gtag) return
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
    ...rest,
  })
}