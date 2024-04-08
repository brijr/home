import Image from "next/image";
import Link from "next/link";

import one from "@/public/one.svg";
import two from "@/public/two.svg";
import three from "@/public/three.svg";
import four from "@/public/four.svg";

const Logos = () => {
  return (
    <div className="grid mt-8 gap-4 not-prose grid-cols-2 md:grid-cols-4 h-20 items-center justify-center">
      <Link
        className="hover:opacity-60 transition-all invert dark:invert-0"
        href="https://9d8.dev"
      >
        <Image width={100} height={25} src={two} alt="logo" />
      </Link>
      <Link
        className="hover:opacity-60 transition-all invert dark:invert-0"
        href="https://alpinecodex.com"
      >
        <Image width={100} height={25} src={three} alt="logo" />
      </Link>
      <Link
        className="hover:opacity-60 transition-all invert dark:invert-0"
        href="https://zion.surf"
      >
        <Image width={100} height={25} src={one} alt="logo" />
      </Link>
      <Link
        className="hover:opacity-60 transition-all invert dark:invert-0"
        href="https://cameron.so"
      >
        <Image width={100} height={25} src={four} alt="logo" />
      </Link>
    </div>
  );
};

export default Logos;
