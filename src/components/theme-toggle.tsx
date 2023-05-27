'use client'

import { Fragment } from 'react'
import { useTheme } from 'next-themes'
import { Menu, Transition } from '@headlessui/react'

import { Icons } from './icon'
import { Button } from './ui/button'

export default function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <div>
      <Menu as="div" className="relative outline-none">
        <Menu.Button className="h-9 items-center justify-center rounded-md px-2 outline-none transition-colors hover:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-transparent dark:text-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-100 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 dark:data-[state=open]:bg-transparent">
          <Icons.Moon />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 min-w-[8rem] rounded-md border border-slate-100 bg-white p-1 text-sm text-slate-600 shadow-md">
            <Menu.Item>
              <Button
                onClick={() => setTheme('light')}
                className="flex w-full cursor-pointer items-center rounded-md px-2 py-1.5 hover:bg-slate-100 focus:bg-slate-100"
              >
                <Icons.Sun className="mr-2 h-4 w-4" />
                <span>Light</span>
              </Button>
            </Menu.Item>
            <Menu.Item>
              <Button
                onClick={() => setTheme('dark')}
                className="flex w-full cursor-pointer items-center rounded-md px-2 py-1.5 hover:bg-slate-100 focus:bg-slate-100"
              >
                <Icons.Moon className="mr-2 h-4 w-4" />
                <span>Dark</span>
              </Button>
            </Menu.Item>
            <Menu.Item>
              <Button
                onClick={() => setTheme('system')}
                className="flex w-full cursor-pointer items-center rounded-md px-2 py-1.5 hover:bg-slate-100 focus:bg-slate-100"
              >
                <Icons.Laptop className="mr-2 h-4 w-4" />
                <span>System</span>
              </Button>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
