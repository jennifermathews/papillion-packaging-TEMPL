import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { LangToggle } from "@/components/lang-toggle"
import { useLanguage } from "@/lib/language"
import { NAV } from "@/lib/content"

export function Header() {
  const [open, setOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src="/logo.webp" alt="Papillon" className="h-9 w-9 object-contain" />
          <span className="text-base font-semibold tracking-tight text-foreground">Papillon Packaging</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) =>
              `rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
                isActive ? "bg-market-brown-soft text-market-brown" : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
              }`
            }>
              {t(item.key)}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LangToggle />
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background/95 px-4 pb-4 lg:hidden">
          <nav className="flex flex-col gap-0.5 pt-2">
            {NAV.map((item) => (
              <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} className={({ isActive }) =>
                `rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                  isActive ? "bg-market-green/15 text-market-green" : "text-muted-foreground hover:text-foreground"
                }`
              }>
                {t(item.key)}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
