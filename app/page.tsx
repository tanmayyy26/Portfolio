import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { ServicesSection } from "@/components/services-section"
import { ResumeSection } from "@/components/resume-section"
import { ContactSection } from "@/components/contact-section"

export default function HomePage() {
  return (
    <main className="min-h-dvh">
      <section id="home" className="container mx-auto px-4 pt-24 md:pt-28 lg:pt-32">
        <Hero />
      </section>

      <section className="container mx-auto px-4 py-12 md:py-16">
        <Stats />
      </section>

      <section id="services" className="container mx-auto px-4 py-16 md:py-20 scroll-mt-20">
        <ServicesSection />
      </section>

      <section id="resume" className="container mx-auto px-4 py-16 md:py-20 scroll-mt-20">
        <ResumeSection />
      </section>

      <section id="contact" className="container mx-auto px-4 py-20 md:py-24 scroll-mt-20">
        <ContactSection />
      </section>
    </main>
  )
}
