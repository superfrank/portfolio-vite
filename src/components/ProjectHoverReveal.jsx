const ProjectHoverReveal = ({ isVisible, hoverImage, x, y }) => {
  return (
    <div
      className={`projects-list__hover-reveal ${isVisible ? "is-visible" : ""}`}
      aria-hidden="true"
      style={{
        transform: `translate3d(${x}px, ${y}px, 0)`,
      }}
    >
      <div className="projects-list__hover-reveal-inner">
        <div
          className="projects-list__hover-reveal-img"
          style={{
            backgroundImage: hoverImage ? `url(${hoverImage})` : "none",
          }}
        />
      </div>
    </div>
  );
};

export default ProjectHoverReveal;
