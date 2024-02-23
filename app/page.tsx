import { Main, Section, Container } from "@/components/craft";
import Image from "next/image";
import cap from "@/public/cap.svg";
import { ModeToggle } from "@/components/mode-toggle";
import { socials } from "@/lib/info";
import Balancer from "react-wrap-balancer";
import Link from "next/link";

export default function Home() {
  return (
    <Main>
      <Section className="border-b lowercase">
        <Container>
          <div className="flex justify-between">
            <Image
              className="!mt-0"
              src={cap}
              width={50}
              height={50}
              alt="a key cap with a b for bridger"
            ></Image>
            <div className="flex gap-2 h-fit">
              <Link href="/">posts</Link>
              <a href="https://components.bridger.to">components</a>
              <a href="https://design.bridger.to">design</a>
            </div>
          </div>
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
              I started my career as a multi-disciplinary designer before diving
              into software development. I have a passion for design and code
              and I aspire to enable others to learn.
            </p>
            <p>
              thanks for visiting and feel free to reach out to me on any of the
              channels below.
            </p>
          </div>
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
    </Main>
  );
}
