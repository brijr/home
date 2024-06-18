import { ArrowRight } from "lucide-react";

export const OutLink = ({
  href,
  children,
  desc,
}: {
  href: string;
  children: React.ReactNode;
  desc?: string;
}) => {
  return (
    <a
      className="not-prose group grid grid-cols-[40px_1fr] items-start gap-4 rounded-lg border bg-accent/20 p-4 transition-all hover:bg-accent/50"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
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
    </a>
  );
};
