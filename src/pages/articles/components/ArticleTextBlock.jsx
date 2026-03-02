const ArticleTextBlock = ({ className = "", children }) => {
  const classes = ["text", className].filter(Boolean).join(" ");

  return <div className={classes}>{children}</div>;
};

export default ArticleTextBlock;
