import Link from 'next/link'

import Icon from '@/components/icon'

export default function GlobalNav() {
  return (
    <header className="sticky top-0 z-30">
      <nav className="container flex h-14 items-center">
        <div className="ml-auto flex">
          <Link
            href="https://github.com/DoGukKim"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <Icon as="github" />
          </Link>
        </div>
      </nav>
    </header>
  )
}
