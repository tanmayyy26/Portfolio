"use client"

import { motion } from "framer-motion"
import { Download } from "lucide-react"
import { SocialLinks } from "./social-links"
import { PortraitRing } from "./portrait-ring"

export function Hero() {
  return (
    <div className="grid items-center gap-10 md:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-5"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block"
        >
          <p className="text-accent text-sm uppercase tracking-wider font-semibold px-4 py-2 glass-light rounded-full">
            Full Stack Developer
          </p>
        </motion.div>
        
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-pretty">
          {"Hello I'm "}
          <span className="gradient-text">Tanmay Wagh</span>
        </h1>
        
        <p className="text-muted-foreground leading-relaxed text-lg">
          I am a Full Stack Developer passionate about crafting seamless end-to-end web experiences. I excel at engineering scalable backend architectures and intuitive frontend designs, turning ambitious ideas into production-ready applications built on clean, high-quality code.
        </p>

        <div className="flex items-center gap-4 pt-4">
          <motion.a
            href="/Tanmay-Wagh-CV.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 rounded-full glass-strong px-6 py-3 text-sm font-medium text-foreground glow-primary hover:glow-accent transition-all"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download CV
          </motion.a>
          <SocialLinks />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="flex md:justify-end animate-float"
      >
        <div className="relative">
          <div className="absolute inset-0 glow-primary opacity-50 rounded-full blur-3xl" />
          <PortraitRing size={280} />
        </div>
      </motion.div>
    </div>
  )
}
