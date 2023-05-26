import { getPost } from '@/lib/get-post'
import { notFound } from 'next/navigation'

export default async function PostPage({
  params,
}: {
  params: { slug: string[] }
}) {
  // TODO: 슬러그 제대로 설정하기
  const post = await getPost(params.slug[0])
  if (!post) notFound()

  return <article className="prose prose-slate mx-auto">{post.content}</article>
}
