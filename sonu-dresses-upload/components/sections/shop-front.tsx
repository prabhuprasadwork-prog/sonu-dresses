"use client"

import { Clock, MapPin, Moon, Navigation, Sun } from "lucide-react"
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "motion/react"
import { useEffect, useRef, useState } from "react"
import { Reveal } from "@/components/motion/reveal"
import { ButtonLink } from "@/components/ui/button"
import { site } from "@/lib/site-config"
import { cn } from "@/lib/utils"

type Mode = "day" | "night"

export function ShopFront() {
  const [mode, setMode] = useState<Mode>("night")
  const [auto, setAuto] = useState(true)
  const frameRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  // Gently switch between day and night until the visitor picks one.
  useEffect(() => {
    if (!auto || reduceMotion) return
    const id = setInterval(() => setMode((m) => (m === "day" ? "night" : "day")), 4500)
    return () => clearInterval(id)
  }, [auto, reduceMotion])

  const { scrollYProgress } = useScroll({ target: frameRef, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"])
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-2, 0, 2])

  const pick = (m: Mode) => {
    setAuto(false)
    setMode(m)
  }

  return (
    <section id="visit" className="relative scroll-mt-24 overflow-hidden bg-indigo-deep text-white">
      {/* Background tint follows day/night */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        animate={{
          background:
            mode === "night"
              ? "radial-gradient(60% 60% at 70% 40%, rgba(233,162,26,0.22), transparent 70%)"
              : "radial-gradient(60% 60% at 70% 40%, rgba(120,170,230,0.25), transparent 70%)",
        }}
        transition={{ duration: 1.2 }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-[1fr_1.1fr] md:px-8 md:py-24">
        <Reveal direction="left">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={site.logo}
            alt={`${site.name} logo`}
            className="mb-6 size-16 rounded-xl shadow-[0_0_30px_rgba(233,162,26,0.5)] animate-[glow_3s_ease-in-out_infinite]"
          />
          <h2 className="font-display text-3xl md:text-4xl">
            Visit the shop on <span className="text-marigold">Main Road</span>
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-white/80">
            Look for the glowing {site.name} sign. Step in to see the full range for men, women and
            kids, and try sizes before you buy.
          </p>

          <ul className="mt-8 space-y-3 text-lg text-white/90">
            {site.address && (
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 size-5 shrink-0 text-marigold" aria-hidden />
                {site.address}
              </li>
            )}
            {site.hours && (
              <li className="flex items-start gap-3">
                <Clock className="mt-1 size-5 shrink-0 text-marigold" aria-hidden />
                {site.hours}
              </li>
            )}
          </ul>

          {site.mapLink && (
            <ButtonLink
              href={site.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              variant="light"
              className="mt-8"
            >
              <Navigation className="size-5" aria-hidden /> Get directions
            </ButtonLink>
          )}
        </Reveal>

        <Reveal direction="right" delay={0.15} className="mx-auto w-full max-w-md">
          <motion.div ref={frameRef} style={{ rotate }} className="relative">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/50">
              <AnimatePresence initial={false}>
                <motion.div
                  key={mode}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.div style={{ y }} className="size-full scale-[1.12]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={site.shopFront[mode]}
                      alt={`${site.name} shop front ${mode === "day" ? "during the day" : "at night"}`}
                      className="size-full object-cover"
                    />
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Day / night switch */}
            <div
              role="group"
              aria-label="Show the shop by day or by night"
              className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 rounded-full bg-white p-1 text-sm font-medium text-indigo-ink shadow-xl"
            >
              {(["day", "night"] as const).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => pick(m)}
                  aria-pressed={mode === m}
                  className="relative flex items-center gap-1.5 rounded-full px-4 py-2 capitalize focus-visible:outline focus-visible:outline-2 focus-visible:outline-marigold"
                >
                  {mode === m && (
                    <motion.span
                      layoutId="shop-mode-pill"
                      className="absolute inset-0 rounded-full bg-indigo-ink"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className={cn("relative flex items-center gap-1.5 transition-colors duration-300", mode === m ? "text-white" : "text-indigo-ink")}>
                    {m === "day" ? <Sun className="size-4" aria-hidden /> : <Moon className="size-4" aria-hidden />}
                    {m}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}
