'use client'

import { useTheme } from 'next-themes'

import { Button } from './ui/button'
import Icon from './icon'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex items-center">
      <Button
        onClick={() => (theme == 'dark' ? setTheme('light') : setTheme('dark'))}
        className="rounded-lg p-1.5 transition-all hover:bg-adaptive-gray-200"
      >
        <Icon as="sun" className="stroke-adaptive-gray-600 dark:hidden" />
        <Icon as="moon" className="hidden dark:block" />
      </Button>
    </div>
  )
}
