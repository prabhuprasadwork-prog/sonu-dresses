"use client"

import { Menu, Phone, X } from "lucide-react"
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react"
import { useState } from "react"
import { navLinks, site } from "@/lib/site-config"
import { cn } from "@/lib/utils"

export function Header() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 12))

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "sticky top-0 z-40 border-b border-thread backdrop-blur transition-[background-color,box-shadow] duration-300",
        scrolled || menuOpen ? "bg-cotton/95 shadow-md shadow-charcoal/5" : "bg-cotton/80"
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 transition-[padding] duration-300 md:px-8",
          scrolled ? "py-2.5" : "py-4"
        )}
      >
        <a
          href="#top"
          className="group flex items-center gap-3 font-display text-xl text-indigo-ink transition-colors hover:text-madder md:text-2xl"
        >
          <motion.span
            initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.2 }}
            className={cn(
              "relative block shrink-0 overflow-hidden rounded-lg shadow-md transition-[width,height,box-shadow] duration-300",
              "group-hover:shadow-[0_0_18px_rgba(233,162,26,0.65)]",
              scrolled ? "size-9" : "size-11"
            )}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={site.logo} alt="" className="size-full object-cover" />
          </motion.span>
          {site.name}
        </a>

        <nav className="hidden gap-7 text-sm font-medium text-charcoal/80 lg:flex">
          {navLinks.map((l, i) => (
            <motion.a
              key={l.href}
              href={l.href}
              className="link-underline transition-colors hover:text-madder"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.06, duration: 0.4 }}
            >
              {l.label}
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <motion.a
            href={site.phoneLink}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="group inline-flex items-center gap-2 rounded-md bg-indigo-ink px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-deep"
          >
            <Phone className="size-4 group-hover:animate-[wiggle_0.5s_ease-in-out]" aria-hidden />
            <span className="hidden sm:inline">{site.phoneDisplay}</span>
            <span className="sm:hidden">Call</span>
          </motion.a>

          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="grid size-10 place-items-center rounded-md text-indigo-ink transition-colors hover:bg-indigo-ink/5 lg:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={menuOpen ? "x" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {menuOpen ? <X className="size-6" aria-hidden /> : <Menu className="size-6" aria-hidden />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-menu"
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-thread lg:hidden"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } } }}
              className="mx-auto max-w-6xl px-6 py-3 md:px-8"
            >
              {navLinks.map((l) => (
                <motion.li
                  key={l.href}
                  variants={{ hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0 } }}
                >
                  <a
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 font-display text-xl text-indigo-ink transition-colors hover:text-madder"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>

      <div className="selvedge selvedge-animated h-1.5" aria-hidden />
    </motion.header>
  )
}
