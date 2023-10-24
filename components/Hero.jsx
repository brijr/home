import Image from "next/image";
import Section from "@/components/Section";

export default function Hero() {
  return (
    <Section className="">
      <h1 className="sr-only">Bridger Tower | Designer and Developer</h1>
      <p className="text-6xl h-36 md:h-96 md:text-9xl flex md:w-screen lowercase text-black dark:text-white transition-all group">
        <span className="inline group-hover:hidden">Bridger Tower</span>{" "}
        <span className="hidden group-hover:inline">bridger.to</span>
        <span className=" block md:inline">
          <Image
            className="md:w-16 md:ml-2 w-8 spin"
            width={100}
            height={100}
            src="/x.svg"
            alt="a little x thing"
          />
        </span>
      </p>
      <h2 className="text-xl">
        Designer, Developer, and Marketer from Salt Lake City, UT. Crafting software and
        websites. Using Next.js, Figma, Tailwind CSS, Typscript, Webflow, Wordpress, Framer, Laravel, and
        more.
      </h2>
      <h3>
        As a creative technologist, I combine my passion for design and code to
        create <a className="border-b border-purple-500" href="https://design.bridger.to">timeless brands</a>, comprehensive design systems, <a className="border-b border-purple-500" href="https://product.bridger.to">impactful digital products</a>, and captivating websites.
      </h3>
    </Section>
  );
}
