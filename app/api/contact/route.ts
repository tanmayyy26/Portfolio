import nodemailer from "nodemailer"
import { NextResponse } from "next/server"
import { z } from "zod"

const ContactSchema = z.object({
  firstName: z.string().min(1).max(100).optional(),
  lastName: z.string().min(1).max(100).optional(),
  email: z.string().email(),
  phone: z.string().min(6).max(30).optional(),
  service: z.string().optional(),
  message: z.string().min(1).max(2000).optional(),
})

// Simple in-memory rate limiter (for low-traffic portfolios)
const RATE_LIMIT_WINDOW_MS = 60_000 // 1 minute
const RATE_LIMIT_MAX = 6 // max 6 requests per window per IP
const ipMap = new Map<string, { count: number; firstTs: number }>()

function isRateLimited(ip: string) {
  const now = Date.now()
  const entry = ipMap.get(ip)
  if (!entry) {
    ipMap.set(ip, { count: 1, firstTs: now })
    return false
  }
  if (now - entry.firstTs > RATE_LIMIT_WINDOW_MS) {
    ipMap.set(ip, { count: 1, firstTs: now })
    return false
  }
  if (entry.count >= RATE_LIMIT_MAX) return true
  entry.count += 1
  return false
}

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown"
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: "Rate limit exceeded" }, { status: 429 })
    }

    const json = await req.json()
    const parsed = ContactSchema.safeParse(json)
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.format() }, { status: 400 })
    }

    const body = parsed.data

    const smtpHost = process.env.SMTP_HOST
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : undefined
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS
    const toEmail = process.env.TO_EMAIL || smtpUser

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !toEmail) {
      return NextResponse.json({ error: "SMTP configuration is incomplete." }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    const subject = `New contact from ${body.firstName || ""} ${body.lastName || ""}`

    const html = `
      <h2>New message from portfolio contact form</h2>
      <p><strong>Name:</strong> ${body.firstName || ""} ${body.lastName || ""}</p>
      <p><strong>Email:</strong> ${body.email || ""}</p>
      <p><strong>Phone:</strong> ${body.phone || ""}</p>
      <p><strong>Service:</strong> ${body.service || ""}</p>
      <p><strong>Message:</strong></p>
      <p>${body.message || ""}</p>
    `

    await transporter.sendMail({
      from: `${smtpUser}`,
      to: toEmail,
      subject,
      html,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
