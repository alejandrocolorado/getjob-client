import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleRight
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export class JobDetail extends Component {
  
  state = {
      job: "",
    };
  

  componentDidMount() {
    this.getJobApplication();
  }

  getJobApplication() {
    axios
      .get('http://localhost:4000/job/job-detail/:id')
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

  // updateJob(jobId) {
  //   axios
  //     .post("http://localhost:4000/job/job-detail", jobId)
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  

  render() {
    console.log(this.props);
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
            let tagTo = {
              pathname: `/technology/${tag.toLowerCase()}`,
              tag,
            };
            return (
              <div key={i}>
                <img src="" alt="tech logo" style={{ width: 50 }} />
                <h4>{tag}</h4>
                <Link to={tagTo}>
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
        <button onClick={this.updateJob(this.job._id)}>Complete Application</button>
      </div>
    );
  }
}
export default withAuth(JobDetail);
