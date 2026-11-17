import * as React from "react"
import { cn } from "@/lib/utils"

type Variant = "primary" | "outline" | "light"

const variants: Record<Variant, string> = {
  primary: "shine bg-madder text-white shadow-md shadow-madder/20 hover:bg-[#962730] hover:shadow-lg hover:shadow-madder/30",
  outline: "border border-indigo-ink/30 text-indigo-ink hover:border-indigo-ink/60 hover:bg-indigo-ink/5",
  light: "shine bg-white text-indigo-ink hover:bg-cotton hover:shadow-lg hover:shadow-black/20",
}

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant
}

export function ButtonLink({ variant = "primary", className, ...props }: ButtonLinkProps) {
  return (
    <a
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-base font-medium",
        "transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
        "[&>svg]:transition-transform [&>svg]:duration-300 hover:[&>svg]:-rotate-12 hover:[&>svg]:scale-110",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-marigold",
        variants[variant],
        className
      )}
      {...props}
    />
  )
}
