import { notFound } from 'next/navigation'

import { getAllPostsBy } from '@/lib/get-post'

import PostCard from '@/components/post-card'

export default async function BlogPage() {
  const posts = await getAllPostsBy('blog')
  if (!posts) return notFound()

  return (
    <div className="container flex flex-col pb-12">
      <h1 className="text-h2 font-bold tracking-tight">Blog</h1>
      <p aria-label="" className="mt-1 text-p">
        개발하며 경험, 학습한 내용을 정리하는 공간 입니다.
        <br />
        알고리즘 풀이, 컴퓨터 공학, FE 기술 관련 포스팅이 있습니다 👍🏻
      </p>

      <h2 className="mt-8 text-h3 font-bold tracking-tight">
        All Posts
        <span className="ml-1 text-h7">({posts.length})</span>
      </h2>

      <ul className="mt-3 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {posts.map((post) => (
          <li key={post.title}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </div>
  )
}
