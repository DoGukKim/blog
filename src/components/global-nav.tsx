import Link from 'next/link'

import GlobalMenu from './global-menu'
import { Icons } from './Icon'

export default function GlobalNav() {
  return (
    <header>
      <nav className="flex h-10  items-center justify-between">
        <div className="flex">
          <Link href="/">💪🏻</Link>
          <GlobalMenu />
        </div>

        <div>
          <Link
            href="https://github.com/DoGukKim"
            target="_blank"
            rel="noreferrer"
          >
            <Icons.Github className="h-6 w-6 text-slate-500" />
          </Link>
        </div>
      </nav>
    </header>
  )
}
