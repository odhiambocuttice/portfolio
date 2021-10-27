import { useState, useEffect } from "react";
import { PortfolioList } from "../portfoliolist/PortfolioList";
import "./portfolio.scss";
import {
  Audioweb,
  WebDevelopent,
  Notyet,
  Photography,
} from "../../projectData.js";

export const Portfolio = () => {
  const [selected, setSelected] = useState("");
  const [projectdata, setProjectData] = useState([]);

  const project_list = [
    {
      id: "Web Development",
      title: "Web Development",
    },
    {
      id: "Web App",
      title: "Web App",
    },
    {
      id: "Design",
      title: "Design",
    },
    {
      id: "Photography",
      title: "Photography",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "Web Development":
        setProjectData(WebDevelopent);
        break;
      case "Web App":
        setProjectData(Audioweb);
        break;
      case "Photography":
        setProjectData(Photography);
        break;
      default:
        setProjectData(Notyet);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>creation booth</h1>
      <ul>
        {project_list.map((project) => (
          <PortfolioList
            title={project.title}
            active={selected === project.id}
            setSelected={setSelected}
            id={project.id}
            key={project.id}
          />
        ))}
      </ul>
      <div className="portfolio-items">
        {projectdata.map((data) => (
          <div className="item">
            <div className="browser-effect">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <a href={data.link} target="_blank" rel="noreferrer">
              <img src={data.img} alt={data.title} />
              <h3>{data.title}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
