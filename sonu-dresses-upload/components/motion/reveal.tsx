"use client"

import * as React from "react"
import {
  HTMLMotionProps,
  MotionConfig,
  Variants,
  motion,
  useScroll,
  useSpring,
} from "motion/react"

const EASE = [0.22, 1, 0.36, 1] as const

type Direction = "up" | "down" | "left" | "right" | "none"

const offset: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 28 },
  down: { y: -28 },
  left: { x: -40 },
  right: { x: 40 },
  none: {},
}

function revealVariants(direction: Direction): Variants {
  return {
    hidden: { opacity: 0, ...offset[direction] },
    visible: { opacity: 1, x: 0, y: 0 },
  }
}

/** Wraps the app so every motion component honours the OS "reduce motion" setting. */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}

interface RevealProps extends HTMLMotionProps<"div"> {
  direction?: Direction
  delay?: number
}

/** Fades and slides a block in the first time it scrolls into view. */
export function Reveal({ direction = "up", delay = 0, transition, ...props }: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      variants={revealVariants(direction)}
      transition={{ duration: 0.7, ease: EASE, delay, ...transition }}
      {...props}
    />
  )
}

interface StaggerProps extends HTMLMotionProps<"div"> {
  stagger?: number
  delay?: number
}

/** Parent that reveals its <RevealItem> children one after another. */
export function RevealStagger({ stagger = 0.12, delay = 0, ...props }: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
      {...props}
    />
  )
}

/** Same as RevealStagger but renders a <ul>. */
export function RevealStaggerList({
  stagger = 0.12,
  delay = 0,
  ...props
}: HTMLMotionProps<"ul"> & { stagger?: number; delay?: number }) {
  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
      {...props}
    />
  )
}

export function RevealItem({
  direction = "up",
  transition,
  ...props
}: HTMLMotionProps<"div"> & { direction?: Direction }) {
  return (
    <motion.div
      variants={revealVariants(direction)}
      transition={{ duration: 0.6, ease: EASE, ...transition }}
      {...props}
    />
  )
}

export function RevealListItem({
  direction = "up",
  transition,
  ...props
}: HTMLMotionProps<"li"> & { direction?: Direction }) {
  return (
    <motion.li
      variants={revealVariants(direction)}
      transition={{ duration: 0.6, ease: EASE, ...transition }}
      {...props}
    />
  )
}

/** Thin selvedge-coloured bar that fills as the page is scrolled. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 })
  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-madder via-marigold to-indigo-ink"
      style={{ scaleX }}
    />
  )
}
