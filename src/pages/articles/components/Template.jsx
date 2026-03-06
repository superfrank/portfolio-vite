const Template = ({ className = "", children }) => {
  const classes = ["article", className].filter(Boolean).join(" ");

  return <main className={classes}>{children}</main>;
};

export default Template;
