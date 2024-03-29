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
      className="not-prose group flex gap-4 p-4 bg-accent/20 hover:bg-accent/50 border rounded-lg transition-all items-center"
      href={href}
    >
      <div className="w-10 h-10 border flex items-center justify-center bg-accent/50 rounded-md">
        <ArrowRight className="-mb-px h-4 w-4 transition-all group-hover:-rotate-45" />
      </div>
      <div className="leading-tight">
        <span className="flex">{children}</span>
        {desc && (
          <span className="block text-muted-foreground text-sm">{desc}</span>
        )}
      </div>
    </Link>
  );
};
