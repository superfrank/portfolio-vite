const VideoMedium = ({
  side = "left",
  mp4,
  webm,
  poster,
  className = "",
  background = "brand",
  framed = true,
  device = "phone",
  align = "",
  preload = "auto",
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
}) => {
  const gridClass = side === "right" ? "grid__3-4" : "grid__1-2";
  const backgroundClass =
    background === "brand"
      ? "image__background image__background--brand"
      : background === "white"
        ? "image__background image__background--white"
        : background === "default"
          ? "image__background"
          : "";
  const alignClass =
    align === "end" ? "align-end" : align === "start" ? "align-start" : "";
  const floatingClass = framed
    ? device === "phone"
      ? "image__floating image__floating--phone"
      : "image__floating"
    : "";
  const maskClass = !framed
    ? ""
    : background === "brand"
      ? device === "phone"
        ? "image__mask--brand-phone"
        : "image__mask--brand"
      : background === "default"
        ? "image__mask"
        : "";
  const containerClass = !framed
    ? ""
    : device === "phone"
      ? "image__container image__container--phone"
      : "image__container";

  const rootClasses = [
    "image",
    gridClass,
    className,
    backgroundClass,
    alignClass,
  ]
    .filter(Boolean)
    .join(" ");

  const videoClass = [floatingClass, "video"]
    .filter(Boolean)
    .join(" ");

  const video = (
    <video
      className={videoClass}
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
  );

  const withMask = maskClass ? <div className={maskClass}>{video}</div> : video;

  const withContainer = containerClass ? (
    <div className={containerClass}>{withMask}</div>
  ) : (
    withMask
  );

  return <div className={rootClasses}>{withContainer}</div>;
};

export default VideoMedium;
