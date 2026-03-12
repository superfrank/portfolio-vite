import Logo from "../../../components/Logo";
import Template from "../components/Template";
import Intro from "../components/Intro";
import MickeyHand from "../../../components/MickeyHand";
import useIsMobile from "../../../hooks/useIsMobile";
import Text from "../components/Text";
import TextWithHeader from "../components/TextWithHeader";
import ImageLarge from "../components/ImageLarge";
import VideoLarge from "../components/VideoLarge";
import ImageStepsLarge from "../components/ImageStepsLarge";
import ImageMedium from "../components/ImageMedium";
import ImageSmall from "../components/ImageSmall";
import VideoSmall from "../components/VideoSmall";
import VideoMedium from "../components/VideoMedium";
import CaptionHand from "../components/CaptionHand";
import Data from "../components/Data";
import Quote from "../components/Quote";

// Assets
import noMowDandelionVideoMp4 from "../../../assets/articles/nomow/article/no-mow-article-video-1-720-25.mp4";
import noMowDandelionPoster from "../../../assets/articles/nomow/article/no-mow-article-video-1-poster.jpg";
import noMowSketchesVideoMp4 from "../../../assets/articles/nomow/article/no-mow-sketches.mp4";
import noMowSketchesPoster from "../../../assets/articles/nomow/article/no-mow-sketches-poster.jpg";
import noMowStoryboard from "../../../assets/articles/nomow/article/no-mow-storyboard.jpg";
import noMowBeeBalmBlender from "../../../assets/articles/nomow/article/no-mow-beebalm-blender.jpg";
import noMowDandelionBlender from "../../../assets/articles/nomow/article/no-mow-dandelion-blender.jpg";
import noMowMobileStepOne from "../../../assets/articles/nomow/article/no-mow-mobile-step-1.jpg";
import noMowMobileStepTwo from "../../../assets/articles/nomow/article/no-mow-mobile-step-2.jpg";
import noMowMobileStepThree from "../../../assets/articles/nomow/article/no-mow-mobile-step-3.jpg";
import noMowButterflyVideoMp4 from "../../../assets/articles/nomow/article/no-mow-butterfly-28-1080.mp4";
import noMowButterflyPoster from "../../../assets/articles/nomow/article/no-mow-butterfly-poster.jpg";
import noMowFlowersMp4 from "../../../assets/articles/nomow/article/no-mow-flowers-25-1080.mp4";
import noMowFlowersPoster from "../../../assets/articles/nomow/article/no-mow-flowers-poster.jpg";
import noMowBlueJayBlender from "../../../assets/articles/nomow/article/no-mow-blue-jay-blender.jpg";
import noMowDataPageViews from "../../../assets/articles/nomow/article/no-mow-data-page-views.png";

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

      <section className="content wrapper">
        <Text
          paragraphs={[
            "I wanted to focus on how changing your mowing habits could have an impact on even a tiny square of grass. I looked at dioramas, illustrative 3D models and minecraft as visual references and started sketching out rough ideas.",
          ]}
        />
        <VideoLarge
          mp4={noMowSketchesVideoMp4}
          poster={noMowSketchesPoster}
          background="none"
        />

        <Text
          paragraphs={[
            "The writer, Allyson Chiu and I chatted with naturalist, David Mizejewski to understand the no mow process. I storyboarded what would happen to your lawn each week and the tasks the reader should complete to have the perfect patch of grass.",
          ]}
        />

        <ImageLarge
          src={noMowStoryboard}
          alt="Early storyboard"
          background="none"
        />

        <Text
          paragraphs={[
            "To keep things simple, we settled on five steps a reader could take. Beginning with letting grass grow to encourage biodiversity, and evolving towards planting native species that attract and support wildlife.",
          ]}
        />
        <ImageStepsLarge
          steps={[
            { src: noMowMobileStepOne, alt: "A patch of long grass" },
            {
              src: noMowMobileStepTwo,
              alt: "That patch of grass being trimmed",
            },
            {
              src: noMowMobileStepThree,
              alt: "The grass being thinned out with a rake",
            },
          ]}
        />

        <Text
          paragraphs={[
            "Along with graphics reporter Simon Ducroquet, we started building out the 3D graphics. While Simon created the soil and grass, I jumped into Blender and began on the flowers. Starting off with the simpler models of a dandelion and white clover and moving onto the more complex (but beautifully named!) bee balm.",
            <>
              Once I was happy with the models, I built them into the article
              using{" "}
              <a
                href="https://r3f.docs.pmnd.rs/getting-started/introduction"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Three Fiber
              </a>
              . I animated the models and the camera using a combination of
              Blender and{" "}
              <a
                href="https://www.theatrejs.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Theatre.js
              </a>
              .
            </>,
          ]}
        />
        <VideoLarge
          mp4={noMowDandelionVideoMp4}
          poster={noMowDandelionPoster}
          background="brand"
          mask="brand"
        />
        <div className="grid grid--split-media--full item">
          <ImageMedium
            side="left"
            src={noMowDandelionBlender}
            alt="A 3D illustration of a dandelion"
            mask="none"
            background="none"
          />
          <ImageMedium
            side="right"
            src={noMowBeeBalmBlender}
            alt="A 3D illustration of a beebalm"
            mask="none"
            background="none"
          />
        </div>
        <CaptionHand
          captionGridClass="grid__1-2"
          handMotion="vertical"
          title="Extra touch"
          body={[
            <>
              I used{" "}
              <a
                href={"https://drei.docs.pmnd.rs/performances/instances"}
                target="_blank"
                rel="noopener noreferrer"
              >
                instanced meshes
              </a>{" "}
              to reuse a single petal model, allowing all 132 petals to share
              the same geometry and making the scene much more efficient to
              render.
            </>,
          ]}
        />
        <Text
          paragraphs={[
            "I created a model of a butterfly, sweat bee, earthworm and a blue jay to bring the grass patch to life. I animated the insects' wings in slow motion, accurately matching their natural speeds — like a butterfly’s gentle 10 flaps per second and a sweat bee’s rapid 250.",
          ]}
        />

        <VideoLarge
          mp4={noMowButterflyVideoMp4}
          poster={noMowButterflyPoster}
          background="brand"
          mask="brand"
        />
        <div className="grid grid--split-media--full item">
          <ImageMedium
            side="left"
            src={noMowBlueJayBlender}
            alt="A 3D illustration of a blue jay bird"
            mask="none"
            background="none"
          />
          <VideoMedium
            side="right"
            mp4={noMowFlowersMp4}
            poster={noMowFlowersPoster}
            mask="phone"
            background="brand"
          />
        </div>
        <CaptionHand
          captionGridClass="grid__3-4"
          handMotion="vertical"
          title="Extra touch"
          body="The flowers are randomly placed, making each experience unique, just like a real lawn"
        />
        <TextWithHeader
          heading="Outcome"
          paragraphs={[
            <>
              The project went on to win a{" "}
              <a
                href="https://snd.org/best-of-design-competitions/results/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bronze SND for Page Design
              </a>
              , and was one of five projects that made up my Digital Portfolio,
              which won Silver.
            </>,
          ]}
        />
        <Quote
          body="It’s art meets journalism and in a super accessible and practical way."
          attribution="Zachary Goldfarb"
          role="Futures Editor, The Washington Post"
        />
        <Data
          metrics={[
            {
              label: "Scroll tracking",
              number: "48%",
              copy: "of readers who started the experience scrolled through to the end",
            },
            {
              label: "Page views over 3 days",
              src: noMowDataPageViews,
              alt: "Page views data graphic",
            },
          ]}
        />
      </section>
    </Template>
  );
};

export default NoMowArticle;
