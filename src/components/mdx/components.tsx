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
    <h2 className="mb-1 text-h5 font-bold tracking-tight" {...props}>
      {props.children}
    </h2>
  ),
  h3: (props) => (
    <h3 className="mb-2 mt-5 text-h6 font-bold" {...props}>
      {props.children}
    </h3>
  ),
  p: (props) => (
    <p
      className="text-p leading-7 [&_code]:rounded-md [&_code]:bg-adaptive-gray-300 [&_code]:px-1 [&_code]:py-0.5"
      {...props}
    >
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
    <ul className="list-inside list-disc [&_ul]:list-[circle] [&_ul]:pl-6">
      {props.children}
    </ul>
  ),
  ol: (props) => (
    <ol className="list-inside list-decimal [&_ul]:pl-6">{props.children}</ol>
  ),
  li: (props) => (
    <li className="my-2">
      <span className="text-p leading-7 [&_br]:hidden [&_br]:md:block [&_code]:rounded-md [&_code]:bg-adaptive-gray-300 [&_code]:px-1 [&_code]:py-0.5">
        {props.children}
      </span>
    </li>
  ),
  a: (props) => (
    <Link
      className="text-p font-semibold text-adaptive-gray-600 underline decoration-current decoration-1 transition-colors hover:text-cyan-300"
      target="_blank"
      href={props.href || ''}
    >
      {props.children}
    </Link>
  ),
  Space: () => <div aria-label="space" className="p-6" />,
  blockquote: (props) => (
    <blockquote className="my-3 border-l-4 border-gray-300 bg-adaptive-gray-100 px-4 py-5">
      {props.children}
    </blockquote>
  ),
}
