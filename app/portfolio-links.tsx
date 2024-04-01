import bt from "@/lib/brijr";
import Link from "next/link";
import { Folder } from "lucide-react";

export const PortfolioLinks = () => {
  return (
    <div className="grid">
      <h3 className="text-foreground">Portfolio</h3>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {bt.categories.map((link) => (
          <Link
            className="not-prose group flex items-center justify-between gap-1 rounded-md border bg-accent/20 p-3 text-base transition-all hover:bg-accent/50 hover:text-foreground"
            key={link.label}
            href={link.href}
          >
            {link.label}
            <Folder
              size={16}
              className="text-accent/75 transition-all group-hover:text-foreground/75"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
