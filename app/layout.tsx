import "./globals.css";
import { Manrope as FontSans } from "next/font/google";
import { ReactNode } from "react";
import { Layout } from "@/components/craft";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import cap from "@/public/cap.svg";
import type { Metadata } from "next";

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
          "bg-background m-6 font-sans antialiased",
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
          {children}
        </ThemeProvider>
      </body>
    </Layout>
  );
}

const Nav = () => {
  return (
    <nav className="mx-auto my-12 max-w-xl md:my-48">
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
          <div className="flex items-center">
            <Button className="px-2" asChild variant="link">
              <Link href="https://read.cv/brijr">Resume</Link>
            </Button>
            <Button className="px-2" asChild variant="link">
              <Link href="https://github.com/brijr">GitHub</Link>
            </Button>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};
