"use client"

import { useEffect, useRef } from "react"
import { ArrowDownRight } from "lucide-react"
import { staggerFadeIn } from "@/lib/animations"

export function ServicesSection() {
  const itemsRef = useRef<HTMLElement[]>([])

  const items = [
    { no: "01", title: "Web Development", body: "Modern, performant, accessible web apps." },
    { no: "02", title: "UI/UX Design", body: "Usable, elegant interfaces that convert." },
    { no: "03", title: "Logo Design", body: "Memorable identities for your brand." },
    { no: "04", title: "SEO", body: "Technical, on-page, and performance SEO." },
  ]

  useEffect(() => {
    staggerFadeIn(itemsRef.current)
  }, [])

  return (
    <div className="grid gap-10 md:grid-cols-2">
      {items.map((it, index) => (
        <article key={it.no} className="relative" ref={(el) => { if (el) itemsRef.current[index] = el }}>
          <div className="flex items-start justify-between gap-6">
            <div className="max-w-[42ch]">
              <div className="text-outline text-5xl leading-none">{it.no}</div>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight">{it.title}</h3>
              <p className="mt-3 text-muted-foreground">{it.body}</p>
            </div>
            <div
              aria-hidden
              className="shrink-0 grid place-items-center size-12 rounded-full bg-primary/15 text-primary border border-border"
            >
              <ArrowDownRight className="size-5" />
            </div>
          </div>
          <hr className="mt-6 border-border/60" />
        </article>
      ))}
    </div>
  )
}
