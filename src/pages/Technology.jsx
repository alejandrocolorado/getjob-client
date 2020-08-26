import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import techObjs from "./../helpers/techLinks.json";
import axios from "axios";
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
      if (elem.name === this.state.tag.name) {
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
    const user = this.props.user
    const job = this.state.job
    const githubLink = this.state.githubLink
    const tag = this.state.tag
    axios
      .post("http://localhost:4000/job/job-detail/technology", {job, user, githubLink, tag})
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    
    return (
      <div>
        <h2>{this.state.tag.name}</h2>

        <p>We require a relevant project on GitHub </p>

        <form onSubmit={this.UpdateJobAndPortfolio}>
        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
          Here goes your link
        </label>
        <input
          type="text"
          name="githubLink"
          value={this.state.githubLink}
          onChange={this.handleChange}
          id="defaultFormRegisterNameEx"
          className="form-control"
        />
        <input type="submit" value="Submit" />
        </form>
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
        {this.state.tech && this.state.tech.courses.map((course, i) => {
          return (
            <article key={i}>
            <img src={course.img} alt="course" style={{width: 125}}/>
            <h4>{course.title}</h4>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={course.link}
            >
              Go to udemy
            </a>
            </article>
          )
        })}
        </div>

    

        {/* <button onClick={this.UpdateJobAndPortfolio()}>
        <Link to={"/pending"}>
          <MDBBtn color="light-grey" size="sm">
          Submit
          </MDBBtn>
        </Link>
        </button> */}
      </div>
    );
  }
}

export default withAuth(Technology);
