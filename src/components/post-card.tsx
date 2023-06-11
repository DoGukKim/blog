import Link from 'next/link'
import { replaceKoreanOfTagName } from '@/lib/get-post'

type PostCardProps = {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  const date = new Date(post.date).toISOString().split('T')[0]

  return (
    <div className="flex max-h-[10.625rem] min-h-[10.625rem] flex-col justify-between rounded-lg border border-adaptive-gray-200 p-4 hover:bg-adaptive-gray-100 md:max-h-[11.25rem] md:min-h-[11.25rem] md:p-6">
      <Link className="flex flex-col" href={`/blog/${post.slug}`}>
        <span className="break-keep text-h6 font-bold ">{post.title}</span>
        <span className="max-w-md break-keep pt-2 text-p text-adaptive-gray-600">
          {post.description}
        </span>
      </Link>

      <div className="flex items-end justify-between">
        <ul className="flex flex-wrap gap-2.5">
          {post.tags.map((tag) => (
            <li key={tag}>
              <Link
                className="rounded-lg border border-adaptive-gray-300 px-2 py-1.5 text-sm hover:bg-adaptive-gray-400"
                href={`/tags/${tag}`}
              >
                {replaceKoreanOfTagName(tag)}
              </Link>
            </li>
          ))}
        </ul>

        <span className="text-sm text-adaptive-gray-600">{date}</span>
      </div>
    </div>
  )
}
