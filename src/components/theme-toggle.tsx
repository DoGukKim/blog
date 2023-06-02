'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import { Button } from './ui/button'
import Icon from './icon'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex items-center">
      {(theme === 'light' || theme === 'system') && (
        <Button
          onClick={() => setTheme('dark')}
          className="rounded-lg p-1.5 transition-all hover:bg-adaptive-gray-200"
        >
          <Icon as="sun" className="stroke-adaptive-gray-600" />
        </Button>
      )}

      {theme === 'dark' && (
        <Button
          onClick={() => setTheme('light')}
          className="rounded-lg p-1.5 transition-all hover:bg-adaptive-gray-200"
        >
          <Icon as="moon" className="stroke-adaptive-gray-600" />
        </Button>
      )}
    </div>
  )
}
