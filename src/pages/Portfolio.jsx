import React, { Component } from "react";

import { withAuth } from "../lib/AuthProvider";
import apiService from "./../../src/services/apiService";

export class Portfolio extends Component {
  state = {
    portfolio: [],
  };

  componentDidMount() {
    this.getPortfolio();
  }

  getPortfolio = async () => {
    const portfolioObj = await apiService.getAllPortfolioItems();

    this.setState({
      portfolio: portfolioObj.data,
    });
  };

  deletePortfolioUrl = (url) => {
    //console.log(url);
    const techValues = this.state.portfolio.map((item) =>
      Object.values(item.technologies[0])
    );
    techValues.map((tech) => {
      if (tech.url === url) {
        this.setState({
          techUrl: techValues,
        });
      }
    });
  };

  render() {
    return (
      <div>
        <h3>Portfolio</h3>
        <div>
        
          {this.state.portfolio.map((portfolioItem) => {
            console.log(portfolioItem);
            return (
              <ul>
                {portfolioItem.technologies.map((tech) => {
                  return (
                    <li key={portfolioItem._id}>
                      <h4>{tech.name}</h4>
                      <div>
                        <p>{tech.url}</p>
                        <button
                          onClick={() => this.deletePortfolioUrl(tech.url)}
                        >
                          Delete
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            );
          })}
          
        </div>
      </div>
    );
  }
}

export default withAuth(Portfolio);
