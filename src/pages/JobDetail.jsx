import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
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
import { MDBBtn } from "mdbreact";

const tags = [
  "mobile",
  "css",
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

export class JobDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      job: this.props.location.job,
      allJobs: [],
      foundJob: null,
    };
    console.log(this.state.job);
  }

  componentDidMount() {
    this.getAllJobs();
  }

  saveJob = (job) => {
    const userId = this.props.user._id;
    axios
      .post(`${process.env.REACT_APP_API_URL}/job/job-detail`, {job, userId})
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getAllJobs() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/user/pending`)
      .then((jobs) => {
        const foundJob = jobs.data.find((job) => {
          return job.apiId === this.props.location.job.id;
        });

        this.setState({
          allJobs: jobs.data,
          foundJob: foundJob,
        });
      })
      .catch((error) => {
        console.log(error);
      });
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
      case "css":
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
            {this.state.job.salary === "" ? (
              <>
                <Card.Title>Salary</Card.Title>
                <Card.Text>{this.state.job.salary}</Card.Text>
              </>
            ) : (
              <>
                <Card.Title>Salary</Card.Title>
                <Card.Text>Unavailable</Card.Text>
              </>
            )}
          </Card.Body>
          <Card.Footer className="text-muted">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={this.state.job.url}
              style={{ style: "none", fontWeight: "bold", color: "black" }}
            >
              Check out more
            </a>
          </Card.Footer>
        </Card>

        <h4 className="tech-header">TECHNOLOGIES</h4>

        {this.state.job.tags &&
          this.state.job.tags.map((tag, i) => {
            return tags.includes(tag.toLowerCase()) ? (
              <div
                key={i}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div
                  style={{
                    marginTop: "2vw",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {this.dynamicImage(tag.toLowerCase())}
                  <h4>{tag.toUpperCase()}</h4>
                </div>
              </div>
            ) : (
              <br style={{ display: "none" }} key={i} />
            );
          })}
        {this.state.foundJob ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "2vw 0vw",
            }}
          >
            <Link to={"/pending"}>
              <MDBBtn color="light-grey" size="sm">
                You already applied
              </MDBBtn>
            </Link>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "2vw 0vw",
            }}
          >
            <Link to={"/pending"}>
              <MDBBtn
                onClick={() => this.saveJob(this.state.job)}
                color="light-grey"
                size="sm"
              >
                Save job as draft
              </MDBBtn>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default withAuth(JobDetail);
