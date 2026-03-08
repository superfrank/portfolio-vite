import AboutIntro from "./components/AboutIntro";
import FeaturedProject from "./components/FeaturedProject";
import noMowVideo from "../../assets/home/nomow/nomow-hp.mp4";
import noMowPoster from "../../assets/home/nomow/promo-video.jpg";
import ProjectsList from "./components/ProjectsList";
import ContactLinks from "../../components/layout/ContactLinks";
import Footer from "../../components/layout/Footer";
import Logo from "../../components/Logo";

const HomePage = () => {
  return (
    <main id="top">
      <Logo href="/" context="home" />
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
  );
};

export default HomePage;
