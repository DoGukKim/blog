import Link from 'next/link'

import GlobalMenu from './global-menu'
import ThemeToggle from './theme-toggle'
import { Icons } from './icon'

export default function GlobalNav() {
  return (
    <header className="sticky	top-0 flex w-full items-center">
      <nav className="flex h-10  w-full items-center justify-between">
        <div className="flex">
          <Link href="/">💪🏻</Link>
          <GlobalMenu />
        </div>

        <div className="flex items-center">
          <ThemeToggle />
          <Link
            href="https://github.com/DoGukKim"
            target="_blank"
            rel="noreferrer"
          >
            <Icons.Github className="h-6 w-6" />
          </Link>
        </div>
      </nav>
    </header>
  )
}
