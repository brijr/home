import { Main } from "@/components/craft";
import { ExternalLink } from "lucide-react";

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
      description: "Design and Development Studio",
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
    {
      name: "LinkedIn",
      href: "/linkedin",
      description: "Connect with me",
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
      I&apos;m a design engineer building software, websites, and brands.
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
          className="group flex justify-between items-center py- border-b hover:bg-accent/50 transition-all"
        >
          {item.name}
          <span className="text-sm flex gap-2 items-center text-muted-foreground group-hover:text-foreground transition-all">
            {item.description}
            <ExternalLink
              size={16}
              className="text-muted-foreground transition-all w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 duration-500"
            />
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
