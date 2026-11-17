import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { Ticker } from "@/components/sections/ticker"
import { Stats } from "@/components/sections/stats"
import { Collections } from "@/components/sections/collections"
import { WaysToBuy } from "@/components/sections/ways-to-buy"
import { WhyUs } from "@/components/sections/why-us"
import { Reviews } from "@/components/sections/reviews"
import { ShopFront } from "@/components/sections/shop-front"
import { Faq } from "@/components/sections/faq"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Ticker />
        <Stats />
        <Collections />
        <WaysToBuy />
        <WhyUs />
        <Reviews />
        <ShopFront />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
