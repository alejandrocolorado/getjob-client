import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import apiService from "./../../src/services/apiService";



export class Portfolio extends Component {
    state = {
        portfolio: []
    }

    
    getPortfolio = async () => {
        const portfolioObj = await apiService.getAllPortfolio();

        this.setState ({
            Portfolio: portfolioObj.data
        })
    }

    componentDidMount() {
        this.getPortfolio();
      }


    render() {
        return (
            <div>
            <h3>Completed Job Applications</h3>
            <div>
              {this.state.portfolio.map((portfolioItem) => {
                  
                return (
                  <div key={portfolioItem._id}>
                      <h3>{portfolioItem.title}</h3>
                      <ul>
                          {portfolioItem.technologies.map((tag) =>{
                              return (<li>{tag.name}</li>)
                          })}
                      </ul>
                  </div>
                );
              })}
            </div>

          </div>
        )
    }
}

export default withAuth(Portfolio)