const Intro = ({ children }) => {
  return (
    <section className={`introduction wrapper`}>
      <div className="item grid">{children}</div>
    </section>
  );
};

export default Intro;
