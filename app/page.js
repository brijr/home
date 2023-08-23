// Content Imports
import Products from "@/utils/products.json";
import Socials from "@/utils/socials.json";
import Works from "@/utils/works.json";
import Ventures from "@/utils/ventures.json";

// Component Imports
import Section from "@/components/Section";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="font-light text-focus-in transition-all lowercase scroll-smooth">
      <Hero />

      <Section>
        <div className="flex gap-2 items-baseline">
          <h3 className="text-xl opacity-75">{`// `}Ventures</h3>
          <p className="text-sm opacity-40">Past, Present, and Future Ventures.</p>
        </div>
        {Ventures.map((venture, index) => (
          <a
            key={index}
            href={venture.liveLink}
            className="md:flex transition-all md:gap-2 justify-between items-baseline py-2 border-b hover:opacity-50 border-b-gray-600"
          >
            <p className="mb-2 md:mb-0">{venture.title}</p>
            <p className="text-xs opacity-50 mb-2 md:mb-0">
              {venture.description}
            </p>
          </a>
        ))}
      </Section>

      <Section>
        <div className="flex gap-2 items-baseline">
          <h3 className="text-xl opacity-75">{`// `}Products</h3>
          <p className="text-sm opacity-40">
            Products I have helped design and develop
          </p>
        </div>
        {Products.map((product, index) => (
          <a
            key={index}
            href={product.liveLink}
            className="md:flex transition-all md:gap-2 justify-between items-baseline py-2 border-b hover:opacity-50 border-b-gray-600"
          >
            <p className="mb-2 md:mb-0" key={index}>
              {product.title}
            </p>
            <p className="text-xs opacity-50 mb-2 md:mb-0">
              {product.description}
            </p>
          </a>
        ))}
      </Section>

      <Section>
        <div className="flex gap-2 items-baseline">
          <h3 className="text-xl opacity-75">{`// `}Work</h3>
          <p className="text-sm opacity-40">
            The places I have had the privilege of working at.
          </p>
        </div>
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
