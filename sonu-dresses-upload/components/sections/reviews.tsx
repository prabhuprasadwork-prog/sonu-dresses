import { ArrowUpRight, Quote } from "lucide-react"
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/reveal"
import { site } from "@/lib/site-config"

const accents = ["text-madder", "text-marigold", "text-indigo-ink", "text-madder"]

export function Reviews() {
  if (site.reviews.length === 0) return null

  return (
    <section id="reviews" className="scroll-mt-24 overflow-hidden border-t border-thread bg-thread/40">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl text-indigo-ink md:text-4xl">What customers say</h2>
            <p className="mt-3 max-w-xl text-lg text-charcoal/75">
              Reviews left by customers on Google Maps.
            </p>
          </div>
          {site.mapLink && (
            <a
              href={site.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline group inline-flex items-center gap-1 font-medium text-madder"
            >
              Read all reviews on Google
              <ArrowUpRight
                className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden
              />
            </a>
          )}
        </Reveal>

        <RevealStagger stagger={0.12} className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {site.reviews.map((r, i) => (
            <RevealItem
              key={r.name}
              transition={{ type: "spring", stiffness: 120, damping: 16 }}
              className="h-full"
            >
              <figure className="group relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-thread bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                <span
                  aria-hidden
                  className="selvedge absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                />
                <Quote
                  aria-hidden
                  className={`mb-4 size-8 opacity-80 transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110 ${accents[i % accents.length]}`}
                />
                <blockquote className="font-display text-xl leading-snug text-charcoal">
                  “{r.text}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 text-sm">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-indigo-ink font-medium text-white transition-colors duration-300 group-hover:bg-madder">
                    {r.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block font-medium text-charcoal">{r.name}</span>
                    <span className="text-charcoal/60">Google review · {r.when}</span>
                  </span>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
