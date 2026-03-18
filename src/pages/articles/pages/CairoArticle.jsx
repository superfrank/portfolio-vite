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
import cairoMoodboard from "../../../assets/articles/cairo/article/cairo-moodboard.jpg";
import cairoPageViews from "../../../assets/articles/cairo/article/cairo-page-views.png";

const CairoArticle = ({ article }) => {
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
            "I wanted the piece to feel dreamlike, as if readers were travelling through the streets from memory.",
            <>
              I drew inspiration from a WW2 memorial and fashion photography.
              The music producer{" "}
              <a
                href="https://www.mergrim.net/en/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Takahisa Mitsumori's website
              </a>{" "}
              was particularly helpful in thinking about how sound could be
              treated as something spatial rather than simply decorative.{" "}
            </>,
          ]}
        />
        <ImageLarge
          src={cairoMoodboard}
          alt="Early sketches and visual references used during concept development"
          background="none"
        />
        <Text
          paragraphs={[
            "To shape the story, I worked with editors to restructure the piece and pushed for the illustrations to be the introduction (almost like a movie trailer) to ground readers in the historical context. ",
            "To help guide through conflicting accounts, I developed three visual treatments for the scrolly-telling component: neutral scenes (black, centered), the family’s account (orange, left-aligned), and the lawmen’s version (blue, right-aligned). This helped clearly distinguish where the stories aligned — and where they diverged.",
          ]}
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
          body="It's a beautiful and ambitious project that seamlessly marries visuals and audio."
          attribution="Judges comments"
          role="Society of News Design 43"
        />
        <Data
          metrics={[
            {
              label: "Click event tracking",
              number: "1 in 4",
              copy: (
                <>
                  Readers enabled sound at the start and scrolled to hear the
                  sound change
                </>
              ),
            },
            {
              label: "Page views over 3 days",
              src: cairoPageViews,
              alt: "Page views data graphic",
            },
          ]}
        />
      </section>
    </Template>
  );
};

export default CairoArticle;
