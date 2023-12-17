import Image from "next/image";
import Section from "@/components/Section";
import bg from "@/public/bg.jpg";

export default function Hero() {
  return (
    <Section className="">
      <h1 className="sr-only">Bridger Tower | Designer and Developer</h1>
      <p className="group flex h-36 text-6xl lowercase text-black transition-all dark:text-white md:h-96 md:w-screen md:text-9xl">
        <span className="inline group-hover:hidden">Bridger Tower</span>{" "}
        <span className="hidden group-hover:inline">bridger.to</span>
        <span className=" block md:inline">
          <Image
            className="spin w-8 md:ml-2 md:w-16"
            width={100}
            height={100}
            src="/x.svg"
            alt="a little x thing"
          />
        </span>
      </p>
      <h2 className="text-xl">
        Designer, Developer, and Marketer from Salt Lake City, UT. Crafting
        software and websites.
      </h2>
      <h3>
        As a creative technologist, I combine my passion for design and code to
        create{" "}
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
    </Section>
  );
}
