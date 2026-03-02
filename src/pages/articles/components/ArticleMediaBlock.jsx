const ArticleMediaBlock = ({ className = "", children }) => {
  const classes = ["image", className].filter(Boolean).join(" ");

  return <div className={classes}>{children}</div>;
};

export default ArticleMediaBlock;
