import { type MDXRemoteProps } from 'next-mdx-remote/rsc'
import Link from 'next/link'

import { Code } from 'bright'

export const MDXComponents: MDXRemoteProps['components'] = {
  h1: (props) => (
    <h1 className="mb-10 text-h2 font-bold" {...props}>
      {props.children}
    </h1>
  ),
  h2: (props) => (
    <h2 className="text-h4 font-semibold tracking-tight" {...props}>
      {props.children}
    </h2>
  ),
  h3: (props) => (
    <h3 className="text-h5 font-semibold tracking-tight" {...props}>
      {props.children}
    </h3>
  ),
  p: (props) => (
    <p className="text-p leading-7" {...props}>
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
  ul: (props) => (
    <ul className="list-inside list-disc pl-3">{props.children}</ul>
  ),
  li: (props) => (
    <li className="">
      <span className="text-p">{props.children}</span>
    </li>
  ),
  a: (props) => (
    <Link
      className="text-p font-semibold text-adaptive-gray-600 underline decoration-current decoration-1 transition-colors hover:text-cyan-300"
      // className="text-p decoration-1 [&_code]:font-normal [&_code]:text-adaptive-gray-600 [&_code]:underline [&_code]:decoration-wavy"
      href={props.href || ''}
    >
      {props.children}
    </Link>
  ),
}
