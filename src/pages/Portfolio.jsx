import React, { Component } from "react";

import { withAuth } from "../lib/AuthProvider";
import apiService from "./../../src/services/apiService";
import { MDBInput } from "mdbreact";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export class Portfolio extends Component {
  state = {
    portfolio: [],
    url: "",
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

  handleFormSubmit = (event, Id) => {
    event.preventDefault();

    const portfolioId = this.state.portfolio[0]._id;
    const techId = this.state.portfolio[0].technologies[0]._id;

    axios
    .post(`${process.env.REACT_APP_API_URL}/user/portfolio`, { portfolioId, Id })
    .then((response) => {
      console.log(this.state.portfolio);
      const copyPortfolio = [...this.state.portfolio];
      copyPortfolio.technologies[0].url = "";
      console.log(copyPortfolio.technologies);
      this.setState({
        portfolio: copyPortfolio,
      });
      // setTimeout(() => {
      //   this.props.history.push("/profile");
      // }, 1500);
    })
    .catch((error) => {
      this.setState({
        ...this.state,
        messages: "Error",
      });
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <>
        <h3
          className="job-title"
          style={{ textAlign: "center", fontWeight: "bold" }}
        >
          Portfolio
        </h3>
        <div>
          {this.state.portfolio.map((portfolioItem, i) => {
            return (
              <ul key={i} className="portfolio-list">
                {portfolioItem.technologies.map((tech) => {
                  return (
                    <div key={portfolioItem._id} className="portfolio-item">
                      <h5 className="tech-name">{tech.name.toUpperCase()}</h5>
                      <form
                        onSubmit={(event) =>
                          this.handleFormSubmit(event, tech._id)
                        }
                      >
                        <MDBInput
                          type="text"
                          name="url"
                          value={tech.url}
                          onChange={this.handleChange}
                          id="defaultFormRegisterNameEx"
                          className="form-control"
                        />
                        <label
                          htmlFor="defaultFormRegisterEmailEx"
                          className="grey-text"
                        ></label>

                        <button
                          type="submit"
                          className="trash-btn"
                          value="delete"
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </form>
                    </div>
                  );
                })}
              </ul>
            );
          })}
        </div>
      </>
    );
  }
}

export default withAuth(Portfolio);
