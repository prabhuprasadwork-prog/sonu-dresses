import { Clock, Mail, MapPin, MessageCircle, Navigation, Phone } from "lucide-react"
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/reveal"
import { ButtonLink } from "@/components/ui/button"
import { site } from "@/lib/site-config"

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-thread bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.2fr_1fr] md:px-8 md:py-24">
        <Reveal direction="left">
          <h2 className="font-display text-3xl text-indigo-ink md:text-4xl">
            Talk to {site.ownerNickname}
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-charcoal/80">
            {site.owner}, known to customers as {site.ownerNickname}, runs {site.name}. Call or
            WhatsApp him directly for stock, sizes, prices and bulk orders.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={site.phoneLink}>
              <Phone className="size-5" aria-hidden /> Call {site.phoneDisplay}
            </ButtonLink>
            <ButtonLink href={site.whatsappLink} target="_blank" rel="noopener noreferrer" variant="outline">
              <MessageCircle className="size-5" aria-hidden /> WhatsApp
            </ButtonLink>
          </div>
        </Reveal>

        <RevealStagger delay={0.2}>
          <dl className="space-y-6 text-lg">
            <RevealItem direction="right">
              <dt className="text-sm font-medium text-charcoal/60">Owner</dt>
              <dd>{site.owner} ({site.ownerNickname})</dd>
            </RevealItem>
            <RevealItem direction="right">
              <dt className="text-sm font-medium text-charcoal/60">Phone and WhatsApp</dt>
              <dd>
                <a href={site.phoneLink} className="link-underline transition-colors hover:text-madder">
                  +91 {site.phoneDisplay}
                </a>
              </dd>
            </RevealItem>
            {site.email && (
              <RevealItem direction="right">
                <dt className="flex items-center gap-1.5 text-sm font-medium text-charcoal/60">
                  <Mail className="size-4" aria-hidden /> Email
                </dt>
                <dd>
                  <a href={`mailto:${site.email}`} className="link-underline transition-colors hover:text-madder">
                    {site.email}
                  </a>
                </dd>
              </RevealItem>
            )}
            {site.address && (
              <RevealItem direction="right">
                <dt className="flex items-center gap-1.5 text-sm font-medium text-charcoal/60">
                  <MapPin className="size-4" aria-hidden /> Shop address
                </dt>
                <dd>{site.address}</dd>
              </RevealItem>
            )}
            {site.hours && (
              <RevealItem direction="right">
                <dt className="flex items-center gap-1.5 text-sm font-medium text-charcoal/60">
                  <Clock className="size-4" aria-hidden /> Hours
                </dt>
                <dd className="flex items-center gap-2">
                  <span className="relative flex size-2.5" aria-hidden>
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#25D366] opacity-60" />
                    <span className="relative inline-flex size-2.5 rounded-full bg-[#25D366]" />
                  </span>
                  {site.hours}
                </dd>
              </RevealItem>
            )}
          </dl>
        </RevealStagger>

        {site.mapEmbed && (
          <Reveal className="md:col-span-2">
            <div className="group relative overflow-hidden rounded-xl border border-thread shadow-lg transition-shadow duration-500 hover:shadow-2xl">
              <iframe
                title={`Map showing ${site.name}`}
                src={site.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full grayscale-[35%] transition-[filter] duration-700 group-hover:grayscale-0 md:h-96"
              />
              {site.mapLink && (
                <ButtonLink
                  href={site.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 left-4 shadow-xl"
                >
                  <Navigation className="size-5" aria-hidden /> Get directions
                </ButtonLink>
              )}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}
