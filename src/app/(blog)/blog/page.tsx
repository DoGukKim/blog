import { notFound } from 'next/navigation'

import { getAllPostsBy } from '@/lib/get-post'
import PostCard from '@/components/post-card'

export default async function BlogPage() {
  const posts = await getAllPostsBy('blog')
  if (!posts) return notFound()

  return (
    <div className="container flex flex-col">
      <h1 className="text-h2 font-bold tracking-tight">Blog</h1>
      <p>
        개발하며 경험, 학습한 내용을 정리하는 공간 입니다.
        <br />
        시리즈로 연재된 포스트는 아래 시리즈북으로 편리하게 열람할 수 있습니다
        🧐
      </p>

      <h2 className="text-h3 font-bold tracking-tight">All Posts</h2>

      <div className="flex">
        {posts.map((post) => (
          <PostCard key={post.title} post={post} />
        ))}
      </div>
    </div>
  )
}
