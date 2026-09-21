import { Leaf, ShieldCheck, BadgeCheck, Zap, MessageCircle, Phone } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/language"
import { STATS, TEAM, STEPS, whatsappHref } from "@/lib/content"

export default function About() {
  const { t } = useLanguage()

  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-market-green">{t({ en: "About Papillon", hi: "पैपिलियन के बारे में" })}</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">
            {t({ en: "Two decades of packaging craft, built from Delhi's industrial heart", hi: "दिल्ली के औद्योगिक जिले से दो दशकों तक पैकेजिंग का शिल्प" })}
          </h1>
          <p className="mt-5 text-muted-foreground md:text-lg">
            {t({
              en: "We started as a box maker. Today we're a full-stack packaging partner — design studio, ISTA-level lab, two production units, and a team of 20 who check every board grade before it ships.",
              hi: "हम एक बॉक्स बनाने वाले से शुरू हुए। आज हम पूर्ण-स्टैक पैकेजिंग पार्टनर हैं - डिजाइन स्टूडियो, ISTA लैब, दो उत्पादन इकाइयां और 20 सदस्यों की टीम।"
            })}
          </p>
        </div>
      </section>

      {/* Stats band */}
      <section className="border-y border-border/60 bg-muted/40 px-4 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {STATS.map((s) => (
              <div key={s.l.en} className="rounded-2xl border border-border/60 bg-card py-5 text-center shadow-sm">
                <p className="text-2xl font-extrabold text-market-brown md:text-3xl">{t(s.v)}</p>
                <p className="mt-1 text-xs font-medium text-muted-foreground">{t(s.l)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">{t({ en: "From a unit to two production lines", hi: "एक इकाई से दो उत्पादन लाइनों तक" })}</h2>
            <p className="mt-4 text-muted-foreground">
              {t({ en: "In 2008, Udayan started Papillon with a single rotary die-cutter and a promise: never ship a box he wouldn't trust with his own product. The promise stuck. We added an in-house design studio, then a testing lab, then a second line — always on our own terms, never borrowed machine time.", hi: "2008 में, उदयन ने पैपिलियन एक रोटरी डाई-कटर और एक वादा से शुरू किया। आज हम इन-हाउस डिजाइन स्टूडियो, टेस्टिंग लैब और दूसरी लाइन के साथ हैं।" })}
            </p>
            <p className="mt-4 text-muted-foreground">
              {t({ en: "Today we serve 200+ brands across apparel, beauty, electronics, food, and pharma — with teams who handle discovery, design, prototype, and production, end-to-end.", hi: "आज हम कपड़ों, सोलें, इलेक्ट्रॉनिक्स, खाद्य और फार्मा के लिए 200+ ब्रांडों की सेवा करते हैं - डिस्कवरी से उत्पादन तक।" })}
            </p>
          </div>
          <div className="grid gap-4">
            <img src="/facility-exterior.webp" alt="Papillon facility" className="rounded-2xl border border-border/60 object-cover" />
            <div className="grid grid-cols-2 gap-4">
              <img src="/design-studio.webp" alt="Design studio" className="rounded-2xl border border-border/60 object-cover" />
              <img src="/testing-lab.webp" alt="Testing lab" className="rounded-2xl border border-border/60 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-border/60 bg-muted/40 px-4 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tight">{t({ en: "What we believe", hi: "हम किस में विश्वास रखते हैं" })}</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: ShieldCheck, title: { en: "Tested, never guessed", hi: "परीक्षण, अनुमान नहीं" }, d: { en: "Every prototype is dropped, compressed, and scanned before production.", hi: "हर प्रोटोटाइप प्रोडक्शन से पहले ड्रॉप, संसद और स्कैन किया जाता है।" } },
              { icon: Leaf, title: { en: "Sustainable by default", hi: "डिफॉल्ट टिकाऊ" }, d: { en: "FSC papers, zero-plastic options, and take-back programs.", hi: "FSC कागज़, जीरो-प्लास्टिक विकल्प और तेक-बैक कार्यक्रम।" } },
              { icon: BadgeCheck, title: { en: "No-hidden-cost pricing", hi: "कोई-छिपा-लागत-प्राइसिंग नहीं" }, d: { en: "The quote we send is the price on the invoice. Full stop.", hi: "जो हम भेजते हैं वही इनवॉइस का मूल्य है।" } },
              { icon: Zap, title: { en: "Speed with scale", hi: "स्पीड-विथ-स्केल" }, d: { en: "Sample in days, production in roughly a week for NCR.", hi: "सैंपल दिनों में, NCR के लिए लगभग एक सप्ताह में उत्पादन।" } },
            ].map((v) => (
              <Card key={v.title.en} className="border-border/60 bg-card">
                <CardContent className="p-5">
                  <v.icon className="size-6 text-market-green" />
                  <h3 className="mt-3 font-semibold">{t(v.title)}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{t(v.d)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team inline */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-market-green">{t({ en: "The team", hi: "टीम" })}</p>
        <h2 className="mt-2 mb-8 text-3xl font-bold tracking-tight md:text-4xl">{t({ en: "Four people. Twenty support hands. One promise.", hi: "चार प्रमुख, 20 सहायता और एक वादा।" })}</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m) => (
            <Card key={m.name.en} className="border-border/60 overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={m.img} alt={m.name.en} className="h-full w-full object-cover" />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold">{t(m.name)}</h3>
                <p className="text-xs text-market-green">{t(m.role)}</p>
                <p className="mt-2 text-xs text-muted-foreground">{t(m.d)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-border/60 bg-muted/40 px-4 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-market-green">{t({ en: "Ways we work", hi: "हम कैसे काम करते हैं" })}</p>
          <h2 className="mt-2 mb-8 text-3xl font-bold tracking-tight md:text-4xl">{t({ en: "A closed-loop process — idea to finished pallet", hi: "बंद-लूप प्रक्रिया - आइडिया से फिनिश्ड पैलेट" })}</h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s) => (
              <Card key={s.n} className="border-border/60 bg-card">
                <CardContent className="p-5">
                  <span className="text-sm font-bold text-market-brown">{s.n}</span>
                  <h3 className="mt-2 font-semibold">{t(s.title)}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{t(s.d)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-20">
        <div className="rounded-3xl bg-primary px-6 py-12 text-center">
          <h2 className="text-3xl font-extrabold text-primary-foreground">
            {t({ en: "Ready to shake hands and ship?", hi: "तैयार हैं हमसे बात करने के लिए?" })}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">
            {t({ en: "Chat with Udayan's team — no pitch deck required, just a product in hand.", hi: "उदयन की टीम से बात करें - सिर्फ उत्पाद की जरूरत है।" })}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={whatsappHref("Hi Papillon, I'd like to talk about packaging.")} target="_blank" rel="noreferrer">
              <Button size="lg" className="rounded-full bg-market-brown hover:bg-market-brown/90 text-primary-foreground">
                <MessageCircle className="size-4" /> {t({ en: "Chat Now", hi: "अभी चैट करें" })}
              </Button>
            </a>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="rounded-full text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10">
                <Phone className="size-4" /> {t({ en: "Contact Page", hi: "संपर्क" })}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
