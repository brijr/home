import bt from "@/lib/brijr";

export default function Page() {
  return (
    <main className="max-w-xl mx-auto ">
      <div className="grid gap-4">
        <h1 className="text-primary">Software</h1>
        <h2>Software I have helped design and develop</h2>
      </div>
      <div className="grid gap-2 mt-12">
        {bt.projects.map((project) => (
          <div className="md:flex justify-between" key={project.label}>
            <OutLink href={project.href}>{project.label}</OutLink>
            <p className="text-muted-foreground">{project.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

const OutLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      className="hover:text-foreground underline decoration-red-300 underline-offset-2 transition-all"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};
