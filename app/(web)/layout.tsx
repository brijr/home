import { ReactNode } from "react";

import { Main } from "@/components/craft";

export default function WebLayout({ children }: { children: ReactNode }) {
  return <Main className="fade-in-2 mx-auto max-w-xl">{children}</Main>;
}
