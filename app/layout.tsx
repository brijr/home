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
          "bg-background font-sans antialiased m-6",
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
          {children}
        </ThemeProvider>
      </body>
    </Layout>
  );
}

const Nav = () => {
  return (
    <nav className="mb-12 mt-6 lg:my-24 max-w-xl mx-auto">
      <div className="grid gap-6">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              className="dark:invert transition-all hover:opacity-70"
              src={cap}
              width={54}
              height={54}
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
