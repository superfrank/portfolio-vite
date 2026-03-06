const Intro = ({ className = "", children }) => {
  const classes = ["introduction", "wrapper", className].filter(Boolean).join(" ");

  return (
    <section className={classes}>
      <div className="item grid">{children}</div>
    </section>
  );
};

export default Intro;
