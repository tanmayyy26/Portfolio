import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

type ReqBody = {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  service?: string
  message?: string
}

export async function POST(req: Request) {
  try {
    const body: ReqBody = await req.json()

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
