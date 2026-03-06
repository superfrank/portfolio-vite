import Logo from "../../../components/Logo";
import useIsMobile from "../../../hooks/useIsMobile";
import Template from "../components/Template";
import Intro from "../components/Intro";
import Text from "../components/Text";
import TextWithHeader from "../components/TextWithHeader";
import ImageLarge from "../components/ImageLarge";
import VideoLarge from "../components/VideoLarge";
import ImageMedium from "../components/ImageMedium";
import ImageSmall from "../components/ImageSmall";
import VideoSmall from "../components/VideoSmall";
import VideoMedium from "../components/VideoMedium";
import CaptionHand from "../components/CaptionHand";
import Data from "../components/Data";
import CustomTopperInternet from "../components/internet/CustomTopperInternet";
import MickeyHand from "../../../components/MickeyHand";

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
import internetDataOneImage from "../../../assets/articles/internet/article/data-1.png";
import internetDataTwoImage from "../../../assets/articles/internet/article/data-2.png";

const InternetArticle = ({ article }) => {
  const { topper, intro } = article;

  const isMobile = useIsMobile();

  return (
    <Template className="article--internet">
      <Logo href="/" context="article" theme={article.theme} />

      <CustomTopperInternet
        mobileSrc={topper.mobileSrc}
        desktopSrc={topper.desktopSrc}
        alt={topper.alt}
      />

      <Intro>
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
      </Intro>

      <section className="content wrapper">
        <Text body="I looked at censorship, chat messaging, the early internet and Big Brother as references. I chose to focus on pixel design in order to tie together four very different countries." />

        <ImageLarge
          src={internetResearchImage}
          alt="Early sketches and visual references used during concept development"
          background="none"
        />

        <TextWithHeader
          heading="India"
          paragraphs={[
            "India is WhatsApp’s biggest market, with more than 200 million users. By starting with its familiar format, readers instantly knew this wasn’t a regular news article and started scrolling.",
          ]}
        />

        <VideoLarge
          mp4={internetIndiaVideoMp4}
          webm={internetIndiaVideoWebm}
          poster={internetIndiaPoster}
          background="brand"
          mask="brand"
        />

        <CaptionHand
          imageSrc={internetIndiaImageTwo}
          imageAlt="An illustration of WhatsApp chat bubbles"
          title="Extra touch"
          body="The time of the messages was set to the reader's computer time"
        />

        <TextWithHeader
          heading="China"
          paragraphs={[
            "In China, Weibo dominates in place of blocked pages like Google and Twitter. I included elements throughout this section which referenced the site's animated icons and the flickering of neon signs that are synonymous with East Asia.",
          ]}
        />

        <VideoLarge
          mp4={internetChinaVideoMp4}
          webm={internetChinaVideoWebm}
          poster={internetChinaPoster}
          background="brand"
          mask="brand"
        />

        <div className="grid item">
          <VideoSmall
            position="mid-left"
            mp4={internetChinaVideoThreeMp4}
            webm={internetChinaVideoThreeWebm}
            poster={internetChinaPosterThree}
          />

          <VideoMedium
            side="right"
            mp4={internetChinaVideoTwoMp4}
            webm={internetChinaVideoTwoWebm}
            poster={internetChinaPosterTwo}
          />
        </div>
        <TextWithHeader
          heading="Cuba"
          paragraphs={[
            'Over in Cuba, access to the internet is limited and expensive. Locals receive delivery of media through an external hard drive known as "The Weekly Packet".',
            'This was where the idea for pixelated design came from; screenshots of "The Weekly Packet" showed it running on an old version of Windows. The design was inspired by how Windows 3.11 looked and functioned.',
          ]}
        />

        <VideoLarge
          mp4={internetCubaVideoMp4}
          webm={internetCubaVideoWebm}
          poster={internetCubaPoster}
          background="brand"
          mask="brand"
        />

        <TextWithHeader
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

        <VideoLarge
          mp4={internetRussiaVideoMp4}
          webm={internetRussiaVideoWebm}
          poster={internetRussiaPoster}
          background="brand"
          mask="brand"
        />

        <div className="grid item">
          <ImageMedium
            side="left"
            src={internetRussiaImageTwo}
            alt="An illustration of VK"
            mask="phone"
            background="brand"
          />

          <ImageSmall
            position="mid-right"
            align="end"
            src={internetRussiaEyeThreeGif}
            alt="A moving eye"
          />

          <ImageSmall
            position="right"
            src={internetRussiaEyeTwoGif}
            alt="A blinking eye"
          />
        </div>

        <TextWithHeader
          heading="Outcome"
          paragraphs={[
            <>
              The project went on to win a{" "}
              <a href="https://www.dandad.org/awards/professional/2019/graphic-design/231385/the-guardian-the-internet-but-not-as-we-know-it/">
                D&AD Wooden Pencil
              </a>
              , an{" "}
              <a href="https://www.snd.org/bodd/2020/02/07/2019-results/">
                SND
              </a>
              , a{" "}
              <a href="https://drive.google.com/file/d/1ap0x0l8s_VWTaHSKNThPWDptl0OZIgdz/view">
                Malofiej
              </a>{" "}
              and was featured in{" "}
              <a href="https://www.creativereview.co.uk/the-guardian-brings-the-worlds-internet-use-to-life-in-animated-feature/">
                Creative Review
              </a>
              .
            </>,
            "I was particularly proud of the article's attention time - over double the length for an average interactive. As the piece was visual and unusual, people were easily drawn in and enjoyed reading to the very end.",
          ]}
        />
        <Data
          metrics={[
            {
              label: "Page views over 24 hours",
              src: internetDataOneImage,
              alt: "Page views data graphic",
            },
            {
              label: "Median attention time over 24 hours",
              src: internetDataTwoImage,
              alt: "Median attention time data graphic",
            },
          ]}
        />
      </section>
    </Template>
  );
};

export default InternetArticle;
