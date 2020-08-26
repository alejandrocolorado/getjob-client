import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import apiService from "./../../src/services/apiService";
import axiosRequestFunctions from "../lib/auth-service";

export class PendingJobs extends Component {
  state = {
    pendingJobs: [],
  };

  componentDidMount() {
    this.getPendingJobs();
  }

  getPendingJobs = async () => {
    const pendingJobsObj = await apiService.getAllPendingJobs();
    console.log("Aqui------->", pendingJobsObj);
    this.setState({
      pendingJobs: pendingJobsObj.data,
    });
  };

  deleteJob = (jobId) => {
    
    const filtered = this.state.pendingJobs.filter((job) => job._id !== jobId);
    this.setState({
      pendingJobs: filtered,
    });
  };

  render() {
    return (
      <div>
        <h2>Pending Job Applications</h2>
        <div>
          {this.state.pendingJobs.map((job) => {
            return (
              <div key={job._id}>
                <Link to={`/job-detail-saved/${job._id}`}>
                  <h3>{job.title}</h3>
                </Link>
                <p>{job.company_name}</p>
                <ul>
                  {job.technologies.map((tag, i) => {
                    return (
                      <div>
                        {(tag.name === '' ) ?
                        <br/> : <li key={i}>{tag.name}</li>
                        }
                      </div>
                      
                    );
                  })}
                </ul>
                <button onClick={() => this.deleteJob(job._id)}>Delete</button>

                {/* <p style={{maxWidth: '400px'}} >{project.description} </p> */}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default withAuth(PendingJobs);
