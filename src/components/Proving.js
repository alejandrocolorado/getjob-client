import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

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
        <MDBContainer>
          <MDBRow>
            <MDBCol md="6">
              <form>
                <p className="h4 text-center mb-4">Sign Up</p>
                <label
                  htmlFor="defaultFormRegisterNameEx"
                  className="grey-text"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  value={firstname}
                  onChange={this.handleChange}
                  id="defaultFormRegisterNameEx"
                  className="form-control"
                />
                <br />
                <label
                  htmlFor="defaultFormRegisterEmailEx"
                  className="grey-text"
                >
                  Your Lastname
                </label>
                <input
                  type="text"
                  name="lastname"
                  value={lastname}
                  onChange={this.handleChange}
                  id="defaultFormRegisterEmailEx"
                  className="form-control"
                />
                <br />
                <label
                  htmlFor="defaultFormRegisterEmailEx"
                  className="grey-text"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  id="defaultFormRegisterEmailEx"
                  className="form-control"
                />
                <br />
                <label
                  htmlFor="defaultFormRegisterConfirmEx"
                  className="grey-text"
                >
                  Your Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                  id="defaultFormRegisterConfirmEx"
                  className="form-control"
                />
                <br />
                <label
                  htmlFor="defaultFormRegisterPasswordEx"
                  className="grey-text"
                >
                  Your link to Linkedin
                </label>
                <input
                  type="password"
                  type="text"
                  name="linkedin"
                  value={linkedin}
                  onChange={this.handleChange}
                  id="defaultFormRegisterPasswordEx"
                  className="form-control"
                />
                <br />
                <label
                  htmlFor="defaultFormRegisterEmailEx"
                  className="grey-text"
                >
                  Your City
                </label>
                <input
                  type="text"
                  name="city"
                  value={city}
                  onChange={this.handleChange}
                  id="defaultFormRegisterEmailEx"
                  className="form-control"
                />
                <br />
                <label
                  htmlFor="defaultFormRegisterEmailEx"
                  className="grey-text"
                >
                  Your Country
                </label>
                <input
                  type="text"
                  name="country"
                  value={country}
                  onChange={this.handleChange}
                  id="defaultFormRegisterEmailEx"
                  className="form-control"
                />
                <br />
                <label
                  htmlFor="defaultFormRegisterEmailEx"
                  className="grey-text"
                >
                  Your Phone
                </label>
                <input
                  type="number"
                  name="phone"
                  value={phone}
                  onChange={this.handleChange}
                  id="defaultFormRegisterEmailEx"
                  className="form-control"
                />
                <br />
                <label
                  htmlFor="defaultFormRegisterEmailEx"
                  className="grey-text"
                >
                  Your Image
                </label>
                <input
                  type="number"
                  name="phone"
                  value={phone}
                  onChange={this.handleChange}
                  id="defaultFormRegisterEmailEx"
                  className="form-control"
                />
                <div className="text-center mt-4">
                  <MDBBtn color="unique" value="Signup" type="submit">
                    Register
                  </MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        ;
      </div>
    );
  }
}

export default withAuth(Signup);
