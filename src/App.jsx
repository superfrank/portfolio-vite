import Logo from "./components/Logo";
import AboutIntro from "./components/AboutIntro";
import FeaturedProject from "./components/FeaturedProject";
import noMowVideo from "./assets/nomow/home/promo-video.mp4";
import noMowPoster from "./assets/nomow/home/promo-video.jpg";

const App = () => {
  return (
    <>
      <Logo href="/" variant="default" context="home" />
      <main>
        {/* <h1 className="site-name">Frank Hulley-Jones</h1> */}
        <AboutIntro />
        <FeaturedProject
          mediaType="video"
          mediaSrc={noMowVideo}
          mediaPoster={noMowPoster}
          mediaAlt="No Mow preview"
        />
      </main>
    </>
  );
};

export default App;
