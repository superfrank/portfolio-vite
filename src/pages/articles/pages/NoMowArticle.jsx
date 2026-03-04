import Logo from "../../../components/Logo";
import ArticleTemplate from "../components/ArticleTemplate";
import ArticleIntro from "../components/ArticleIntro";
import arrowRight from "../../../assets/articles/internet/arrow-right.svg";

const NoMowArticle = ({ article }) => {
  const { topper, intro } = article;

  return (
    <ArticleTemplate className="article--nomow">
      <Logo href="/" context="article" theme={article.theme} />

      <div className="topper wrapper">
        <div className="topper-container">
          <img
            className="topper-image__mobile mobile"
            src={topper.mobileSrc}
            alt={topper.alt}
          />
          <img
            className="topper-image__desktop desktop"
            src={topper.desktopSrc}
            alt={topper.alt}
          />
        </div>
      </div>

      <ArticleIntro>
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
          <div className="inline-link">
            <a className="headline__link" href={intro.liveLink}>
              <span>
                <img className="svg__mickey--link" src={arrowRight} alt="" />
              </span>
              Live article
            </a>
          </div>
        </h1>

        <div className="information__link mobile">
          <a className="headline__link" href={intro.liveLink}>
            <span>
              <img className="svg__mickey--link" src={arrowRight} alt="" />
            </span>
            Live article
          </a>
        </div>

        {intro.standfirst.map((standfirst, index) => (
          <h3 className="standfirst grid__2-3" key={`standfirst-${index}`}>
            {standfirst}
          </h3>
        ))}
      </ArticleIntro>
    </ArticleTemplate>
  );
};

export default NoMowArticle;
