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
import axios from "axios";
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
export class PendingJobs extends Component {
  state = {
    pendingJobs: [],
  };

  componentDidMount() {
    this.getPendingJobs();
  }

  dynamicImage = (tag) => {
    tag.toLowerCase();
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
  getPendingJobs = async () => {
    const pendingJobsObj = await apiService.getAllPendingJobs();

    this.setState({
      pendingJobs: pendingJobsObj.data,
    });
  };

  deleteJob = (jobId) => {
    console.log(jobId);
    axios
    .delete(`${process.env.REACT_APP_API_URL}/user/pending/${jobId}`)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
    
    const filtered = this.state.pendingJobs.filter((job) => job._id !== jobId);
    console.log(filtered);
    this.setState({
      pendingJobs: filtered,
    });
  };

  render() {
    return (
      <div className="js-content section cover">
        <div className="titles">
          <h2>Pending Jobs</h2>
        </div>
        <MDBContainer>
          {this.state.pendingJobs.map((job) => {
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
                  <Link to={`/job-detail-saved/${job._id}`}>
                    <MDBBtn color="success" size="sm">
                      Complete it
                    </MDBBtn>
                  </Link>
                </MDBCardBody>
              </MDBCard>
            );
          })}
        </MDBContainer>
      </div>
    );
  }
}

export default withAuth(PendingJobs);
