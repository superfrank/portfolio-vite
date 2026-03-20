const VideoMedium = ({
  side = "left",
  mp4,
  webm,
  poster,
  mask = "phone",
  background = "brand",
  preload = "auto",
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
}) => {
  const isPhoneTopMask = mask === "phone-top";
  const isPhoneMask = mask === "phone" || isPhoneTopMask;
  const sideClassName =
    side === "right"
      ? "grid__3-4"
      : side === "middle"
        ? "grid__2-3"
        : "grid__1-2";
  const backgroundClassName =
    background === "brand"
      ? "image__background--brand"
      : background === "white"
        ? "image__background--white"
        : "";
  const containerClassName = isPhoneMask ? "image__container--phone" : "";
  const maskClassName =
    background === "brand"
      ? isPhoneTopMask
        ? "image__mask--brand-phone-top"
        : isPhoneMask
          ? "image__mask--brand-phone"
        : "image__mask--brand"
      : "";
  const videoClassName = isPhoneMask ? "image__floating--phone" : "";
  const flushClassName = isPhoneTopMask ? "image--phone-top" : "";

  return (
    <div
      className={`image ${sideClassName} image__background ${backgroundClassName} ${flushClassName}`}
    >
      <div className={`image__container ${containerClassName}`}>
        <div className={`image__mask ${maskClassName}`}>
          <video
            className={`image__floating video ${videoClassName}`}
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
  );
};

export default VideoMedium;
