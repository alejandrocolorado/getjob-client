import React from "react";
import { Link } from "react-router-dom";
import { faCheck, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faJsSquare,
  faPhp,
  faPython,
  faCss3Alt,
  faSketch,
  faHtml5,
  faFigma,
  faUikit,
  faAngular,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

export const TechButton = ({ tag, job }) => {
  const tags = [
    "mobile",
    "CSS",
    "react",
    "javascript",
    "php",
    "angular",
    "python",
    "sketch",
    "ui",
    "html",
    "figma",
  ];

  const dynamicImage = (tag) => {
   
    var returnvalue;
    switch (tag) {
      case "react":
        returnvalue = <FontAwesomeIcon style={{margin: '0vw 2vw'}} icon={faReact} size="lg" />;
        break;
      case "javascript":
        returnvalue = <FontAwesomeIcon style={{margin: '0vw 2vw'}} icon={faJsSquare} size="lg" />;
        break;
      case "php":
        returnvalue = <FontAwesomeIcon style={{margin: '0vw 2vw'}} icon={faPhp} size="lg" />;
        break;
      case "mobile":
        returnvalue = <FontAwesomeIcon style={{margin: '0vw 2vw'}} icon={faMobileAlt} size="lg"/>;
        break;
      case "CSS":
        returnvalue = <FontAwesomeIcon style={{margin: '0vw 2vw'}} icon={faCss3Alt} size="2x"/>;
        break;
      case "python":
        returnvalue = <FontAwesomeIcon  style={{margin: '0vw 2vw'}} icon={faPython} size="lg"/>;
        break;
      case "angular":
        returnvalue = <FontAwesomeIcon style={{margin: '0vw 2vw'}} icon={faAngular} size="lg"/>;
        break;
      case "sketch":
        returnvalue = <FontAwesomeIcon style={{margin: '0vw 2vw'}} icon={faSketch} size="lg"/>;
        break;
      case "html":
        returnvalue = <FontAwesomeIcon style={{margin: '0vw 2vw'}} icon={faHtml5} size="2x"/>;
        break;
      case "figma":
        returnvalue = <FontAwesomeIcon style={{margin: '0vw 2vw'}} icon={faFigma} size="lg"/>;
        break;
      case "ui":
        returnvalue = <FontAwesomeIcon  style={{margin: '0vw 2vw'}} icon={faUikit} size="lg"/>;
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
            <h4>{tag.name.toUpperCase()}</h4>
          </div>
        
          <Link to={tagTo}>
            <FontAwesomeIcon
              className="icons"
              icon={faAngleDoubleRight} size="lg"
              style={{ style: "none", marginRight:'2vw' }}
            />
          </Link>
        </div>
      ) : (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
        
        <div style={{display: "flex", alignItems: 'center'}}>
        {dynamicImage(tag.name)}
          <h4>{tag.name.toUpperCase()}</h4>
          </div>
          <div className='check'>
          <FontAwesomeIcon className="icons" icon={faCheck} />
          </div>
        </div>
      )}
    </>
  );
};

export default TechButton;
