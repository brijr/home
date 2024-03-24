import "./globals.css";
import { Manrope as FontSans } from "next/font/google";
import { ReactNode } from "react";
import { Layout, Main } from "@/components/craft";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import Image from "next/image";
import cap from "@/public/cap.svg";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Bridger Tower :: Designer and Developer",
  description:
    "I am a designer and developer from Utah. I work as a design engineer at Ampry. I founded Zion Design and I am currently building Alpine Codex and 9d8 to deliver next-gen performance marketing software.",
};

interface RootLayoutProps {
  children: ReactNode;
}

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <Layout>
      <body
        className={cn(
          "bg-background m-6 font-sans text-lg antialiased no-scrollbar",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          <Main className="mx-auto max-w-xl">{children}</Main>
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </Layout>
  );
}

const Nav = () => {
  return (
    <nav className="mx-auto my-8 mb-24 max-w-xl md:my-24 md:mb-36">
      <div className="grid gap-6">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image
              className="transition-all hover:opacity-70 dark:invert"
              src={cap}
              width={54}
              height={44.45}
              alt="a key cap with a b for bridger"
            ></Image>
          </Link>
          <div className="flex text-base items-center gap-4">
            <a
              className="text-muted-foreground hover:text-foreground transition-all"
              href="https://github.com/brijr"
              target="_blank"
            >
              GitHub
            </a>
            <a
              className="text-muted-foreground hover:text-foreground transition-all"
              href="https://twitter.com/bridgertower"
              target="_blank"
            >
              Twitter
            </a>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="mx-auto mt-8 max-w-xl md:mt-24 mb-12">
      <p className="text-muted-foreground text-sm">© Bridger Tower, 2024</p>
    </footer>
  );
};
