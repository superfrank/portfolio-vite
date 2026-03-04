import InternetArticle from "./pages/InternetArticle";
import NoMowArticle from "./pages/NoMowArticle";
import internetHeaderImageMobile from "../../assets/articles/internet/header-image-background__mobile.png";
import internetHeaderImageDesktop from "../../assets/articles/internet/article/header-image-background__desktop.png";
import noMowHeaderImage from "../../assets/nomow/home/promo-video.jpg";

const internetLiveLink =
  "https://www.theguardian.com/technology/ng-interactive/2019/jan/11/the-internet-but-not-as-we-know-it-life-online-in-china-russia-cuba-and-india";

const noMowLiveLink = import.meta.env.DEV
  ? "/no-mow/index.html"
  : "https://www.washingtonpost.com/climate-solutions/interactive/2024/no-mow-lawn-care-tips/";

export const articleConfig = {
  internet: {
    slug: "internet",
    title: "The internet, but not as we know it",
    theme: "internet",
    component: InternetArticle,
    topper: {
      mobileSrc: internetHeaderImageMobile,
      desktopSrc: internetHeaderImageDesktop,
      alt: "Internet article topper",
    },
    intro: {
      headline: "The internet, but not as we know it",
      liveLink: internetLiveLink,
      metaMarqueeRow: [
        { key: "type", label: "Type", value: "Interactive" },
        { key: "client", label: "Client", value: "The Guardian" },
        { key: "year", label: "Year", value: "2019" },
        {
          key: "role",
          label: "Role",
          value: "Art Direction, Design, Illustration, Front-end",
        },
        {
          key: "award",
          label: "Awards",
          value: "D&AD Wooden Pencil, SND, Malofiej",
        },
      ],
      standfirst: [
        "By the end of 2018, more than half of the world’s population was online. As 3.9 billion people raised a glass to Tim Berners-Lee, I spent 8 weeks wading through Chinese microblogs and trying to piece together a coherent and appropriate homage to the internet complete with some 90s nostalgia.",
        'My brief was: "What does life look like online across the world?" More specifically, in India, Cuba, China and Russia?',
        "The challenge was to create something that maintained a narrative structure while conveying each country's distinct character.",
      ],
    },
  },
  nomow: {
    slug: "nomow",
    title: "Why you should let your grass grow",
    theme: "nomow",
    component: NoMowArticle,
    topper: {
      mobileSrc: noMowHeaderImage,
      desktopSrc: noMowHeaderImage,
      alt: "No Mow article topper",
    },
    intro: {
      headline: "Why you should let your grass grow",
      liveLink: noMowLiveLink,
      metaMarqueeRow: [
        { key: "type", label: "Type", value: "Interactive" },
        { key: "client", label: "Client", value: "The Washington Post" },
        { key: "year", label: "Year", value: "2024" },
        {
          key: "role",
          label: "Role",
          value: "Pitched idea, Built models, Design, Front-end",
        },
      ],
      standfirst: [
        "An immersive 3D feature to show what happens when you stop mowing your lawn",
      ],
    },
  },
};

export const getArticleConfig = (slug) => articleConfig[slug] ?? null;
