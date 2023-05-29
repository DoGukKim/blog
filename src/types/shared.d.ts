type Post = {
  content: string
  description: string
  date: string
  publish: boolean
  segments: string[] | []
  slug: string
  title: string
  tags: string[]
}

type Frontmatter = Pick<
  Post,
  'date' | 'description' | 'publish' | 'segments' | 'tags' | 'title'
>
