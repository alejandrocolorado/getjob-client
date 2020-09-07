import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
import { withAuth } from "../lib/AuthProvider";
import axios from "axios";

export class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      firstname: "",
      lastname: "",
      city: "",
      country: "",
      phone: "",
      linkedin: "",
      image: "",
      user: null,
      messages: "",
    };
  }

 componentDidMount () {

    axios
      .get(`${process.env.REACT_APP_API_URL}/user/profile`, {withCredentials:true})
      .then((response) => {
       
        const {  email,
          firstname,
          lastname,
          city,
          country,
          phone,
          linkedin,
          image } = response.data;
        this.setState({  email,
          firstname,
          lastname,
          city,
          country,
          phone,
          linkedin,
          image, 
        user:response.data });
      })
      .catch((err) => console.log("Error EditUserPage.js, line 15"));   
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
      user,
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
      .put(`${process.env.REACT_APP_API_URL}/user/edit-profile`, {
        email,
        firstname,
        lastname,
        city,
        country,
        phone,
        linkedin,
        image,
        user,
      })
      .then(() => {
        this.setState({
          ...this.state,
          messages: "Success",
        });

        setTimeout(() => {
          this.props.history.push("/profile");
        }, 1500);
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
  fileOnchange = (event) => {
    //Consigue el archivo del form
    const file = event.target.files[0];
    //para enviar el objeto y añadir la imagen
    const uploadData = new FormData();
    uploadData.append("photo", file);

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/upload`, uploadData, {
        withCredentials: true,
      })
      .then((response) => {
        this.setState({
          image: response.data.secure_url,
          disable: false,
        });
      })
      .catch((error) => console.log(error));
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
      
    } = this.state;
    return (
      <div className="js-content section cover">
        <MDBContainer>
          <MDBRow>
            <MDBCol >
              <form onSubmit={this.handleFormSubmit}>
                <p className="h4 text-center mb-4">Edit your profile</p>
                <label
                  htmlFor="defaultFormRegisterNameEx"
                  className="grey-text"
                >
                  Your Name
                </label>
                <MDBInput
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
                <MDBInput
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
                <MDBInput
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  id="defaultFormRegisterEmailEx"
                  className="form-control"
                />
                <br />
                <label
                  htmlFor="defaultFormRegisterPasswordEx"
                  className="grey-text"
                >
                  Your link to Linkedin
                </label>
                <MDBInput
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
                <MDBInput
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
                <MDBInput
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
                  Image
                </label>
                <MDBInput
                  type="file"
                  onChange={this.fileOnchange}
                  id="defaultFormRegisterEmailEx"
                  className="grey-text"
                ></MDBInput>
                <br />
                <br />
                <label
                  htmlFor="defaultFormRegisterEmailEx"
                  className="grey-text"
                >
                  Your Phone
                </label>
                <MDBInput
                  type="number"
                  name="phone"
                  value={phone}
                  onChange={this.handleChange}
                  id="defaultFormRegisterEmailEx"
                  className="form-control"
                />
                <div className="text-center mt-4">
                  <MDBBtn color="unique" value="Save Changes" type="submit">
                    Save Changes
                  </MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <br />
        <p>{this.state.messages}</p>
      </div>
    );
  }
}

export default withAuth(EditProfile);
