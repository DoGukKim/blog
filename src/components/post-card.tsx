import Link from 'next/link'
import dayjs from 'dayjs'

type PostCardProps = {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  const date = dayjs(post.date).format('YYYY년MM월DD일')

  return (
    <div className="flex min-h-[10.1875rem] flex-col justify-between rounded-lg border border-adaptive-gray-100 p-6 hover:bg-adaptive-gray-100">
      <Link href={`/blog/${post.slug}`}>
        <p className="break-keep text-h6 font-bold tracking-tight">
          {post.title}
        </p>
        <p className="mt-2 max-w-md break-keep text-p text-adaptive-gray-600">
          {post.description}
        </p>
      </Link>

      <p className="mt-2 text-sm text-adaptive-gray-600">{date}</p>
    </div>
  )
}
