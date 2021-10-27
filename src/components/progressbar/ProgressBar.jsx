import "./progressbar.scss";

export const ProgressBar = () => {
  //   const firstDayOfYear = 5;
  const firstDayOfNextYear = 10;
  const getProgress = (firstDayOfYear) => {
    return Math.round((firstDayOfYear / firstDayOfNextYear) * 100);
  };

  const Audioweb = [
    {
      id: 8,
      title: "Django",
    },
    {
      id: 8,
      title: "Python",
    },
    {
      id: 8,
      title: "Reactjs",
    },
    {
      id: 9,
      title: "HTML5",
    },
    {
      id: 9,
      title: "CSS3",
    },
    {
      id: 9,
      title: "Adobe Creative Studion(Ph, Ai, Lr, Ae, Pr)",
    },
    {
      id: 5,
      title: "Figma",
    },
    {
      id: 6,
      title: "SQL",
    },
    {
      id: 3,
      title: "TypeScipt",
    },
  ];

  return (
    <div className="whole">
      <h1>tech stack</h1>
      <div className="container">
        {Audioweb.map((project) => (
          <>
            <div className="progressbar-container">
              <p>{project.title}</p>
              <div
                className="progressbar-complete"
                style={{ width: `${getProgress(project.id)}%` }}
              ></div>
              <div
                className="progressbar-liquid"
                style={{
                  right: `${getProgress(project.id)}%`,
                }}
              ></div>
              {/* <span className="progress">{getProgress(project.id)}%</span> */}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
