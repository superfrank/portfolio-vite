const Template = ({ className = "", children }) => {
  const classes = ["article", className].filter(Boolean).join(" ");

  return (
    <main id="top" className={classes}>
      {children}
    </main>
  );
};

export default Template;
