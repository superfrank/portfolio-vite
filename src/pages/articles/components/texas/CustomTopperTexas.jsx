import topperFrameOneDesktop from "../../../../assets/articles/texas/topper/desktop/topper-frame-1.png";
import topperFrameTwoDesktop from "../../../../assets/articles/texas/topper/desktop/topper-frame-2.png";
import topperFrameThreeDesktop from "../../../../assets/articles/texas/topper/desktop/topper-frame-3.png";
import topperFrameFourDesktop from "../../../../assets/articles/texas/topper/desktop/topper-frame-4.png";
import topperFrameOneMobile from "../../../../assets/articles/texas/topper/mobile/topper-frame-1.png";
import topperFrameTwoMobile from "../../../../assets/articles/texas/topper/mobile/topper-frame-2.png";
import topperFrameThreeMobile from "../../../../assets/articles/texas/topper/mobile/topper-frame-3.png";
import topperFrameFourMobile from "../../../../assets/articles/texas/topper/mobile/topper-frame-4.png";
import topperFrameEight from "../../../../assets/articles/texas/topper/topper-frame-8.gif";
import topperFrameNine from "../../../../assets/articles/texas/topper/topper-frame-9.gif";

const CustomTopperTexas = ({ alt }) => {
  return (
    <div className="texas-topper wrapper">
      <div className="texas-topper__container">
        <div className="texas-topper__frame-container">
          <img
            className="texas-topper__overlay texas-topper__overlay--nine"
            src={topperFrameNine}
            alt=""
            aria-hidden="true"
          />
          <img
            className="texas-topper__overlay texas-topper__overlay--eight"
            src={topperFrameEight}
            alt=""
            aria-hidden="true"
          />

          <img
            className="texas-topper__frame texas-topper__frame--four mobile"
            src={topperFrameFourMobile}
            alt=""
            aria-hidden="true"
          />
          <img
            className="texas-topper__frame texas-topper__frame--four desktop"
            src={topperFrameFourDesktop}
            alt=""
            aria-hidden="true"
          />

          <img
            className="texas-topper__frame texas-topper__frame--three mobile"
            src={topperFrameThreeMobile}
            alt=""
            aria-hidden="true"
          />
          <img
            className="texas-topper__frame texas-topper__frame--three desktop"
            src={topperFrameThreeDesktop}
            alt=""
            aria-hidden="true"
          />

          <img
            className="texas-topper__frame texas-topper__frame--two mobile"
            src={topperFrameTwoMobile}
            alt=""
            aria-hidden="true"
          />
          <img
            className="texas-topper__frame texas-topper__frame--two desktop"
            src={topperFrameTwoDesktop}
            alt=""
            aria-hidden="true"
          />

          <img
            className="texas-topper__frame texas-topper__frame--one mobile"
            src={topperFrameOneMobile}
            alt={alt}
          />
          <img
            className="texas-topper__frame texas-topper__frame--one desktop"
            src={topperFrameOneDesktop}
            alt={alt}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomTopperTexas;
