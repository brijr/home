import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        {...(props as ImageProps)}
      />
    ),
    Date: ({ children }) => (
      <span className="text-sm">
        {new Date(children).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </span>
    ),
    Link: (props) => (
      <Link href={props.link} className="not-prose underline" {...props}>
        {props.children}
      </Link>
    ),
    ...components,
  };
}
