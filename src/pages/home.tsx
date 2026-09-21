import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {
  ArrowRight, Package2, Star, ChevronLeft, ChevronRight, MessageCircle,
  ShieldCheck, Leaf, Truck, BadgeCheck, Phone, HelpCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/language"
import {
  PRODUCTS, STEPS, FEATURES, STATS, TEAM, TESTIMONIALS, FAQ,
  whatsappHref
} from "@/lib/content"

const heroImages = [
  "/hero-corrugated.webp",
  "/hero-rigid-box.webp",
  "/hero-factory-line.webp",
  "/hero-molded-pulp.webp",
]

const marqueeItems = [
  { en: "ISO 9001 certified", hi: "आईएसओ 9001 प्रमाणित" },
  { en: "FSC-certified materials", hi: "FSC-प्रमाणित सामग्री" },
  { en: "Zero-plastic mailers", hi: "जीरो-प्लास्टिक मेलर" },
  { en: "Drop-test reports included", hi: "ड्रॉप-टेस्ट रिपोर्ट" },
  { en: "NCR-wide weekly delivery", hi: "NCR sapేका-सभी डिलिवरी" },
  { en: "In-house CAD & prototyping", hi: "इन-हाउस CAD" },
  { en: "Four-color printing", hi: "चार-रंग प्रिंटिंग" },
  { en: "200+ happy brands", hi: "200+ खुश ब्रांड" },
  { en: "Pulp cushioning experts", hi: "पल्प कुशनिंग विशेषज्ञ" },
  { en: "fair always-on pricing", hi: "सदा-कोइ-पल प्राइसिंग" },
]

export default function Home() {
  const { t, lang } = useLanguage()
  const [heroIdx, setHeroIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setHeroIdx((i) => (i + 1) % heroImages.length), 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[60vh] overflow-hidden md:min-h-[72vh]">
        <div className="absolute inset-0">
          {heroImages.map((src, i) => (
            <img
              key={src}
              src={src}
              alt="Packaging"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${i === heroIdx ? "opacity-100" : "opacity-0"}`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
        </div>

        <div className="relative mx-auto flex max-w-6xl items-center min-h-[60vh] px-4 md:min-h-[72vh]">
          <div className="max-w-2xl py-16 md:py-20">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
              <BadgeCheck className="size-3.5" />
              {t({ en: "ISO 9001 · FSC Certified · Zero Plastic Options", hi: "आईएसओ 9001 · FSC प्रमाणित · जीरो प्लास्टिक विकल्प" })}
            </div>
            <h1 className="text-4xl leading-[1.05] font-extrabold tracking-tight md:text-5xl lg:text-6xl">
              {t({ en: "Packaging That Upgrades Your Brand", hi: "पैकेजिंग जो आपके ब्रांड को अपग्रेड करे" })}
            </h1>
            <p className="mt-5 max-w-xl text-gray-600 md:text-gray-500 dark:text-gray-400">
              {t({
                en: "Bespoke corrugated, luxury rigid, and eco mailers — designed, tested, and produced in Delhi NCR. From shipping carton to shelf.",
                hi: "कस्टम कोरेगेटेड, लक्जरी रिजिड और इको मेलर - डिजाइन, परीक्षण और उत्पादन। शिपिंग कार्टन से लेकर सhelf तक।"
              })}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={whatsappHref("Hi Papillon, I'd like a packaging quote.")} target="_blank" rel="noreferrer">
                <Button size="lg" className="rounded-full bg-market-green hover:bg-market-green/90 text-primary-foreground">
                  <MessageCircle className="size-4" />
                  {t({ en: "Get a Free Quote", hi: "मुफ्त कोटेशन लें" })}
                </Button>
              </a>
              <Link to="/products">
                <Button size="lg" variant="outline" className="rounded-full">
                  {t({ en: "Explore Products", hi: "उत्पाद देखें" })} <ArrowRight className="size-4" />
                </Button>
              </Link>
            </div>

            {/* Trust bar */}
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                { icon: ShieldCheck, label: { en: "Drop-tested", hi: "ड्रॉप-टेस्टेड" } },
                { icon: Leaf, label: { en: "FSC certified", hi: "FSC प्रमाणित" } },
                { icon: Truck, label: { en: "NCR delivery", hi: "NCR डिलिवरी" } },
                { icon: Star, label: { en: "4.9★ rated", hi: "4.9★ रेटेड" } },
              ].map((x) => (
                <div key={x.label.en} className="flex items-center gap-1.5 rounded-full border border-border/60 bg-background/80 px-3 py-1.5 text-xs font-medium backdrop-blur">
                  <x.icon className="size-3.5 text-market-green" />
                  <span>{t(x.label)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel controls */}
        <button onClick={() => setHeroIdx((heroIdx - 1 + heroImages.length) % heroImages.length)} className="absolute left-2 top-1/2 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-border/60 bg-background/80 backdrop-blur hover:bg-accent" aria-label="Previous">
          <ChevronLeft className="size-4" />
        </button>
        <button onClick={() => setHeroIdx((heroIdx + 1) % heroImages.length)} className="absolute right-2 top-1/2 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-border/60 bg-background/80 backdrop-blur hover:bg-accent" aria-label="Next">
          <ChevronRight className="size-4" />
        </button>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-border/60 bg-primary py-3" aria-hidden>
        <div className="animate-marquee flex w-max gap-8 text-primary-foreground">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex shrink-0 items-center gap-2 text-xs font-semibold">
              <Package2 className="size-3" />
              <span>{lang === "hi" ? item.hi : item.en}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {STATS.map((s) => (
            <div key={s.l.en} className="rounded-2xl border border-border/60 bg-card py-5 text-center shadow-sm">
              <p className="text-2xl font-extrabold text-market-brown md:text-3xl">{t(s.v)}</p>
              <p className="mt-1 text-xs font-medium text-muted-foreground">{t(s.l)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products preview */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-market-green">{t({ en: "Family Line", hi: "उत्पाद परिवार" })}</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">{t({ en: "65+ product families to pick from", hi: "65+ उत्पाद परिवारों में से चुनें" })}</h2>
          </div>
          <Link to="/products" className="shrink-0 text-sm font-medium text-market-green hover:underline">
            {t({ en: "View all →", hi: "सभी देखें →" })}
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.slice(0, 6).map((p) => (
            <Card key={p.id} className="group overflow-hidden border-border/60 transition-transform hover:-translate-y-1 hover:shadow-xl">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img src={p.img} alt={p.name.en} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <CardContent className="p-5">
                <h3 className="text-lg font-semibold">{t(p.name)}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{t(p.desc)}</p>
                <Link to="/products" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-market-green hover:underline">
                  {t({ en: "Details", hi: "विवरण" })} <ArrowRight className="size-3.5" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Caps preview */}
      <section className="border-y border-border/60 bg-muted/40 mx-auto px-4 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-market-green">{t({ en: "Capabilities", hi: "क्षमता" })}</p>
          <h2 className="mt-2 mb-8 text-3xl font-bold tracking-tight md:text-4xl">{t({ en: "Full-stack packaging under one roof", hi: "एक छत के नीचे पूर्ण पैकेजिंग" })}</h2>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <Card key={f.title.en} className="border-border/60 bg-card">
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
          <Link to="/capabilities" className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-market-green hover:underline">
            {t({ en: "All capabilities", hi: "सभी क्षमताएं" })} <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-market-green">{t({ en: "Process", hi: "प्रक्रिया" })}</p>
        <h2 className="mt-2 mb-8 text-3xl font-bold tracking-tight md:text-4xl">{t({ en: "How your box moves from idea to loaded pallet", hi: "आइडिया से लोडरे पैलेट तक" })}</h2>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <Card key={s.n} className="border-border/60">
              <CardContent className="p-5">
                <span className="text-sm font-bold text-market-brown">{s.n}</span>
                <h3 className="mt-2 font-semibold">{t(s.title)}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t(s.d)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Link to="/about" className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-market-green hover:underline">
          {t({ en: "Meet the team", hi: "टीम से जानें" })} <ArrowRight className="size-3.5" />
        </Link>
      </section>

      {/* Team preview */}
      <section className="border-y border-border/60 bg-muted/40 px-4 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-market-green">{t({ en: "Team", hi: "टीम" })}</p>
          <h2 className="mt-2 mb-8 text-3xl font-bold tracking-tight md:text-4xl">{t({ en: "The people behind your box", hi: "आपके बॉक्स के पीछे के लोग" })}</h2>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member) => (
              <Card key={member.name.en} className="border-border/60 text-center">
                <CardContent className="p-5">
                  <img src={member.img} alt={member.name.en} className="mx-auto mb-4 size-20 rounded-full object-cover ring-2 ring-border/60" />
                  <h3 className="font-semibold">{t(member.name)}</h3>
                  <p className="mt-0.5 text-xs text-market-green">{t(member.role)}</p>
                  <p className="mt-2 text-xs text-muted-foreground">{t(member.d)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials preview */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-market-green">{t({ en: "Reviews", hi: "रीव्यू" })}</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">{t({ en: "What brands say", hi: "ब्रांड क्या कहते हैं" })}</h2>
          </div>
          <Link to="/testimonials" className="shrink-0 text-sm font-medium text-market-green hover:underline">
            {t({ en: "All reviews →", hi: "सभी रीव्यू →" })}
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.slice(0, 3).map((review) => (
            <Card key={review.name} className="border-border/60">
              <CardContent className="p-5">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`size-4 ${i < review.stars ? "fill-market-amber text-market-amber" : "text-muted"}`} />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">“{t(review.quote)}”</p>
                <div className="mt-4">
                  <p className="text-sm font-semibold">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{t(review.company)}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ preview */}
      <section className="border-y border-border/60 bg-muted/40 px-4 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-market-green">{t({ en: "FAQ", hi: "सवाल-जवाब" })}</p>
          <h2 className="mt-2 mb-8 text-3xl font-bold tracking-tight md:text-4xl">{t({ en: "Quick answers", hi: "त्वरित उत्तर" })}</h2>

          <div className="grid gap-3 md:grid-cols-2">
            {FAQ.slice(0, 4).map((f) => (
              <Card key={f.q.en} className="border-border/60">
                <CardContent className="p-5">
                  <div className="flex items-start gap-2.5">
                    <HelpCircle className="mt-0.5 size-4 shrink-0 text-market-green" />
                    <h3 className="font-semibold text-sm">{t(f.q)}</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground ml-6.5">{t(f.a)}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Link to="/faq" className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-market-green hover:underline">
            {t({ en: "All questions →", hi: "सभी प्रश्न →" })} <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-20">
        <div className="overflow-hidden rounded-3xl bg-primary px-6 py-12 text-center md:px-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-primary-foreground md:text-4xl">
            {t({ en: "Let's Build Your Perfect Box", hi: "आपके बिल्कुल सही बॉक्स बनाएं" })}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            {t({ en: "A 15-minute chat gets you a free consultation, dieline quote, and a real prototype in your hands within a week.", hi: "15 मिनट बातचीत में मुफ्त परामर्श, डाईलाइन कोटेशन और एक हफ्ते में प्रोटोटाइप।" })}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={whatsappHref("Hi Papillon, I'd like a 15-minute consultation.")} target="_blank" rel="noreferrer">
              <Button size="lg" className="rounded-full bg-market-brown hover:bg-market-brown/90 text-primary-foreground">
                <Phone className="size-4" />
                {t({ en: "Book on WhatsApp", hi: "WhatsApp पर बुख करें" })}
              </Button>
            </a>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="rounded-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                {t({ en: "Contact Form", hi: "कontакт फॉर्म" })}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
