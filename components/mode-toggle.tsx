"use client";

import * as React from "react";
import { Lamp } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, useAnimation } from "framer-motion";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const controls = useAnimation();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    controls.start({
      rotate: [-8, 8, -8, 0],
      transition: { duration: 0.5 },
    });
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className="bg-accent/30"
      onClick={toggleTheme}
    >
      <motion.div animate={controls}>
        <Lamp className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
