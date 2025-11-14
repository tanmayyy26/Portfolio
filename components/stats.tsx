"use client"

import { useEffect, useRef, useState } from "react"
import { scaleIn } from "@/lib/animations"

const items = [
  { value: 4, label: "Years of experience", suffix: "" },
  { value: 10, label: "Projects completed", suffix: "+" },
  { value: 8, label: "Technologies mastered", suffix: "" },
  { value: 99, label: "Code commits", suffix: "+" },
]

function useCountUp(target: number, run: boolean, duration = 1400, onComplete?: () => void) {
  const [value, setValue] = useState<number | null>(null)
  const rafRef = useRef<number | undefined>(undefined)
  const startRef = useRef<number | null>(null)

  useEffect(() => {
    if (!run) return
    startRef.current = null
    setValue(null)

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

    const tick = (now: number) => {
      if (startRef.current == null) startRef.current = now
      const elapsed = now - startRef.current
      const progress = Math.min(1, elapsed / duration)
      const eased = easeOutCubic(progress)

      const raw = Math.round(eased * target)
      const next = target > 0 ? Math.max(1, raw) : raw

      if (progress < 1) {
        setValue(next)
        rafRef.current = requestAnimationFrame(tick)
      } else {
        setValue(target)
        onComplete?.()
      }
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [target, run, duration, onComplete])

  return value
}

function StatItem({
  value: target,
  label,
  run,
  onComplete,
  showFinal,
  suffix,
}: {
  value: number
  label: string
  run: boolean
  onComplete?: () => void
  showFinal: boolean
  suffix?: string
}) {
  const animated = useCountUp(target, run, 1400, onComplete)
  const display = showFinal ? target : animated

  return (
    <div className="flex flex-col space-y-2">
      <span
        className={"text-4xl font-bold gradient-text " + (!showFinal && display == null ? "opacity-0" : "")}
        aria-live="polite"
        aria-label={`${display ?? ""}${suffix || ""} ${label}`}
      >
        {display != null ? Number(display).toLocaleString() + (suffix || "") : "\u00A0"}
      </span>
      <span className="text-sm text-muted-foreground font-medium">{label}</span>
    </div>
  )
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const alreadyAnimated = typeof window !== "undefined" && sessionStorage.getItem("tw_stats_animated") === "1"
    if (alreadyAnimated) {
      setHasAnimated(true)
    }
    
    // Add GSAP scale animation to stats container
    scaleIn(ref.current, 0.2)
  }, [])

  useEffect(() => {
    if (!ref.current || hasAnimated) return
    const el = ref.current
    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { rootMargin: "0px", threshold: 0.3 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [hasAnimated])

  const handleComplete = () => {
    if (typeof window !== "undefined" && !sessionStorage.getItem("tw_stats_animated")) {
      sessionStorage.setItem("tw_stats_animated", "1")
      setHasAnimated(true)
    }
  }

  return (
    <div ref={ref} className="grid grid-cols-2 gap-6 rounded-xl glass p-8 md:grid-cols-4 hover:glass-strong transition-all duration-300 mt-24">
      {items.map((it, idx) => (
        <StatItem
          key={it.label}
          value={it.value}
          label={it.label}
          suffix={it.suffix}
          run={!hasAnimated && inView}
          showFinal={hasAnimated}
          onComplete={idx === 0 ? handleComplete : undefined}
        />
      ))}
    </div>
  )
}
