const VideoLarge = ({
  mp4,
  webm,
  poster,
  background = "default",
  mask = "default",
  preload = "auto",
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
}) => {
  const backgroundClassName =
    background === "brand"
      ? "image__background--brand"
      : background === "white"
        ? "image__background--white"
        : background === "none"
          ? "image__background--none"
          : "";
  const maskClassName =
    mask === "brand"
      ? "image__mask--brand"
      : mask === "brand-phone"
        ? "image__mask--brand-phone"
        : "";

  return (
    <div className={`grid item`}>
      <div
        className={`image grid__1-4 image__background ${backgroundClassName}`}
      >
        <div className={`image__container`}>
          <div className={`image__mask ${maskClassName}`}>
            <video
              className={`image__floating video`}
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

export default VideoLarge;
