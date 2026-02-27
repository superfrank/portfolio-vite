const ProjectList = () => {
  const projects = [
    {
      id: 1,
      title: "Anthropocene",
      href: "https://wapo.st/4tq6HgL",
      external: true,
    },
    {
      id: 2,
      title: "1920s shootout",
      href: "https://wapo.st/3ZZNmp2",
      external: true,
    },
    {
      id: 3,
      title: "Cairo sounds",
      href: "https://wapo.st/46BXMPm",
      external: true,
    },
    {
      id: 4,
      title: "3D architecture",
      href: "https://wapo.st/3ZkpFYt",
      external: true,
    },
    {
      id: 5,
      title: "Soundscape",
      href: "https://www.theguardian.com/environment/ng-interactive/2020/may/20/relax-to-the-sounds-of-british-wildlife",
      external: true,
    },
    {
      id: 6,
      title: "The internet",
      href: "internet.html",
      external: false,
    },
  ];

  return (
    <section className="projects-list wrapper">
      <div className="projects-list__grid">
        <div className="projects-list__col-1 projects-list__intro">
          <h2 className="projects-list__intro-title first">Selected</h2>
          <h2 className="projects-list__intro-title second">Work</h2>
          <h2 className="projects-list__intro-title third">‘19—‘26</h2>
        </div>
        <div className="projects-list__col-2">
          {projects.map((project) => {
            return (
              <div className="projects-list__item block" key={project.id}>
                <a
                  href={project.href}
                  className="projects-list__link"
                  target={project.external ? "_blank" : undefined}
                  rel={project.external ? "noreferrer" : undefined}
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

export default ProjectList;
