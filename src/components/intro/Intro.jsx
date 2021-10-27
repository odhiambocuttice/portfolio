import "./intro.scss";
import { DoubleArrowRounded } from "@mui/icons-material";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export const Intro = () => {
  const textRef = useRef();

  // ityped effect
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 2500,
      backSpeed: 40,
      strings: ["Software Engineer", "Web Designer", "Amatuer Photographer"],
    });
  }, []);

  return (
    <div id="home" className="intro">
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h2>Warm Greetings, My name is</h2>
          <h1>Odhiambo Cuttice</h1>

          <h3>
            I'm a <span ref={textRef}></span>
          </h3>
          <p>
            With a passion for developing creative solutions to real-world
            problems. I seek to constantly evolve and improve my skills as well
            as adapt by learning new technologies to make an impact on the world
            around me.
          </p>
          <a href="#portfolio">
            <DoubleArrowRounded className="icon-arrow" />
          </a>
        </div>
      </div>
      <div className="intro-right">
        <div className="intro-right-wrapper">
          <div className="bg-art"></div>
        </div>
      </div>
    </div>
  );
};
