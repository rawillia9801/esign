import './globals.css'
import React from 'react'

export const metadata = {
  title: 'E-Sign Virginia',
  description: 'Virginia Remote Online Notary Platform',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
