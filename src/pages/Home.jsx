import React from 'react'
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

function Home() {
  return (
    <div> 
      <img src={"./images/Picture1.png"} alt="getjob logo" style={{width: 400}}/>
      <h1>Job hunting made easy</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus lacus, vulputate eget porta quis, interdum eget leo. Maecenas blandit elit at arcu sodales mollis. </p>
      <button>
        <Link to="/signup">Sign Up</Link>
      </button>
      <button>
        <Link to="/login">Log In</Link>
      </button>
    </div>

  )
}

export default Home;