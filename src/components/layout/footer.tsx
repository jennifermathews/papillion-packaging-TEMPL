import { Link } from "react-router-dom"
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react"
import { WhatsAppLink, whatsappHref } from "@/components/whatsapp-link"
import { useLanguage } from "@/lib/language"
import { NAV, company } from "@/lib/content"

export function Footer() {
  const { t } = useLanguage()

  const quickLinks = [
    ...NAV.map((n) => ({ label: t(n.key), to: n.to })),
    { label: t({ en: "Get a Quote", hi: "कोटेशन लें" }), to: whatsappHref("Hi Papillon, I need a packaging quote.") },
  ]

  return (
    <footer className="border-t border-border/60 bg-card pb-20 lg:pb-0">
      <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <img src="/logo.webp" alt="Papillon Packaging logo" className="h-12 w-12 object-contain" />
            <p className="text-base font-semibold tracking-tight">{company.name.en}</p>
            <p className="max-w-xs text-sm text-muted-foreground">
              {t({ en: "Bespoke packaging crafted in Delhi NCR — corrugated, luxury, and eco options for brands across India.", hi: "दिल्ली NCR में बनाया गया बेस्पोक पैकेजिंग — कोरेगेटेड, लक्जरी और इको विकल्प सबके लिए।" })}
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold">{t({ en: "Quick Links", hi: "त्वरित लिंक" })}</h4>
            <ul className="space-y-2">
              {quickLinks.slice(0, 7).map((l) => (
                <li key={l.to}>
                  {l.to.startsWith("http") ? (
                    <a href={l.to} target="_blank" rel="noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-foreground">{l.label}</a>
                  ) : (
                    <Link to={l.to} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{l.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold">{t({ en: "Contact", hi: "संपर्क" })}</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-market-brown" />
                <span>
                  {t({ en: "Plot 42, Delhi NCR Industrial Area,\nNew Delhi — 110044", hi: "प्लॉट 42, दिल्ली NCR इंडस्ट्रियल एरिया,\nनई दिल्ली — 110044" })}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 shrink-0 text-market-brown" />
                <WhatsAppLink message="Hey, I want to know more about your packaging services." className="hover:text-foreground">
                  +91-98765 43210
                </WhatsAppLink>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 shrink-0 text-market-brown" />
                <a href="mailto:hello@papillon.in" className="hover:text-foreground">hello@papillon.in</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold">{t({ en: "Need a Quote?", hi: "कोटेशन चाहिए?" })}</h4>
            <p className="mb-4 text-sm text-muted-foreground">
              {t({ en: "Chat directly with our team on WhatsApp and get a free consultation.", hi: "WhatsApp पर हमसे चैट करें और मुफ्त परामर्श प्राप्त करें।" })}
            </p>
            <WhatsAppLink message="Hi Papillon, I need a packaging quote." className="inline-flex items-center gap-2 rounded-full bg-market-green px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-market-green-soft">
              {t({ en: "Chat on WhatsApp", hi: "WhatsApp पर चैट" })} <ArrowRight className="size-4" />
            </WhatsAppLink>
          </div>
        </div>

        <div className="mt-10 border-t border-border/60 pt-6 text-center text-xs text-muted-foreground md:flex md:items-center md:justify-between md:text-left">
          <span>{t({ en: "© 2026 Papillon Packaging. All rights reserved.", hi: "© 2026 पैपिलियन पैकेजिंग। सभी अधिकार सुरक्षित।" })}</span>
          <span>{t({ en: "Designed with care in Delhi NCR", hi: "दिल्ली NCR में ध्यानपूर्वक डिज़ाइन" })}</span>
        </div>
      </div>
    </footer>
  )
}
