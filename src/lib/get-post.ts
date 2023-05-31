import fs from 'fs/promises'
import { cache } from 'react'

import matter from 'gray-matter'

const ROOT_DIR = `${process.cwd()}/posts`

export const getAllFiles = async (
  path: string,
  files: Post[] = [],
  prevPaths: string[] = []
) => {
  const curDir = await fs.readdir(path)

  for (const i of curDir) {
    const subPath = `${path}/${i}`
    const subDir = await fs.stat(subPath)

    if (!subDir.isDirectory()) {
      const file = await fs.readFile(subPath, 'utf-8')
      const { data, content } = matter(file)
      const frontmatter = { ...data } as Frontmatter
      if (!frontmatter.publish) continue

      const slug = `${prevPaths.join('/')}/${i.replace(/\d+-|\.mdx/g, '')}`

      const post: Post = { ...frontmatter, slug, content }
      files.push(post)
      continue
    }

    prevPaths.push(i)
    await getAllFiles(subPath, files, prevPaths)
    prevPaths.pop()
  }

  return files
}

export const sortPostByDateTime = (posts: Post[]) => {
  return posts.sort((a, b) =>
    a && b ? new Date(b.date).getTime() - new Date(a.date).getTime() : 0
  )
}

export const getAllPostsBy = cache(async (type: PostType) => {
  const path = `${ROOT_DIR}/${type}`
  const posts = await getAllFiles(path)

  return sortPostByDateTime(posts)
})

export const getPostBy = cache(async (type: PostType, slug: Post['slug']) => {
  const posts = await getAllPostsBy(type)

  return posts.find((i) => i.slug === slug)
})
