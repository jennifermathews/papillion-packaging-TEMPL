import { Star, MessageCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language"
import { TESTIMONIALS, whatsappHref } from "@/lib/content"

export default function Testimonials() {
  const { t } = useLanguage()

  const avg = TESTIMONIALS.reduce((a, t) => a + t.stars, 0) / TESTIMONIALS.length

  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-market-green">{t({ en: "Client reviews", hi: "क्लाइंट रीव्यू" })}</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">
          {t({ en: "8 voices, one rating — 4.9/5", hi: "8 आवाज़ें, एक रेटिंग — 4.9/5" })}
        </h1>
        <div className="mt-6 flex items-center gap-4">
          <span className="text-5xl font-extrabold text-market-brown">{avg.toFixed(1)}★</span>
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="fill-market-amber size-5 text-market-amber" />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">{t({ en: "(" + TESTIMONIALS.length + " reviews)", hi: "(" + TESTIMONIALS.length + " रीव्यू)" })}</span>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((review) => (
            <Card key={review.name} className="border-border/60">
              <CardContent className="p-5">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`size-4 ${i < review.stars ? "fill-market-amber text-market-amber" : "text-muted"}`} />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">“{t(review.quote)}”</p>
                <div className="mt-4 border-t border-border/60 pt-3">
                  <p className="text-sm font-semibold">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{t(review.company)}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-20 md:pb-28">
        <div className="rounded-3xl bg-primary px-6 py-12 text-center">
          <h2 className="text-3xl font-extrabold text-primary-foreground">
            {t({ en: "Want to be our next success story?", hi: "हमारी अगली सफलता कहानी बनें?" })}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">
            {t({ en: "A chat with Devavrat takes 15 minutes and gets you a real prototype inside a week.", hi: "देवв्र्रत के साथ 15 मिनट बात से एक हफ्ते में प्रोटोटाइप।" })}
          </p>
          <a href={whatsappHref("Hi Papillon, I'd like to start a project.")} target="_blank" rel="noreferrer" className="mt-8 inline-flex">
            <Button size="lg" className="rounded-full bg-market-brown hover:bg-market-brown/90 text-primary-foreground">
              <MessageCircle className="size-4" /> {t({ en: "Start a Project", hi: "प्रोजेक्ट शुरू करें" })}
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}
