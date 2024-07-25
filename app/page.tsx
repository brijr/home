import { Main } from "@/components/craft";
import { ExternalLink, Component, Monitor, PencilRuler } from "lucide-react";

import Link from "next/link";

type WorkType = {
  name: string;
  href: string;
  description?: string;
};

const workData: Record<string, WorkType[]> = {
  software: [
    {
      name: "WaveFinder",
      href: "https://wavefinder.io",
      description: "AI first Advertising Platform for FB and TikTok",
    },
    {
      name: "Outr",
      href: "https://outr.io",
      description: "Personalized cold outreach with AI",
    },
    {
      name: "Router.so",
      href: "https://router.so",
      description: "Open source form backend for developers",
    },
  ],
  "Open Source": [
    {
      name: "9d8/next-wp",
      href: "https://wp.9d8.dev",
      description: "Next.js WordPress starter",
    },
    {
      name: "brijr/components",
      href: "https://components.bridger.to",
      description: "Next.js / shadcn/ui components for websites",
    },
    {
      name: "brijr/craft",
      href: "https://bridger.to/craft",
      description: "React design system for websites",
    },
  ],
  ventures: [
    {
      name: "9d8",
      href: "https://9d8.dev",
      description: "Software Design and Development Studio",
    },
    {
      name: "Alpine Codex",
      href: "https://alpinecodex.com",
      description: "Marketing Software and Applied AI",
    },
    {
      name: "Studio Mojave",
      href: "https://studiomojave.com",
      description: "Design Studio in St George, Utah",
    },
    {
      name: "wip.ac",
      href: "https://wip.ac",
      description: "Web Design and Development Source",
    },
  ],
  socials: [
    {
      name: "Resume",
      href: "/resume",
      description: "See my resume",
    },
    {
      name: "X",
      href: "/x",
      description: "Follow me on X",
    },
    {
      name: "YouTube",
      href: "/youtube",
      description: "Watch my videos",
    },
    {
      name: "Github",
      href: "/github",
      description: "See my code",
    },
  ],
};

export default function Home() {
  return (
    <Main className="fade-in-3">
      <Hero />
      <Work />
    </Main>
  );
}

const Hero = () => (
  <section className="not-prose">
    <h1 className="sr-only">Bridger Tower | Design Engineer</h1>
    <h2 className="font-serif text-4xl">
      Design Engineer building software, websites, and brands. Passionate about
      the intersection of design and technology.
    </h2>
  </section>
);

const WorkSection = ({
  title,
  items,
}: {
  title: string;
  items: WorkType[];
}) => (
  <>
    <h3>{title}</h3>
    <div className="grid gap-2 not-prose">
      {items.map((item) => (
        <Link
          href={item.href}
          key={item.href}
          target="_blank"
          className="group flex flex-col md:flex-row md:justify-between md:items-center py-2 md:border-b p-3 rounded-lg md:rounded-none md:py-1 md:px-0 bg-accent/50 border md:border-x-0 md:border-t-0 md:bg-transparent hover:bg-accent/50 transition-all"
        >
          {item.name}
          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-all">
            {item.description}
          </span>
        </Link>
      ))}
    </div>
  </>
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
