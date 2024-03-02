import { Main, Section, Container } from "@/components/craft";
import Image from "next/image";
import cap from "@/public/cap.svg";
import { ModeToggle } from "@/components/mode-toggle";
import { socials } from "@/lib/info";
import Balancer from "react-wrap-balancer";
import Link from "next/link";

const nav_links = [
  { href: "/posts", label: "posts" },
  { href: "https://read.cv/brijr", label: "resume" },
  { href: "https://components.bridger.to", label: "components" },
  { href: "https://zion.surf", label: "zion" },
];

export default function Home() {
  return (
    <Main>
      <Hero />
    </Main>
  );
}

const Hero = () => {
  return (
    <Section className="border-b">
      <Container>
        <div className="flex justify-between">
          <Image
            className="!mt-0 dark:invert"
            src={cap}
            width={54}
            height={54}
            alt="a key cap with a b for bridger"
          ></Image>
          <div className="flex items-center not-prose gap-2 h-fit">
            {/* Navigation Links */}
            {nav_links.map((link) => (
              <Link
                key={link.href}
                className="hover:opacity-75 transition-all"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
            {/* Light/Dark mode toggle */}
            <ModeToggle />
          </div>
        </div>

        {/* Hero text */}
        <h1 className="text-xl">
          <strong>Bridger Tower</strong> is a Designer and Developer
        </h1>
        <div className="max-w-2xl">
          <p>
            I am a designer and developer from Salt Lake City, UT. I work at{" "}
            <a href="https://ampry.com">Ampry</a> as a software engineer. I am
            currently building{" "}
            <a href="https://alpinecodex.com">Alpine Codex</a> and{" "}
            <a href="https://9d8.dev">9d8</a> to deliver next-gen performance
            marketing software.
          </p>
          <p>
            I started my career as a graphic and web designer before diving into
            software design and development. I studied I have a passion for
            design and code and I aspire to enable others.
          </p>
          <p>
            thanks for visiting and feel free to reach out to me on any of the
            channels below.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-2">
          {socials.map((social) => (
            <p key={social.name}>
              <a href={social.href} target="_blank" rel="noopener noreferrer">
                {social.name}
              </a>{" "}
              \
            </p>
          ))}
        </div>
      </Container>
    </Section>
  );
};
