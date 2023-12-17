// Content Imports
import Software from "@/config/projects.json";
import Socials from "@/config/socials.json";
import Websites from "@/config/websites.json";
import Ventures from "@/config/ventures.json";
import Works from "@/config/works.json";
import Me from "@/public/bridger.jpg";
import Pixel from "@/public/bt.png";

// Component Imports
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Image from "next/image";

export default function Home() {
  return (
    <main className="scroll-smooth font-light lowercase">
      <Hero />

      {/* Socials */}
      <Section className="pt-12">
        <h3 className="sr-only text-xl opacity-75">{`// `}Socials</h3>
        <div className="flex flex-wrap gap-2">
          {Socials.map((social, index) => (
            <a
              key={index}
              className="border-b border-black transition-all hover:-mt-1 hover:border-purple-500 hover:pb-1 dark:border-white"
              href={social.url}
              target="_blank"
              rel="nopener noreferrer"
            >
              {social.name}
            </a>
          ))}
        </div>
      </Section>

      {/* Software */}
      <Section>
        <div className="items-baseline gap-2 md:flex">
          <h3 className="text-xl opacity-75">{`// `}Projects & Software</h3>
          <p className="text-sm opacity-40">
            Current projects and software that I helped design and develop.
          </p>
        </div>
        {Software.map((software, index) => (
          <a
            key={index}
            href={software.liveLink}
            className="items-baseline justify-between border-b border-b-gray-600 py-2 transition-all hover:opacity-50 md:flex md:gap-2"
          >
            <p className="mb-2 md:mb-0" key={index}>
              {software.title}
            </p>
            <p className="mb-2 text-xs opacity-50 md:mb-0">
              {software.description}
            </p>
          </a>
        ))}
      </Section>

      {/* Websites */}
      <Section>
        <div className="items-baseline gap-2 md:flex">
          <h3 className="text-xl opacity-75">{`// `}Websites</h3>
          <p className="text-sm opacity-40">
            Websites that I have designed and developed.
          </p>
        </div>
        {Websites.map((website, index) => (
          <a
            key={index}
            href={website.liveLink}
            className="items-baseline justify-between border-b border-b-gray-600 py-2 transition-all hover:opacity-50 md:flex md:gap-2"
          >
            <p className="mb-2 md:mb-0" key={index}>
              {website.title}
            </p>
            <p className="mb-2 text-xs opacity-50 md:mb-0">
              {website.description}
            </p>
          </a>
        ))}
      </Section>

      {/* Work */}
      <Section>
        <div className="items-baseline gap-2 md:flex">
          <h3 className="text-xl opacity-75">{`// `}Work</h3>
          <p className="text-sm opacity-40">
            The places I have had the privilege of working at.
          </p>
        </div>
        {Works.map((work, index) => (
          <a
            key={index}
            href={work.liveLink}
            className="items-baseline justify-between border-b border-b-gray-600 py-2 transition-all hover:opacity-50 md:flex md:gap-2"
          >
            <p className="mb-2 md:mb-0" key={index}>
              {work.title}
            </p>
            <p className="mb-2 text-xs opacity-50 md:mb-0">
              {work.description}
            </p>
          </a>
        ))}
      </Section>

      {/* Ventures */}
      <Section>
        <div className="items-baseline gap-2 md:flex">
          <h3 className="text-xl opacity-75">{`// `}Ventures</h3>
          <p className="text-sm opacity-40">
            Past, Present, and Future Ventures.
          </p>
        </div>
        {Ventures.map((venture, index) => (
          <a
            key={index}
            href={venture.liveLink}
            className="items-baseline justify-between border-b border-b-gray-600 py-2 transition-all hover:opacity-50  md:flex md:gap-2"
          >
            <p className="mb-2 md:mb-0">{venture.title}</p>
            <p className="mb-2 text-xs opacity-50 md:mb-0">
              {venture.description}
            </p>
          </a>
        ))}
      </Section>

      {/* Footer */}
      <Section>
        <footer>
          <p className="text-sm">
            . Send me an email at <em>bridger___at___9d8.dev</em>
          </p>
          <p className="text-sm">
            . Created by{" "}
            <a
              className="border-b border-purple-500 hover:opacity-50"
              href="https://github.com/brijr/home"
            >
              Bridger Tower
            </a>
            . All rights reserved.
          </p>
          <Image src={Pixel} alt="pixel image of me" className="mt-8 w-24" />
        </footer>
      </Section>
    </main>
  );
}
