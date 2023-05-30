import Link from 'next/link'
import { notFound } from 'next/navigation'

import { getAllPostsBy } from '@/lib/get-post'

export default async function BlogPage() {
  const posts = await getAllPostsBy('blog')
  if (!posts) return notFound()

  return (
    <main>
      <div className="flex flex-col">
        {posts.map((post) => (
          <Link
            key={post.title}
            as={`blog/${post.slug}`}
            href={`blog/${post.slug}`}
          >
            {post.title}
          </Link>
        ))}
      </div>
    </main>
  )
}
