'use client'

import { Button } from '@/components/ui/button'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="container">
      <h2 className="text-h3 font-bold">페이지를 불러오지 못했습니다!</h2>

      <Button
        className="mt-3 rounded-lg border border-adaptive-gray-600 px-3 py-1.5 transition hover:bg-adaptive-gray-200"
        onClick={() => reset()}
      >
        <span className="text-p">재시도</span>
      </Button>
    </div>
  )
}
