import fs from 'fs/promises'
import { cache } from 'react'

import matter from 'gray-matter'

const ROOT_DIR = `${process.cwd()}/posts`

export const getAllFiles = async (path: string, files: Post[] = []) => {
  const curDir = await fs.readdir(path)

  for (const i of curDir) {
    const subPath = `${path}/${i}`
    const subDir = await fs.stat(subPath)

    if (!subDir.isDirectory()) {
      const file = await fs.readFile(subPath, 'utf-8')
      const { data, content } = matter(file)
      const frontmatter = { ...data } as Frontmatter
      if (!frontmatter.publish) continue

      const slug = `${frontmatter.segments.join('/')}/${i.replace(
        /\d+-|\.mdx/g,
        ''
      )}`
      const post: Post = { ...frontmatter, content, slug }
      files.push(post)
      continue
    }

    await getAllFiles(subPath, files)
  }

  return files
}

export const getAllBlogPosts = cache(async () => {
  const path = `${ROOT_DIR}/blog`
  const posts = await getAllFiles(path)

  return posts.sort((a, b) =>
    a && b ? new Date(b.date).getTime() - new Date(a.date).getTime() : 0
  )
})

export const getPost = async () => {
  // const post = await getAllBlogPosts()
}
