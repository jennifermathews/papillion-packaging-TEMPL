import { ArrowRight, ShieldCheck, Zap, Leaf, BadgeCheck, MessageCircle } from "lucide-react"
import { Link } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language"
import { FEATURES, STEPS, whatsappHref } from "@/lib/content"

export default function Capabilities() {
  const { t } = useLanguage()

  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-market-green">{t({ en: "Capabilities", hi: "क्षमता" })}</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">
          {t({ en: "Designers, engineers, and production operators inside one gate", hi: "एक गाली में डिज़ाइनर, इंजीनियर और ऑपरेटर" })}
        </h1>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          {t({
            en: "No middle man, no machine leasing. Here's everything we run in-house — from CAD to finished pallet.",
            hi: "कोई बिचौलिया नहीं, कोई मशीन किराए नहीं। CAD से लेकर तैयार पैलेट तक - सब in-house。"
          })}
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <Card key={f.title.en} className="border-border/60">
              <CardContent className="p-5">
                <div className="mb-4 aspect-[4/3] overflow-hidden rounded-xl">
                  <img src={f.img} alt={f.title.en} className="h-full w-full object-cover" />
                </div>
                <h3 className="font-semibold">{t(f.title)}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{t(f.d)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-border/60 bg-muted/40 px-4 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{t({ en: "Close the loop — we handle design to pallet", hi: "लेzo-update — डिजाइन से पैलेट तक" })}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s) => (
              <Card key={s.n} className="border-border/60 bg-card">
                <CardContent className="p-5">
                  <span className="text-sm font-bold text-market-brown">{s.n}</span>
                  <h3 className="mt-2 font-semibold text-base">{t(s.title)}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{t(s.d)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{t({ en: "Quality & Compliance", hi: "गुणवत्ता और अनुपालन" })}</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {[
            { icon: ShieldCheck, title: { en: "ISTA-style Testing", hi: "ISTA-शैली परीक्षण" }, d: { en: "Drop, compression, vibration, moisture — full report before production.", hi: "ड्रॉप, संपीढ़न, कंपन, नमी - पूरा रिपोर्ट प्रोडक्शन से पहले।" } },
            { icon: BadgeCheck, title: { en: "ISO 9001 2015", hi: "ISO 9001 2015" }, d: { en: "Documented process, audit trail, controlled materials list.", hi: "दस्टावेज़ प्रक्रिया, ऑडिट ट्रेल, नियंत्रित सामग्री सूची।" } },
            { icon: Leaf, title: { en: "FSC Certified", hi: "FSC प्रमाणित" }, d: { en: "Chain-of-custody paper tracking from source forest to your door.", hi: "कागज़ की कल溪ा-कस्टडी ट्रैकिंग मूल फॉरेस्ट से आपके दरवाजे तक।" } },
            { icon: Zap, title: { en: "NCR delivery windows", hi: "NCR डिलीवरी विंडो" }, d: { en: "Dispatch truck fleet, tracked shipments, up to three delivery slots per week.", hi: "डिस्पैच ट्रकलेक ट्रैक्ड shipments, सप्ताह में तीन delivery slots।" } },
          ].map((c) => (
            <Card key={c.title.en} className="border-border/60">
              <CardContent className="p-6">
                <c.icon className="size-6 text-market-green" />
                <h3 className="mt-3 text-lg font-semibold">{t(c.title)}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t(c.d)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-20 md:py-12">
        <div className="rounded-3xl bg-primary px-6 py-12 text-center">
          <h2 className="text-3xl font-extrabold text-primary-foreground">
            {t({ en: "Want to see the plant?", hi: "प्लांट देखने को आओ?" })}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">
            {t({ en: "A 30-minute walk-through convinces most brands. We bring coffee and prototypes.", hi: "30-मिनट-स्कीरज* जूत-पुटह-हर्ता शैटिक बिकट-जाहरन इज बेस्ट वाण।" })}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={whatsappHref("Hi Papillon, I'd like to visit the plant.")} target="_blank" rel="noreferrer">
              <Button size="lg" className="rounded-full bg-market-brown hover:bg-market-brown/90 text-primary-foreground">
                <MessageCircle className="size-4" /> {t({ en: "Book a Visit", hi: "विजिट बुक करें" })}
              </Button>
            </a>
            <Link to="/testimonials">
              <Button size="lg" variant="outline" className="rounded-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                {t({ en: "Client Reviews", hi: "क्लाइंट रीव्यू" })} <ArrowRight className="size-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
