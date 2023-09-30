// Content Imports
import Software from '@/utils/software.json';
import Socials from '@/utils/socials.json';
import Websites from '@/utils/websites.json'
import Ventures from '@/utils/ventures.json';
import Works from '@/utils/works.json';
import Me from '@/public/bridger.jpg'

// Component Imports
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="font-light lowercase scroll-smooth">
      <Hero />

      <Image className='mb-24 hidden md:block' src={Me} alt="pic of me" />

      {/* Ventures */}
      <Section>
        <div className="md:flex gap-2 items-baseline">
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
            <p className="text-xs opacity-50 mb-2 md:mb-0">{venture.description}</p>
          </a>
        ))}
      </Section>

      {/* Software */}
      <Section>
        <div className="md:flex gap-2 items-baseline">
          <h3 className="text-xl opacity-75">{`// `}Software</h3>
          <p className="text-sm opacity-40">Software I have helped design and develop</p>
        </div>
        {Software.map((software, index) => (
          <a
            key={index}
            href={software.liveLink}
            className="md:flex transition-all md:gap-2 justify-between items-baseline py-2 border-b hover:opacity-50 border-b-gray-600"
          >
            <p className="mb-2 md:mb-0" key={index}>
              {software.title}
            </p>
            <p className="text-xs opacity-50 mb-2 md:mb-0">{software.description}</p>
          </a>
        ))}
      </Section>

      {/* Websites */}
      <Section>
        <div className="md:flex gap-2 items-baseline">
          <h3 className="text-xl opacity-75">{`// `}Websites</h3>
          <p className="text-sm opacity-40">Websites that I have designed and developed.</p>
        </div>
        {Websites.map((website, index) => (
          <a
            key={index}
            href={website.liveLink}
            className="md:flex transition-all md:gap-2 justify-between items-baseline py-2 border-b hover:opacity-50 border-b-gray-600"
          >
            <p className="mb-2 md:mb-0" key={index}>
              {website.title}
            </p>
            <p className="text-xs opacity-50 mb-2 md:mb-0">{website.description}</p>
          </a>
        ))}
      </Section>

      {/* Work */}
      <Section>
        <div className="md:flex gap-2 items-baseline">
          <h3 className="text-xl opacity-75">{`// `}Work</h3>
          <p className="text-sm opacity-40">The places I have had the privilege of working at.</p>
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
            <p className="text-xs opacity-50 mb-2 md:mb-0">{work.description}</p>
          </a>
        ))}
      </Section>

      {/* Socials */}
      <Section>
        <h3 className="text-xl opacity-75">{`// `}Socials</h3>
        <div className="flex flex-wrap gap-2">
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
        <footer>
          <p className="text-sm">
            . Send me an email at <em>bridger___at___9d8.dev</em>
          </p>
          <p className="text-sm">
            . Created by{' '}
            <a className="hover:opacity-50" href="https://github.com/brijr">
              Bridger Tower
            </a>
            . All rights reserved.
          </p>
        </footer>
      </Section>
    </main>
  );
}
