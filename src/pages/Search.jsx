import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBContainer,
} from "mdbreact";
import { Link } from "react-router-dom";
import axios from "axios";
import queryString from "query-string";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: [],
    };
  }

  componentDidMount() {
    this.getJobList();
  }

  getJobList(props) {
    const queryValues = queryString.parse(this.props.location.search);
    console.log(queryValues);
    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/api/test`,
      data: {
        query: this.props.location.search,
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
        <MDBContainer>
          {this.state.jobs.map((job) => {
            let newTo = {
              pathname: `/job-detail/${job.id}`,
              job,
            };
            return (
              <MDBCard
                style={{ marginTop: "1rem" }}
                className="text-center"
                key={job.id}
              >
                <MDBCardBody>
                  <MDBCardTitle>{job.company_name}</MDBCardTitle>
                  <MDBCardText>{job.title}</MDBCardText>
                  <Link to={newTo}>
                    <MDBBtn color="success" size="sm">
                      Check it out!
                    </MDBBtn>
                  </Link>
                </MDBCardBody>
              </MDBCard>
            );
          })}
        </MDBContainer>
      </div>
    );
  }
}

export default withAuth(Search);
