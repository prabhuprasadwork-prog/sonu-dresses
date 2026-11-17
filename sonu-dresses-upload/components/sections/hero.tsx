import { ArrowDown, Phone } from "lucide-react"
import {
  ContainerAnimated,
  ContainerStagger,
  DrawnUnderline,
  GalleryGrid,
  GalleryGridCell,
  ParallaxImage,
  SpinningStamp,
} from "@/components/blocks/cta-section-with-gallery"
import { ButtonLink } from "@/components/ui/button"
import { site } from "@/lib/site-config"

export function Hero() {
  const years = site.yearsInBusiness

  return (
    <section id="top" className="overflow-x-clip">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 py-14 md:grid-cols-2 md:px-8 md:py-20">
        <ContainerStagger>
          <ContainerAnimated className="mb-4 flex items-center gap-3 text-sm font-medium text-madder md:text-base">
            <span className="selvedge selvedge-animated h-1.5 w-10 rounded-full" aria-hidden />
            Trusted garment house · Since {site.established}
          </ContainerAnimated>
          <ContainerAnimated className="font-display text-4xl leading-[1.1] text-indigo-ink md:text-[3.25rem]">
            Style the{" "}
            <span className="relative inline-block whitespace-nowrap">
              whole family
              <DrawnUnderline delay={1.1} />
            </span>{" "}
            with {site.name}
          </ContainerAnimated>
          <ContainerAnimated className="mb-5 mt-6 max-w-[34rem] text-lg leading-relaxed text-charcoal/80">
            Ready-made garments for men, women, boys and girls. Retail and wholesale at honest
            prices, backed by {years}+ years in the trade.
          </ContainerAnimated>
          <ContainerAnimated className="mb-7 flex flex-wrap items-center gap-2 text-sm text-charcoal/70">
            <span>Sourced from</span>
            {site.sourcing.map((city) => (
              <span
                key={city}
                className="rounded-full border border-thread bg-white px-3 py-1 font-medium text-indigo-ink transition-colors hover:border-marigold hover:bg-marigold/10"
              >
                {city}
              </span>
            ))}
          </ContainerAnimated>
          <ContainerAnimated className="flex flex-wrap gap-3">
            <ButtonLink href="#collections">
              Explore collection <ArrowDown className="size-5" aria-hidden />
            </ButtonLink>
            <ButtonLink href={site.phoneLink} variant="outline">
              <Phone className="size-5" aria-hidden /> Call us now
            </ButtonLink>
          </ContainerAnimated>
        </ContainerStagger>

        <div className="relative">
          <GalleryGrid className="md:grid-rows-[60px_190px_60px_190px_60px]">
            {site.heroImages.map((src, index) => (
              <GalleryGridCell index={index} key={src}>
                <ParallaxImage
                  src={src}
                  alt={`Garments at ${site.name}`}
                  loading={index < 2 ? "eager" : "lazy"}
                  strength={index % 2 === 0 ? 6 : 10}
                  className={src.includes("shop-") ? "object-[center_35%]" : undefined}
                />
              </GalleryGridCell>
            ))}
          </GalleryGrid>
          <SpinningStamp
            text={`Since ${site.established} • Retail • Wholesale • `}
            className="absolute -left-4 top-1/2 -translate-y-1/2 md:-left-10"
          />
        </div>
      </div>
    </section>
  )
}
