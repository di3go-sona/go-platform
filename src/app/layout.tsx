import type { Metadata } from 'next'
import { Archivo } from 'next/font/google'
import './globals.css'

import { ThemeProvider } from '@/components/theme-provider'

const archivo = Archivo({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'John Doe',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={archivo.className}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
