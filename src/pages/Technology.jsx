import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import techObjs from "./../helpers/techLinks.json";
import axios from "axios";
import { Card } from "react-bootstrap";
import {
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer,
} from "mdbreact";
import { Link } from "react-router-dom";

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
      .post("http://localhost:4000/job/job-detail/technology", {
        job,
        user,
        githubLink,
        tag,
      })
      .then((response) => {
        console.log(response);
        this.props.history.push(`/job-detail-saved/${this.state.job._id}`)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <h3 className="job-title">{this.state.tag.name}</h3>

        <Card className="text-center">
          <Card.Header>We require a relevant project on GitHub</Card.Header>
        </Card>

        <MDBCol>
          <form
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
            <MDBBtn type="submit" value="Submit" color="blue-grey">
              Blue-grey
            </MDBBtn>
          </form>
        </MDBCol>

        <p>
          <strong>No relevant project yet?</strong> No worries, create one with
          these awesome Udemy courses and then insert your repository
        </p>
        <button className="buttons-courses" onClick={this.displayCourses}>
          Show me the goods!
        </button>
        <div
          id="courses"
          className="container-course"
          style={{ display: "none" }}
        >
          {this.state.tech &&
            this.state.tech.courses.map((course, i) => {
              return (
                <MDBCard>
                  <MDBCardImage
                    src={course.img}
                    alt="MDBCard image cap"
                    top
                    hover
                    overlay="white-slight"
                  />
                  <MDBCardBody>
                    <MDBCardTitle tag="h5">Panel title</MDBCardTitle>

                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={course.link}
                    >
                      <MDBBtn color="primary" size="md">
                        read more
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

{
  /* <div
id="courses"
className="container-course"
style={{ display: "none" }}
>
<MDBContainer>
  <MDBCarousel
    length={2}
    showControls={true}
    showIndicators={true}
    className="z-depth-1"
  >
    <MDBCarouselInner      id="courses"
className="container-course"
style={{ display: "none" }}>
      {this.state.tech &&
        this.state.tech.courses.map((course, i) => {
          console.log(course);
          return (
            <MDBCarouselItem itemId={i}>
              <MDBView>
                <img
                  className="d-block w-100"
                  src={course.img}
                  alt="First slide"
                />
                <MDBCardTitle tag="h5">{course.title}</MDBCardTitle>
              </MDBView>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={course.link}
              >
                {" "}
                <MDBBtn color="primary" size="md">
                  Go to Udemy
                </MDBBtn>{" "}
              </a>
            </MDBCarouselItem>
          );
        })}
    </MDBCarouselInner>
  </MDBCarousel>
</MDBContainer>
</div> */
}
