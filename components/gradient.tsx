"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Gradient = () => {
  const gradientStyle = {
    backgroundImage:
      "linear-gradient(0deg, #8d4439, #d37c3f, #dcb572, #d0cea4, #c4d8c3)",
  };

  return (
    <motion.div
      // @ts-ignore
      className={cn(
        "relative w-full h-[100vw] sm:h-48 lg:h-screen",
        "before:content-[''] before:absolute before:inset-0",
        "before:bg-radial-gradient before:from-white/20 before:to-transparent before:to-70%",
        "before:mix-blend-overlay",
        "after:content-[''] after:absolute after:inset-0",
        "after:bg-[url('data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)'/%3E%3C/svg%3E')]",
        "after:opacity-5 after:mix-blend-soft-light after:pointer-events-none"
      )}
      animate={{
        backgroundImage: [
          "linear-gradient(30deg, #8d4439, #d37c3f, #dcb572, #d0cea4, #c4d8c3)",
          "linear-gradient(0deg, #8d4439, #d37c3f, #dcb572, #d0cea4, #c4d8c3)",
          "linear-gradient(-30deg, #8d4439, #d37c3f, #dcb572, #d0cea4, #c4d8c3)",
          "linear-gradient(0deg, #8d4439, #d37c3f, #dcb572, #d0cea4, #c4d8c3)",
          "linear-gradient(30deg, #8d4439, #d37c3f, #dcb572, #d0cea4, #c4d8c3)",
        ],
      }}
      transition={{
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      }}
      style={gradientStyle}
    />
  );
};
