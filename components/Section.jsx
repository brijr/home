const Section = ({ children, className = "" }) => {
  return (
    <section
      className={`mb-24 flex max-w-screen-sm flex-col gap-4 ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
