import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleRight,
  faReact,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";
import { MDBBtn } from "mdbreact";

import axios from "axios";

export class ProjectDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      job: this.props.location.job,
    };
  }
  dynamicImage = (tag) => {
    tag.toLowerCase();
    switch (tag) {
      case "react":
        return <FontAwesomeIcon icon={faCoffee} />;
        break;
      case "react":
        return <FontAwesomeIcon icon={faCoffee} />;
        break;

      default:
        break;
    }
  };
  render() {
    console.log(this.state);
    return (
      <div className="js-content section cover">
        <h3>{this.state.job.title}</h3>
        <section>
          <div>
            <h5>Company name</h5>
            <p>{this.state.job.company_name}</p>
          </div>
          <div>
            <h5>Job type</h5>
            <p>{this.state.job.title}</p>
          </div>
          <div>
            <h5>Offer location</h5>
            <p>{this.state.job.candidate_required_location}</p>
          </div>
          <div>
            <h5>Publication date</h5>
            <p>{this.state.job.publication_date}</p>
          </div>
          <div>
            <h5>Publication date</h5>
            <p>{this.state.job.salary}</p>
          </div>
          <div>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={this.state.job.url}
            >
              Check out more
            </a>
          </div>
        </section>

        <section>
          <h2>TECHNOLOGIES</h2>
          {this.state.job.tags.map((tag, i) => {
            return (
              <div key={i}>
                {this.dynamicImage(tag)}

                <h4>{tag}</h4>
                <Link to={`/technology/${tag.toLowerCase()}`}>
                  <FontAwesomeIcon
                    className="icons"
                    icon={faAngleDoubleRight}
                    style={{ style: "none" }}
                  />
                </Link>
              </div>
            );
          })}
        </section>
        <Link to={"/pending"}>
          <MDBBtn color="light-grey" size="sm">
            Start application
          </MDBBtn>
        </Link>
      </div>
    );
  }
}

export default withAuth(ProjectDetail);
