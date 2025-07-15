import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SudanFunds – Aid for the People',
  description: 'SudanFunds is a grassroots platform supporting aid for the people of Sudan.',
  generator: 'SudanFunds',
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

