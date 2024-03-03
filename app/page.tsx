import bt from "@/lib/brijr";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="max-w-xl mx-auto">
      <Intro />
    </main>
  );
}

const Intro = () => {
  return (
    <section className="my-12 lg:my-24">
      <div className="grid gap-8 md:gap-12">
        {/* Hero text */}
        <div className="grid gap-4">
          <h1 className="text-primary">
            Bridger Tower{" "}
            <span className="text-muted-foreground">
              (aka. <a href="https://github.com/brijr">brijr</a>)
            </span>{" "}
            is a Designer and Developer
          </h1>
          <h2>I build software, websites, and brands.</h2>
        </div>
        <div className="grid gap-4">
          <Paragraph>
            I am a designer and developer from Utah. I work as a design engineer
            at <OutLink href="https://ampry.com">Ampry</OutLink>. I founded{" "}
            <OutLink href="https://zion.surf">Zion Design</OutLink> and I am
            currently building{" "}
            <OutLink href="https://alpinecodex.com">Alpine Codex</OutLink> and{" "}
            <OutLink href="https://9d8.dev">9d8</OutLink> to deliver next-gen
            performance marketing software.
          </Paragraph>
          <Paragraph>
            I belong to the intersection of design, code, and marketing. After
            studying marketing in university, I started my career as a marketing
            designer before diving into software design and development.
          </Paragraph>
          <Paragraph>
            thanks for visiting and feel free to reach out to me. Always looking
            to collaborate and learn from others.
          </Paragraph>
        </div>
        <div className="grid gap-2 text-muted-foreground">
          Portfolio
          {bt.categories.map((link) => (
            <Link
              className="flex group gap-1 items-center text-primary hover:underline underline-offset-2 decoration-purple-400"
              key={link.label}
              href={link.href}
            >
              <ArrowRight className="w-4 h-4 -mb-px transition-all group-hover:-rotate-45" />
              {link.label}
            </Link>
          ))}
        </div>
        <div className="grid gap-2 text-muted-foreground">
          More
          {bt.links.map((link) => (
            <a
              className="flex group gap-1 items-center text-primary hover:underline underline-offset-2 decoration-purple-400"
              key={link.label}
              href={link.href}
            >
              <ArrowRight className="w-4 h-4 -mb-px transition-all group-hover:-rotate-45" />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const OutLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      className="hover:text-foreground transition-all underline underline-offset-2 decoration-purple-400"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

const Paragraph = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-muted-foreground">{children}</p>;
};
