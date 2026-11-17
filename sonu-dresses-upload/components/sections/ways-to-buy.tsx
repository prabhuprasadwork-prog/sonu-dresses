import { Check, MessageCircle, Phone } from "lucide-react"
import { CountUp } from "@/components/motion/count-up"
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/reveal"
import { ButtonLink } from "@/components/ui/button"
import { site } from "@/lib/site-config"

export function WaysToBuy() {
  return (
    <section id="wholesale" className="relative scroll-mt-24 overflow-hidden bg-indigo-ink text-white">
      {/* Soft glows that pulse slowly behind the content */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 size-96 animate-[pulse_6s_ease-in-out_infinite] rounded-full bg-madder/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 size-96 animate-[pulse_7s_ease-in-out_infinite_1s] rounded-full bg-marigold/20 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:px-8 md:py-24 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <Reveal direction="left">
            <p className="text-sm font-medium uppercase tracking-widest text-marigold">Wholesale program</p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl">Bulk buying, made effortless</h2>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-white/80">
              Stock your shop with trend-forward garments at margins that work. Trusted by hundreds
              of retailers across the country.
            </p>
          </Reveal>

          <RevealStagger stagger={0.12} className="mt-10 grid grid-cols-3 gap-4">
            {site.wholesale.stats.map((s) => (
              <RevealItem
                key={s.label}
                className="group rounded-xl border border-white/15 bg-white/5 p-4 transition-colors duration-300 hover:border-marigold/60 hover:bg-white/10"
              >
                <p className="font-display text-3xl text-marigold transition-transform duration-300 group-hover:scale-105 md:text-4xl">
                  <CountUp value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-sm text-white/70">{s.label}</p>
              </RevealItem>
            ))}
          </RevealStagger>

          <RevealStagger stagger={0.1} delay={0.2} className="mt-8 space-y-3">
            {site.wholesale.points.map((p) => (
              <RevealItem key={p} direction="left" className="flex items-center gap-3 text-lg">
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-marigold text-indigo-deep">
                  <Check className="size-4" aria-hidden />
                </span>
                {p}
              </RevealItem>
            ))}
          </RevealStagger>
        </div>

        <Reveal direction="right" delay={0.2}>
          <div className="relative rounded-2xl bg-white p-8 text-indigo-ink shadow-2xl shadow-black/30 transition-transform duration-500 hover:-rotate-1 hover:scale-[1.02]">
            <div className="selvedge selvedge-animated absolute inset-x-0 top-0 h-1.5 rounded-t-2xl" aria-hidden />
            <p className="flex items-center gap-2 text-sm font-medium text-[#1a9e4b]">
              <span className="relative flex size-2.5" aria-hidden>
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#25D366] opacity-60" />
                <span className="relative inline-flex size-2.5 rounded-full bg-[#25D366]" />
              </span>
              Available now
            </p>
            <h3 className="mt-3 font-display text-2xl">Ready to place a bulk order?</h3>
            <p className="mt-3 text-lg leading-relaxed text-charcoal/75">
              Skip the forms. Message or call us directly and we’ll share pricing, MOQs and delivery
              in hours.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <ButtonLink href={site.wholesaleWhatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-5" aria-hidden /> WhatsApp us
              </ButtonLink>
              <ButtonLink href={site.phoneLink} variant="outline">
                <Phone className="size-5" aria-hidden /> +91 {site.phoneDisplay}
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
