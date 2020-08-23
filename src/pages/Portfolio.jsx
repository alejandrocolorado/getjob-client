import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import apiService from "./../../src/services/apiService";



export class Portfolio extends Component {
    state = {
        portfolio: []
    }

    
    getPortfolio = async () => {
        const portfolioObj = await apiService.getAllPortfolioItems();
        console.log(portfolioObj)
        this.setState ({
            portfolio: portfolioObj.data
        })
    }

    componentDidMount() {
        this.getPortfolio();
      }


    render() {
        return (
            <div>
            <h3>Portfolio</h3>
            <div>
              {this.state.portfolio.map((portfolioItem) => {
                  
                return (
                  <div key={portfolioItem._id}>
                      <h4>{portfolioItem.technologies.name}</h4>
                      <p>{portfolioItem.technologies.url}</p>
                  </div>
                );
              })}
            </div>

          </div>
        )
    }
}

export default withAuth(Portfolio)