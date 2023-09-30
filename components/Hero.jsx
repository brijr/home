import Image from 'next/image';
import Link from 'next/link';
import Cap from '@/public/cap.svg';
import Section from '@/components/Section';

export default function Hero() {
  return (
    <Section>
      <h1 className="text-9xl absolute top-0 left-0 text-black dark:text-white transition-all hover:text-purple-500 hover:cursor-not-allowed mb-12 normal-case">
        Bridger Tower
      </h1>
      <h2 className="intro-h2 text-xl">
        Designer and Developer from Salt Lake City, UT. Crafting software and websites using{' '}
        <a className="hover:opacity-50" href="https://figma.com">
          Figma
        </a>
        ,{' '}
        <a className="hover:opacity-50" href="https://nextjs.org">
          Next.js
        </a>
        ,{' '}
        <a className="hover:opacity-50" href="https://reactjs.org">
          React
        </a>
        ,{' '}
        <a className="hover:opacity-50" href="https://kit.svelte.dev">
          SvelteKit
        </a>
        ,{' '}
        <a className="hover:opacity-50" href="https://laravelphp.com">
          Laravel
        </a>
        ,{' '}
        <a className="hover:opacity-50" href="https://webflow.com">
          Webflow
        </a>
        ,{' '}
        <a className="hover:opacity-50" href="https://framer.com">
          Framer
        </a>
        ,{' '}
        <a className="hover:opacity-50" href="https://tailwindcss.com">
          Tailwind
        </a>
        , and{' '}
        <a className="hover:opacity-50" href="https://vercel.com">
          Vercel
        </a>
        .
      </h2>
      <h3>
        As a creative technologist, I combine my passions for design and code to create timeless
        brands, impactful digital products, and captivating websites.
      </h3>
    </Section>
  );
}
