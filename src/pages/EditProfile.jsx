import React, { Component } from "react";

import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import axios from "axios";

export class EditProfile extends Component {
  constructor(props) {
    super(props);

    const { user, logout, isLoggedin } = this.props;

    this.state = {
      email: user.email,
      firstname: user.firstname,
      lastname: user.lastname,
      city: user.city,
      country: user.country,
      phone: user.phone,
      linkedin: user.linkedin,
      image:user.image,
      user,
      messages: ""
    };
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const {
      email,
      firstname,
      lastname,
      city,
      country,
      phone,
      linkedin,
      image,
      user
    } = this.state;
    //console.log('Signup -> form submit', { email, firstname });
    // this.props.signup({
    //   email,
    //   firstname,
    //   lastname,
    //   city,
    //   country,
    //   phone,
    //   linkedin,
    // });

    axios
      .put(`http://localhost:4000/user/edit-profile`, {
        email,
        firstname,
        lastname,
        city,
        country,
        phone,
        linkedin,
        image,
        user
      },)
      .then(() => {
        this.setState({
            ...this.state,
            messages: "Success"
        })

        setTimeout(() => {this.props.history.push("/profile")}, 1500);
    
      })
      .catch((error) => {
        this.setState({
            ...this.state,
            messages: "Error"
        })
      });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      email,
      firstname,
      lastname,
      city,
      country,
      phone,
      linkedin,
      user
    } = this.state;
    return (
      <div>
        <h1>Edit your profile</h1>

        <form onSubmit={this.handleFormSubmit}>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />

          <label>First name:</label>
          <input
            type="text"
            name="firstname"
            value={firstname}
            onChange={this.handleChange}
          />

          <label>Last name:</label>
          <input
            type="text"
            name="lastname"
            value={lastname}
            onChange={this.handleChange}
          />

          <label>City:</label>
          <input
            type="text"
            name="city"
            value={city}
            onChange={this.handleChange}
          />

          <label>Country:</label>
          <input
            type="text"
            name="country"
            value={country}
            onChange={this.handleChange}
          />

          <label>Phone number:</label>
          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={this.handleChange}
          />

          <label>LinkedIn:</label>
          <input
            type="text"
            name="linkedin"
            value={linkedin}
            onChange={this.handleChange}
          />

        

          <input type="submit" value="Save Changes" />
        </form>
        
        <p>{this.state.messages}</p>
      </div>
    );
  }
}

export default withAuth(EditProfile);
