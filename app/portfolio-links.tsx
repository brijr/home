import bt from "@/lib/brijr";
import Link from "next/link";
import { Folder } from "lucide-react";

export const PortfolioLinks = () => {
  return (
    <div className="grid">
      <h3 className="text-foreground">Portfolio</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {bt.categories.map((link) => (
          <Link
            className="not-prose hover:text-foreground bg-accent/20 hover:bg-accent/50 items-center gap-1 rounded-md border p-3 text-base transition-all flex group justify-between"
            key={link.label}
            href={link.href}
          >
            {link.label}
            <Folder
              size={16}
              className="text-accent/75 group-hover:text-foreground/75 transition-all"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
