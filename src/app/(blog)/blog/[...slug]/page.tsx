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

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      type: 'article',
    },
  }
}

export default async function PostPage({ params }: PageProps) {
  const post = await getPostBy('blog', params.slug.join('/'))
  if (!post) notFound()

  const date = new Date(post.date).toISOString().split('T')[0]

  const jsonLd = {
    '@context': 'https://guk.vercel.app/blog',
    '@type': 'Article',
    author: 'Guk',
    title: post.title,
    description: post.description,
    url: 'http://www.guk.vercel.app',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://guk.vercel.app/blog',
    },
    datePublished: post.date,
    dateCreated: post.date,
    dateModified: post.date,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-3xl break-keep pb-12">
        <p className="mb-3 text-h7">{date}</p>
        <h1
          aria-label="title"
          className="mb-8 text-h3 font-bold tracking-tight"
        >
          {post.title}
        </h1>

        <PostBody>{post.content}</PostBody>
      </div>
    </>
  )
}
