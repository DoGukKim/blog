type PostType = 'blog' | 'snippet'

type Post = {
  content: string
  description: string
  date: string
  publish: boolean
  slug: string
  title: string
  tags: string[]
  thumbnail?: string
}

type Frontmatter = Pick<
  Post,
  'date' | 'description' | 'publish' | 'tags' | 'title' | 'thumbnail'
>
