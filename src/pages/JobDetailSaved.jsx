import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { withAuth } from "../lib/AuthProvider";
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
import { MDBBtn } from "mdbreact";
import axios from "axios";
import TechButton from "./../components/TechButton";

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

export class JobDetailSaved extends Component {
  state = {
    job: "",
  };

  componentDidMount() {
    this.getJobApplication();
  }

  getJobApplication() {
    const jobId = this.props.match.params.id;
    axios
      .get(`http://localhost:4000/job/job-detail-saved/${jobId}`)
      .then((response) => {
        this.setState({
          job: response.data,
        });
      })
      .catch((error) => {
        this.setState({
          job: [],
        });
      });
  }

  updateJob(jobId) {
    axios
      .post("http://localhost:4000/job/job-detail", jobId)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
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

  render() {
    return (
      <div className="js-content section cover">
        <div className="job-title">
          <h3>{this.state.job.title}</h3>
        </div>
        <Card className="text-center">
          <Card.Body>
            <Card.Title>Company name</Card.Title>
            <Card.Text>{this.state.job.company_name}</Card.Text>
            <Card.Title>Job type</Card.Title>
            <Card.Text>{this.state.job.title}</Card.Text>
            <Card.Title>Offer location</Card.Title>
            <Card.Text>{this.state.job.candidate_required_location}</Card.Text>
            <Card.Title>Publication date</Card.Title>
            <Card.Text>{this.state.job.publication_date}</Card.Text>
            {this.state.job.salary !== "" ? (
              <>
                <Card.Title>Salary</Card.Title>
                <Card.Text>{this.state.job.salary}</Card.Text>
              </>
            ) : null}
          </Card.Body>
          <Card.Footer className="text-muted"></Card.Footer>
        </Card>
        <div className="job-title">
          <span>
            {" "}
            <h3>TECHNOLOGIES</h3>
          </span>
          <div className="technologies">
            {this.state.job.technologies &&
              this.state.job.technologies.map((tag, i) => {
                return <TechButton job={this.state.job} tag={tag} key={i} />;
              })}
          </div>
          <div>
            <Link to={"/pending"}>
              <MDBBtn
                onClick={this.updateJob(this.state.job._id)}
                color="light-grey"
                size="sm"
              >
                Save job as draft
              </MDBBtn>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default withAuth(JobDetailSaved);
