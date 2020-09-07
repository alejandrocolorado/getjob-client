import React, { Component } from "react";
import { MDBBtn, MDBBtnGroup} from "mdbreact";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

export class Profile extends Component {
  render() {
    const { user, logout} = this.props;
   
    return (
      
        <div id="profile">
          <div
            style={{ backgroundImage: `url(${user.image})` }}
            className="profile-pic"
          ></div>

          <Link className='buttons-edit' to={"/edit-profile"}>
            <MDBBtn color="dark-green" size="sm">
              Edit Profile
            </MDBBtn>
          </Link>
       
              <MDBBtnGroup vertical className='profile-btn-wrapper'>
                <Link to={"/pending"}>
                  <MDBBtn className="text-dark profile-button" color="light-grey" size="sm">
                    Pending Applications
                  </MDBBtn>
                </Link>
                <Link to={"/completed"}>
                  <MDBBtn className="text-dark profile-button" color="light-grey" size="sm">
                    Completed Applications
                  </MDBBtn>
                </Link>
                <Link to={"/portfolio"}>
                  <MDBBtn className="text-dark profile-button" color="light-grey" size="sm">
                    Go To Portfolio
                  </MDBBtn>
                </Link>
              </MDBBtnGroup>
        
          <Link className='buttons-logout' to={"/"}>
          <br/>
            <MDBBtn color="red" size="sm"  onClick={logout}>
              Logout
            </MDBBtn>
          </Link>
        </div>
      
    );
  }
}

export default withAuth(Profile);
