import { type Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getAllPostsBy, getPostBy } from '@/lib/get-post'

import PostBody from '@/components/mdx/post-body'

type PageParams = {
  slug: Post['slug'][]
}

type PageProps = {
  params: PageParams
}

export async function generateStaticParams(): Promise<PageParams[]> {
  const posts = await getAllPostsBy('blog')
  return posts.map((post) => ({ slug: post.slug.split('/') }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const post = await getPostBy('blog', params.slug.join('/'))

  if (!post) {
    return {}
  }

  // TODO: og || twitter 설정 env나, config에 설정 사용해도 될 듯!
  return {
    title: post.title,
    description: post.description,
  }
}

export default async function PostPage({ params }: PageProps) {
  const post = await getPostBy('blog', params.slug.join('/'))

  if (!post) notFound()

  return (
    <article className="prose prose-slate mx-auto">
      <PostBody>{post.content}</PostBody>
    </article>
  )
}
