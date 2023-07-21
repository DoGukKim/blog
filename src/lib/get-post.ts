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

export const getAllDir = async (path: string, dirs: string[] = []) => {
  const curDir = await fs.readdir(path)

  for (const i of curDir) {
    const subPath = `${path}/${i}`
    const subDir = await fs.stat(subPath)

    if (!subDir.isDirectory()) continue

    dirs.push(i)
    await getAllDir(subPath, dirs)
  }

  return dirs
}

export const getAllTagsBy = cache(async (type: PostType) => {
  const path = `${ROOT_DIR}/${type}`
  const dirs = await getAllDir(path)

  return dirs
})

export const replaceKoreanOfTagName = (name: string) => {
  const map: { [key: string]: string } = {
    algorithm: '알고리즘',
    baekjoon: '백준',
    programmers: '프로그래머스',
    'type-challenge': '타입 챌린지',
    'computer-science': '컴퓨터 공학',
    'data-structure': '자료구조',
    database: '데이터 베이스',
    network: '네트워크',
    'operate-systems': '운영체제',
    frontend: '프론트 엔드',
    javascript: '자바스크립트',
    typescript: '타입스크립트',
    seo: 'seo',
  }

  return map[name]
}
