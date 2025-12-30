import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { Toaster } from "sonner"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"
import { ClientBackground } from "@/components/client-background"

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Full Stack Developer Portfolio - Tanmay Wagh",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`theme-luke font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ClientBackground />
        <SmoothScrollProvider>
          <Suspense fallback={null}>
            <SiteHeader />
            {children}
            <Analytics />
            <Toaster />
          </Suspense>
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
