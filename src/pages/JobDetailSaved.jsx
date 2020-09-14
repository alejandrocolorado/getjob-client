import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { withAuth } from "../lib/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt,  } from "@fortawesome/free-solid-svg-icons";
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
import axios from "axios";
import TechButton from "./../components/TechButton";

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

export class JobDetailSaved extends Component {
  state = {
    job: "",
    isCompleted: false,
  };

  componentDidMount() {
    this.getJobApplication();
  }

  getJobApplication() {
    const jobId = this.props.match.params.id;
    axios
      .get(`${process.env.REACT_APP_API_URL}/job/job-detail-saved/${jobId}`)
      .then((response) => {
        let foundEmptyTech = response.data.technologies.some((tech) => {
          return tech.url.length === 0;
        });

        this.setState({
          job: response.data,
          isCompleted: !foundEmptyTech,
        });
      })
      .catch((error) => {
        this.setState({
          job: [],
        });
      });
  }

  updateJob() {
    const jobId = this.props.match.params.id;
    axios
      .post(`${process.env.REACT_APP_API_URL}/job/job-detail-saved/${jobId}` )
      .then((response) => {
        console.log("Aqui------->", response);
      })
      .catch((err) => {
        console.log(err);
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
    const { isCompleted } = this.state;

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
        <p style={{ margin: "1vw 0vw 2vw" }} className="search-content">
          Show us your skills and apply
        </p>

        {this.state.job.technologies &&
          this.state.job.technologies.map((tag, i) => {
            return <TechButton job={this.state.job} tag={tag} key={i} />;
          })}
        {isCompleted ? (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "2vw 0vw",
              }}
            >
              <Link to={"/completed"}>
                <MDBBtn
                className="button-options"
                  style={{ margin: "2vw 0vw" }}
                  onClick={this.updateJob(this.state.job._id)}
                  color="light-grey"
                  size="sm"
                >
                  Complete the Application
                </MDBBtn>
              </Link>
            </div>
          </>
        ) : <div style={{marginBottom: '3vw'}} ></div>}
      </div>
    );
  }
}
export default withAuth(JobDetailSaved);


