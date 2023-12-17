import Image from "next/image";
import Section from "@/components/Section";
import bg from "@/public/bg.jpg";

export default function Hero() {
  return (
    <Section className="text-[#222] overflow-hidden">
      <Image
        className="w-screen -z-50 absolute top-0 right-0 left-0"
        src={bg}
        placeholder="blur"
        alt="background for bridger.to"
      ></Image>
      <h1 className="sr-only">Bridger Tower | Designer and Developer</h1>
      <p className="group flex h-36 text-4xl lowercase text-black transition-all md:h-80 md:w-screen md:text-7xl">
        <span className="inline group-hover:hidden">Bridger Tower</span>{" "}
        <span className="hidden group-hover:inline">bridger.to</span>
        <span className=" block md:inline">
          <Image
            className="spin w-8 md:ml-2 md:w-10 invert"
            width={50}
            height={50}
            src="/x.svg"
            alt="a little x thing"
          />
        </span>
      </p>
      <div className="w-1/2">
        <h2 className="text-xl">
          Designer, Developer, and Marketer from Salt Lake City, UT. Crafting
          software and websites. Using Next.js, Figma, Tailwind CSS, Typscript,
          Webflow, Wordpress, Framer, Laravel, and more.
        </h2>
        <h3 className="sr-only">
          As a creative technologist, I combine my passion for design and code
          to create{" "}
          <a
            className="border-b border-purple-500"
            href="https://design.bridger.to"
          >
            timeless brands
          </a>
          , comprehensive design systems,{" "}
          <a
            className="border-b border-purple-500"
            href="https://product.bridger.to"
          >
            impactful digital products
          </a>
          , and captivating websites.
        </h3>
      </div>
    </Section>
  );
}
