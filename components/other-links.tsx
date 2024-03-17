import bt from "@/lib/brijr";
import { ArrowRight } from "lucide-react";

export const OtherLinks = () => {
  return (
    <div className="grid">
      <h3 className="text-foreground">Other</h3>
      {bt.links.map((link) => (
        <a
          className="not-prose hover:text-foreground group flex items-center gap-1 transition-all"
          key={link.label}
          href={link.href}
        >
          <ArrowRight className="-mb-px h-4 w-4 transition-all group-hover:-rotate-45" />
          {link.label}
        </a>
      ))}
    </div>
  );
};
