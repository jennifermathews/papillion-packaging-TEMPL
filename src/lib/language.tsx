import { createContext, useContext, useState } from "react"
import type { ReactNode } from "react"

export type Lang = "en" | "hi"

const LanguageContext = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: (map: { en: string; hi: string }) => string } | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en")

  const t = (map: { en: string; hi: string }) => map[lang]

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider")
  return ctx
}
