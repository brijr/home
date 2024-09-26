import { ModeToggle } from "@/components/mode-toggle";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

import Balancer from "react-wrap-balancer";
import logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

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
  <Section className="grid gap-4">
    <h1 className="sr-only">Bridger Tower | Design Engineer</h1>
    <h2 className="font-medium text-4xl">
      <Balancer>
        Design Engineer building software, websites, and brands.
      </Balancer>
    </h2>
    <p>
      Passionate about the intersection of design, technology, and marketing.
    </p>
  </Section>
);

const Work = () => (
  <Section>
    <div className="grid gap-1">
      {projects.map((project) => (
        <Link
          href={project.href}
          key={project.href}
          target="_blank"
          className={cn(
            "group grid sm:grid-cols-[10rem_1fr] xl:grid-cols-[10rem_1fr_auto] items-center",
            "md:border-t-0",
            "hover:bg-accent/50",
            "rounded-sm py-2 px-3 -mx-3",
            "transition-all",
            ""
          )}
        >
          <h3 className="group-hover:underline decoration-dotted underline-offset-4 decoration-primary/50 transition-all">
            {project.name}
          </h3>
          <p className="text-sm text-muted-foreground group-hover:text-foreground transition-all">
            {project.description}{" "}
          </p>
          <h4 className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-all">
            <span className="text-xs hidden xl:block px-1 py-px rounded-sm bg-accent/30 border">
              {project.tag}
            </span>
            <ExternalLink className="group-hover:w-3 opacity-0 group-hover:opacity-100 w-0 h-3 transition-all" />
          </h4>
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
