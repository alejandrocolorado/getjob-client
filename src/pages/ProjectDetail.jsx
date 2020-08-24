import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import axios from "axios";

export class ProjectDetail extends Component {
    constructor (props) {
        super(props)
        this.state = {
            job: this.props.location.job
        }
    }
    render() {
        console.log(this.state)
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
                    <Link to={this.state.job.url}>Check out more</Link>
                </div>
                </section>
                <section>
                    <h2>TECHNOLOGIES</h2>
                    
                </section>
            </div>
          
        )
    }
}

export default withAuth(ProjectDetail)
