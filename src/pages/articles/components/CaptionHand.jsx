import MickeyHand from "../../../components/MickeyHand";

const CaptionHand = ({
  imageSrc,
  imageAlt,
  title = "Extra touch",
  body,
  rowClassName = "",
}) => {
  const rowClasses = ["grid", "item", rowClassName].filter(Boolean).join(" ");

  return (
    <div className={rowClasses}>
      <div className="image image__caption grid__2-3">
        <div className="image__inline">
          <img className="image__two" src={imageSrc} alt={imageAlt} />
        </div>
      </div>

      <div className="caption extra-touch__container grid__4-4">
        <MickeyHand
          className="svg__hand--desktop desktop"
          direction="left"
          flipX
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
