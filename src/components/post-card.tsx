import Link from 'next/link'
import dayjs from 'dayjs'

type PostCardProps = {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  const date = dayjs(post.date).format('YYYY-MM-DD')

  return (
    <div className="rounded-lg border border-adaptive-gray-100 p-6 hover:bg-adaptive-gray-100">
      <Link href={`/blog/${post.slug}`}>
        <p className="break-keep text-h6 font-bold tracking-tight">
          {post.title}
        </p>
        <p className="mt-2 max-w-md break-keep text-p text-adaptive-gray-600">
          {post.description}
        </p>
      </Link>

      <div className="mt-3 flex items-center justify-between">
        <ul aria-label="tags" className="flex gap-2">
          {post.tags.map((tag) => (
            <li
              className="flex items-center rounded-lg border border-adaptive-gray-300 px-2 py-0.5 font-medium"
              key={tag}
            >
              <span className="text-sm text-adaptive-gray-600">{tag}</span>
            </li>
          ))}
        </ul>
        <span className="text-sm text-adaptive-gray-600">{date}</span>
      </div>
    </div>
  )
}
