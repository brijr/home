import "./globals.css";
import { Manrope as FontSans, Literata as FontSerif } from "next/font/google";
import { ReactNode } from "react";
import { Layout } from "@/components/craft";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.svg";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL("https://bridger.to"),
  title: "Bridger Tower :: Designer and Developer",
  description:
    "Designer and Developer from Utah. Building software, websites, and brands.",
};

interface RootLayoutProps {
  children: ReactNode;
}

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });
const fontSerif = FontSerif({ subsets: ["latin"], variable: "--font-serif" });

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
          <GradientProvider>
            <Nav />
            {children}
            <Footer />
          </GradientProvider>
          <Analytics />
        </ThemeProvider>
      </body>
    </Layout>
  );
}

const Nav = () => (
  <nav className="mb-12 md:mb-32">
    <div className="flex items-center justify-between">
      <Link href="/" className="flex items-end gap-2">
        <Image
          priority
          className="invert transition-all hover:opacity-70 dark:invert-0"
          src={logo}
          width={54}
          height={43.97}
          alt="bridger tower logo"
        />
        <p className="hidden md:block">Bridger Tower</p>
      </Link>
      <div className="flex items-center gap-4 text-base">
        <a
          className="text-muted-foreground transition-all hover:text-foreground"
          href="https://github.com/brijr"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <ModeToggle />
      </div>
    </div>
  </nav>
);

const Footer = () => (
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

const GradientProvider = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:h-screen overflow-hidden">
      <div className="overflow-y-auto md:overflow-y-scroll no-scrollbar fade-in px-4 md:px-6">
        <div className="my-6 md:my-12 font-sans max-w-2xl mx-auto antialiased selection:bg-amber-500/20 selection:text-amber-900 dark:selection:bg-amber-500/30 dark:selection:text-amber-100">
          {children}
        </div>
      </div>
      <div className="w-full h-[100vw] hidden md:block md:h-screen sunset-gradient" />
    </div>
  );
};
