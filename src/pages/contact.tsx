import { useState } from "react"
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/lib/language"
import { whatsappNumber } from "@/lib/content"

export default function Contact() {
  const { t } = useLanguage()
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = `Hi Papillon! My name is ${name}. ${message} My phone is ${phone || "not given"} and email is ${email || "not given"}.`
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, "_blank")
    setSubmitted(true)
    setName("")
    setPhone("")
    setEmail("")
    setMessage("")
  }

  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-market-green">{t({ en: "Contact", hi: "संपर्क" })}</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">
          {t({ en: "One form. A thousand box possibilities.", hi: "एक फॉर्म। हजारों संभावना।" })}
        </h1>
        <p className="mt-5 text-muted-foreground">
          {t({
            en: "Bring us what you ship in today. We'll reply with a dieline concept, a price, and a sample plan.",
            hi: "आज आप जो शिप कर रहे हैं वह लाए। हम डाईलाइन कन्सेप्ट, लागत और सैंपल प्लान के साथ जवाब देंगे।"
          })}
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Info cards */}
          <div className="space-y-4">
            {[
              { icon: MapPin, label: { en: "Address", hi: "पता" }, value: { en: "Plot 42, Delhi NCR Industrial Area, New Delhi — 110044", hi: "प्लॉट 42, दिल्ली NCR औद्योगिक क्षेत्र, नई दिल्ली — 110044" } },
              { icon: Phone, label: { en: "Phone / WhatsApp", hi: "फोन / WhatsApp" }, value: { en: "+91-98765 43210", hi: "+91-98765 43210" } },
              { icon: Mail, label: { en: "Email", hi: "ईमेल" }, value: { en: "hello@papillon.in", hi: "hello@papillon.in" } },
              { icon: Clock, label: { en: "Hours", hi: "घंटे" }, value: { en: "Mon – Sat, 9AM – 6PM", hi: "सोम – शनि, सुबह 9 से शाम 6" } },
            ].map((x) => (
              <Card key={x.label.en} className="border-border/60">
                <CardContent className="flex items-start gap-3 p-4">
                  <x.icon className="mt-0.5 size-5 shrink-0 text-market-green" />
                  <div>
                    <p className="text-sm font-semibold">{t(x.label)}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{t(x.value)}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Form */}
          <Card className="border-border/60 lg:col-span-2">
            <CardContent className="p-6 md:p-8">
              {submitted ? (
                <div className="flex min-h-[20rem] items-center justify-center rounded-xl border border-border/60 bg-muted/30 text-center">
                  <div>
                    <MessageCircle className="mx-auto size-10 text-market-green" />
                    <h3 className="mt-3 font-semibold">{t({ en: "Message sent", hi: "संदेश भेजा गया" })}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">
                      {t({ en: "We opened WhatsApp with your pre-filled message. Send it and our team responds inside 15 minutes.", hi: "आपके पूर्व-भरे संदेश में WhatsApp खुल गया। भेजें और हम 15 मिनट में जवाब देते हैं।" })}
                    </p>
                    <Button className="mt-5 rounded-full bg-market-green hover:bg-market-green/90 text-primary-foreground" onClick={() => setSubmitted(false)}>
                      {t({ en: "Fill again", hi: "फिर से भरें" })}
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label>{t({ en: "Name*", hi: "नाम*" })}</Label>
                      <Input placeholder="Yavan Shukla / YOGkSH" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="space-y-2">
                      <Label>{t({ en: "Phone", hi: "फोन" })}</Label>
                      <Input placeholder="+91 90000 00000" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>{t({ en: "Email", hi: "ईमेल" })}</Label>
                    <Input type="email" placeholder="you@company.in" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label>{t({ en: "Tell us what you ship*", hi: "आप क्या शिप करते हैं*" })}</Label>
                    <Textarea placeholder={t({ en: "e.g. We ship glass candle jars in 3-5 fry cartons...", hi: "e.g. हम ग्लास कैंडल जार को 3-5 खड़े कार्टन में शिप करते हैं..." })} value={message} onChange={(e) => setMessage(e.target.value)} required rows={5} />
                  </div>
                  <Button type="submit" className="rounded-full bg-market-green hover:bg-market-green/90 text-primary-foreground">
                    <MessageCircle className="size-4" /> {t({ en: "Send to WhatsApp", hi: "WhatsApp पर भेजें" })}
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    {t({ en: "*Submit opens WhatsApp with your message pre-filled.", hi: "*Submit WhatsApp को आपके संदेश के साथ खोलेगा।" })}
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
