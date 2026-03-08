import Logo from "../../../components/Logo";
import Template from "../components/Template";
import Intro from "../components/Intro";
import MickeyHand from "../../../components/MickeyHand";
import useIsMobile from "../../../hooks/useIsMobile";

const NoMowArticle = ({ article }) => {
  const { topper, intro } = article;

  const isMobile = useIsMobile();

  return (
    <Template className="article--nomow">
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
    </Template>
  );
};

export default NoMowArticle;
