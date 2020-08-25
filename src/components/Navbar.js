import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import {
    faUser,
    faFolderMinus,
    faUserPlus,
    faSignInAlt,
    faSearch,
   
  } from "@fortawesome/free-solid-svg-icons";

class Navbar extends Component {
  render() {
    const { isLoggedin } = this.props;
    return (
      <div>
      <ul className=" js-content menu">
        {isLoggedin ? (
          <>
            <li className="js-content">
              <Link to={"/profile"}>
                <FontAwesomeIcon
                  className="icons"
                  icon={faUser}
                  style={{ style: "none" }}
                />
              </Link>
            </li>
            <li className="js-content">
              <Link to={"/options"}>
                <FontAwesomeIcon
                  className="icons"
                  icon={faSearch}
                  style={{ style: "none" }}
                />
              </Link>
            </li>
         
            <li className="js-content">
              <Link to={"/portfolio"}>
                <FontAwesomeIcon
                  className="icons"
                  icon={faFolderMinus}
                  style={{ style: "none" }}
                />
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="js-content logout">
              <Link to={"/signup"}>
                <FontAwesomeIcon
                  className="icons"
                  icon={faUserPlus}
                  style={{ style: "none" }}
                />
              </Link>
            </li>
            <li className="js-content logout">
              <Link to={"/login"}>
                <FontAwesomeIcon
                  className="icons"
                  icon={faSignInAlt}
                  style={{ style: "none" }}
                />
              </Link>
            </li>
          </>
        )}
      </ul>
      </div>
    );
  }
}

export default withAuth(Navbar);
