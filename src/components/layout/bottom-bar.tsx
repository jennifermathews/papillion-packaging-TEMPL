import { NavLink, useLocation } from "react-router-dom"
import { Home, Box, Layers, Phone, HelpCircle, Star, User } from "lucide-react"
import { useLanguage } from "@/lib/language"
import { NAV } from "@/lib/content"

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Home: Home, Box: Box, Layers: Layers, Phone: Phone, HelpCircle: HelpCircle, Star: Star, User: User
}

export function BottomBar() {
  const { t } = useLanguage()
  useLocation()

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-border/60 bg-card/95 backdrop-blur-md lg:hidden" aria-label="Bottom navigation">
      <div className="grid grid-cols-7 px-2 py-1">
        {NAV.map((item) => {
          const Icon = ICONS[item.iconId]
          return (
            <NavLink
              key={item.to}
              to={item.to}
                            className={({ isActive }) =>
                `flex flex-col items-center justify-center gap-0.5 rounded-lg px-1 py-1.5 text-[10px] font-medium transition-colors ${
                  isActive ? "text-market-green" : "text-muted-foreground"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon className={`size-4 ${isActive ? "text-market-green" : "text-muted-foreground"}`} />
                  <span>{t(item.key)}</span>
                </>
              )}
            </NavLink>
          )
        })}
      </div>
    </nav>
  )
}
