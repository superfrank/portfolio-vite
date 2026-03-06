const getBackgroundClasses = (background) => {
  if (background === "brand") {
    return "image__background image__background--brand";
  }

  if (background === "white") {
    return "image__background image__background--white";
  }

  if (background === "none") {
    return "image__background image__background--none";
  }

  return "image__background";
};

const getMaskClass = (mask) => {
  if (mask === "brand") {
    return "image__mask--brand";
  }

  if (mask === "brand-mobile") {
    return "image__mask--brand--mobile";
  }

  return "image__mask";
};

const MediaImage = ({
  src,
  alt,
  rowClassName = "",
  className = "",
  gridClass = "grid__1-4",
  background = "default",
  mask = "default",
  containerClassName = "image__container",
  imageClassName = "",
}) => {
  const rowClasses = ["grid", "item", rowClassName].filter(Boolean).join(" ");
  const mediaClasses = [
    "image",
    gridClass,
    getBackgroundClasses(background),
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const imageClasses = [imageClassName].filter(Boolean).join(" ");

  return (
    <div className={rowClasses}>
      <div className={mediaClasses}>
        <div className={containerClassName}>
          <div className={getMaskClass(mask)}>
            <img src={src} alt={alt} className={imageClasses} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaImage;
