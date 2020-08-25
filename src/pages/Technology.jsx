import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import techObjs from "./../helpers/techLinks.json";

export class Technology extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: this.props.location.tag,
      tech: "",
      githubLink: ""
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

  render() {
    
    return (
      <div>
        <h2>{this.state.tag.name}</h2>

        <p>We require a relevant project on GitHub </p>

        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
          Here goes your link
        </label>
        <input
          type="text"
          name="githubLink"
          //value={githubLink}
          onChange={this.handleChange}
          id="defaultFormRegisterNameEx"
          className="form-control"
        />
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
            <img src={course.img} alt="course image" style={{width: 150}}/>
            <h3>{course.title}</h3>
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
      </div>
    );
  }
}

export default withAuth(Technology);
