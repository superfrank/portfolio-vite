import Logo from "../../../components/Logo";
import Template from "../components/Template";
import Intro from "../components/Intro";
import CustomTopperTexas from "../components/texas/CustomTopperTexas";
import MickeyHand from "../../../components/MickeyHand";
import useIsMobile from "../../../hooks/useIsMobile";
import Text from "../components/Text";
import TextList from "../components/TextList";
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
import cairoAnimationsVideoMp4 from "../../../assets/articles/cairo/article/animations-compilation-720-28.mp4";
import cairoAnimationsPoster from "../../../assets/articles/cairo/article/animations-poster.jpg";
import cairoGridDesktopMp4 from "../../../assets/articles/cairo/article/grid-desktop-28-1080.mp4";
import cairoGridDesktopPoster from "../../../assets/articles/cairo/article/grid-desktop-poster.jpg";
import cairoGridPhoneOne from "../../../assets/articles/cairo/article/phone-grid-left.jpg";
import cairoGridPhoneTwoMp4 from "../../../assets/articles/cairo/article/grid-desktop-28-1080.mp4";
import cairoGridPhoneTwoPoster from "../../../assets/articles/cairo/article/grid-desktop-poster.jpg";

const CairoArticle = ({ article }) => {
  const { topper, intro } = article;

  const isMobile = useIsMobile();

  return (
    <Template className={`article--${article.theme}`}>
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
            "I wanted the piece to feel dreamlike, as if readers were travelling through the streets from memory.",
            <>
              I drew inspiration from a WW2 memorial with floating letters and
              gridded photography porftfolios. The music producer{" "}
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
            "I asked motion designer Sarah Hashemi to join the project. Having collaborated together before, I knew she could help bring the sounds to life. We brainstormed sketches before landing on colourful, subtle line work. The animations acted as a visual cue to show that sound was integral to the piece.",
          ]}
        />
        <VideoLarge
          mp4={cairoAnimationsVideoMp4}
          poster={cairoAnimationsPoster}
          mask="none"
          background="brand"
        />
        <CaptionHand
          captionGridClass="grid__2-3"
          handMotion="vertical"
          title="Extra touch"
          body="The colour and shape were designed to reflect the character of each sound"
        />

        <TextWithHeader
          heading="User testing"
          paragraphs={[
            "We already had most of the photos and were finalising the list of sounds. As we hadn’t built a piece like this before, we had time to get it right.",
            "I created two prototypes and tested them with 20 readers, working closely with our product UX team who advised on structuring and running the sessions.",
            "A: locked the screen in place until readers either enabled or disabled the sound.",
            "B: let the readers scroll as normal.",
          ]}
        />
        <TextList
          intro="The team had three main questions:"
          items={[
            {
              question:
                "Should the screen be locked until readers either enabled or disabled sound?",
              answer: "No, they wanted to scroll.",
              quote: "\"I'd probably scroll, oh I can't\"",
              attribution: "Caira",
            },
            {
              question: "Will readers enable sound?",
              answer: "Yes.",
              quote:
                '"The reason I visited the article would be to hear the city."',
              attribution: "Sam",
            },
            {
              question: "Do readers know the sound changes as you scroll?",
              answer:
                "No. Most would play and pause as they scrolled. We added language to help.",
            },
          ]}
        />

        <Text
          paragraphs={[
            "The final design used a six-column grid on mobile and a twelve-column grid on desktop. This gave the story a clear hierarchy while allowing the layout to feel asymmetrical and breathe.",
            "Based on the UX testing, I built an audio UI that scrolled with the story so readers could control sound without losing their place. At larger breakpoints, I introduced volume controls after testing showed desktop users struggled to adjust audio levels.",
          ]}
        />
        <div className="grid grid--split-media--full item">
          <ImageMedium
            side="left"
            src={cairoGridPhoneOne}
            alt="A screenshot of a family tree splitting"
            mask="phone"
            background="brand"
          />
          <VideoMedium
            side="right"
            mp4={cairoGridPhoneTwoMp4}
            poster={cairoGridPhoneTwoPoster}
            mask="phone"
            background="brand"
          />
        </div>
        <VideoLarge
          mp4={cairoGridDesktopMp4}
          poster={cairoGridDesktopPoster}
          mask="none"
          background="brand"
        />
        <Text
          paragraphs={[
            "I animated the topper so that the imagery faded in and out, mirroring the loss of the city’s sounds. I added a subtle pulsing wave animation on the buttons as a clear cue to enable the audio.",
          ]}
        />

        <TextWithHeader
          heading="Outcome"
          paragraphs={[
            <>
              The project went on to win an{" "}
              <a
                href="https://www.washingtonpost.com/pr/2023/08/16/post-wins-two-edward-r-murrow-awards/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Edward R. Murrow Award for Excellence in Sound
              </a>{" "}
              and a{" "}
              <a
                href="https://snd.org/snd44-results/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Silver SND for Audio Design
              </a>
              .
            </>,
          ]}
        />
        <Quote
          body="It's a beautiful and ambitious project that seamlessly marries visuals and audio."
          attribution="Judges comments"
          role="Society of News Design, 43"
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
