import { useState, useEffect } from "react";

const ImageSequence = ({
  steps = [],
  background = "default",
  containerClassName = "",
}) => {
  const [current, setCurrent] = useState(0);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (steps.length < 2 || prefersReducedMotion) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % steps.length);
    }, 1000);
    return () => clearInterval(timer);
  }, [steps.length, prefersReducedMotion]);

  const backgroundClassName =
    background === "brand"
      ? "image__background--brand"
      : background === "white"
        ? "image__background--white"
        : background === "none"
          ? "image__background--none"
          : "";
  return (
    <div className="grid item">
      <div
        className={`image grid__1-4 image__background image-sequence ${backgroundClassName}`}
      >
        <div className={`image__container ${containerClassName}`}>
          <div className="image-sequence__stack">
            {steps.map((step, index) => (
              <img
                key={index}
                className="image-sequence__frame"
                src={step.src}
                alt={step.alt || ""}
                aria-hidden={index !== current}
                style={{ opacity: index === current ? 1 : 0 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSequence;
