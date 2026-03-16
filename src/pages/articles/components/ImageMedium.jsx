const ImageMedium = ({
  side = "left",
  src,
  alt = "",
  mask = "phone",
  background = "brand",
}) => {
  const isPhoneMask = mask === "phone";
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
        : "image__background--none";
  const containerClassName = isPhoneMask ? "image__container--phone" : "";
  const maskClassName =
    background === "brand"
      ? isPhoneMask
        ? "image__mask--brand-phone"
        : "image__mask--brand"
      : "";
  const imageClassName = isPhoneMask ? "image__floating--phone" : "";

  return (
    <div
      className={`image ${sideClassName} image__background ${backgroundClassName}`}
    >
      <div className={`image__container ${containerClassName}`}>
        <div className={`image__mask ${maskClassName}`}>
          <img
            className={`image__floating ${imageClassName}`}
            src={src}
            alt={alt}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageMedium;
