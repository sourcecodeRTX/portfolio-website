import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ratty Ram - Student | Coder | Blogger",
  description:
    "Portfolio website of Ratty Ram - A passionate student, coder, and blogger sharing knowledge about technology and innovation.",
  keywords: "Ratty Ram, portfolio, student, coder, blogger, web developer, technology",
  authors: [{ name: "Ratty Ram" }],
  openGraph: {
    title: "Ratty Ram - Student | Coder | Blogger",
    description: "Portfolio website showcasing projects, skills, and blog posts",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
