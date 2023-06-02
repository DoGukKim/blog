import '@/styles/globals.css'

import { fontSans } from '@/lib/fonts'

import TailwindIndicator from '@/components/tailwind-indicator'
import ThemeProvider from '@/components/theme-provider'
import GlobalHeader from '@/components/layout/global-header'

type RootLayoutProps = {
  children: React.ReactNode
}

export const metadata = {
  title: {
    default: '꾹 블로그',
    template: '%s | 꾹 블로그',
  },
  description: '꾹 블로그',
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko" className={fontSans.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <GlobalHeader />
          {children}
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  )
}
