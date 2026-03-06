const getGridClass = (position) => {
  if (position === "left") {
    return "grid__1-1";
  }

  if (position === "mid-left") {
    return "grid__2-2";
  }

  if (position === "mid-right") {
    return "grid__3-3";
  }

  if (position === "right") {
    return "grid__4-4";
  }

  return "grid__1-1";
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

const MediaSplitSmall = ({
  position = "left",
  align = "",
  type = "image",
  src,
  alt = "",
  mp4,
  webm,
  poster,
  className = "",
  mediaClassName = "",
  inline = true,
  preload = "auto",
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
}) => {
  const rootClasses = [
    "image",
    "image__mini",
    getGridClass(position),
    getAlignClass(align),
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const media =
    type === "video" ? (
      <video
        className={mediaClassName || "video"}
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
      <img className={mediaClassName || ""} src={src} alt={alt} />
    );

  return (
    <div className={rootClasses}>
      {inline ? <div className="image__inline">{media}</div> : media}
    </div>
  );
};

export default MediaSplitSmall;
