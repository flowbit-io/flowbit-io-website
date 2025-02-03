// Type 1
// import type { Metadata } from 'next'
// import './globals.css'

// export const metadata: Metadata = {
//   title: 'Flowbit',
//   description: 'Flowbit Website',
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   )
// }

// Type 2
import type { Metadata } from 'next'
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'Flowbit',
  description: 'Flowbit Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full dark">
      <body className={cn("relative h-full font-sans antialiased", inter.className)}>
        <main className="relative flex min-h-screen flex-col">{children}</main>
      </body>
    </html>
  )
}

