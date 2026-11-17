import { MapPin } from "lucide-react"
import { CountUp } from "@/components/motion/count-up"
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/reveal"
import { site } from "@/lib/site-config"

export function Stats() {
  return (
    <section aria-label="Sonu Dresses in numbers" className="border-b border-thread bg-white">
      <RevealStagger
        stagger={0.12}
        className="mx-auto grid max-w-6xl grid-cols-2 divide-thread px-6 md:grid-cols-4 md:divide-x md:px-8"
      >
        {site.stats.map((s) => (
          <RevealItem key={s.label} className="group py-10 text-center md:py-12">
            <p className="font-display text-4xl text-indigo-ink transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-madder md:text-5xl">
              {"value" in s && s.value !== undefined ? <CountUp value={s.value} suffix={s.suffix} /> : s.text}
            </p>
            <p className="mt-2 text-sm font-medium uppercase tracking-widest text-charcoal/60">
              {s.label}
            </p>
          </RevealItem>
        ))}
      </RevealStagger>

      {/* Sourcing markets */}
      <div className="border-t border-thread bg-cotton">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 md:flex-row md:justify-between md:px-8">
          <Reveal direction="left" className="flex items-center gap-2 font-display text-xl text-indigo-ink">
            <MapPin className="size-5 text-madder" aria-hidden />
            Where our stock comes from
          </Reveal>
          <RevealStagger stagger={0.1} className="flex flex-wrap justify-center gap-2 md:justify-end">
            {site.sourcing.map((city, i) => (
              <RevealItem
                key={city}
                direction="up"
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="group flex items-center gap-2 rounded-full border border-thread bg-white px-4 py-2 font-medium text-indigo-ink shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-madder hover:shadow-md"
              >
                <span
                  aria-hidden
                  className="size-2 rounded-full bg-marigold transition-transform duration-300 group-hover:scale-150"
                  style={{ animation: `pulse 2s ease-in-out ${i * 0.3}s infinite` }}
                />
                {city}
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </div>
    </section>
  )
}
