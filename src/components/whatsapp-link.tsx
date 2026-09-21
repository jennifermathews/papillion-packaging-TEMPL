import React from "react"
import { whatsappNumber } from "@/lib/content"

export function whatsappHref(message: string) {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${whatsappNumber}?text=${encoded}`
}

interface Props {
  message?: string
  className?: string
  children: React.ReactNode
  target?: string
}

export function WhatsAppLink({ message, className, children }: Props) {
  const auto = message ?? `Hi Papillon Team! I'd like a quote for packaging.`
  return (
    <a
      href={whatsappHref(auto)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  )
}
