import { MessageCircle } from "lucide-react"
import { WhatsAppLink } from "@/components/whatsapp-link"
import { useLanguage } from "@/lib/language"

export function WhatsAppFloat() {
  const { t } = useLanguage()
  return (
    <WhatsAppLink message="Hi Papillon Team! I'd like a packaging quote." className="group fixed bottom-16 right-4 z-40 flex size-13 items-center justify-center rounded-full bg-market-green text-primary-foreground shadow-lg transition-transform hover:scale-105 active:scale-95 lg:bottom-6" aria-label={t({ en: "Chat on WhatsApp", hi: "WhatsApp पर चैट" })}>
      <MessageCircle className="size-6" />
    </WhatsAppLink>
  )
}
