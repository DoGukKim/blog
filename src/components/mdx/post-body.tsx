import { MDXRemote } from 'next-mdx-remote/rsc'

import { MDXComponents } from './components'

export default function PostBody({ children }: { children: string }) {
  return (
    /* @ts-expect-error Async Server Component */
    <MDXRemote source={children} components={MDXComponents} />
  )
}
