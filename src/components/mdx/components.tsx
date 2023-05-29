import { type MDXRemoteProps } from 'next-mdx-remote/rsc'

export const MDXComponents: MDXRemoteProps['components'] = {
  h1: (props) => <h1 {...props}>{props.children}</h1>,
  h2: (props) => <h2 {...props}>{props.children}</h2>,
  h3: (props) => <h3 {...props}>{props.children}</h3>,
  a: (props) => <a {...props}>{props.children}</a>,
  p: (props) => <p {...props}>{props.children}</p>,
}
