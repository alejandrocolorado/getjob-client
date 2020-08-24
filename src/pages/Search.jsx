import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import axios from "axios";
import { Link } from "react-router-dom";

class Search extends Component {
  state = {
    jobs: [],
  };

  componentDidMount() {
    this.getJobList();
  }

  getJobList() {
    axios({
      method: "post",
      url: "http://localhost:4000/api/test",
      data: {
        query: window.location.search,
      },
    })
      .then((response) => {
        this.setState({
          jobs: response.data,
        });
      })
      .catch((error) => {
        this.setState({
          jobs: [],
        });
      });
  }

  render() {
    return (
      <div className="js-content section cover">
        <h1>Welcome {this.props.user.firstname}</h1>

        {this.state.jobs.map((job) => {
          let newTo = {
            pathname: `/project-detail/${job.id}`,
            job,
          };
          return (
            <div key={job.id}>
              <a rel="noopener noreferrer" target="_blank" href={job.url}>
                {job.url}
              </a>
              <ul>
                <li>{job.tags[0]}</li>
                <li>{job.tags[1]}</li>
                <li>{job.tags[2]}</li>
              </ul>
              <Link to={newTo}>Check it out!</Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default withAuth(Search);
