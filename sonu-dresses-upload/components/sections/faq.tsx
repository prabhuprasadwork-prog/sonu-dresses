"use client"

import { Plus } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { useId, useState } from "react"
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/reveal"
import { ButtonLink } from "@/components/ui/button"
import { site } from "@/lib/site-config"
import { cn } from "@/lib/utils"

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  const baseId = useId()

  return (
    <section id="faq" className="scroll-mt-24 border-t border-thread">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1fr_1.6fr] md:px-8 md:py-24">
        <Reveal direction="left" className="md:sticky md:top-32 md:self-start">
          <p className="text-sm font-medium uppercase tracking-widest text-madder">Questions</p>
          <h2 className="mt-2 font-display text-3xl text-indigo-ink md:text-4xl">
            Frequently asked
          </h2>
          <p className="mt-4 max-w-sm text-lg text-charcoal/75">
            Can’t find your answer? Ask {site.ownerNickname} directly.
          </p>
          <ButtonLink href={site.whatsappLink} target="_blank" rel="noopener noreferrer" className="mt-6">
            Ask on WhatsApp
          </ButtonLink>
        </Reveal>

        <RevealStagger stagger={0.08} className="divide-y divide-thread border-y border-thread">
          {site.faqs.map((f, i) => {
            const isOpen = open === i
            const panelId = `${baseId}-panel-${i}`
            return (
              <RevealItem key={f.q}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="group flex w-full items-center justify-between gap-6 py-5 text-left font-display text-xl text-indigo-ink transition-colors hover:text-madder focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-marigold"
                  >
                    {f.q}
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className={cn(
                        "grid size-9 shrink-0 place-items-center rounded-full border transition-colors duration-300",
                        isOpen
                          ? "border-madder bg-madder text-white"
                          : "border-thread text-indigo-ink group-hover:border-madder"
                      )}
                    >
                      <Plus className="size-5" aria-hidden />
                    </motion.span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      key="panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <motion.p
                        initial={{ y: -8 }}
                        animate={{ y: 0 }}
                        className="max-w-2xl pb-6 pr-12 text-lg leading-relaxed text-charcoal/80"
                      >
                        {f.a}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </RevealItem>
            )
          })}
        </RevealStagger>
      </div>
    </section>
  )
}
