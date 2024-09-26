import "./globals.css";
import { Manrope as FontSans } from "next/font/google";
import { Literata as FontSerif } from "next/font/google";
import { ReactNode } from "react";

import { Layout } from "@/components/craft";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";

import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.svg";

export const metadata: Metadata = {
  metadataBase: new URL("https://bridger.to"),
  title: "Bridger Tower :: Designer and Developer",
  description:
    "Designer and Developer from Utah. Building software, websites, and brands.",
};

interface RootLayoutProps {
  children: ReactNode;
}

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontSerif = FontSerif({
  subsets: ["latin"],
  variable: "--font-serif",
});

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <Layout>
      <body className={cn(fontSans.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="md:grid flex flex-col-reverse md:grid-cols-2 md:h-screen overflow-hidden">
            <div
              className={cn(
                "overflow-y-scroll no-scrollbar",
                "fade-in",
                "px-6 md:px-2"
              )}
            >
              <div
                className={cn(
                  "my-6 sm:my-12 font-sans max-w-2xl mx-auto antialiased selection:bg-indigo-500 selection:text-indigo-100"
                )}
              >
                <Nav />
                {children}
                <Footer />
              </div>
            </div>
            <div className="md:w-full md:h-screen h-[100vw] hidden md:block sunset-gradient"></div>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </Layout>
  );
}

const Nav = () => {
  return (
    <nav className="mb-12 md:mb-32">
      <div className="grid gap-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-end gap-2">
            <Image
              priority
              className="invert transition-all hover:opacity-70 dark:invert-0"
              src={logo}
              width={54}
              height={43.97}
              alt="bridger tower logo"
            ></Image>
            <p className="hidden md:block">Bridger Tower</p>
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
    <footer className="fade-in-3 mb-12 mt-8 md:mt-24">
      <a
        href="https://x.com/bridgertower"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-muted-foreground"
      >
        © Bridger Tower, 2024
      </a>
    </footer>
  );
};
