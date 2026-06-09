import type React from "react"
import type { Metadata, Viewport } from "next"

export const metadata: Metadata = {
  title: "Abu Hureirah Aid Network - Direct Aid to Gaza & Sudan",
  description:
    "A grassroots, volunteer-driven organization providing direct emergency food, water, and essential supplies to families in Gaza and Sudan. No middlemen. 100% of donations go to aid.",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#0c0a09",
}

export default function AHANLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
