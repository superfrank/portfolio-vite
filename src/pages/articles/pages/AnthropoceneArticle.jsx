import Logo from "../../../components/Logo";
import Template from "../components/Template";
import Intro from "../components/Intro";
import CustomTopperTexas from "../components/texas/CustomTopperTexas";
import MickeyHand from "../../../components/MickeyHand";
import useIsMobile from "../../../hooks/useIsMobile";
import Text from "../components/Text";
import TextWithHeader from "../components/TextWithHeader";
import ImageLarge from "../components/ImageLarge";
import VideoLarge from "../components/VideoLarge";
import VideoStepsLarge from "../components/VideoStepsLarge";
import ImageStepsLarge from "../components/ImageStepsLarge";
import ImageMedium from "../components/ImageMedium";
import ImageSmall from "../components/ImageSmall";
import VideoSmall from "../components/VideoSmall";
import VideoMedium from "../components/VideoMedium";
import CaptionHand from "../components/CaptionHand";
import Data from "../components/Data";
import Quote from "../components/Quote";

// Assets
import anthroResearchImage from "../../../assets/articles/anthropocene/article/moodboard-1.jpg";

const AnthropoceneArticle = ({ article }) => {
  const { topper, intro } = article;

  const isMobile = useIsMobile();

  return (
    <Template className={`article--${article.theme}`}>
      <Logo href="/" context="article" theme={article.theme} />

      <div className="topper">
        <div className="topper-container">
          <video
            className="topper-image__mobile mobile"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-label={topper.alt}
          >
            <source src={topper.mobileSrc} type="video/mp4" />
          </video>
          <video
            className="topper-image__desktop desktop"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-label={topper.alt}
          >
            <source src={topper.desktopSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <Intro>
        <div className="information grid__1-4">
          {[0, 1].map((copyIndex) => (
            <div className="marquee-move" key={`meta-row-${copyIndex}`}>
              {intro.metaMarqueeRow.map((item) => (
                <div
                  className={`information__${item.key}`}
                  key={`${copyIndex}-${item.key}`}
                >
                  <div className="information__meta">{item.label}: </div>
                  <div className="information__data">{item.value}</div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <h1 className="headline grid__1-3">
          {intro.headline}

          {!isMobile && (
            <div className="inline-link">
              <a
                className="headline__link"
                href={intro.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <MickeyHand className="svg__mickey--link" direction="right" />
                </span>
                Live article
              </a>
            </div>
          )}
        </h1>

        {isMobile && (
          <div className="information__link mobile">
            <a
              className="headline__link"
              href={intro.liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <MickeyHand className="svg__mickey--link" direction="right" />
              </span>
              Live article
            </a>
          </div>
        )}

        {intro.standfirst.map((standfirst, index) => (
          <h3 className="standfirst grid__2-3" key={`standfirst-${index}`}>
            {standfirst}
          </h3>
        ))}
      </Intro>

      <section className="content wrapper">
        <Text
          paragraphs={[
            "I led the design for a four-part series that explored Earth’s past to help inform modern climate change. The challenge was to create a visual identity that unified the series while giving each piece its own creative space.",
            "As senior designer, I worked closely with graphics reporter Simon Ducroquet and designer Emily Wright, drawing inspiration from grid paper, underwater animation, old science books, 3D layering and wooden architectural models to bring the concept to life.",
          ]}
        />
        <ImageLarge
          src={anthroResearchImage}
          alt="Early visual references used during concept development"
          background="none"
        />
      </section>
    </Template>
  );
};

export default AnthropoceneArticle;
