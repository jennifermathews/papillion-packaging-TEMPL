import { ArrowRight, MessageCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language"
import { PRODUCTS, whatsappHref } from "@/lib/content"

export default function Products() {
  const { t } = useLanguage()

  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-market-green">{t({ en: "Products", hi: "उत्पाद" })}</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">
          {t({ en: "Six families. Sixty-five products.", hi: "छह परिवार। 65 उत्पाद।" })}
        </h1>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          {t({
            en: "Every family is designed, prototyped, tested, and produced in-house. Below are the family's tastes, specs, and the kind of goods each one serves best.",
            hi: "हर परिवार इन-हाउस में डिजाइन, प्रोटोटाइप, परीक्षण और उत्पादन। नीचे विशेषताए, स्पेक्स, और सबसे उपयुक्त माल की जानकारी।"
          })}
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="grid gap-8">
          {PRODUCTS.map((p, i) => (
            <Card key={p.id} className="overflow-hidden border-border/60">
              <div className={`grid gap-0 md:grid-cols-2 ${i % 2 === 1 ? "md:grid-flow-dense" : ""}`}>
                <div className={`aspect-[4/3] w-full overflow-hidden md:aspect-auto ${i % 2 === 1 ? "md:col-start-2" : ""}`}>
                  <img src={p.img} alt={p.name.en} className="h-full w-full object-cover" />
                </div>
                <CardContent className="flex flex-col justify-center p-6 md:p-8">
                  <span className="text-xs font-semibold uppercase tracking-widest text-market-brown">{t({ en: "Family " + (i + 1), hi: "परिवार " + (i + 1) })}</span>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight">{t(p.name)}</h2>
                  <p className="mt-3 text-muted-foreground">{t(p.desc)}</p>

                  <ul className="mt-5 space-y-2">
                    {p.specs.map((s) => (
                      <li key={s.en} className="flex items-start gap-2 text-sm">
                        <ArrowRight className="mt-0.5 size-4 shrink-0 text-market-green" />
                        <span>{t(s)}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a href={whatsappHref(`Hi Papillon, I'm interested in ${p.name.en}.`)} target="_blank" rel="noreferrer">
                      <Button className="rounded-full bg-market-green hover:bg-market-green/90 text-primary-foreground">
                        <MessageCircle className="size-4" /> {t({ en: "Get pricing", hi: "प्राइसिंग पाएं" })}
                      </Button>
                    </a>
                    <Button variant="outline" className="rounded-full">
                      {t({ en: "Download catalog", hi: "कैटलॉग डाउनलोड" })}
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Sustainability banner */}
      <section className="border-y border-border/60 bg-muted/40 px-4 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{t({ en: "Sustainability at the core", hi: "टिकाऊपन हार्ड में" })}</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-muted-foreground">
                {t({
                  en: "Every product family above has a zero-plastic alternative. FSC papers, soy-ink printing, and take-back recyclables across all lines. If you want documentation, we share certificates.",
                  hi: "ऊपर की हर उत्पाद परिवार का जीरो-प्लास्टिक विकल्प है। सभी लाइनों में FSC कागज, सोय-इलिंक प्रिंटिंग और तेक-बैक recyclables।"
                })}
              </p>
              <a href={whatsappHref("Hi Papillon, I want sustainable packaging.")} target="_blank" rel="noreferrer" className="mt-5 inline-flex">
                <Button className="rounded-full bg-market-green hover:bg-market-green/90 text-primary-foreground">
                  <MessageCircle className="size-4" /> {t({ en: "Ask for certificates", hi: "द प्रमाणपत्र लें" })}
                </Button>
              </a>
            </div>
            <img src="/sustainability.webp" alt="Sustainability" className="rounded-2xl border border-border/60 object-cover" />
          </div>
        </div>
      </section>
    </div>
  )
}
