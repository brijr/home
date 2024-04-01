import Link from "next/link";
import React from "react";

export const Breadcrumb = ({ href, name }: { href: string; name: string }) => {
  return (
    <Link
      className="not-prose text-muted-foreground transition-all hover:text-accent-foreground"
      href={href}
    >
      {name} /
    </Link>
  );
};
