import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language"
import type { Lang } from "@/lib/language"

const options: { label: string; value: Lang }[] = [
  { label: "EN", value: "en" },
  { label: "हि", value: "hi" },
]

export function LangToggle() {
  const { lang, setLang } = useLanguage()
  return (
    <div className="flex rounded-full border border-border bg-muted p-0.5" role="group" aria-label="Language">
      {options.map((o) => (
        <Button
          key={o.value}
          variant={lang === o.value ? "default" : "ghost"}
          size="sm"
          onClick={() => setLang(o.value)}
          className={lang === o.value ? "rounded-full bg-primary text-primary-foreground px-3" : "rounded-full px-3 text-muted-foreground hover:text-foreground"}
        >
          {o.label}
        </Button>
      ))}
    </div>
  )
}
