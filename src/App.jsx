import Logo from "./components/Logo";
import AboutIntro from "./components/AboutIntro";
import FeaturedProject from "./components/FeaturedProject";
import noMowVideo from "./assets/nomow/home/promo-video.mp4";
import noMowPoster from "./assets/nomow/home/promo-video.jpg";
import ProjectsList from "./components/ProjectsList";
import ContactLinks from "./components/ContactLinks";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Logo href="/" variant="default" context="home" />
      <main id="top">
        <AboutIntro />
        <FeaturedProject
          mediaType="video"
          mediaSrc={noMowVideo}
          mediaPoster={noMowPoster}
          mediaAlt="No Mow preview"
        />
        <ProjectsList />
        <ContactLinks />
        <Footer />
      </main>
    </>
  );
};

export default App;
