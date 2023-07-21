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

  if (!post) return {}

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
    '@context': 'https://schema.org/',
    '@type': 'BlogPosting',
    author: {
      '@type': 'Person',
      name: 'guk',
    },
    editor: 'guk',
    headline: post.title,
    alternativeHeadline: post.title,
    description: post.description,
    url: `https://www.guk.vercel.app/blog/${post.slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.guk.vercel.app/blog/${post.slug}`,
    },
    genre: 'tech',
    publisher: 'guk',
    keywords: `${post.tags.join(' ')}`,
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
          className="mb-3 text-h3 font-bold tracking-tight"
        >
          {post.title}
        </h1>
        <p className="mb-8 text-adaptive-gray-600">{post.description}</p>

        <PostBody>{post.content}</PostBody>
      </div>
    </>
  )
}
