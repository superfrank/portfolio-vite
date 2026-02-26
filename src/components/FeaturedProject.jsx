import FeaturedBadge from "./FeaturedBadge";
import MickeyHand from "./MickeyHand";

const FeaturedProject = ({
  mediaType = "image",
  mediaSrc = "",
  mediaPoster = "",
  mediaAlt = "Featured project preview",
}) => {
  const hasMedia = Boolean(mediaSrc);

  return (
    <section className="featured-project wrapper">
      <div className="featured-project__media-wrap">
        <div className="featured-project__media-group">
          <div className="featured-project__media">
            <a href="https://wapo.st/4tq6tGr">
              {hasMedia && mediaType === "video" ? (
                <video
                  className="featured-project__media-asset"
                  preload="metadata"
                  playsInline
                  autoPlay
                  loop
                  muted
                  poster={mediaPoster || undefined}
                >
                  <source src={mediaSrc} type="video/mp4" />
                </video>
              ) : null}
              {hasMedia && mediaType === "image" ? (
                <img
                  className="featured-project__media-asset"
                  src={mediaSrc}
                  alt={mediaAlt}
                />
              ) : null}
              {!hasMedia ? (
                <div
                  className="featured-project__media-asset"
                  aria-label="Featured media placeholder"
                />
              ) : null}
            </a>
            <div className="featured-project__circle" aria-hidden="true">
              <FeaturedBadge />
            </div>
          </div>
        </div>

        <div className="featured-project__media-backdrop" />
      </div>
      <a href="https://wapo.st/4tq6tGr" className="featured-project__title">
        <MickeyHand
          className="featured-project__mickey-hand featured-project__mickey-hand--desktop"
          direction="right"
        />
        <MickeyHand
          className="featured-project__mickey-hand featured-project__mickey-hand--mobile"
          direction="up"
        />
        <div className="featured-project__divider" />
        <h3 className="featured-project__subheader featured-project__meta-line" />
        <div>
          <h2 className="featured-project__header">
            Why you should
            <br />
            let your grass grow
          </h2>
          <h3 className="featured-project__subheader featured-project__cta">
            View project <span>+</span>
          </h3>
        </div>
      </a>
    </section>
  );
};

export default FeaturedProject;
