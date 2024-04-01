import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const InLink = ({
  href,
  children,
  desc,
}: {
  href: string;
  children: React.ReactNode;
  desc?: string;
}) => {
  return (
    <Link
      className="not-prose group flex items-center gap-4 rounded-lg border bg-accent/20 p-4 transition-all hover:bg-accent/50"
      href={href}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-md border bg-accent/50">
        <ArrowRight className="-mb-px h-4 w-4 transition-all group-hover:-rotate-45" />
      </div>
      <div className="leading-tight">
        <span className="flex">{children}</span>
        {desc && (
          <span className="block text-sm text-muted-foreground">{desc}</span>
        )}
      </div>
    </Link>
  );
};
