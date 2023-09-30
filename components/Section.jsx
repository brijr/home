const Section = ({ children, className = "" }) => {
  return (
    <section className={`mb-24 max-w-screen-sm flex flex-col gap-4 ${className}`}>
      {children}
    </section>
  );
};

export default Section;
