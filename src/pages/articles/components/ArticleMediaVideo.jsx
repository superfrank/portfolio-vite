const getBackgroundClasses = (background) => {
  if (background === "brand") {
    return "image__background image__background--brand";
  }

  if (background === "white") {
    return "image__background image__background--white";
  }

  if (background === "none") {
    return "";
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

const ArticleMediaVideo = ({
  mp4,
  webm,
  poster,
  rowClassName = "",
  className = "",
  gridClass = "grid__1-4",
  background = "default",
  mask = "default",
  containerClassName = "image__container",
  videoClassName = "image__floating video",
  preload = "auto",
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
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

  return (
    <div className={rowClasses}>
      <div className={mediaClasses}>
        <div className={containerClassName}>
          <div className={getMaskClass(mask)}>
            <video
              className={videoClassName}
              preload={preload}
              playsInline={playsInline}
              autoPlay={autoPlay}
              loop={loop}
              muted={muted}
              poster={poster}
            >
              {mp4 && <source src={mp4} type="video/mp4" />}
              {webm && <source src={webm} type="video/webm" />}
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleMediaVideo;
