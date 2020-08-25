import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleRight,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faJsSquare,
  faPhp,
  faNodeJs,
  faPython,
  faCss3Alt,
  faSketch,
} from "@fortawesome/free-brands-svg-icons";
import { MDBBtn } from "mdbreact";

const tags = [
  "frontend",
  "CSS",
  "react",
  "javascript",
  "php",
  "node.js",
  "python",
  "sketch",
  "UI/UX",
  "html",
  "figma",
];

export class ProjectDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      job: this.props.location.job,
    };
  }
  dynamicImage = (tag) => {
    tag.toLowerCase();
    switch (tag) {
      case "react":
        return <FontAwesomeIcon icon={faReact} />;
        break;
      case "javascript":
        return <FontAwesomeIcon icon={faJsSquare} />;
        break;
      case "php":
        return <FontAwesomeIcon icon={faPhp} />;
        break;
      case "node.js":
        return <FontAwesomeIcon icon={faNodeJs} />;
        break;
      case "CSS":
        return <FontAwesomeIcon icon={faCss3Alt} />;
        break;
      case "python":
        return <FontAwesomeIcon icon={faPython} />;
        break;
      case "frontend":
        return <FontAwesomeIcon icon={faDesktop} />;
        break;
      case "sketch":
        return <FontAwesomeIcon icon={faSketch} />;
        break;
      case "sketch":
        return <FontAwesomeIcon icon={faSketch} />;
        break;
      default:
        break;
    }
  };
  render() {
    console.log(this.state);
    return (
      <div className="js-content section cover">
        <h3>{this.state.job.title}</h3>
        <section>
          <div>
            <h5>Company name</h5>
            <p>{this.state.job.company_name}</p>
          </div>
          <div>
            <h5>Job type</h5>
            <p>{this.state.job.title}</p>
          </div>
          <div>
            <h5>Offer location</h5>
            <p>{this.state.job.candidate_required_location}</p>
          </div>
          <div>
            <h5>Publication date</h5>
            <p>{this.state.job.publication_date}</p>
          </div>
          <div>
            <h5>Publication date</h5>
            <p>{this.state.job.salary}</p>
          </div>
          <div>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={this.state.job.url}
            >
              Check out more
            </a>
          </div>
        </section>

        <section>
          <h2>TECHNOLOGIES</h2>

          {this.state.job.tags.map((tag, i) => {
            return tags.includes(tag) ? (
              <div key={i}>
                {this.dynamicImage(tag)}
                <h4>{tag}</h4>
                <Link to={`/technology/${tag.toLowerCase()}`}>
                  <FontAwesomeIcon
                    className="icons"
                    icon={faAngleDoubleRight}
                    style={{ style: "none" }}
                  />
                </Link>
                {console.log(this.state.job.tags)}
              </div>
            ) : (
              <br key={i} />
            );
          })}
        </section>
        <Link to={"/pending"}>
          <MDBBtn color="light-grey" size="sm">
            Start application
          </MDBBtn>
        </Link>
      </div>
    );
  }
}

export default withAuth(ProjectDetail);
