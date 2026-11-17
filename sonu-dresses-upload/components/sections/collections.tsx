import { ArrowUpRight } from "lucide-react"
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/reveal"
import { site, whatsappFor } from "@/lib/site-config"
import { cn } from "@/lib/utils"

const themes = [
  { card: "bg-indigo-ink text-white", letter: "text-white/10", items: "text-white/75", link: "text-marigold" },
  { card: "bg-madder text-white", letter: "text-white/15", items: "text-white/80", link: "text-white" },
  { card: "bg-marigold text-indigo-deep", letter: "text-indigo-deep/10", items: "text-indigo-deep/75", link: "text-indigo-deep" },
  { card: "bg-white text-indigo-ink border border-thread", letter: "text-madder/10", items: "text-charcoal/70", link: "text-madder" },
]

export function Collections() {
  return (
    <section id="collections" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-widest text-madder">Explore the range</p>
          <h2 className="mt-2 font-display text-3xl text-indigo-ink md:text-4xl">Shop by category</h2>
          <p className="mt-3 max-w-xl text-lg text-charcoal/75">
            From toddlers to grown-ups, the right fit for every member of the family, at prices that
            make sense.
          </p>
        </Reveal>

        <RevealStagger stagger={0.12} className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {site.categories.map((c, i) => {
            const t = themes[i % themes.length]
            return (
              <RevealItem
                key={c.name}
                transition={{ type: "spring", stiffness: 110, damping: 16 }}
                className="h-full"
              >
                <a
                  href={whatsappFor(`Hello Sonu Dresses, please share what you have in ${c.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "group relative flex h-full min-h-72 flex-col justify-end overflow-hidden rounded-2xl p-6 shadow-md",
                    "transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl",
                    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-marigold",
                    t.card
                  )}
                >
                  {/* Giant initial that tilts and grows on hover */}
                  <span
                    aria-hidden
                    className={cn(
                      "absolute -right-4 -top-8 font-display text-[11rem] leading-none transition-transform duration-700 ease-out group-hover:-rotate-12 group-hover:scale-110",
                      t.letter
                    )}
                  >
                    {c.letter}
                  </span>
                  <span
                    aria-hidden
                    className="selvedge absolute inset-x-0 top-0 h-1.5 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                  />
                  <h3 className="relative font-display text-2xl">{c.name}</h3>
                  <p className={cn("relative mt-2 leading-relaxed", t.items)}>{c.items}</p>
                  <span className={cn("relative mt-5 inline-flex items-center gap-1 font-medium", t.link)}>
                    Ask about {c.name.toLowerCase()}
                    <ArrowUpRight
                      className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </span>
                </a>
              </RevealItem>
            )
          })}
        </RevealStagger>
      </div>
    </section>
  )
}
