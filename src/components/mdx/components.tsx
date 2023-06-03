import { type MDXRemoteProps } from 'next-mdx-remote/rsc'
import { Code } from 'bright'

export const MDXComponents: MDXRemoteProps['components'] = {
  h1: (props) => (
    <h1 className="mb-10 text-h2 font-bold" {...props}>
      {props.children}
    </h1>
  ),
  h2: (props) => (
    <h2 className="mb-4 mt-3 text-h4 font-semibold" {...props}>
      {props.children}
    </h2>
  ),
  h3: (props) => (
    <h3 className="my-6 text-h5 font-semibold" {...props}>
      {props.children}
    </h3>
  ),
  a: (props) => <a {...props}>{props.children}</a>,
  p: (props) => (
    <p className="text-p leading-6" {...props}>
      {props.children}
    </p>
  ),
  pre: ({
    children,
    ...props
  }: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLPreElement
  >) => {
    return (
      /* @ts-expect-error Async Server Component */
      <Code {...props} theme="dracula">
        {children}
      </Code>
    )
  },
}
