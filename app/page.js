import Image from "next/image";
import Link from "next/link";
import Cap from "@/public/1.svg";

// Content Imports
import Projects from "@/lib/projects.json";
import Socials from "@/lib/socials.json";
import Works from "@/lib/works.json";

// Component Imports
import Section from "@/components/Section";

export default function Home() {
  return (
    <main className="font-light transition-all lowercase scroll-smooth">
      <Section>
        <Link href="/" className="mb-12 block">
          <Image
            src={Cap}
            alt="bridger tower key cap"
            width={75}
            className="dark:invert logo"
          />
        </Link>
        <h1 className="text-4xl text-black dark:text-white transition-all hover:text-purple-500 hover:cursor-not-allowed mb-12 normal-case">
          Bridger Tower
        </h1>
        <h2 className="intro-h2 text-xl">
          Designer and Developer from Salt Lake City, UT. Crafting software and
          websites using <a href="https://figma.com">Figma</a>,{" "}
          <a className="hover:opacity-50" href="https://nextjs.org">
            Next.js
          </a>
          , <a href="https://reactjs.org">React</a>,{" "}
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
        <h3 className="text-xl opacity-75">// Socials</h3>
        <div className="flex gap-2">
          {Socials.map((social, index) => (
            <a
              key={index}
              className="transition-all border-b border-black dark:border-white hover:pb-1 hover:-mt-1 hover:border-purple-500"
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
        <h3 className="text-xl opacity-75">// Projects</h3>
        {Projects.map((project, index) => (
          <a
            key={index}
            href={project.liveLink}
            className="md:flex transition-all md:gap-2 justify-between items-baseline py-2 border-b hover:opacity-50 border-b-gray-600"
          >
            <p className="mb-2 md:mb-0" key={index}>
              {project.title}
            </p>
            <p className="text-xs opacity-50 mb-2 md:mb-0">
              {project.description}
            </p>
          </a>
        ))}
      </Section>

      <Section>
        <h3 className="text-xl opacity-75">// Work</h3>
        {Works.map((work, index) => (
          <a
            key={index}
            href={work.liveLink}
            className="md:flex transition-all md:gap-2 justify-between items-baseline py-2 border-b hover:opacity-50 border-b-gray-600"
          >
            <p className="mb-2 md:mb-0" key={index}>
              {work.title}
            </p>
            <p className="text-xs opacity-50 mb-2 md:mb-0">
              {work.description}
            </p>
          </a>
        ))}
      </Section>

      {/* <Section>
        <h3 className="text-xl">Playground</h3>
        <p>Coming Soon...</p>
      </Section> */}

      {/* <Section>
        <h3 className="text-xl">Posts</h3>
        <p>Coming Soon...</p>
      </Section> */}

      <Section>
        <p className="text-sm">
          Send me an email at <em>bridger___at___9d8.dev</em>
        </p>
        <p className="text-sm">
          Created by{" "}
          <a className="hover:opacity-50" href="https://github.com/brijr">
            Bridger Tower
          </a>
          . All rights reserved.
        </p>
      </Section>
    </main>
  );
}
