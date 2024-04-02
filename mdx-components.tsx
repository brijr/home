import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import Link from "next/link";
import { Breadcrumb } from "./components/breadcrumb";
import { Posts } from "./components/posts";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Image: (props) => <Image {...(props as ImageProps)} />,
    Date: ({ children }) => (
      <div className="text-sm mt-12 not-prose flex items-center justify-between gap-4 flex-wrap">
        <p>Written by Bridger Tower</p>
        <p>
          {new Date(children).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
      </div>
    ),
    Link: (props) => (
      <Link href={props.link} {...props}>
        {props.children}
      </Link>
    ),
    Breadcrumb,
    Posts,
    ...components,
  };
}
