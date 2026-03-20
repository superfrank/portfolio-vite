import InternetArticle from "./pages/InternetArticle";
import NoMowArticle from "./pages/NoMowArticle";
import TexasArticle from "./pages/TexasArticle";
import CairoArticle from "./pages/CairoArticle";
import internetHeaderImageMobile from "../../assets/articles/internet/header-image-background__mobile.png";
import internetHeaderImageDesktop from "../../assets/articles/internet/article/header-image-background__desktop.png";
import noMowTopperVideoMobile from "../../assets/articles/nomow/article/no-mow-mobile-topper-30-1080.mp4";
import noMowTopperVideoDesktop from "../../assets/articles/nomow/article/no-mow-desktop-topper-30-1080.mp4";
import cairoTopperVideoMobile from "../../assets/articles/cairo/article/topper-mobile-1080-28.mp4";
import cairoTopperVideoDesktop from "../../assets/articles/cairo/article/topper-desktop-1080-28.mp4";

const internetLiveLink =
  "https://www.theguardian.com/technology/ng-interactive/2019/jan/11/the-internet-but-not-as-we-know-it-life-online-in-china-russia-cuba-and-india";

const noMowLiveLink = import.meta.env.DEV
  ? "/no-mow/index.html"
  : "https://www.washingtonpost.com/climate-solutions/interactive/2024/no-mow-lawn-care-tips/";

const texasLiveLink = "https://wapo.st/3ZZNmp2";

const cairoLiveLink = "https://wapo.st/46YFUyB";

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
          value: "Art Direction, Design, Illustration, Development",
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
      mobileSrc: noMowTopperVideoMobile,
      desktopSrc: noMowTopperVideoDesktop,
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
          value: "Pitched idea, Built models, Design, Development",
        },
        {
          key: "award",
          label: "Award",
          value: "SND Bronze",
        },
      ],
      standfirst: [
        "My parents are keen gardeners, who like everything neatly pruned. So when my dad suddenly stopped mowing the lawn and let it grow wild, I was taken aback.",
        "Over a cup of tea (and possibly a cheese & tomato sandwich) we talked it through, and I discovered the “No Mow Movement”. This became the starting point for my pitch to the climate team.",
      ],
    },
  },
  texas: {
    slug: "texas",
    title: "A 100-year-old battle for the truth",
    theme: "blue",
    component: TexasArticle,
    topper: {
      alt: "Texas article topper",
    },
    intro: {
      headline: "A 100-year-old battle for the truth",
      liveLink: texasLiveLink,
      metaMarqueeRow: [
        { key: "type", label: "Type", value: "Interactive" },
        { key: "client", label: "Client", value: "The Washington Post" },
        { key: "year", label: "Year", value: "2024" },
        {
          key: "role",
          label: "Role",
          value: "Animation, Art direction, Design, Development, Editing",
        },
        {
          key: "award",
          label: "Awards",
          value: "SND Silver, SND Bronze",
        },
      ],
      standfirst: [
        "Texas based reporter, Arelis Hernández brought the design team the story of a 1920's shootout on the Mexico-U.S. border and asked for help with how to tell it in the right way.",
        "We decided to make it an illustrated and animated feature contrasting the official record with the oral histories of the descendants who lived it.",
      ],
    },
  },
  cairosounds: {
    slug: "cairosounds",
    title: "Saving the sounds of an ancient city",
    theme: "yellow",
    component: CairoArticle,
    topper: {
      mobileSrc: cairoTopperVideoMobile,
      desktopSrc: cairoTopperVideoDesktop,
      alt: "Cairo article topper",
    },
    intro: {
      headline: "Saving the sounds of an ancient city",
      liveLink: cairoLiveLink,
      metaMarqueeRow: [
        { key: "type", label: "Type", value: "Interactive" },
        { key: "client", label: "Client", value: "The Washington Post" },
        { key: "year", label: "Year", value: "2024" },
        {
          key: "role",
          label: "Role",
          value: "Animation, Art direction, Design, Development",
        },
        {
          key: "award",
          label: "Awards",
          value: "Edward R. Murrow, SND Silver",
        },
      ],
      standfirst: [
        "Cairo Bureau Chief, Siobhán O’Grady came to us with the idea of telling a story through the city's sounds. We wanted to show how as it grows, the sounds that define it change.",
        "The challenge was how to visualise that in a way that encouraged readers to press play.",
      ],
    },
  },
};

export const getArticleConfig = (slug) => articleConfig[slug] ?? null;
