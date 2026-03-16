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
import texasSketchesVideoMp4 from "../../../assets/articles/texas/article/texas-moodboard-28-1080.mp4";
import texasSketchesPoster from "../../../assets/articles/texas/article/texas-moodboard-poster.jpg";
import texasMobileStepOne from "../../../assets/articles/texas/article/video-1-25-1080.mp4";
import texasMobileStepTwo from "../../../assets/articles/texas/article/video-2-25-1080.mp4";
import texasMobileStepThree from "../../../assets/articles/texas/article/video-3-25-1080.mp4";
import texasPhoneSplit from "../../../assets/articles/texas/article/family-tree-split-mob.jpg";
import texasPhotoLayoutMobile from "../../../assets/articles/texas/article/image-layout-mobile.jpg";
import texasPhotoLayoutDesktop from "../../../assets/articles/texas/article/image-layout-desktop.jpg";
import texasPhotoTop from "../../../assets/articles/texas/article/top-image.jpg";
import texasMovieTrailerVideoMp4 from "../../../assets/articles/texas/article/movie-trailer-28-720.mp4";
import texasMovieTrailerPoster from "../../../assets/articles/texas/article/movie-trailer-poster.jpg";
import texasGraveVideoMp4 from "../../../assets/articles/texas/article/gravestone-28-1080.mp4";
import texasGravePoster from "../../../assets/articles/texas/article/gravestone-poster.jpg";

const TexasArticle = ({ article }) => {
  const { topper, intro } = article;

  const isMobile = useIsMobile();

  return (
    <Template className={`article--${article.theme}`}>
      <Logo href="/" context="article" theme={article.theme} />

      <CustomTopperTexas alt={topper.alt} />

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
            "I wanted the visuals to feel embedded in the story, setting the scene rather than decorating it.",
            <>
              As inspiration, I looked at archival photos,{" "}
              <a
                href="https://rauluriasart.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                the Mueller report illustrated,
              </a>{" "}
              <a
                href="https://rauluriasart.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                a Holocaust Museum website
              </a>
              , and at illustrations from{" "}
              <a
                href="https://rauluriasart.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Raúl Urias
              </a>{" "}
              (who we later hired) to develop a visual tone. I sketched out
              early ideas to show the contrasting sides of the story.
            </>,
          ]}
        />
        <VideoLarge
          mp4={texasSketchesVideoMp4}
          poster={texasSketchesPoster}
          background="none"
        />
        <Text
          paragraphs={[
            "To shape the story, I worked with editors to restructure the piece and pushed for the illustrations to be the introduction (almost like a movie trailer) to ground readers in the historical context. ",
            "To help guide through conflicting accounts, I developed three visual treatments for the scrolly-telling component: neutral scenes (black, centered), the family’s account (orange, left-aligned), and the lawmen’s version (blue, right-aligned). This helped clearly distinguish where the stories aligned — and where they diverged.",
          ]}
        />
        <VideoStepsLarge
          steps={[
            { mp4: texasMobileStepOne },
            {
              mp4: texasMobileStepTwo,
            },
            {
              mp4: texasMobileStepThree,
            },
          ]}
        />
        <CaptionHand
          captionGridClass="grid__2-3"
          handMotion="vertical"
          title="Extra touch"
          body="I asked for the illustrations to be landscape with the focal point centered, so they would scale up nicely and work well on both mobile and desktop"
        />
        <Text
          paragraphs={[
            "I gave art direction to Raúl on how best to visualise the complex and layered introduction. I animated those illustrations to add subtle movement and guide readers down the page. I referenced a family tree to indicate where the story splits.",
          ]}
        />
        <div className="grid grid--split-media--full item">
          <ImageMedium
            side="middle"
            src={texasPhoneSplit}
            alt="A screenshot of a family tree splitting"
            mask="phone"
            background="brand"
          />
        </div>
        <VideoLarge
          mp4={texasMovieTrailerVideoMp4}
          poster={texasMovieTrailerPoster}
          mask="brand"
          background="brand"
        />
        <Text
          paragraphs={[
            "I collaborated closely with the photo editor, Natalia Jiménez-Stuard, to select and place the photos throughout the piece. Instead of cropping the medium-format film scans, I used the raw images with their bleeding edges intact, helping them feel more embedded and organic within the page.",
          ]}
        />
        <div className="grid grid--split-media item">
          <ImageMedium
            side="left"
            src={texasPhotoTop}
            alt="A screenshot of a family tree splitting"
            mask="phone"
            background="brand"
          />
          <ImageMedium
            side="right"
            src={texasPhotoLayoutMobile}
            alt="A screenshot of a family tree splitting"
            mask="phone"
            background="brand"
          />
        </div>
        <ImageLarge
          src={texasPhotoLayoutDesktop}
          alt="A screenshot of a family tree splitting"
          mask="brand"
          background="brand"
        />
        <Text
          paragraphs={[
            "We translated the piece into Spanish to reach new audiences and because the story held such a personal significance for the descendants.",
            "I set up a custom Photo-flow component that gently faded from portraits of each descendant to photos of their relative’s grave",
          ]}
        />
        <VideoLarge
          mp4={texasGraveVideoMp4}
          poster={texasGravePoster}
          mask="brand"
          background="brand"
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
                Bronze SND for Illustration + Use of multimedia
              </a>
              , and was one of five projects that made up my Digital Portfolio,
              which won Silver.
            </>,
          ]}
        />
        <Quote
          body="This is important accountability journalism and you created an immersive and visually compelling way to share it with our readers."
          attribution="Philip Rucker"
          role="Former National Editor, The Washington Post"
        />
        <Data
          metrics={[
            {
              label: "Scroll tracking",
              number: "48%",
              copy: "of readers who started the experience scrolled through to the end",
            },
          ]}
        />
      </section>
    </Template>
  );
};

export default TexasArticle;
