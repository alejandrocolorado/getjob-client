import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";

class Login extends Component {
  state = { email: "", password: "" };

  handleFormSubmit = (event) => {
    event.preventDefault();
    event.target.className += " was-validated";
    const { email, password } = this.state;
    //console.log('Login -> form submit', { email, password });
    this.props.login({ email, password });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="js-content section cover">
        <MDBContainer>
          <MDBRow>
            <MDBCol>
              <form
                className="needs-validation"
                noValidate
                onSubmit={this.handleFormSubmit}
              >
                <p
                  style={{ fontWeight: "bold" }}
                  className="h4 text-center mb-4"
                >
                  Log In
                </p>
                <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                  Your Email
                </label>
                <MDBInput
                  type="email"
                  name="email"
                  id="defaultFormLoginEmailEx"
                  className="form-control"
                  value={email}
                  onChange={this.handleChange}
                  required
                />
                <div className="valid-feedback">Looks good!</div>
                <label
                  htmlFor="defaultFormLoginPasswordEx"
                  className="grey-text"
                >
                  Your password
                </label>
                <MDBInput
                  type="password"
                  name="password"
                  id="defaultFormLoginPasswordEx"
                  className="form-control"
                  value={password}
                  onChange={this.handleChange}
                  required
                />
                <div className="text-center mt-4">
                  <MDBBtn color="indigo" type="submit">
                    Login
                  </MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default withAuth(Login);
