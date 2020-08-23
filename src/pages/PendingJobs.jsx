import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import apiService from "./../../src/services/apiService";



export class PendingJobs extends Component {
    state = {
        pendingJobs: []
    }

    
    getPendingJobs = async () => {
        const pendingJobsObj = await apiService.getAllPendingJobs();
        //console.log("Aqui------->", pendingJobsObj)
        this.setState ({
            pendingJobs: pendingJobsObj.data
        })
    }

    componentDidMount() {
        this.getPendingJobs();
      }


    render() {
        return (
            <div>
            <h2>Pending Job Applications</h2>
            <div>
              {this.state.pendingJobs.map((job) => {
                  
                return (
                  <div key={job._id}>
                    <Link to={`/job-detail/${job._id}`}>
                      <h3>{job.title}</h3>
                      <p>{job.company_name}</p>
                      <ul>
                          {job.technologies.map((tag) =>{
                              return (<li>{tag.name}</li>)
                          })}
                      </ul>
                    </Link>
                    {/* <p style={{maxWidth: '400px'}} >{project.description} </p> */}
                  </div>
                );
              })}
            </div>

          </div>
        )
    }
}

export default withAuth(PendingJobs)
