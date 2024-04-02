import Link from "next/link";

export const DateLink = ({
  name,
  href,
  year,
}: {
  name: string;
  href: string;
  year: string;
}) => (
  <Link
    href={href}
    className="text-muted-foreground transition-all hover:text-accent-foreground flex not-prose justify-between w-full items-center"
  >
    <p className="font-normal not-prose">{name}</p>
    {year && <div className="flex-grow mx-4 border-b border-accent" />}
    {year && <p className="not-prose">{year}</p>}
  </Link>
);
