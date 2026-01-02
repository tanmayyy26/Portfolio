"use client"

import { useEffect, useRef, useState } from "react"
import { Github, ExternalLink } from "lucide-react"
import { staggerFadeIn } from "@/lib/animations"

type Project = {
  title: string
  desc: string
  tech: string[]
  live?: string
  repo?: string
}

const projects: Project[] = [
  {
    title: "SGPA Calculator",
    desc: "A web application to calculate SGPA (Semester Grade Point Average) with an intuitive interface for students.",
    tech: ["HTML", "CSS", "JAVASCRIPT"],
    live: "https://tanmayyy26.github.io/SGPA-Calculator/",
    repo: "https://github.com/tanmayyy26/SGPA-Calculator",
  },
  {
    title: "Smart Cut",
    desc: "AI-Powered Background Remover & Scene Generator",
    tech: ["REACT", "NODE.JS", "PYTHON"],
    live: "https://smart-cut-nine.vercel.app/",
    repo: "https://github.com/tanmayyy26/Smart-Cut",
  },
  {
    title: "WhatsApp Chat Analyzer",
    desc: "Analyze WhatsApp chat exports to generate insights, statistics, and visualizations about conversations.",
    tech: ["PYTHON", "STREAMLIT", "PANDAS"],
    live: "https://whats-app-chat-analyzer-fawn.vercel.app/",
    repo: "https://github.com/tanmayyy26/WhatsApp_ChatAnalyzer",
  },
]

function ProjectCard({ project, index, onRef }: { project: Project; index: number; onRef: (el: HTMLElement | null) => void }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isFlipped, setIsFlipped] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    
    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
  }

  const handleMouseLeave = () => {
    if (!cardRef.current) return
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)'
  }

  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <article
      ref={(el) => {
        cardRef.current = el
        onRef(el)
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className="group relative rounded-2xl border border-primary/20 bg-secondary/40 p-8 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.15)] transition-all duration-300 cursor-pointer"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className={`transition-all duration-500 ${isFlipped ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        <div className="flex flex-col h-full">
          <div className="flex-1 group-hover:opacity-0 group-hover:invisible transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-foreground">{project.title}</h3>
            <p className="text-foreground/80 mb-6 leading-relaxed font-medium">{project.desc}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-bold rounded-md border-2 border-primary/50 bg-primary/30 text-foreground shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            <div className="flex flex-col gap-3">
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-secondary/80 hover:bg-secondary hover:border-primary/40 transition-all text-sm font-medium backdrop-blur-sm"
                >
                  <Github className="size-5" />
                  GITHUB
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-secondary/80 hover:bg-secondary hover:border-primary/40 transition-all text-sm font-medium backdrop-blur-sm"
                >
                  <ExternalLink className="size-5" />
                  LIVE DEMO
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {isFlipped && (
        <div className="absolute inset-0 p-8 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl backdrop-blur-sm">
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4">Project Details</h4>
            <p className="text-muted-foreground mb-6">Click again to flip back</p>
            <div className="flex flex-col gap-3">
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-all text-sm font-medium"
                >
                  <Github className="size-5" />
                  View on GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-all text-sm font-medium"
                >
                  <ExternalLink className="size-5" />
                  Open Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </article>
  )
}

export function WorkSection() {
  const cardsRef = useRef<HTMLElement[]>([])

  useEffect(() => {
    staggerFadeIn(cardsRef.current)
  }, [])

  return (
    <div className="space-y-8">
      <h2 className="text-4xl md:text-5xl font-semibold text-center mb-12">Recent Work</h2>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
            onRef={(el) => { if (el) cardsRef.current[index] = el }}
          />
        ))}
      </div>
    </div>
  )
}
