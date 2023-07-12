import Image from "next/image";
import Link from "next/link";
import Cap from "@/public/1.svg";

// Content Imports
import Projects from "@/lib/projects.json";
import Socials from "@/lib/socials.json";

// Component Imports
import Section from "@/components/Section";

export default function Home() {
  return (
    <main className="font-light">
      <Section>
        <Link href="/" className="mb-12 block">
          <Image
            src={Cap}
            alt="bridger tower key cap"
            width={75}
            className="dark:invert"
          />
        </Link>
        <h1 className="text-3xl">Bridger Tower</h1>
        <h2>
          Designer and Developer from Salt Lake City, UT. Crafting software and
          websites using <a href="https://figma.com">Figma</a>,{" "}
          <a href="https://nextjs.org">Next.js</a>,{" "}
          <a href="https://reactjs.org">React</a>,{" "}
          <a href="https://kit.svelte.dev">SvelteKit</a>,{" "}
          <a href="https://webflow.com">Webflow</a>,{" "}
          <a href="https://framer.com">Framer</a>,{" "}
          <a href="https://tailwindcss.com">Tailwind</a>, and{" "}
          <a href="https://vercel.com">Vercel</a>.
        </h2>
        <h3>
          As a creative technologist, I combine my passions for design and code
          to create timeless brands, impactful digital products, and captivating
          websites.
        </h3>
      </Section>

      <Section>
        <h3 className="text-xl">Socials</h3>
        <div className="flex gap-2">
          {Socials.map((social, index) => (
            <a
              key={index}
              className="transition-all border-b border-black dark:border-white hover:pb-1 hover:-mt-1 hover:border-blue-500"
              href={social.url}
              target="_blank"
              rel="nopener noreferrer"
            >
              {social.name}
            </a>
          ))}
        </div>
      </Section>

      <Section>
        <h3 className="text-xl">Current Ventures</h3>
        {Projects.map((project, index) => (
          <a href={project.href} key={index} className="">
            <div className="md:w-48 flex items-baseline gap-2 mb-2 mt-4">
              <h4 className="text-lg">{project.title}</h4>
              <p className="text-sm opacity-75">{project.linkName}</p>
            </div>
            <div className="w-full flex gap-2">
              <p>&rarr;</p>
              <p>{project.description}</p>
            </div>
          </a>
        ))}
      </Section>

      <Section>
        <h3 className="text-xl">Playground</h3>
        <p>Coming Soon...</p>
      </Section>

      <Section>
        <h3 className="text-xl">Posts</h3>
        <p>Coming Soon...</p>
      </Section>

      <Section>
        <p>
          Send me an email<a href="mailto:bridgertower@gmail.com">here.</a>
        </p>
        <p>
          Created by
          <a
            className="transition-all border-b border-black dark:border-white hover:pb-1 hover:-mt-1 hover:border-blue-500"
            href="https://github.com/brijr"
          >
            Bridger Tower
          </a>
          .
        </p>
      </Section>
    </main>
  );
}
