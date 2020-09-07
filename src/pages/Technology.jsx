import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import techObjs from "./../helpers/techLinks.json";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import {
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
} from "mdbreact";

export class Technology extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: this.props.location.tag,
      tech: "",
      githubLink: "",
      job: this.props.location.job,
    };
  }

  componentDidMount() {
    this.getTech();
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  getTech() {
    techObjs.map((elem) => {
      if (elem.name === this.state.tag.name.toLowerCase()) {
        this.setState({
          tech: elem,
        });
      }
    });
  }

  displayCourses() {
    const cursesBlock = document.getElementById("courses");
    //window.scrollTo(0, 0)
    if (cursesBlock.style.display === "none") {
      cursesBlock.style.display = "block";
    } else {
      cursesBlock.style.display = "none";
    }
  }

  UpdateJobAndPortfolio = (e) => {
    e.preventDefault();
    const user = this.props.user;
    const job = this.state.job;
    const githubLink = this.state.githubLink;
    const tag = this.state.tag;
    axios
      .post(`${process.env.REACT_APP_API_URL}/job/job-detail/technology`, {job, user, githubLink, tag})
      .then((response) => {
        console.log(response);
        this.props.history.push(`/job-detail-saved/${this.state.job._id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  touppe;

  render() {
    return (
      <div className="js-content section cover">
        <div className="job-title">
          <h3>{this.state.tag.name.toUpperCase()}</h3>
        </div>

        <Card className="text-center">
          <Card.Header>We require a relevant project on GitHub</Card.Header>
        </Card>

        <form
          style={{ margin: "2vw 0vw" }}
          onSubmit={this.UpdateJobAndPortfolio}
          className="needs-validation"
          noValidate
        >
          <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
            Put the link
          </label>
          <MDBInput
            background
            size="lg"
            type="text"
            name="githubLink"
            value={this.state.githubLink}
            onChange={this.handleChange}
            id="defaultFormRegisterNameEx"
            className="form-control"
          />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <MDBBtn type="submit" value="Submit" color="blue-grey">
              Save the link
            </MDBBtn>
          </div>
        </form>

        <p style={{ textAlign: "center", width: "95%" }}>
          <strong>No relevant project yet?</strong> No worries, create one with
          these awesome Udemy courses and then insert your repository
        </p>

        <Button
          style={{ marginBottom: "3vw", marginTop: '1vw' }}
          className="button-options"
          onClick={this.displayCourses}
        >
          Show me the goods!
        </Button>

        <div
          id="courses"
          className="container-course"
          style={{ display: "none" }}
        >
          {this.state.tech &&
            this.state.tech.courses.map((course, i) => {
              return (
                <MDBCard style={{ margin: "2vw" }}>
                  <MDBCardImage
                    src={course.img}
                    alt="MDBCard image cap"
                    top
                    hover
                    overlay="white-slight"
                  />
                  <MDBCardBody>
                    <MDBCardTitle style={{ textAlign: "center" }} tag="h5">{course.title}</MDBCardTitle>

                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={course.link}
                    >
                      <MDBBtn style={{ display: "flex", justifyContent: "center" }} color="primary" size="md">
                        Ask for more
                      </MDBBtn>{" "}
                    </a>
                  </MDBCardBody>
                </MDBCard>
              );
            })}
        </div>
      </div>
    );
  }
}

export default withAuth(Technology);
