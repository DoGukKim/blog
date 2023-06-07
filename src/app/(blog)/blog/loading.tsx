import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <div className="container flex flex-col">
      <Skeleton className="mt-3 h-16 w-28" />
      <Skeleton className="mt-1 h-5 w-1/4" />
      <Skeleton className="mt-1 h-5 w-2/6" />
      <Skeleton className="mt-10 h-10 w-40" />

      <div className="mt-4 grid grid-cols-2 gap-6">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="rounded-lg border border-adaptive-gray-100 p-6"
          >
            <Skeleton className="h-5 w-2/6" />
            <Skeleton className="mt-3 h-5 w-full" />
            <Skeleton className="mt-3 h-5 w-3/6" />
            <Skeleton className="mt-3 h-5 w-3/6" />
          </div>
        ))}
      </div>
    </div>
  )
}
