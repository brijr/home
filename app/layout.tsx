import "./globals.css";
import { Manrope as FontSans } from "next/font/google";
import { ReactNode } from "react";
import { Layout, Main } from "@/components/craft";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.svg";
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
          "no-scrollbar m-6 bg-background font-sans text-lg antialiased selection:bg-indigo-500 selection:text-indigo-100",
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          <Main className="fade-in-2 mx-auto max-w-xl">{children}</Main>
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </Layout>
  );
}

const Nav = () => {
  return (
    <nav className="mx-auto my-8 mb-24 max-w-xl fade-in md:my-24 md:mb-36">
      <div className="grid gap-6">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image
              priority
              className="invert transition-all hover:opacity-70 dark:invert-0"
              src={logo}
              width={54}
              height={43.97}
              alt="bridger tower logo"
            ></Image>
          </Link>
          <div className="flex items-center gap-4 text-base">
            <a
              className="text-muted-foreground transition-all hover:text-foreground"
              href="https://github.com/brijr"
              target="_blank"
            >
              GitHub
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
    <footer className="fade-in-3 mx-auto mb-12 mt-8 max-w-xl md:mt-24">
      <a
        href="https://twitter.com/bridgertower"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-muted-foreground"
      >
        © Bridger Tower, 2024
      </a>
    </footer>
  );
};
