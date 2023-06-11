import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'

import {
  getAllPostsBy,
  getAllTagsBy,
  replaceKoreanOfTagName,
} from '@/lib/get-post'
import { toCapitalize } from '@/utils/char'

import PostCard from '@/components/post-card'

type PageParams = {
  slug: string
}

type PageProps = {
  params: PageParams
}

export async function generateStaticParams(): Promise<PageParams[]> {
  const tags = await getAllTagsBy('blog')
  return tags.map((tag) => ({ slug: tag }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  return {
    title: params.slug,
    description: `${params.slug}가 태그된 포스팅 목록입니다.`,
  }
}

export default async function TagsPage({ params }: PageProps) {
  const posts = await getAllPostsBy('blog')
  const postsByTag = posts.filter((post) => post.tags.includes(params.slug))
  const allTags = await getAllTagsBy('blog')

  if (!posts || !postsByTag || !allTags) return notFound()

  return (
    <div className="container flex flex-col pb-12">
      <h1 className="mb-4 text-h2 font-bold tracking-tight [&_span]:text-cyan-300">
        Posts tagged with:
        <span> {toCapitalize(params.slug)}</span>
      </h1>

      <ul className="flex flex-wrap gap-2">
        {allTags.map((tag) => (
          <li key={tag} className="mb-3">
            <Link
              className="rounded-lg border border-adaptive-gray-200 px-2.5 py-1.5 hover:bg-adaptive-gray-100"
              href={`/tags/${tag}`}
            >
              {replaceKoreanOfTagName(tag)}
            </Link>
          </li>
        ))}
      </ul>

      <h2 className="mt-8 text-h3 font-bold tracking-tight">
        Posts
        <span className="ml-1 text-h7">({postsByTag.length})</span>
      </h2>

      {!postsByTag.length ? (
        <div className="flex justify-center">
          <p>포스팅 예정입니다!👍🏻</p>
        </div>
      ) : (
        <ul className="mt-3 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {postsByTag.map((post) => (
            <li key={post.title}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
