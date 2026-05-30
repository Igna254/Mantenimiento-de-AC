"use client"

import { MessageCircle } from "lucide-react"

const WHATSAPP_NUMBER = "5255123456789"
const DEFAULT_MESSAGE = "Hola! Me gustaria obtener informacion sobre sus servicios de aires acondicionados y electricidad."

export function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
      aria-label="Contactar por WhatsApp"
    >
      <span className="hidden sm:block pl-5 pr-1 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-0 group-hover:max-w-xs overflow-hidden whitespace-nowrap">
        Necesitas ayuda?
      </span>
      <div className="p-4">
        <MessageCircle className="h-6 w-6" />
      </div>
    </a>
  )
}
