import { MessageCircle, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language"
import { FAQ, whatsappHref } from "@/lib/content"

export default function Faq() {
  const { t } = useLanguage()

  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-market-green">{t({ en: "FAQ", hi: "सवाल-जवाब" })}</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">
          {t({ en: "Quick answers to common questions", hi: "आम प्रश्नों के त्वरित उत्तर" })}
        </h1>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          {t({
            en: "Quick answers to common questions. If the answer you need is not here, we will dive deeper on WhatsApp.",
            hi: "आम प्रश्नों के त्वरित उत्तर। यदि आपका जवाब यहां नहीं है तो हम WhatsApp में गहराई में जाते हैं।"
          })}
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="grid gap-3 md:grid-cols-2">
          {FAQ.map((f) => (
            <Card key={f.q.en} className="border-border/60">
              <CardContent className="p-5">
                <h3 className="font-semibold text-base">{t(f.q)}</h3>
                <p className="mt-2.5 text-sm text-muted-foreground">{t(f.a)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="rounded-3xl bg-primary px-6 py-12 text-center">
          <h2 className="text-3xl font-extrabold text-primary-foreground">
            {t({ en: "Can't find the answer you'd like?", hi: "आपके सवाल का जवाब नहीं मिला?" })}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">
            {t({ en: "Drop us a message. A real person answers within 15 minutes during working hours.", hi: "एक संदेश भेजें। कार्य के घंटों में वर्यक व्य者 15 मिनट में जवाब देता है।" })}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={whatsappHref("Hi Papillon, I have a question.")} target="_blank" rel="noreferrer">
              <Button size="lg" className="rounded-full bg-market-brown hover:bg-market-brown/90 text-primary-foreground">
                <MessageCircle className="size-4" /> {t({ en: "Ask on WhatsApp", hi: "WhatsApp पर पूछें" })}
              </Button>
            </a>
            <a href={whatsappHref("Hi Papillon, I'd like a call instead.")} target="_blank" rel="noreferrer">
              <Button size="lg" variant="outline" className="rounded-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Phone className="size-4" /> {t({ en: "Request a Call", hi: "कॉल का अनुरोध करें" })}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
