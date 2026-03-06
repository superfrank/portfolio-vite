const ImageSmall = ({ position = "left", align = "", src, alt = "" }) => {
  const positionClassName =
    position === "mid-left"
      ? "grid__2-2"
      : position === "mid-right"
        ? "grid__3-3"
        : position === "right"
          ? "grid__4-4"
          : "grid__1-1";
  const alignClassName =
    align === "end" ? "align-end" : align === "start" ? "align-start" : "";

  const image = <img src={src} alt={alt} />;

  return (
    <div className={`image image__mini ${positionClassName} ${alignClassName}`}>
      <div className="image__inline">{image}</div>
    </div>
  );
};

export default ImageSmall;
