import Image from 'next/image';
import Section from '@/components/Section';

export default function Hero() {
  return (
    <Section className=''>
      <h1 className='sr-only'>Bridger Tower | Designer and Developer</h1>
      <p className="text-6xl h-36 md:h-96 md:text-9xl flex max-w-screen md:w-screen lowercase text-black dark:text-white transition-all group">
        <span className='inline group-hover:hidden'>Bridger Tower</span> <span className='hidden group-hover:inline'>bridger.to</span><span className='motion-reduce:animate-spin block md:inline'><Image className='md:w-12 w-8' width={100} height={100} src="/x.svg" alt='' /></span>
      </p>
      <h2 className="text-xl">
        Designer and Developer from Salt Lake City, UT. Crafting software and websites.
      </h2>
      <h3>
        As a creative technologist, I combine my passions for design and code to create timeless
        brands, impactful digital products, and captivating websites.
      </h3>
    </Section>
  );
}
