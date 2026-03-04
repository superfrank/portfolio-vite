import Logo from "../../../components/Logo";
import ArticleTemplate from "../components/ArticleTemplate";
import ArticleIntro from "../components/ArticleIntro";
import ArticleText from "../components/ArticleText";
import ArticleTextWithHeader from "../components/ArticleTextWithHeader";
import ArticleMediaImage from "../components/ArticleMediaImage";
import ArticleMediaVideo from "../components/ArticleMediaVideo";
import MickeyHand from "../../../components/MickeyHand";
import useIsMobile from "../../../hooks/useIsMobile";
import internetResearchImage from "../../../assets/articles/internet/article/research.jpg";
import internetIndiaVideoMp4 from "../../../assets/articles/internet/media/internet-india.mp4";
import internetIndiaVideoWebm from "../../../assets/articles/internet/media/internet-india.webm";
import internetIndiaPoster from "../../../assets/articles/internet/media/poster-internet-india.png";

const InternetArticle = ({ article }) => {
  const { topper, intro } = article;

  const isMobile = useIsMobile();

  return (
    <ArticleTemplate className="article--internet">
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
                <div className={`information__${item.key}`} key={item.key}>
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
      </ArticleIntro>

      <section className="content wrapper">
        <ArticleMediaImage
          src={internetResearchImage}
          alt="A collection of technology research and sketches"
        />

        <ArticleText
          body="I looked at censorship, chat messaging, the early internet and Big Brother as references. I chose to focus on pixel design in order to tie together four very different countries."
        />

        <ArticleMediaVideo
          mp4={internetIndiaVideoMp4}
          webm={internetIndiaVideoWebm}
          poster={internetIndiaPoster}
          background="brand"
          mask="brand"
        />

        <ArticleTextWithHeader
          heading="India"
          body="India is WhatsApp’s biggest market, with more than 200 million users. By starting with its familiar format, readers instantly knew this wasn’t a regular news article and started scrolling."
        />
      </section>
    </ArticleTemplate>
  );
};

export default InternetArticle;
