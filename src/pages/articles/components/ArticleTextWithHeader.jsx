const ArticleTextWithHeader = ({
  heading,
  body,
  rowClassName = "",
  className = "",
  gridClass = "grid__1-3",
  headerGridClass = "grid__1-1",
  bodyGridClass = "grid__2-3",
}) => {
  const rowClasses = ["grid", "item", rowClassName].filter(Boolean).join(" ");
  const textClasses = ["text", gridClass, className].filter(Boolean).join(" ");
  const headerClasses = ["text__header", headerGridClass]
    .filter(Boolean)
    .join(" ");
  const bodyClasses = ["text__body", bodyGridClass].filter(Boolean).join(" ");

  return (
    <div className={rowClasses}>
      <div className={textClasses}>
        <h2 className={headerClasses}>{heading}</h2>
        <p className={bodyClasses}>{body}</p>
      </div>
    </div>
  );
};

export default ArticleTextWithHeader;
