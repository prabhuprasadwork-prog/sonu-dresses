"use client"

import { MessageCircle } from "lucide-react"
import { motion } from "motion/react"
import { site } from "@/lib/site-config"

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={site.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Message ${site.name} on WhatsApp`}
      initial={{ scale: 0, opacity: 0, rotate: -45 }}
      animate={{ scale: 1, opacity: 1, rotate: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: "spring", stiffness: 260, damping: 18, delay: 1.2 }}
      className="pulse-ring fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-ink"
    >
      <MessageCircle className="size-7" aria-hidden />
    </motion.a>
  )
}
