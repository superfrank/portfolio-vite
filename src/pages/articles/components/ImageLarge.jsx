const ImageLarge = ({
  src,
  alt,
  background = "default",
  mask = "default",
  containerClassName = "",
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
        <div className={`image__container ${containerClassName}`}>
          <div className={`image__mask ${maskClassName}`}>
            <img src={src} alt={alt} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageLarge;
