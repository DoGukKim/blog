import '@/styles/globals.css'

import { fontSans } from '@/lib/fonts'

import GlobalNav from '@/components/global-nav'
import ThemeProvider from '@/components/theme-provider'
import TailwindIndicator from '@/components/tailwind-indicator'

export const metadata = {
  title: {
    default: '꾹 블로그',
    template: '%s | 꾹 블로그',
  },
  description: '꾹 블로그',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={fontSans.variable} suppressHydrationWarning>
      <body className="mx-auto max-w-3xl px-6 antialiased lg:max-w-6xl lg:px-8">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <GlobalNav />
          {children}
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  )
}
