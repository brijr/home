// Content Imports
import Projects from "@/lib/projects.json";
import Socials from "@/lib/socials.json";
import Works from "@/lib/works.json";

// Component Imports
import Section from "@/components/Section";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="font-light text-focus-in transition-all lowercase scroll-smooth">
      <Hero />

      <Section>
        <h3 className="text-xl opacity-75">{`// `}Socials</h3>
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
        <h3 className="text-xl opacity-75">{`// `}Projects</h3>
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
        <h3 className="text-xl opacity-75">{`// `}Work</h3>
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
          . Send me an email at <em>bridger___at___9d8.dev</em>
        </p>
        <p className="text-sm">
          . Created by{" "}
          <a className="hover:opacity-50" href="https://github.com/brijr">
            Bridger Tower
          </a>
          . All rights reserved.
        </p>
      </Section>
    </main>
  );
}
