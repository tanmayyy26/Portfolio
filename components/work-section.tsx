"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ArrowUpRight, Github, ChevronLeft, ChevronRight } from "lucide-react"
import { slideInFromLeft, slideInFromRight } from "@/lib/animations"

type Slide = {
  no: string
  title: string
  desc: string
  tech: string[]
  image: string
  live?: string
  repo?: string
}

const slides: Slide[] = [
  {
    no: "01",
    title: "Frontend Project",
    desc: "Clean, responsive interfaces with a focus on performance and accessibility.",
    tech: ["Html 5", "Css 3", "Javascript"],
    image: "/images/work-01.png",
    live: "#",
    repo: "#",
  },
  {
    no: "02",
    title: "Fullstack Project",
    desc: "End‑to‑end apps: API design, auth, databases, and modern frontends.",
    tech: ["Next.js", "Tailwind.css", "Node.js"],
    image: "/images/work-02.png",
    live: "#",
    repo: "#",
  },
  {
    no: "03",
    title: "Frontend Project",
    desc: "Component-driven UIs, design systems, and polished product pages.",
    tech: ["Next.js", "Tailwind.css"],
    image: "/images/work-03.png",
    live: "#",
    repo: "#",
  },
]

export function WorkSection() {
  const [idx, setIdx] = useState(0)
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)
  const slide = slides[idx]
  const next = () => setIdx((i) => (i + 1) % slides.length)
  const prev = () => setIdx((i) => (i - 1 + slides.length) % slides.length)

  useEffect(() => {
    slideInFromLeft(leftRef.current)
    slideInFromRight(rightRef.current, 0.2)
  }, [])

  return (
    <div className="grid gap-10 md:grid-cols-2" aria-live="polite">
      <div ref={leftRef}>
        <div className="text-outline text-6xl md:text-7xl leading-none">{slide.no}</div>
        <h3 className="mt-4 text-4xl font-semibold">{slide.title}</h3>
        <p className="mt-4 text-muted-foreground max-w-[50ch]">{slide.desc}</p>

        <p className="mt-6 font-medium text-primary">{slide.tech.join(", ")}</p>

        <hr className="mt-6 border-border/60" />

        <div className="mt-4 flex items-center gap-3">
          <a
            href={slide.live || "#"}
            target="_blank"
            rel="noreferrer"
            aria-label="Open live project"
            className="grid place-items-center size-10 rounded-full border border-border/60 hover:border-primary/60 hover:text-primary transition-colors"
          >
            <ArrowUpRight className="size-5" />
          </a>
          <a
            href={slide.repo || "#"}
            target="_blank"
            rel="noreferrer"
            aria-label="Open GitHub repository"
            className="grid place-items-center size-10 rounded-full border border-border/60 hover:border-primary/60 hover:text-primary transition-colors"
          >
            <Github className="size-5" />
          </a>
        </div>
      </div>

      <div className="relative" ref={rightRef}>
        <div className="overflow-hidden rounded-xl border border-border/60 bg-secondary/40 aspect-[4/3]">
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={`Screenshot for ${slide.title}`}
            width={1120}
            height={840}
            className="w-full h-full object-cover object-top"
            priority
          />
        </div>

        <div className="absolute bottom-4 right-4 flex gap-2">
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="grid place-items-center h-10 w-10 rounded-sm bg-primary text-primary-foreground hover:opacity-90"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="grid place-items-center h-10 w-10 rounded-sm bg-primary text-primary-foreground hover:opacity-90"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
