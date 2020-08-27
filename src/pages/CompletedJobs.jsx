import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import apiService from "./../../src/services/apiService";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBContainer,
} from "mdbreact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
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
const tags = [
  "frontend",
  "CSS",
  "react",
  "javascript",
  "php",
  "node.js",
  "python",
  "sketch",
  "ui",
  "html",
  "figma",
];

export class CompletedJobs extends Component {
  state = {
    completedJobs: [],
  };

  componentDidMount() {
    this.getCompletedJobs();
  }

  getCompletedJobs = async () => {
    const completedJobsObj = await apiService.getAllCompletedJobs();
    //console.log("Aqui------->", CompletedJobsObj)
    this.setState({
      completedJobs: completedJobsObj.data,
    });
  };

  deleteJob = (jobId) => {
    console.log(jobId);
    console.log(this.state);
    const filtered = this.state.completedJobs.filter(
      (job) => job._id !== jobId
    );
    this.setState({
      completedJobs: filtered,
    });
  };

  dynamicImage = (tag) => {
    var returnvalue;
    switch (tag) {
      case "react":
        returnvalue = (
          <FontAwesomeIcon
            style={{ margin: "0vw 2vw" }}
            icon={faReact}
            size="lg"
            style={{ color: "white" }}
          />
        );
        break;
      case "javascript":
        returnvalue = (
          <FontAwesomeIcon
            style={{ margin: "0vw 2vw" }}
            icon={faJsSquare}
            size="lg"
          />
        );
        break;
      case "php":
        returnvalue = (
          <FontAwesomeIcon
            style={{ margin: "0vw 2vw" }}
            icon={faPhp}
            size="lg"
          />
        );
        break;
      case "node.js":
        returnvalue = (
          <FontAwesomeIcon
            style={{ margin: "0vw 2vw" }}
            icon={faNodeJs}
            size="lg"
          />
        );
        break;
      case "CSS":
        returnvalue = (
          <FontAwesomeIcon
            style={{ margin: "0vw 2vw" }}
            icon={faCss3Alt}
            size="2x"
          />
        );
        break;
      case "python":
        returnvalue = (
          <FontAwesomeIcon
            style={{ margin: "0vw 2vw" }}
            icon={faPython}
            size="lg"
          />
        );
        break;
      case "frontend":
        returnvalue = (
          <FontAwesomeIcon
            style={{ margin: "0vw 2vw" }}
            icon={faDesktop}
            size="lg"
          />
        );
        break;
      case "sketch":
        returnvalue = (
          <FontAwesomeIcon
            style={{ margin: "0vw 2vw" }}
            icon={faSketch}
            size="lg"
          />
        );
        break;
      case "html":
        returnvalue = (
          <FontAwesomeIcon
            style={{ margin: "0vw 2vw" }}
            icon={faHtml5}
            size="2x"
          />
        );
        break;
      case "figma":
        returnvalue = (
          <FontAwesomeIcon
            style={{ margin: "0vw 2vw" }}
            icon={faFigma}
            size="lg"
          />
        );
        break;
      case "ui":
        returnvalue = (
          <FontAwesomeIcon
            style={{ margin: "0vw 2vw" }}
            icon={faUikit}
            size="lg"
          />
        );
        break;
      default:
        break;
    }
    return returnvalue;
  };
  render() {
    return (
      <div className="js-content section cover">
        <div className="job-title">
          <h3>Completed Job Applications</h3>
        </div>
        <MDBContainer>
          {this.state.completedJobs.map((job) => {
            return (
              <MDBCard
                style={{ marginTop: "1rem" }}
                className="text-center"
                key={job.id}
              >
                <MDBCardBody>
                  <MDBCardTitle>{job.company_name}</MDBCardTitle>
                  <MDBCardText>{job.title}</MDBCardText>
                  <div className="techs">
                    {job.tags &&
                      job.tags.map((tag, i) => {
                        return tags.includes(tag) ? (
                          <div className="childrenTechs" key={i}>
                            {this.dynamicImage(tag)}
                          </div>
                        ) : (
                          <br style={{ display: "none" }} key={i} />
                        );
                      })}
                  </div>
                  <hr />
                  <MDBBtn
                    onClick={() => this.deleteJob(job._id)}
                    color="red"
                    size="sm"
                  >
                    Delete it
                  </MDBBtn>
                 
                    <MDBBtn color="blue-grey" size="sm">
                     Awaiting answer
                    </MDBBtn>
                
                </MDBCardBody>
              </MDBCard>
            );
          })}
        </MDBContainer>
      </div>
    );
  }
}

export default withAuth(CompletedJobs);
