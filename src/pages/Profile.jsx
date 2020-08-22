import React, { Component } from 'react'

import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

export class Profile extends Component {
    render() {
        const { user, logout, isLoggedin } = this.props;
        console.log(user)
        return (
            <div>

        
            <img src={`${user.image}`} style={{width: 100}}/>
            <p className='navbar-user'>Hello!: {user.firstname}</p>
         
            <Link to='/login'>
              <button className='navbar-button'>Edit your profile</button>
            </Link>
            <br />
            <Link to='/signup'>
              <button className='navbar-button'>Pending Applications</button>
            </Link>
            <br />
            <Link to='/signup'>
              <button className='navbar-button'>Completed Applications</button>
            </Link>
            <br />
            <Link to='/signup'>
              <button className='navbar-button'>Portfolio</button>
            </Link>
            <br />
            <button className='navbar-button' onClick={logout}>
              Logout
            </button>
            
          
       
            </div>
        )
    }
}

export default withAuth(Profile)
