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
    <ul className="flex gap-1">
      {LINKS.map((link) => {
        const isActive = pathname.includes(link.path)
        return (
          <li
            key={link.name}
            className={cn('text-slate-800', {
              'text-cyan-300': isActive,
            })}
          >
            <Link href={link.path}>{link.name}</Link>
          </li>
        )
      })}
    </ul>
  )
}
