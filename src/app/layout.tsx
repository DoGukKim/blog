import '@/styles/globals.css'

import { fontSans } from '@/lib/fonts'
import ThemeProvider from '@/components/theme-provider'

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
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
