import Link from 'next/link'
import Image from 'next/image'

import me from 'public/me.webp'

import GlobalMenu from '@/components/layout/global-menu'
import Icon from '@/components/icon'
import ThemeToggle from '@/components/theme-toggle'

export default function GlobalHeader() {
  return (
    <header className="flex w-full select-none items-end pb-12 pt-8">
      <nav className="container flex items-center">
        <div className="flex items-center">
          <Link
            href="/blog"
            aria-label="logo"
            className="mr-3 inline-block rounded-lg p-1 transition-all hover:bg-adaptive-gray-200"
          >
            <Image
              src={me}
              alt="me"
              width={36}
              height={36}
              className="rounded-full"
            />
          </Link>
          <GlobalMenu />
        </div>
        <div className="ml-auto flex items-center">
          <ThemeToggle />
          <Link
            href="https://github.com/DoGukKim"
            target="_blank"
            referrerPolicy="no-referrer"
            className="ml-1 flex items-center rounded-lg p-1.5 transition-all hover:bg-adaptive-gray-200"
          >
            <Icon as="github" className="stroke-adaptive-gray-600" />
          </Link>
        </div>
      </nav>
    </header>
  )
}
