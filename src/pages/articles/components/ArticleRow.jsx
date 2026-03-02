const ArticleRow = ({ className = "", children }) => {
  const classes = ["grid", "item", className].filter(Boolean).join(" ");

  return <div className={classes}>{children}</div>;
};

export default ArticleRow;
