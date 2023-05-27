import Link from 'next/link'
import { notFound } from 'next/navigation'

import { getAllPosts } from '@/lib/get-post'

export default async function BlogPage() {
  const posts = await getAllPosts()
  if (!posts) return notFound()

  return (
    <main>
      <div className="flex flex-col">
        {posts.map((post) => (
          <Link key={post.frontmatter.title} href={`blog/${post.slug}`}>
            {post.frontmatter.title}
          </Link>
        ))}
      </div>
    </main>
  )
}
