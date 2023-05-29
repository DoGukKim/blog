import { MDXRemote } from 'next-mdx-remote/rsc'

import { MDXComponents } from './components'

export default function PostBody({ children }: { children: string }) {
  /* @ts-expect-error Async Server Component */
  return <MDXRemote source={children} components={MDXComponents} />
}
