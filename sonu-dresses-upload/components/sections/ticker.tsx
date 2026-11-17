import { site } from "@/lib/site-config"

function Row({ hidden }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center gap-8 pr-8" aria-hidden={hidden || undefined}>
      {site.ticker.map((t) => (
        <li key={t} className="flex items-center gap-8 whitespace-nowrap">
          {t}
          <span className="text-marigold" aria-hidden>
            ✦
          </span>
        </li>
      ))}
      <li className="whitespace-nowrap text-marigold">
        Sourced from {site.sourcing.join(" · ")}
      </li>
      <li className="text-marigold" aria-hidden>
        ✦
      </li>
    </ul>
  )
}

/** Endless scrolling ribbon of highlights. Pauses on hover. */
export function Ticker() {
  return (
    <div className="group relative overflow-hidden bg-madder py-3.5 font-display text-lg text-white">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-madder to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-madder to-transparent" />
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        <Row />
        <Row hidden />
      </div>
    </div>
  )
}
