import { Award, Heart, ShieldCheck, Sparkles, Store, Users, type LucideIcon } from "lucide-react"
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/reveal"
import { site } from "@/lib/site-config"

const icons: Record<string, LucideIcon> = {
  award: Award,
  store: Store,
  shield: ShieldCheck,
  heart: Heart,
  sparkles: Sparkles,
  users: Users,
}

export function WhyUs() {
  const years = site.yearsInBusiness

  return (
    <section id="why-us" className="scroll-mt-24 border-t border-thread bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-madder">Why {site.name}</p>
          <h2 className="mt-2 font-display text-3xl text-indigo-ink md:text-4xl">Built on a promise</h2>
          <p className="mt-4 text-lg text-charcoal/75">
            {years}+ years of dedication, quality and commitment to the people we serve.
          </p>
        </Reveal>

        <RevealStagger stagger={0.1} className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {site.features.map((f) => {
            const Icon = icons[f.icon] ?? Sparkles
            return (
              <RevealItem
                key={f.title}
                className="group relative overflow-hidden rounded-xl border border-thread bg-cotton p-6 transition-all duration-300 hover:-translate-y-1 hover:border-madder/30 hover:bg-white hover:shadow-xl"
              >
                {/* Colour wash that rises from the bottom on hover */}
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-madder transition-transform duration-500 group-hover:scale-x-100"
                />
                <span className="grid size-12 place-items-center rounded-xl bg-indigo-ink text-marigold transition-all duration-500 group-hover:rotate-[-8deg] group-hover:scale-110 group-hover:bg-madder group-hover:text-white">
                  <Icon className="size-6" aria-hidden />
                </span>
                <h3 className="mt-5 font-display text-xl text-indigo-ink">{f.title}</h3>
                <p className="mt-2 leading-relaxed text-charcoal/75">{f.text}</p>
              </RevealItem>
            )
          })}
        </RevealStagger>
      </div>
    </section>
  )
}
