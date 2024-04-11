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
    className="text-muted-foreground transition-all hover:text-accent-foreground flex not-prose justify-between w-full items-center py-2 border-b rounded-md md:border-none md:bg-transparent md:p-0"
  >
    <p className="font-normal not-prose">{name}</p>
    {year && (
      <div className="md:block hidden flex-grow mx-4 border-b border-accent" />
    )}
    {year && <p className="not-prose opacity-50 md:opacity-100">{year}</p>}
  </Link>
);
