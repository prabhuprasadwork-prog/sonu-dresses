"use client"

import { animate, useInView, useReducedMotion } from "motion/react"
import { useEffect, useRef, useState } from "react"

/** Number that counts up from 0 the first time it scrolls into view. */
export function CountUp({
  value,
  suffix = "",
  duration = 1.8,
}: {
  value: number
  suffix?: string
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" })
  const reduceMotion = useReducedMotion()
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (reduceMotion) {
      setN(value)
      return
    }
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setN(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value, duration, reduceMotion])

  return (
    <span ref={ref} className="tabular-nums">
      {/* Screen readers get the final number, not every frame */}
      <span aria-hidden>
        {n.toLocaleString("en-IN")}
        {suffix}
      </span>
      <span className="sr-only">
        {value.toLocaleString("en-IN")}
        {suffix}
      </span>
    </span>
  )
}
