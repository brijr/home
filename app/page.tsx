import { ModeToggle } from "@/components/mode-toggle";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

import logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="divide-y">
      <Nav />
      <Hero />
      <Work />
      <Footer />
    </main>
  );
}

const Hero = () => (
  <Section>
    <h1 className="sr-only">Bridger Tower | Design Engineer</h1>
    <h2 className="font-bold text-4xl">
      Design Engineer building software, websites, and brands.
    </h2>
    <p>
      Passionate about the intersection of design, technology, and marketing.
    </p>
  </Section>
);

const Work = () => (
  <Section>
    <div className="grid gap-4">
      {projects.map((project) => (
        <Link
          href={project.href}
          key={project.href}
          target="_blank"
          className="group grid grid-cols-[10rem_1fr_auto] md:border-t-0 hover:bg-accent/50 py-1 px-2 -mx-2 transition-all items-center"
        >
          <h3 className="group-hover:underline decoration-dotted underline-offset-2 decoration-primary/50 transition-all">
            {project.name}
          </h3>
          <p className="text-sm text-muted-foreground group-hover:text-foreground transition-all">
            {project.description}{" "}
          </p>
          <p className="text-xs px-1 py-px rounded-sm bg-accent/30 border text-muted-foreground group-hover:text-foreground transition-all">
            {project.tag}
          </p>
        </Link>
      ))}
    </div>
  </Section>
);

const Nav = () => (
  <nav>
    <Section className="flex items-center justify-between text-sm text-muted-foreground">
      <Link href="/" className="transition-all hover:opacity-80">
        <Image src={logo} alt="Bridger Tower Logo" width={32} height={26.05} />
      </Link>
      <h3>bridger tower :: design engineer</h3>
    </Section>
  </nav>
);

const footerLinks = [
  {
    name: "YouTube",
    href: "https://youtube.com/@bridgertower",
  },
  {
    name: "Email",
    href: "mailto:bridger@wip.ac",
  },
  {
    name: "GitHub",
    href: "https://github.com/brijr",
  },
];

const Footer = () => (
  <footer>
    <Section className="flex items-center justify-between text-sm text-muted-foreground">
      <div className="flex items-center gap-4">
        <ModeToggle />
        {footerLinks.map((link) => (
          <a
            key={link.name}
            className="transition-all hover:text-foreground"
            href={link.href}
            target="_blank"
          >
            {link.name}
          </a>
        ))}
      </div>
      <a href="https://x.com/bridgertower" target="_blank">
        © Bridger Tower, 2024
      </a>
    </Section>
  </footer>
);

const Section = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <section className="p-6">
    <div className={cn("max-w-screen-md mx-auto", className)}>{children}</div>
  </section>
);
