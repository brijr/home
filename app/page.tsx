import { Main, Section, Container } from "@/components/craft";
import Image from "next/image";
import cap from "@/public/cap.svg";
import { ModeToggle } from "@/components/mode-toggle";
import bt from "@/lib/brijr";
import Balancer from "react-wrap-balancer";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Intro />
      <ModeToggle />
    </main>
  );
}

const Intro = () => {
  return (
    <section className="max-w-2xl lg:text-lg mx-auto my-12 lg:my-24">
      <div className="container grid gap-6">
        <Image
          className="mb-24 dark:invert"
          src={cap}
          width={54}
          height={54}
          alt="a key cap with a b for bridger"
        ></Image>

        {/* Hero text */}
        <h1>Bridger Tower is a Designer and Developer</h1>
        <Paragraph>
          I am a designer and developer from Salt Lake City, UT. I work as a
          design engineer at
          <OutLink href="https://ampry.com"> Ampry</OutLink>. I am currently
          building{" "}
          <OutLink href="https://alpinecodex.com">Alpine Codex</OutLink> and{" "}
          <OutLink href="https://9d8.dev">9d8</OutLink> to deliver next-gen
          performance marketing software.
        </Paragraph>
        <Paragraph>
          I belong to the intersection of design, code, and marketing. After
          studying marketing in university, I started my career as a marketing
          designer before diving into software design and development.
        </Paragraph>
        <Paragraph>
          thanks for visiting and feel free to reach out to me. Always looking
          to collaborate and learn from others.
        </Paragraph>

        {/* Social Links */}
        <div className="flex flex-wrap gap-2">
          Socials:
          {bt.socials.map((social) => (
            <Paragraph key={social.label}>
              <OutLink href={social.href}>{social.label}</OutLink> \
            </Paragraph>
          ))}
        </div>
      </div>
    </section>
  );
};

const OutLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      className="hover:text-foreground transition-all underline underline-offset-2 decoration-purple-400"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

const Paragraph = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-muted-foreground">{children}</p>;
};
