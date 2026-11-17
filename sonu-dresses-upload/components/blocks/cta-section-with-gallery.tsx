"use client"

import * as React from "react"
import { HTMLMotionProps, Variants, motion, useScroll, useTransform } from "motion/react"

import { cn } from "@/lib/utils"

interface GalleryGridCellProps extends HTMLMotionProps<"div"> {
  index: number
}

const SPRING_TRANSITION_CONFIG = {
  type: "spring" as const,
  stiffness: 100,
  damping: 16,
  mass: 0.75,
  restDelta: 0.005,
}

const filterVariants: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
}

const areaClasses = [
  "col-start-2 col-end-3 row-start-1 row-end-3",
  "col-start-1 col-end-2 row-start-2 row-end-4",
  "col-start-1 col-end-2 row-start-4 row-end-6",
  "col-start-2 col-end-3 row-start-3 row-end-5",
]

export const ContainerStagger = React.forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  ({ transition, ...props }, ref) => (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        staggerChildren: transition?.staggerChildren ?? 0.2,
        delayChildren: transition?.delayChildren ?? 0.2,
        duration: 0.3,
        ...transition,
      }}
      {...props}
    />
  )
)
ContainerStagger.displayName = "ContainerStagger"

export const ContainerAnimated = React.forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  ({ transition, ...props }, ref) => (
    <motion.div
      ref={ref}
      variants={filterVariants}
      transition={{ ...SPRING_TRANSITION_CONFIG, duration: 0.3, ...transition }}
      {...props}
    />
  )
)
ContainerAnimated.displayName = "ContainerAnimated"

export const GalleryGrid = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "grid grid-cols-2 grid-rows-[50px_150px_50px_150px_50px] gap-4",
        className
      )}
      {...props}
    />
  )
)
GalleryGrid.displayName = "GalleryGrid" // was "ContainerSticky"

export const GalleryGridCell = React.forwardRef<HTMLDivElement, GalleryGridCellProps>(
  ({ className, index, ...props }, ref) => (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9, y: index % 2 === 0 ? -24 : 24 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ ...SPRING_TRANSITION_CONFIG, delay: 0.2 + index * 0.15 }}
      // cn() so a passed className is merged instead of dropped
      className={cn(
        "group relative overflow-hidden rounded-xl shadow-xl transition-shadow duration-500 hover:shadow-2xl",
        areaClasses[index],
        className
      )}
      {...props}
    />
  )
)
GalleryGridCell.displayName = "GalleryGridCell"

interface ParallaxImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** How far (in %) the image drifts inside its frame while scrolling. */
  strength?: number
}

/** Image that drifts inside its frame as the page scrolls and zooms on hover. */
export function ParallaxImage({ strength = 8, className, ...props }: ParallaxImageProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`])

  return (
    <div
      ref={ref}
      className="size-full transition-transform duration-700 ease-out group-hover:scale-105"
    >
      <motion.div style={{ y }} className="size-full scale-[1.2]">
        {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
        <img className={cn("size-full object-cover object-center", className)} {...props} />
      </motion.div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-indigo-deep/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  )
}

/** Circular text stamp that slowly rotates. */
export function SpinningStamp({ text, className }: { text: string; className?: string }) {
  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0, scale: 0.4, rotate: -90 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ ...SPRING_TRANSITION_CONFIG, delay: 1 }}
      className={cn(
        "pointer-events-none grid size-28 place-items-center rounded-full bg-marigold text-indigo-deep shadow-xl",
        className
      )}
    >
      <svg viewBox="0 0 100 100" className="absolute size-full animate-spin-slow">
        <defs>
          <path id="stamp-circle" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
        </defs>
        <text className="fill-current text-[10.5px] font-semibold uppercase tracking-[0.2em]">
          <textPath href="#stamp-circle">{text}</textPath>
        </text>
      </svg>
      <span className="font-display text-2xl">✦</span>
    </motion.div>
  )
}

const drawVariants: Variants = {
  hidden: { strokeDashoffset: 1 },
  visible: { strokeDashoffset: 0 },
}

/** Hand-drawn style underline that draws itself in. */
export function DrawnUnderline({ delay = 1 }: { delay?: number }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 200 12"
      preserveAspectRatio="none"
      className="absolute -bottom-2 left-0 h-3 w-full text-marigold"
    >
      <motion.path
        d="M2 8 C 50 2, 120 2, 198 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        pathLength={1}
        strokeDasharray="1 1"
        variants={drawVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeInOut", delay }}
      />
    </svg>
  )
}
