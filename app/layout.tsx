import "./globals.css";

import { ReactNode } from "react";
import { Layout } from "@/components/craft";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { Gradient } from "@/components/gradient";
import { Manrope as Font } from "next/font/google";

import type { Metadata } from "next";

const font = Font({
  subsets: ["latin"],
  variable: "--font-manrope",
});

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
      <body className={font.className}>
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
      </body>
    </Layout>
  );
}

const GradientProvider = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-[3fr_2fr] xl:grid-cols-2 lg:h-screen overflow-hidden">
      <div className="lg:overflow-y-scroll no-scrollbar">{children}</div>
      <Gradient />
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
