import React, { Component } from "react";
import { MDBBtn, MDBBtnGroup, MDBRow, MDBCol } from "mdbreact";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

export class Profile extends Component {
  render() {
    const { user, logout, isLoggedin } = this.props;
    console.log(user);
    return (
      <div className="js-content section cover">
        <div id="profile">
          <div
            style={{ backgroundImage: `url(${user.image})` }}
            className="profile-pic"
          ></div>
          <MDBRow center>
            <MDBCol xl="2" lg="3" md="4" className="mb-md-0 mb-4">
              <MDBBtnGroup vertical>
                <Link to={"/edit-profile"}>
                  <MDBBtn color="dark-green" size="sm">
                    Edit Profile
                  </MDBBtn>
                </Link>
                <MDBBtn color="amber">Button</MDBBtn>
                <MDBBtn color="amber">Button</MDBBtn>
                <MDBBtn color="amber">Button</MDBBtn>
                <MDBBtn color="amber">Button</MDBBtn>
                <MDBBtn color="amber">Button</MDBBtn>
              </MDBBtnGroup>
            </MDBCol>
          </MDBRow>
        </div>
      </div>
    );
  }
}

export default withAuth(Profile);
