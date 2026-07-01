const SectionWrapper = ({ children }) => {
  return (
    <section className="py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;