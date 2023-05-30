type Frontmatter = {
  description: string
  date: string
  publish: boolean
  title: string
  tags: string[]
  thumbnail?: string
}

type PostType = 'blog' | 'snippet'

type Post = {
  content: string
  slug: string
} & Frontmatter
