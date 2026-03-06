const VideoSmall = ({
  position = "left",
  align = "",
  mp4,
  webm,
  poster,
  preload = "auto",
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
}) => {
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

  return (
    <div className={`image image__mini ${positionClassName} ${alignClassName}`}>
      <div className="image__inline">
        <video
          className="video"
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
  );
};

export default VideoSmall;
