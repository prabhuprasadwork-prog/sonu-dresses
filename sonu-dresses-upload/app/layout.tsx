import type { Metadata } from "next"
import { Young_Serif, Hind } from "next/font/google"
import "./globals.css"
import { site } from "@/lib/site-config"
import { MotionProvider, ScrollProgress } from "@/components/motion/reveal"

const display = Young_Serif({ weight: "400", subsets: ["latin"], variable: "--font-display" })
const sans = Hind({ weight: ["400", "500", "600"], subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: `${site.name} | ${site.tagline}`,
  description: `${site.name} has sold ready-made garments for men, women, boys and girls since ${site.established}, retail and wholesale, from ${site.address}. Call ${site.ownerNickname} on ${site.phoneDisplay}.`,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <MotionProvider>
          <ScrollProgress />
          {children}
        </MotionProvider>
      </body>
    </html>
  )
}
