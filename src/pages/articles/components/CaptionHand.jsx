import MickeyHand from "../../../components/MickeyHand";

const CaptionHand = ({
  imageSrc,
  imageAlt = "",
  imageGridClass = "grid__2-3",
  captionGridClass = "grid__4-4",
  handMotion = "horizontal",
  title = "Extra touch",
  body,
}) => {
  const hasImage = Boolean(imageSrc);
  const isVerticalHandMotion = handMotion === "vertical";

  return (
    <div className={`grid item`}>
      {hasImage && (
        <div className={`image image__caption ${imageGridClass}`}>
          <div className="image__inline">
            <img className="image__two" src={imageSrc} alt={imageAlt} />
          </div>
        </div>
      )}

      <div
        className={`caption extra-touch__container ${isVerticalHandMotion ? "extra-touch__container--vertical" : ""} ${captionGridClass}`}
      >
        <MickeyHand
          className="svg__hand--desktop desktop"
          direction={isVerticalHandMotion ? "up" : "left"}
          flipX={!isVerticalHandMotion}
        />

        <div className="svg__hand__container--mobile">
          <MickeyHand className="svg__hand--mobile mobile" />
        </div>

        <p className="caption__header caption__header--hand">{title}</p>
        <p className="caption__body">{body}</p>
      </div>
    </div>
  );
};

export default CaptionHand;
