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
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
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
import axios from "axios";
const tags = [
  "angular",
  "CSS",
  "react",
  "javascript",
  "php",
  "mobile",
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
    var returnvalue;
    switch (tag) {
      case "react":
        returnvalue = (
          <FontAwesomeIcon
            style={{ margin: "0vw 2vw" }}
            icon={faReact}
            size="lg"
          
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
      case "angular":
        returnvalue = (
          <FontAwesomeIcon
            style={{ margin: "0vw 2vw" }}
            icon={faAngular}
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
      case "mobile":
        returnvalue = (
          <FontAwesomeIcon
            style={{ margin: "0vw 2vw" }}
            icon={faMobileAlt}
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
        <div className="job-title">
          <h3>Pending Jobs</h3>
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
