import Link from 'next/link'

type PostCardProps = {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div>
      <Link href={`/blog/${post.slug}`}>
        <p className="text-h6">{post.title}</p>
        <p className="max-w-md">{post.description}</p>
      </Link>
      <div>
        {/* {post.tags.map((i) => (
          <span key={i}>{i}</span>
        ))}
        <span>{post.date}</span> */}
      </div>
    </div>
  )
}
