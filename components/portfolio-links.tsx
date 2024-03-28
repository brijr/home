import bt from "@/lib/brijr";
import Link from "next/link";

export const PortfolioLinks = () => {
  return (
    <div className="grid">
      <h3 className="text-foreground">Portfolio</h3>
      <div className="flex flex-wrap gap-2 pt-2">
        {bt.categories.map((link) => (
          <Link
            className="not-prose hover:text-foreground bg-accent/20 hover:bg-accent/50 flex items-center gap-1 rounded-md border px-2 py-px text-base transition-all"
            key={link.label}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};
