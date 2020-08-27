import React from "react";
import { Link } from "react-router-dom";
import { faDesktop, faCheck } from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faJsSquare,
  faPhp,
  faNodeJs,
  faPython,
  faCss3Alt,
  faSketch,
  faHtml5,
  faFigma,
  faUikit,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

export const TechButton = ({ tag, job }) => {
  const tags = [
    "frontend",
    "CSS",
    "react",
    "javascript",
    "php",
    "nodjs",
    "python",
    "sketch",
    "ui",
    "html",
    "figma",
  ];

  const dynamicImage = (tag) => {
    console.log(tag);
    var returnvalue;
    switch (tag) {
      case "react":
        returnvalue = <FontAwesomeIcon icon={faReact} />;
        break;
      case "javascript":
        returnvalue = <FontAwesomeIcon icon={faJsSquare} />;
        break;
      case "php":
        returnvalue = <FontAwesomeIcon icon={faPhp} />;
        break;
      case "node.js":
        returnvalue = <FontAwesomeIcon icon={faNodeJs} />;
        break;
      case "CSS":
        returnvalue = <FontAwesomeIcon icon={faCss3Alt} />;
        break;
      case "python":
        returnvalue = <FontAwesomeIcon icon={faPython} />;
        break;
      case "frontend":
        returnvalue = <FontAwesomeIcon icon={faDesktop} />;
        break;
      case "sketch":
        returnvalue = <FontAwesomeIcon icon={faSketch} />;
        break;
      case "html":
        returnvalue = <FontAwesomeIcon icon={faHtml5} />;
        break;
      case "figma":
        returnvalue = <FontAwesomeIcon icon={faFigma} />;
        break;
      case "ui":
        returnvalue = <FontAwesomeIcon icon={faUikit} />;
        break;
      default:
        break;
    }
    return returnvalue;
  };
  let tagTo = {
    pathname: `/technology/${tag.name.toLowerCase()}`,
    tag,
    job,
  };
  return (
    <>
      {tag.url === "" ? (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
        
          <div style={{display: "flex", alignItems: 'center'}}>
            {dynamicImage(tag.name)}
            <h4>{tag.name}</h4>
          </div>
        
          <Link to={tagTo}>
            <FontAwesomeIcon
              className="icons"
              icon={faAngleDoubleRight}
              style={{ style: "none" }}
            />
          </Link>
        </div>
      ) : (
        <div style={{ backgroundColor: "green" }}>
          <img src="" alt="tech logo" style={{ width: 50 }} />
          <h4>{tag.name}</h4>
          <FontAwesomeIcon className="icons" icon={faCheck} />
        </div>
      )}
    </>
  );
};

export default TechButton;
