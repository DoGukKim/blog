'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/utils/cn'

type Paths = 'blog'
type Names = Capitalize<Paths>
type Link = {
  name: Names
  path: `/${Paths}`
}

const LINKS: Link[] = [{ name: 'Blog', path: '/blog' }]

export default function GlobalMenu() {
  const pathname = usePathname()

  return (
    <ul className="flex">
      {LINKS.map((link) => {
        const isActive = pathname.includes(link.path)
        return (
          <li key={link.name} className="font-medium">
            <Link
              className={cn(
                'rounded-lg px-2.5 py-2 text-adaptive-gray-600 transition-all hover:bg-adaptive-gray-200 hover:text-adaptive-gray-900',
                {
                  'text-adaptive-gray-900': isActive,
                }
              )}
              href={link.path}
            >
              {link.name}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
