import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';


class Signup extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    city: "",
    country: "",
    phone: "",
    linkedin: "",
    image: "",
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const {
      firstname,
      lastname,
      email,
      password,
      city,
      country,
      phone,
      linkedin,
      image,
    } = this.state;
    //console.log('Signup -> form submit', { username, password });
    this.props.signup({
      firstname,
      lastname,
      email,
      password,
      city,
      country,
      phone,
      linkedin,
      image,
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      firstname,
      lastname,
      email,
      password,
      city,
      country,
      phone,
      linkedin,
      image,
    } = this.state;
    return (
      <div>
        <h1>Sign Up</h1>

        <form onSubmit={this.handleFormSubmit}>
          <label>Fisrtname:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />

          <label>Lastname:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />

          <input type="submit" value="Signup" />
        </form>

        <p>Already have account?</p>
        <Link to={"/login"}> Login</Link>
      </div>
    );
  }
}

export default withAuth(Signup);


<MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form>
        <p className="h4 text-center mb-4">Sign up</p>
        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
          Your name
        </label>
        <input type="text" id="defaultFormRegisterNameEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
          Your email
        </label>
        <input type="email" id="defaultFormRegisterEmailEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
          Confirm your email
        </label>
        <input type="email" id="defaultFormRegisterConfirmEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
          Your password
        </label>
        <input type="password" id="defaultFormRegisterPasswordEx" className="form-control" />
        <div className="text-center mt-4">
          <MDBBtn color="unique" type="submit">
            Register
          </MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>

