import Link from 'next/link'
import Image from 'next/image'

import me from 'public/me.webp'

export default function GlobalFooter() {
  return (
    <footer className="container">
      <div className="flex items-center border-t border-adaptive-gray-200 py-6">
        <Link
          href="/blog"
          aria-label="logo"
          className="mr-1.5 inline-block rounded-lg p-1 transition-all hover:bg-adaptive-gray-200"
        >
          <Image priority src={me} alt="me" className="h-6 w-6 rounded-full" />
        </Link>

        <p>
          Built by{' '}
          <Link
            href="https://github.com/DoGukKim"
            referrerPolicy="no-referrer"
            target="_blank"
            className="text-adaptive-gray-600 underline"
          >
            DoGukKim
          </Link>
          . Hosted on Vercel. The source code is available on{' '}
          <Link
            href="https://github.com/DoGukKim/blog"
            referrerPolicy="no-referrer"
            target="_blank"
            className="text-adaptive-gray-600 underline"
          >
            Github
          </Link>
          .
        </p>
      </div>
    </footer>
  )
}
