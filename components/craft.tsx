import * as React from "react";
import { Manrope as FontSans } from "next/font/google";

// cn util
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Layout Component
type LayoutProps = {
  children: React.ReactNode;
  className?: string;
};

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

const Layout = ({ children, className }: LayoutProps) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "no-scrollbar scroll-smooth antialiased focus:scroll-auto",
        className
      )}
    >
      <body
        className={cn(
          fontSans.variable,
          "font-sans antialiased scroll-smooth",
          "selection:bg-amber-500/20 selection:text-amber-900",
          "dark:selection:bg-amber-500/30 dark:selection:text-amber-100"
        )}
      >
        {children}
      </body>
    </html>
  );
};

// Main Component
type MainProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const Main = ({ children, className, id }: MainProps) => {
  return (
    <main
      className={cn(
        // `Main` Specific Styles
        "max-w-none",
        // General Prose
        "prose prose-neutral prose:font-sans dark:prose-invert xl:prose-lg",
        // Prose Headings
        "prose-headings:mb-2 prose-headings:mt-8 prose-headings:text-lg prose-headings:font-semibold prose-headings:text-primary prose-h1:mt-0 prose-h1:text-foreground prose-h2:mt-0 prose-h2:text-foreground sm:prose-headings:mt-12 sm:prose-h1:mt-0 sm:prose-h2:mt-0",
        // Prose Strong
        "prose-strong:font-semibold",
        // Inline Links
        "prose-a:underline prose-a:decoration-primary/50 prose-a:underline-offset-2 prose-a:text-foreground/75 prose-a:transition-all",
        // Inline Link Hover
        "hover:prose-a:decoration-primary hover:prose-a:text-foreground",
        // Blockquotes
        "prose-blockquote:not-italic",
        // Pre and Code Blocks
        "prose-pre:border prose-pre:bg-muted/25 prose-pre:text-foreground",
        "pb-12 sm:pb-24",
        className
      )}
      id={id}
    >
      {children}
    </main>
  );
};

// Section Component
type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const Section = ({ children, className, id }: SectionProps) => {
  return (
    <section className={cn("py-8 md:py-12", className)} id={id}>
      {children}
    </section>
  );
};

// Container Component
type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const Container = ({ children, className, id }: ContainerProps) => {
  return (
    <div className={cn("mx-auto max-w-5xl", "p-6 sm:p-8", className)} id={id}>
      {children}
    </div>
  );
};

// Article Component
type ArticleProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const Article = ({ children, className, id }: ArticleProps) => {
  return (
    <article
      className={cn(
        // General Prose
        "prose:font-sans prose prose-neutral dark:prose-invert xl:prose-lg",
        // Prose Headings
        "prose-headings:mb-2 prose-headings:mt-8 prose-headings:text-lg prose-headings:font-semibold prose-headings:text-primary prose-h1:mt-0 prose-h1:text-foreground prose-h2:mt-0 prose-h2:text-foreground sm:prose-headings:mt-12 sm:prose-h1:mt-0 sm:prose-h2:mt-0",
        // Inline Links
        "prose-a:text-primary prose-a:underline prose-a:decoration-primary prose-a:underline-offset-2 prose-a:transition-all hover:prose-a:underline-offset-4 hover:prose-a:opacity-80",
        "prose-pre:border prose-pre:bg-muted/25 prose-pre:text-foreground",
        // Blockquotes
        "prose-blockquote:not-italic",
        className
      )}
      id={id}
    >
      {children}
    </article>
  );
};

export { Layout, Main, Section, Container, Article };
