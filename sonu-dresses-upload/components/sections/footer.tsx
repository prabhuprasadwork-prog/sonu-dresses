import { Mail, MapPin, Phone } from "lucide-react"
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/reveal"
import { FloatingWhatsApp } from "@/components/sections/floating-whatsapp"
import { navLinks, site, whatsappFor } from "@/lib/site-config"

const linkClass = "link-underline transition-colors hover:text-marigold"

export function Footer() {
  return (
    <>
      <footer className="bg-indigo-deep text-white/70">
        <div className="selvedge selvedge-animated h-1.5" aria-hidden />

        <RevealStagger
          stagger={0.1}
          className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 md:px-8 lg:grid-cols-[1.5fr_1fr_1fr_1.4fr]"
        >
          <RevealItem>
            <p className="flex items-center gap-3 font-display text-xl text-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={site.logo}
                alt=""
                className="size-11 rounded-lg animate-[glow_3s_ease-in-out_infinite]"
              />
              <span>
                {site.name}
                <span className="block font-sans text-xs uppercase tracking-widest text-marigold">
                  Premium garments · Est. {site.established}
                </span>
              </span>
            </p>
            <p className="mt-5 max-w-xs leading-relaxed">
              Your trusted destination for quality ready-made garments. Serving retail and wholesale
              customers for over {site.yearsInBusiness} years.
            </p>
          </RevealItem>

          <RevealItem>
            <h3 className="font-display text-lg text-white">Explore</h3>
            <ul className="mt-4 space-y-2.5">
              <li><a href="#top" className={linkClass}>Home</a></li>
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={linkClass}>{l.label}</a>
                </li>
              ))}
            </ul>
          </RevealItem>

          <RevealItem>
            <h3 className="font-display text-lg text-white">Categories</h3>
            <ul className="mt-4 space-y-2.5">
              {site.categories.map((c) => (
                <li key={c.name}>
                  <a
                    href={whatsappFor(`Hello Sonu Dresses, please share what you have in ${c.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    {c.name}
                  </a>
                </li>
              ))}
            </ul>
          </RevealItem>

          <RevealItem>
            <h3 className="font-display text-lg text-white">Get in touch</h3>
            <ul className="mt-4 space-y-3">
              {site.address && (
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-marigold" aria-hidden />
                  {site.mapLink ? (
                    <a href={site.mapLink} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-marigold">
                      {site.address}
                    </a>
                  ) : (
                    site.address
                  )}
                </li>
              )}
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-5 shrink-0 text-marigold" aria-hidden />
                <a href={site.phoneLink} className={linkClass}>+91 {site.phoneDisplay}</a>
              </li>
              {site.email && (
                <li className="flex gap-3">
                  <Mail className="mt-0.5 size-5 shrink-0 text-marigold" aria-hidden />
                  <a href={`mailto:${site.email}`} className={linkClass}>{site.email}</a>
                </li>
              )}
            </ul>
          </RevealItem>
        </RevealStagger>

        <Reveal className="border-t border-white/10">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-sm md:flex-row md:justify-between md:px-8">
            <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
            <p>Sourced from {site.sourcing.join(" · ")}</p>
          </div>
        </Reveal>
      </footer>

      <FloatingWhatsApp />
    </>
  )
}
