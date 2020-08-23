import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import apiService from "./../../src/services/apiService";



export class CompletedJobs extends Component {
    state = {
        completedJobs: []
    }

    
    getCompletedJobs = async () => {
        const completedJobsObj = await apiService.getAllCompletedJobs();
        //console.log("Aqui------->", CompletedJobsObj)
        this.setState ({
            completedJobs: completedJobsObj.data
        })
    }

    componentDidMount() {
        this.getCompletedJobs();
      }


    render() {
        return (
            <div>
            <h3>Completed Job Applications</h3>
            <div>
              {this.state.completedJobs.map((job) => {
                  
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

export default withAuth(CompletedJobs)