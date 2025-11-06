import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "SudanFunds - Verified Sudanese Campaigns",
  description:
    "SudanFunds connects donors with verified Sudanese campaigns to ensure your support reaches those who need it most.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
