import { Main } from "@/components/craft";
import { ModeToggle } from "@/components/mode-toggle";
import { workData } from "@/lib/data";

import logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Main>
      <Nav />
      <Hero />
      <Work />
      <Footer />
    </Main>
  );
}

const Hero = () => (
  <section className="not-prose grid gap-4">
    <h1 className="sr-only">Bridger Tower | Design Engineer</h1>
    <h2 className="font-bold text-4xl">
      Design Engineer building software, websites, and brands.
    </h2>
    <p>
      Passionate about the intersection of design, technology, and marketing.
    </p>
  </section>
);

const WorkSection = ({
  title,
  items,
}: {
  title: string;
  items: WorkType[];
}) => (
  <div className="group relative my-8 grid gap-2">
    <h3 className="not-prose text-orange-500 dark:text-orange-300 opacity-0 text-sm group-hover:opacity-100 transition-all  origin-bottom-left duration-500 text-right">
      {title}
    </h3>
    <div className="grid gap-2 not-prose">
      {items.map((item) => (
        <Link
          href={item.href}
          key={item.href}
          target="_blank"
          className="group flex flex-col text-base md:flex-row md:justify-between md:items-center py-2 md:border-b p-3 rounded-lg md:rounded-none md:py-1 md:px-0 bg-accent/50 border md:border-x-0 md:border-t-0 md:bg-transparent hover:border-orange-400 transition-all"
        >
          {item.name}
          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-all">
            {item.description}
          </span>
        </Link>
      ))}
    </div>
  </div>
);

const Work = () => (
  <section>
    {Object.entries(workData).map(([key, value]) => (
      <WorkSection
        key={key}
        title={key.charAt(0).toUpperCase() + key.slice(1)}
        items={value}
      />
    ))}
  </section>
);

const Nav = () => (
  <nav className="not-prose mb-12 md:mb-32">
    <div className="flex items-center justify-between">
      <Link href="/" className="flex items-end gap-2">
        <Image
          priority
          className="invert transition-all hover:opacity-70 dark:invert-0"
          src={logo}
          width={54}
          height={43.97}
          alt="bridger tower logo"
        />
        <p className="hidden md:block">Bridger Tower</p>
      </Link>
      <div className="flex items-center gap-4 text-base">
        <a
          className="text-muted-foreground transition-all hover:text-foreground"
          href="https://github.com/brijr"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <ModeToggle />
      </div>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="not-prose mb-12 mt-8 md:mt-24">
    <a
      href="https://x.com/bridgertower"
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm text-muted-foreground"
    >
      © Bridger Tower, 2024
    </a>
  </footer>
);
