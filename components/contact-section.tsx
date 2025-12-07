"use client"

import type React from "react"

import type { FormEvent } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { toast } from "sonner"
import { slideInFromLeft, slideInFromRight } from "@/lib/animations"

export function ContactSection() {
  const [loading, setLoading] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    slideInFromLeft(formRef.current)
    slideInFromRight(infoRef.current, 0.2)
  }, [])

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const payload = Object.fromEntries(data.entries())

    try {
      setLoading(true)
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const json = await res.json()
      if (res.ok) {
        toast.success("Message sent — I will get back to you soon.")
        form.reset()
      } else {
        toast.error(json.error || "Failed to send message")
      }
    } catch (err) {
      toast.error(String(err))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="grid gap-10 md:grid-cols-2">
      <form
        ref={formRef}
        onSubmit={onSubmit}
        className="rounded-xl glass p-8 shadow-lg hover:glass-strong transition-all duration-300"
        aria-labelledby="contact-title"
      >
        <h3 id="contact-title" className="text-3xl font-semibold gradient-text">
          {"Let's work together"}
        </h3>
        <p className="mt-2 text-muted-foreground max-w-[50ch]">
          Tell me about your project. I’ll get back within 1–2 business days.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Input name="firstName" placeholder="Firstname" />
          <Input name="lastName" placeholder="Lastname" />
          <Input name="email" type="email" placeholder="Email address" />
          <Input name="phone" type="tel" placeholder="Phone number" />
          <div className="sm:col-span-2">
            <select
              aria-label="Select a service"
              name="service"
              className="w-full rounded-md glass-light px-3 py-2 text-sm focus:glass-strong transition-all"
              defaultValue=""
            >
              <option value="" disabled>
                Select a service
              </option>
              <option>Web Development</option>
              <option>UI/UX Design</option>
              <option>SEO</option>
              <option>Consulting</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <Textarea name="message" placeholder="Type your message here." />
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="mt-6 inline-flex items-center rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground hover:scale-105 glow-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Sending..." : "Send message"}
        </button>
      </form>

      <div ref={infoRef} className="grid gap-4 content-start">
        <InfoItem icon={<Phone className="size-5" />} title="Phone" value="8446250270" />
        <InfoItem icon={<Mail className="size-5" />} title="Email" value="2work2603@gmail.com" />
        <InfoItem icon={<MapPin className="size-5" />} title="Address" value="Nagpur, Maharashtra, 441111" />
      </div>
    </div>
  )
}

function InfoItem({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode
  title: string
  value: string
}) {
  return (
    <div className="flex items-center gap-4 rounded-xl glass p-4 hover:glass-strong transition-all duration-300">
      <div className="grid place-items-center size-10 rounded-md glass-light text-primary glow-primary">
        {icon}
      </div>
      <div>
        <div className="text-sm text-muted-foreground">{title}</div>
        <div className="font-medium">{value}</div>
      </div>
    </div>
  )
}
