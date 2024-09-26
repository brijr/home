import { ModeToggle } from "@/components/mode-toggle";
import { workData } from "@/lib/data";
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
  <section className="p-6">
    <div className="max-w-screen-md mx-auto grid gap-4">
      <h1 className="sr-only">Bridger Tower | Design Engineer</h1>
      <h2 className="font-bold text-4xl">
        Design Engineer building software, websites, and brands.
      </h2>
      <p>
        Passionate about the intersection of design, technology, and marketing.
      </p>
    </div>
  </section>
);

const WorkSection = ({
  title,
  items,
}: {
  title: string;
  items: WorkType[];
}) => (
  <section className="p-6">
    <div className="max-w-screen-md mx-auto grid gap-4">
      <h3 className="text-orange-500 dark:text-orange-300 opacity-0 text-sm group-hover:opacity-100 transition-all duration-500 text-right">
        {title}
      </h3>
      <div className="grid gap-2">
        {items.map((item) => (
          <Link
            href={item.href}
            key={item.href}
            target="_blank"
            className="group flex flex-col md:flex-row md:justify-between md:items-center p-3 md:p-1 rounded-lg md:rounded-none bg-accent/50 md:bg-transparent border md:border-b md:border-x-0 md:border-t-0 hover:border-orange-400 transition-all"
          >
            {item.name}
            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-all">
              {item.description}
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
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
  <nav className="p-6">
    <div className="max-w-screen-md mx-auto flex items-center justify-between gap-6 text-sm text-muted-foreground">
      <Link href="/" className="transition-all hover:opacity-80">
        <Image src={logo} alt="Bridger Tower Logo" width={32} height={26.05} />
      </Link>
      <h3>bridger tower :: design engineer</h3>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="p-6">
    <div className="max-w-screen-md mx-auto flex items-center justify-between gap-6 text-sm text-muted-foreground">
      <div className="flex items-center gap-4">
        <ModeToggle />
        <a
          className="transition-all hover:text-foreground"
          href="https://github.com/brijr"
          target="_blank"
        >
          GitHub
        </a>
        <a
          className="transition-all hover:text-foreground"
          href="https://youtube.com/@bridgertower"
          target="_blank"
        >
          YouTube
        </a>
        <a
          className="transition-all hover:text-foreground"
          href="mailto:bridger@wip.ac"
          target="_blank"
        >
          Email
        </a>
      </div>
      <a href="https://x.com/bridgertower" target="_blank">
        © Bridger Tower, 2024
      </a>
    </div>
  </footer>
);
