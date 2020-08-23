import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";


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
            name="firstname"
            value={firstname}
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

