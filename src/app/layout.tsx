import '@/styles/globals.css'

import { fontSans } from '@/lib/fonts'

import TailwindIndicator from '@/components/tailwind-indicator'
import ThemeProvider from '@/components/theme-provider'
import GlobalHeader from '@/components/layout/global-header'

type RootLayoutProps = {
  children: React.ReactNode
}

export const metadata = {
  metadataBase: new URL('https://guk.vercel.app'),
  title: {
    default: '꾹 블로그',
    template: '%s | 꾹 블로그',
  },
  description: '개발하며 경험, 학습한 내용을 정리하는 공간 입니다.',
  openGraph: {
    title: {
      default: '꾹 블로그',
      template: '%s | 꾹 블로그',
    },
    description: '개발하며 경험, 학습한 내용을 정리하는 공간 입니다.',
    type: 'website',
    url: 'https://guk.vercel.app',
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      default: '꾹 블로그',
      template: '%s | 꾹 블로그',
    },
    description: '개발하며 경험, 학습한 내용을 정리하는 공간 입니다.',
  },
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko" className={fontSans.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <GlobalHeader />
          {children}
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  )
}
