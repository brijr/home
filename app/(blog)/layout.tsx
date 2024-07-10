import { ReactNode } from "react";

import { Article } from "@/components/craft";

export default function Bloglayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <Article className="fade-in-2 mx-auto max-w-xl">{children}</Article>
    </main>
  );
}
