"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const NAV_ITEMS = [
  { path: "#home", label: "Home" },
  { path: "#services", label: "Services" },
  { path: "#resume", label: "Resume" },
  { path: "#contact", label: "Contact" },
]

export function SiteHeader() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "-80px 0px -50% 0px" }
    )

    NAV_ITEMS.forEach((item) => {
      const element = document.querySelector(item.path)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 glass">
        <a 
          href="#home" 
          onClick={(e) => scrollToSection(e, "#home")}
          className="font-semibold text-lg tracking-tight gradient-text"
        >
          Tanmay<span className="text-accent">.</span>
          <span className="sr-only">Home</span>
        </a>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.path.substring(1)
            return (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => scrollToSection(e, item.path)}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "text-sm font-medium transition-all hover:text-primary relative group",
                  isActive ? "text-primary" : "text-muted-foreground",
                )}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary glow-primary rounded-full" />
                )}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium transition-all hover:scale-105 hover:glow-primary"
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  )
}
