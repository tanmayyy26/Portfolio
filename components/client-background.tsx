"use client"

import dynamic from "next/dynamic"

const ThreeBackground = dynamic(
  () => import("@/components/three-background").then((mod) => ({ default: mod.ThreeBackground })),
  {
    ssr: false,
    loading: () => null,
  }
)

export function ClientBackground() {
  return <ThreeBackground />
}
