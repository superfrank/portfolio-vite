const getGridClass = (side) => {
  if (side === "right") {
    return "grid__3-4";
  }

  return "grid__1-2";
};

const getBackgroundClasses = (background) => {
  if (background === "brand") {
    return "image__background image__background--brand";
  }

  if (background === "white") {
    return "image__background image__background--white";
  }

  if (background === "default") {
    return "image__background";
  }

  return "";
};

const getAlignClass = (align) => {
  if (align === "end") {
    return "align-end";
  }

  if (align === "start") {
    return "align-start";
  }

  return "";
};

const getMaskClass = ({ background, framed, device }) => {
  if (!framed) {
    return "";
  }

  if (background === "brand") {
    return device === "mobile" ? "image__mask--brand--mobile" : "image__mask--brand";
  }

  if (background === "default") {
    return "image__mask";
  }

  return "";
};

const getContainerClass = ({ framed, device }) => {
  if (!framed) {
    return "";
  }

  return device === "mobile"
    ? "image__container image__container__mobile"
    : "image__container";
};

const getMediumClass = ({ type, framed, device }) => {
  if (!framed) {
    return type === "video" ? "video" : "";
  }

  const floatingClass =
    device === "mobile"
      ? "image__floating image__floating__mobile"
      : "image__floating";

  return type === "video" ? `${floatingClass} video` : floatingClass;
};

const ArticleMediaSplitMedium = ({
  side = "left",
  type = "image",
  src,
  alt = "",
  mp4,
  webm,
  poster,
  className = "",
  background = "brand",
  framed = true,
  device = "mobile",
  align = "",
  preload = "auto",
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
}) => {
  const rootClasses = [
    "image",
    getGridClass(side),
    className,
    getBackgroundClasses(background),
    getAlignClass(align),
  ]
    .filter(Boolean)
    .join(" ");

  const mediumClass = getMediumClass({ type, framed, device });

  const medium =
    type === "video" ? (
      <video
        className={mediumClass}
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
    ) : (
      <img className={mediumClass} src={src} alt={alt} />
    );

  const maskClass = getMaskClass({ background, framed, device });
  const withMask = maskClass ? <div className={maskClass}>{medium}</div> : medium;
  const containerClass = getContainerClass({ framed, device });
  const withContainer = containerClass ? (
    <div className={containerClass}>{withMask}</div>
  ) : (
    withMask
  );

  return <div className={rootClasses}>{withContainer}</div>;
};

export default ArticleMediaSplitMedium;
