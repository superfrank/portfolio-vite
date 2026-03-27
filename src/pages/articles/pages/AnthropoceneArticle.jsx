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
import anthroLakeMobile from "../../../assets/articles/anthropocene/article/lake-mobile-top.jpg";
import anthroGreenlandMobile from "../../../assets/articles/anthropocene/article/greenland-mobile-top.jpg";
import anthroSeychellesMobileTop from "../../../assets/articles/anthropocene/article/seychelles-mobile-top.jpg";
import anthroWoodMobile from "../../../assets/articles/anthropocene/article/wood-mobile-top.jpg";
import ImageMedium from "../components/ImageMedium";
import ImageSmall from "../components/ImageSmall";
import VideoSmall from "../components/VideoSmall";
import VideoMedium from "../components/VideoMedium";
import CaptionHand from "../components/CaptionHand";
import Data from "../components/Data";
import Quote from "../components/Quote";
import ImageSequence from "../components/ImageSequence";

// Assets
import anthroResearchImage from "../../../assets/articles/anthropocene/article/moodboard-1.jpg";
import bpStep1 from "../../../assets/articles/anthropocene/article/bp-step-1.png";
import bpStep2 from "../../../assets/articles/anthropocene/article/bp-step-2.png";
import bpStep3 from "../../../assets/articles/anthropocene/article/bp-step-3.png";
import bpStep4 from "../../../assets/articles/anthropocene/article/bp-step-4.png";
import bpStep5 from "../../../assets/articles/anthropocene/article/bp-step-5.png";
import bpStep6 from "../../../assets/articles/anthropocene/article/bp-step-6.png";
import anthroGridFour from "../../../assets/articles/anthropocene/article/anthropocene-grid-4-30-1920.mp4";
import anthroGraphicDesktop from "../../../assets/articles/anthropocene/article/graphic-desktop-anthro-28.mp4";
import anthroGraphicMobAnthro from "../../../assets/articles/anthropocene/article/graphic-mob-anthro-edit-25.mp4";
import anthroGraphicMobGreenland from "../../../assets/articles/anthropocene/article/graphic-mob-greenland-25.mp4";
import anthroSeychellesMob from "../../../assets/articles/anthropocene/article/step-seychelles-mob-30.mp4";
import anthroStepDesktop from "../../../assets/articles/anthropocene/article/step-anthro-desktop-30.mp4";
import anthroTopperArticle from "../../../assets/articles/anthropocene/article/topper-article-30.mp4";

const AnthropoceneArticle = ({ article }) => {
  const { topper, intro } = article;

  const isMobile = useIsMobile();

  return (
    <Template className={`article--${article.theme} article--anthropocene`}>
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
            "As senior designer, I worked closely with graphics reporter Simon Ducroquet, photojournalist Bonnie Jo Mount and designer Emily Wright, drawing inspiration from grid paper, a sea interactive, old science books, 3D layering and wooden architectural models to bring the concept to life.",
          ]}
        />
        <ImageLarge
          src={anthroResearchImage}
          alt="Early visual references used during concept development"
          background="none"
        />
        <Text
          paragraphs={[
            "I designed a system built around a 32px grid. Emily and I created six different image layouts and accounted for six breakpoints. A lot of effort went into ensuring that the videos, images, and captions always aligned perfectly with the grid.",
          ]}
        />
        <ImageSequence
          steps={[
            { src: bpStep1, alt: "Breakpoint layout step 1" },
            { src: bpStep2, alt: "Breakpoint layout step 2" },
            { src: bpStep3, alt: "Breakpoint layout step 3" },
            { src: bpStep4, alt: "Breakpoint layout step 4" },
            { src: bpStep5, alt: "Breakpoint layout step 5" },
            { src: bpStep6, alt: "Breakpoint layout step 6" },
          ]}
          background="brand"
        />

        <Text
          paragraphs={[
            "There were four parts to the series in four very different climates: Canada (Ontario), Greenland, the Seychelles and the U.S. (Arizona).",
          ]}
        />

        <ImageStepsLarge
          steps={[
            {
              src: anthroLakeMobile,
              alt: "Lake sediment core extraction, Canada",
            },
            { src: anthroGreenlandMobile, alt: "Ice core drilling, Greenland" },
            {
              src: anthroSeychellesMobileTop,
              alt: "Coral core diving, Seychelles",
            },
            { src: anthroWoodMobile, alt: "Tree ring sampling, Arizona" },
          ]}
        />
        <Text
          paragraphs={[
            "The heavy lifting at the start to create an organic grid system was worth it, as it gave each part its own character while ensuring the series had a cohesive design.",
          ]}
        />
        <VideoLarge
          mp4={anthroGridFour}
          /* poster={anthroGridFourPoster} */
          background="brand"
        />
        <Text
          paragraphs={[
            "I collaborated closely with Simon to establish a graphic style that would carry through the series. I made key decisions around the color palette, model style, and labelling, while we storyboarded the narrative structure with the writer.",
          ]}
        />

        <div className="grid grid--split-media item">
          <VideoMedium side="left" mp4={anthroGraphicMobAnthro} />
          <VideoMedium side="right" mp4={anthroGraphicMobGreenland} />
        </div>
        <VideoLarge
          mp4={anthroGraphicDesktop}
          background="brand"
          mask="brand"
        />

        <CaptionHand
          captionGridClass="grid__2-3"
          handMotion="vertical"
          title="Extra touch"
          body="I developed a new scrolly component where the text never obscures the visuals"
        />
        <Text
          paragraphs={[
            "I pitched the idea of creating a step by step component documenting the scientists process for extracting the sediment cores in Canada and the fossilized coral cores in the Seychelles.",
          ]}
        />

        <VideoLarge mp4={anthroStepDesktop} background="brand" mask="brand" />
        <div className="grid grid--split-media--full item">
          <VideoMedium side="middle" mp4={anthroSeychellesMob} />
        </div>
        <Text
          paragraphs={[
            "For part one, Simon and I directed the photojournalist to capture footage of the camera submerging in the water, aiming to immerse the reader in the experience of diving into the lake's depths. I then built the transition between the video and graphics.",
          ]}
        />
        <VideoLarge mp4={anthroTopperArticle} background="brand" mask="brand" />
      </section>
    </Template>
  );
};

export default AnthropoceneArticle;
