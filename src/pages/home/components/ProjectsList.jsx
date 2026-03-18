import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import useIsMobile from "../../../hooks/useIsMobile";
import ProjectHoverReveal from "./ProjectHoverReveal";

// Images
import anthropoceneImg from "../../../assets/home/hover/anthropocene.jpg";
import cairoImg from "../../../assets/home/hover/cairo.jpg";
import kitchenImg from "../../../assets/home/hover/kitchen.jpg";
import internetImg from "../../../assets/home/hover/internet.jpg";
import soundscapeImg from "../../../assets/home/hover/soundscape.jpg";
import texasImg from "../../../assets/home/hover/texas.jpg";

const ProjectsList = () => {
  const isMobile = useIsMobile();

  const [isRevealVisible, setIsRevealVisible] = useState(false);

  const [hoverImage, setHoverImage] = useState("");

  // Cursor
  const [revealPos, setRevealPos] = useState({ x: 0, y: 0 });
  const frameRef = useRef(null);
  const showFrameRef = useRef(null);
  const pendingPosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
      if (showFrameRef.current !== null) {
        cancelAnimationFrame(showFrameRef.current);
      }
    };
  }, []);

  const updateRevealPosition = (event) => {
    if (isMobile) return;

    pendingPosRef.current = {
      x: event.clientX + 24,
      y: event.clientY + 24,
    };

    if (frameRef.current !== null) return;

    frameRef.current = requestAnimationFrame(() => {
      setRevealPos(pendingPosRef.current);
      frameRef.current = null;
    });
  };

  const handleProjectMouseEnter = (project, event) => {
    if (isMobile) return;

    const nextPos = { x: event.clientX + 24, y: event.clientY + 24 };
    pendingPosRef.current = nextPos;
    setRevealPos(nextPos);

    setHoverImage(project.hoverImg);
    if (showFrameRef.current !== null) {
      cancelAnimationFrame(showFrameRef.current);
    }

    showFrameRef.current = requestAnimationFrame(() => {
      setIsRevealVisible(true);
      showFrameRef.current = null;
    });
  };

  const handleProjectMouseLeave = () => {
    if (isMobile) return;
    if (showFrameRef.current !== null) {
      cancelAnimationFrame(showFrameRef.current);
      showFrameRef.current = null;
    }
    setIsRevealVisible(false);
  };

  const { ref: introRef, inView: isIntroActive } = useInView({
    threshold: isMobile ? 1 : 0.5,
    rootMargin: isMobile ? "0px 0px -40% 0px" : "-6% 0px 0px 0px",
    triggerOnce: false,
  });

  const projects = [
    {
      id: 1,
      title: "1920s shootout",
      hoverImg: texasImg,
      // href: "https://wapo.st/3ZZNmp2",
      href: "/texas",
      external: false,
    },
    {
      id: 2,
      title: "Cairo sounds",
      hoverImg: cairoImg,
      // href: "https://wapo.st/46YFUyB",
      href: "/cairosounds",
      external: false,
    },
    {
      id: 3,
      title: "3D kitchen",
      hoverImg: kitchenImg,
      href: "https://wapo.st/46O0sd1",
      external: true,
    },
    {
      id: 4,
      title: "Anthropocene",
      hoverImg: anthropoceneImg,
      href: "https://wapo.st/4s0OLrM",
      external: true,
    },
    {
      id: 5,
      title: "Soundscape",
      hoverImg: soundscapeImg,
      href: "https://www.theguardian.com/environment/ng-interactive/2020/may/20/relax-to-the-sounds-of-british-wildlife",
      external: true,
    },
    {
      id: 6,
      title: "The internet",
      hoverImg: internetImg,
      href: "/internet",
      external: false,
    },
  ];

  return (
    <section className="projects-list wrapper">
      <div className="projects-list__grid">
        <div
          className={`projects-list__col-1 projects-list__intro ${isIntroActive ? "projects-list__intro--active" : ""}`}
          ref={introRef}
        >
          <h2 className="projects-list__intro-title first">Selected</h2>
          <h2 className="projects-list__intro-title second">work</h2>
          <h2 className="projects-list__intro-title third">‘19—‘26</h2>
        </div>
        <div className="projects-list__col-2">
          <ProjectHoverReveal
            isVisible={isRevealVisible}
            hoverImage={hoverImage}
            x={revealPos.x}
            y={revealPos.y}
          />
          {projects.map((project) => {
            return (
              <div className="projects-list__item" key={project.id}>
                <a
                  href={project.href}
                  className="projects-list__link"
                  target={project.external ? "_blank" : undefined}
                  rel={project.external ? "noreferrer" : undefined}
                  onMouseEnter={(event) =>
                    handleProjectMouseEnter(project, event)
                  }
                  onMouseMove={updateRevealPosition}
                  onMouseLeave={handleProjectMouseLeave}
                >
                  <h2 className="projects-list__title">
                    <span className="projects-list__number">{project.id}</span>
                    {project.title}
                    {project.external ? (
                      <sup className="projects-list__arrow"> ↗</sup>
                    ) : null}
                  </h2>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsList;
