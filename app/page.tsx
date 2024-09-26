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
    <main className="flex flex-col min-h-screen">
      <div className="flex-grow divide-y">
        <Nav />
        <Hero />
        <Work />
      </div>
      <Footer />
    </main>
  );
}

const Nav = () => (
  <nav className="fade-down">
    <section className="md:p-6">
      <div
        className={cn(
          "absolute top-0 inset-x-0 z-[9999] p-6 text-black",
          "md:static md:p-0 md:max-w-screen-md md:mx-auto md:text-foreground",
          "flex items-center justify-between",
          "text-sm md:text-muted-foreground"
        )}
      >
        <Link href="/" className="transition-all hover:opacity-80">
          <Image
            src={logo}
            alt="Bridger Tower Logo"
            className="invert md:dark:invert-0"
            width={32}
            height={26.05}
          />
        </Link>
        <h3>bridger tower :: design engineer</h3>
      </div>
    </section>
  </nav>
);

const Hero = () => (
  <div className="fade-up-2">
    <Section className="space-y-4">
      <h1 className="sr-only">Bridger Tower | Design Engineer</h1>
      <h2 className="text-2xl md:text-4xl font-medium">
        <Balancer>
          Design Engineer building software, websites, and brands.
        </Balancer>
      </h2>
      <p className="text-muted-foreground">
        <Balancer>
          Passionate about the intersection of design, technology, and
          marketing.
        </Balancer>
      </p>
    </Section>
  </div>
);

const Work = () => (
  <div className="fade-up-3">
    <Section>
      <div className="space-y-3 md:space-y-1">
        {projects.map((project, index) => (
          <div key={project.href} className={`fade-in-up fade-in-${index + 4}`}>
            <Link
              href={project.href}
              target="_blank"
              className={cn(
                "group grid items-center rounded-sm p-3 md:py-2 md:px-3 md:-mx-3",
                "bg-accent/10 md:bg-transparent",
                "sm:grid-cols-[10rem_1fr] xl:grid-cols-[10rem_1fr_auto]",
                "hover:bg-accent/50 border md:border-transparent md:hover:border-border transition-all"
              )}
            >
              <h3 className="group-hover:underline -mt-[3px] decoration-dotted underline-offset-4 decoration-primary/50 transition-all">
                {project.name}
              </h3>
              <p className="text-sm text-muted-foreground group-hover:text-foreground transition-all">
                {project.description}
              </p>
              <h4 className="hidden md:flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-all">
                <span className="hidden xl:block text-xs px-1 py-px rounded-sm bg-accent/30 border">
                  {project.tag}
                </span>
                <ExternalLink className="w-0 h-3 opacity-0 group-hover:w-3 group-hover:opacity-100 transition-all" />
              </h4>
            </Link>
          </div>
        ))}
      </div>
    </Section>
  </div>
);

const Footer = () => {
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

  return (
    <footer className="border-t fade-up-4">
      <Section className="flex items-center justify-between text-sm text-muted-foreground">
        <div className="flex flex-row-reverse md:flex-row md:justify-start md:w-fit justify-between w-full items-center gap-4">
          <ModeToggle />
          <div className="flex gap-2">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                className="transition-all hover:text-foreground"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
        <a
          className="hidden md:block"
          href="https://x.com/bridgertower"
          target="_blank"
          rel="noopener noreferrer"
        >
          © Bridger Tower, 2024
        </a>
      </Section>
    </footer>
  );
};

const Section = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <section className={cn("p-6")}>
    <div className={cn("max-w-screen-md mx-auto", className)}>{children}</div>
  </section>
);
