import "./globals.css";

import { ReactNode } from "react";
import { Layout } from "@/components/craft";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://bridger.to"),
  title: "Bridger Tower :: Designer and Developer",
  description:
    "Designer and Developer from Utah. Building software, websites, and brands.",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <Layout>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <AnalyticsProvider>
          <GradientProvider>{children}</GradientProvider>
        </AnalyticsProvider>
      </ThemeProvider>
    </Layout>
  );
}

const GradientProvider = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:h-screen overflow-hidden">
      <div className="md:overflow-y-scroll no-scrollbar">{children}</div>
      <div className="w-full h-[100vw] md:h-screen sunset-gradient" />
    </div>
  );
};

const AnalyticsProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <Analytics />
    </>
  );
};
