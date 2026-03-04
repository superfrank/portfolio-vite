const ArticleText = ({
  body,
  rowClassName = "",
  className = "",
  gridClass = "grid__1-3",
  bodyGridClass = "grid__2-3",
}) => {
  const rowClasses = ["grid", "item", rowClassName].filter(Boolean).join(" ");
  const textClasses = ["text", gridClass, className].filter(Boolean).join(" ");
  const bodyClasses = ["text__body", bodyGridClass].filter(Boolean).join(" ");

  return (
    <div className={rowClasses}>
      <div className={textClasses}>
        <p className={bodyClasses}>{body}</p>
      </div>
    </div>
  );
};

export default ArticleText;
