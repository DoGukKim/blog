import Link from 'next/link'

type PostCardProps = {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  const date = new Date(post.date).toISOString().split('T')[0]

  return (
    <Link
      className="flex min-h-[10.1875rem] flex-col justify-between rounded-lg border border-adaptive-gray-100 p-6 hover:bg-adaptive-gray-100"
      href={`/blog/${post.slug}`}
    >
      <p className="break-keep text-h6 font-bold tracking-tight">
        {post.title}
      </p>
      <p className="mt-2 max-w-md break-keep text-p text-adaptive-gray-600">
        {post.description}
      </p>
      <p className="mt-2 text-sm text-adaptive-gray-600">{date}</p>
    </Link>
  )
}
