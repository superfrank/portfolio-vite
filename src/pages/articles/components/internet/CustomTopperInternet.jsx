import shiftyEyesGif from "../../../../assets/articles/internet/shifty-eyes-slow.gif";
import hourglassGif from "../../../../assets/articles/internet/hourglass.gif";
import clippyGif from "../../../../assets/articles/internet/clippy.gif";
import ellipsisGif from "../../../../assets/articles/internet/ellipsis.gif";
import thumbsUpGif from "../../../../assets/articles/internet/thumbs-up.gif";
import globeFolderGif from "../../../../assets/articles/internet/globe-folder-slow.gif";
import loadingBarGif from "../../../../assets/articles/internet/loading-bar.gif";

const CustomTopperInternet = ({ mobileSrc, desktopSrc, alt }) => {
  return (
    <div className="internet-topper wrapper">
      <div className="internet-topper__container">
        <img
          className="internet-topper__image internet-topper__image--mobile"
          src={mobileSrc}
          alt={alt}
        />
        <img
          className="internet-topper__image internet-topper__image--desktop"
          src={desktopSrc}
          alt={alt}
        />

        <div
          className="internet-topper__gif-container"
          aria-label="An illustration of animated browser windows"
        >
          <img
            className="internet-topper__gif internet-topper__gif--one"
            src={shiftyEyesGif}
            alt=""
            aria-hidden="true"
          />
          <img
            className="internet-topper__gif internet-topper__gif--two"
            src={hourglassGif}
            alt=""
            aria-hidden="true"
          />
          <img
            className="internet-topper__gif internet-topper__gif--three"
            src={clippyGif}
            alt=""
            aria-hidden="true"
          />
          <img
            className="internet-topper__gif internet-topper__gif--four internet-topper__gif--desktop-only"
            src={ellipsisGif}
            alt=""
            aria-hidden="true"
          />
          <img
            className="internet-topper__gif internet-topper__gif--five internet-topper__gif--desktop-only"
            src={thumbsUpGif}
            alt=""
            aria-hidden="true"
          />
          <img
            className="internet-topper__gif internet-topper__gif--six internet-topper__gif--desktop-only"
            src={globeFolderGif}
            alt=""
            aria-hidden="true"
          />
          <img
            className="internet-topper__gif internet-topper__gif--seven internet-topper__gif--desktop-only"
            src={loadingBarGif}
            alt=""
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomTopperInternet;
