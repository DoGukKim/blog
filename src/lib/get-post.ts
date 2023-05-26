import { cache } from 'react'
import { promises as fs } from 'fs'
import { compileMDX } from 'next-mdx-remote/rsc'

export const getAllPosts = cache(async () => {
  const postsDir = await fs.readdir(`${process.cwd()}/content/posts`)

  const posts = await Promise.all(
    postsDir.map(async (file) => {
      const postContent = await fs.readFile(
        `${process.cwd()}/content/posts/${file}`,
        'utf8'
      )

      const { content, frontmatter } = await compileMDX<Post>({
        source: postContent,
        options: { parseFrontmatter: true },
      })

      // TODO: 데이터 가공 다시하기, matter 사용해서 MDXRemote랑 분리하기
      return { content, frontmatter, slug: file.replace(/\d+-|\.mdx/g, '') }
    })
  )

  return posts.sort((a, b) =>
    a && b
      ? new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
      : 0
  )
})

export const getPost = async (slug: string) => {
  const posts = await getAllPosts()

  return posts.find((post) => post.slug === slug)
}
