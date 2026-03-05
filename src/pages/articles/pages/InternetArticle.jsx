import Logo from "../../../components/Logo";
import ArticleTemplate from "../components/ArticleTemplate";
import ArticleIntro from "../components/ArticleIntro";
import ArticleText from "../components/ArticleText";
import ArticleTextWithHeader from "../components/ArticleTextWithHeader";
import ArticleMediaImage from "../components/ArticleMediaImage";
import ArticleMediaVideo from "../components/ArticleMediaVideo";
import ArticleMediaSplitMedium from "../components/ArticleMediaSplitMedium";
import ArticleMediaSplitSmall from "../components/ArticleMediaSplitSmall";
import ArticleCaptionHand from "../components/ArticleCaptionHand";
import MickeyHand from "../../../components/MickeyHand";
import useIsMobile from "../../../hooks/useIsMobile";

// Assets
import internetResearchImage from "../../../assets/articles/internet/article/research.jpg";
import internetIndiaImageTwo from "../../../assets/articles/internet/article/image-2.png";
import internetIndiaVideoMp4 from "../../../assets/articles/internet/media/internet-india.mp4";
import internetIndiaVideoWebm from "../../../assets/articles/internet/media/internet-india.webm";
import internetIndiaPoster from "../../../assets/articles/internet/media/poster-internet-india.png";
import internetChinaVideoMp4 from "../../../assets/articles/internet/media/internet-china.mp4";
import internetChinaVideoWebm from "../../../assets/articles/internet/media/internet-china.webm";
import internetChinaPoster from "../../../assets/articles/internet/media/poster-internet-china.png";
import internetChinaVideoThreeMp4 from "../../../assets/articles/internet/media/internet-china-3.mp4";
import internetChinaVideoThreeWebm from "../../../assets/articles/internet/media/internet-china-3.webm";
import internetChinaPosterThree from "../../../assets/articles/internet/media/poster-internet-china-3.png";
import internetChinaVideoTwoMp4 from "../../../assets/articles/internet/media/internet-china-2.mp4";
import internetChinaVideoTwoWebm from "../../../assets/articles/internet/media/internet-china-2.webm";
import internetChinaPosterTwo from "../../../assets/articles/internet/media/poster-internet-china-2.png";
import internetCubaVideoMp4 from "../../../assets/articles/internet/media/internet-cuba.mp4";
import internetCubaVideoWebm from "../../../assets/articles/internet/media/internet-cuba.webm";
import internetCubaPoster from "../../../assets/articles/internet/media/poster-internet-cuba.png";
import internetRussiaVideoMp4 from "../../../assets/articles/internet/media/internet-russia.mp4";
import internetRussiaVideoWebm from "../../../assets/articles/internet/media/internet-russia.webm";
import internetRussiaPoster from "../../../assets/articles/internet/media/poster-internet-russia.png";
import internetRussiaImageTwo from "../../../assets/articles/internet/article/internet-russia-2.png";
import internetRussiaEyeTwoGif from "../../../assets/articles/internet/article/russia-eye-2.gif";
import internetRussiaEyeThreeGif from "../../../assets/articles/internet/article/russia-eye-3.gif";

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

        <ArticleText body="I looked at censorship, chat messaging, the early internet and Big Brother as references. I chose to focus on pixel design in order to tie together four very different countries." />

        <ArticleMediaVideo
          mp4={internetIndiaVideoMp4}
          webm={internetIndiaVideoWebm}
          poster={internetIndiaPoster}
          background="brand"
          mask="brand"
        />

        <ArticleTextWithHeader
          heading="India"
          paragraphs={[
            "India is WhatsApp’s biggest market, with more than 200 million users. By starting with its familiar format, readers instantly knew this wasn’t a regular news article and started scrolling.",
          ]}
        />

        <ArticleCaptionHand
          imageSrc={internetIndiaImageTwo}
          imageAlt="An illustration of WhatsApp chat bubbles"
          title="Extra touch"
          body="The time of the messages was set to the reader's computer time"
        />

        <ArticleMediaVideo
          mp4={internetChinaVideoMp4}
          webm={internetChinaVideoWebm}
          poster={internetChinaPoster}
          background="brand"
          mask="brand"
        />

        <div className="grid item">
          <ArticleMediaSplitSmall
            position="mid-left"
            type="video"
            mp4={internetChinaVideoThreeMp4}
            webm={internetChinaVideoThreeWebm}
            poster={internetChinaPosterThree}
          />

          <ArticleMediaSplitMedium
            side="right"
            type="video"
            mp4={internetChinaVideoTwoMp4}
            webm={internetChinaVideoTwoWebm}
            poster={internetChinaPosterTwo}
          />
        </div>

        <ArticleTextWithHeader
          heading="China"
          paragraphs={[
            "In China, Weibo dominates in place of blocked pages like Google and Twitter. I included elements throughout this section which referenced the site's animated icons and the flickering of neon signs that are synonymous with East Asia.",
          ]}
        />

        <ArticleMediaVideo
          mp4={internetCubaVideoMp4}
          webm={internetCubaVideoWebm}
          poster={internetCubaPoster}
          background="brand"
          mask="brand"
        />

        <ArticleTextWithHeader
          heading="Cuba"
          paragraphs={[
            'Over in Cuba, access to the internet is limited and expensive. Locals receive delivery of media through an external hard drive known as "The Weekly Packet".',
            'This was where the idea for pixelated design came from; screenshots of "The Weekly Packet" showed it running on an old version of Windows. The design was inspired by how Windows 3.11 looked and functioned.',
          ]}
        />

        <ArticleMediaVideo
          mp4={internetRussiaVideoMp4}
          webm={internetRussiaVideoWebm}
          poster={internetRussiaPoster}
          background="brand"
          mask="brand"
        />

        <div className="grid item">
          <ArticleMediaSplitMedium
            side="left"
            type="image"
            src={internetRussiaImageTwo}
            alt="An illustration of VK"
          />

          <ArticleMediaSplitSmall
            position="mid-right"
            align="end"
            type="image"
            src={internetRussiaEyeThreeGif}
            alt="A moving eye"
          />

          <ArticleMediaSplitSmall
            position="right"
            type="image"
            src={internetRussiaEyeTwoGif}
            alt="A blinking eye"
          />
        </div>

        <ArticleTextWithHeader
          heading="Russia"
          paragraphs={[
            <>
              Meanwhile in Russia, the Government promotes local companies such
              as Vkontakte (a popular Facebook-like social network). Their
              relationship is controversial:{" "}
              <a href="https://www.theguardian.com/world/2018/sep/01/young-russians-posting-memes-face-jail-for-extremism">
                a handful of users were charged with extremism
              </a>{" "}
              after police searched their online accounts for political content.
            </>,
            "This section included additional features such as the reader being able to 'like' each post, add The Kremlin as a 'friend' and an animation of 1984-style eyes watching.",
          ]}
        />
      </section>
    </ArticleTemplate>
  );
};

export default InternetArticle;
